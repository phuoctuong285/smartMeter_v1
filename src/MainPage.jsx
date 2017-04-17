import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button,Navigation} from 'react-onsenui';
import LoginPageContainer from './components/Login/LoginPageContainer.react.js'
import DetailPageContainer from './components/detail/DetailPageContainer.react.js'
import SecondPage from './SecondPage'
import ListContainer from './components/list/Container.react.js'

export default class MainPage extends React.Component {
  pushPage(components,title) {
    this.props.navigator.pushPage({component:components,title:title});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Main Page</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this,LoginPageContainer,'Login Page')}>Login Page</Button>
          <span className='left-space-right'/>
          <Button onClick={this.pushPage.bind(this,DetailPageContainer,'Detail Page')}>Detail Page</Button>
          <span className='left-space-right'/>
          <Button onClick={this.pushPage.bind(this,ListContainer,'List')}> List Page </Button>
        </p>
      </Page>
    );
  }
}
