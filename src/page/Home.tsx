import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface CircleItemProps {
    to?: string
    href?: string
    image?: string
    video?: string
    title: string
    description: string
    delay: number
    imageClassName?: string
}

function CircleItem({ to, href, image, video, title, description, delay, imageClassName = "object-cover" }: CircleItemProps) {
    const [isHovered, setIsHovered] = useState(false)

    const content = (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.3, type: "spring" }}
            className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {video ? (
                <video
                    className={`w-full h-full ${imageClassName} transition-all duration-300 ${isHovered ? 'blur-sm brightness-50' : ''}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={video} type="video/mp4" />
                </video>
            ) : image ? (
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full ${imageClassName} transition-all duration-300 ${isHovered ? 'blur-sm brightness-50' : ''}`}
                />
            ) : (
                <div className={`w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 transition-all duration-300 ${isHovered ? 'blur-sm brightness-50' : ''}`} />
            )}

            <div className={`absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className="text-xl font-bold mb-2 font-mono">{title}</h3>
                <p className="text-sm font-mono leading-relaxed">{description}</p>
            </div>
        </motion.div>
    )

    if (to) {
        return <Link to={to}>{content}</Link>
    } else if (href) {
        return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
    } else {
        return content
    }
}

export default function Home() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <main className="flex flex-col items-center justify-center min-h-screen px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-16 flex items-center gap-4"
                >
                    <img src="/chonk.png" alt="chonk" className="w-16 h-16 rounded-full object-cover" />
                    <div>
                        <h1 className="text-6xl font-bold text-black mb-4 font-mono">
                            Not<span className="text-cyan-600">ThatCrazy</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-mono">Interactive Portfolio & Projects</p>
                    </div>
                </motion.div>

                <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <CircleItem
                            to="/soxbox"
                            video="/SoxBox/soxboxPH.mp4"
                            title="SoxBox"
                            description="Multiplayer VR Physics Game in Development"
                            delay={0.2}
                        />

                        <CircleItem
                            to="/cool-projects"
                            image="/Photos/CoolProjects/3DCrane.png"
                            title="Cool Projects"
                            description="3D Printed RC Cars, Trucks & Machines"
                            delay={0.4}
                            imageClassName="object-contain p-4"
                        />
                    </div>

                    <div className="flex justify-center">
                        <CircleItem
                            to="/notthatcrazyinteractive"
                            image="/icons/BlackSoxBoxLogo.png"
                            title="NotThatCrazyInteractive"
                            description="Interactive Experience"
                            delay={0.6}
                            imageClassName="object-contain p-8"
                        />
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="text-center text-gray-400 font-mono text-sm"
                >
                    © 2025 NotThatCrazy-Interactive.
                </motion.div>
            </main>
        </div>
    )
}