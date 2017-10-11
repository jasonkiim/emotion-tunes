//Importing components from npm libraries
import React, { Component}  from 'react';
import YouTube              from 'react-youtube';

//Importing MaterialUI component(s)
import RaisedButton from 'material-ui/RaisedButton';

/*The modal that gets displayed after the emotions are initialized with the API. 
Also instantiates an embedded YouTube Player with a playlist based on the emotion.
*/
export default class ResultModal extends Component {

    state = {
        music: null
    }

    //After this component is mounted, a random song is played from an array of songs in a playlist.
    componentDidMount ()
    {
        let randomNum = Math.floor(Math.random() * this.props.playlist.length) +0;
        this.setState({music: randomNum});
    }

  	render() {
        const opts = {
          height: '300',
          width: '100%',
          playerVars: {
            autoplay: 1
          }
        };

        return (
            <div className="emotion-result">
                <div style={{'fontSize': '30px'}}>
                    {this.props.description} <b>{this.props.emotion}</b>
                </div>
                <br/>
                <div>
                    {this.props.recommendationText}
                </div>
                <br/>
                <YouTube
                    videoId={this.props.playlist[this.state.music]}
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }
}
