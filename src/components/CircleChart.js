import React, { useContext } from 'react';
import { useD3 } from '../hooks/useD3';
import { DataContext } from '../App'
import { displayPie, engleText, textArround, labelList, textAlgo1 } from '../utils/functions'

function CircleChart(props) {
    const value = useContext(DataContext);

    const ref = useD3(
        (svg) => {
            svg
                .attr("width", "100%")
                .attr("height", 600)

            if (svg.select(".slices").empty()) {
                svg.append("g")
                    .attr("class", "slices")
                    .attr("transform", "translate(" + 300 + "," + 300 + ")");
            }
            if (svg.select(".labels").empty()) {
                svg.append("g")
                    .attr("class", "labels")
                // .attr("transform", "translate(" + 300+ "," + 300 + ")");
            }

            displayPie(svg, value)
            //  textArround(svg , value)
            //engleText(svg, value)
            textAlgo1(svg, value)
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