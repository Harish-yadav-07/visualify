import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center pt-5 pb-2 px-20'>
            <Link to='/'><h1 id="heading" className="text-4xl font-semibold italic">Visualify</h1></Link>
            <div className='flex gap-5 items-center'>
                <Link className='text-base font-medium active:scale-95 bg-green-600 rounded px-4 py-2' to='/'>Search</Link>
                <Link className='text-base font-medium active:scale-95 bg-green-600 rounded px-4 py-2' to='/collection'>Collection</Link>
            </div>
        </div>
    )
}

export default Navbar;