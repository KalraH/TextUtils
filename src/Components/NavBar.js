import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar(props) 
{
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/TextUtils">{props.title}</Link>
				
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/TextUtils">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">{props.aboutText}</Link>
						</li>
					</ul>

					<div className="d-flex">
						<label 
							className={`form-check-label form-switch text-${ (props.mode === 'light') ? 'dark' : 'light' }`} 
							htmlFor="flexSwitchCheckDefault">
								Toggle Theme
						</label>

						<button 
							type="button" 
							class={` btn btn-sm btn-outline-${(props.mode === 'light') ? 'primary' : 'light'} mx-2`} 
							onClick={props.toggleMode} 
							style={{ height: '30px', width: '30px' }} />
					</div>
				</div>
			</div>
		</nav>
    )
}

NavBar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
	mode: PropTypes.string.isRequired,
	toggleMode: PropTypes.func.isRequired
};

NavBar.defaultProps = {
    title: 'Set Title Here',
    aboutText: 'About'
};