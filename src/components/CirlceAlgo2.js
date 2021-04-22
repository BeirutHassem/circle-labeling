import React, { useContext } from 'react';
import { useD3 } from '../hooks/useD3';
import { DataContext } from '../App'
import { displayPie, textAlgo2 } from '../utils/functions'

export default function CirlceAlgo2(props) {
    const value = useContext(DataContext);

    const ref = useD3(
        (svg) => {
            displayPie(svg, value)
            textAlgo2(svg, value)
        },
        [value]
    );
    return (
        <svg
            ref={ref}
        />
    );
}