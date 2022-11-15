let args = process.argv.slice(2);
let now = new Date();
if(args.length>0) {
    now = new Date(parseInt(args[0]));
}
console.log(now,now.toLocaleString());
