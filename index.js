// Load .csv file in with d3.csv
let surveyData = d3.csv('./data/enquete.csv').then((data) => {
    console.log(data[0]);
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