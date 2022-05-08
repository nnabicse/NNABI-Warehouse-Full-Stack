import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useItems from '../../../hooks/useItems';
import MyItem from '../MyItem/MyItem';
import './MyItems.css';
const axios = require('axios').default;

const MyItems = () => {
    const [items, setItems] = useItems()
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
    }, [user, items])
    function handleMyItemsDeleteButton(id) {
        fetch(`http://localhost:5000/item/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(item => {
                const filteredItems = items.filter(item => item._id !== id);
                console.log(filteredItems);
                setItems(filteredItems);
            });
    }


    console.log(user);

    return (
        <div>
            <h2>This is My Items</h2>
            {
                myItems.map(myItem => <MyItem
                    key={myItem._id}
                    myItem={myItem}
                    handleMyItemsDeleteButton={handleMyItemsDeleteButton}
                ></MyItem>)
            }
        </div>
    );
};

export default MyItems;