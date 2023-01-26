import {ref} from "vue";
import { projectAuth } from "../firebase/config";

//user
const user = ref(projectAuth.currentUser);

//state change ?
projectAuth.onAuthStateChanged((_user) =>{
    console.log("User state chanhe. Current user is: ", _user);
    user.value = _user;

});

const getUser = () => {
    return {user}
};
export default getUser;