import React from 'react';

const handleClick = (type) => {
  console.log(type);
  alert({ type } + ' 클릭했어요.');
};

export default function Button(props) {
  console.log(props);

  return (
    <button type={props.type} onClick={handleClick}>
      {props.type}
    </button>
  );
}
