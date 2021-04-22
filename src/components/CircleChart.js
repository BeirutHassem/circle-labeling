import React, { useContext, useState } from 'react';
import { useD3 } from '../hooks/useD3';
import * as d3 from 'd3';
import { DataContext } from '../App'
import { displayPie, engleText, textArround ,labelList} from '../utils/functions'
import node from '../utils/circle';
import { Update } from '@material-ui/icons';

function CircleChart(props) {
    const value = useContext(DataContext);

    const ref = useD3(
        (svg) => {
            const pie = d3.pie()
                .sort(null)
                .value((d) => d.value)

            const key = (d) => d.data.label;

            const width = 400,
                height = 400
            const radius = Math.min(width, height) / 2

            const arc = d3.arc()
                .outerRadius(radius * 0.6)
                .innerRadius(radius * 0.5);

            svg
                .attr("width", "100%")
                .attr("height", 600)

            if (svg.select(".slices").empty()) {
                svg.append("g")
                    .attr("class", "slices")
                    .attr("transform", "translate(" + 300 + "," + 300 + ")");
            }
            if (svg.select(".label").empty()) {
                svg.append("g")
                    .attr("class", "label")
                   // .attr("transform", "translate(" + 300+ "," + 300 + ")");
            }

            displayPie(svg , value)
            //  textArround(svg , value)
            // engleText(svg, value)
            //labelList(svg , value)
       //   props.textFunction(svg , value)
            

            /* slices.transition()
                  .attrTween("d", (d) => {
                      console.log(d)
                      console.log("I'm d baby ")
                      d._current = d._current || d;
                      let interpolate = d3.interpolate(d._current, d);
                      d._current = interpolate(0);
                      return (t) => arc(interpolate(t));
              }) */

        

        },
        [value]
    );
    return (
        <svg
         
            ref={ref}
        />
    );
}

export default CircleChart;