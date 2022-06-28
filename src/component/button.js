import React from 'react';
import PropTypes from 'prop-types';

const button = (props) => {
    const Onclick = (e) =>
    {
        console.log(e);
    }
  return (
    <div>
     <button onClick={Onclick}
      style={{backgroundColor: props.color}}
      className='btn'>{props.text}</button>
    </div>
  );
}

button.defaultProps ={
    color: 'steelblue',
    text : 'Add'
}

button.propTypes = {
text: PropTypes.string,
color: PropTypes.string,
}

export default button;
