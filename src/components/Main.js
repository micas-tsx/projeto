import React, { Component } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

// eslint-disable-next-line import/no-unresolved
import './main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
      'fazer café',
      'beber agua',
      'jonas',
    ],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
