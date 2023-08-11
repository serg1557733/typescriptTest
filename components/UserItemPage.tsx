import React, { useState, useEffect } from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import { useParams, useNavigate, NavigateFunction } from 'react-router-dom';
import List from './List';
import UserItem from './UserItem';

interface UserItemPageParams {
    id: string | Record<string, string | undefined>;
}

const UserItemPage= () => {
    
    let navigate: NavigateFunction = useNavigate();

    
  
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams();


    console.log(params)

    // async function fetchUser() {
    //     try {
    //         const response = await axios.get<IUser>(
    //             `https://jsonplaceholder.typicode.com/users/${params.id}`
    //         );
    //         setUser(response.data);
    //     } catch (error) {
    //         new Error("error");
    //         console.log(error);
    //     }
    // }


    // useEffect(() => {
    //     fetchUser();
    // }, []);

    return (
        <div>
            <button onClick={() => navigate('/users')} > Back</button>
            <h1>Page of {user?.name}</h1>
            <p>Adress {user?.address.city} and {user?.address.street}{user?.address.zipcode}</p>
            <p>Email {user?.email}</p>
        </div> 
    )
    
  
};

export default UserItemPage;