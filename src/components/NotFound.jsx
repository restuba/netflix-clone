import React, { Component } from 'react';
import styled from 'styled-components';

class NotFound extends Component {
  render() {
    return (
      <NotFoundWrap>
        <p>No result found</p>
        <label>&#x2639; we are sorry, trailer is not found</label>
      </NotFoundWrap>
    );
  }
}

export default NotFound;

const NotFoundWrap = styled.div`
  background: red;
  height: 200px;
  width: 100vw;
`;