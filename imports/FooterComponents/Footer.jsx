//Importing components from npm libraries
import React, { Component}  from 'react';

//This component is responsible for displaying the Footer section of the project page
export default class Footer extends Component {
    
    render() {
        return (
        <div>
            <div className="footer-container">
                <div className="footer-text-container">
                    <p className="footer-description" style={{color: 'white'}}>
                        Thank you for visiting this project page. If you have any recommendations for music,
                        please shoot me an email at    
                        <a className="bold-text" 
                            href="href=mailto:dmdwn2696@gmail.com?Subject=Music%20Suggestions" target="_top"> dmdwn2696@gmail.com
                        </a> Cheers!
                        <br/>
                        <br/>
                        Shoutout to <a className="bold-text" href="https://www.youtube.com"> YouTube </a> for the <i className="em em-musical_note"></i>
                        and <a className="bold-text" href="https://www.microsoft.com"> Microsoft </a> for the <i className="em em-smile"></i>
                        <br/>
                        Made with love by yours truly, Jason Kim
                    </p>
                </div>
            </div>
        </div>
        );
    }
}
