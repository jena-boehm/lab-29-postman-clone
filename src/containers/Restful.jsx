import React, { Component } from 'react';
import Form from '../components/form/Form';
import Header from '../components/header/Header';
import Results from '../components/results/Results';
import { fetchApi } from '../services/fetchApi';

export default class Restful extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    results: { 'Welcome!': 'Please make a fetch' }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetch();
  }

  fetch = () => {
    const { url, method, body } = this.state;
    return fetchApi(url, method, body)
      .then(res => this.setState({ results: res }));
  }

  render() {
    const { url, method, body, results } = this.state;

    return (
      <>
        <Header /> 
        <Form 
          url={url}
          method={method}
          body={body}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
        <Results results={results} />
      </>
    );
  }
}
