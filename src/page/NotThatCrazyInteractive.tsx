import { Link } from "react-router-dom";


export default function NotThatCrazyInteractive() {
    return (
        <main className="mx-auto max-w-2xl p-4">
            <h1 className="mb-4 text-3xl font-bold">NotThatCrazy Interactive</h1>
            <section className="mt-4">
                <h2 className="text-2xl font-semibold">About NotThatCrazy Interactive</h2>
                <p>
                    NotThatCrazy Interactive is a game studio that wants to create an immersive and engaging VR and flatscreen gaming experience.
                </p>
            </section>
            <section className="mt-4">
                <h2 className="text-2xl font-semibold">Our Games</h2>
                <p>
                    Check out our latest Game: <Link to="/soxbox" className="text-blue-600 underline">SoxBox➔</Link>
                </p>
            </section>
            <div className="mt-4">
                <Link to="/" className="text-blue-600 underline">Go Home➔</Link>
            </div>
        </main>
    )
}