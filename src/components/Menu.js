import React from 'react'

const Menu = () => {
    return (
        <div className='menu'>
            <div className="container">
               <div className="row">
                   <div className="col-6">
                       <div className="about__img">
                           <img src="/img/chicago.jpg" alt="about" />
                       </div>
                   </div>
                   <div className="col-6 p-25">
                        <h3>The Food Menu</h3>
                        <h1>CHICAGO THIN CRUST</h1>
                        <p>Sahil Food is really glad to serve you as a customer. 
                        If life gives you strawberries, make powershakes of it!
                        </p>
                        <div className="about__btn">
                            <button className="btn read-more">VIEW MORE</button>
                        </div>
                    </div>
               </div>
            </div>  
        </div>
    )
}

export default Menu
