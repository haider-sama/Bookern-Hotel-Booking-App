import { AiFillCaretDown } from "react-icons/ai";
import { useCallback, useState } from "react";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import SignOutButton from './SignOutButton';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((previous) => !previous);
    }, []);

    return (
        <>
        <div className="relative z-30">
            <div onClick={toggleOpen}
            className="p-2 border-[1px] border-slate-400
            flex flex-row items-center gap-1 rounded-full
            cursor-pointer hover:shadow-md transition text-slate-600">
                <FaUserCircle size={22} />
                <AiFillCaretDown />
            </div>
            {isOpen && (
                <div className="absolute rounded-md shadow-md
                w-[180px] bg-white border-2 overflow-hidden right-0 top-12
                text-sm flex flex-col cursor-pointer pb-2 pt-1">
                    <div className="flex flex-col items-center">
                    <Link
                    className="text-gray-800 hover:bg-gray-200 focus:ring-4 
                    focus:ring-gray-300 font-medium rounded-lg text-sm lg:px-5 py-2 lg:py-2.5 
                    focus:outline-none"
                    to="/my-bookings"
                    >
                        My Bookings
                    </Link>
                    <Link
                    className="text-gray-800 hover:bg-gray-100 focus:ring-4 
                    focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 
                    focus:outline-none"
                    to="/my-hotels"
                    >
                        My Hotels
                    </Link>
                    <SignOutButton />
          </div>
        </div>
        )}
    </div>
    </>
    );
}

export default UserMenu;