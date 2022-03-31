import React from 'react'
import styled from 'styled-components'
import rightArrow from './bi_arrow-right-circle-fill.svg'
import leftArrow from './bi_arrow-left-circle-fill.svg'


const StyledButton = styled.button`
    marginRight: '19px';
    cursor: pointer;
    transition: all .5s linear;
    background-color: transparent;
    border-radius: 55%;
    border: none;
    padding: 5px;
    &:hover {
        transform: scale(1.1);
    };
    &:active {
        transform: translate(1px, 20%);
    }
`


function Button({ direction, id }) {
  return (
    <StyledButton id={id}>
        {direction === 'right' 
        ? <img src={rightArrow} alt="стрелка вправо"></img> 
        : <img src={leftArrow} alt="стрелка влево"></img>}
    </StyledButton>
  )
}

export default Button
