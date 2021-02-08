exports.min = function min (array) {

    if ( ! array || array.length === 0 ) return 0;

    array.sort( (a, b) => a - b );

    return array[0];

}

exports.max = function max (array) {

    if ( ! array || array.length === 0 ) return 0;

    array.sort( (a, b) => a - b );

    return array[array.length - 1];

}

exports.avg = function avg (array) {

    if ( ! array || array.length === 0 ) return 0;

    let sumOfElements = array.reduce((sum, current) => sum + current, 0);
    let result = sumOfElements / array.length;

    return result;
}
