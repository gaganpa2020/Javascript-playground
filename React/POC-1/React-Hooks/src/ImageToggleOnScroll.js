import React, {useRef, useEffect, useState} from 'react';

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {

    const imageRef = useRef(null);

    useEffect(()=>{
        window.addEventListener('scroll', scrollHandler);
        return (()=> {
            window.removeEventListener('scroll', scrollHandler);
        });
    });

    const [inView, setInView] = useState(false);

    const isInview = () => {
        if(imageRef.current){
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    };

    const scrollHandler = () => {
        setInView(()=>{
            return isInview();
        });
    };

    return (
        <img 
            src = {inView? secondaryImg: primaryImg}
            alt = "" ref = {imageRef}
        />
    );
};

export default ImageToggleOnScroll;