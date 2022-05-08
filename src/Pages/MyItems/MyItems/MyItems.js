import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyItem from '../MyItem/MyItem';
import './MyItems.css';
const axios = require('axios').default;

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    console.log(localStorage.getItem('accessToken'))
    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            console.log(localStorage.getItem('accessToken'))
            const url = `http://localhost:5000/myitem?email=${email}`;
            console.log(url);
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }

            });
            console.log(data);
            setMyItems(data);
        }
        getMyItems();
    }, [user])


    console.log(user);

    return (
        <div>
            <h2>This is My Items</h2>
            {
                myItems.map(myItem => <MyItem
                    key={myItem._id}
                    myItem={myItem}
                ></MyItem>)
            }
        </div>
    );
};

export default MyItems;