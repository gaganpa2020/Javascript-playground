import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll.js';

const ImageChangeOnScroll= () => {

    const ImgList = [1124, 187, 823, 1269, 1530];


    return (
        <div>
            {
                ImgList.map((speakerId) => {
                    return (
                        <div key={speakerId}>
                            <ImageToggleOnScroll 
                            primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
                            secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
                            alt=""></ImageToggleOnScroll>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ImageChangeOnScroll;