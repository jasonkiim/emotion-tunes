//Importing components from npm libraries
import React, { Component}  from 'react';
import YouTube              from 'react-youtube';

//Importing MaterialUI component(s)
import RaisedButton         from 'material-ui/RaisedButton';
import Paper                from 'material-ui/Paper';
import TextField            from 'material-ui/TextField';

//Importing jsx File(s)
import * as Playlist        from '../Sources/MusicSrc';

/*Default Modal that gets called when a user presses "Let's try it"*/
export default class UserUploadDefaultModal extends Component {

    render() {
        const style = {
            height: 200,
            width: 200,
            textAlign: 'center',
            display: 'inline-block',
            marginLeft: '0',
            float: 'right',
            marginRight: '25px'
        };

        return (
            <div className="dialog-container">
                <Paper 
                    style={style} 
                    zDepth={1} 
                    className="image-paper"
                >
                    <img className="image-paper" src={this.props.imagePreviewURL}/>
                </Paper>
                <div>
                    <TextField
                        floatingLabelText="Enter an Image URL"
                        onBlur={this.props.handleImageChangeByURL}
                    />
                </div>
            </div>
        );
    }
}
