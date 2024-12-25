
export class User {
    email: string
    password: string
    username: string
    isAdmin: boolean
    firstName: string
    lastName: string
    address: string
    phoneNumber: string

    constructor(email:string, password:string, userName:string, isAdmin:boolean, firstName:string, lastName:string, address:string, phoneNumber:string) {
        this.email = email;
        this.password = password
        this.username = userName;
        this.isAdmin = isAdmin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber
    }
}