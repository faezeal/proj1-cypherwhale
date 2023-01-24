import React from 'react';
import './FreeEducation.css';
import FreeEducationBanner from './FreeEducationBanner';
import FreeEducationContent from './FreeEducationContent';
import FreeEducationHead from './FreeEducationHead';


function FreeEducation() {
  return (
    <div>
      {/* <===============  FreeEducation Components  ===============> */}
      <FreeEducationHead />
      <FreeEducationContent/>
      <FreeEducationBanner/> 
    </div>
  )
}

export default FreeEducation