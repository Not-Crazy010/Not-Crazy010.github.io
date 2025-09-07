import { Link } from 'react-router-dom'

export default function SoxBox() {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="mb-4 text-3xl font-bold">SoxBox.md</h1>
      <p>SoxBox Is A Mulitplayer Vr Physics Game Thats In Development!</p>
      <p className="mt-4">
        <a href="https://trello.com/b/VzWqdVLX/soxbox" target="_blank" rel="noreferrer" className="text-blue-600 underline">
          Visit The SoxBox Trello For More Info On Whats To Come!➔
        </a>
      </p>
      <p className="mt-4">
        <a href="https://discord.gg/KYSZSmBxJm" target="_blank" rel="noreferrer" className="text-blue-600 underline">
          Here Is The Discord Server For SoxBox!➔
        </a>
      </p>
      <div className="mt-4">
        <Link to="/" className="text-blue-600 underline">Go Home➔</Link>
      </div>
    </main>
  )
}