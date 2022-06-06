import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
// import auth from '../../firebase.init';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckoutForm';



// const stripePromise = loadStripe('pk_test_51L3djHGCsfYxTdTnYPx6Yg6pJNPD7imyid9A4QymTbWA8gjvl63S6eGvEruHsEenc7xkWlrXfIeFdOqcH15wuRf2009NS0nANm');

const Payment = () => {
    const { id } = useParams();

    const [payOrder, setPayOrder] = useState([])
    // const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://pure-basin-66500.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => setPayOrder(data));
    }, [id])

    
    return (
        <div>
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Hello, {payOrder.username}</p>
                <h2 class="card-title">Please Pay for {payOrder.name}</h2>
                <p>Your Total Quantity: <span className='text-orange-700'>{payOrder.quantity}</span> </p>
                <p>Please pay: ${payOrder.price}</p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                {/* <Elements stripe={stripePromise}>
                    <CheckoutForm  />
                </Elements> */}
            </div>
        </div>
    </div>
    );
};

export default Payment;