import React, { Component } from "react";
import { number, string } from "prop-types";

export const { Provider, Consumer } = React.createContext();

export const locationConsumer = Component => props => {
    return <Consumer>{ctx => <Component {...ctx} {...props} />}</Consumer>;
};

class LocationProvider extends Component {
    defaultTimeout = 10 * 1000; // defaults to a 10s tiemout
    defaultTimeoutMessage = "It took too long to get your location. Try again.";

    state = {
        geolocation: {
            latitude: null,
            longitude: null
        },
        loading: false,
        geoLoc: navigator.geolocation || null,
        error: null,
        watcher: null,
        timeout: null
    };

    componentWillMount() {
        this.setState({
            loading: true
        });
    }

    componentDidMount() {
        this.getLocation();
    }

    clearWatch = () => {
        const { geoLoc, watcher, timeout } = this.state;
        geoLoc.clearWatch(watcher);
        clearTimeout(timeout);

        this.setState({
            watcher: null,
            timeout: null
        });
    };

    handleLocationSuccess = ({ coords: { latitude, longitude } }) => {
        //this.clearWatch();
        this.setState({
            geolocation: {
                latitude,
                longitude
            },
            loading: false,
            error: null
        });
    };

    handleLocationError = error => {
        //this.clearWatch();
        this.setState({
            loading: false,
            error
        });
    };

    getLocation = () => {
        const { geoLoc } = this.state;

        const timeout = setTimeout(() => {
            //this.clearWatch();
            this.setState({
                loading: false,
                error: this.props.timeoutMessage || this.defaultTimeoutMessage
            });
        }, this.props.timeout || this.defaultTimeout);

        this.setState({
            timeout
        });

        if (geoLoc) {
            const locationWatchId = geoLoc.watchPosition(this.handleLocationSuccess);
            this.setState({
                loading: true,
                error: null,
                watcher: locationWatchId
            });
        } else {
            //this.clearWatch();
            this.setState({
                error: "Geolocation is not currently supported by your browser."
            });
        }
    };

    cancel = (message = null) => {
        const error = this.state.timeout
            ? message || "Get Location canceled by user input."
            : this.state.error;
        this.clearWatch();
        this.setState({
            loading: false,
            error
        });
    };

    render() {
        return (
            <Provider
                value={{
                    ...this.state,
                    getLocation: this.getLocation,
                    cancel: this.cancel
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

LocationProvider.propTypes = {
    timeout: number,
    timeoutMessage: string
};

export default LocationProvider;
