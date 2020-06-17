import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver.js';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver 
                primaryImg="/static/speakers/bw/Speaker-187.jpg" 
                secondaryImg="/static/speakers/Speaker-187.jpg" 
                alt=""></ImageToggleOnMouseOver>
            
            &nbsp;&nbsp;&nbsp;

            <ImageToggleOnMouseOver
                primaryImg="/static/speakers/bw/Speaker-1124.jpg" 
                secondaryImg="/static/speakers/Speaker-1124.jpg" 
                alt=""></ImageToggleOnMouseOver>
        </div>
    );
};

export default ImageChangeOnMouseOver;