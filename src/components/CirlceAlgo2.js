import React from 'react';
import { useD3 } from '../hooks/useD3';
import { displayPie, textAlgo2 } from '../utils/functions'
import { useDataContext } from '../utils/dataContext'

export default function CirlceAlgo2(props) {
    const { data } = useDataContext()
    const ref = useD3(
        (svg) => {
            displayPie(svg, data)
            textAlgo2(svg, data)
        },
        [data]
    );
    return (
        <svg
            ref={ref}
        />
    );
}