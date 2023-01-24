import React from 'react'
import './ContactUs.css';
import ContactUsContent from './ContactUsContent';
import ContactUsHead from './ContactUsHead';

function ContactUs() {
  return (
    <div>
      {/* <=====================  Contact Components  ===========================> */}
        <ContactUsHead/>
        <ContactUsContent/>
    </div>
  )
}

export default ContactUs