import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { ITodo } from '../types/types';
import TodoItem from './TodoItem';
import List from './List';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'


const placeholderApiAxiosInstance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/', headers: { bla: 'blub' } })
const weatherChannelApiAxiosInstance = axios.create({ baseURL: 'https://weatherchannel.com/api/', headers: { apikey: 'bar' } })

const placeholderApi = {
    getTodos: async () => {
        const resp = await placeholderApiAxiosInstance.get<ITodo[]>('/todos?_limit=10')
        return resp.data;
    },
    createTodo: () => {
        placeholderApiAxiosInstance.post('/todo', {})
    }
}

const placeholderApiKeys = {
    getTodos: () => ['todos'],
}

const TodosPage: FC = () => {
    const { data: todos, isSuccess, isLoading, isError, isFetching, error } = useQuery(placeholderApiKeys.getTodos(), placeholderApi.getTodos)


    if (isError) { console.error(error); return <>Error...</> }
    if (isLoading) return <>Loading...</>
    if (isFetching) return <>Fetching...</>

    console.log(todos)

    if (isSuccess) return (<>
        <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
        />
    </>
    );

    return null;

};

export default TodosPage;