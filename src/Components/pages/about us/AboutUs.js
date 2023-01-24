import React from 'react';
import AboutFooter from './AboutFooter';
import AboutServices from './AboutServices';
import './AboutUs.css';
import AboutUsContent from './AboutUsContent';
import AboutUsHead from './AboutUsHead';

function AboutUs() {
  return (
    <div>
      {/* ==============  AboutUs Components  ================> */}
        <AboutUsHead/>
        <AboutUsContent/>
        <AboutServices/>
        <AboutFooter/>
    


      
    </div>
  )
}

export default AboutUs