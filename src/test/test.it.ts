import { Iterator } from "../utils/Iterator";
import { StringTokenizer } from "../utils/StringTokenizer";
import { Utilities } from "../utils/Utilities";

let ary = ["hello","new","world"];
let it = new Iterator<string>(ary);
while(it.hasNext()) {
    console.log(it.next());
}

let str = "Hello new world";
let token = new StringTokenizer(str);
let tokenstr = token.tokenize();
console.log(tokenstr); 
//result is [ 'Hello', 'new', 'world' ]

let str2 = "Hello ? world";
let token2 = new StringTokenizer(str2,"?",true);
let tokenstr2 = token2.tokenize();
console.log(tokenstr2);
//result is [ 'Hello ', '?', ' world' ]

console.log(Utilities.compareString("AAA","BBB"));
console.log(Utilities.compareString("AAA","AAA"));
console.log(Utilities.compareString("BBB","AAA"));
