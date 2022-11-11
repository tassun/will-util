import config from "../utils/Configure";
//import config from "config";

console.log("has:authtype",config.has("authtype"));
console.log("has:authentype",config.has("authentype"));
console.log("authtype",config.get("authtype"));
console.log("authentype",config.get("authentype"));
console.log("authentications",config.get("authentications"));
console.log("env.DB_SECTION",config.env("DB_SECTION"));
console.log("env.DB_SECTION",config.env("DB_SECTION","MYSQL"));
console.log("env.DB_URL",config.env("DB_URL"));
