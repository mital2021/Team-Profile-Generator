const Employee =  require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officenumber){
       super(name, id, email);
        this.role = 'Manager';
        this.officeNumber = officenumber;
         
    }

    officeNumber(){
        return this.officenumber;
    }

    getRole()
    {
        return this.role;
    }    
}

module.exports = Manager;