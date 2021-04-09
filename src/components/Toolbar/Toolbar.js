import "./Toolbar.css";
import { MdMenu, MdClose } from "react-icons/md";
import React from 'react';
import { useMediaQuery } from "react-responsive";

function Toolbar() {
  const [menuCollapsed, setMenuCollapsed] = React.useState(true);
  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });
  return (
    <div className="toolbar-container">
      <div className="logo">LOGO</div>
      <div className="menu-icon" onClick={() => setMenuCollapsed(menuCollapsed ? false : true)}>{menuCollapsed ? <MdMenu /> : <MdClose />}</div>
      <div className="menu">
        <ul className="menu-list" style={{display: isMobile && menuCollapsed ? "none" : "block"}}>
          <li>HOME</li>
          <li>SHOP</li>
          <li>REVIEWS</li>
          <li>BLOG</li>
        </ul>
      </div>
    </div>
  );
}

export default Toolbar;
