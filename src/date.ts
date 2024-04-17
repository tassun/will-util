import { Utilities } from "./utils/Utilities";

let args = process.argv.slice(2);
if(args.length>0) {
    let date = Utilities.parseDate(args[0]);
    console.log("date",date);
    console.log("locale",date?.toLocaleString());
    console.log("milliseconds",date?.getTime());
}
