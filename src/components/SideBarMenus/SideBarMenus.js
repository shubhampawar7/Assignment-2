import React from "react";
import { layout } from "../../constants/SidebarData";
import "./SideBarMenus.scss"
import { classNames } from "../../services/util.services";
const SideBarMenus = ({ activeMenu }) => {
  return (
    <>
      {layout?.menus?.map((item, index) => (
        <div className='smc-comp' onClick={item.onClick} key={`menu-${index}`} title={item.content}>
          <i className={classNames("smc-app-logo", item?.icon)} />
          <div className="smc-menu-name">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default SideBarMenus;