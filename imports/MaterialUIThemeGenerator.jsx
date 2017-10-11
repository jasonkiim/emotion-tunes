//Importing components from npm libraries
import React, { Component}  from 'react';

//Importing MaterialUI component(s)
import MuiThemeProvider 	from 'material-ui/styles/MuiThemeProvider';

//Importing jsx File(s)
import EmotionTunesContainer 	from './EmotionTunesContainer';

import './styles/App.css';

/*Wraps the EmotionTunesContainer (which contains the main) with
the Material UI theme*/
export default class MaterialUIThemeGenerator extends Component {

  	render() {
        return (
		  	<MuiThemeProvider>
		        <EmotionTunesContainer />
		  	</MuiThemeProvider>
        );
    }
}
