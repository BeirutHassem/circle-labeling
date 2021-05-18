import React from 'react';
import { useD3 } from '../hooks/useD3';
import { displayPie, textArround } from '../utils/functions'
import { useDataContext } from '../utils/dataContext'
import { useFontSizeContext } from '../utils/fontSizeContext'

export default function CirclerAroundText(props) {

    const { data } = useDataContext()
    const { fontSize } = useFontSizeContext()
    const ref = useD3(
        (svg) => {
            displayPie(svg, data)
            textArround(svg, data, fontSize)
        },
        [data, fontSize]
    );
    return (
        <svg
            ref={ref}
        />
    );
}
