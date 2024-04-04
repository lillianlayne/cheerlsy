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

     let avg = sum / 4;
     return avg
}

const addShadow = () => {
    const nav = document.getElementById('nav');
    nav.style.boxShadow = '4px 0px 13px rgba(0, 0, 0, .12)'
}

module.exports = {
    getBgColor, getUserScore, addShadow
}