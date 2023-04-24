import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_es_US_1x._CB412256579_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="131851"
            title="Sky startup 1"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            rating={5}
          />
          <Product
            id="5151851"
            title="The lean startup 2"
            price={109.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="1151843"
            title="Show startup 3"
            price={109.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
          />
          <Product
            id="15518955"
            title="Win startup 4"
            price={399.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            rating={4}
          />
          <Product
            id="511071"
            title="Heavy startup 5"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
            rating={2}
          />
        </div>
        <div className="home_row">
          <Product
            id="96211823"
            title="Fuck startup 6"
            price={10.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
            rating={3}
          />
          <Product
            id="96211823"
            title="Fuck startup 6"
            price={10.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="96211823"
            title="Fuck startup 6"
            price={10.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="131851"
            title="Sky startup 1"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            rating={5}
          />
          <Product
            id="5151851"
            title="The lean startup 2"
            price={109.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
