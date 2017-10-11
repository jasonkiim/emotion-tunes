//Importing components from npm libraries
import React, { Component}  from 'react';
import {Link} from 'react-scroll';

//Importing MaterialUI component(s)
import RaisedButton from 'material-ui/RaisedButton';
import Dialog       from 'material-ui/Dialog';
import FlatButton   from 'material-ui/FlatButton';

//Importing jsx File(s)
import UserUploadDialogContainer from './UserUploadDialogContainer';

/*Parent of the Header component that displays the header.
Takes UserUploadDialogContainer as a child.*/
export default class Header extends Component {

  	render() {
        return (
        <div>
            <div className="header-container">
                <div className="header-text-container">
                    <h1 className="header-title">
                        EmotionTunes
                    </h1>
                    <h2 className="header-title-description">Reface your ways of listening to music with a bit of emotions. </h2>
                </div>
    	    </div>
            <div className="description-container">
                <div className="description-text-container">
                    <p className="description">EmotionTunes uses<a className="bold-text" href="https://azure.microsoft.com/en-us/services/cognitive-services/emotion/"> Microsoft's Cognitive Service: Emotion API </a>
                        to recognize emotions in images and play a song depending on the emotions.
                    </p>
                    <UserUploadDialogContainer 
                        {...this.props}
                    />
                </div>
            </div>
        </div>
        );
    }
}
