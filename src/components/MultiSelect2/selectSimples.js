//yarn add multiselect-react-dropdown
import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

const options = [
  { name: "Srigar", id: 1 },
  { name: "Sam", id: 2 },
  { name: "adam", id: 3 }
];

export default function SelectSimples() {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(items);
  };

  const handleSelect = (selectedList) => {
      debugger
    setItems(selectedList);
  };

  const handleRemove = (selectedList) => {
      debugger
    setItems(selectedList);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Multiselect
          options={options} // Options to display in the dropdown
          selectedValues={items} // Preselected value to persist in dropdown
          onSelect={handleSelect} // Function will trigger on select event
          onRemove={handleRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          placeholder='Selecione sua empresa'
          showArrow={true}
          singleSelect={true}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}