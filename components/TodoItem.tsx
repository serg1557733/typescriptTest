import { FC } from "react";
import { ITodo } from "../types/types";

interface ITodoProps {
    todo: ITodo;
}

const TodoItem: FC<ITodoProps> = ({todo}) => {

    return (
         <div
            style={{
                padding: 20,
                marginBottom: 10,
                border: '2px solid black'
            }}>
            <p>
                Todo {todo.title}
            </p>
            <input type="checkbox" checked = {todo.completed} />
            <p>
                User id
                {todo.userId}
            </p>
        </div>
    )

}

export default TodoItem;