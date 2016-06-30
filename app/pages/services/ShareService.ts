export class ShareService {  
 
    firstName: string;
    lastName: string;

    constructor() {
        this.firstName = 'Blank';
        this.lastName = 'Name';
    }
 
    setUserName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;       
    }
 
    getUserName() {
        return this.firstName + ' ' + this.lastName;
    }   
}