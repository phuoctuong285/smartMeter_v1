import React from 'react'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Input,AlertDialog,Select,ProgressCircular} from 'react-onsenui'
import {notification,modal} from 'onsenui'
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
import {Glyphicon,Button,DropdownButton} from 'react-bootstrap'
import $ from 'jquery'
import DetailPageContainer from '../detail/DetailPageContainer.jsx'
import LoginPageContainer from '../login/LoginPageContainer.react.js'
import MapModal from '../element/mapModal.react.js'
import MapDirection from '../element/map/MapDirections.react.js'
import CustomDatePicker from '../element/CustomDatePicker.jsx'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Storage from '../../helpers/storage.js'

const reportsData = [{address:'7 Phan Văn Hớn,Tân Thới Nhất, Quận 12, Hồ Chí Minh'},
{address:'106 Trường Chinh, Tân Hưng Thuận, Quận 12, Hồ Chí Minh, Vietnam'},
{address:'36 Tây Thạnh, Hồ Chí Minh, Việt Nam,Tây Thạnh,Tân Phú,Hồ Chí Minh , Vietnam'}]

const  renderToolbar = (navigator) => {
    return (
      <Toolbar className='toolbar-color'>
         <div className="text-color center">作業報告</div>
          <div className='right'><a className='padding-space' id='logout'
                onClick={() => {
                    Storage.removeAll()
                    navigator.replacePage({component:LoginPageContainer})
                  }}>
                  <span className='text-color'>ログアウト</span></a></div>
      </Toolbar>
    );
  }
  const RowButtons = ({users=[],dateValue,valueFilter,valueUsers,timeSearch,onChangeDate,onChangeFilter,onChangeUser}) => {
    return (
      <Row style={{height:'5%'}}>
        <DatePicker
          selected={moment(dateValue,'YYYY-MM-DD')}
          onChange={onChangeDate}
          locale="jp"
          dateFormat='YYYY-MM-DD'
          className='custom-date-picker'
        />
        <select id='choose-sel-name' value={valueUsers} onChange={onChangeUser} className='selector'>
          {
            users.map(each =>  (<option key={each.staff_Code} value={each.staff_Name}>{each.staff_Name}</option>))
          }
        </select>
        <select className='selector' onChange={onChangeFilter}>
            <option value="">全て</option>
            <option value="0">未着手</option>
            <option value="1">PR配布</option>
            <option value="2">作業開始</option>
            <option value="3">作業完了</option>
        </select>
      </Row>
    )
  }
  const TableList = ({changePosition,data1,navigator,showMapModal,handleSizePerPageListChange,sizePerPage}) => {
    const  formatCellId = (cell,row) => {
      return (<a onClick={() => {navigator.pushPage({component:DetailPageContainer,id:row.id})}}>{cell}</a>)
    }
    const formatCellLocation = (cell,row) => {
      return (<div onClick={() => showMapModal(row.address)}> <Button className='btn-custom-map'>
        <Glyphicon className='blue-icon' glyph="glyphicon glyphicon-map-marker"/></Button> {cell}</div>)
    }
    const formatCellAction = (cell,row, enumObject, index) => {

    return (<Row>
        <Button className='align-right btn-sm'onClick={()=>{changePosition(index,index - 1)}}>
          <Glyphicon glyph="glyphicon glyphicon-arrow-up" /></Button>
        <Button className='mdm btn-sm' onClick={()=>{changePosition(index,index + 1)}}>
            <Glyphicon glyph="glyphicon glyphicon-arrow-down" />
          </Button>
      </Row>)
    }

    const renderShowsTotal = (start,to,total) => {
      return (
          <span className='align-right-10'>表示件数変更</span>
      )
    }

    const options = {
      paginationShowsTotal:renderShowsTotal,
      sizePerPageList: [ {
        text: '4', value: 4
      }, {
        text: '8', value: 8
      },{
        text: '10', value: 10
      }],
      sizePerPage:sizePerPage,
      onSizePerPageList:(sizePerPage) => {
        handleSizePerPageListChange(sizePerPage)
      }
    }

    return (
      <BootstrapTable data={data1} tableHeaderClass='td-header' striped hover pagination options={options}>
            <TableHeaderColumn isKey dataField='id' columnClassName='tr-id' dataFormat={formatCellId}>お客様番号</TableHeaderColumn>
            <TableHeaderColumn dataField='address' columnClassName='tr-address' dataFormat={formatCellLocation}> 住所</TableHeaderColumn>
            <TableHeaderColumn dataField='name' columnClassName='tr-name'>氏名</TableHeaderColumn>
            <TableHeaderColumn dataField='status_Name' columnClassName='tr-status-name'>ステータス</TableHeaderColumn>
            <TableHeaderColumn dataField='button' columnClassName='tr-button' dataFormat={formatCellAction}>並べ替え</TableHeaderColumn>
      </BootstrapTable>
    )
  }


const ListPage = ({isShowMap,isHide,handleSizePerPageListChange,handleHideMap,handleShowMap,currentAddress,showMapModal,toggleModal,isShowModal,changePosition,reports,reportsTmp,sizePerPage,dateValue,valueFilter,valueUsers,navigator,listUser,listReport,onChangeDate,onChangeFilter,onChangeUser}) => {
  return (<Page className='back-ground-page margin-navigator' renderToolbar={renderToolbar.bind(this,navigator)}>
    <RowButtons users={listUser.users}
                dateValue={dateValue}
                valueFilter={valueFilter}
                valueUsers={valueUsers}
                onChangeDate={onChangeDate}
                onChangeFilter={onChangeFilter}
                onChangeUser={onChangeUser}   />
              {listUser.isLoading || listReport.isLoading ? <ProgressCircular className='center-block' indeterminate /> : <TableList sizePerPage={sizePerPage} handleSizePerPageListChange={handleSizePerPageListChange} data1={reports} showMapModal={showMapModal} changePosition={changePosition} navigator={navigator}/>}
     <div className='padding-space'>
       {!isShowMap && <Button bsStyle="primary" onClick={() => handleShowMap()}> ルート表示 </Button>}
      {isShowMap && <Button bsStyle="primary" onClick={() => handleHideMap()}> {isHide ? '表示' : '不表示'} </Button>}
     </div>
       <MapModal address={currentAddress} isOpen={isShowModal} toggleModal={toggleModal}/>

         <Row>
            {reports.length > 0 && isShowMap && !isHide ? <MapDirection Addresses={reports} /> : <div></div>}
         </Row>

  </Page>)}
export default ListPage
