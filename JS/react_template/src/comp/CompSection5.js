import React from 'react';

const CompSection5 = () => {
  return (
    <section className='section5'>
      <figure className="bg">
        <img src={require('../asset/img/section5/section5-bg-window.jpg')} alt="" />
      </figure>
      <div className="content">
        <div className="title_wrap">
          <h2>Dance Trainer</h2>
          <p>
            Also Called. Dance Instructor. Dance teachers instruct and train students in dance,
            incorporating elements of technique, performance, and choreography in their educational approach. Careers in Dance.
            Careers in Education.
          </p>
        </div>
        <div className="flip-book book">
        </div>
      </div>
    </section>
  );
};

export default CompSection5;