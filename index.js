// Code your solution here
function findMatching(arr,word) {
    const res = arr.filter(item => item.toLowerCase() === word.toLowerCase());
    return res;
}
function fuzzyMatch(arr,word) {
    const res = arr.filter(item => item.startsWith(word));
    return res;
}
function matchName(arr,word) {
    const res = arr.filter(item => item.name === word);
    return res;
}