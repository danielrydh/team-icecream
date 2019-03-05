import React, { Component, Fragment } from "react";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import cats from '../../constants/cats';
import L from 'leaflet';


const grey_cat = L.icon({
  iconUrl: cats.find(cat => cat.name === 'grey').animations.idle,
  iconSize: [35, 35], // size of the icon
  //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  //tooltipAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

class LocatedTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      browserCoords: null,
      dbCoords: null,
      currentUser: null,
      markers: []

    };
    this.userId = this.props.authUser.uid;
    this.username = this.props.authUser.username;
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
    console.log(this.userId);
    this.props.firebase
      .user(this.userId)
      .child("position")
      .on("value", snapshot => { //if we want to see all users... we have to use .on()
        const userPosition = snapshot.val();

        this.setState({ dbCoords: userPosition });
        //this.updatePosition(userPosition);

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

        const userMarkers = usersList.filter(
          user => (user.isLoggedIn))
          .map(user => ({
            ...user.position,
            name: user.displayName
          }));

        this.setState({
          markers: userMarkers,
        });

      });

    // get other stuff
  }

  getUserNameFromDB = () => {
    this.setState({ currentUser: this.userName });
  };

  writeUserPositionToDB = position => {
    const { latitude, longitude } = position;

    this.props.firebase
      .user(this.userId)
      .update({ position: { latitude: latitude, longitude: longitude }, isLoggedIn: true });
    this.getUserPositionFromDB();
  };

  componentDidMount() {
    this.props.firebase
      .user(this.userId)
      .update({ isLoggedIn: true });
    this.getUserPositionFromDB();
    this.getUserNameFromDB();
    this.getAllUserPositionsFromDB();
    //this.getUserDataFromDB();

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
      .user(this.userId)
      .update({ isLoggedIn: false });
    this.props.firebase
      .users().off();
  }

  render() {

    const markers = [];
    markers.push(...this.state.markers);
    //markers.push({ ...this.state.browserCoords, name: this.state.currentUser });


    return (
      <Fragment>
        {this.state.browserCoords ? (
          <MyMap
            markers={markers}
            position={Object.values(this.state.browserCoords)}
            zoom={13}
          />
        ) : null}
        {/* <div>Geolocation</div>
                <div>
                    <p>Coords from Browser</p>
                    <Coords position={this.state.browserCoords} />
                    <p>Coords from DB</p>
                    <Coords position={this.state.dbCoords} />
                </div> */}
      </Fragment>
    );
  }
}

const Coords = props => (
  <div>
    {props.position ? (
      <div>
        <div>{props.position.latitude}</div>
        <div>{props.position.longitude}</div>
      </div>
    ) : null}
  </div>
);

const MapStyles = {
  height: '100%'
}

const MyMap = props => (
  <Map
    zoomControl={true}
    scrollWheelZoom={false}
    center={props.position}
    zoom={props.zoom}
    style={MapStyles}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />
    {props.markers.map((marker, index) => (
      <Marker key={index} position={Object.values(marker)} icon={grey_cat} >
        <Tooltip>{marker.name}</Tooltip>
      </Marker>
    ))}
  </Map>
);
export default LocatedTwo;
