import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  h1 {
    margin-bottom: 16px;
    font-size: 32px;
    color: #fff;
    text-align: center;
  }

  p {
    color: #b5b5b5;
    font-size: 20px;
    text-align: center;
  }

  input {
    width: 100%;
    margin: 64px 0;
    padding: 16px 0 8px;
    background: none;
    border: none;
    border-bottom: 1px solid #b2b2b2;
    color: #fff;
    font-size: 16px;
    text-align: center;

    &::placeholder {
      color: #b2b2b2;
    }
  }
`;

export const Result = styled.div`
  width: 100%;

  h2 {
    color: #fff;
    text-align: center;
    font-weight: normal;

    strong {
      color: ${props => (props.correct ? '#59c83e' : '#C83F3E')};
    }
  }
`;
