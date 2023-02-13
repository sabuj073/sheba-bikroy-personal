import Header from '../Shared/Header/Header';
import Sidebar from '../Shared/SideBars/Sidebar/Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="home__page__content">{children}</div>
        </>
    );
};

export default Layout;
