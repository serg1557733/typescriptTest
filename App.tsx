import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const App: React.FC = () => {
    const queryClient = new QueryClient();
    return (
        <div className="bg-neutral-200">
            <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <nav className='flex flex-start gap-4 h-16 mx-auto w-full container px-2 items-center'>
                    <NavLink className='text-2xl hover:underline' to={'/users'}>Users</NavLink>
                    <NavLink className='text-2xl hover:underline' to={'/todos'}>Todos</NavLink>
                </nav>
                <Routes>
                    <Route  path={"/users"}  element={<UsersPage />   }>
                    </Route>
                    <Route  path={"/todos"} element= {<TodosPage />}>
                    </Route>
                    <Route  path={"/users/:id"} element= {<UserItemPage />}>
                    </Route>
                    <Route  path={"/todos/:id"} element= {<TodoItemPage />}>
                    </Route>
                </Routes>
            </BrowserRouter>
            </QueryClientProvider>
        </div>
    )
};

export default App;
