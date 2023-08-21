import React from 'react';
import { useMatch, useParams } from 'react-router-dom';

const TodoItemPage = () => {

    let { idTodo } = useParams()

    // let match = useMatch();

    console.log(idTodo)

    return (
        <div>
            <h1>{idTodo}</h1>
        </div>
    );
};

export default TodoItemPage;