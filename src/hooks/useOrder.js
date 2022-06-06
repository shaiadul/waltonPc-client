import { useEffect, useState, } from "react"

const useOrder = () =>{
    const [orders, setOrders] = useState([])
    useEffect(() =>{
        fetch("https://pure-basin-66500.herokuapp.com/orders")
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])
    return [orders, setOrders];
}
 export default useOrder;