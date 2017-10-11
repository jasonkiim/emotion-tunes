//Importing components from npm libraries
import React, { Component}  from 'react';

//This component is responsible for displaying the Artists section of the project page.
export default class Artists extends Component {
    render() {
        return (
        <div>
            <div className="artist-container">
                <img className="artist-background" src="./artists-background.jpg"/>
                <div className="background-layer" />
                <div className="artist-text-container">
                    <h1 className="artist-container-title">
                        Featured artists include...
                    </h1>
                    <h2 className="artist-description">Drake, Kendrick Lamar, Bad Bad Not Good, Honne, Local Natives,
                        and many more 
                    </h2>
                </div>
            </div>
        </div>
        );
    }
}
