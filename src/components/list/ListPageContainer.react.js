import React from 'react'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Button,Input,AlertDialog} from 'react-onsenui'
import {notification} from 'onsenui'
import autoBind from 'react-autobind'
import ListPage from './ListPage.react.js'
import {connect} from 'react-redux'
import ListAPI from '../../api/listPageApi.js'

class ListPageContainer extends React.Component {
  constructor(props){
    super(props)
    autoBind(this)
  }
  componentDidMount() {
    this.props.LoadStaff()
  }
  render() {
    return(
     <ListPage {...this.props}  navigator={this.props.navigator}/>
    )
  }
}

export default connect(
	(state,ownProps) => {
		return {
			listInform:state.listReducer,
			listOwnProps:ownProps
		}
	},

	dispatch => {
    return {
    LoadStaff: () => dispatch(ListAPI.getStaff())
    }
	}
)(ListPageContainer)
