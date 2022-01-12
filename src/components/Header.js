import React from 'react'
import Navbar from './Navbar'
const Header = () => {
    return (
        <div className='banner'>
            <Navbar/>
            <div className="banner__content">
                <div className='container'>
                    <div className="banner__text">
                        <h3>Food Delivery</h3>
                        <h1>SAHIL FOOD</h1>
                        <p>Located at Malmö. We offer a wide array of fresh food – 
                            We use the freshest ingredients in preparing our food to 
                            provide the best quality and taste. Try our delicious food today!
                        </p>
                        <div className="banner__btn">
                            <button className='btn deliver-now'>DELIVER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
