import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="no-match">
            <h1>404</h1>
            <h3>The page you're looking for doesn't exist</h3>
            <div className="pt-3">
                <h5>Looking for something, but can't find it?</h5>
                <h5>Call us, a real person will answer: <span className="number"> 017 00 - 00 00 00</span> </h5>
            </div>
            <Link to="/" className="btn btn-rounded btn-danger">Back To Home</Link>
        </div>
    )
}

export default NotFound