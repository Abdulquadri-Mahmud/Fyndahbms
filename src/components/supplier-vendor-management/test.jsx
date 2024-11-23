import React, { useState } from "react";

export default function SearchableSelect () {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const [selectedOption, setSelectedOption] = useState(""); // State for selected option

  // Example options
  const options = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];

  // Filter options based on search term
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle option selection
  const handleSelectOption = (option) => {
    setSelectedOption(option); // Update selected option
    setSearchTerm(option); // Update the search term to reflect the selected option
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <div style={{ width: "300px", margin: "20px auto", textAlign: "center" }}>
      <h2>Searchable Select</h2>
      <div style={{ position: "relative" }}>
        {/* Input field for search and select */}
        <input
          type="text"
          placeholder="Select or Search..."
          value={searchTerm}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsDropdownOpen(true); // Open dropdown while typing
          }}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        {/* Dropdown options */}
        {isDropdownOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              maxHeight: "150px",
              overflowY: "auto",
              zIndex: 1000,
            }}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectOption(option)}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    backgroundColor:
                      selectedOption === option ? "#f0f0f0" : "white",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor =
                      selectedOption === option ? "#f0f0f0" : "white")
                  }
                >
                  {option}
                </div>
              ))
            ) : (
              <div style={{ padding: "10px", color: "#888" }}>No options found</div>
            )}
          </div>
        )}
      </div>

      {/* Display selected value */}
      {selectedOption && (
        <p style={{ marginTop: "10px" }}>
          <strong>Selected Option:</strong> {selectedOption}
        </p>
      )}
    </div>
  );
};
