import React, { useEffect } from 'react';
import Home from "../components/Home";

const HOME = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <Home />
    )
};

export default HOME;