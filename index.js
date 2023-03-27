function findMatching(drivers, string){
    return drivers.filter(word => word.toLowerCase() === string.toLowerCase());
};

function fuzzyMatch(drivers, string){
    return drivers.filter(word => word.toLowerCase().indexOf(string.toLowerCase()) === 0);
};

function matchName(drivers, string){
    return drivers.filter(word => word.name === string)
}