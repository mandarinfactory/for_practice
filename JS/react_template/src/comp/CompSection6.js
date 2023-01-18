import React from 'react';

const CompSection6 = () => {
  return (
    <section className='section6 scr-target6'>
      <figure className='bg'>
        <img src={require('../asset/img/visual/section-visual-bg.png')} alt="" />
      </figure>
      <figure className="bg_top">
        <img src={require('../asset/img/section6/section6-bg-top.png')} alt="" />
      </figure>
      <figure className="bg_bottom">
        <img src={require('../asset/img/section6/section6-bg-bottom.png')} alt="" />
      </figure>
      <div className="content">
        <img className="deco deco_rt" src={require('../asset/img/section6/deco-rt.png')} alt="" />
        <img className="deco deco_lb" src={require('../asset/img/section6/deco-lb.png')} alt="" />
      </div>
    </section>
  );
};

export default CompSection6;