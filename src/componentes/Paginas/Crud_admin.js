import React from "react";
import '../styles/admin.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import Navbar_admin from "../Navegacion/Navbar_Admin";
import Footer from '../Navegacion/Footer';

const data = [
  { id: 1, local: "Qbano", tipo: "Restaurantes" },
  { id: 2, local: "BBC", tipo: "Licores" },
  { id: 3, local: "Alkosto", tipo: "Mercados" },
  { id: 4, local: "La Rebaja", tipo: "Farmacias" },
];

class Crud_admin extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      local: "",
      tipo: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].local = dato.local;
        arreglo[contador].tipo = dato.tipo;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Navbar_admin/>

        <div className="admin">
        
            <div className="container-fluid" id="crud">
                <h2 className="admin_tit"> <font color="#FF8351">Bienvenido Admin</font> </h2>
                <br />
                <Button color="success" onClick={()=>this.mostrarModalInsertar()}
                className="crear"
                >Insertar nuevo local</Button>
                <br />
                <br />
                <Table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Local</th>
                        <th>Tipo</th>
                        <th>Acción</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.data.map((dato) => (
                        <tr key={dato.id}>
                        <td>{dato.id}</td>
                        <td>{dato.local}</td>
                        <td>{dato.tipo}</td>
                        <td>
                            <Button
                            color="primary"
                            onClick={() => this.mostrarModalActualizar(dato)}
                            className="editar"
                            >
                            Editar
                            </Button>{" "}
                            <Button color="danger" onClick={()=> this.eliminar(dato)}
                            className="eliminar"
                            >Eliminar</Button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>

            <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
            <div><h3>Editar Registro</h3></div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                <label>
                Id:
                </label>
                
                <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.id}
                />
                </FormGroup>
                
                <FormGroup>
                <label>
                    Local: 
                </label>
                <input
                    className="form-control"
                    name="local"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.local}
                />
                </FormGroup>
                
                <FormGroup>
                <label>
                    Tipo: 
                </label>
                <input
                    className="form-control"
                    name="tipo"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.tipo}
                />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button
                color="primary"
                onClick={() => this.editar(this.state.form)}
                className="editar"
                >
                Editar
                </Button>
                <Button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}
                className="eliminar"
                >
                Cancelar
                </Button>
            </ModalFooter>
            </Modal>



            <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
            <div><h3>Insertar Local</h3></div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                <label>
                    Id: 
                </label>
                
                <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.data.length+1}
                />
                </FormGroup>
                
                <FormGroup>
                <label>
                    Local: 
                </label>
                <input
                    className="form-control"
                    name="local"
                    type="text"
                    onChange={this.handleChange}
                />
                </FormGroup>
                
                <FormGroup>
                <label>
                    Tipo: 
                </label>
                <input
                    className="form-control"
                    name="tipo"
                    type="text"
                    onChange={this.handleChange}
                />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button
                color="primary"
                onClick={() => this.insertar()}
                className="editar"
                >
                Insertar
                </Button>
                <Button
                color="danger"
                className="eliminar"
                onClick={() => this.cerrarModalInsertar()}
                >
                Cancelar
                </Button>
            </ModalFooter>
            </Modal>
        
        </div>
        <Footer/>
      </>
    );
  }
}
export default Crud_admin;