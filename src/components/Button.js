import React from 'react';
import styled from 'styled-components';

const handleClick = (type) => {
  console.log(type);
  alert({ type } + ' 클릭했어요.');
};

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
`;

export default function Button({children, color, background}) {
  return (
    <StyledButton color={color} background={background}>
      {children}
    </StyledButton>
  );
}
