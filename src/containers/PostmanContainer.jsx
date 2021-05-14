import React, { Component } from 'react';
import Controls from '../components/postman/Controls';
import JsonDisplay from '../components/postman/JsonDisplay';
import { getJson } from '../services/apiUtils';

export default class PostmanContainer extends Component {
  state={
    url: '',
    body: '',
    method: 'GET',
    display: '',
    history: {
      url: '',
      body: '',
      method: '',
    },
  }
  onSubmit = async (e) => {
    e.preventDefault();
    const { url, body, method } = this.state;
    const display = await getJson(url, body, method);
    this.setState({ display, url:'' });
  }
  onUrlQueryChange = (e) => {
    this.setState({ url: e.target.value });
  }
  onJsonChange = (e) => {
    this.setState({ body: e.target.value });
  }
  onRadioChange = (e) => {
    this.setState({ method: e.target.value });
  }
  render() {
    console.log(this.state);
    const { url, body, display, method } = this.state;
    return (
      <>
        <h1>Fake Postman</h1>
        <Controls 
          url={url}
          body={body}
          method={method}
          onSubmit={this.onSubmit}
          onUrlQueryChange={this.onUrlQueryChange}
          onJsonChange={this.onJsonChange}
          onRadioChange={this.onRadioChange}
        />
        <JsonDisplay 
          display={display}
        />
      </>
    );
  }
}
