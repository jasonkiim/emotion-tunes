//Importing components from npm libraries
import React, {Component}	from 'react';

//Importing jsx File(s)
import Header 				from './HeaderComponents/Header';
import Gridview 			from './GridviewComponents/Gridview';
import Artists				from './ArtistsComponents/Artists';
import Footer 				from './FooterComponents/Footer';

//Displays the Header, Gridview, Artists, and Footer components
export default class EmotionTunesMain extends Component {
  	render() {
        return (
        	<div>
				<Header 
					{...this.props}
				/>
				<Gridview 
					{...this.props}
				/>
				<Artists />
				<Footer />
			</div>
        );
    }
}
