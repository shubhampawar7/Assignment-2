import React, { useState } from "react";
import "./MainPageContent.scss";
import { tableHeaderData } from "../../constants/TableHeaderData";
import Avatar from "../Avatar/Avatar";
import DownArrowIcon from "../../assets/Images/DownArrowIcon.png";
import DownArrowIconSmall from "../../assets/Images/DownArrowIconSmall.png";
import { Popover } from "@mantine/core";
import EditIcon from "../../assets/Images/EditIcon.png";
import DeleteIcon from "../../assets/Images/DeleteIcon.png";



const MainPageContent = () => {
  return (
    <div className="mainpage-content">
      <div className="mc-table-content">
        <div className="mtc-table-list">
          {/* Table Header */}
          <div className="mtl-header">
            <div className="mh-content">
              <div className="mc-arrow-icon"></div>
              <TableHeader data={tableHeaderData.header} />
              <div className="mc-arrow-icon"></div>
            </div>
          </div>
          {/* Table Body */}

          <div className="mtl-body-content">
            {tableHeaderData.rows.map((item) => (
              <div className="mctctl-body">
                <TableRows data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TableHeader = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <>
          <div class="mc-column">
            <div class="mc-header-content">
              <div class="mhc-label">{item.content}</div>
              <i className="icon-caret-down"></i>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

const TableRows = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="mb-row">
        <div className="mr-arrow-icon">
          <i className="icon-chevron-down"></i>
        </div>

        <>
          <div class="mr-task-comp">
            <div class="mtc-task-content">
              <div className="mtc-label">{data.stage}</div>
            </div>
          </div>
          <div class="mr-task-comp">
            <div class="mtc-task-content">
              <div className="mtc-label">{data.taskType}</div>
            </div>
          </div>
          <div class="mr-task-comp">
            <div class="mtc-task-content">
              <div className="mtc-label">{data.team}</div>
            </div>
          </div>
          <div class="mr-task-comp">
            <div class="mtc-task-content">
              <div className="mtc-avatar">
                <Avatar />
              </div>
            </div>
          </div>
          <div class="mr-task-comp">
            <div class="mtc-task-content">
              <div className="mtc-label">{data.startDate}</div>
            </div>
          </div>
          <div class="mr-task-comp">
            <div class="mtc-task-content">
              <div className="mtc-label">{data.deadline}</div>
            </div>
          </div>
        </>

        <div
          className="mr-menus"
          tabIndex={0}
          onBlur={() => setShowPopup(false)}
          onClick={() => setShowPopup((o) => !o)}
        >
          <i className="icon-ellipsis-vertical" />
          {showPopup && <ActionMenus />}
        </div>
      </div>
    </>
  );
};

const ActionMenus = () => {
  return (
    <>
      <div className="action-menus-comp" >
        <div className="amc-items">
          <img className="ai-edit-icon" src={EditIcon}></img>
          <div className="ai-content">Edit</div>
        </div>
        <div className="amc-items">
          <img className="ai-edit-icon" src={DeleteIcon}></img>
          <div className="ai-content">Delete</div>
        </div>
      </div>
    </>
  );
};

export default MainPageContent;
