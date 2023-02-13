import { AiOutlineHome } from 'react-icons/ai';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { RiSecurePaymentLine } from 'react-icons/ri';

const allRoutes = [
    {
        title: 'Dashboard',
        Icon: AiOutlineHome,
        link: '/delivery-man',
        subRoutes: []
    },
    {
        title: 'Order Management',
        Icon: RiSecurePaymentLine,
        link: '#',
        subRoutes: [
            {
                id: 1,
                link: 'orders/new-order',
                title: 'New Orders'
            },
            {
                id: 2,
                link: 'orders/all-pending-order',
                title: 'Pending Orders'
            },
            {
                id: 3,
                link: 'orders/all-pickup-order',
                title: 'Picked Up Orders'
            },
            {
                id: 4,
                link: 'orders/all-residual-order',
                title: 'Residual Orders'
            },
            {
                id: 5,
                link: 'orders/all-cancel-order',
                title: 'Cancel Orders'
            },
            {
                id: 6,
                link: 'orders/all-complete-order',
                title: 'Complete Orders'
            },
        ]
    },
    {
        title: 'Payment History',
        Icon: FaMoneyBillAlt,
        link: '/delivery-man/payment-history',
        subRoutes: []
    },
]

export default allRoutes;