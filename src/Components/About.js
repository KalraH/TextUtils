import React from 'react';
import PropTypes from 'prop-types';

export default function About(props) {
	let myStyle= {  
		backgroundColor: (props.mode === 'dark') ? '#225382' : 'white',
		color: (props.mode === 'light') ? 'black' : 'white' 
	};

	let myStyleButton= {  
		backgroundColor: (props.mode === 'dark') ? '#496f95' : 'white',
		color: (props.mode === 'light') ? 'black' : 'white' 
	};

	return (
		<div className='container' style={{color: (props.mode === 'light') ? 'black' : 'white'}}>
			<h1 className="my-2">About Us</h1>
			<div className="accordion" id="accordionPanelsStayOpenExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="panelsStayOpen-headingOne">
						<button style={myStyleButton} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
							<strong>Analyze Your Text</strong>
						</button>
					</h2>

					<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
						<div className="accordion-body" style={myStyle}>
							TextUtils gives you a way to analyze your text quickly & effectively. Be it Word Count, Character Count 
							or Time Consumed in reading the given text. This application also provies features to play around with Your 
							text too. These freatures include Converting text to Upper/Lower Case, Removing extra spaces inside 
							text or Coppiying to clipboard.
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
						<button style={myStyleButton} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
						<strong>Free To Use</strong>
						</button>
					</h2>
					
					<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
						<div className="accordion-body" style={myStyle}>
							TextUtils is a free character counter tool that provides instant character count & word count statistics 
							for a given text. TextUtils reports the number of Words & Characters. Thus it's suitable for writing text 
							with word/character limit.
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="panelsStayOpen-headingThree">
						<button style={myStyleButton} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
						<strong>Browser Compatible</strong>
						</button>
					</h2>
					
					<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
						<div className="accordion-body" style={myStyle}>
							This word counter application works in any web browser such as Chrome, Firefox, Edge, Safari, opera, 
							Brave. It suits to counter charactes in Facebook, Blog, Books, Excel Document, Pdf Document, Essays etc.
						</div>
					</div>
				</div>
			</div>
		</div>
  	)
}
About.prototype = { 
    mode: PropTypes.string.isRequired
}