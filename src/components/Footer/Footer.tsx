import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="border-t border-solid border-gray-100/5 text-white py-6 mt-10">
                <div className="container mx-auto flex justify-between items-center p-5">
                    <div>
                        <h2 className="text-lg font-semibold">Celestia</h2>
                        <p className="text-sm">Your AI friend to talk to!</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/" className="text-white hover:text-purple-300">Home</Link>
                        <Link to="/learn" className="text-white hover:text-purple-300">Learn more</Link>
                        <Link to="/chat" className="text-white hover:text-purple-300">Chat</Link>
                        <a href="#" className="text-white hover:text-purple-300">Log-in</a>
                        <a href="#" className="text-white hover:text-purple-300">Register</a>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="text-sm">© 2024 Celestia. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;