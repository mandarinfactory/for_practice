import React from 'react';

const CompSection4 = () => {
  return (
    <section className='section4'>
      <div className="content">
        <div className="title_wrap">
          <h2>Our Plans</h2>
          <p>
            The best slogans are well-remembered because they’re short.
            With the exceptions of Mastercard, Maybelline, and maybe a few others,
            most of the most famous catchy slogan examples are effective because they’re concise.
          </p>
        </div>
        <div className="carousel">
          <div className="box box1 active1" data-id="1">
            <img src={require('../asset/img/section4/1.jpg')} alt="" />
            <div className="price_table">
              <h3>ballet</h3>
              <em>
                <b>$59</b>
                <sub>/mo</sub>
              </em>
              <ul>
                <li>2 classes per week</li>
                <li>Personalize Training</li>
                <li>Access to all dance studio</li>
              </ul>
              <a href="">purchase</a>
            </div>
          </div>
          <div className="box box2 active2" data-id="2">
            <img src={require('../asset/img/section4/2.jpg')} alt="" />
            <div className="price_table">
              <h3>tango</h3>
              <em>
                <b>$80</b>
                <sub>/mo</sub>
              </em>
              <ul>
                <li>2 classes per week</li>
                <li>Personalize Training</li>
                <li>Access to all dance studio</li>
              </ul>
              <a href="">purchase</a>
            </div>
          </div>
          <div className="box box3 active3" data-id="3">
            <img src={require('../asset/img/section4/3.jpg')} alt="" />
            <div className="price_table">
              <h3>hip-hop</h3>
              <em>
                <b>$99</b>
                <sub>/mo</sub>
              </em>
              <ul>
                <li>2 classes per week</li>
                <li>Personalize Training</li>
                <li>Access to all dance studio</li>
              </ul>
              <a href="">purchase</a>
            </div>
          </div>
        </div>
      </div>
      <button className='prev'>
        <i className="fa-solid fa-chevron-left left"></i>
      </button>
      <button className='next'>
        <i className="fa-solid fa-chevron-right right"></i>
      </button>
    </section>
  );
};

export default CompSection4;