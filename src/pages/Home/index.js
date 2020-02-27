import React, { Component } from 'react';

import { Container, Result } from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      decimalNumber: '',
      correct: 'true',
    };
  }

  handleConversion = e => {
    const value = e.target.value.split('').reverse();

    if (value[0] !== '0' && value[0] !== '1') {
      return this.setState({
        decimalNumber: 'Permitido somente 1 e 0',
        correct: '',
      });
    }

    const totalValue =
      value[0] &&
      value.reduce((soma, v, index) => {
        return +soma + 2 ** index * v;
      });

    return this.setState({
      decimalNumber: totalValue,
      correct: 'true',
    });
  };

  render() {
    const { decimalNumber, correct } = this.state;

    return (
      <Container>
        <h1>binary to decimal conversor</h1>
        <p>
          Type a binary number to convert in a decimal number (type only 0 or 1)
        </p>

        <input
          type="text"
          placeholder="type here ex: 10010101"
          onChange={e => this.handleConversion(e)}
          maxLength="8"
        />

        <Result correct={correct}>
          <h2>
            result: <strong>{decimalNumber}</strong>
          </h2>
        </Result>
      </Container>
    );
  }
}
