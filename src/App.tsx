import { 
    Routes, 
    Route, 
    BrowserRouter, 
    Navigate, 
    useLocation 
} from 'react-router-dom'
import { useState, useEffect } from 'react';

import { Navbar, Footer } from "./component";
import { 
    Home, 
    About, 
    CoolProjects, 
    Assemble, 
    ProfBoots, 
    SoxBox, 
    NotThatCrazyInteractive 
} from "./page";

function AppContent() {
    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(true);

    useEffect(() => {
        setIsHomePage(location.pathname === "/");
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cool-projects" element={<CoolProjects />} />
                    <Route path="/assemble" element={<Assemble />} />
                    <Route path="/profboots" element={<ProfBoots />} />
                    <Route path="/soxbox" element={<SoxBox />} />
                    <Route path="/notthatcrazyinteractive" element={<NotThatCrazyInteractive />} />
                    <Route path="/github" element={<Navigate to="https://github.com/Not-Crazy010" replace />} />
                </Routes>
            </div>
            {!isHomePage && <Footer />}
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}
