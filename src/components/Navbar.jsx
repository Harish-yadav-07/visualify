import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div
            className="
            flex justify-between items-center
            pt-5 pb-2
            px-4 sm:px-10 lg:px-20   /* 👈 laptop same spacing */
            "
        >
            <Link to='/'>
                <h1
                    id="heading"
                    className="
                    text-2xl sm:text-3xl lg:text-4xl  /* responsive text */
                    font-semibold italic
                    "
                >
                    Visualify
                </h1>
            </Link>

            <div className='flex gap-2 sm:gap-4 lg:gap-5 items-center'>
                <Link
                    className='text-sm sm:text-base font-medium active:scale-95 bg-green-600 rounded px-3 sm:px-4 py-2 transition-transform'
                    to='/'
                >
                    Search
                </Link>

                <Link
                    className='text-sm sm:text-base font-medium active:scale-95 bg-green-600 rounded px-3 sm:px-4 py-2 transition-transform'
                    to='/collection'
                >
                    Collection
                </Link>
            </div>
        </div>
    )
}

export default Navbar;