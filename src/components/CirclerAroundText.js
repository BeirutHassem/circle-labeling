import React, { useContext } from 'react';
import { useD3 } from '../hooks/useD3';
import { DataContext } from '../App'
import { displayPie, textArround } from '../utils/functions'

export default function CirclerAroundText(props) {
    const value = useContext(DataContext);

    const ref = useD3(
        (svg) => {
            displayPie(svg, value)
            textArround(svg, value)
        },
        [value]
    );
    return (
        <svg
            ref={ref}
        />
    );
}
