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
            <em className='mono'>
              Hip-Hop
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
              힙합(Hip Hop)은 1970년대 미합중국 뉴욕의 브롱스에서 유행하기 시작한 춤과 대중음악으로부터 파생된 거리문화이다.
              또한 미합중국 뉴욕의 브롱스에서 아프리카계 미국인과 캐리비안 미합중국인, 히스패닉계 주민의 커뮤니티에서 행해지고 있었던 블록 파티에서 태어난 문화이다.
              힙합은 랩, 비보잉, 크래피티, 비트박스, (디제잉) 크게 4요소로 이루어져 있다.
            </em>
          </p>
          <a href="">Hip-Hop</a>
        </div>
      </div>

      <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <filter id="fractal">
            <feImage xlink="" x="0" y="0" result="rippleImage" xlinkHref={`${process.env.PUBLIC_URL}./img/ripple.png`} />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="rippleImage"
              result="displacementMap" colorInterpolationFilters="sRGB" scale="100" />
            <feComposite operator="in" in2="rippleImage"></feComposite>
          </filter>
        </defs>
      </svg>
    </section>
  );
};

export default CompSection2;