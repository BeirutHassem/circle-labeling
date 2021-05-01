import * as d3 from 'd3';


export default function randomizeData(size = 11) {
    let color = d3.scaleLinear()
        .domain([0, size])
        .range(["dodgerblue", "tomato"])
      //  .interpolate(d3.interpolateHcl);
    let result = []
    for (let i = 0; i < size; i++) {
        let text = randomText(getRandomInt(1, 10))
        result[i] = {
            label: text,
            value: Math.random(),
            color: color(i) // change this to see better colors 
        }
    }
    return normilizeData(result)
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomText = (size) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < size; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

const normilizeData = (data) => {
    let size = data.length
    let sum = 0
    for (let i = 0; i < size; i++) {
        sum += data[i].value
    }
    for (let i = 0; i < size; i++) {
        data[i].value /= sum
    }
    return data
}