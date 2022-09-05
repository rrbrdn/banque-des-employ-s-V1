class Employer {
    constructor(fname, lname, email, pwd, adress, phoneNumber, contrat, birthday,
        entry, genre) {

        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.pwd = pwd;
        this.adress = adress;
        this.phoneNumber = phoneNumber;
        this.contrat = contrat;
        this.birthday = birthday;
        this.entry = entry;
        this.genre = genre;

    }

    presentation() {}

    calculAge() {

        let date = new Date(this.birthday);
        let year = parseInt(date.getFullYear());
        let ms = parseInt(new Date().getFullYear());
        let calculAge = ms - year;
        return calculAge;
    }


    calculEntry() {

        let date = new Date(this.entry);
        let year = parseInt(date.getFullYear());
        let ms = parseInt(new Date().getFullYear());
        let calculEntry = ms - year;

        return calculEntry;

    }
}

const tab = [];

const btn = document.getElementById("btn");
const lname = document.getElementById("Lname");
const fname = document.getElementById("Fname");
const email = document.getElementById("Email");
const pwd = document.getElementById("Password");
const adress = document.getElementById("Adress");
const phoneNumber = document.getElementById("Phone");
const birthday = document.getElementById("Birthday");
const entry = document.getElementById("Entry");
const contracts = document.querySelectorAll('input[name="contrat"]');
const genders = document.querySelectorAll('input[name="inlineRadioOptions"]');


btn.addEventListener('click', function (e) {

    e.preventDefault();
    //VALIDATION 

    if(fname.value.match(/[0-9]/)) {
        fname.className += " is-invalid"
        document.getElementById("msg1").classList.replace("d-none", "d-block");
        return;
    }else if (fname.value.length < 3 || fname.value.length > 20){
        fname.className += " is-invalid"
        document.getElementById("msg2").classList.replace("d-none", "d-block");
        return;
    }
    if(lname.value.match(/[0-9]/)) {
        lname.className += " is-invalid"
        document.getElementById("msg3").classList.replace("d-none", "d-block");
        return;
    }else if (lname.value.length < 3 || lname.value.length > 20){
        fname.className += " is-invalid"
        document.getElementById("msg4").classList.replace("d-none", "d-block");
        return;
    }

    // validateText(fname)
    // validateText(lname)

    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        email.className += " is-invalid"
        document.getElementById("msg5").classList.replace("d-none", "d-block");
        return;
    }
     if(!pwd.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
       pwd.className += " is-invalid"
       document.getElementById("msg6").classList.replace("d-none", "d-block");
        return;
     }
    if (!phoneNumber.value.match(/[0-9]/)) {
        phoneNumber.className += " is-invalid"
        document.getElementById("msg7").classList.replace("d-none", "d-block");
        return
    } else if (phoneNumber.value.length < 3 || phoneNumber.value.length > 10) {
        fname.className += " is-invalid"
        document.getElementById("msg8").classList.replace("d-none", "d-block");
        return;
    }


    let date = new Date(birthday.value);
    let year = parseInt(date.getFullYear());
    let ms = parseInt(new Date().getFullYear());
    let calculAge = ms - year;
    if(calculAge <= 18 || calculAge >= 50) {
        birthday.className += " is-invalid"
    document.getElementById("msg9").classList.replace("d-none", "d-block");
        return;
    }



    // CREATION D INSTANCE EMPLOYER
    let selectedContract = checker(contracts)
    let selectedGender = checker(genders)
    let employee = new Employer(fname.value, lname.value, email.value, pwd.value,
        adress.value, phoneNumber.value, selectedContract, birthday.value, entry.value,
        selectedGender);

    tab.push(employee);

    showTab(tab);

    unset();

});


//UTILS 
function showTab(tab) {
    let tbody = document.querySelector("tbody")

    tbody.innerHTML = ""

    for (let i = 0; i < tab.length; i++) {
        tbody.innerHTML += ` <tr>
                        <td><img src="https://xsgames.co/randomusers/assets/avatars/${tab[i].genre}/${i+1}.jpg" width="48;" ></td>
                        <td id="prenom">${tab[i].fname}</td>
                        <td id="nom">${tab[i].lname}</td>
                        <td id="nom">${tab[i].email}</td>
                        <td id="age">${tab[i].calculAge()}</td>
                        <td id="phone">${tab[i].phoneNumber}</td>
                        <td id="adress">${tab[i].adress}</td>
                        <td id="entry">${tab[i].calculEntry()}</td>
                        <td id="output">${tab[i].contrat}</td>
                      </tr>
                      `
    };
};

function checker(tab) {
    for (const radio of tab) {
        if (radio.checked) return radio.value;
    }
}

function none() {
    let tab = document.querySelector("table");
    tab.style.display = "none";
};
none();

function unset() {
    let tab = document.querySelector("table");
    tab.style.display = "unset";
};



// https://xsgames.co/randomusers/assets/avatars/ 
// https://avatars.dicebear.com/api/initials/rm.svg
// window.location.assign("http://127.0.0.1:5500/table-05/index2.html");