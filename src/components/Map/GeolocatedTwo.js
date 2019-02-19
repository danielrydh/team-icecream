import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import cats from '../../constants/cats';
import L from 'leaflet';

const grey_cat = L.icon({
    iconUrl: cats.grey.idle,
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
            currentUser: null

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
            .on("value", snapshot => { //if we want to see all users... we have to use .on()
                const userPosition = snapshot.val();
                console.log(JSON.parse(JSON.stringify(userPosition)));
                this.setState({ dbCoords: userPosition });
            });
    };

    // getUserDataFromDB = () => {
    //     this.props.firebase
    //         .user(this.props.userId)
    //         .on("value", snapshot => { //if we want to see all users... we have to use .on()
    //             const userData = snapshot.val();
    //             console.log(JSON.parse(JSON.stringify(userData)));
    //             this.setState({ db: userData });
    //         });
    // };

    getUserNameFromDB = () => {
        this.props.firebase
            .user(this.props.userId)
            .child("username")
            .on("value", snapshot => {
                const userName = snapshot.val();
                console.log(JSON.parse(JSON.stringify(userName)));
                this.setState({ currentUser: userName });
            });
    };

    writeUserPositionToDB = position => {
        const { latitude, longitude } = position;

        this.props.firebase
            .user(this.props.userId)
            .update({ position: { latitude: latitude, longitude: longitude } });
        //this.setState({ dbCoords: position });
        this.getUserPositionFromDB();
    };

    componentDidMount() {
        this.getUserPositionFromDB();
        this.getUserNameFromDB();
        // this.getUserDataFromDB();

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
    }

    render() {
        const markers = [
            // { latitude: 59.316607, longitude: 18.034689 },
            // { latitude: 59.307496, longitude: 17.985272 },
            // { latitude: 59.305496, longitude: 17.985272 }
        ];
        markers.push(this.state.browserCoords);




        return (
            <div>
                {this.state.browserCoords ? (
                    <MyMap
                        markers={markers}
                        position={Object.values(this.state.browserCoords)}
                        name={this.state.currentUser}
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
            </div>
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

const MyMap = props => (
    <Map
        zoomControl={true}
        scrollWheelZoom={false}
        center={props.position}
        zoom={props.zoom}
    >
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {props.markers.map(marker => (
            <Marker position={Object.values(marker)} icon={grey_cat} >
                <Tooltip>{props.name}</Tooltip>
            </Marker>
        ))}
    </Map>
);
export default LocatedTwo;
