import React from 'react';

const CompSection3 = () => {
  return (
    <section className='section3'>
      <div className='carousel'>
        <div className="display">
          <div className="col">
            <div className="container">
              <figure className='figure1'>
                <div className='inner'>
                  <img src={require('../asset/img/section3/section3-1.jpg')} alt="" />
                  <figcaption>
                    <em>Contemporary Dance</em>
                    <small>Intermediate Age 18+</small>
                  </figcaption>
                </div>
              </figure>
              <figure className='figure2'>
                <div className='inner'>
                  <img src={require('../asset/img/section3/section3-2.jpg')} alt="" />
                  <figcaption>
                    <em>Modern Dance</em>
                    <small>Intermediate Age 10+</small>
                  </figcaption>
                </div>
              </figure>
              <figure className='figure3'>
                <div className='inner'>
                  <img src={require('../asset/img/section3/section3-3.jpg')} alt="" />
                  <figcaption>
                    <em>Lively Dance</em>
                    <small>Intermediate Age 15+</small>
                  </figcaption>
                </div>
              </figure>
              <figure className='figure4'>
                <div className='inner'>
                  <img src={require('../asset/img/section3/section3-4.jpg')} alt="" />
                  <figcaption>
                    <em>Active Dance</em>
                    <small>Intermediate Age 15+</small>
                  </figcaption>
                </div>
              </figure>
              <figure className='figure5'>
                <div className='inner'>
                  <img src={require('../asset/img/section3/section3-5.jpg')} alt="" />
                  <figcaption>
                    <em>Happiness Dance</em>
                    <small>Intermediate Age 12+</small>
                  </figcaption>
                </div>
              </figure>
              <figure className='figure6 figure0'>
                <div className='inner'>
                  <img src={require('../asset/img/section3/section3-6.jpg')} alt="" />
                  <figcaption>
                    <em>Splendid Dance</em>
                    <small>Intermediate Age 18+</small>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="controls">
        <button className="prev">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="indicator">
          <button className="btn1 btn7 active" data-n="1"></button>
          <button className="btn2" data-n="2"></button>
          <button className="btn3" data-n="3"></button>
          <button className="btn4" data-n="4"></button>
          <button className="btn5" data-n="5"></button>
          <button className="btn6 btn0" data-n="6"></button>
        </div>
        <button className="next">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default CompSection3;