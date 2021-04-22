import React, { useContext } from 'react';
import { useD3 } from '../hooks/useD3';
import { DataContext } from '../App'
import { displayPie, engleText} from '../utils/functions'

export default function CircleEngleText(props) {
    const value = useContext(DataContext);

    const ref = useD3(
        (svg) => {
            displayPie(svg, value)
            engleText(svg, value)
        },
        [value]
    );
    return (
        <svg
            ref={ref}
        />
    );
}
