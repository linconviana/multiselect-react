<div class="fade modal-backdrop show"></div>

.modal-backdrop.show {
    opacity: 0.5;
}

.modal-backdrop.fade {
    opacity: 0;
}

.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100vw;
    height: 100vh;
    background-color: #000;
}

.fade {
    transition: opacity 0.15s linear;
}




/***********************
import { Button, Modal } from 'react-bootstrap';

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
<Button variant="primary" onClick={handleShow}>
	modal
</Button>   
						

<Modal show={show} onHide={handleClose}>
	<Modal.Header closeButton>
	<Modal.Title>Consultas Lancamento Livro Caixa</Modal.Title>
	</Modal.Header>
	<Modal.Body>
		<PesquisarLancamento onChangeParam={onChangeParam} modalId={'caixa-lancamento-pesquisar'}/>
	</Modal.Body>
</Modal>

checked={check ? check : checkAll}



<Form>
	<Form.Control as="select" multiple value={selectEmpresa} onChange={onSelectedOptionsChange}>
		{todasEmpresas.map(empresa => (
		<option key={empresa.id} value={empresa.id}>{empresa.nomeFantasia}</option>
		))}
	</Form.Control>
</Form>


<FloatingLabel controlId="floatingSelect" label="" style={{width:'30%', margin:'2%'}}>
	<Form.Select aria-label="Floating label select example">
	<option>Open this select menu</option>
	<option value="1">One</option>
	<option value="2">Two</option>
	<option value="3">Three</option>
	<option value="3">Tree</option>
	</Form.Select>
</FloatingLabel>


 <FloatingLabel controlId="floatingSelect" label="" style={{width:'30%', marginLeft:'2%', marginTop:'4px'}}>
                                <Form.Select aria-label="" value={selectEmpresa} onChange={onSelectedOptionsChange} style={{paddingTop:'0', paddingBottom:'0', height:'calc(2.5rem + 2px)'}}>
                                <option>Selecione a Empresa</option>
                                {todasEmpresas.map(empresa => (
                                    <option key={empresa.id} value={empresa.id}>{empresa.nomeFantasia}</option>
                                ))}
                                </Form.Select>
                            </FloatingLabel>
							
							<Form.Group as={Col} controlId="my_multiselect_field">
                                <Form.Label>Selecione a Empresa</Form.Label>
                                <Form.Control as="select" multiple value={field}>
                                    <option key="field1" value="field1">Field 1</option>
                                    <option key="field1" value="field2">Field 2</option>
                                    <option key="field1" value="field3">Field 3</option>
                                </Form.Control>
                            </Form.Group>