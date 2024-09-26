import React, { useState, useEffect, useRef } from "react";

const CustomSelect = ({ options, value, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const selectRef = useRef();

  // Toggles the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handles selection and closes the dropdown
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  // Closes the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-auto min-w-28" ref={selectRef}>
      <div
        className={
          "border-2 border-gray-300 p-2.5 h-11 flex items-center justify-between cursor-pointer bg-white hover:border-[#ff2975] transition-colors uppercase font-medium text-sm space-x-4 hover:border-l-2 " +
          className
        }
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white border border-gray-300 w-full rounded-md shadow-lg max-h-48 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              className={`px-4 py-2 text-sm text-gray-900 cursor-pointer hover:bg-[#ff2975] hover:text-white uppercase font-medium ${
                option === selectedOption ? "bg-[#ff2975] text-white" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
