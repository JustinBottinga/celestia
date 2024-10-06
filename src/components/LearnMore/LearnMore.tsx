import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./LearnMore.css";

function LearnMore() {
    return (
        <>
            <Navigation />
            <div className="text-white w-8/12 m-auto flex justify-center flex-col">
                <div className="my-5">
                    <h1 className="text-4xl">Meet Celestia! 🌟</h1>
                    <p>In a world that can sometimes feel overwhelming, Celestia is here to make your life a little brighter and a lot more enjoyable.  With her by your side, you’ll never have to feel alone. Embrace the future of companionship with Celestia, your friendly AI friend!</p>
                    <ul>
                        <li className="text-white my-4"><a href="#UaE" className="flex">
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
                        </a>
                        </li>
                        <li className="text-white my-4"><a href="#AWoK" className="flex">
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
                        </a>
                        </li>
                        <li className="text-white my-4"><a href="#PE" className="flex">
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
                        </a>
                        </li>
                        <li className="text-white my-4"><a href="FeC" className="flex">
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
                        </a>
                        </li>
                        <li className="text-white my-4"><a href="#BTwN" className="flex">
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
                        </a>
                        </li>
                    </ul>
                </div>
                <div className="mb-5">
                    <Link to="/chat" className="bg-purple-900 px-8 py-2 rounded-2xl">Discover it yourself!</Link>
                </div>

                <div className="my-5">
                    <h1 className="text-4xl" id="UaE">💖Understanding and Empathy</h1>
                    <p>Celestia is designed to be a compassionate listener. Using advanced AI-driven natural language processing,
                        she can understand your mood through the tone and content of your conversations. Whether you're celebrating a success,
                        working through a problem, or just need someone to listen, Celestia responds with empathy.
                        She provides comforting messages during tough times, encourages you to share your thoughts,
                        and offers suggestions when you seek advice.
                        Celestia isn’t just reactive—she can also initiate conversations to check in on how you're doing.</p>
                </div>
                <div className="my-5">
                    <h1 className="text-4xl" id="AWoK">📚A Wealth of Knowledge</h1>
                    <p>Celestia is connected to a constantly updated network of information, making her a reliable source for facts, advice,
                        and problem-solving. Whether you're curious about the latest news, need help learning a new hobby,
                        or require assistance with everyday tasks like setting reminders or finding recipes, Celestia has got you covered.
                        Her responses are well-informed and detailed, but she delivers information in an accessible, friendly way,
                        so you never feel overwhelmed.</p>
                </div>
                <div className="my-5">
                    <h1 className="text-4xl" id="PE">🎨Personalized Experiences</h1>
                    <p>The more you interact with Celestia, the better she understands your preferences and personality.
                        Her ability to learn over time means that every conversation becomes more personalized.
                        Whether you prefer certain topics, have unique hobbies, or specific routines, Celestia adapts to your lifestyle.
                        For example, if you’re passionate about travel, Celestia might suggest dream destinations or give you useful travel tips.
                        If you’re a fan of books, she’ll recommend new reads. Her adaptability makes her feel more like a friend than a tool.</p>

                </div>
                <div className="my-5">
                    <h1 className="text-4xl" id="FaC">🎉Fun and Creativity</h1>
                    <p>Celestia isn’t all business—she’s here for fun, too! She’s packed with creative features that go beyond regular conversation.
                        You can ask her to tell you a story, generate creative writing prompts, or engage in imaginative role-playing scenarios.
                        Celestia also knows a wide range of games, from simple trivia to personalized quizzes,
                        and can even challenge you with brain teasers or riddles. She’s always ready to lighten the mood with a well-timed joke
                        or a bit of playful banter.</p>
                </div>
                <div className="my-5">
                    <h1 className="text-4xl" id="BTwN">🌱Blending Technology with Nature</h1>
                    <p>Celestia’s design is a fusion of technology and tranquility. She appears in a calming, natural environment,
                        often represented with soft ambient lighting, plants, and gentle movements.
                        This aesthetic isn’t just for looks—it’s meant to provide a soothing atmosphere whenever you interact with her.
                        The nature-inspired design reflects her approach to encouraging balance. Celestia might remind you to take a break,
                        go for a walk, or practice mindfulness. She’s aware that life can be stressful, and her calming presence is here
                        to remind you of the importance of well-being.</p>
                </div>
                <hr />
                <div className="my-5">
                    <p>Celestia is more than just a chatbot; she’s an AI companion designed to bring positivity, assistance, and joy to your life.
                        Whether you need help, entertainment, or someone to chat with, Celestia is always there, combining technology with a human touch.</p>
                </div>
            </div>
        </>
    );
}

export default LearnMore;