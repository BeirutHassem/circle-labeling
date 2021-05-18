import React from 'react';
import { useD3 } from '../hooks/useD3';
import { displayPie, textAlgo1 } from '../utils/functions'
import { useDataContext } from '../utils/dataContext'
import { useFontSizeContext } from '../utils/fontSizeContext'

export default function CircleAlgo1(props) {
    const { data } = useDataContext()
    const { fontSize } = useFontSizeContext()
    const ref = useD3(
        (svg) => {
            displayPie(svg, data)
            textAlgo1(svg, data, fontSize)
        },
        [data, fontSize]
    );
    return (
        <svg
            ref={ref}
        />
    );
}

