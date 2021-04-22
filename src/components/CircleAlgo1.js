import React, { useContext } from 'react';
import { useD3 } from '../hooks/useD3';
import { DataContext } from '../App'
import { displayPie, textAlgo1 } from '../utils/functions'

export default function CircleAlgo1(props) {
    const value = useContext(DataContext);

    const ref = useD3(
        (svg) => {
            displayPie(svg, value)
            textAlgo1(svg, value)
        },
        [value]
    );
    return (
        <svg
            ref={ref}
        />
    );
}

