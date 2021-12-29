import Select from 'react-select'

export const SelectBusca = props => {
  
  const getOptions = () => [...props.options];
  
  const onChange = (newValue) => {

    debugger
    if(newValue !== null){
      let id = newValue.value;
      debugger
      props.GetSelectId(id);
    }
    
  };

  return (
    <Select 
      className="basic-single"
      classNamePrefix="select"
      options={getOptions()}
      onChange={onChange}
      isClearable={true}
      placeholder='Selecione sua empresa'
    />
  );
};
