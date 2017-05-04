import React from 'react'
import PropTypes from 'prop-types'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Button,Input,AlertDialog} from 'react-onsenui'
import {notification} from 'onsenui'
import {Glyphicon,Modal} from 'react-bootstrap'
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from 'react-google-maps'

const DirectionsGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={props.center}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

class MapDirection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: 35.5812,
      lng: 135.6457,
      directions: null
    }
  }

  componentDidMount(){
    this.calculateAndDisplayRoute(this.props.Addresses)
  }

  calculateAndDisplayRoute(AddressData){
    const DirectionsService = new google.maps.DirectionsService()
    var waypts = []
       var AddressArray = AddressData
       for (var i = 0; i < AddressArray.length; i++) {
           waypts.push({
             location: AddressArray[i].address,
             stopover: true
           })
       }
     DirectionsService.route({
       origin: AddressArray[0].address,
       destination: AddressArray[AddressArray.length - 1].address,
       waypoints: waypts,
       optimizeWaypoints: true,
       travelMode: google.maps.TravelMode.DRIVING,
     }, (result, status) => {
       if (status === google.maps.DirectionsStatus.OK) {
         this.setState({
           directions: result,
         });
       } else {
         notification.alert({message:`error fetching directions ${result}`})
       }
 })
  }
   componentWillReceiveProps(nextProps){
     this.calculateAndDisplayRoute(nextProps.Addresses)
   }

  render() {
    const {directions,lat,lng} = this.state
    return (
      <DirectionsGoogleMap
        containerElement={
          <div className='center-block' style={{ height: `370px`,width:`100%` }} />
        }
        mapElement={
          <div style={{ height: `100%`,width:`100%` }} />
        }
        center={{lat:lat,lng:lng}}
        directions={this.state.directions}
      />
    )
  }
}
export default MapDirection

MapDirection.propTypes = {
  Addresses:PropTypes.array
}
