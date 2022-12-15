(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // const person = {
    //     firstName: 'Luke',
    //     lastName: 'Calderon',
    // }
    // console.log(person.firstName);
    // console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // const person = {
    //     firstName: 'Luke',
    //     lastName: 'Calderon',
    //
    //     sayHello: function () {
    //         console.log(`Hello from ${this.firstName} ${this.lastName}!!`);
    //     }
    // }
    // console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


// Ryan spent 250. His discount was "". And the cost after discount applied was ""
// let template literal do all math


// let findDiscount = shoppers.amount * 0.12

    shoppers.forEach(function (person) {
        let findDiscount = person.amount * 0.12;
        let finalCost = person.amount - findDiscount;
        if (person.amount > 200) {
            console.log(`${person.name} spent $${person.amount}. Your discount was $${findDiscount}. \nThe final cost was $${finalCost}.`)
        } else {
            console.log(`${person.name} your total is $${person.amount}.`);
        }

    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title: "Fire and Blood",
            author: {
                firstName: "George",
                lastName: "Martin"
            }
        }, {
            title: "Lightning thief",
            author: {
                firstName: "Rick",
                lastName: "Riordan"
            }
        }, {
            title: "Hunger Games",
            author: {
                firstName: "Suzanne",
                lastName: "Collins"
            }
        }, {
            title: "American Psycho",
            author: {
                firstName: "Bret",
                lastName: "Ellis"
            }
        }, {
            title: "Lord of the rings",
            author: {
                firstName: "JRR",
                lastName: "Tolkien"
            }
        },
    ]

    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function (book) {
        console.log(`Book # ${books.indexOf(book) + 1} `);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}\n---`)
    })


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // let myAuthor = 'Luke Calderon';
    // let lukesBook = createBook('Coding for Awesome people', 'Luke Calderon')
    function createBook(title, author) {
        let authorArray = author.split(' '); // ["Luke", "Calderon"]
        let bookObject = {
            title: title,
            author: {
                firstName: authorArray[0],
                lastName: authorArray[1]
            }
        };
        return bookObject;
    }
    console.log(createBook('coding book', 'Luke Calderon'));
    let books2 = [
        createBook('Fire and Blood', 'George Martin'),
        createBook('Lightning Thief', 'Rick Riordan'),
        createBook('Hunger Games', 'Suzanne Collins'),
        createBook('American Psycho', 'Bret Ellis'),
        createBook('Lord of the rings', 'JRR Tolkien')
    ];
    console.log(books2);

function showBookInfo(book){
    console.log(`Book # ${books.indexOf(book) + 1} `);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author.firstName} ${book.author.lastName}\n---`);

}





    // Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average age of a dog.

    //     const pets = [
    //     {
    //         name: 'Sparky',
    //         type: 'Fish',
    //         age: 4
    //     },
    //     {
    //         name: 'Mr. Pig',
    //         type: 'Cat',
    //         age: 4
    //     },
    //     {
    //         name: 'Bubba',
    //         type: 'Dog',
    //         age: 5
    //     },
    //     {
    //         name: 'Pickles',
    //         type: 'Dog',
    //         age: 10
    //     }
    //
    // ];

    // findAverageDogAge(pets) // returns 7.5

// function findAverageDogAge(pets)
//     {
//         let total = 0
//         let dogCount = 0
//         pets.forEach(function (pet, index, array) {
//             if (pet.type === "Dog") {
//                 total += pet.age;
//                 dogCount++;
//             }
//         });
//         return total / dogCount;
//     }
//
//     console.log(findAverageDogAge(pets));




// ================================= WARM UP

    // Create a function, returnPetsWithNoFish, that takes in a array of pet objects and returns an array of pet objects with no pets of type 'Fish'.

        const pets = [
        {
            name: 'Sparky',
            type: 'Fish',
            age: 4
        },
        {
            name: 'Mr. Pig',
            type: 'Cat',
            age: 4
        },
        {
            name: 'Bubba',
            type: 'Dog',
            age: 5
        },
        {
            name: 'Beans',
            type: 'Dog',
            age: 3
        },
        {
            name: 'Mr. Salmon',
            type: 'Fish',
            age: 1
        }
    ];

    returnPetsWithNoFish(pets) // returns...

    function returnPetsWithNoFish(pets)
    {
        let noFishPets = []

        for(let i = 0 ; i < pets.length; i++){
            let pet = pets[i];
            if (pet.type !== "Fish") {
                noFishPets.push(pet);
            }
        }
        return noFishPets;
    }

    console.log(returnPetsWithNoFish(pets));



        // [
        // {
        //     name: 'Mr. Pig',
        //     type: 'Cat',
        //     age: 4
        // },
        //     {
        //         name: 'Bubba',
        //         type: 'Dog',
        //         age: 5
        //     },
        //     {
        //         name: 'Beans',
        //         type: 'Dog',
        //         age: 3
        //     }
        // ]



})();