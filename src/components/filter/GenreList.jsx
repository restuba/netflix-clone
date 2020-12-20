import React from 'react';
import styled from 'styled-components';

const GenreList = ({data, onChange}) => {
  return (
    <GenreListWrap>
      <h4 className="title-filter">Filter</h4>
      <div className="gendres">
        { 
          !data.genres ? null :(data.genres.map(item => (
            <div className="genre" key={item.id}>
              <input type="checkbox" name="gendre" id={item.id} onChange={onChange}/>
              <label htmlFor={item.id}>{item.name}</label>
            </div>))
          )
        }
      </div>
    </GenreListWrap>
  );
};

export default GenreList;

const GenreListWrap = styled.div`
  display: block;
  .title-filter{
    color: #F4F4F4;
    font-weight: 400;
    margin: 1.5rem 0 0.5rem 0;
  }
  .gendres{
    width: 100%;
    display: block;
    .genre{
      box-sizing: border-box;
      background: #393534;
      display: inline-block;
      padding: 8px;
      margin: 2px;
      outline: none;
      color: #ffffff;
    }
  }
`;