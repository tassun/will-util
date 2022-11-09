import config from "../utils/Configure";
//import config from "config";

console.log("has:authtype",config.has("authtype"));
console.log("has:authentype",config.has("authentype"));
console.log("authtype",config.get("authtype"));
console.log("authentype",config.get("authentype"));
console.log("authentications",config.get("authentications"));
