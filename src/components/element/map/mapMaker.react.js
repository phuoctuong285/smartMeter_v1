import React from 'react'
import PropTypes from 'prop-types'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Button,Input,AlertDialog} from 'react-onsenui'
import {notification} from 'onsenui'
import {Glyphicon,Modal} from 'react-bootstrap'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'


const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    center={props.center}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
      />
    ))}
  </GoogleMap>
));

class MapMaker extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: 48.858608,
      lng: 2.294471,
      markers: []
    }
  }

  componentDidMount(){
    this.drawMap(this.props.address)
  }

  changeLatLngState(lat, lng){
    let temp = []
    temp.push({
    position: {
      lat: lat,
      lng: lng,
    },
    key: this.props.address,
    defaultAnimation: 2,
  })
    this.setState({markers:temp,lat:lat,lng:lng})
  }

  drawMap(address) {
    var geocoder = new google.maps.Geocoder()
          geocoder.geocode(
          {
            'address': address,
            'region': 'jp'
          },
           (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
            this.changeLatLngState(results[0].geometry.location.lat(),results[0].geometry.location.lng())
            } else {
              notification.alert({message:"位置情報が取得できませんでした。"})
            }
          }
        )
      }

   componentWillReceiveProps(nextProps){
     if (this.props.address != nextProps.address)
     {
         this.drawMap(nextProps.address)
     }
   }

  render() {
    const {markers,lat,lng} = this.state
    return (
     <GettingStartedGoogleMap
       containerElement={
         <div className='center-block' style={{ height: '350px',width: '570px' }} />
       }
       mapElement={
         <div style={{ height: '100%',width:'100%' }} />
       }
       markers={markers}
       center={{lat: lat,lng: lng}}
     />
    )
  }
}
export default MapMaker

MapMaker.propTypes = {
  address:PropTypes.string
}
