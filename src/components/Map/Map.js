import React from 'react';
import ReactDOM from 'react-dom';


const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};
export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }
  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: { center },
          zoom: zoom,
          styles: [
            {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                { "visibility": "off" }
              ]
            },
            {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [{ "visibility": "off" }]
            }, {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            }, {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#a1f199" }]
            }, {
              "featureType": "landscape.natural.landcover",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#37bda2" }]
            }, {
              "featureType": "landscape.natural.terrain",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#37bda2" }]
            }, {
              "featureType": "poi.attraction",
              "elementType": "geometry.fill",
              "stylers": [{ "visibility": "on" }]
            }, {
              "featureType": "poi.business",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#e4dfd9" }]
            }, {
              "featureType": "poi.business",
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            }, {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#37bda2" }]
            }, {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#84b09e" }]
            }, {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                { "color": "#fafeb8" },
                { "weight": "1.25" }
              ]
            }, {
              "featureType": "road.highway",
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            }, {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#5ddad6" }]
            }],
          maxZoom: 20,
          minZoom: 0,
          mapTypeId: 'terrain',

        }
      );
      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
    }
  }

  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

  render() {
    const style = Object.assign({}, mapStyles.map);

    return (
      /*       <AuthUserContext.Consumer>
              {authUser => ( */
      <div>
        <div style={style} ref="map">
          Loading map...
        </div>
        {this.renderChildren()}
        {/* <LocatedTwo userId={authUser.uid} firebase={this.props.firebase} /> */}
      </div>
      /*         )}
            </AuthUserContext.Consumer> */
    );

  }
}
//const condition = authUser => !!authUser;

/* export default compose(
  withFirebase,
  withAuthorization(condition)
)(CurrentLocation); */
export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: 59.309761,
    lng: 18.283199
  },
  centerAroundCurrentLocation: false,
  visible: true
};

