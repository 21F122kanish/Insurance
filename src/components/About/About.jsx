import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.jpg'


const About = () => {
  return (
    <>
    <Navbar/>
    <div className='about-body'>
        <div className='about-text'>
<h2>Our Team</h2>
<p>LifeTime SettlementRaa Insurance Company Limited(formerly known as Max LifeTime Insurance Company Limited)is an Indian Life insuarnce company headquratered at New Delhi,and the largest non-bank private-sector life insure in India.It is a 80:20 joint venture betwwen LifeTime Finanical Services and Axis Bank.</p>
        </div>
        <div className='about-card'> 
        <div class="card-group">
  <div class="card">
    <img src={card1} class="card-img-top h-75" alt="..."/>
    <div class="card-body">
      <h5 class="text-white card-title">Ram Kumar</h5>
      <p class="text-white card-text"><small class="text-muted">CEO & Founder</small></p>
      <p class="card-text text-white">He is having 12 years of exprience and having good teachnical knowledge</p>
      <a className='text-white'>ramkumar@gmail.com</a>
    </div>
  </div>
  <div class="card">
    <img src={card2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-white">Aman Kumar</h5>
      <p class="card-text text-white"><small class="text-muted">Vice President(V.P)</small></p>
      <p class="card-text text-white">He is having 10 years of exprience and having good technical knowledge</p>
      <a className='text-white'>amankumar@gmail.com</a>
    </div>
  </div>
  <div class="card">
    <img src={card3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-white">Vijay Kumar</h5>
      <p class="card-text text-white"><small class="text-muted">Director</small></p>
      <p class="card-text text-white">He is having 6 years of exprience and having good technical knowledge</p>
      <a className='text-white'>vijaykumar@gmail.com</a>
    </div>
  </div>
</div>
        </div>
    </div>
    </>
  )
}

export default About