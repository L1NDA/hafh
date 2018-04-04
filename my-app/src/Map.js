import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react'
var map_src = require('./img/map.png');

export class MapContainer extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedPlace: null
        }
      }

    render() {
        const style = `
            user-select: false;

        `

        return (
            <div>
                <img src={map_src} width="100%" height="100%" className="map" onclick="return false"/>
            </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDbliwGlLHxonKMdl1BCULm7ZbTxOm_bDE'
})(MapContainer)
