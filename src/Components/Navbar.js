import React from 'react'
import "./Navbar.css"
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
const  Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <h3>LOGO</h3>
            </div>
    
            <div className="navbar-center">
            <SearchIcon/>
            <input placeholder="Type to search something" type="text"/>
        
            </div>

            <div className="navbar-right">
                <NotificationsIcon/>
                <SettingsIcon/>
                <AccountCircleIcon/>
            </div>

            
        </div>
    )
}

export default  Navbar 
