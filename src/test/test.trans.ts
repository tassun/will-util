import { Utilities } from "../utils/Utilities";

let template = "Dear, ${userfullname}.<br/>";
template += "Confirm your password was changed.<br/>";
template += "user = ${username}<br>";
template += "password = ${userpassword}<br>";
template += "yours sincerely,<br>";
template += "Administrator<br/>";
template += "user = ${username}<br>";

let data = {
    userfullname: "John Doe",
    username: "john.doe",
    userpassword: "password"
};

let map = new Map();
map.set("userfullname", "John Doe");
map.set("username", "john.doe");
map.set("userpassword", "password");

console.log(Utilities.translateVariables(template, data));
console.log(Utilities.translateVariables(template, map));
