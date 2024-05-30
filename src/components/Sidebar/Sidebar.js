// SideBar.js
import React, { useState } from 'react';
import './Sidebar.scss';
import { layout } from '../../constants/SidebarData';
import SideBarMenus from '../SideBarMenus/SideBarMenus';
import Avatar from "../Avatar/Avatar"
import { classNames } from '../../services/util.services';

const SideBar = () => {
  /// states
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="sidebar" style={{ backgroundColor: `${layout.theme.bg}` }}>
      <ProfileSection profile={layout.logo} />
      <div className='s-menus-content'>
        <SideBarMenus />
      </div>

      <div className='s-footer' tabIndex={0} onBlur={() => setShowPopup(false)} onClick={() => setShowPopup((o) => !o)}>
        <Avatar type="sidebar" />
        {
          showPopup && <UserProfile user={layout.user} userPopupMenus={layout.userPopupMenus} />
        }
      </div>
    </div>
  );
};

const ProfileSection = ({ profile }) => {
  return (
    <div className='s-profile-section' title={profile?.content}>
      <img className="sps-profile" src={profile?.image} alt='image' />
      <div className="sps-app-name">{profile?.content}</div>
    </div>
  );
};

const UserProfile = ({ user = {}, userPopupMenus = [] }) => {
  return (
    <div className='user-profile' onClick={(e) => e.stopPropagation()}>
      <div className="up-profile">
        <Avatar type="profile" img={user.thumbnail} />
        <div className="upp-content">
          <div className="uppc-name">{user.name}</div>
          <div className="uppc-email">{user.email}</div>
        </div>
      </div>
      <div className="up-menus">
        {
          userPopupMenus?.map((menu, index) => (
            <ProfileMenu menu={menu} key={`manu-${index}`} />
          ))
        }
      </div>
    </div>
  )
}

const ProfileMenu = ({ menu = {} }) => {
  /// states
  const [showMenu, setMenu] = useState(false);

  return (
    <div className="profile-menu" onClick={() => {
      if (menu?.subMenus?.length) {
        setMenu((o) => !o)
      }
    }}>
      {
        menu?.icon ? <i className={classNames("pm-icon", menu?.icon)} /> : <></>
      }

      <div className="pm-content">{menu.content}</div>
      {
        menu?.subMenus?.length ? <><i className={classNames("pm-right-icon", "icon-chevron-right")}></i>
          {
            showMenu ? <ProfileSubmenus setMenu={setMenu} menus={menu?.subMenus} /> : <></>
          }
        </> : <></>
      }
    </div>
  )
}

const ProfileSubmenus = ({ menus }) => {
  return (
    <div className="profile-submenus">
      {
        menus?.map((menu, index) => (
          <div className="ps-menu" onMouseDown={() => { }} key={`submenu-${index}`}>{menu?.content}</div>
        ))
      }
    </div>
  )
}

export default SideBar;
