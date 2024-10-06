import { Link } from "react-router-dom";
import "./Navigation.css";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

function Navigation() {
  return (
    <nav className="flex relative top-0 z-10 items-center justify-between flex-wrap p-6 h-fit">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-2xl tracking-tight font-mono pointer-events-none select-none">
          CELESTIA
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm flex lg:flex-grow">
          <Link
            to="/"
            className="flex mt-4 gap-1 leading-5 lg:mt-0 transition-all text-white hover:text-purple-300 mr-4"
          >
            {<HomeIcon className="size-5" />} Home
          </Link>
          <Link
            to="/learn"
            className="flex mt-4 gap-1 leading-5 lg:mt-0 transition-all text-white hover:text-purple-300 mr-4"
          >
            {<InformationCircleIcon className="size-5" />} Learn More
          </Link>
          <Link
            to="/chat"
            className="flex mt-4 gap-1 leading-5 lg:mt-0 transition-all text-white hover:text-purple-300 mr-4"
          >
            {<ChatBubbleLeftRightIcon className="size-5" />} Chat
          </Link>
        </div>
        {/* <div>
          <a
            href="#"
            className="inline-block text-sm transition-all px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 hover:bg-white mt-4 lg:mt-0"
          >
            Register
          </a>
        </div> */}
        <div className="mx-2">
          <Link
            to="#"
            className="flex leading-5 gap-1 text-sm transition-all px-4 py-2  border rounded text-white border-white hover:border-transparent hover:text-purple-500 hover:bg-white mt-4 lg:mt-0"
          >
            {<UserIcon className="size-5"></UserIcon>} Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
