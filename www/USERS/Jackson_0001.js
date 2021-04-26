


//Main JS file for User information
//Broken up into diffrent opjects
//Then put together in the end as a user array

var Info  = {

    User_ID: "0001",

    First_name : "Jackson",
    Middle_name: "Royce",
    Last_name  : "Morrell",
    Prefered_Language: "English",
    Languages: ["English"],

    Ethnisity: "Not Hispanic/Latino",
    Race: "White",
       
    Sex: "M"

};  

//Preformers are Doctors, Therapists, and others 
var CareTeam = {

    Current_Preformers: ["Brian J Yamada", "Kerry L Ricker"],

    Past_Team:["Roger P Xion"],

    Member_Phone: ["555-399-1245", "654-998-7568"],

    WorkPlace: [ "NULL", "Scocia Glenville" ]
};

//DOB is ISO format
var Birth = {
    
    Date: "1999-04-12T23:17:36Z",

    Mother: "Tracy L Frink",
    Father: "Damon K Morrell",

    Doctor: "Felicity Graves",

    Style:"Modern - Natural",

    Country : "United States",
    State : "New York",
    City : "Schenctady",

    Birth_Sex: "Male"
};

//Physical Features
//Height as centimeters
//Weight as kilograms
var Physical = {

    Height: 153,
    Weight: 64,
    BMI : 27.3,

    Eye_Color : "Brown",
    Hair_Color : "Blonde",  


    Alergies : ["Pollin", "Peanuts", "Dogs"]
};

//Eyes
//Oculus Sinister - Left eye
//Oculus Dextrus - Right eye
//Visual Acuity
var Optomatry = {

    OD_distance: 20,
    OS_distance: 20,
    OD_near: 20,
    OS_near: 20,

    VA_Unaided: "NULL",
    VA_w_Rx: "NULL",
};
//Medications
var Medications = {

Active : ["Adderall", "Xanax", "Oxycoten"],
Active_Dose : ["10mg", "10mg", "20mg"],

Past: ["Seretide", "Busperone"],
Past_Dose: ["100/50","5mg" ] 

};

//Treatment_Medications
//Name - Medication Name
//Dose - Ordered
//RA- Route of administration 1-10
//Freq - Frequency Code
//AA - Amount Administerd
//PRN-number of days (PRN) if freq is PR, how many of last 7 days
//NDC CODE XXXX-XXXX-XXX Labeler|Prodect|Package|
var Treatment_Medications = {

    Name:[],
    Dose: [],
    RA:[],
    Freq:[],
    AA : [],
    PRN : [],
    NDCODE:[]

};

var Jackson = [Info, Birth, Physical, CareTeam, Optomatry, Medications, Treatment_Medications];

console.log("\n what information whould you like to look for?");

let pos = Jackson.indexOf(CareTeam);
console.log(Jackson[pos]);

