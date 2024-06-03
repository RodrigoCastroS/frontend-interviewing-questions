// Create a function that takes a string and returns a
// new string with duplicates removed

/*
 const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'
 */

 function removeDuplicates(str){
    const arrayFromStr = str.split(' ');

    return [...new Set(arrayFromStr)].join(' ');

 }
