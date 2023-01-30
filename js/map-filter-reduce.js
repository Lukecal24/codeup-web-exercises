"use strict"
console.log("test");

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// let user = 1;
let userLanguage = users.filter((user)=>{
    return user.languages.length >= 3 ;
});
console.log(userLanguage);

//3. Use .map to create an array of strings where each element is a user's email address
let emails = users.map((user) =>{
    return user.email;
})
console.log(emails);
//4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let years = users.reduce((preValue,currentValue) =>{
    return(preValue += currentValue.yearsOfExperience)
}, 0)
console.log(years / users.length);
//5. Use .reduce to get the longest email from the list of users.
let longEmail = users.reduce((longest,user) =>{
    return user.email.length > longest.length ? user.email : longest;
}, "")
console.log(longEmail);
//6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let userName = users.reduce((preValue, currentValue) =>{
    return preValue += ` ${currentValue.name},`;
}, "").slice(0,-1) + "."
console.log(userName);
// Bonus
// Use .reduce to get the unique list of languages from the list of users.
// const uniqueLanguages = users.reduce((preValue, currentValue) => {
//     currentValue.languages.forEach(language => {
//         if (!preValue.includes(language)) {
//             preValue.push(language);
//         }
//     });
//     return preValue;
// }, []);

const uniqueLanguages = users.reduce((acc, user) => {
    return acc.concat(user.languages.filter(language => !acc.includes(language)));
}, []);
console.log(uniqueLanguages);

