/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var length = preferences.length; 
var count = 0; 
for (let i = 0; i<length; i++) { 
var love = preferences[i] - 1;
if (love == i) continue;
var lovelove = preferences[love] - 1;
if (love == lovelove) continue;
var lovelovelove = preferences[lovelove] - 1;
if (lovelovelove == lovelove) continue;
if (lovelovelove == i) {
count++;
}
}
return count / 3;
};
