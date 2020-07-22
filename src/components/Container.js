import React, {Fragment} from 'react';
import Button from "./Button";
import {ColorContextConsumer} from "../context/context";

const Container = () => {
    return (
        <ColorContextConsumer>
            {context => (
                <Fragment>
                    <h1 style={{color: `${context.color}`}}>Container</h1>
                    <Button/>
                </Fragment>
            )}
        </ColorContextConsumer>
    );
};

export default Container;