import React from 'react'
import PropTypes from 'prop-types'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Button,Input,AlertDialog} from 'react-onsenui'
import {Glyphicon,Modal} from 'react-bootstrap'

class mapModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: 48.858608,
      lng: 2.294471
    }
  }

  changeLatLngState(lat,lng){
    this.setState({lat:lat,lng:lng})
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
            // this.setState({lat:results[0].geometry.location.lat(),
            //                 lng:results[0].geometry.location.lng()})
            this.changeLatLngState(results[0].geometry.location.lat(),results[0].geometry.location.lng())
            } else {
              alert("位置情報が取得できませんでした。")
            }
          }
        )
      }

  componentDidMount(){

   }
   componentWillReceiveProps(nextProps){
    this.drawMap(nextProps.address)
   }
  render() {
    const {isOpen,toggleModal} = this.props
    const {lat,lng} = this.state
    return (
    <Modal show={isOpen} onHide={() => toggleModal(false)}>
       <Modal.Header closeButton >
          <Modal.Title>Map</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <div ref="map" id="map_canvas" ></div>
       </Modal.Body>
        <img src={`https://maps.googleapis.com/maps/api/staticmap?zoom=16&size=590x320&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lng}&key=AIzaSyA8rg6xtP_C6QlQAs3YFFRQ0vS63p9B794`} />
       <Modal.Footer>
         <Button onClick={() => toggleModal(false)}>Close</Button>
       </Modal.Footer>
     </Modal>
    )
  }
}
export default mapModal

mapModal.propTypes = {
  isOpen:PropTypes.bool,
  toggleModal:PropTypes.func,
  address:PropTypes.string
}
