import React, { useContext } from 'react';
import { useD3 } from '../hooks/useD3';
import { DataContext } from '../App'
import { displayPie, textAlgo1 } from '../utils/functions'
import { useDataContext } from '../utils/dataContext'

export default function CircleAlgo1(props) {
    const { data } = useDataContext()
    const ref = useD3(
        (svg) => {
            displayPie(svg, data)
            textAlgo1(svg, data)
        },
        [data]
    );
    return (
        <svg
            ref={ref}
        />
    );
}

