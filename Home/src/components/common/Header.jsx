import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="p-4 border border-zinc-950/5 mt-1 rounded-lg mx-1">
            <div className="w-[95vw] mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl">Mon Projet</Link>
                <nav className="space-x-6">
                    <Link to="/" className='hover:text-blue-500 transition duration-300 font-light'>Accueil</Link>
                    <Link to="/Projects" className='hover:text-blue-500 transition duration-300 font-light'>Projets</Link>
                    <Link to="/About" className='hover:text-blue-500 transition duration-300 font-light'>À propos</Link>
                </nav>
            </div>
        </header>
    );
}