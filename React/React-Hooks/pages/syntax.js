import React, {useEffect} from 'react';

const syntax = () => {

    const [checkBoxValue, setCheckBoxValue] = useState(false);

    useEffect(() => {
        console.log('in useEffect');
        return ()=> {
            console.log('in useEffect cleanup');
        };
    }, [checkBoxValue]);

    return(
        <div></div>
    );
};

export default syntax;