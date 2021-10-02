import React from 'react'
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
        <img
        className="home_image" 
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="" >  
        </img>

        {/* Product id, title, price, rating, image */}
        <div className="home_row">
        <Product
          id="12321341"
          title="Redmi (Sky Blue, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek Helio G35 Octa core Processor"
          price={9499}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41sGASjc4-L.jpg"/>

         <Product
          id="12321333"
          title="OnePlus Bullets Wireless Z Bass Edition (Bold Black)"
          price={1099}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/31oTI44Ja3S.jpg"/>
                   
        </div> 
         <div className="home_row">
         <Product
          id="12321321"
          title="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)"
          price={29999}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41Gsj-Q-zOS.jpg"/>

          <Product
          id="12321331"
          title="Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging"
          price={2499}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41TXCe7NGML._AC_SX184_.jpg"/>

          <Product
          id="12321344"
          title="Redmi (Sky Blue, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek Helio G35 Octa core Processor"
          price={9999}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41sGASjc4-L.jpg"/>  
         </div>

         <div className="home_row">
         <Product
          id="12321345"
          title="Redmi Earbuds 3Pro and High Definition Wireless Audio"
          price={3999}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/SEP/CatPage/Brand/redmi/redmiEarBuds3Pro/Launch/Go_Live/D28531759_WLA_Redmi_Earbuds_3_Pro_Go_Live_mob_hero_1242x450.jpg"/>  
         </div>
        {/* Products */}
        </div>
    );
}

export default Home;
