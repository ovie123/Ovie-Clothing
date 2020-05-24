import React from "react";
import "./homepage.style.scss";

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      {/* FIRST MENU ITEM */}
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>HATS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      {/* SECOND MENU ITEM */}
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>JACKET</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      {/* THIRD MENU ITEM */}
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>SNEAKERS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      {/* FOURTH MENU ITEM */}
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>WOMENS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      {/* FIFTH MENU ITEM */}
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>MENS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
