# will-util

Utilities functional

## Installation

    npm install will-util

### Arguments
Arguments handle for reading parameter value from command line arguments

```typescript
import { Arguments } from "will-util";

let args = process.argv.slice(2);
//this will read from specified arguments with option -user if not defined return tester as default
let user = Arguments.getString(args,'tester','-user');
//this will read from specified arguments with option -p or -pwd if not defined return null as default
let pwd = Arguments.getString(args,null,'-p','-pwd');
//this will read from command line arguments directly
let count = Arguments.getInteger(null,0,'-count');
```

### Iterator
Iterator handle for iterate array of object

```typescript
import { Iterator } from "will-util";

let ary = ["hello","new","world"];
let it = new Iterator<string>(ary);
while(it.hasNext()) {
    console.log(it.next());
}
```

### RandomUtility
Utility for randomize number or alphabets with min/max range

```typescript
import { RandomUtility } from "will-util";

console.log(RandomUtility.getRandomNum(1,10));
console.log(RandomUtility.random(6)); 
console.log(RandomUtility.randomNumber(6));
```

### StringTokenizer
StringTokenizer handle for token raw string with delimiters.

default delimiter is blank or space and new line with no return separator
```typescript
import { StringTokenizer } from "will-util";

let str = "Hello new world";
let token = new StringTokenizer(str);
let result = token.tokenize();
console.log(result); 
//result is [ 'Hello', 'new', 'world' ]
```

specified with delimiter and return separator
```typescript
import { StringTokenizer } from "will-util";

let str = "Hello ? world";
let token = new StringTokenizer(str,"?",true);
let result = token.tokenize();
console.log(result);
//result is [ 'Hello ', '?', ' world' ]
```

### Utilities
The utilities functional

```typescript
import { Utilities } from "will-util";

console.log(Utilities.compareString("AAA","BBB")); // result is -1
console.log(Utilities.compareString("AAA","AAA")); // result is 0
console.log(Utilities.compareString("BBB","AAA")); // result is 1
```

| Function | Description |
| -------- | ----------- |
| getWorkingDir | To get base directory if base name is src or dist. |
| getDateNow | To get date in format dd/MM/yyyy. |
| getTimeNow | To get time in format HH:mm:ss. |
| getDateTimeNow | To get datetime in format dd/MM/yyyy HH:mm:ss. |
| getYMD | To get date in format yyyy-MM-dd. |
| getDMY | To get date in format dd/MM/yyyy. |
| formatDate | To format Date to dd/MM/yyyy or yyyy-MM-dd. |
| formatTime | To format time HH:mm:ss. |
| formatDateTime | To format date into dd/MM/yyyy HH:mm:ss or yyyy-MM-dd HH:mm:ss. |
| getHMS | To format time HH:mm:ss. |
| currentDate | To format Date to yyyy-MM-dd. |
| currentTime | To format time to HH:mm:ss. |
| currentDateTime | To format Date to yyyy-MM-dd HH:mm:ss. |
| currentTimeMillis | To get current time in milli seconds. |
| addDays | To add number of days into Date. |
| compareDate | To compare between date. (returns number, -1 = lesser than, 0 = equal , 1 = greater than)|
| compareTime | To compare between time. (returns number, -1 = lesser than, 0 = equal , 1 = greater than)|
| compareDateTime | To compare between datetime. (returns number, -1 = lesser than, 0 = equal , 1 = greater than)|
| compareString | To compare string value. (returns number, -1 = lesser than, 0 = equal , 1 = greater than)|
| equalsIgnoreCase | To check string equals with ignore case. |
| isString | To check data is string or not. |
| hasAttributes | To check attributes is in object element. |
| parseInteger | To parse integer (especially from string). |
| parseFloat | To parse float (especially from string). |
| parseBoolean | To parse boolean (especially from string). |
| parseDate | To parse Date with data value string in format dd/MM/yyyy, yyyy-MM-dd, dd/MM/yyyy HH:mmss, yyyy-MM-dd HH:mm:ss. |
| now | To get current date/time. |
| translateVariables | To replace all variables in markup ${variable-name}. |

### Configure
Configure class implements for reading config/default.json and environment variables

```typescript
import { Configure } from "will-util";
import config from "will-util";

console.log(Configure.hasConfig("SECTION"));
console.log(Configure.getConfig("SECTION"));
console.log(Configure.getEnv("SECTION"));
console.log(Configure.getEnv("SECTION","TEST"));

console.log(config.has("SECTION"));
console.log(config.get("SECTION"));
console.log(config.env("SECTION"));
console.log(config.env("SECTION","TEST"));
```

`getEnv` and `env` will return environment variables when found or else return value from default.json and default value in order


