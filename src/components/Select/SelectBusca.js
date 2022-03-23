import Select from 'react-select'

export const SelectBusca = props => {

  let index = -1;
  const getOptions = () => [...props.options];

  /// :: Verificar se existe index armazenado no localStorage
  if(localStorage.length > 0){

    let obj = props.options.find(x => x.value === localStorage.getItem('value'));
    index = parseInt(obj.value);
  }
  
  /// :: Mudar valor do select
  const onChange = (newValue) => {

    /// :: Verificar foi escolhido algum item do select.
    if(newValue !== null){

      /// :: Armazenar index do select no localStorage
      localStorage.setItem('value', newValue.value);

      /// :: Retornar valor para pagina principal
      props.GetSelectId(newValue.value);
    }
    else{
      /// :: Remover index do select no localStorage ao desmarcar opção
      localStorage.removeItem('value');
    }
    
  };

  return (
    <Select 
      className="basic-single"
      classNamePrefix="select"
      options={getOptions()}
      onChange={onChange}
      isClearable={true}
      defaultValue={props.options[index-1]}
      placeholder='Selecione o item ou digite para buscar'
    />
  );
};
