import { Link } from 'react-router-dom'

export default function ProfBoots() {
    return (
        <main className="mx-auto max-w-2xl p-4">
            <h1 className="mb-4 text-3xl font-bold">ProfBoots.md</h1>
            <p>
                Professorboots Makes 3D Printed Mini Rc Cars/Trucks/Machines And Make Tutorials On How To Make Them!
                <br />
                <a href="https://professorboots.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">Their Website➔</a>
                <br />
                <a href="https://discord.gg/t4qNfBE6Zr" target="_blank" rel="noreferrer" className="text-blue-600 underline">Their Discord➔</a>
            </p>
            <div className="mt-4 flex flex-col space-y-2">
                <Link to="/cool-projects" className="text-blue-600 underline">Go Back➔</Link>
                <Link to="/" className="text-blue-600 underline">Go Home➔</Link>
            </div>
        </main>
    )
}