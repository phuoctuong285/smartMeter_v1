import React from 'react'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Button,Input,AlertDialog} from 'react-onsenui'
import {notification} from 'onsenui'
import autoBind from 'react-autobind'
import ListPage from './ListPage.react.js'
import {connect} from 'react-redux'
import ListAPI from '../../api/listPageApi.js'
import Moment from 'moment'

class ListPageContainer extends React.Component {
  constructor(props){
    super(props)
    autoBind(this)
    this.state = {
			dateValue:Moment().format('YYYY/MM/DD'),
			valueFilter:'',
      valueUsers:''
		}
  }
  componentDidMount() {
    this.props.LoadStaff()
    this.props.LoadReport({filter:"",staff:"椛澤宏昭",targetDate:"2017/04/25"})
  }
  onChangeDate(event) {
    console.log("Change Date",event.target.value)
  }
  onChangeUser(event) {
    console.log("Change User",event.target.value)
  }
  onChangeFilter(event) {
    console.log("Change Filter",event.target.value)
  }
  render() {
    return(
     <ListPage {...this.props}
               {...this.state}
       onChangeDate={this.onChangeDate}
       onChangeFilter={this.onChangeFilter}
       onChangeUser={this.onChangeUser}
       navigator={this.props.navigator}/>
    )
  }
}

export default connect(
	(state,ownProps) => {
		return {
			listUser:state.listUserReducer,
      listReport:state.reportsReducer,
			listOwnProps:ownProps
		}
	},

	dispatch => {
    return {
    LoadStaff: () => dispatch(ListAPI.getStaff()),
    LoadReport: (params) => dispatch(ListAPI.getListReports(params))
    }
	}
)(ListPageContainer)
