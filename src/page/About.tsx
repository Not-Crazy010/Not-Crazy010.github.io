export default function About() {
    return (
        <main className="mx-auto max-w-2xl p-4">
            <h1 className="mb-4 text-3xl font-bold">readme.md</h1>
            <p>I'm Matt, a unity game disigner and developer.</p>
            <p className="mt-2">I do lot of stuff with VR.</p>

            <p className="mt-4">I have experience with:</p>
            <ul className="list-inside list-disc">
                <li>
                    <b>Unity</b>
                    <ul className="ml-4 list-inside list-disc">
                        <li>C# scripting</li>
                        <li>Meta Quest / OpenXR</li>
                        <li>XR Interaction Toolkit</li>
                    </ul>
                </li>
            </ul>
            <p className="mt-4">And moderate experience with:</p>
            <ul className="list-inside list-disc">
                <li>Blender rigging</li>
                <li>Character modeling & animation</li>
                <li>Blender</li>
            </ul>

            <p className="mt-4 text-center">
                <b>I also have experience with:</b>
                <img
                    src="https://skillicons.dev/icons?i=unity,blender,cs,docker,dotnet,github,html,py,raspberrypi,visualstudio,vscode"
                    alt="skills"
                    className="mx-auto mt-2 w-full max-w-lg"
                />
            </p>
        </main>
    );
}