import React from 'react';

const CompSection3 = () => {
  return (
    <section className='section3'>
      <div className='carousel'>
        <div className="display">
          <div className="col">
            <div className="container">
              <figure className='figure01'>
                <div className='inner'>
                  <img src={require('../asset/img/section3/section3-1.jpg')} alt="" />
                  <figcaption>
                    <em>Contemporary Dance</em>
                    <small>Intermediate Age 18+</small>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompSection3;