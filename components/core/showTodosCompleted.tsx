import {globalTodoStore} from "@/app/lib/store";
import {useEffect, useState} from "react";


export default function ShowTodosCompleted() {

    const {todos,setTodos} = globalTodoStore();
    const [completedTodos, setCompletedTodos] = useState<any[]>([]);

    function handleShowTodosCompleted() {
        const filteredTodos = todos.filter((todo: { completed:boolean })=> todo.completed);
        setCompletedTodos(filteredTodos)
    }

    useEffect(() => {
        handleShowTodosCompleted();
    },[todos])

    const HandleUpdateTodos = (id: string) => {
        const updateTodos = todos.map(todo =>
            todo.id === id ? {...todo, completed:false} :todo
        );
        setTodos(updateTodos);
    }

    return(
        <>
            {completedTodos? (
                <div className="flex flex-col">
                    <h1 className="mb-4">Hay {completedTodos.length} tasks completed</h1>
                    <div>
                        {completedTodos.map(item => (
                            <div key={item.id} className="flex ">
                                <button onClick={()=> HandleUpdateTodos(item.id)} className="cursor-pointer">❌</button>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ):null}
        </>
    )
}