import React, { useEffect, useRef, useState } from "react";
// import "./Input.scss";

const Input = (props) => {
  const {
    type = "text",
    value = "",
    onChange = () => {},
    options = [],
    style = {},
    disabled = false,
    readOnly = false,
    placeholder = "",
    size = "",
    loading = false,
    createNew = false,
    ...restProps
  } = props;

  const [open, setOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (type === "multiselect") {
      setSelectedIds(value);
    }
  }, [value, type]);

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleInputChange = (newValue) => {
    onChange(newValue);
  };

  const handleSelectOption = (option) => {
    if (!option.disabled) {
      onChange(option);
    }
    setSearch("");
    setOpen(false);
  };

  const handleMultiSelect = (option) => {
    if (!option.disabled) {
      let updatedIds = [...selectedIds];
      if (!updatedIds.includes(option.value)) {
        updatedIds.push(option.value);
      }
      setSelectedIds(updatedIds);
      onChange(updatedIds);
    }
    setSearch("");
  };

  return (
    <div className={`input-comp-${type}`} style={style} {...restProps}>
      {type === "text" && (
        <input
          type="text"
          className={`input-comp-text-input ${readOnly ? "readonly" : ""}`}
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
        />
      )}

      {type === "select" && (
        <div className="input-comp-select">
          <div className="ics-input" onClick={() => setOpen(!open)}>
            <div className={`icsi-content ${value ? "active" : ""}`}>
              {value || "Select"}
            </div>
            <div className={`icsi-icon ${open ? "active" : ""}`}>
              <i className="icon-chevron-down" />
            </div>
          </div>
          {open && (
            <div className="ics-dropdown">
              {options.map((option, index) => (
                <div
                  key={`dropdown-option-key-${index}`}
                  className={`ics-dropdown-option ${option.disabled ? "disabled" : ""}`}
                  onClick={() => handleSelectOption(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {type === "multiselect" && (
        <div className="input-comp-multiselect">
          <div className="icsm-input" ref={inputRef} onClick={() => setOpen(!open)}>
            <div className={`icsi-content ${selectedIds.length > 0 ? "active" : ""}`}>
              {selectedIds.length > 0 ? (
                selectedIds.map((id) => (
                  <div key={`msl-${id}`} className="icsi-label">
                    {options.find((option) => option.value === id)?.label || id}
                    <span className="icsi-close" onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIds(selectedIds.filter((sid) => sid !== id));
                      onChange(selectedIds.filter((sid) => sid !== id));
                    }}>
                      <i className="icon-xmark" />
                    </span>
                  </div>
                ))
              ) : (
                <div className="icsi-placeholder">Select</div>
              )}
            </div>
            {/* <div className={`icsi-icon ${open ? "active" : ""}`}>
              {loading ? (
                <Spinner style={{ width: 13, height: 13 }} />
              ) : (
                <i className="icon-chevron-down" />
              )}
            </div> */}
          </div>
          {open && (
            <div className="ics-dropdown">
              {options.map((option, index) => (
                <div
                  key={`dropdown-option-key-${index}`}
                  className={`ics-dropdown-option ${option.disabled ? "disabled" : ""}`}
                  onClick={() => handleMultiSelect(option)}
                >
                  {option.label}
                </div>
              ))}
              {createNew && (
                <div className="ics-dropdown-option" onClick={() => {
                  onChange({ label: "create", value: search });
                  setSearch("");
                }}>
                  Create: <span>{search}</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Add other types (radio, checkbox, slider, etc.) as per requirement */}
    </div>
  );
};

export default Input;
