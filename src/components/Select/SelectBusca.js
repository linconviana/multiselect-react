import Select from 'react-select'

export const SelectBusca = props => {
  
  const getOptions = () => [...props.options];
  
  const onChange = (newValue) => {

    debugger
    let id = newValue.value;
    debugger
    props.GetSelectId(id);
    
  };

  return (
    <Select 
      options={getOptions()}
      onChange={onChange}
    />
  );
};
