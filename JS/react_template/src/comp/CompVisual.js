import React, { useEffect } from 'react';

const CompVisual = () => {
  useEffect(() => {

  }, [])//useEffect
  return (
    <section className='visual scr-target0'>
      <svg style={{ display: 'none' }}>
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
      <img className="bg-bottom bg-bottom1" src={require('../asset/img/visual/section-visual-splatter1.png')} alt="" />
      <img className="bg-bottom bg-bottom2" src={require('../asset/img/visual/section-visual-bg-bottom.png')} alt="" />
      <img className="dancer" src={require('../asset/img/visual/main-dancer.png')} alt="" />
    </section>
  );
};

export default CompVisual;