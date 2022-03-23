import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MultiSelect } from './components/MultiSelect/multiSelect';
import SelectMulti from './components/MultiSelect2/selectMulti';
import SelectSimples from './components/MultiSelect2/selectSimples';
import { MultiSelect3 } from './components/MultiSelect3/MultiSelect3';
import { useState } from 'react';
import MySelect from './components/MultiSelect4/MySelect';
import { SelectBusca } from './components/Select/SelectBusca';

function App() {

  /// :: Receber resultado do componente MultiSelect
  const GetResultMultiSelect = (result: any) =>{
    debugger
    let res = result;
    debugger
  }

  const [selected, setSelected] = useState([]);
  const options = [
    { key: "1", value: "1", label: "Jimmy" },
    { key: "2", value: "2", label: "Laura" },
    { key: "3", value: "3", label: "Tommy" },
    { key: "4", value: "4", label: "Jane" },
    { key: "5", value: "5", label: "Mike" },
    { key: "6", value: "6", label: "Carlos" },
    { key: "7", value: "7", label: "Maria" },
    { key: "8", value: "8", label: "Lucas" },
    { key: "9", value: "9", label: "Ricardo" },
    { key: "10", value: "10", label: "Lincon" },
    { key: "11", value: "11", label: "Miriã" },
    { key: "12", value: "12", label: "Heitor" }
  ];
  
  const testeArray = () => {
    debugger
    let teste = selected.map((x: any) => x.value);
    debugger
  }

  const GetSelectId = (id: any) => {

    let currentId = id;
    debugger
  }

  return (
    <>

      <div style={{margin:'100px'}}>
        {/*https://react-select.com/home#getting-started 
        https://codesandbox.io/s/8lwg4?module=/example.tsx&file=/example.tsx:1527-1546*/}
        <SelectBusca options={options} GetSelectId={GetSelectId}/>
      </div>

      <div style={{margin:'100px'}}>

        {/* https://codesandbox.io/s/multiselect-react-forked-flci6?file=/src/styles.css:0-1127 */}
        {/* yarn add @khanacademy/react-multi-select*/}
        <MultiSelect multiSelect={GetResultMultiSelect}/>
      </div>

      <div style={{margin:'100px'}}>
        {/* https://codesandbox.io/s/c1k8b?file=/src/App.js:0-1099 */}
        { /* yarn add multiselect-react-dropdown */}
        <h1>Multi Select</h1>
        <SelectMulti />
      </div>

      <div style={{margin:'100px'}}>
        {/* https://codesandbox.io/s/c1k8b?file=/src/App.js:0-1099 */}
        { /* yarn add multiselect-react-dropdown */}
        <h1>Select Simples</h1>
        <SelectSimples />
      </div>

      <div style={{margin:'100px'}}>
        {/*https://codesandbox.io/s/distracted-panini-8458i?file=/src/App.js:380-453 */}
        {/*https://github.com/JedWatson/react-select */}
        {/*yarn add react-select */}
        <MultiSelect3 options={options} value={selected} onChange={setSelected} />

        <br />
        <button onClick={testeArray}>teste</button>
      </div>

      <div style={{margin:'100px'}}>
        {/*https://codesandbox.io/embed/upbeat-sun-0q3o4 */}
        <MySelect />
      </div>
    </>
   
  );
}

export default App;
