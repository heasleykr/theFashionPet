// create an object literal for the pet salon 
    // name, address, hours, 
    var salon ={
        salonName: 'The Fashion Pet',
        address: {
            street: 'Av. University',
            number: "215-B"
        },
        hours: { //Objects within objects
            open: '8 am',
            close: '5 pm'
        },
        pets:[
            { //Object one
                name: "Scooby",
                age: 50,
                type: "Dog",
                breed: "Dane",
                gender: "Male",

            },
            { //Object two
                name: "Scrappy",
                age: 40,
                type: "Dog",
                breed: "Dane",
                gender: "Male",

            },
            { //Object three
                name: "Tweety Bird",
                age: 50,
                type: "Bird",
                breed: "Canarian",
                gender: "Male",
            },
            { //Object four
                name: "Nemo", 
                age: 35,
                type: "Fish",
                breed: "Clown Fish",
                gender: "Male",
            },
            { //Object five
                name: "Prissy", 
                age: 10,
                type: "Cat",
                breed: "Calico",
                gender: "Female",
            },
            { //Object six
                name: "Drake", 
                age: 60,
                type: "Snake",
                breed: "Garden",
                gender: "Male",
            },
        ]
    }

    console.log(salon.name);
    console.log(salon["name"]);
    console.log(salon.address.street);

    // can create an object in one line 
    // This is called Obect destructuring 
    // Then you can print to console easier
    // This saves the 'salon.address'
    var {salonName, address:{street, number}, hours: {open, close}} = salon;
    var salonStreet = salon.address.street; //this is the OLD way. 
    console.log(street);
    
    // Display all the pets in the salon
    console.log(salon.pets);

// function to display on the console the names of the pets (traverse the array)
    console.log("The Fashion Pet's Roster (By Name):")
    for(var i = 0; i < salon.pets.length; i++){
        console.log(salon.pets[i].name);
    }
// fucntion to display on the console the number of registered pets.
        //AND/OR create an alert box saying 'We have # of pets'
        console.log("Total number of registered pets in the salon: " + salon.pets.length);
        // alert("We have " + salon.pets.length + " number of pets!");

// display the oldest pet and youngest pet 
