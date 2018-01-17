//
import React from 'react';
import Productscomponent from './productscomponent.jsx';

import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
    	<div>
	    	<p> Hello React project</p>
	    	<Productscomponant/>
    	</div>
    	);
  }
}

render(<App/>, document.getElementById('app'));