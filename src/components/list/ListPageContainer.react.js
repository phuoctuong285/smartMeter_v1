import React from 'react'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Button,Input,AlertDialog} from 'react-onsenui'
import {notification} from 'onsenui'
import autoBind from 'react-autobind'
import ListPage from './ListPage.react.js'

class ListPageContainer extends React.Component {
  constructor(props){
    super(props)
    autoBind(this)
  }

  render() {
    return(
     <ListPage  navigator={this.props.navigator}/>
    )
  }
}

export default ListPageContainer
