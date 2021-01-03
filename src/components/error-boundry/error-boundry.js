import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator/error-indicator';

export default class ErrorBoundry extends Component {
  //понты
  //есть стейт с бинарным определением ошибки
  state = {
    hasError: false
  };

  //ловит изменение в стейте
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
//если тру вернет компонент ошибку
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
//если нет отрисует пропс
    return this.props.children;
  }
}
