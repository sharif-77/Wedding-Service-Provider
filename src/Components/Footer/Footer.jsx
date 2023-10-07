
import { FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-[#220032] w-full min-h-[30vh]  mt-10 text-white">
            <div className="w-4/5 mx-auto py-10">
            <main className="flex gap-10 items-center">
              

                <div>
                    <h1 className='text-2xl font-bold'>Follow Us On</h1>
                    <div className='my-4 flex flex-col gap-3'>
                        <p className='flex items-center gap-2 font-bold'> <FaFacebook className='text-2xl '/><span>Facebook</span></p>
                        <p className='flex items-center gap-2 font-bold'> <FaTwitter className='text-2xl '/><span>Twitter</span></p>
                        <p className='flex items-center gap-2 font-bold'> <FaInstagram className='text-2xl '/><span>Instagram</span></p>
                    </div>

                </div>
                <div>

                </div>

            </main>
            </div>
        </div>
    );
};

export default Footer;