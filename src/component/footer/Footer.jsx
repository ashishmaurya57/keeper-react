import React from 'react';
import './footer.css';
import DateObject from "react-date-object";

const Footer = () => {
  // You can use DateObject here if necessary, otherwise, it seems unused in your current code
  // var date = new DateObject();

  return (
    <div className='footer'>
      <p>
        &copy; {new Date().getFullYear()} Your Company Name
      </p>
    </div>
  );
}

export default Footer;
