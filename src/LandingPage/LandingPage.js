import React from 'react';
import './LandingPage.css';
// import {} from '../images/shoes-1.jpg'
// import Souleymane from '../../souleymane-3.jpg'

export default function LandingPage() {
  // <img src={Souleymane} alt="maPhoto"></img>
  return (
     <div>
    <section className="landingHeader">
      <div className= "firtssection">
      <h2>What is Garage-Sales App?</h2>
      <p>Garage sales app is a tool for people who need to complete a quick sale of their house items such as sofa, tv, cell phones, and others online. It will allow to access more buyers and make good deals. </p>
      </div>
      <div className="secondsection">
      <h2>Why an App for Garage sales</h2>
      <p>This App helps to make the neighboring sales more attractive and increase the target population. In addition, the garage sales app also responds to security needs where buyers and sellers can peacefully meet and complete their business. Please Register and then sign.</p>
      </div>
      <div className="thirdsection">
      <h2>Why an App for Garage sales</h2>
      <p>Greate accessibility nationwide  to hundreds of items in a single platform. In addition, it is an exchange platform to create a tool of communication between salers and buyers.</p>
      </div>
    </section>
      

   </div>
    
  )
};