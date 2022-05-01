import { useEffect, useState } from "react"

const usePurchases = () => {
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
        fetch('incomingPurchases.json')
            .then(res => res.json())
            .then(data => setPurchases(data))
    }, []);
    return [purchases, setPurchases];
}

export default usePurchases;