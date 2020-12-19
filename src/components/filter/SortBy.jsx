import React, { Component } from 'react';
import styled from 'styled-components';

class SortBy extends Component {
  render() {
    return (
      <SortByWrap className="sort">
        <h4 className="title-sort">Sort Result By</h4>
        <select name="sortby" onChange={this.props.onChange} id="">
          <option value="popularity.desc">Popularity Descending</option>
          <option value="popularity.asc">Popularity Ascending</option>
          <option value="vote_average.desc">Rating Descending</option>
          <option value="vote_average.asc">Rating Ascending</option>
          <option value="release_date.desc">Release Descending</option>
          <option value="release_date.asc">Release Ascending</option>
          <option value="original_title.desc">Title (Z-A)</option>
          <option value="original_title.asc">Title (A-Z)</option>
        </select>
      </SortByWrap>
    );
  }
}

export default SortBy;

const SortByWrap = styled.div`
  .title-sort{
    color: #F4F4F4;
    font-weight: 400;
    margin: 0.5rem 0;
  }
  select{
    background: #393534;
    display: block;
    padding: 12px 16px;
    outline: none;
    color: #ffffff;
    position: relative;
    width: 100%;
  }
`;