import React from 'react';

const CompVisual = () => {
  return (
    <section className='visual scr-target0'>
      <figure className='bg'>
        <img src={require('../asset/img/visual/section-visual-bg.png')} alt="" />
      </figure>
      <img className="bg-bottom bg-bottom1" src={require('../asset/img/visual/section-visual-splatter1.png')} alt="" />
      <img className="bg-bottom bg-bottom2" src={require('../asset/img/visual/section-visual-bg-bottom.png')} alt="" />
    </section>
  );
};

export default CompVisual;