import React, { useState } from "react";
import "./Avatar2.scss";
import DefaultIcon from "../../assets/Images/DefaultIcon.png";
const Avatar2 = ({ size = "md", img, alt = "", tooltip }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <div className="avatar" title={tooltip}>
        {img ? (
          <>
            {!imgError ? (
              <img
                className={`avatar-${size}`}
                src={img}
                alt={alt}
                onError={() => {
                  setImgError(true);
                }}
              />
            ) : (
              <div className="avatar-comp-default">
                <i className="icon-avatar avatar-comp-men" />
              </div>
            )}
          </>
        ) : alt !== "" ? (
          <div className="avatar-comp-alt">
            <img alt="alt"></img>
          </div>
        ) : (
          <div className="avatar-comp-default">
            <i className="icon-avatar avatar-comp-men" />
          </div>
        )}
      </div>
    </>
  );
};

export default Avatar2;
