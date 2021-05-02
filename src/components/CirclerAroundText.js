import React from 'react';
import { useD3 } from '../hooks/useD3';
import { displayPie, textArround } from '../utils/functions'
import { useDataContext } from '../utils/dataContext'


export default function CirclerAroundText(props) {

    const { data } = useDataContext()
    const ref = useD3(
        (svg) => {
            displayPie(svg, data)
            textArround(svg, data)
        },
        [data]
    );
    return (
        <svg
            ref={ref}
        />
    );
}
