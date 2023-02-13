import NewProduct from '../Shared/Product/NewProduct';
import {useParams} from "react-router-dom";

const CategoryProducts = (props) => {

    const {slug,vendor_id,category_id} = useParams();
    console.log(slug);
    console.log(vendor_id);
    console.log(category_id);


    return (
        <div className="container pt-3 px-2">
            <div className="row gy-4">
                <div className="col-12 col-md-12">
                     <NewProduct vendor_id={vendor_id} cat_id={category_id}/> 
                </div>
            </div>
        </div>
    );
};

export default CategoryProducts;
