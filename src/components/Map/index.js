import React, { Component } from 'react';
import cats from '../../constants/cats';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { key } from '../../key';
import CurrentLocation from './Map';



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const markers = [
      {
        position: {
          lat: 59.308761,
          lng: 18.282199
        },
        title: 'Dolores park',
        icon: {
          url: cats.grey.idle,
          anchor: new this.props.google.maps.Point(32, 32),
          scaledSize: new this.props.google.maps.Size(32, 32)
        }
      },
      {
        position: {
          lat: 59.308761,
          lng: 18.283399
        },
        title: 'Crillzors park',
        icon: {
          url: cats.grey.idle,
          anchor: new this.props.google.maps.Point(32, 32),
          scaledSize: new this.props.google.maps.Size(32, 32)
        }
      }
    ];

    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={'current location'} title={'current location'} icon={{
          url: cats.grey.idle,
          anchor: new this.props.google.maps.Point(32, 32),
          scaledSize: new this.props.google.maps.Size(32, 32)
        }}/>
        {markers.map((marker, index) => <Marker key={index} {...marker} />

        )}
        
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: key
})(MapContainer);