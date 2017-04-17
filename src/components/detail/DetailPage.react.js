import React from 'react'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Input,AlertDialog,Row,Col} from 'react-onsenui'
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
import {Glyphicon,Button} from 'react-bootstrap'
import LoginPageContainer from '../login/LoginPageContainer.react.js'

const renderToolbar = (navigator) => (
	<Toolbar>
		<div className='left'><BackButton onClick={() => navigator.popPage()}>Back</BackButton></div>
		<div className='center'>Detail Page</div>
		<div className='right'><a className='padding-space' onClick={() => navigator.resetPage({component:LoginPageContainer})}>Logout</a></div>
	</Toolbar>
)

let data =[{
	code:'17-00100-01737-6-0301',
	name:'No Name',
	description:'No Description'
},{
	code:'17-00100-01737-6-0301',
	name:'No Name',
	description:'No Description'
}]

const DetailPage = ({route,navigator}) => {
	return (
		<Page renderToolbar={renderToolbar.bind(this,navigator)}>
			<div className='detail-page'>
				<div className='detail-page-table'>
					<BootstrapTable headerStyle={{backgroundColor:'#89C4F4'}} data={data} striped hover>
						<TableHeaderColumn dataField='code' isKey={true}><Glyphicon glyph="glyphicon glyphicon-stop" />Column 1</TableHeaderColumn>
						<TableHeaderColumn dataField='name'><Glyphicon glyph="glyphicon glyphicon-stop" />Column 2</TableHeaderColumn>
						<TableHeaderColumn dataField='description'><Glyphicon glyph="glyphicon glyphicon-stop" />Column 3</TableHeaderColumn>
					</BootstrapTable>
				</div>
				<div className='detail-page-description padding-space'>
					<div className='detail-page-description-title'>
						<Glyphicon glyph='glyphicon glyphicon-stop'/>Header Description
					</div>
					<div className='detail-page-description-textarea'>
						<textarea style={{width:'100%',height:'100px'}} placeholder='Type here'/>
					</div>
				</div>
				<div className='detail-page-upload padding-space'>
				 	<Row>
				 		<Col width='50%'>
							<div>
								<Button bsStyle='success' className='align-right'>Primary</Button>
								<Button bsStyle='default' className='align-right'>Primary</Button>
								<Button bsStyle='default' className='align-right'>Primary</Button>
								<Button bsStyle='default' className='align-right'>Primary</Button>
							</div>
							<div className='top-space-bottom'/>
							<div>
								<Button bsStyle='info' 	className='align-right'>Primary</Button>
								<Button bsStyle='info'	className='align-right'>Primary</Button>
							</div>
						</Col>
						<Col width='50%' style={{textAlign:'center'}}>
							<img alt='No Picture' width='200' height='300'/>
						</Col>
					</Row>
				</div>
				<div className='detail-page-note padding-space'>
					<textarea style={{width:'100%',height:'100px'}} placeholder='Type here'/>
				</div>
				<div className='detail-page-submit padding-space'>
					<Button bsStyle='info' bsSize="large">Primary</Button>
				</div>
			</div>
		</Page>
	)
}

export default DetailPage
