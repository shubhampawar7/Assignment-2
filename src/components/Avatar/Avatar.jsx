import React, { useState } from "react";
import "./Avatar.scss";

/// services
import { classNames } from "../../services/util.services";

const Avatar = ({
  alt = "",
  type = "normal",
  onClick = () => {},
  style = {},
  img,
}) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div
      className={classNames("avatar-comp", type)}
      onClick={onClick}
      style={style}
    >
      {img ? (
        <>
          {imgError ? (
            <div className="avatar-comp-default">
              <i className="icon-avatar avatar-comp-men" />
            </div>
          ) : (
            <>
              {imgLoading && (
                <div className="ac-loader">
                  <div className="acl-spinner" />
                </div>
              )}
              <img
                onError={() => {
                  setImgError(true);
                  setImgLoading(false);
                }}
                onLoad={() => setImgLoading(false)}
                src={img}
                alt=""
                className="avatar-comp-img"
              />
            </>
          )}
        </>
      ) : alt ? (
        <div className="avatar-comp-alt">{alt}</div>
      ) : (
        <div className="avatar-comp-default">
          <i className="icon-avatar avatar-comp-men" />
        </div>
      )}
    </div>
  );
};

export default Avatar;
