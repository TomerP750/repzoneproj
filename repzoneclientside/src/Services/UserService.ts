// import {User} from "../Models/User.ts";
import axios from 'axios';
import {User} from "../Models/User.ts";

class UserService {
    //
    async register(user: User) {
        return (await axios.post(""), user);
    }

    async login(email:string, password: string) {
        return (await axios.post(""));
    }

}

const userService = new UserService();
export default userService;