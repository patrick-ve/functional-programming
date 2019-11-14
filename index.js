// Load .csv file in with d3.csv
function getKeys() {
    d3.csv('./data/enquete.csv').then((data) => {

        // Define keys that should be looked out for
        const beautifulPlaceKey = 'Wat is de mooiste plek waar je ooit bent geweest? (GPS coördinaten)'
        const uglyPlaceKey = 'Wat is de lelijkste plek waar je ooit bent geweest? (GPS coördinaten)'

        let transformedData = [];
        for (let i = 0; i < data.length; i++) {
            var res = Object.keys(data[i]).reduce((acc, elem) => {
                if (elem === beautifulPlaceKey || elem === uglyPlaceKey) acc[elem] = data[i][elem]
                return acc
            }, {})
            transformedData.push(res)
        }
        console.log('Transformed data is: ', transformedData)

        renameKeys(transformedData)
        console.log('Renamed object is: ', renamedData)

        createJSON(renamedData);
        console.log('JSON data is: ', JSONdata)
    });
}

function renameKeys(data) {
    // Remap keys in JavaScript objects
    return renamedData = data.map(({
        'Wat is de mooiste plek waar je ooit bent geweest? (GPS coördinaten)': beautiful,
        'Wat is de lelijkste plek waar je ooit bent geweest? (GPS coördinaten)': ugly
    }) => ({
        beautiful,
        ugly
    }));
}

function createJSON(renamedData) {
    // Returns JSON
    return JSONdata = JSON.stringify(renamedData);
}

getKeys();