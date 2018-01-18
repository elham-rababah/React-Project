//
import React from 'react';
import {render} from 'react-dom';

import  Productscomponent  from './productscomponent.jsx';


class App extends React.Component {
  render () {
    return (
    	<div>
	    	<p> Hello React project</p>
	    	<Productscomponent/> 
    	</div>
    	);
  }
}

render(<App/>, document.getElementById('app'));