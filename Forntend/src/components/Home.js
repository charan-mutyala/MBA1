import React from 'react';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url('https://i.pinimg.com/originals/5f/68/24/5f682422c49e903e6ed1acd500050dd7.jpg')`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '95vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  };

  const textStyles = {
    color: '#000000',
    fontSize: '3vw', // Adjust font size using vw unit
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={textStyles}>Welcome to MasterBuddyAcademy</h1>
    </div>
  );
};

export default Home;
