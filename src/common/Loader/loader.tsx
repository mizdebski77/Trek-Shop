import React from 'react';
import { Spinner, Title, Wrapper } from './styledLoader';
import spinner from "../Images/spinner.svg"

export const Loader = () => {
    return (
        <Wrapper>
            <Spinner src={spinner} />
            <Title>
                Data download ...
                <p>
                    Data is downloaded from "database.onrender.com", which may take a while
                </p>
            </Title>
        </Wrapper>
    );
};

