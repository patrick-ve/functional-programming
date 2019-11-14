// Load .csv file in with d3.csv
let surveyData = d3.csv('./data/enquete.csv').then((data) => {
    const beautifulPlaceKey = 'Wat is de mooiste plek waar je ooit bent geweest? (GPS coördinaten)'
    const uglyPlaceKey = 'Wat is de lelijkste plek waar je ooit bent geweest? (GPS coördinaten)'
    console.log(data.length);

    let transformedData = [];
    for (let i = 0; i < data.length; i++) {
        var res = Object.keys(data[i]).reduce((acc, elem) => {
            if (elem === beautifulPlaceKey || elem === uglyPlaceKey) acc[elem] = data[i][elem]
            return acc
        }, {})
        console.log(res)
        transformedData.push(res)
    }
    console.log(transformedData)


    // for (let i = 0; i < data.length; i++) {
    //     data[i].beautiful = data[i].beautifulPlaceKey;
    //     delete data[i].beautifulPlaceKey;
    // }
    // console.log(data)
});

function getBeautifulPlace(data) {
    data.forEach(getGeographicData)
}


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