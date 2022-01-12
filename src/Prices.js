import React from 'react'

const Prices = () => {
    return (
        <div className='prices'>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src="/img/burger.jpg" alt="burger" />
                            </div>
                            <h1 className="price-heading">Beef Burger</h1>
                            <p className="price__text">
                                Fresh beef burger, enjoy its taste! 
                            </p>
                            <p className="price_sek">49 kr</p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src="/img/grilled-chicken.jpg" alt="chicken" />
                            </div>
                            <h1 className="price-heading">Grilled Chicken</h1>
                            <p className="price__text">
                                Our chicken food is unique, enjoy its taste! 
                            </p>
                            <p className="price_sek">89 kr</p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src="/img/grilled-lax.jpg" alt="lax" />
                            </div>
                            <h1 className="price-heading">Grilled Lax</h1>
                            <p className="price__text">
                                The heaviest and strongest meat, enjoy its taste! 
                            </p>
                            <p className="price_sek">110 kr</p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src="/img/karahi.jpg" alt="karahi" />
                            </div>
                            <h1 className="price-heading">Beef Karahi</h1>
                            <p className="price__text">
                                A karahi food that reminds you of Pakistan and India, enjoy the spice! 
                            </p>
                            <p className="price_sek">130 kr</p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src="/img/kebab.jpg" alt="kebab" />
                            </div>
                            <h1 className="price-heading">Kebab</h1>
                            <p className="price__text">
                                Hand cooked kebab, will be remembered forever, enjoy its taste! 
                            </p>
                            <p className="price_sek">119 kr</p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src="/img/rack-soup.jpg" alt="shrimp" />
                            </div>
                            <h1 className="price-heading">Shrimp soup</h1>
                            <p className="price__text">
                                Tasty shrimps, enjoy seafood! 
                            </p>
                            <p className="price_sek">69 kr</p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src="/img/sallad-fish.jpg" alt="fish" />
                            </div>
                            <h1 className="price-heading">Fish with Sallad</h1>
                            <p className="price__text">
                               Enjoy the test of fish with fresh vegs! 
                            </p>
                            <p className="price_sek">99 kr</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices
