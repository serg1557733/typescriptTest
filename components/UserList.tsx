import { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";
import { useNavigate, NavigateFunction } from "react-router-dom";

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
let navigate: NavigateFunction = useNavigate();

    
    return (
        <div>
            {users.map( user => <UserItem user = {user} key={user.id}/>)}
        </div>
    )
} 
export default UserList;