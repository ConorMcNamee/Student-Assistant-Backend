import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {

    return(
        <div className="Sidebar">
            <h1>Student Assistant</h1>
            <div className="SidebarLinks">
                <li className="SidebarLinkItem"><Link to='/'>Home</Link></li>
                <li className="SidebarLinkItem"><Link to='/assignments'>Assignment</Link></li>
                <li className="SidebarLinkItem"><Link to='/notes'>Notes</Link></li>
                <li className="SidebarLinkItem"><Link to='/notes'>Calendar</Link></li>
            </div>
        </div>
    )
}

export default Sidebar;