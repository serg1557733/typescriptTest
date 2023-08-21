import { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";
import { useNavigate, NavigateFunction } from "react-router-dom";
import axios from "axios";

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({ users }) => {



    return (
        <div>
            {users.map(user => <UserItem user={user} key={user.id} />)}
        </div>
    )
}
export default UserList;