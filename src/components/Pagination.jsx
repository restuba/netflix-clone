import React, { useContext } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropleft as ArrowLeft, IoMdArrowDropright as ArrowRight } from 'react-icons/io';
import { RootContext } from '../assets/context/Context';

const Pagination = ({type, sortby, genre}) =>{
  const { nextPage, prevPage, state } = useContext(RootContext);
  return (
    <PaginationWrap className="pagination-wrap">
      <div className="pagination">
        <button className="prev" onClick={() => prevPage(type, sortby, genre)}><ArrowLeft/> Prev</button>
        <div className="page">
          <p>{state.pageActive}</p>
        </div>
        <button className="next" onClick={() => nextPage(type, sortby, genre)}>Next <ArrowRight/></button>
      </div>
    </PaginationWrap>
  );
}

export default Pagination;

const PaginationWrap = styled.div`
  display: block;
  margin: 2rem 0;
  .pagination{
    display: flex;
    justify-content: center;
    align-items: stretch;
    border-radius: 0.25rem;
    .prev, .next{
      padding: 12px 16px;
      background: #e50914;
      border: none;
      outline: none;
      color: #ffffff;
      text-decoration: none;
      transition: 0.3s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid transparent;
    } 
    button:hover{
      background-color: transparent;
      color: white;
      border: 1px solid #393534;
    }
    .page{
      color: #ffffff;
      border: 1px solid #393534;
      padding: 0 2rem;
    }
  }
`;