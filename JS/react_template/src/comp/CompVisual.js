import React, { useEffect } from 'react';

const CompVisual = () => {

  return (
    <section className='visual scr-target0'>

      <svg style={{ display: 'none' }}>
        <filter id="filter">
          <feTurbulence id="water" numOctaves="3" seed="1" baseFrequency="0.02 0.5" />
          <feDisplacementMap scale="10" in="SourceGraphic" />
          <animate href="#water" attributeName="baseFrequency" keyTimes="0;0.5;1"
            values="0.002;0.008;0.002" dur="10s" repeatCount="indefinite" />
        </filter>
      </svg>

      <figure className='bg'>
        <img src={require('../asset/img/visual/section-visual-bg.png')} alt="" />
      </figure>
      <img className='bg-bottom bg-bottom1' src={require('../asset/img/visual/section-visual-splatter2.png')} alt="" />
      <img className='bg-bottom bg-bottom2' src={require('../asset/img/visual/section-visual-bg-bottom.png')} alt="" />
      <img className='splatter splatter1' src={require('../asset/img/visual/section-visual-splatter2.png')} alt="" />
      <img className='splatter splatter2' src={require('../asset/img/visual/section-visual-splatter3.png')} alt="" />
      <img className='splatter splatter3' src={require('../asset/img/visual/section-visual-splatter4.jpg')} alt="" />
      <img className='dancer' src={require('../asset/img/visual/main-dancer.png')} alt="" />
    </section>
  );
};

export default CompVisual;