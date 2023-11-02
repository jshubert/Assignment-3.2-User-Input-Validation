function checkCreds() {
    //input validation for week 3
    console.log("checkCreds() Started")
    document.getElementById("loginStatus").innerHTML = "status of login";
    // varibles needed 
    var firstname;
    var lastname;
    var zipcode;
    var fullName;
    var fullNameLength;
    var zipcodenumb;


    // each variable gets defined
    // each defination gets a console log. i dont understand what that means or what the console is i just know that i can see the errors in the console
    //first name variable defined
    firstname = document.getElementById("fname").value;
    console.log("the first name was inputted as" + firstname);

    //last name gets defined
    lastname = document.getElementById("lname").value;
    console.log("the last name was inputted as" + lastname);
    // zip code gets defined
    zipcode = document.getElementById("zipcode").value;
    console.log("the zipcode was inputted as" + zipcode);


    //we define full name using the definitions from lname and fname
    fullName = firstname + " " + lastname;
    console.log("the fullname was inputted as" + fullName);


    // find the length of the full name
    fullNameLength = fullName.length;
    console.log("the full name has " + fullNameLength + " " + "characters.");


    // convert the carachters to numbers. don't understand parseint
    zipcodenumb = parseInt(zipcode);
    console.log("the zip code number is " + zipcodenumb);

    //things to check for... full name length is less than 20, zip code has 5 digits.

    // checks length of full name is less than 20 characters
    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
    }
    // checks zipcode is exactly 5 characters
    else if (zipcode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "Invalid Zipcode";
    }
    // creates an alert to alert user to the site
    else {
        alert("user credientals passed, welcome to the site, " + fullName);
    }
}