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
    auth: false,
    authType: 'API KEY',
    authKey: '',
    authValue: '',
    headerKey: '',
    headerValue: '',
    display: '',
    history: [{ url: 'test.com', body: '',  method: 'GET-TEST' }]
  }

  componentDidMount() {
    const lsHistory = localStorage.getItem('HISTORY');
    if(!lsHistory) localStorage.setItem('HISTORY', '[]');
    const parsed = JSON.parse(lsHistory);
    this.setState({ history: parsed });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { url, body, method, auth, authKey, authValue } = this.state;
    if(!url.startsWith('http') && !url.startsWith('www')) return alert('enter valid URL');
    const display = await getJson(url, body, method, auth, authKey, authValue);
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
    this.setState(prevState => ({
      history: prevState.history.filter((_, i) => {
        if(i !== idx) return true;
        return false;
      })
    }), () => {
      const stringData = JSON.stringify(this.state.history);
      localStorage.setItem('HISTORY', stringData);
    });
  }
  onSwitchChange = () => {
    this.setState({ auth: this.state.auth ? false : true });
  }
  onHeaderKeyChange = (e) => {
    this.setState({ headerKey: e.target.value });
  }
  onHeaderValueChange = (e) => {
    this.setState({ headerValue: e.target.value });
  }
  onAuthRadioChange = (e) => {
    this.setState({ 
      authType: e.target.value,
    });
    if(this.state.authType === 'API KEY'){
      this.setState({ 
        authKey: this.state.headerKey,
        authValue: this.state.headerValue, 
      }, () => console.log(this.state.authKey, this.state.authValue));
    } else if(this.state.authType === 'BEARER TOKEN') {
      this.setState({ 
        authKey: 'AUTHORIZATION',
        authValue: `BEARER ${this.state.headerValue}`
      }, () => console.log(this.state.authKey, this.state.authValue));
    } else if(this.state.authType === 'BASIC AUTH') { 
      this.setState({
        authKey: 'AUTHORIZATION',
        authValue: `${this.state.headerKey}${this.state.headerValue}`
      }, () => console.log(this.state.authKey, this.state.authValue));
    } else console.log('some error state');

  }
  render() {

    const { url, body, display, method, history, auth, headerKey, headerValue, authType } = this.state;
    return (
      <>
        <h1>Fake Postman</h1>
        <Controls 
          url={url}
          body={body}
          method={method}
          auth={auth}
          headerKey={headerKey}
          headerValue={headerValue}
          authType={authType}
          onSubmit={this.onSubmit}
          onUrlQueryChange={this.onUrlQueryChange}
          onJsonChange={this.onJsonChange}
          onRadioChange={this.onRadioChange}
          onSwitchChange={this.onSwitchChange}
          onHeaderValueChange={this.onHeaderValueChange}
          onHeaderKeyChange={this.onHeaderKeyChange}
          onTokenChange={this.onTokenChange}
          onAuthRadioChange={this.onAuthRadioChange}
        />
        <div className={style.displayOuter}>
          <JsonDisplay display={display} />
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
