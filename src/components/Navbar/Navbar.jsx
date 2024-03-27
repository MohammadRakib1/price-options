import Link from "../Link/Link";

const Navbar = () => {

    const routesData = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/services', name: 'Our Services' },
        { id: 4, path: '/contact', name: 'Contact Us' },
        { id: 5, path: '/faq', name: 'FAQs' }
    ];


    return (
        <nav>
            <ul className="md:flex">
                {
                    routesData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;