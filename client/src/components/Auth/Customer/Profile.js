import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Address from './Address';
import ChangePassword from './ChangePassword';
import './Customer.css';
import Information from './Information';
import Order from './Order';
import ProfileRoutes from './ProfileRoutes';
import Wallet from './Wallet';
import { useHistory } from "react-router-dom";

const Profile = () => {
    let history = useHistory();
    var userdata = "";

    if (!localStorage.getItem("user")) {
        history.push("/login");
    }

    if (localStorage.getItem('user')) {
        userdata = JSON.parse(localStorage.getItem('user'));
    }
    const [profileRoute, setProfileRoute] = useState('');
    let query = useQuery();
    const queryValue = query.get('tabs');

    useEffect(() => {
        setProfileRoute(queryValue || 'user-info');
    }, [queryValue]);

    return (
        <section className="profile__section">
            <div className="container py-4">
                <div className="row g-3">
                    <div className="col-md-4 col-lg-3">
                        <ProfileRoutes profileRoute={profileRoute} />
                    </div>
                    <div className="col-md-8 col-lg-9">
                        <div className="profile__routes__content shadow-sm">
                            {profileRoute === 'user-info' && <Information userdata={userdata}/>}
                            {profileRoute === 'changePassword' && (
                                <ChangePassword />
                            )}
                            {profileRoute === 'orders' && <Order />}
                            {profileRoute === 'address' && <Address />}
                            {profileRoute === 'transaction' && <Wallet />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
