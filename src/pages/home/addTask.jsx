import { useState } from "react";
import { Button, Form } from "rsuite";

const AddTask = ({refreshTasks}) => {
    // estado que contiene el nombre de la tarea asignada por el cuadro de texto en el formulario
    const [taskName, setTaskName] = useState();

    // funcion agregar tarea
    const addTask = () => {
        // se recupera el contenido del localstorage tasks, en caso de no existir asigna un arreglo vacion
        const tasksLocalStorage = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
        // se asigna la nueva tarea al contenido de localStorage
        localStorage.setItem('tasks', JSON.stringify([...tasksLocalStorage, {name: taskName, completed: false}]));
        // se actualiza el contenido de la lista llamando al funcion refresToken que viene desde comoponente Home
        refreshTasks();
    }

    return (
        <>
            <h5>Agregar tarea</h5>
            <br />
            <Form layout="inline">
                <Form.Group controlId="task">
                    <Form.ControlLabel>Tarea</Form.ControlLabel>
                    <Form.Control name="task" style={{ width: 160 }} onChange={(value) => setTaskName(value)} />
                </Form.Group>
                <Button onClick={() => addTask()}>Agregar Tarea</Button>
            </Form>
        </>
    );
}

export default AddTask;