import { FC } from "react";
import { IUser } from "../types/types";
import { useNavigate, useParams } from "react-router-dom";

interface UserItemProps {
    user: IUser;

}

const UserItem: FC<UserItemProps> = ({ user }) => {


    const navigate = useNavigate();

    const handlerOnClick = () => {
        console.log(navigate)
        navigate(`${user.id}`)
    }



    return (

        <div onClick={() => handlerOnClick()} className='p-5 mb-2 border-2 border-black shadow-sm' >
            <p> User {user.name} live in {user.address.city} street {user.address.street} and {user.address.zipcode} mail {user.email} </p>
        </div>
    )
}

export default UserItem;