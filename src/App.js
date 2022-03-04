import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Bloc from'./Bloc.js';
import ListadoPeliculas from './ListadoPeliculas';

function App(){
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ListadoPeliculas/>}/>
				<Route path="/bloc" element={<Bloc/>}/>
			</Routes>
			{/* Switch fue reemplazado por Routes */}
		</Router>
	);
}

export default App;