"use client";

import Select from "react-select";
import "@/assets/css/ReactSelectInput.css";

function CustomDropdown({ options = [], value, onChange, placeholder = "Select Option",onMenuOpen, isLoading }) {
    
  return (
    <Select options={options} value={value} onChange={onChange} placeholder={placeholder} isClearable={false} styles={customStyles} onMenuOpen={onMenuOpen} isLoading={isLoading}
      formatOptionLabel={(e, { context }) => {
        const isSelected = value?.value === e.value;

        if (context === "menu") {
          return (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
              <span style={{ flexGrow: 1 }}>{e.label}</span>
              <span style={{ width: "18px", height: "18px", border: "2px solid #00b26b", borderRadius: "50%", backgroundColor: isSelected ? "#00b26b" : "#f9f9f9",
                  boxShadow: isSelected ? "inset 0 0 0 3px white" : "none", marginLeft: "12px", flexShrink: 0 }} />
            </div>
          );
        }
        return e.label;
      }}
    />
  );
}

export default CustomDropdown;

const customStyles = {
  control: (base, state) => ({
    ...base,
    border: "2px solid #00b26b",
    borderBottom: state.menuIsOpen ? "0" : "2px solid #00b26b",
    borderRadius: state.menuIsOpen ? "10px 10px 0 0" : "10px",
    backgroundColor: "#f6f5f5",
    padding: "9px 0px",
    // boxShadow: state.menuIsOpen ? "none" : "2px 4px 10px rgba(0, 0, 0, 0.322)",
    // boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.322)",
    cursor: "pointer",
    outline: "none",
    '&:hover': {
      borderColor: "#00b26b",
    },
    
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 8px",
  }),
  menu: (base) => ({
    ...base,
    border: "2px solid #00b26b",
    backgroundColor: "#f6f5f5",
    borderTop: "none",
    borderRadius: "0 0 10px 10px",
    boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.322)",
    marginTop: "-5px",
    padding: "4px 0",
    zIndex: 20,
    outline: "none",
  }),
  menuList: (base) => ({
    ...base,
    paddingTop: 0,
    paddingBottom: 0,
    outline: "none",
  }),
  option: (base, /*{ isSelected, isFocused }*/) => ({
    ...base,
    // backgroundColor: isSelected ? '#F9F9F9' : isFocused ? '#F9F9F9' : 'transparent',
    backgroundColor: "#f6f5f5",
    color: "#000",
    outline: "none",
    padding: "5px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // fontWeight: isSelected ? "600" : "400",
    fontSize: "14px",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: "#f6f5f5",
    },
    '&:active': {
      backgroundColor: "#f6f5f5",
    },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#242424b6",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#000",
  }),
};
