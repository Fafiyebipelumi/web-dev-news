import layoutStyles from '../styles/Layout.module.css';
import Header from './Header';
import Nav from './Nav';
import Meta from './Meta';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={layoutStyles.container}>
                <main className={layoutStyles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    );
}

export default Layout;