import { useEffect, useRef, useState } from "react";
import "./Review.css";

function Review() {
  const [visibleCubes, setVisibleCubes] = useState<{ [key: number]: boolean }>({});
  const cubeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCubes((prev) => ({ ...prev, [index]: true }));
            }, index * 500);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cubeRefs.current.forEach((cube) => {
      if (cube) observer.observe(cube);
    });

    return () => {
      cubeRefs.current.forEach((cube) => {
        if (cube) observer.unobserve(cube);
      });
    };
  }, []);

  return (
    <div className="text-white p-4">
      <h3 className="text-3xl text-center">What do Celestia's friends think?</h3>
      <div className="flex justify-center items-center">
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
            className={`bg-purple-950 cube w-screen m-4 ${visibleCubes[index] ? "visible" : ""
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
      </div>
    </div>
  );
}

export default Review;
