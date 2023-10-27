"use strict";
function slugify(title) {
  let lowerCaseTitle = title.toLowerCase();
  let titleWords = lowerCaseTitle.split(" ");
  let slug = titleWords.join("-");
  return slug;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
