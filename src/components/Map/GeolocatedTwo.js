import React, { Component } from "react";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import cats from '../../constants/cats';
import L from 'leaflet';

const cat = (catColor) => {
  return (
    L.icon({
      iconUrl: cats.find(cat => cat.name === catColor).animations.idle,
      iconSize: [35, 35]
    })
  )
}

class LocatedTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      browserCoords: null,
      dbCoords: null,
      currentUser: null,
      currentCat: null,
      markers: [],
    };
  }
  calculateDistance = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // km (change this constant to get miles)
    var dLat = ((lat2 - lat1) * Math.PI) / 180;
    var dLon = ((lon2 - lon1) * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.round(d * 1000);
  };
  updatePosition = position => {
    this.setState({
      browserCoords: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    });

    if (position.coords && this.state.dbCoords) {
      const { latitude: lat1, longitude: lng1 } = position.coords;
      const { latitude: lat2, longitude: lng2 } = this.state.dbCoords;
      const dist = this.calculateDistance(lat1, lng1, lat2, lng2);
      if (dist > 1) {
        this.writeUserPositionToDB(position.coords);
      }
    }
  };

  getUserPositionFromDB = () => {
    this.props.firebase
      .user(this.props.userId)
      .child("position")
      .on("value", snapshot => {
        const userPosition = snapshot.val();
        this.setState({ dbCoords: userPosition });
      });
  };
  getAllUserPositionsFromDB = () => {
    this.props.firebase
      .users().on('value', snapshot => {
        const usersObject = snapshot.val();
        const usersList = Object.keys(usersObject).map(key => ({
          ...usersObject[key],
          uid: key,
        }));

        const userMarkers = usersList
          .filter(user => (user.isLoggedIn))
          .map(user => ({
            ...user.position,
            name: user.displayName,
            cat: user.cat
          }));

        this.setState({
          markers: userMarkers,
        });
      });
  }

  getUserNameFromDB = () => {
    this.props.firebase
      .user(this.props.userId)
      .child("username")
      .on("value", snapshot => {
        const userName = snapshot.val();
        this.setState({ currentUser: userName });
      });
  };

  writeUserPositionToDB = position => {
    const { latitude, longitude } = position;
    this.props.firebase
      .user(this.props.userId)
      .update({ position: { latitude: latitude, longitude: longitude }, isLoggedIn: true });
    this.getUserPositionFromDB();
  };
  componentDidMount() {
    this.props.firebase
      .user(this.props.userId)
      .update({ isLoggedIn: true });
    this.getUserPositionFromDB();
    this.getUserNameFromDB();
    this.getAllUserPositionsFromDB();
    this.watchId = navigator.geolocation.watchPosition(
      this.updatePosition,
      error => {
        console.log("error" + error);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 1
      }
    );

  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
    this.props.firebase
      .user(this.props.userId)
      .update({ isLoggedIn: false });
  }
  render() {
    const markers = [];
    markers.push(...this.state.markers);

    return (
      <div style={{ height: '100%' }}>
        {this.state.browserCoords ? (
          <MyMap
            markers={markers}
            position={Object.values(this.state.browserCoords)}
            zoom={13}
          />
        ) : null}
      </div>
    );
  }
}

const MyMap = props => (
  <Map
    zoomControl={false}
    scrollWheelZoom={true}
    center={props.position}
    zoom={props.zoom}
    style={{ height: '100%' }}
  >
    <TileLayer
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />
    {props.markers.map((marker, index) => (
      <Marker key={index} position={[Object.values(marker)[0], Object.values(marker)[1]]} icon={cat(marker.cat)} >
        <Tooltip>{marker.name}</Tooltip>
      </Marker>
    ))}
  </Map>
);
export default LocatedTwo;