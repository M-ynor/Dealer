import { Link } from 'react-router-dom';
import IconParkOutlineShoppingCartOne from '~icons/icon-park-outline/shopping-cart-one'
const Nav = () => {
    return (
        <nav>

            <div>{/* Nav's left side */}
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                    <li>
                        <Link to={"/"} className="block text-2xl py-2 px-3 text-GrayMynor4 md:p-0">Home</Link>
                    </li>
                    <li>
                        <Link to={"/Search"} className="block text-2xl py-2 px-3 text-GrayMynor4 md:p-0">Search</Link>
                    </li>
                    <li>
                        <Link to={"/"} className="block text-2xl py-2 px-3 text-GrayMynor4 md:p-0">Contact</Link>
                    </li>
                </ul>
            </div>
            <h1>Mynor&apos;s <span>Dealership</span></h1> {/* Nav's center side */}
            <div>{/* Nav's right side */}
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                    <li>
                        <Link to={"/"} className="block text-2xl py-2 px-3 text-GrayMynor4 md:p-0">About us</Link>
                    </li>
                    <li>
                        <Link to={"/"} className="block text-2xl py-2 px-3 text-GrayMynor4 md:p-0">Gallery</Link>
                    </li>
                    <li>
                        <Link to={"/"} className="block text-2xl py-2 px-3 text-white md:p-0">
                            <img src=''/>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;