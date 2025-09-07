import { ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Assemble() {
    return (
        <main className="mx-auto max-w-2xl p-4">
            <h1 className="mb-4 text-3xl font-bold">Assemble.md</h1>
            <p>
                Assemble is a gridless PhysicsVR Sandbox game. Build Mechanisms which function how they would in real life.
                <br />
                <span className="inline-flex items-center gap-2 whitespace-nowrap">
                    <a href="https://carboncopylabs.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">Their Website</a> <ArrowBigRight /> This game is in EARLY BETA and not all features are implemented yet.
                </span>
            </p>
            <div className="mt-4 flex flex-col space-y-2">
                <Link to="/cool-projects" className="text-blue-600 underline">Cool Projects</Link>
                <Link to="/" className="text-blue-600 underline">Home</Link>
            </div>
        </main>
    )
}