import styled from 'styled-components';

export const Button = styled.button`
    padding: 5px;
    cursor: pointer;
    font-weight: bold;
    width: 60px;
    border: 1px solid gray;
    border-radius: 10px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;   &:hover,
   :focus{
     background-color: #DF2914;
     color:#FAFAF8;
      transition: all 300ms ease;
   }
`