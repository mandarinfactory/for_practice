import React, { useEffect } from 'react';

const CompVisual = () => {

  return (
    <section className='visual scr-target0'>

      <svg style={{display:'none'}}>
        <filter id="filter">
          <feTurbulence id="water" numOctaves="3" seed="1" baseFrequency="0.02 0.5" />
          <feDisplacementMap scale="10" in="SourceGraphic" />
          <animate href="#water" attributeName="baseFrequency" keyTimes="0;0.5;1"
          values="0.002;0.008;0.002" dur="10s" repeatCount="indefinite"/>
        </filter>
      </svg>

      <svg style={{display: 'none'}}>
        <defs>
          <filter id="ripple-filter1">
            <feImage xlink="" x="0" y="0" result="rippleImage" />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic"
              in2="rippleImage" result="displacementMap" colorInterpolationFilters="sRGB" scale="100" />
            <feComposite operator="in" in2="rippleImage"></feComposite>
          </filter>
        </defs>
      </svg>

      <figure className='bg'>
        <img src={require('../asset/img/visual/section-visual-bg.png')} alt="" />
      </figure>
      <img className='bg-bottom bg-bottom1' src={require('../asset/img/visual/section-visual-splatter1.png')} alt="" />
      <img className='bg-bottom bg-bottom2' src={require('../asset/img/visual/section-visual-bg-bottom.png')} alt="" />
      <img className='dancer' src={require('../asset/img/visual/main-dancer.png')} alt="" />
    </section>
  );
};

export default CompVisual;