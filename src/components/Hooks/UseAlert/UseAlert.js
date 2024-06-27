import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UseAlert = () => {
  const notificationConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const notificationAlert=(type="",message="",timeLimit=3000, )=>{
      const config={
        ...notificationConfig,
        autoClose:timeLimit
      }

      switch (type) {
        case "success":
          toast.success(message, config);
          break;
        case "info":
          toast.info(message, config);
          break;
        case "warning":
          toast.warning(message, config);
          break;
        case "error":
          toast.error(message, config);
          break;
        default:
          toast(message, config);
          break;
      }

  }
  return notificationAlert;
};

export default UseAlert;
