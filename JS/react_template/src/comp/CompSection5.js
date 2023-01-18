import React from 'react';

const CompSection5 = () => {
  return (
    <section className='section5'>
      <figure className="bg">
        <img src={require('../asset/img/section5/section5-bg-window.jpg')} alt="" />
      </figure>
      <div className="content">
        <div className="title_wrap">
          <h2>Dance Trainers</h2>
          <p>
            Dance Instructor. Dance teachers instruct and train students in dance,
            incorporating elements of technique, performance, and choreography in their educational approach.
          </p>
        </div>
        <div className="flip-book book">
          <div className="sheet sheet1">
            <div className="page page-odd page1">
              <img src={require('../asset/img/section5/0.jpg')} alt="" />
            </div>
            <div className="page page-even page2">
              <a href={require('../asset/img/section5/1.jpg')}>
                <img src={require('../asset/img/section5/1.jpg')} alt="" />
              </a>
            </div>
          </div>
          <div className="sheet sheet2">
            <div className="page page-odd page3 profile">
              <div className="inner scroll">
                <h3>Rosaline Michelle</h3>
                <dl>
                  <dt>Contemporary, Modern Dancer</dt>
                  <dd>Dancing is surely the most basic and relevant of all forms of expression.
                    Nothing else can so effectively give outward form to an inner experience.</dd>
                </dl>
              </div>
            </div>
            <div className="page page-even page4 profile">
              <div className="inner scroll">
                <h3>Elizabeth Truss</h3>
                <dl>
                  <dt>Active Dancer</dt>
                  <dd>Consciousness expresses itself through creation.
                    This world we live in is the dance of the creator.
                    Dancers come and go in the twinkling of an eye but the dance lives on.</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="sheet sheet3">
            <div className="page page-odd page5">
              <a href={require('../asset/img/section5/2.jpg')}>
                <img src={require('../asset/img/section5/2.jpg')} alt="" />
              </a>
            </div>
            <div className="page page-even page6">
              <a href={require('../asset/img/section5/3.jpg')}>
                <img src={require('../asset/img/section5/3.jpg')} alt="" />
              </a>
            </div>
          </div>
          <div className="sheet sheet4">
            <div className="page page-odd page7 profile">
              <div className='inner scroll'>
                <h3>Anna Beatrix</h3>
                <dl>
                  <dt>Happiness Dancer</dt>
                  <dd>On many an occasion when I am dancing,
                    I have felt touched by something sacred. In those moments,
                    I felt my spirit soar and become one with everything that exists</dd>
                </dl>
              </div>
            </div>
            <div className="page page-even page8">
              page8 뒷표지
            </div>
          </div>
        </div>
        <div className="btns">
          <button className="btn1 active" data-n="1">
            <b>1</b>
          </button>
          <button className="btn2" data-n="2">
            <b>2</b>
          </button>
          <button className="btn3" data-n="3">
            <b>3</b>
          </button>
          <button className="btn4" data-n="4">
            <b>4</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompSection5;