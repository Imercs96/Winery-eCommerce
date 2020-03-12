import React from "react"
import { connect } from "react-redux"
import AdminCreate from "../components/adminCreate"
import { admCreate } from "../redux/actions/wines"

class AdminFormsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            precio: "",
            descripcion: "",
            tipo: "",
            cepa: "",
            stock: "",
            bodega: "",
            provincia: "",
            alcohol: "",
            imagen: ""


        }
        this.handlerChange = this.handlerChange.bind(this)
        this.submit = this.submit.bind(this)

    }
    handlerChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    submit(e) {
        e.preventDefault()
        this.props.admCreate(this.state.nombre,
            this.state.precio,
            this.state.descripcion,
            this.state.tipo,
            this.state.cepa,
            this.state.stock,
            this.state.bodega,
            this.state.provincia,
            this.state.alcohol,
            this.state.imagen)
    }

    render() {
        return (
            <div>
                <AdminCreate
                    handlerChange={this.handlerChange}
                    submit={this.submit}></AdminCreate>
            </div>
        )
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        admCreate: (nombre, precio, descripcion, tipo, cepa, stock, bodega, provincia, alcohol, imagen) => dispatch(admCreate(nombre, precio, descripcion,
            tipo, cepa, stock, bodega, provincia, alcohol, imagen))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminFormsContainer);

