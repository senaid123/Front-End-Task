import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const  Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeOutlinedIcon} title="Home"/>
            <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Media Library"/>
            <SidebarRow Icon={PieChartOutlinedIcon} title="Analytics"/>
            <SidebarRow Icon={SettingsOutlinedIcon} title="Settings"/>
        </div>
    )
}

export default Sidebar
