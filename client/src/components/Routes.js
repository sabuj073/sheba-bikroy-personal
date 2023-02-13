import React, { Suspense, useState } from "react";
import { Route, Switch } from "react-router";
import Login from "./Auth/Login";
import AdminLogin from "./Auth/AdminLogin";
import SignUp from "./Auth/SignUp";
import BlogDetails from "./Blogs/BlogDetails";
import Blogs from "./Blogs/Blogs";
import Cart from "./Cart/Cart";
import CategoryProducts from "./CategoryProducts/CategoryProducts";
import Checkout from "./Checkout/Checkout";
import DeliveryMan from "./DeliveryMan/DeliveryMan";
import Filter from "./Filter/Filter";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./ProductDetails/ProductDetails";
import SearchResult from "./SearchResult/SearchResult";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import Vendors from "./Vendors/Vendors";
import instance from "../base_url";

const CMS = React.lazy(() => import("./CMS/CMS"));
const MainHome = React.lazy(() => import("./MainHome/Home"));
const Profile = React.lazy(() => import("./Auth/Customer/Profile"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const ExchangePolicy = React.lazy(() =>
  import("./pages/ExchangePolicy/ExchangePolicy")
);
const PrivacyPolicy = React.lazy(() => import("./pages/Policy/PrivacyPolicy"));
const ReturnPolicy = React.lazy(() =>
  import("./pages/ReturnPolicy/ReturnPolicy")
);
const TermsOfUse = React.lazy(() => import("./pages/TermsOfUse/TermsOfUse"));
const Faq = React.lazy(() => import("./pages/FAQ/Faq"));

const Routes = () => {
  const [info, setInfo] = useState([]);
  const getinfo = async () => {
    await instance.get("getinfo").then((response) => {
      if (info.length == 0) {
        setInfo(response.data);
      }
    });
  };
  if (localStorage.getItem("language") === "en") {
    var language = true;
  } else {
    language = false;
  }
  getinfo();
  return (
    <div className="home__final__wrapper">
      <Switch>
        <Route exact path="/">
        <Layout>
            <Suspense fallback={<div>Loading........</div>}>
              <MainHome />
              <Footer />
            </Suspense>
          </Layout>
        </Route>

        <Route path="/cms">
          <Suspense fallback={<div> CMS Loading........ </div>}>
            <CMS />
          </Suspense>
        </Route>
        <Route path="/vendor/dashboard">
          <Vendors />
        </Route>
        <Route path="/delivery-man">
          <DeliveryMan />
        </Route>

        <Route exact path="/home">
          <Layout>
            <Suspense fallback={<div>Loading........</div>}>
              <MainHome />
              <Footer />
            </Suspense>
          </Layout>
        </Route>

        <Route exact path="/search">
          <Layout>
            <SearchResult />
            <Footer />
          </Layout>
        </Route>

        <Route path="/product-details/:slug">
          <Layout>
            <ProductDetails />
          </Layout>
        </Route>

        <Route path="/category-vendor/:slug/:title">
          <Layout>
            <Filter />
          </Layout>
        </Route>

        <Route path="/blogs">
          <Layout>
            <Blogs />
          </Layout>
        </Route>

        <Route path="/blog-details">
          <Layout>
            <BlogDetails />
          </Layout>
        </Route>
        <Route exact path="/cart">
          <Layout>
            <Cart />
          </Layout>
        </Route>
        <Route exact path="/checkout">
          <Layout>
            <Checkout />
          </Layout>
        </Route>
        <Route exact path="/vendor/products/:slug/:vendor_id/:category_id">
          <Layout>
            <CategoryProducts />
          </Layout>
        </Route>

        <Route path="/sign-up">
          <Layout>
            <SignUp />
          </Layout>
        </Route>

        <Route path="/user/profile">
          <Layout>
            <Suspense fallback={<div>Loading Profile.......</div>}>
              <Profile />
            </Suspense>
          </Layout>
        </Route>

        <Route path="/login">
          <Layout>
            <Login />
          </Layout>
        </Route>

        <Route path="/admin-login">
          <Layout>
            <AdminLogin />
          </Layout>
        </Route>

        {/*************** Static Pages ************/}
        <Route path="/t/contact-us">
          <Layout>
            <Suspense fallback={<div> Loading........ </div>}>
              <Contact info={info} language={language} />
            </Suspense>
          </Layout>
        </Route>

        <Route path="/t/privacy-policy">
          <Layout>
            <Suspense fallback={<div> Loading........ </div>}>
              <PrivacyPolicy info={info} language={language} />
            </Suspense>
          </Layout>
        </Route>
        <Route path="/t/return-policy">
          <Layout>
            <Suspense fallback={<div> Loading........ </div>}>
              <ReturnPolicy info={info} language={language} />
            </Suspense>
          </Layout>
        </Route>
        <Route path="/t/exchange-policy">
          <Layout>
            <Suspense fallback={<div> Loading........ </div>}>
              <ExchangePolicy info={info} language={language} />
            </Suspense>
          </Layout>
        </Route>
        <Route path="/t/faq">
          <Layout>
            <Suspense fallback={<div> Loading........ </div>}>
              <Faq info={info} language={language} />
            </Suspense>
          </Layout>
        </Route>

        <Route path="/t/terms-of-use">
          <Layout>
            <Suspense fallback={<div> Loading........ </div>}>
              <TermsOfUse info={info} language={language} />
            </Suspense>
          </Layout>
        </Route>

        {/****** Not Founds Page *******/}
        <Route path="*">
          <Layout>
            <NotFound />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
