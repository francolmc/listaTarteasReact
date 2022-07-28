import { List } from "rsuite";

// recibe la lista de tareas por parametro desde el componente Home y los muestra con map
const ListTask = ({tasks}) => {
    return (
        <>
            <h5>Lista de tareas</h5>
            <br />
            <List>
                {tasks.map((item, index) => (
                    <List.Item key={index} index={index}>
                        {item.name}
                    </List.Item>
                ))}
            </List>
        </>
    );
}

export default ListTask;