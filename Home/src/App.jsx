import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routing/AppRoutes';

export default function App() {
	return (
		<BrowserRouter>
			<AppRoutes /> {/* Toutes les routes viennent d’ici */}
		</BrowserRouter>
	);
}