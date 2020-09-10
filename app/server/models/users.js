const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.matricNumber = matricNumber;
        this.program = program;
        this.graduationYear = graduationYear;

    }
   

    getFullName() {
        console.log(this.firstname, this.lastname)

    }
}
function id(){
    return Math.random()
                .toString(36)
                .substring(2);
}


    let Martin = new User(id(), 'Martin', 'Audu', 'audumart@gmail.com', 'martinchillout', '16/0013', 'Computer Science', '2020');
   

   
class Users extends DataModel {
    authenticate(email, password) {
        if (this.email == email && this.password == password) {
            return true;
        }
        return null;
    }

    getByEmail(email) {
        if (this.email == email) {
            return this.email;
        }
        return null;
    }


    }

    getByMatricNumber(matricNumber) {

    }

    validate(obj) {

    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};