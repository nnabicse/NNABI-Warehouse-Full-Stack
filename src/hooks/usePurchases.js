import { useEffect, useState } from "react"

const usePurchases = () => {
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
        fetch('https://glacial-anchorage-62704.herokuapp.com/purchase')
            .then(res => res.json())
            .then(data => setPurchases(data))
    }, []);
    return [purchases, setPurchases];
}

export default usePurchases;