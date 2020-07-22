import React from 'react';
import {ColorContextConsumer} from "../context/context";

const Button = () => {
    return (
        <ColorContextConsumer>
            {context => (
                <div>
                    <button onClick={context.toggleColor}>Change Color</button>
                </div>
            )}
        </ColorContextConsumer>
    );
};

export default Button;