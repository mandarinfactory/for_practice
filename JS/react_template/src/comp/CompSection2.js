import React from 'react';

const CompSection2 = () => {
  return (
    <section className='section2 scr-target2'>
      <img className='bg-top' src={require('../asset/img/section2/section2-bg-top.png')} alt="" />
      <figure className='bg'>
        <img src={require('../asset/img/section2/section2-bg.png')} alt="" />
      </figure>
      <div className="bubble_container bubble-particle"></div>
      <figure className='bg-bottom'>
        <img src={require('../asset/img/section2/section2-bg-bottom.png')} alt="" />
      </figure>
      <div className="center">
        <figure>
          <div>
            <img src={require('../asset/img/section2/section2-dancer.png')} alt="" />
            <em>
              Hip Hop
            </em>
          </div>
        </figure>
        <div className="textbox">
          <h2>
            <span>From</span>
            <span>Hip-Hop</span>
            <span>to Ballet</span>
          </h2>
          <p>
            <em>
              한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다.
              법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다.
              공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며,
              그 자율적 활동과 발전을 보장한다.
            </em>
          </p>
          <a href=""></a>
        </div>
      </div>
    </section>
  );
};

export default CompSection2;