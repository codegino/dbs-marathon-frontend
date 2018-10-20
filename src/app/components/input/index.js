import styled from 'styled-components';

const DefaultInput = styled.input`
  margin: 5px 0;
  border-radius: 6px;
  padding: .5rem 1rem;

  :hover {
    ::placeholder {
      transition: all .5s;
      font-size: 1.3em;
      color: black;
    }
  }
`

export default DefaultInput;
