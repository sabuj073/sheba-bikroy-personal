import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProducts = () => {
    return (
        <div className="details__bottomRightList">
            <div className="details__bottomRightListItemHeader">
                Related Product
            </div>
            <Link to="" className="details__bottomRightListItem">
                <img width="60px" height="60px" src="/jxz6x6spgoeeafauk3oc.jpg" alt="" />
                <div className="details__bottomRightListItemInfo">
                    <div
                        className="details__bottomRightListItemName"
                        style={{ color: '#333' }}
                    >
                        Fortune Biryani Special Basmati Rice
                    </div>
                    <div className="details__bottomRightListItemPrice">
                    ৳ 4000
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RelatedProducts;
