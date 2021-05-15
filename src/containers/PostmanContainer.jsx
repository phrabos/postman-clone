import React, { Component } from 'react';
import Controls from '../components/postman/Controls';
import JsonDisplay from '../components/postman/JsonDisplay';
import History from '../components/postman/History';
import { getJson } from '../services/apiUtils';
import style from '../components/postman/postman.css';

export default class PostmanContainer extends Component {
  state={
    url: '',
    body: '',
    method: 'GET',
    display: '',
    history: []
  }

  componentDidMount() {
    const lsHistory = JSON.parse(localStorage.getItem('HISTORY'));
    this.setState({ history: lsHistory });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { url, body, method } = this.state;
    if(!url.startsWith('http') && !url.startsWith('www')) return alert('enter valid URL');
    const display = await getJson(url, body, method);
    this.setState(prevState => ({
      display,
      url: '',
      history: [...prevState.history, { url, body, method }]
    }));
    const stringData = JSON.stringify(this.state.history);
    localStorage.setItem('HISTORY', stringData);
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
  onLiClick = (e) => {
    const idx = e.target.value;
    this.setState({ 
      url: this.state.history[idx].url,
      method: this.state.history[idx].method,
      body: this.state.history[idx].body,
      display: '',
    });
  }
  onDeleteClick = (e) => {
    const idx = +e.target.value;
    alert(idx);
    this.setState(prevState => ({
      history: prevState.history.filter((_, i) => {
        if(i !== idx) return true;
        return false;
      })
    }));
  }
  render() {
    const { url, body, display, method, history } = this.state;
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
        <div className={style.displayOuter}>
          <JsonDisplay 
            display={display}
          />

          <History 
            history={history}
            onLiClick={this.onLiClick}
            onDeleteClick={this.onDeleteClick}
          />
        </div>

      </>
    );
  }
}
