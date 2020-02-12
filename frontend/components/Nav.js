import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => {
    return (
        <NavStyles>
            <Link href="/items">
                <a>ITEMS</a>
            </Link>
            <Link href="/sell">
                <a>SELL</a>
            </Link>
            <Link href="/signup">
                <a>SIGNUP</a>
            </Link>
            <Link href="/orders">
                <a>Orders</a>
            </Link>
            <Link href="/me">
                <a>Account</a>
            </Link>
        </NavStyles>
    );
}

export default Nav;