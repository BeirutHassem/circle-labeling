import * as d3 from 'd3';


let pie = d3.pie()
    .sort(null)
    .value((d) => d.value)

let width = 300,
    height = 300,
    radius = Math.min(width, height) / 2

let fontSize = 20

let arc = d3.arc()
    .outerRadius(radius * 0.8)
    .innerRadius(radius * 0.4);

let key = (d) => d.data.label;

let midAngle = (d) => d.startAngle + (d.endAngle - d.startAngle) / 2


/*
    1- This function is displaying a Pie inside the svg 
    2- The svg must have a child element <g> with class "slices"
    3- The data object is an array of {label : string , value : double}
*/
export let displayPie = (svg, data) => {
    let slices = svg.select(".slices")
        .selectAll("path.slice")
        .data(pie(data), key)
        .enter()
        .append("path")
        .attr("d", arc)
        .style("fill", (d) => d.data.color)
        .attr("class", "slice");

    slices.transition()
        .attrTween("d", (d) => {
            d._current = d._current || d;
            let interpolate = d3.interpolate(d._current, d);
            d._current = interpolate(0);
            return (t) => arc(interpolate(t));
        })
    slices.exit()
        .transition()
        .remove();


    return slices;
};

/*
    1- This function is displaying a Text inside the svg on the form of Engle Text
    2- The svg must have a child element <g> with class "label"
    3- The data object is an array of {label : string , value : double}
*/
export let engleText = (svg, data) => {
    svg
    .select(".label")
    .attr("transform", "translate(" + 300 + "," + 300 + ")")
    
    let text = svg.select(".label")
        .selectAll("text")
        .data(pie(data), key)
        .enter()
        .append("text")
        .attr("dy", ".35em")
        .attr("font-size", fontSize)
        .text((d) => d.data.label)
        .style("fill", (d) => d.data.color)


    text.transition()
        .attrTween("transform", (d, i, e) => {
            e[i]._current = e[i]._current || d;
            let interpolate = d3.interpolate(e[i]._current, d);
            e[i]._current = interpolate(0);
            return (t) => {
                let d2 = interpolate(t);
                let pos = [radius * Math.cos(midAngle(d2) - Math.PI / 2), radius * Math.sin(midAngle(d2) - Math.PI / 2)]
                if (midAngle(d2) < Math.PI) {
                    return "translate(" + pos + ") rotate(" + (midAngle(d2) * 180 / Math.PI - 90) + ")";
                }
                else
                    return "translate(" + pos + ") rotate(" + (((midAngle(d2) * 180 / Math.PI) - 90) + 180) + ")";
            };
        })
        .styleTween("text-anchor", (d, i, e) => {
            e[i]._current = e[i]._current || d;
            let interpolate = d3.interpolate(e[i]._current, d);
            e[i]._current = interpolate(0);
            return (t) => midAngle(interpolate(t)) < Math.PI ? "start" : "end";
        })

    text.exit()
        .transition()
        .remove();
}

export let textArround = (svg, data) => {
 
    svg
        .select(".slices")
        .selectAll('.slice')
        .each((d, i, e) => { // this : slice .
            const firstArcSection = /(^.+?)L/;

            console.log(e[i])
            let newArc = firstArcSection.exec(d3.select(e[i]).attr("d"))[1];
            newArc = newArc.replace(/,/g, " ");

            //Create a new invisible arc that the text can flow along
            svg.append("path")
                .attr("class", "hiddenDonutArcs")
                .attr("id", "donutArc" + i)
                .attr("d", newArc)
                .attr("transform", "translate(" + 300 + "," + 300 + ")")
                .style("fill", "none"); //none */
        });


    let text = svg.select(".label")
        .selectAll("text")
        .data(pie(data), key)
        .join('text')
        .attr("dy", "-13px")
        .append("textPath")
        .attr("font-size", fontSize)
        .attr("startOffset", "50%")
        .attr("transform", "translate(" + -300 + "," + -300 + ")")
        .style("text-anchor", "middle")
        .attr("xlink:href", (d, i) => "#donutArc" + i)
        .text((d) => d.data.label)
        .style("fill", (d) => d.data.color)


    text
        .exit()
        .transition()
        .remove();

}

