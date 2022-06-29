import React from 'react';
import Button from './button'
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header className='header'>
       <h1>{props.title}</h1>
       <Button color={props.show ? 'red':'green'} text={props.show ? 'Close':'Add Task'} onClick={props.onAddclick}/>
    </header>
  );
}

Header.defaultProps ={
    title: 'Task Tracker',
}

Header.propTypes ={
    title: PropTypes.string,
}

export default Header;
