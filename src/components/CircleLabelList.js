import React from 'react';
import { useD3 } from '../hooks/useD3';
import { displayPie, labelList } from '../utils/functions'
import { useDataContext } from '../utils/dataContext'

export default function CircleLabelList(props) {
    const { data } = useDataContext()
    const ref = useD3(
        (svg) => {
            displayPie(svg, data)
            labelList(svg, data)
        },
        [data]
    );
    return (
        <svg
            ref={ref}
        />
    );
}

