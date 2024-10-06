import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Review from "../Review/Review";
import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [mainTitle, setMainTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const mainTitleText = "CELESTIA,";
  const subTitleText = "Your AI friend to talk to!";

  useEffect(() => {
    let mainIndex = 0;
    let subIndex = 0;

    const typeMainTitle = () => {
      if (mainIndex < mainTitleText.length) {
        setMainTitle(mainTitleText.slice(0, mainIndex + 1));
        mainIndex++;
        setTimeout(typeMainTitle, 100);
      } else {
        setTimeout(typeSubTitle, 250);
      }
    };

    const typeSubTitle = () => {
      if (subIndex < subTitleText.length) {
        setSubTitle(subTitleText.slice(0, subIndex + 1));
        subIndex++;
        setTimeout(typeSubTitle, 100);
      }
    };

    typeMainTitle();
  }, []);

  return (
    <>
      <Navigation />
      <div className="grid-wrapper">
        <div className="bg-grid"></div>
        <header className="border-b border-solid border-gray-100/5">
          <div className=" w-8/12 m-auto flex justify-center items-center flex-col">
            <br />
            <br />
            <br />
            <div className="text-left">
              <div className="fixed-text">
                <h1 className="text-transparent text-6xl gradien bg-gradient-to-r  from-rose-400 via-pink-200 to-violet-300 bg-clip-text font-bold font-serif">
                  {mainTitle}
                </h1>
                <h3 className="text-white text-4xl">{subTitle}</h3>
              </div>
            </div>
            <div className="flex w-1/2 justify-around my-3">
              <div className="flex fadein">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                <h4 className="text-white">Placeholder</h4>
              </div>
              <div className="flex fadein">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
                <h4 className="text-white">Placeholder</h4>
              </div>
              <div className="flex fadein">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <h4 className="text-white">Placeholder</h4>
              </div>
            </div>

            <div className="my-3 fadein">
              <Link
                to="/learn"
                className="text-white bg-purple-900 px-6 py-2 rounded-2xl m-10"
              >
                Learn More
              </Link>
              <a
                href="#"
                className="text-white bg-purple-900 px-9 py-2 rounded-2xl m-10"
              >
                Register
              </a>
            </div>
            <br />
            <br />
            <br />
            <div className="bg-purple-900 px-4 py-2 rounded-t-2xl self-start ">
              <h3 className="text-white">Talk to Celestia</h3>
            </div>
            <div className="message-container border border-solid border-gray-100/5 bg-black  bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-40 w-full gap-4 flex flex-col rounded-tr-2xl p-5">
              <p className="message-bubble bg-purple-50/90 text-slate-950/100 rounded-l-lg rounded-tr-lg p-3 text-end inline-block ml-auto">
                Who is Celestia?
              </p>

              <p className="message-bubble bg-purple-300 bg-blend-darken text-slate-900 rounded-r-lg rounded-tl-lg p-3">
                Meet Celestia, I am your personal AI friend designed to
                accompany you on your journey through life. With an inviting
                personality and a warm, friendly demeanor, I am here to provide
                support, companionship, and a touch of magic to your daily
                routine.
              </p>
              <p className="message-bubble bg-purple-50/90 text-slate-950/100 rounded-l-lg rounded-tr-lg p-3 text-end inline-block ml-auto">
                Thanks!
              </p>
            </div>

            <Link
              to="/chat"
              className="bg-purple-900 text-white w-full rounded-bl-2xl rounded-br-2xl text-center py-3 text-1xl hover:bg-purple-950"
            >
              Try yourself!
            </Link>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="self-start">
              <h3 className="text-3xl text-white">
                What Makes Celestia Special?
              </h3>
              <ul>
                <li className="text-white flex my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Understanding and Empathy
                </li>
                <li className="text-white flex my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  A Wealth of Knowledge
                </li>
                <li className="text-white flex my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Personalized Experiences
                </li>
                <li className="text-white flex my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Fun and Creativity
                </li>
                <li className="text-white flex my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Blending Technology with Nature
                </li>
              </ul>
              <Link
                to="/learn"
                className="bg-purple-900 text-white px-9 py-2 rounded-2xl"
              >
                Learn more
              </Link>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </header>
      </div>
      <Review />
    </>
  );
}

export default Home;
