const getBgColor = (arg) => {
    let bgColor;

    switch (arg) {
        case 'beer':
            bgColor = '#e65227'
            break;
        case 'wine':
            bgColor = '#f05365'
            break;
        case 'cocktails':
            bgColor = '#fbb71f'
            break;
        case 'mocktails':
            bgColor = '#414e24'
            break;
    }
    return bgColor
}

const getUserScore = (array) => {
     let sum = 0;
     array.forEach(score => {
        sum += score
     });

     let avg = sum / array.length;
     return avg
}

const getDate = (arg) => {
    array = Array.from(arg)
    
    return array;

}

const getBestState = (array) => {
    const counter = {};
    let max = 0;
    let bestState;

    for (let state of array) {
        if (counter[state]) {
            counter[word] ++;
        }
        else {
            counter[word] = 1;
        }
        if (counter[word] > maxCount) {
            maxCount = counter[word];
            bestState = word
        }
    }


    return bestState;
}


module.exports = {
    getBgColor, getUserScore, getDate, getBestState
}