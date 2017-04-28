import React from 'react'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Button,Input,AlertDialog} from 'react-onsenui'
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
			dateValue:Moment().format('YYYY-MM-DD'),
			valueFilter:'',
      valueUsers:window.localStorage.getItem('staff_Name'),
      reports:this.props.listReport.reports,
      isShowModal:false,
      currentAddress:''
		}
  }
  componentWillUnmount(){
    console.log('Unmount')
  }
  componentDidMount() {
     console.log('LoadInit')
     this.props.LoadStaff()
     this.props.LoadReport({filter:this.state.valueFilter,
                          staff:this.state.valueUsers,
                          targetDate:this.changeDateFormat(this.state.dateValue)})
  }

  onChangeDate(value) {
    this.props.LoadReport({filter:this.state.valueFilter,
                            staff:this.state.valueUsers,
                            targetDate:this.changeDateFormat(Moment(value).format('YYYY-MM-DD'))})
    this.setState({
      dateValue:Moment(value).format('YYYY-MM-DD')
    })
      // this.props.LoadReport({filter:this.state.valueFilter,
      //                       staff:this.state.valueUsers,
      //                       targetDate:this.changeDateFormat(event.target.value)})
      // this.setState({dateValue:Moment(event.target.value).format('YYYY-MM-DD')})
  }

  onChangeUser(event) {
    console.log('LoadChangeUser')
    this.props.LoadReport({filter:this.state.valueFilter,
                          staff:event.target.value,
                          targetDate:this.changeDateFormat(this.state.dateValue)})
    this.setState({valueUsers:event.target.value})
  }

  onChangeFilter(event) {
    console.log('LoadChangeFilter')
    this.props.LoadReport({filter:event.target.value,
                          staff:this.state.valueUsers,
                          targetDate:this.changeDateFormat(this.state.dateValue)})
    this.setState({valueFilter:event.target.value})
  }
  changePositionArray(indexA,indexB) {
    var arr = Object.assign([],this.state.reports)
    if (indexA >= 0 && indexB >= 0) {
      var temp = arr[indexA]
      arr[indexA] = arr[indexB]
      arr[indexB] = temp
    }
    this.setState({reports:arr})
  }
  changeDateFormat(date) {
    return Moment(date).format('YYYY/MM/DD')
  }
  componentWillReceiveProps(nextProps){
    this.setState({reports:nextProps.listReport.reports})
  }
  toggleModal(value) {
    this.setState({isShowModal:value})
  }
  showMapModal(address) {
      this.setState({isShowModal:true,currentAddress:address})
  }
  render() {
    return(
     <ListPage {...this.props}
               {...this.state}
       showMapModal={this.showMapModal}
       toggleModal={this.toggleModal}
       changePosition={this.changePositionArray}
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
