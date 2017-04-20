import React from 'react';
import ReactDOM from 'react-dom';
import {Navigator} from 'react-onsenui';
import LoginPageContainer from './components/login/LoginPageContainer.react.js'
import style from './public/scss/main-page.scss'
import styleBootstrapTable from 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import SecondPage from './SecondPage.jsx'

export default class App extends React.Component {
  
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;
    props.route = route;

    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Navigator initialRoute={{component: LoginPageContainer}} renderPage={this.renderPage}/>
    );
  }
}