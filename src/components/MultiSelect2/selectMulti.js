//yarn add multiselect-react-dropdown
import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

const options = [
  { name: "Srigar", id: 1 },
  { name: "Sam", id: 2 },
  { name: "adam", id: 3 },
  { name: "Srigar2", id: 4 },
  { name: "Sam2", id: 5 },
  { name: "adam3", id: 6 },
  { name: "Srigar4", id: 7 },
  { name: "Sam4", id: 8 },
  { name: "adam4", id: 9 },
  { name: "Srigar5", id: 10 },
  { name: "Sam5", id: 11 },
  { name: "adam5", id: 12 }
];

export default function SelectMulti() {
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
          showCheckbox={true}
          selectedList={true}
          avoidHighlightFirstOption={-1}
          emptyRecordMsg="Empresa não encontrada"
          selectedValues={[]}
          
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}