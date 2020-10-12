import React from 'react'
import Product from '../Product/Product'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" />
                <div className='home_row'>
                    <Product id="1" title='the orgin - dan brown . A novel about that is unknown to me and i never read dan brown novel ' price={19.99} image='https://m.media-amazon.com/images/I/51GDJjCUN1L.jpg' 
                    rating={5}
                    />             
                    <Product id="2" title='the orgin - dan brown . A novel about that is unknown to me and i never read dan brown novel ' price={19.99} image='https://m.media-amazon.com/images/I/51GDJjCUN1L.jpg' 
                    rating={5}
                    />             
                    
                </div>
                <div className='home_row'>
                <Product id="3" title='the orgin - dan brown . A novel about that is unknown to me and i never read dan brown novel ' price={19.99} image='https://m.media-amazon.com/images/I/51GDJjCUN1L.jpg' 
                    rating={5}
                    />     
                <Product id="4" title='the orgin - dan brown . A novel about that is unknown to me and i never read dan brown novel ' price={19.99} image='https://m.media-amazon.com/images/I/51GDJjCUN1L.jpg' 
                    rating={5}
                    />     
                <Product id="5" title='the orgin - dan brown . A novel about that is unknown to me and i never read dan brown novel ' price={19.99} image='https://m.media-amazon.com/images/I/51GDJjCUN1L.jpg' 
                    rating={5}
                    />     
                </div>
                <div className='home_row'>
                <Product id="6" title='the orgin - dan brown . A novel about that is unknown to me and i never read dan brown novel ' price={19.99} image='https://m.media-amazon.com/images/I/51GDJjCUN1L.jpg' 
                    rating={5}
                    />     
                    
                </div>
            </div>
         
        </div>
    )
}

export default Home
