d3.json('./data/buildings.json').then((data) => {
    console.log(data)

    let i;
    for (i = 0; i < data.length; i++) {
        data[i].hoogte = data[i].height;
        delete data[i].height;
    }

    data.forEach((d) => {
        d.hoogte = +d.hoogte
        // console.log(d.hoogte)
    })

    const svg = d3.select('#chart-area')
        .append('svg')
        .attr('width', 1000)
        .attr('height', 400)

    const circles = svg.selectAll('circle')
        .data(data)

    circles.enter()
        .append('circle')
        .attr('cx', (d, i) => {
            return (i * 50) + 25
        })
        .attr('cy', 100)
        .attr('r', (d) => {
            return d
        })
        .attr('fill', 'tomato')
})