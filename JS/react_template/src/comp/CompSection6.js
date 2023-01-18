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
        <div className="lt">
          <h2>Contact Us</h2>
          <form>
            <input type="email" title='email' placeholder='이메일을 써주십시오.' />
            <input type="tel" title='phone-number' placeholder='전화번호를 써주십시오.' />
            <textarea title='opinion' placeholder='의견을 써주십시오.'></textarea>
            <button>전송하기</button>
          </form>
        </div>
        <div className="rb">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26949.02284474613!2d-6.277493670903304!3d53.3436213712714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1674020953938!5m2!1sko!2skr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default CompSection6;