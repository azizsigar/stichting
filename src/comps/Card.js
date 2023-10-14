import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="card">
      <div >
      <img src='https://media.licdn.com/dms/image/D5603AQFatNorC0IWEA/profile-displayphoto-shrink_800_800/0/1691765872670?e=1702512000&v=beta&t=dfzrxVcubs-sfBprQdrcJgU5y1nJ6mARSDglnPZQPAU' alt='bum' />

        <h1>name</h1>
        <h2>position</h2>
        <p>about</p>
        <FaInstagram/>
        <FaLinkedinIn/>
      </div>
      
          </div>
  );
};

export default Card;
