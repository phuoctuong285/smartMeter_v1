import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton,ListItem,List,Row,Col,ListHeader} from 'react-onsenui';

export default class SecondPage extends React.Component {
  pushPage() {
    const {route} = this.props
    this.props.navigator.pushPage({component: SecondPage,title:route.title});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  renderToolbar(title) {
    return (
      <Toolbar>
        <div className="left"><BackButton>Back</BackButton></div>
        <div className="center">{title}</div>
      </Toolbar>
    );
  }

  renderRow(row, index) {
      const x = 40 + Math.round(5 * (Math.random() - 0.5)),
            y = 40 + Math.round(5 * (Math.random() - 0.5));

      const names = ['Max', 'Chloe', 'Bella', 'Oliver', 'Tiger', 'Lucy', 'Shadow', 'Angel'];
      const name = names[Math.floor(names.length * Math.random())];

      return (
        <ListItem key={index}>
          <Row>
            <Col className='col-table'>Col 1</Col>
            <Col className='col-table'>Col 2</Col>
            <Col className='col-table'>Col 3</Col>
          </Row>
        </ListItem>
      );
  }

  render() {
    const {route} = this.props
    return (
      <Page renderToolbar={this.renderToolbar.bind(this,route.title)}>
          <List
            dataSource={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]}
            renderRow={this.renderRow}
            renderHeader={() => 
              <ListHeader>
                <Row>
                  <Col className='col-table'>Col A</Col>
                  <Col className='col-table'>Col B</Col>
                  <Col className='col-table'>Col C</Col>
                </Row>
             </ListHeader>}>
          </List>
      </Page>
    );
  }
}