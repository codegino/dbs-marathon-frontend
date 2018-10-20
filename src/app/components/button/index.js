import styled from 'styled-components';

const buttonStyle = `
  color: white;
  margin: 5px 0;
  border-radius: 6px;
  background-color: green;
  transition: all .5s;
  border: 2px solid white;
  align-self: center;
  padding: .5rem 1rem;

  :hover {
    background-color: white;
    color: green;
    border: 2px solid green;
  }
`

export const DefaultButton = styled.button`${buttonStyle}`
export const InputButton = styled.input`${buttonStyle}`

export default DefaultButton;
