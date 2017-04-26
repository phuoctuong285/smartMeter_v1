import React from 'react'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Input,AlertDialog,Select} from 'react-onsenui'
import {notification} from 'onsenui'
import autoBind from 'react-autobind'
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
import {Glyphicon,Button,DropdownButton} from 'react-bootstrap'
import DetailPageContainer from '../detail/DetailPageContainer.react.js'
import LoginPageContainer from '../login/LoginPageContainer.react.js'

const  renderToolbar = (navigator) => {
    return (
      <Toolbar>
        <div className="center">List Page</div>
      </Toolbar>
    );
  }
  const RowButtons = ({users,dateValue,valueFilter,valueUsersusers,timeSearch,onChangeDate,onChangeFilter,onChangeUser}) => {
    return (
      <Row>
        <input type='date' value={dateValue} onChange={onChangeDate} className='date-picker' />
        <select id='choose-sel-name' onChange={onChangeUser} className='selector'>
          {
            users.map(each =>  (<option key={each.staff_Code} value={each.staff_Name}>{each.staff_Name}</option>))
          }
        </select>
        <select className='selector' onChange={onChangeFilter}>
            <option value="0">全て</option>
            <option value="1">未着手</option>
            <option value="2">PR配布</option>
            <option value="3">作業開始</option>
            <option value="4">作業完了</option>
        </select>
      </Row>
    )
  }
  const TableList = ({data1,navigator}) => {
    const  formatCellId = (cell,row) => {
      return (<a onClick={() => {navigator.pushPage({component:DetailPageContainer})}}>{cell}</a>)
    }
    const formatCellLocation = (cell,row) => {
      return (<div> <Button onClick={()=>{alert("Map")}}><Glyphicon glyph="glyphicon glyphicon-map-marker"/></Button> {cell}</div>)
    }
    const formatCellAction = (cell,row) => {
      return (<Row>
        <Button className='align-right'><Glyphicon glyph="glyphicon glyphicon-arrow-up" /> </Button>
        <Button className='mdm'><Glyphicon glyph="glyphicon glyphicon-arrow-down" /> </Button>
      </Row>)
    }

    return (
      <BootstrapTable data={data1} striped hover pagination>
            <TableHeaderColumn isKey dataField='id' dataFormat={formatCellId} className='td-header'>お客様番号</TableHeaderColumn>
            <TableHeaderColumn dataField='address' dataFormat={formatCellLocation} className='td-header'> 住所</TableHeaderColumn>
            <TableHeaderColumn dataField='name' className='td-header'>氏名</TableHeaderColumn>
            <TableHeaderColumn dataField='status_Name'className='td-header'>ステータス</TableHeaderColumn>
            <TableHeaderColumn dataField='button' dataFormat={formatCellAction} className='td-header'>並べ替え</TableHeaderColumn>
      </BootstrapTable>
    )
  }

const ListPage = ({dateValue,valueFilter,valueUsers,navigator,listUser,listReport,onChangeDate,onChangeFilter,onChangeUser}) => {
  return (<Page renderToolbar={renderToolbar.bind(this,navigator)}>
    <RowButtons users={listUser.users}
                dateValue={dateValue}
                valueFilter={valueFilter}
                valueUsers={valueUsers}
                onChangeDate={onChangeDate}
                onChangeFilter={onChangeFilter}
                onChangeUser={onChangeUser}   />
    <TableList data1={listReport.reports} navigator={navigator}/>
    <div className='padding-space'>
      <Button bsStyle="primary"> ルート表示 </Button>
    </div>
  </Page>)}
export default ListPage
