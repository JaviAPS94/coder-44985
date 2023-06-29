import Stripe from 'stripe';

export default class PaymentService {
    constructor() {
        this.stripe = new Stripe('sk_test_51NO7u4CkURdt1O8siB8FVqobD6lqCsNJGTJB7SmhXzi54THR2yYqvG1hogXxoq12CESNiTywkwy6qhsNOG3qbAVE00m4hVwHhj');
    }

    createPaymentIntent = async (data) => {
        const paymentIntent = this.stripe.paymentIntents.create(data);
        return paymentIntent;
    }
}