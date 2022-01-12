import React from 'react'

const About = () => {
    return (
        <div className='about'>
            <div className="container">
               <div className="row">
                   <div className="col-6 p-25">
                    <h3>About Us</h3>
                    <h1>WELCOME TO SAHIL FOOD</h1>
                    <p>Sahil Food is really glad to serve you as a customer. 
                    If life gives you strawberries, make powershakes of it!
                    </p>
                    <div className="about__btn">
                        <button className="btn read-more">READ MORE</button>
                    </div>
                </div>
                   <div className="col-6">
                       <div className="about__img">
                           <img src="/img/aboutus.jpg" alt="about" />
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default About
