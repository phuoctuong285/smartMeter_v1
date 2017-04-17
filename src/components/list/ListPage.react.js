import React from 'react'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Row,Col,Input,AlertDialog,Select} from 'react-onsenui'
import {notification} from 'onsenui'
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
import {Glyphicon,Button,DropdownButton} from 'react-bootstrap'
import DetailPageContainer from '../detail/DetailPageContainer.react.js'

const  renderToolbar = () => {
    return (
      <Toolbar>
        <div className="center">List Page</div>
      </Toolbar>
    );
  }
  const RowButtons = () => {
    return (
      <Row>
        <input type='date' className='date-picker' />
        <select id='choose-sel-name' className='selector'>
            <option value="basic"></option>
            <option value="basic">Basic</option>
            <option value="material">Material</option>
            <option value="underbar">Underbar</option>
        </select>
        <select className='selector'>
            <option value="basic"></option>
            <option value="basic">Basic</option>
            <option value="material">Material</option>
            <option value="underbar">Underbar</option>
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
            <TableHeaderColumn isKey dataField='id' dataFormat={formatCellId} className='td-header'>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='location' dataFormat={formatCellLocation} className='td-header'> Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='owner' className='td-header'>Product Price</TableHeaderColumn>
            <TableHeaderColumn dataField='cityname'className='td-header'>Product Price</TableHeaderColumn>
            <TableHeaderColumn dataField='button' dataFormat={formatCellAction} className='td-header'>Action</TableHeaderColumn>
      </BootstrapTable>
    )
  }

const ListPage = ({navigator}=props) => (
  <Page renderToolbar={renderToolbar}>
    <RowButtons />
    <TableList data1={products} navigator={navigator}/>
    <div className='padding-space'>
      <Button bsStyle="primary"> Search </Button>
    </div>
  </Page>)
export default ListPage
