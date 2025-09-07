import { Link } from "react-router-dom";

export default function CoolProjects() {
    return (
        <main className="mx-auto max-w-2xl p-4">
            <h1 className="mb-4 text-3xl font-bold">Cool-Projects.md</h1>
            <p>There are some cool projects that I have found over the years!</p>
            <div>
                <Link to="/profboots" className="text-blue-600 underline">3D Printed Mini Rc Cars/Trucks/Machines➔</Link>
                <br />
                <Link to="/assemble" className="text-blue-600 underline">VR building And Electronics Game➔</Link>
                <br />
                <Link to="/" className="text-blue-600 underline">Go Home➔</Link>
            </div>
        </main>
    )
}   