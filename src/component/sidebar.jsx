import React from 'react'
import Img from '../utilities/img1.jpg'
import Img2 from '../utilities/img2.png'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-header">
            <img src={Img2} alt="Avatar" className="profile"></img>
            <img src={Img} alt="Avatar" className="profile-default"></img>
            <div className="profileName">Wing</div> 
        </div>
        <div className="sidebarItem">Search bar</div>
        <div className="sidebarItem">Dashboard</div>
        <div className="sidebarItem">Analytics</div>
        <div className="sidebarItem">Research</div>
        <div className="sidebarItem">Notifications</div>
        <div className="sidebarItem">Setting</div>
        <div className="sidebarItem">Dark mode</div>
    </div>
    
  )
}
