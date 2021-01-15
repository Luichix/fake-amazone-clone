import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image'
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_es_US_1x._CB412256579_.jpg'
                    alt=''/>
                <div className='home_row'>
                    <Product 
                        id='15131851'
                        title='The lean startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg' 
                        rating={5} />
                    <Product 
                        id='15151851'
                        title='The lean startup'
                        price={109.99}
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg' 
                        rating={3} />
                </div>
                <div className='home_row'>
                <Product 
                        id='15151843'
                        title='The lean startup'
                        price={109.99}
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg' 
                        rating={5} />
                    <Product 
                        id='151518955'
                        title='The lean startup'
                        price={399.99}
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg' 
                        rating={4} />
                    <Product 
                        id='15151071'
                        title='The lean startup'
                        price={59.99}
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg' 
                        rating={2} />
                </div>
                <div className='home_row'>
                <Product 
                        id='96211823'
                        title='The lean startup'
                        price={10.99}
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg' 
                        rating={3} />
                </div>
            </div>           
        </div>
    )
}

export default Home
