import { Component } from "react";
import Multiselect from "@khanacademy/react-multi-select";

import "./styles.css";
/// :: yarn add @khanacademy/react-multi-select

export class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
  }

  options = [
    { label: "KPI Degradtion", key: "1", value: "1" },
    { label: "Sleeping Cell", key: "2", value: "2" },
    { label: "Anomaly", key: "3", value: "a3" },
    { label: "Label1", key: "4", value: "4" },
    { label: "Label2", key: "5", value: "5" },
    { label: "Label3", key: "6", value: "6" },
    { label: "Label4", key: "7", value: "7" },
    { label: "Label5", key: "8", value: "8" }
  ];

  /// :: Add seleção no array
  handleSelectedChanged = (selected) => {
    debugger;
    this.setState({ selected });

    /// :: Retornar resultado para pagina principal.
    this.props.multiSelect(selected);
  };

  render() {
    const { selected, isLoading } = this.state;

    return (
      <div>
        <h1>Multiselect dropdown</h1>
        <Multiselect
          options={this.options}
          onSelectedChanged={this.handleSelectedChanged}
          selected={selected}
          isLoading={isLoading}
          disabled={isLoading}
          disableSearch={false}
          overrideStrings={{
            selectSomeItems: "Selecione a empresa",
            allItemsAreSelected: "Você Selecionou todas as empresas",
            selectAll: "Selecionar Todas as Empresas",
            search: "Procurar Por Empresa"
          }}
        />
      </div>
    );
  }
}