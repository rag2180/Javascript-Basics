class User{
    constructor(firstname, lastname, credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }

    getFullName(){
        return `${this.firstname} ${this.lastname} is my full name.`;
    }

    editName(newname){
        this.firstname = newname.split(" ")[0];
        this.lastname = newname.split(" ")[1];
    }
}


const raghav = new User('Raghav', 'Chopra', 500);
const sam = new User('Sammy', 'Singh', 10);

console.log(raghav);
console.log(raghav.getFullName());
console.log(sam);
console.log(sam.getFullName());

sam.editName("Sam Sharma");
console.log(sam.getFullName());

// const ram = new User();  // This is Valid.
// console.log(ram);


class Teacher extends User{
    constructor(firstname, lastname, credit, subject){
        super(firstname, lastname, credit);
        this.subject = subject;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname} is teacher's name and teaches ${this.subject}`;
    }
}

const sita = new Teacher('Sita', 'Ram', 20000, 'JavaScript');
console.log(sita);
console.log(sita.getFullName());