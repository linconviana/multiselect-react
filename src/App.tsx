import { FloatingLabel, Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
/// https://react-bootstrap.github.io/components/forms/



function App() {

  const [colors, setColors] = useState<String[]>();
  
  // Handle the onChange event of the select
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    debugger
    const selectedOptions = event.currentTarget.selectedOptions;

    const newColors = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      newColors.push(selectedOptions[i].value);
    }

    setColors(newColors);
  }
  
  return (
    <>
        <div>
          <FloatingLabel controlId="floatingSelect" label="" style={{width:'20%', margin:'2%'}}>
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="3">Tree</option>
            </Form.Select>
          </FloatingLabel>
        </div>

        <select className="selectpicker" multiple data-live-search="true">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>

        <div className="container">
          <h3>KindaCode.com</h3>
          <select multiple size={5} onChange={onChangeHandler} className="select">
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Indiogo">Indigo</option>
            <option value="Purple">Purple</option>
            <option value="Lime">Lime</option>
            <option value="Amber">Amber</option>
          </select>
          <br />
          <div>
            {/* Display the selected values */}
            {colors &&
              colors.map((color) => <span className="color">{color}</span>)}
          </div>
        </div>
    </>
   
  );
}

export default App;
