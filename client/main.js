import { Meteor } 	from 'meteor/meteor';
import ReactDOM 	from 'react-dom';
import React 		from 'react';

import MaterialUIThemeGenerator from '../imports/MaterialUIThemeGenerator';

Meteor.startup(() => {
  	ReactDOM.render(<MaterialUIThemeGenerator/>, document.getElementById('app'));
})
