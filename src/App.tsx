import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MultiSelect } from './components/MultiSelect/multiSelect';
import SelectMulti from './components/MultiSelect2/selectMulti';
import SelectSimples from './components/MultiSelect2/selectSimples';

function App() {

  /// :: Receber resultado do componente MultiSelect
  const GetResultMultiSelect = (result: any) =>{
    debugger
    let res = result;
    debugger
  }

  return (
    <>
      <div style={{margin:'200px'}}>

        {/* https://codesandbox.io/s/multiselect-react-forked-flci6?file=/src/styles.css:0-1127 */}
        {/* yarn add @khanacademy/react-multi-select*/}
        <MultiSelect multiSelect={GetResultMultiSelect}/>
      </div>

      <div style={{margin:'200px'}}>
        {/* https://codesandbox.io/s/c1k8b?file=/src/App.js:0-1099 */}
        { /* yarn add multiselect-react-dropdown */}
        <h1>Multi Select</h1>
        <SelectMulti />
      </div>

      <div style={{margin:'200px'}}>
        {/* https://codesandbox.io/s/c1k8b?file=/src/App.js:0-1099 */}
        { /* yarn add multiselect-react-dropdown */}
        <h1>Select Simples</h1>
        <SelectSimples />
      </div>
    </>
   
  );
}

export default App;
