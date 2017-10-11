//Importing component(s) from npm libraries
import React, { Component}  from 'react';
import {Element}            from 'react-scroll';

//Importing jsx File(s)
import GridviewPaper from './GridviewPaper';

//Importing images
import {imageList}          from '../Sources/Images'

/*Creates and array with the results of calling every element in the calling image list, defined in 
Sources/images. This allows easy image rendering and manipulation.*/
export default class Gridview extends Component {

  	render() {
        return (
            <Element name="examples">
                <div className="grid-view-container">
                    <div className="grid-view-text-container">
                        <h1 className="grid-view-header-title">
                            Some <i className="em em-fire"></i> Examples
                        </h1>
                    </div>
                    <div>
                    {imageList.map((list, i) => (
                        <GridviewPaper
                            key={i}                       
                            image={list.img}
                            {...this.props}
                        />
                    ))}
                    </div>
                </div>
            </Element>
        );
    }
}
