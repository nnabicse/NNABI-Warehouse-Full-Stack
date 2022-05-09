import { useEffect, useState } from "react"

const useOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://glacial-anchorage-62704.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    return [orders, setOrders];
}

export default useOrders;