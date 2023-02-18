import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import React, { useState } from 'react';
import NavBar from './Components/NavBar';import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() 
{
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type
		});
		
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};	

	const toggleMode = () => {
		if (mode === 'light')
		{
			setMode('dark'); 
			document.body.style.backgroundColor = '#0a3d6f';
			showAlert("Dark mode has been Enabled", "success");
		}
		else	
		{
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert("Light mode has been Enabled", "success");
		}
	};

	return (
		<>
			<Router>
				<NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				
				<div className="container my-4">
					<Routes>
						<Route path="/About" element={<About mode={mode} />} />
						<Route path="/" element={<TextForm heading="Enter text for Analysis..." mode={mode} showAlert={showAlert}/>} />
					</Routes>
				</div>
			</Router>
		</>
	);
}
export default App;