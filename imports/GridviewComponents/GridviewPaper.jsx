//Importing components from npm libraries
import React            from 'react';
import axios            from 'axios';

//Importing MaterialUI component(s)
import Dialog           from 'material-ui/Dialog';
import FlatButton       from 'material-ui/FlatButton';
import RaisedButton     from 'material-ui/RaisedButton';
import Paper            from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

//Importing jsx File(s)
import ResultModal      from '../ResultModal';

//Importing the music playlists from the Music Sourcew
import * as Playlist    from '../Sources/MusicSrc';

export default class ExamplesDefaultModal extends React.Component {
/*The GridView component renders each individual Paper using a map function,
it is necessary that the click handlers to open/close the modal is defined within this
component to specify which image to send to the API depending on the image click.*/
    state = {
        open: false,
    }

    /*Makes the Emotion API call when a specific paper is clicked using an Axios call. 
    Given the response, it changes the title of the modal from "Loading..." to "Emotion Detected".
    Goes to the emotionResults function defined in the EmotionTunesContainer to show the results.*/
    handleDialogOpen = () => 
    {
        /*Images here are predefined as files in "./image.jpg" format. Therefore, it's necessary to remove the 
        ./ with / and append it onto the domain to properly post the URL using the axios call.*/
        this.setState({open: true});

        const endpoint  = `https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?`;
        const apiKey    = `a24b2148b395413b998364258515db89`;

        let imageURL = this.props.image;
        imageURL = imageURL.replace('./', '/');

        const samplePic = `https://emotion-tunes-project.herokuapp.com` + imageURL;

        axios({
            method  : 'post',
            url     : endpoint,
            headers : {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': apiKey
            },
            data    : {
                        'url'   : samplePic
                    }
        })
        .then(response => {
            this.props.handleStateChangeFromProps('ExampleModalTitle', 'Emotion Detected!');
            this.props.handleStateChangeFromProps('description', 'You look');
            this.props.emotionResult(response);
        });
    }

    //Closes the modal
    handleDialogClose = () => 
    {
        this.setState({open: false});
        this.props.handleModalClose();
    }

    render() {
        const customPaperStyle = {
            height: 300,
            width: 300,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };

        const customDialogStyle ={
            width: '70%',
            height: '70%',
            maxWidth: 'none',
        };

        /*Wrap the Dialog component in Paper component because "Paper" is what is displayed in GridView.
        A loading dialog will appear until the emotion props is changed (due to handleDialogOpen). Then it will
        display the result modal.*/
        return (
            <Paper 
                style={customPaperStyle} 
                zDepth={1} 
                className="image-paper"
                onClick={this.handleDialogOpen}
            >
                <img className="image-paper" src={this.props.image}/>
                {!this.props.emotion &&
                <Dialog
                    title={this.props.ExampleModalTitle}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleDialogClose}
                    contentStyle={customDialogStyle}
                >
                    {!this.props.emotion &&
                        <CircularProgress size={60} thickness={5} />
                    }
                </Dialog>
                }
                {this.props.emotion && 
                <Dialog
                    title={this.props.ExampleModalTitle}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleDialogClose}
                    contentStyle={customDialogStyle}
                >
                    <ResultModal 
                        {...this.props}
                    />
                </Dialog>
                }
            </Paper>
        );
    }
}
