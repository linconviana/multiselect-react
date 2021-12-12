import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MultiSelect } from './components/MultiSelect/multiSelect';

function App() {

  /// :: Receber resultado do componente MultiSelect
  const GetResultMultiSelect = (result: any) =>{
    debugger
    let res = result;
    debugger
  }

  return (
    <>
      <div style={{margin:'400px'}}>

        {/* https://codesandbox.io/s/multiselect-react-forked-flci6?file=/src/styles.css:0-1127 */}
        {/* yarn add @khanacademy/react-multi-select*/}
        <MultiSelect multiSelect={GetResultMultiSelect}/>
      </div>
    </>
   
  );
}

export default App;
