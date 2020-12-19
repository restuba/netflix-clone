import React, { Component } from 'react';
import styled from 'styled-components';

class GenreList extends Component {
  state = {
    isGenreChecked: []
  }
  handleChange = e => {
    const target = e.target;
    const id = target.id;
    if(target.checked){
      this.state.isGenreChecked.push(id);
    }else{
      const index = this.state.isGenreChecked.indexOf(id);
      if(index > -1) this.state.isGenreChecked.splice(index, 1);
    }
    this.props.onSelected(this.state.isGenreChecked);
  }

  render() {
    const { genres } = this.props.data;
    return (
      <GenreListWrap>
        <h4 className="title-filter">Filter</h4>
        <form className="gendres">
          {
            !genres ? null :
            (
              genres.map(item => {
                return(
                  <div className="genre" key={item.id}>
                    <input type="checkbox" name="gendre" id={item.id} onChange={this.handleChange}/>
                    <label htmlFor={item.id}>{item.name}</label>
                  </div>
                )
              })
            )
          }
        </form>
      </GenreListWrap>
    );
  }
}

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