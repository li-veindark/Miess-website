//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import {CgMenuRound} from "react-icons/cg";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);
 


    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };



  return (
    <>
      <div id="header" style={{direction:"rtl"}}>
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar  rtl={true} collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? " " : "MENU"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <CgMenuRound />
              ) : ( <CgMenuRound />)
                
              }
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu>
              <MenuItem>HOME</MenuItem>
              <MenuItem>ABOUT</MenuItem>
              <MenuItem>OUR EVENTS</MenuItem>
              <MenuItem>MECHOLYMPIA</MenuItem>
              <MenuItem>GALLERY</MenuItem>
              <MenuItem active={true} >CONTACT</MenuItem>
            </Menu>
          </SidebarContent>

        </ProSidebar>
      </div>
    </>
  );
};

export default Header;