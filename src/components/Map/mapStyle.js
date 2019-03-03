function createMap() {
    var opts = {
        center: {
            lat: 59.479512,
            lng: 18.307084,
        },
        zoom: 15,
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
    };


    opts.clickableIcons = false;
    opts.disableDoubleClickZoom = true;
    opts.draggable = true;
    opts.keyboardShortcuts = false;
    opts.scrollwheel = false;

    var setControlOptions = function (key, enabled, position, style, mapTypeIds) {
        opts[key + 'Control'] = enabled;
        opts[key + 'ControlOptions'] = {
            position: google.maps.ControlPosition[position],
            style: google.maps.MapTypeControlStyle[style],
            mapTypeIds: mapTypeIds
        };
    };

    setControlOptions('fullscreen', false, 'DEFAULT', '', null);

    setControlOptions('mapType', false, 'DEFAULT', 'DEFAULT', ["roadmap", "satellite", "terrain"]);

    setControlOptions('rotate', false, 'BOTTOM_RIGHT', '', null);

    setControlOptions('scale', false, '', '', null);

    setControlOptions('streetView', false, 'DEFAULT', '', null);

    setControlOptions('zoom', false, 'BOTTOM_RIGHT', '', null);


    var map = new google.maps.Map(document.getElementById('map'), opts);

    (function () {
        var markerOptions = {
            map: map,
            position: {
                lat: 59.480987,
                lng: 18.2949,
            }
        };

        markerOptions.icon = {
            url: 'https://snazzy-maps-cdn.azureedge.net/assets/marker-1a2c7063-1443-4f87-98c4-85c16824b2fd.gif',
            scaledSize: new google.maps.Size(
                64,
                64),
            size: new google.maps.Size(
                64,
                64),
            anchor: new google.maps.Point(
                32,
                45)
        };
        markerOptions.options = {
            optimized: false,
        };

        var marker = new google.maps.Marker(markerOptions);


    })();


}