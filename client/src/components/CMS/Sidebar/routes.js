import { AiOutlineHome } from 'react-icons/ai';
import { FaCog, FaMapMarkerAlt, FaMoneyBill, FaUserCog, FaUserPlus, FaUsers } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { GrDeliver } from 'react-icons/gr';
import { MdNotifications } from 'react-icons/md';
import { RiAccountPinBoxFill, RiSecurePaymentLine } from 'react-icons/ri';
import { VscFolderOpened } from 'react-icons/vsc';

const allRoutes = [
    {
        title: 'Dashboard',
        Icon: AiOutlineHome,
        link: '/cms',
        subRoutes: []
    },
    {
        title: 'Area Setup',
        Icon: FaMapMarkerAlt,
        link: '#',
        subRoutes: [
            {
                id: 1,
                link: 'district-setup',
                title: 'District Setup'
            },
            {
                id: 2,
                link: 'thana-setup',
                title: 'Thana Setup'
            },
            {
                id: 3,
                link: 'area-setup',
                title: 'Nearest Area Setup'
            },
        ],
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
            {
                id: 7,
                link: 'orders/total-orders',
                title: 'Total Orders'
            },
        ]
    },
    {
        title: 'Products',
        Icon: FiShoppingBag,
        link: '#',
        subRoutes: [
            {
                id: 1,
                link: 'add-product',
                title: 'Add Product'
            },
            {
                id: 2,
                link: 'products',
                title: 'All Products'
            },
        ],
    },
    {
        title: 'Category Management',
        Icon: VscFolderOpened,
        link: '#',
        subRoutes: [
            {
                id: 1,
                link: 'categories/create-category',
                title: 'Create Category'
            },
            {
                id: 2,
                link: 'categories/create-sub-category',
                title: 'Create Sub Category'
            },
            // {
            //     id: 3,
            //     link: 'categories/create-child-category',
            //     title: 'Create Child Category'
            // },
            {
                id: 4,
                link: 'categories/',
                title: 'All Categories'
            },
            {
                id: 5,
                link: 'sub-categories/',
                title: 'All SubCategories'
            },
            // {
            //     id: 6,
            //     link: 'child-categories/',
            //     title: 'All ChildCategories'
            // },
        ],
    },
    {
        title: 'Service Category',
        Icon: VscFolderOpened,
        link: '#',
        subRoutes: [
            {
                id: 1,
                link: 'service-categories/create-category',
                title: 'Create Category'
            },
            {
                id: 2,
                link: 'service-categories/create-sub-category',
                title: 'Create Sub Category'
            },
            // {
            //     id: 3,
            //     link: 'categories/create-child-category',
            //     title: 'Create Child Category'
            // },
            {
                id: 4,
                link: 'service-categories/',
                title: 'All Categories'
            },
            {
                id: 5,
                link: 'service-sub-categories/',
                title: 'All SubCategories'
            },
            // {
            //     id: 6,
            //     link: 'child-categories/',
            //     title: 'All ChildCategories'
            // },
        ],
    },
    {
        title: 'Vendors Management',
        Icon: FaUserPlus,
        link: '#',
        subRoutes: [
            {
                id: 1,
                link: 'add-vender',
                title: 'Add New Vendor'
            },
            {
                id: 3,
                link: 'vendor-list',
                title: 'All Vendor'
            },
        ],
    },
    {
        title: 'Delivery Man',
        Icon: GrDeliver,
        link: '#',
        subRoutes: [
            {
                id: 1,
                link: 'add-delivery-man',
                title: 'Add Delivery Man'
            },
            {
                id: 2,
                link: 'all-delivery-man',
                title: 'All Delivery Man'
            },
        ],
    },
    {
        title: 'Customer',
        Icon: FaUsers,
        link: '#',
        subRoutes: [
            {
                id: 1,
                link: 'online-customer',
                title: 'Customer'
            },

        ],
    },
    {
        title: 'Stuff Management',
        Icon: FaUserCog,
        link: '#',
        subRoutes: [
            {
                id: 1,
                link: 'add-new-stuff',
                title: 'Add New Stuff'
            },
            {
                id: 2,
                link: 'all-stuff',
                title: 'All Stuff'
            },
        ],
    },
    {
        title: 'Settings',
        Icon: FaCog,
        link: '#',
        subRoutes: [
            {
                id: 3,
                link: 'manage-coupon',
                title: 'Manage Coupon Code'
            },
            {
                id: 4,
                link: 'manage-commission',
                title: 'Manage Commission'
            },
            {
                id: 6,
                link: 'manage-wallet',
                title: 'Manage Wallet'
            },
            // {
            //     id: 1,
            //     link: 'manage-product',
            //     title: 'Manage Product Page'
            // },
            // {
            //     id: 2,
            //     link: 'manage-service',
            //     title: 'Manage Service Page'
            // },

            // {
            //     id: 5,
            //     link: 'manage-home',
            //     title: 'Manage Home Page'
            // },
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
                id: 1,
                link: 'payments-history',
                title: 'Payments History'
            },

        ]
    },

    {
        title: 'Accounce  (Product)',
        Icon: RiAccountPinBoxFill,
        link: '#',
        subRoutes: [
            {
                id: 1,
                link: 'intotal-summary',
                title: 'Cash Voucher'
            },
            {
                id: 2,
                link: 'daily-income',
                title: 'Income Voucher'
            },
            // {
            //     id: 3,
            //     link: 'cost-income-data',
            //     title: 'Cost & Income Data'
            // },
            // {
            //     id: 4,
            //     link: 'profit-loss',
            //     title: 'Profit & Loss'
            // },
        ],
    },
    // {
    //     title: 'Notification',
    //     Icon: MdNotifications,
    //     link: '#',
    //     subRoutes: [
    //         {
    //             id: 1,
    //             link: 'notices',
    //             title: 'Notices'
    //         },
    //         {
    //             id: 2,
    //             link: 'send-message',
    //             title: 'Send Message'
    //         },
    //         {
    //             id: 3,
    //             link: 'message-history',
    //             title: 'Message History'
    //         },
    //         {
    //             id: 4,
    //             link: 'customer-messages',
    //             title: 'Customer Messages'
    //         },

    //     ]
    // }
]

export default allRoutes;