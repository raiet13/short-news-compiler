import React from 'react';

const defaultLimit = 100;
 
const TextInput = (props) => {
  return <input
    name={props.name}
    value={props.value}
    onChange={props.onChange}
    limit={props.limit || defaultLimit}
  />;
}
  
export default TextInput;