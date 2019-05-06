import React, { Component } from 'react'


class TodoForm extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {value, name} = e.target
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    handleSubmit(e){
        e.preventDefault(); // Evitar refrescar la pagina
        this.props.onAddTodo(this.state);
        alert("enviando...");
    };

    render() {
        return (
            <div className="card">

                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Responsible"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="description"
                        />
                    </div>

                    <div className="form-group">
                        <select
                            name="priority"
                            onChange={this.handleInput}
                            className="form-control">
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>

                    <input type="submit" value="Save" />

                </form>

            </div>
        )
    }
}

export default TodoForm;