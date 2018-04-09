function printFullAges(yearOfBirth) {
    var ages = [];
    var fullAges = [];
    
for (var i=0; i<yearOfBirth.length; i++){
    ages[i]=2018-yearOfBirth[i];
}
    
for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18){
            console.log('Person' +(i + 1)+ ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log(('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is not yet of full age.'));
            fullAges.push(false);
        }
}
    return fullAges;
}

var yearOfBirth = [1990, 1994, 2002, 1993, 1970];
var full_1 = printFullAges(yearOfBirth);
var full_2 = printFullAges([2012, 1997, 1992, 2001, 1969]);