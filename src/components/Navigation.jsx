import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to="/all-products">All Products</Link>
            <Link to="/book-details">Book Details</Link>
        </div>
    );
};

export default Navigation;