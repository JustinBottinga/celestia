// import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import "./Review.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { StarIcon } from "@heroicons/react/20/solid";

function Review() {
  // const [visibleCubes, setVisibleCubes] = useState<{ [key: number]: boolean }>(
  //   {}
  // );
  // const cubeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry, index) => {
  //         if (entry.isIntersecting) {
  //           setTimeout(() => {
  //             setVisibleCubes((prev) => ({ ...prev, [index]: true }));
  //           }, index * 500);

  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   cubeRefs.current.forEach((cube) => {
  //     if (cube) observer.observe(cube);
  //   });

  //   return () => {
  //     cubeRefs.current.forEach((cube) => {
  //       if (cube) observer.unobserve(cube);
  //     });
  //   };
  // }, []);

  const reviews = [
    {
      Author: "Levi van Liefland",
      Title: "Kanker vetzak, tietje",
      Image: "src/assets/temp/levi.jpg",
      Header: "Ik heb mijn vriendin ingeruild voor Celestia",
      Review:
        "Veel beter dan Nora.. Ik ben verbaasd dat dit niet eerder bestond",
      Rating: 5,
    },
    {
      Author: "Justin Bottinga",
      Title: "Faggot",
      Image: "src/assets/temp/justin.jpg",
      Header: "Heb mijn vriendin niet meer nodig!",
      Review:
        "Suze ging vreemd op mij, en door middel van Celestia kon ik het terug doen!",
      Rating: 5,
    },
    {
      Author: "Stefan Vet",
      Title: "Nog maar net 18",
      Image: "src/assets/temp/stefan.jpg",
      Header: "Ik ga vreemd op Brechtje met Celestia",
      Review: "Dat wijf heb ik nooit meer nodig, ik heb nu Celestia!",
      Rating: 5,
    },
    {
      Author: "Stefan Vet",
      Title: "Nog maar net 18",
      Image: "src/assets/temp/stefan.jpg",
      Header: "Ik ga vreemd op Brechtje met Celestia",
      Review: "Dat wijf heb ik nooit meer nodig, ik heb nu Celestia!",
      Rating: 5,
    },
    {
      Author: "Stefan Vet",
      Title: "Nog maar net 18",
      Image: "src/assets/temp/stefan.jpg",
      Header: "Ik ga vreemd op Brechtje met Celestia",
      Review: "Dat wijf heb ik nooit meer nodig, ik heb nu Celestia!",
      Rating: 5,
    },
  ];

  const Rating = (stars: number) => {
    const content = [];
    for (let i = 0; i < stars; i++) {
      content.push(<StarIcon className="size-5" />);
    }

    return content;
  };
  return (
    <div className="text-white p-4 max-w-5/6 flex flex-col justify-center items-center">
      <h3 className="text-3xl w-fit p-4 pb-6">
        What do Celestia's friends think?
      </h3>
      {/* <div className="flex justify-center items-center">
        <div>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 ease-in-out hover:stroke-purple-500 hover:scale-150"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </a>
        </div>

        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (cubeRefs.current[index] = el)}
            className={`bg-purple-950 cube w-screen m-4 ${
              visibleCubes[index] ? "visible" : ""
            }`}
          ></div>
        ))}

        <div>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 ease-in-out hover:stroke-purple-500 hover:scale-150"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
      </div> */}

      <Carousel
        className="w-full max-w-7xl py-4"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1 py-4">
          {reviews.map((ReviewObj, index) => (
            <CarouselItem key={index} className="md:basis-1/3 ">
              <div
                style={{ background: "var(--background-secondary)" }}
                className="border border-solid border-purple-100/10 w-96 rounded-md  p-4 select-none"
              >
                <div className="header place-self-center flex gap-4 mb-6">
                  <img
                    className="h-14 w-14 rounded-full object-cover"
                    src={ReviewObj.Image}
                  ></img>
                  <h3 className="text-lg content-center flex flex-col">
                    {ReviewObj.Author}{" "}
                    <span className="text-sm text-purple-100/50">
                      {ReviewObj.Title}
                    </span>
                  </h3>
                </div>

                <div>
                  <p className="text-purple-100/80 font-bold  pb-2">
                    {ReviewObj.Header}
                  </p>
                  <p>{ReviewObj.Review}</p>
                  <p className="flex text-purple-100/90 gap-2 pt-2">
                    Rating:
                    <span className="flex gap-1 text-amber-200">
                      {Rating(ReviewObj.Rating)}
                    </span>
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
          {/**/}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent transition-all hover:border-0 hover:text-purple-500" />
        <CarouselNext className="bg-transparent transition-all hover:border-0 hover:text-purple-500" />
      </Carousel>
    </div>
  );
}

export default Review;
