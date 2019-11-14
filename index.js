// Load .csv file in with d3.csv
let surveyData = d3.csv('./data/enquete.csv').then((data) => {
    const beautifulPlaceKey = 'Wat is de mooiste plek waar je ooit bent geweest? (GPS coördinaten)'
    const uglyPlaceKey = 'Wat is de lelijkste plek waar je ooit bent geweest? (GPS coördinaten)'
    console.log(data[0][beautifulPlaceKey]);
    console.log(data);

    var res = Object.keys(data[0]).reduce((acc, elem) => {
        if (elem === beautifulPlaceKey || elem === uglyPlaceKey) acc[elem] = data[0][elem]
        return acc
    }, {})
    console.log(res)

    // for (let i = 0; i < data.length; i++) {
    //     data[i].beautiful = data[i].beautifulPlaceKey;
    //     delete data[i].beautifulPlaceKey;
    // }
    // console.log(data)
});


// let geographicData = d3.csv('./data/enquete.csv').then((data) => {
//     data.filter((item) => {
//         const keys = ['Wat is de mooiste plek waar je ooit bent geweest? (GPS coördinaten)', 'Wat is de lelijkste plek waar je ooit bent geweest? (GPS coördinaten)'];
//         item => keys.includes(item)
//         console.log(item)
//         return geographicData
//     })
// })

// data.filter((item) => {
//     const keys = ['Wat is de mooiste plek waar je ooit bent geweest? (GPS coördinaten)', 'Wat is de lelijkste plek waar je ooit bent geweest? (GPS coördinaten)'];
//     item => keys.includes(item)
//     console.log(item)
// })
// Index[50] and [51]