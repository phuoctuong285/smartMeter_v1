import React from 'react'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Input,AlertDialog,Select,ProgressCircular} from 'react-onsenui'
import {notification,modal} from 'onsenui'
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
import {Glyphicon,Button,DropdownButton} from 'react-bootstrap'
import DetailPageContainer from '../detail/DetailPageContainer.react.js'
import LoginPageContainer from '../login/LoginPageContainer.react.js'
import MapModal from '../mapModal.react.js'
import MapElement from '../mapElement.react.js'
import $ from 'jquery'

const  renderToolbar = (navigator) => {
    return (
      <Toolbar className='toolbar-color'>
        <div className="text-color center">List Page</div>
      </Toolbar>
    );
  }
  const RowButtons = ({users=[],dateValue,valueFilter,valueUsers,timeSearch,onChangeDate,onChangeFilter,onChangeUser}) => {
    return (
      <Row>
        <input type='date' value={dateValue} onChange={onChangeDate} className='date-picker' />
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
  const TableList = ({changePosition,data1,navigator,showMapModal}) => {
    const  formatCellId = (cell,row) => {
      return (<a onClick={() => {navigator.pushPage({component:DetailPageContainer})}}>{cell}</a>)
    }
    const formatCellLocation = (cell,row) => {
      return (<div> <Button className='btn-custom-map' onClick={()=>showMapModal(row.address)}>
        <Glyphicon className='blue-icon' glyph="glyphicon glyphicon-map-marker"/></Button> {cell}</div>)
    }
    const formatCellAction = (cell,row, enumObject, index) => {

      return (<Row>
        <Button className='align-right'onClick={()=>{changePosition(index,index - 1)}}>
          <Glyphicon glyph="glyphicon glyphicon-arrow-up" /></Button>
        <Button className='mdm' onClick={()=>{changePosition(index,index + 1)}}>
            <Glyphicon glyph="glyphicon glyphicon-arrow-down" />
          </Button>
      </Row>)
    }

    return (
      <BootstrapTable data={data1} tableHeaderClass='td-header'  striped hover pagination>
            <TableHeaderColumn isKey dataField='id' columnClassName='tr-id' dataFormat={formatCellId} >お客様番号</TableHeaderColumn>
            <TableHeaderColumn dataField='address' columnClassName='tr-address' dataFormat={formatCellLocation}> 住所</TableHeaderColumn>
            <TableHeaderColumn dataField='name' columnClassName='tr-name' >氏名</TableHeaderColumn>
            <TableHeaderColumn dataField='status_Name' columnClassName='tr-status-name'>ステータス</TableHeaderColumn>
            <TableHeaderColumn dataField='button' columnClassName='tr-button' dataFormat={formatCellAction} >並べ替え</TableHeaderColumn>
      </BootstrapTable>
    )
  }

const ListPage = ({currentAddress,showMapModal,toggleModal,isShowModal,changePosition,reports,dateValue,valueFilter,valueUsers,navigator,listUser,listReport,onChangeDate,onChangeFilter,onChangeUser}) => {
  console.log('Location',location)
  return (<Page className='back-ground-page' renderToolbar={renderToolbar.bind(this,navigator)}>
    <RowButtons users={listUser.users}
                dateValue={dateValue}
                valueFilter={valueFilter}
                valueUsers={valueUsers}
                onChangeDate={onChangeDate}
                onChangeFilter={onChangeFilter}
                onChangeUser={onChangeUser}   />
              {listUser.isLoading || listReport.isLoading ? <ProgressCircular className='center-block' indeterminate /> : <TableList data1={reports} showMapModal={showMapModal} changePosition={changePosition} navigator={navigator}/>}
     <div className='padding-space'>
       <Button bsStyle="primary"> ルート表示 </Button>
     </div>
     <MapModal address={currentAddress} isOpen={isShowModal} toggleModal={toggleModal}/>
     <Row>
       {reports.length > 0 ? <MapElement address={reports[0].address} /> : <div></div>}
     </Row>

  </Page>)}
export default ListPage
