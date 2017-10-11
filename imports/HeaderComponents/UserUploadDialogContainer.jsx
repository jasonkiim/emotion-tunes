//Importing components from npm libraries
import React, { Component}      from 'react';
import {Link}                   from 'react-scroll';
import axios                    from 'axios';

//Importing MaterialUI component(s)
import RaisedButton             from 'material-ui/RaisedButton';
import Dialog                   from 'material-ui/Dialog';
import FlatButton               from 'material-ui/FlatButton';

//Importing jsx File(s)
import UserUploadDefaultModal   from './UserUploadDefaultModal';
import ResultModal              from '../ResultModal';

/*Since we're not mapping each individual image, all the handlers are called as props
from EmotionTunesContainer. This allows for cleaner componentization as all the handlers 
are stored in one place.*/

/*This component displays the two buttons in the header. When "Let's try it" is pressed,
the default modal UserUploadDefaultModal is opened, until the submit button is pressed
then the resultmodal is displayed*/

export default class UserUploadDialogContainer extends Component {

  	render() {
        //Cancel and Submit button actions
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.handleModalClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.props.handleSubmit}
            />,
        ];

        return (
        <div>
            <Link 
                activeClass="active" 
                to="examples" 
                spy={true} smooth={true} duration={500} 
            >
                <RaisedButton 
                    label="Examples" 
                    style={{'marginBottom': '30px', 'marginTop': '30px'}}
                />
            </Link>
            <RaisedButton 
                label="Let's Try It" 
                style={{marginTop: '30px', marginLeft: '20px'}}
                onClick={this.props.handleLetsTryItButtonClick} 
            />
            {!this.props.emotion &&
                <Dialog
                    title={this.props.UserUploadModalTitle}
                    modal={false}
                    actions={actions}
                    open={this.props.openUserUploadModalDialog}
                    onRequestClose={this.props.handleModalClose}
                >
                    <UserUploadDefaultModal 
                        {...this.props}
                    />
                </Dialog>
            }
            {this.props.emotion && 
                <Dialog
                    title={this.props.UserUploadModalTitle}
                    modal={false}
                    actions={actions}
                    open={this.props.openUserUploadModalDialog}
                    onRequestClose={this.props.handleModalClose}
                >
                    <ResultModal
                        {...this.props}
                    />
                </Dialog>
            }
        </div>
        );
    }
}
