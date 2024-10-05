import './Review.css';

function Review() {
    return (
        <div className="text-white">
            <h3 className="text-3xl text-center">What do Celestia's friends think?</h3>
            <div className="flex justify-center items-center">
                <div>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 transition-transform duration-300 ease-in-out hover:stroke-purple-500 hover:scale-150">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </a>
                </div>
                <div className="bg-purple-950 cube w-screen m-4">
                </div>
                <div className="bg-purple-950 cube w-screen m-4">
                </div>
                <div className="bg-purple-950 cube w-screen m-4">
                </div>
                <div className="bg-purple-950 cube w-screen m-4">
                </div>
                <div>
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 transition-transform duration-300 ease-in-out hover:stroke-purple-500 hover:scale-150">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg></a>
                </div>
            </div>

        </div>
    );
}

export default Review;