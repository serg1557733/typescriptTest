import React, { useEffect, useState, FC } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";
import { useNavigate, useParams } from "react-router-dom";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const param = useParams();


    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(response.data);
        } catch (error) {
            new Error("error");
            console.log(error);
        }
    }
    let navigate = useNavigate();

    console.log(param)

    useEffect(() => {
        fetchUsers();
    }, []);

    return <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
    />
};

export default UsersPage;
