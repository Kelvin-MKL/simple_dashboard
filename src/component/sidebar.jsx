import React from "react";
import Img from "../utilities/img1.jpg";
import Img2 from "../utilities/img2.png";

import { AiFillDashboard as Dashboard } from "react-icons/ai";
import { MdAnalytics as Analytics } from "react-icons/md";
import { GiArchiveResearch as Research } from "react-icons/gi";
import { IoMdNotifications as Notifications } from "react-icons/io";
import { AiFillSetting as Setting } from "react-icons/ai";
import { useState } from "react";

export default function Sidebar() {
  const [expand, setExpand] = useState("false");

  return (
    <div className={expand ? "sidebar" : "sidebar minimal"}>
      <div className='sidebar-header'>
        <img src={Img2} alt='Avatar' className='profile'></img>
        <img src={Img} alt='Avatar' className='profile-default'></img>
        <div className='profileName'>Wing</div>
        <button className='expand' onClick={() => setExpand(!expand)}>
          {"<"}
        </button>
      </div>
      <div className='sidebarItem'>Search bar</div>
      <div className='sidebarItem'>
        <Dashboard className='icon-db' />
        <div className='Text'>Dashboard</div>
      </div>
      <div className='sidebarItem'>
        <Analytics className='icon-ana' />
        <div className='Text'>Analytics</div>
      </div>
      <div className='sidebarItem'>
        <Research className='icon-re' />
        <div className='Text'>Research</div>
      </div>
      <div className='sidebarItem'>
        <Notifications className='icon-noti' />
        <div className='Text'>Notifications</div>
      </div>
      <div className='sidebarItem'>
        <Setting className='icon-set' />
        <div className='Text'>Settings</div>
      </div>
      <div className='sidebarItem'>Dark mode</div>
    </div>
  );
}
