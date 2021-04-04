import React from 'react';
import { Link } from "react-router-dom";
import background_image from '../../img/backgroundimg.png';
import title_font from '../../img/invalid-name.png';
import card_image from '../../img/4.png';
import start_button from '../../img/start.png';
import logossho from '../../img/sshologo.png';

const LandingPage = () => {
  return (
    <div className="Landing_back">
      <div className='ssho-logo'>
				<img className="sshologo" src={logossho} alt="logo of s-sho"></img>
			</div>
      <div>
        <img className="background_image" src={background_image} alt="background"></img>
      </div>
      <div className="main_content_landing">
        <img className="title" src={title_font} alt="패션 성향 테스트"></img>
        <p className="normal_font">스와이프로 나만의 패션 성향 알아보기</p>
        <img className="card" src={card_image} alt="card with a black background"></img>
        <div>
        <Link to ='questions'><img className="button_image" src={start_button} alt="start button"></img></Link>
      </div>
      </div>
      
    </div>
  );
}


export default LandingPage;
 