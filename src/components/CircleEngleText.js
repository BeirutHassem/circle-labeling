import React from 'react';
import { useD3 } from '../hooks/useD3';
import { displayPie, engleText} from '../utils/functions'
import { useDataContext } from '../utils/dataContext'

export default function CircleEngleText(props) {
 
    const { data } = useDataContext()
    const ref = useD3(
        (svg) => {
            displayPie(svg, data)
            engleText(svg, data)
        },
        [data]
    );
    return (
        <svg
            ref={ref}
        />
    );
}
