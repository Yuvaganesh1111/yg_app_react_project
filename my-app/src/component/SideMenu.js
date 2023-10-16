import React, { useState, useEffect } from "react";
import hexagon from "../image/hexagon.png";

import profile from "../image/profile.jpg";
import menu_bar from "../image/menu_bar.png";

import { NavLink } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import menuItem from "../data/sidemenu_data";
import { useMediaQuery } from 'react-responsive';

function SideMenu({ children }) {
  const [isopen, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 990}); // Define the screen width breakpoint as needed

  // Define the width and height based on the screen size
  const width = isSmallScreen ? 200 : 400; 

  const toggle = () => {
    setOpen(!isopen);
  };

  return (
    <div className="container">
      <div className={
				isopen
					? "big-sidebar"
					: "sidebar"
			}>
        <div className="top_section">
          <div className="bars">
            <img src={hexagon} className="hex"></img>
            <img src={menu_bar} className="toggle" onClick={toggle}></img>
          </div>
          <h1 className="bigheading" >DashBoard</h1>
          <h1 className="heading" style={{display:isopen ? "":"none"}} >DashBoard</h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <img src={item.icon}></img>
            <div className="big">{item.name}</div>
            <AiOutlineRight className={`arrow${index} bigico`} />
            <div className="link_text"  style={{display:isopen ? "":"none"}}>{item.name}</div>
            <AiOutlineRight className={`arrow${index}`} style={{display:isopen ? "":"none"}}/> 
          </NavLink>
        ))}
        <div className="user">
          <img src={profile} className="profile" />
          <div className="big">
            <p className="name">Yuva</p>
            <p className="role">SoftwareDeveloper</p>
          </div>
          <div className="info" style={{display:isopen ? "":"none"}}>
            <p className="name">Yuva</p>
            <p className="role">SoftwareDeveloper</p>
          </div>
          <BsChevronDown />
        </div>
      </div>
      
    </div>
  );
}

export default SideMenu;
