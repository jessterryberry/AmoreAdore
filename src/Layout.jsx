import Footer from "./sections/Footer";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => (
    <main className="relative bg-seasalt">
        <Nav />
        <Outlet />
        <section className="padding-x padding-t pb-8 bg-light-coral">
            <Footer />
        </section>
    </main>
);

export default Layout;