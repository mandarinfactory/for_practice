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
              코딩없이 시각적으로 추가, 편집, 삭제 그리고 수정이 가능하다.
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