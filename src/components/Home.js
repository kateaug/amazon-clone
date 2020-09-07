import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""
            />
            <div className="home__row">
                <Product 
                    id="0001"
                    title="Harry Potter and the Philosopher's Stone"
                    price={10.49}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
                />
                 <Product
                    id="0002"
                    title="AmazonBasics Patio String Light, 25 Feet, Black"
                    price={21.54}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71S4Ih0QoQL._AC_UL320_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="0003"
                    title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for phone-call and Alexa voice control, Black"
                    price={348.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY218_.jpg"
                />
                <Product
                    id="0004"
                    title="HP 63 | Ink Cartridge | Tri-color | F6U61AN"
                    price={28.89}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Ty3sjgtbL._AC_US160_.jpg"
                />
                <Product
                    id="0005"
                    title="Apple EarPods with Lightning Connector - White"
                    price={19.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/21zodo7QkUL._AC_US160_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="0006"
                    title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                    price={369.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US160_.jpg"
                />
                <Product
                    id="0007"
                    title="Oxford Spiral Notebooks, 1 Subject, College Ruled Paper, Durable Plastic Cover, 100 Sheets, Divider Pocket, 3 per Pack (10390) "
                    price={9.89}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41OJa46VMDL._AC_US327_QL65_.jpg"
                />   
            </div>
            
        </div>
    )

};

export default Home;