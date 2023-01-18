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
            <div className="page page-odd page3">
              page3 사진1의 설명
            </div>
            <div className="page page-even page4">
              page4 사진2의 설명
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
            <div className="page page-odd page7">
              page7 사진3의 설명
            </div>
            <div className="page page-even page8">
              page8 뒷표지
            </div>
          </div>
        </div>
        <div className="btns">
          <button className="btn1" data-n="1">
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