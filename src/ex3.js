function toto(value, type) {
    if (type === 'array') {
        return Array.isArray(value);
    } else if (type === 'null') {
        return value === null;
    } else {
        return typeof value === type;
    }
}

export default toto;
