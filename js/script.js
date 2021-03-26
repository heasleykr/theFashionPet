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

    /************  Object Constructors ********************/
    class Pet{
        constructor(name, age, type, breed, gender, serviceType, ownerName, contactPhone){
            this.name = name;
            this.age = age;
            this.type = type;
            this.breed = breed;
            this.gender = gender;
            this.service = newService(serviceType); //Input function call here with parameter
            this.ownerName = ownerName;
            this.contactPhone = contactPhone;
        }
    }

    class Service{
        constructor(type, price, apptTime){
            this.type = type;
            this.price = price;
            this.apptTime = apptTime;
        }
        //create methods
        getType(){
            return this.type
        }
        getPrice(){
            return this.price;
        }
        getAppt(){
            return this.apptTime;
        }
    }

    // Object instantiation protocol 
    var scooby = new Pet("Scooby", 50, "Dog", "Dane", "Male", "Full Service", "Shaggy", "734-567-9000");
    console.log(scooby);

    var prissy = new Pet("Prissy", 1000, "Cat", "Calico", "Female", "Hair Cut", "Joy", "907-357-9000");
    console.log(prissy);

    var panther = new Pet("Panther", 80, "Cat", "Siamese", "Male", "Toenail Trim", "Butch", "907-357-6000");
    console.log(panther);

    // How to push objects into the array. Keyword is 'push'
    salon.pets.push(scooby);
    salon.pets.push(prissy);
    salon.pets.push(panther);

    // Get inputs and store them in variables
    var txtName = document.getElementById("petName");
    var txtAge = document.getElementById('petAge');
    var txtType = document.getElementById('petType');
    var txtBreed = document.getElementById('petBreed');
    var txtGender = document.getElementById('petGender');
    var txtService = document.getElementById('petService');
    var txtOwnerName = document.getElementById('ownersName');
    var txtContactPhone = document.getElementById('contactPhone');
   
    // Function to register the pet
    function register(){

        // Create the Pet & print to console
        var thePet = new Pet(txtName.value,txtAge.value, txtType.value, txtBreed.value, txtGender.value, txtService.value, txtOwnerName.value,txtContactPhone.value);

        console.log(thePet);

        // Push the pet to array 
        salon.pets.push(thePet);

        // Display pet to the screen, clear form, & update total
        display();
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
    }

    //Function to creat a Service Object when selected
    function newService(type){

        if(type === "Shower"){
            var service = new Service("Shower", "15.00", "30");
        }
        else if(type === "Hair Cut"){
            var service = new Service("Hair Cut", "50.00", "120");
        }
        else if(type === "Toenail Trim"){
            var service = new Service("Toenail", "25.00", "60");
        }
        else if(type === "Full Service"){
            var service = new Service("Full Service", "90.00", "240");
        }  

        return service;

    }

    
// Display all the pets in the salon
    console.log(salon.pets);

// function to display on the console the names of the pets (traverse the array)
    console.log("The Fashion Pet's Roster (By Name):")
    for(var i = 0; i < salon.pets.length; i++){
        console.log(salon.pets[i].name);
    }

// fucntion to display on the console the number of registered pets.
    console.log("Total number of registered pets in the salon: " + salon.pets.length);
       
