import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";

const RightSidebar = () => {
    return (
        <div>
                <h1 className="font-bold text-lg">Login with</h1>
            <div className="mt-3 flex flex-col gap-2">
            <button className="btn btn-outline btn-primary "><FaGoogle />Login with Google</button>
            <button className="btn btn-outline btn-success"><FaGithub />Login with Github</button>
            </div>

            <div className="mt-5 flex flex-col">
                <button className='btn py-5'><FaFacebook />Facebook</button>
                <button className='btn '><FaTwitter />Twitter</button>
                <button className='btn'><FaInstagram />Instagram</button>
            </div>
        </div>
    );
};

export default RightSidebar;