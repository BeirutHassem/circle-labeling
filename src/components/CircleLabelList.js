import React from 'react';
import { useD3 } from '../hooks/useD3';
import { displayPie, labelList } from '../utils/functions'
import { useDataContext } from '../utils/dataContext'
import { useFontSizeContext } from '../utils/fontSizeContext'

export default function CircleLabelList(props) {
    const { fontSize } = useFontSizeContext()
    const { data } = useDataContext()
    const ref = useD3(
        (svg) => {
            displayPie(svg, data)
            labelList(svg, data, fontSize)
        },
        [data, fontSize]
    );
    return (
        <svg
            ref={ref}
        />
    );
}

