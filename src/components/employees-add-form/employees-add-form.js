import './employees-add-form.css';
import {Component} from "react";

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            FirstName: "",
            LastName: "",
            salary: "",
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.FirstName.length > 3 && this.state.LastName.length >= 2 &&  this.state.salary !== "" && !(/[0-9]/.test(this.state.FirstName)) && !(/[0-9]/.test(this.state.LastName ))) {
            this.props.onAdd (this.state.FirstName, this.state.LastName, this.state.salary);
            this.setState({
                FirstName: '',
                LastName: '',
                salary: ''
            })
        }
        else {
            alert("Error: invalid name or salary");
            this.setState({
                FirstName: '',
                LastName: '',
                salary: ''
            })
        }
    }

    render() {
        const {FirstName, LastName, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           onChange={this.onValueChange}
                           name="FirstName"
                           value={FirstName}
                           placeholder="Как его зовут?" />
                    <input type="text"
                           className="form-control new-post-label"
                           onChange={this.onValueChange}
                           name="LastName"
                           value={LastName}
                           placeholder="Как его зовут?" />
                    <input type="number"
                           className="form-control new-post-label"
                           onChange={this.onValueChange}
                           name="salary"
                           value={salary}
                           placeholder="З/П в $?" />

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;