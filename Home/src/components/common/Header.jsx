import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="p-4 flex justify-between items-center bg-gray-900 text-white">
            <h1 className="text-xl font-bold">Mon Projet</h1>
            <nav className="space-x-4">
                <Link to="/">Accueil</Link>
                <Link to="/Projects">Projets</Link>
                <Link to="/About">À propos</Link>
            </nav>
        </header>
    );
}

export default Header;