import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useItems from '../../../hooks/useItems';
import MyItem from '../MyItem/MyItem';
import './MyItems.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios').default;

const MyItems = () => {
    const [items, setItems] = useItems()
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            const url = `https://glacial-anchorage-62704.herokuapp.com/myitem?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }

            });
            setMyItems(data);
        }
        getMyItems();
    }, [user, items])
    function handleMyItemsDeleteButton(id) {
        const proceeed = window.confirm("Are You Sure?")
        if (!proceeed) {
            return
        }

        fetch(`https://glacial-anchorage-62704.herokuapp.com/item/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(item => {
                const filteredItems = items.filter(item => item._id !== id);
                console.log(filteredItems);
                setItems(filteredItems);
            });
        toast("Item Deleted Successfully")

    }

    return (
        <div className='myitem-section-container'>
            <div>
                <div className='myitem-section-header-container'>
                    <h1 className='myitem-section-header'>MY ITEMS</h1>
                </div>
                <div className='myitem-items-container'>
                    {
                        myItems.map(myItem => <MyItem
                            key={myItem._id}
                            myItem={myItem}
                            handleMyItemsDeleteButton={handleMyItemsDeleteButton}
                        ></MyItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;