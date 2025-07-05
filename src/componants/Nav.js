import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate();
  const handleNavPro = () => {
    navigate('/');
  }

  const handleNavRel = () => {
    navigate('/related-info');
  }

  return (
    <div className='header nav'>
      <p onClick={handleNavPro}>Profile</p>
      <p onClick={handleNavRel}>Related information</p>
    </div>
  );
};

export default Nav;
