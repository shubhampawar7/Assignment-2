import React, { useState } from "react";
import BreadCrumb from "../../pages/BreadCrumb/BreadCrumb";
import "./MainPage.scss";
import MainPageContent from "../MainPageContent/MainPageContent";
import Input from "../Input/Input";
import UseAlert from "../Hooks/UseAlert/UseAlert";
import { useDisclosure } from "@mantine/hooks";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const MainPage = () => {
  const notificationAlert = UseAlert();
  const [opened, { open, close }] = useDisclosure(false);
  //Manage all states in single state
  const [inputs, setInputs] = useState({
    name: "",
    selectedOption: [],
    multiSelectedOption: [],
    checkBoxChecked: false,
    radioChecked: false,
    sliderValue: 50,
  });
  // console.log(inputs.selectedOption,"inputs")
  console.log(inputs, "inputs");

  //Manage all functions in single function
  const handleInputChange = (type, value) => {
    console.log(value, "vaue");
    setInputs({
      ...inputs,
      [type]: value,
    });
    notificationAlert({
      type: "success",
      timelimit: 5000,
      message: "Success message!",
    });
  };
  // Options for select and multi-select inputs
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  const handleButtonClick = () => {
    // Example usage
    notificationAlert("success", "Update successful");
    notificationAlert("warning", "Update successful");
    notificationAlert("info", "Update successful");
    notificationAlert("error", "Update successful");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="main-page-content">
      <div className="mpc-app-header">
        <BreadCrumb />
      </div>
      <div className="main-body">
        {/* Example 1: Text Input */}
        <div>
          <label>Name</label>
          <Input
            type="text"
            value={inputs.name}
            onChange={(value) => handleInputChange("name", value)}
          />
        </div>
        {/* Example 2: Single Select Input */}
        <div>
          <label>Select Option</label>
          <Input
            type="select"
            options={options}
            value={inputs.selectedOption}
            onChange={(value) => handleInputChange("selectedOption", value)}
          />
        </div>
        {/* Example 3: Multi-Select Input */}
        <div>
          <label>Select Multiple Options</label>
          <Input
            type="multiSelect"
            value={inputs.multiSelectedOption}
            onChange={(value) =>
              handleInputChange("multiSelectedOption", value)
            }
            options={options}
          />
        </div>
        {/* Example 4: Radio Input */}
        <div>
          <label>Checkbox</label>
          <Input
            type="radio"
            checked={inputs.radioChecked}
            onChange={(value) => handleInputChange("radioChecked", value)}
          />
        </div>
        {/* Example 5: Checkbox Input */}
        <div>
          <label>Checkbox</label>
          <Input
            type="checkbox"
            checked={inputs.checkBoxChecked}
            onChange={(value) => handleInputChange("checkBoxChecked", value)}
          />
        </div>
        {/* Example 5: Slider Input */}
        <div>
          <label>Slider</label>
          <Input
            type="slider"
            value={inputs.sliderValue}
            onChange={(value) => handleInputChange("sliderValue", value)}
          />
        </div>

        {/* 4.3# Button */}
        <div>
          <Button
            style={{ width: "180px" }}
            onClick={handleButtonClick}
            color="primary"
            size="sm"
            // loading="true"
            // disabled
          >
            Check toastify Alert
          </Button>
        </div>

        {/* 4.6# Modal */}
        <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isModalOpen && (
        <Modal
          onClose={toggleModal}
          header="Sample Modal"
          body={<ModalBody/>}
          style={{ padding: '20px' }}
        />
      )}
    </div>
      </div>
    </div>
  );
};

export default MainPage;

const ModalBody=()=>{
  return(
    <>
        <p>This is the body of the modal.</p>
        <div>
          <label>name</label>
          <input type="text"/>
        </div>

    </>
  )
}
