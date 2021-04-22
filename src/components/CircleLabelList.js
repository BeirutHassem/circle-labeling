import React, { useContext } from 'react';
import { useD3 } from '../hooks/useD3';
import { DataContext } from '../App'
import { displayPie, labelList } from '../utils/functions'

export default function CircleLabelList(props) {
    const value = useContext(DataContext);

    const ref = useD3(
        (svg) => {

            displayPie(svg, value)
            labelList(svg, value)
        
        },
        [value]
    );
    return (
        <svg
            ref={ref}
        />
    );
}

