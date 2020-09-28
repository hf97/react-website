import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Button from './Button';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <div
      className={lightBg ? 'herosection' : 'herosection darkBg'}
    >
      <div className='herosection__container'>
        <div
          className='herosection__rowCenter herosection__row'
          style={{
            display: 'flex',
            flexDirection: imgStart === 'start' ? 'herosection__rowReverse' : 'herosection__row'
          }}
        >
          <div className='herosection__column'>
            <div className='herosection__textWrapper'>
              <div className='herosection__topLine'>{topLine}</div>
              <h1 className={lightText ? 'herosection__heading' : 'herosection__heading dark'}>
                {headline}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? 'herosection__subtitle'
                    : 'herosection__subtitle dark'
                }
              >
                {description}
              </p>
              <Link to='/signup'>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  {buttonLabel}
                </Button>
              </Link>
            </div>
          </div>
          <div className='herosection__column'>
            <div className='herosection__imgWrapper'>
              <img src={img} alt={alt} className='herosection__img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
