import React from 'react';

const CompSection1 = () => {
  return (
    <section className='section1'>
      <video className='bg' src={require('../asset/video/video.mp4')} loop autoPlay muted playsInline />
      <video className='light' src={require('../asset/video/light.mp4')} loop autoPlay muted playsInline />
      <div className="wrap">
        <div className="videos">
          <video className='video1' src={require('../asset/video/video.mp4')} loop autoPlay muted playsInline />
          <video className='video2' src={require('../asset/video/video.mp4')} loop autoPlay muted playsInline />
          <video className='video3' src={require('../asset/video/video.mp4')} loop autoPlay muted playsInline />
        </div>{/* video */}
        <div className="textbox">
          <small>Dance Classes</small>
          <h2>
            <span>Modern </span>
            <span>&amp; Classic</span>
          </h2>
          <p>
            <em>
              춤은 혼(정신)과 몸(신체)을 통해 무언가를 표현하는 예술의 한 종류이다. 사회적 상호작용 또는 표현의 수단으로 이용되기도 하며,
              영적인 의식 또는 공연 등에도 춤이 이용된다.
              예술의 관점에서는 미적(美的) 정서를 리듬에 맞춰 신체로 표현하는 공연예술이다.
              음악 또는 박자에 맞춰 몸을 움직이는 예술적 행위이지만, 춤에 음악이 꼭 필요한 것은 아니다.
            </em>
          </p>
          <a href="#">
            learn more
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>{/* textbox */}
      </div>{/* wrap */}
    </section >
  );
};

export default CompSection1;