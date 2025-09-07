import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-100 p-4 shadow">
            <div className="mx-auto flex max-w-4xl items-center justify-between">
                <Link to="/" className="text-xl font-bold"> NotThatCrazy</Link>
                <div className="space-x-4 text-sm sm:text-base">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/cool-projects" className="hover:underline">Cool Projects</Link>
                    <a
                        href="https://discord.gg/KYSZSmBxJm"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                    >Discord</a>
                    <a
                        href="https://github.com/Not-Crazy010"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    );
}