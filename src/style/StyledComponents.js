import styled from 'styled-components';
import React from 'react';

const Form = styled.form`
  & + & {
    margin-top: 1rem;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  color: gray;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid gray;
  outline: none;
  border-radius: 0px;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
const Button = styled.button`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: gray;
  color: white;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  cursor: ${(props) => (props.validation ? 'pointer' : 'default')};
  user-select: none;
  transition: 0.2s all;

  &:hover {
    background: ${(props) => (props.validation ? 'green' : null)};
  }

  &:active {
    background: ${(props) => (props.validation ? 'skyblue' : null)};
  }
`;

const Wrapper = styled.div`
  width: 400px;
  margin: 200px auto;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Validation = styled.p`
  margin: 5px 0 10px 0;
  color: red;
  font-size: 1rem;
`;

export default function StyledComponents() {
  return <div>StyledComponents</div>;
}
