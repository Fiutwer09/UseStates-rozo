import React, { useState } from 'react';
import './Task.css';

export const Task = () => {
    const [task, setTask] = useState('');
    const [nameTask, setNameTask] = useState('');
    const [send, setSend] = useState([]);

    const handleTask = (event) => {
        setTask(event.target.value);
    };

    const handleNameTask = (event) => {
        setNameTask(event.target.value);
    };

    const sendTask = (event) => {
        event.preventDefault();

        const newTask = { nameTask, task };

        if (newTask.nameTask && newTask.task) {
            setSend([...send, newTask]);
            alert('Tarea guardada con éxito');

            setNameTask('');
            setTask('');
        }
    };

    return (
        <>
            <div className='container-Task'>
                <form  className='container-Task' onSubmit={sendTask}>
                    <div className="form__group_1">
                        <input
                            type="text"
                            className="form__field_1"
                            required
                            value={nameTask}
                            onChange={handleNameTask}
                            placeholder="Nombre de la tarea"
                        />
                        <label htmlFor="name" className="form__label_1">Name Task</label>
                    </div>
                    <textarea
                        name="box-1"
                        id="taskInput"
                        value={task}
                        onChange={handleTask}
                        required
                        placeholder="Descripción de la tarea..."
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className='box-ul '>
                <ul>
                    {send.map((item, idx) => (
                        <li key={idx}>
                            <strong>{item.nameTask}:</strong> {item.task}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
