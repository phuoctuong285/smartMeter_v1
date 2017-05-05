import React from 'react'
import PropTypes from 'prop-types'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Button,Input,AlertDialog} from 'react-onsenui'
import {notification} from 'onsenui'
import {Glyphicon,Modal} from 'react-bootstrap'
import MapMaker from './map/mapMaker.react.js'

class mapModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      address: this.props.address
    }
  }
   componentWillReceiveProps(nextProps){
    this.setState({address:nextProps.address})
   }
  render() {
    const {isOpen,toggleModal} = this.props
    const {address} = this.state
    return (
    <Modal show={isOpen} onHide={() => toggleModal(false)}>
       <Modal.Header closeButton >
          <Modal.Title>地図表示</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <MapMaker address={address}  />
       </Modal.Body>
       <Modal.Footer>
         <Button onClick={() => toggleModal(false)}>閉じる</Button>
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
