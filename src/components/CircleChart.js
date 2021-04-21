import React, { useContext, useState } from 'react';
import { useD3 } from '../hooks/useD3';
import * as d3 from 'd3';
import { DataContext } from '../App'
import { displayPie, engleText, textArround } from '../utils/functions'
import node from '../utils/circle';
import { Update } from '@material-ui/icons';

function CircleChart() {
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

            let slices = svg.select(".slices")
                .selectAll("path.slice")
                .data(pie(value), key)
                .join(
                    enter => {
                        enter.append('path')
                            .attr("d", arc)
                            .style("fill-opacity", 0)
                            .style("fill", (d) => d.data.color)
                            .attr("class", "slice")
                            .transition()
                            .duration(1500)
                            .style("fill-opacity", 1)
                    },
                    update => {
                        update.attr("d", arc)
                            .style("fill", (d) => d.data.color)
                            .attr("class", "slice")
                    },
                    exit => {
                        exit
                            .transition()
                            .remove();
                    }
                )
           //  textArround(svg , value)
             engleText(svg, value)
            

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