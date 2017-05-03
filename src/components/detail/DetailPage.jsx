import React from 'react'
import moment from 'moment'
import {Page,List,ListHeader,Toolbar,ListItem,BackButton,Input,AlertDialog,Row,Col,ProgressCircular,Modal} from 'react-onsenui'
import {notification} from 'onsenui'
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
import {Glyphicon,Button} from 'react-bootstrap'
import LoginPageContainer from '../login/LoginPageContainer.react.js'
import CustomCellEdit from '../element/CustomCellEdit.jsx'
import CustomLoading from '../element/CustomLoading.jsx'

const renderToolbar = (navigator) => (
	<Toolbar className='toolbar-color'>
		<div className='left'><BackButton onClick={() => navigator.popPage()}><span className='text-color'>戻る</span></BackButton></div>
		<div className='text-color center'>詳細</div>
		<div className='right'><a className='padding-space' onClick={() => navigator.replacePage({component:LoginPageContainer})}><span className='text-color'>ログアウト</span></a></div>
	</Toolbar>
)

const dateFormatter = (cell,row) => {
	return moment(cell).format('YYYY/MM/DD hh:mm:ss')
}

const createSaveButton = (onUpdate,props) => (
	<CustomCellEdit onUpdate={onUpdate} {...props}/>
)

const DetailPage = ({
	route,
	navigator,
	isLoading,
	id,
	noteValue,
	reportDetail={},
	fileList={},
	statusHistory={},
	putReportDetail,
	onChangeText,

	testStatus,
	testChangeActiveButton,
	imagePreviewUrl,
	handleImageChange,
	handleImageSubmit,

	testStatusHistory={},
	handleSubmit,
	isPending
	}) => {
	if(isLoading) {
		return (
			<Page className='margin-navigator' renderToolbar={renderToolbar.bind(this,navigator)}
					renderModal={() => (
						<CustomLoading size={50} isLoading={true}/>
					)}>
				
			</Page>
		)
	} else {
		let status = reportDetail.response.length != 0 ? reportDetail.response[0].status_Id : 0
		let info = reportDetail.response.length != 0 ? reportDetail.response[0].info : ''
		let image = null
	
		if(!imagePreviewUrl.length) {
			image = (<img alt="写真がありません" src='' className='prev-image'/>)
		} else {
			image = (<img src={imagePreviewUrl} className='prev-image'/>)
		}
		
		return (
			<Page className='margin-navigator' renderToolbar={renderToolbar.bind(this,navigator)}
					renderModal={() => (
						<CustomLoading size={50} isLoading={isPending}/>
					)}>
					<div className='detail-page'>
					
						<BootstrapTable tableHeaderClass='default-header-color' data={reportDetail.response} striped hover cellEdit={{mode:'click'}}>
							<TableHeaderColumn dataField='key' isKey={true} hidden={true}>Id</TableHeaderColumn>
							<TableHeaderColumn dataField='id' customEditor={{getElement:createSaveButton}}><Glyphicon glyph="glyphicon glyphicon-stop" />お客様番号 1</TableHeaderColumn>
							<TableHeaderColumn dataField='staff_Name' customEditor={{getElement:createSaveButton}}><Glyphicon glyph="glyphicon glyphicon-stop" />住所</TableHeaderColumn>
							<TableHeaderColumn dataField='name' customEditor={{getElement:createSaveButton}}><Glyphicon glyph="glyphicon glyphicon-stop" />氏名</TableHeaderColumn>
						</BootstrapTable>

						
						<BootstrapTable tableHeaderClass='default-header-color' data={reportDetail.response} striped hover cellEdit={{mode:'click'}}>
							<TableHeaderColumn dataField='key' isKey={true} hidden={true}>Id</TableHeaderColumn>
							<TableHeaderColumn dataField='info' customEditor={{getElement:createSaveButton}}><Glyphicon glyph="glyphicon glyphicon-stop" />お客様番号 1</TableHeaderColumn>
						</BootstrapTable>
			
						<div className='detail-page-upload padding-space'>
						 	<Row>
						 		<Col width='50%'>
									<div>
										<Button bsStyle={testStatus == 0 ? 'success' : 'default'} className='align-right' onClick={() => testChangeActiveButton(0)}>未着手</Button>
										<Button bsStyle={testStatus == 1 ? 'success' : 'default'} className='align-right' onClick={() => testChangeActiveButton(1)}>PR配布</Button>
										<Button bsStyle={testStatus == 2 ? 'success' : 'default'} className='align-right' onClick={() => testChangeActiveButton(2)}>作業開始</Button>
										<Button bsStyle={testStatus == 3 ? 'success' : 'default'} className='align-right' onClick={() => testChangeActiveButton(3)}>作業完了</Button>
									</div>
									<div className='top-space-bottom'/>
									<div>
										<div className='magic-upload-wrapper align-right'>
											<input id='file' type='file' onChange={(e) => handleImageChange(e)} className='magic-upload'/>
											<Button bsStyle='info'>写真選択</Button>
										</div>
										<Button bsStyle='info'className='align-right' onClick={() => handleImageSubmit()}>アップロード</Button>
									</div>
								</Col>
								<Col width='50%' style={{textAlign:'center'}}>
									{image}
								</Col>
							</Row>
						</div>
						<div className='detail-page-note padding-space'>
							<textarea style={{width:'100%',height:'100px'}} placeholder='特記事項があればここに記入' onChange={onChangeText.bind(this,'note')}/>	
							<div className='detail-page-submit'>
								<Button bsStyle='primary' bsSize="large" onClick={(e) => handleSubmit(e)}>更新</Button>	
							</div>
						</div>
						
						<div className='detail-page-history padding-space'>
							<BootstrapTable tableHeaderClass='default-header-color' data={testStatusHistory.response} striped hover>
								<TableHeaderColumn row='0' colSpan='3'><Glyphicon glyph="glyphicon glyphicon-stop" />ステータス更新職歴</TableHeaderColumn>
								<TableHeaderColumn dataField='id' isKey={true} hidden={true}>Id</TableHeaderColumn>
								<TableHeaderColumn row='1' dataField='update_Date' dataFormat={dateFormatter}>更新日時</TableHeaderColumn>
								<TableHeaderColumn row='1' dataField='update_Staff'>更新者</TableHeaderColumn>
								<TableHeaderColumn row='1' dataField='status_Name'>ステータス</TableHeaderColumn>		
							</BootstrapTable>
							<div className='detail-page-submit'>
								<Button bsStyle='primary' bsSize="large" onClick={() => notification.alert("Not Available")}>出力</Button>
							</div>
						</div>
					
					</div>
			</Page>
		)
	}
}

export default DetailPage
