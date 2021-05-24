import React from 'react';
import pic1 from '../images/cap-1.png';
import pic2 from '../images/cap-2.png';
import pic3 from '../images/mug1.png'

const Slider = () => {
    return (
        <div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src={pic1} alt="pic1"/>
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src={pic2} alt="pic2"/>
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src={pic3} alt="pic3"/>
  <div class="text">Caption Three</div>
</div>

</div>
    )
}

export default Slider
