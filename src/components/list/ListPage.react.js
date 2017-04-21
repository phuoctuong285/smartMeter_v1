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
  const RowButtons = ({users=[]}) => {
    return (
      <Row>
        <input type='date' className='date-picker' />
        <select id='choose-sel-name' className='selector'>
          {
            users.map(each =>  (<option key={each.staff_Code} value="basic">{each.staff_Name}</option>))
          }
        </select>
        <select className='selector'>
            <option value="basic">全て</option>
            <option value="basic">未着手</option>
            <option value="material">PR配布</option>
            <option value="underbar">作業開始</option>
            <option value="underbar">作業完了</option>
        </select>
      </Row>
    )
  }
  var products = [{
      id: "17-00100-01737-6-0301",
      location: "Ho Chi Minh",
      owner: "Phan Tan Tai",
      cityname: "software"
  }, {
      id: "17-00100-01737-6-0302",
      location: "Ho Chi Minh",
      owner: "Phan Tan Tai",
      cityname: "software"
  }, {
      id: "17-00100-01737-6-0303",
      location: "Ho Chi Minh",
      owner: "Phan Tan Tai",
      cityname: "software"
  }, {
      id: "17-00100-01737-6-0304",
      location: "Ho Chi Minh",
      owner: "Phan Tan Tai",
      cityname: "software"
  }];


  const TableList = ({data1,navigator}) => {
    const  formatCellId = (cell,row) => {
      return (<a onClick={() => {navigator.pushPage({component:DetailPageContainer})}}>{cell}</a>)
    }
    const formatCellLocation = (cell,row) => {
      return (<div><Glyphicon glyph="glyphicon glyphicon-map-marker" /> {cell}</div>)
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
            <TableHeaderColumn dataField='location' dataFormat={formatCellLocation} className='td-header'> 住所</TableHeaderColumn>
            <TableHeaderColumn dataField='owner' className='td-header'>氏名</TableHeaderColumn>
            <TableHeaderColumn dataField='cityname'className='td-header'>ステータス</TableHeaderColumn>
            <TableHeaderColumn dataField='button' dataFormat={formatCellAction} className='td-header'>並べ替え</TableHeaderColumn>
      </BootstrapTable>
    )
  }

const ListPage = ({navigator,listInform}=props) => {
  return (<Page renderToolbar={renderToolbar.bind(this,navigator)}>
    <RowButtons users={listInform.data} />
    <TableList data1={products} navigator={navigator}/>
    <div className='padding-space'>
      <Button bsStyle="primary"> ルート表示 </Button>
    </div>
  </Page>)}
export default ListPage
