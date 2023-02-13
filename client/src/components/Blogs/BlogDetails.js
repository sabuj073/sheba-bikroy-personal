import React from 'react';
import {
    FaCalendar,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTags,
    FaTwitter,
    FaUserAlt,
} from 'react-icons/fa';
import image from '../../assets/images/sujon.jpg';
import './Blog.css';
import BlogItem from './BlogItem';

const BlogDetails = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-9">
                    <div className="card">
                        <img
                            className="card-img-top"
                            src={image}
                            alt="Not found"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Javascript all you needs.
                            </h5>
                            <div className="meta">
                                <li>
                                    <span>
                                        <FaUserAlt /> Sujon Hossain
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <FaCalendar /> 3 hours ago
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <FaTags /> Blog
                                    </span>
                                </li>
                            </div>
                            <div className="tags">
                                <span className="tag"> JavaScript </span>
                                <span className="tag"> Es6 </span>
                            </div>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nostrum esse eum, iste
                                molestiae illum, cupiditate dolor ex, iusto
                                quidem maxime error veniam inventore. Neque et
                                totam nam debitis aperiam ad. Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit. Odit
                                obcaecati quod nesciunt accusamus quas voluptate
                                recusandae at blanditiis error sunt cumque quae
                                fugiat tenetur labore officiis fugit rerum
                                totam, veniam dignissimos temporibus numquam
                                voluptates illo. Aperiam, dicta? Adipisci
                                repellendus voluptate molestiae in sequi
                                corporis ea excepturi libero cumque.
                                Necessitatibus inventore ex, harum nostrum ad
                                eos doloribus explicabo saepe delectus, ab ipsa
                                a sequi vero totam labore iusto. Non eaque
                                veritatis nobis vel iusto dolor officia, illum
                                optio beatae exercitationem labore. Repudiandae
                                a repellat architecto obcaecati assumenda
                                debitis aliquid, officia nihil odit omnis,
                                distinctio nisi! Eveniet modi optio dignissimos
                                harum maiores.
                            </p>

                            <div className="share-post">
                                <span>Share Post</span>
                                <ul className="share-link">
                                    <li>
                                        <span>
                                            <FaFacebookF />
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <FaTwitter />
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <FaLinkedinIn />
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <FaInstagram />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <h3 className="recent-title">Recent Blogs</h3>
                    <BlogItem />
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
