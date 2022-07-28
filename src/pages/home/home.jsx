import { useEffect, useState } from "react";
import AddTask from "./addTask";
import ListTask from "./listTask";

const Home = () => {
    // estado que manejara la lista de tareas
    const [listTasks, setListTasks] = useState([]);

    // useEffect que cargara los datos al iniciar la aplicacion
    useEffect(() => {
        refreshTasks();
    }, []);

    // funcion que recupera los datos desde el localstorage y los asinga al estado
    const refreshTasks = () => {
        setListTasks(JSON.parse(localStorage.getItem('tasks')) || []);
    };

    return (
        <>
            <h3>Home</h3>
            {/* el componente AddTask recibe como parametro la funcion refresData */}
            <AddTask refreshTasks={refreshTasks} />
            <br />
            {/* el componente ListasTask recibe como parametro la lista de tareas */}
            <ListTask tasks={listTasks}/>
        </>
    );
}

export default Home;