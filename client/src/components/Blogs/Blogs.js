import './Blog.css';
import BlogItem from './BlogItem';

const Blogs = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-3">
                    <BlogItem />
                </div>
                <div className="col-md-3">
                    <BlogItem />
                </div>
                <div className="col-md-3">
                    <BlogItem />
                </div>
                <div className="col-md-3">
                    <BlogItem />
                </div>
            </div>
        </div>
    );
};

export default Blogs;
