import { Link } from 'react-router-dom';
import commentImg from '../../assets/images/comment.png';
import image from '../../assets/images/sujon.jpg';

const BlogItem = () => {
    return (
        <div className="blog-item ">
            <Link to={`/blog-details`} style={{ textDecoration: 'none' }}>
                <div className="blog-img">
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="blog-txt">
                    <p className="admin">
                        {'2 hours ago'}
                        <img className="ms-2" src={commentImg} alt="" />
                        <span> 0 </span>
                    </p>
                    <h4> Javascript all you needs. </h4>
                    <p style={{ fontSize: '13px' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fuga magnam cumque eius commodi nihil distinctio.
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default BlogItem;
