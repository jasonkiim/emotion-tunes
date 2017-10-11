//Importing components from npm libraries
import React, { Component}      from 'react';
import axios                    from 'axios';

//Importing jsx File(s)
import EmotionTunesMain 		from './EmotionTunesMain';

//Importing Music Playlists
import * as Playlist            from './Sources/MusicSrc';

export default class EmotionTunesContainer extends Component {

    state = {
        openUserUploadModalDialog: false,
        disabled: true,
        imagePreviewURL: './white.jpg',
        imageURL: '',
        emotion: '',
        description: '',
        UserUploadModalTitle: 'Upload Your Own Picture!',
        ExampleModalTitle: 'Loading Emotions...',
        result: 'Please Wait...',
        recommendationText: '',
        playlist: []
    }

    //This handler is used to dynamically change the above states when called in the children components.
    handleStateChangeFromProps = (fieldName, value) =>
    {
        this.setState({
            [fieldName]: value
        })
    }

    //Handler for clicking the "Let's try it" button
    handleLetsTryItButtonClick = () =>
    {
        this.setState({
            openUserUploadModalDialog: true
        })
    }
    
    //Handler for closing the modal. It "Resets" all of the states including titles and emotion.
    handleModalClose = () => 
    {
        this.setState({
            openUserUploadModalDialog: false,
            imagePreviewURL: './white.jpg',
            emotion: '',
            UserUploadModalTitle: 'Upload Your Own Picture!',
            ExampleModalTitle: 'Loading Emotions...',
        });
    }

    /*Makes an API call via axios post when the user presses submit in "UserUploadDialogContianer"
    Sets the url of the data in the axios post as the URL of the image. This is then posted in the 
    Emotion API, and the emotion result is given by using this.emotionResult().
    */
    handleSubmit = () =>
    {
        const endpoint  = `https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?`;
        const apiKey    = `a24b2148b395413b998364258515db89`;

        axios({
            method  : 'post',
            url     : endpoint,
            headers : {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': apiKey
            },
            data    : {
                        'url'   : this.state.imageURL
                    }
        })
        .then(response => {
            this.setState({
                UserUploadModalTitle: 'Emotion Detected!',
                description: 'You look'
            })
            this.emotionResult(response);
        })
        .catch(response => {
            let errorMessage = response.data ? response.errorMessage : '';

            alert('Error: Please Try Again with a new image URL');
        })

    }

    /*Changes the Image preview in the UserUploadDefaultModal whenever an image URL is posted via onBlur
    */
    handleImageChangeByURL = (e) =>
    {
        e.preventDefault();

        if (e.target.value === '')
        {
            this.setState({
                imagePreviewURL: './white.jpg'
            });
        }
        else
        {
            this.setState({
                imagePreviewURL: e.target.value,
                imageURL: e.target.value,
                disabled: false
            })
        }
    }

    /*Given API results through the axios call, the response is manipulated in this function
    to display the type of emotion, the  as well as the corresponding playlist.
    */
    emotionResult = (response) => 
    {
        let arr = Object.values(response.data[0].scores);
        console.log(response.data[0].scores);
        let max = Math.max(...arr);

        if (max === arr[0])
        {
            this.setState({
                emotion: 'Angry',
                recommendationText: 'Here are some music recommendations to calm you down.',
                playlist: Playlist.AngryPlaylist
            })
        }

        else if (max === arr[1])
        {
            this.setState({
                emotion: 'Contempt',
                recommendationText: 'Put some respect on these tunes!',
                playlist: Playlist.ContemptPlaylist
            })
        }   

        else if (max === arr[2])
        {
            this.setState({
                emotion: 'Disgusted',
                recommendationText: "I'll throw some Frank Ocean to help you make feel better.",
                playlist: Playlist.DisgustedPlaylist
            })
        } 

        else if (max === arr[3])
        {
            this.setState({
                emotion: 'Frightened',
                recommendationText: 'Here are some music reccomendations to brighten up the mood.',
                playlist: Playlist.FearedPlaylist
            })
        } 

        else if (max === arr[4])
        {
            this.setState({
                emotion: 'Happy',
                recommendationText: "I'm happy because you're happy! Here's some music to amplify the happiness.",
                playlist: Playlist.HappyPlaylist
            })
        }  

        else if (max === arr[5])
        {
            this.setState({
                emotion: 'Neutral',
                recommendationText: "Feeling meh? Here are some of my favorite songs to change your mood.",
                playlist: Playlist.NeutralPlaylist
            })
        }    

        else if (max === arr[6])
        {
            this.setState({
                emotion: 'Sad',
                recommendationText: "Here's what I recommend when you want to get real sad.",
                playlist: Playlist.SadPlaylist
            })
        }    

        else if (max === arr[7])
        {
            this.setState({
                emotion: 'Surprised',
                recommendationText: 'Just sit back and listen to some chill tunes.',
                playlist: Playlist.SurprisedPlaylist
            })
        }    

        /*Resizes the modal window after the modal is updated with an emotion.*/
        setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 0);
    }


    /*Passes all the handler functions as well as the states to the children*/
  	render() {
  		return (
  			<EmotionTunesMain 
  				{...this.state}
				handleStateChangeFromProps={this.handleStateChangeFromProps}
				handleLetsTryItButtonClick={this.handleLetsTryItButtonClick}
				handleModalClose={this.handleModalClose}
				handleSubmit={this.handleSubmit}
                emotionResult={this.emotionResult}
				handleImageChangeByURL={this.handleImageChangeByURL}
  			/>

  		)
  	}
}
