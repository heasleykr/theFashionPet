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
        pets:[]
    }

    //increment pets ID when created
    var c = 0;

    /************  Object Constructor ********************/
    class Pet{
        constructor(name, age, type, breed, gender, serviceType, ownerName, contactPhone, price){
            this.name = name;
            this.age = age;
            this.type = type;
            this.breed = breed;
            this.gender = gender;
            this.service = serviceType;
            this.ownerName = ownerName;
            this.contactPhone = contactPhone;
            this.price = price;
            this.id = c; //personal ID initiation
            c++;
        }
    }


    // Object instantiation 
    var scooby = new Pet("Scooby", 50, "Dog", "Dane", "Male", "Full Service", "Shaggy", "734-567-9000", "50.00");

    var prissy = new Pet("Prissy", 1000, "Cat", "Calico", "Female", "Hair Cut", "Joy", "907-357-9000", "50.00");

    var panther = new Pet("Panther", 80, "Cat", "Siamese", "Male", "Toenail Trim", "Butch", "907-357-6000", "50.00");



    // Get inputs and store them in variables
    var txtName = document.getElementById("petName");
    var txtAge = document.getElementById('petAge');
    var txtType = document.getElementById('petType');
    var txtBreed = document.getElementById('petBreed');
    var txtGender = document.getElementById('petGender');
    var txtService = document.getElementById('petService');
    var txtOwnerName = document.getElementById('ownersName');
    var txtContactPhone = document.getElementById('contactPhone');
    var txtPrice = document.getElementById('price');
   
    // Function to register the pet
    function register(){

        // Create the Pet & print to console
        var thePet = new Pet(txtName.value,txtAge.value, txtType.value, txtBreed.value, txtGender.value, txtService.value, txtOwnerName.value,txtContactPhone.value, txtPrice.value);

        // Push the pet to array 
        salon.pets.push(thePet);

        // Display pet to the screen, clear form, & update total
        display(thePet);
        clear();

        // Confirmation on screen for user?

    }

    // Function to clear register form after user completes form
    function clear(){
        txtName.value = "";
        txtAge.value ="";
        txtType.value = "";
        txtBreed.value = "";
        txtGender.value = "";
        txtOwnerName.value = "";
        txtContactPhone.value = "";
        txtPrice.value = "";
    }


// Display on the console the names of the pets 
    console.log("The Fashion Pet's Roster (By Name):")
    for(var i = 0; i < salon.pets.length; i++){
        console.log(salon.pets[i].name);
    }

// Display on the console the number of registered pets.
    console.log("Total number of registered pets in the salon: " + salon.pets.length);
    

// function to delete a pet on btn-danger click
function deletePet(petId){

    //traverse the array (search function)
    for(var i = 0; i < salon.pets.length; i++)
        if(salon.pets[i].id === petId){
            //delete pet from array using 'splice' fx
            //update salon totals
                salon.pets.splice(i,1);
                oldest();
                youngest();
                totalProfit();
                animals();
            //delete pet from html
                var tr = $("#" + petId);
                tr.remove();
        }
}

// function to search for a pet in the array
function searchPet(){
    var ss = $('#petSearch').val(); //read contents of search box
    var searchString = ss.toLowerCase();

    for(var i = 0; i < salon.pets.length; i++){
        
        var selected = salon.pets[i];

        if(selected.name.toLowerCase() === searchString || selected.service.toLowerCase() === searchString){
            $('#' + selected.id).addClass('active');
        }
        else{
            //TODO display html message to user
            $('#' + selected.id).removeClass('active');
        }

        // extra homework: hide others on search
    }
}

//run this function when the page loads. Almost everythig goes inside this
function init(){
    //default
    console.log('Script');


    //Push created objects into array
    salon.pets.push(scooby);
    salon.pets.push(prissy);
    salon.pets.push(panther);

    //Display pets on HTML
    display(scooby);
    display(prissy);
    display(panther);


    //register pet on click
    //search for pet on click
    $('#register-btn').on('click', register);
    $('#search-btn').on('click', searchPet);
}
window.onload = init; //run function when website loads