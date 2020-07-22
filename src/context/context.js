import React, {useState} from 'react';

const {Provider, Consumer} = React.createContext();


const ColorContextProvider = ({children}) => {
    const [color, setColor] = useState('red');

    const toggleColor = () => {
        setColor(color === 'red' ? 'blue' : 'red')
    }

    const valueObj = {
        color, toggleColor
    }

    return (
        <Provider value={{...valueObj}}>
            {children}
        </Provider>
    );
};

export {ColorContextProvider, Consumer as ColorContextConsumer};