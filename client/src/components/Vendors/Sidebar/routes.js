import { AiOutlineHome } from 'react-icons/ai';
import { FaMoneyBill } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { RiSecurePaymentLine } from 'react-icons/ri';

const allRoutes = [
    {
        title: 'Dashboard',
        Icon: AiOutlineHome,
        link: '/vendor/dashboard',
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
        title: 'Products',
        Icon: FiShoppingBag,
        link: '#',
        subRoutes: [
            // {
            //     id: 1,
            //     link: 'add-product',
            //     title: 'Add Product'
            // },
            {
                id: 2,
                link: 'products',
                title: 'All Products'
            },
        ],
    },

    {
        title: 'Sales and Payment',
        Icon: FaMoneyBill,
        link: '#',
        subRoutes: [
            {
                id: 1,
                link: 'sales-history',
                title: 'Sales History'
            },
            {
                id: 2,
                link: 'payments-history',
                title: 'Payments History'
            },
            {
                id: 3,
                link: 'profit-loss',
                title: 'Profit And Loss'
            },

        ]
    },

]

export default allRoutes;