class Arguments {
    private static isParameterOption(argument?: string) : boolean {
        if(argument!=null && argument.length>0 && argument.charAt(0)=='-') {
            return true;
        }
        return false;
    }

    public static getString(args?: string[] | null,defaultValue?: string | null,...options: string[]) : string | undefined | null {
        if(!args) args = process.argv.slice(2);
        if(args!=null && args.length>0) {
            for(let i = 0,isz=args.length; i<isz; i++) {
                let para = args[i];
                for(let j=0; j<options.length; j++) {
                    if(para == options[j] && (args.length>(i+1)) && !this.isParameterOption(args[i+1])) {
                        return args[i+1];
                    }
                }
            }
        }
        return defaultValue;
    }

    public static getDate(args?: string[] | null,defaultValue?: Date | null,...options: string[]) : Date | undefined | null {
        if(!args) args = process.argv.slice(2);
        if(args!=null && args.length>0) {
            for(let i = 0,isz=args.length; i<isz; i++) {
                let para = args[i];
                for(let j=0; j<options.length; j++) {
                    if(para == options[j] && (args.length>(i+1)) && !this.isParameterOption(args[i+1])) {
                        //date in format : yyyy-MM-dd or yyyy-MM-ddTHH:mm:ss
                        return new Date(args[i+1]);
                    }
                }
            }
        }
        return defaultValue;
    }

    public static getInteger(args?: string[] | null,defaultValue?: number | null,...options: string[]) : number | undefined | null {
        if(!args) args = process.argv.slice(2);
        if(args!=null && args.length>0) {
            for(let i = 0,isz=args.length; i<isz; i++) {
                let para = args[i];
                for(let j=0; j<options.length; j++) {
                    if(para == options[j] && (args.length>(i+1))) {
                        return parseInt(args[i+1]);
                    }
                }
            }
        }
        return defaultValue;
    }

    public static getFloat(args?: string[] | null,defaultValue?: number | null,...options: string[]) : number | undefined | null {
        if(!args) args = process.argv.slice(2);
        if(args!=null && args.length>0) {
            for(let i = 0,isz=args.length; i<isz; i++) {
                let para = args[i];
                for(let j=0; j<options.length; j++) {
                    if(para == options[j] && (args.length>(i+1))) {
                        return parseFloat(args[i+1]);
                    }
                }
            }
        }
        return defaultValue;
    }

    public static getBoolean(args?: string[] | null,defaultValue?: boolean | null,...options: string[]) : boolean | undefined | null {
        if(!args) args = process.argv.slice(2);
        if(args!=null && args.length>0) {
            for(let i = 0,isz=args.length; i<isz; i++) {
                let para = args[i];
                for(let j=0; j<options.length; j++) {
                    if(para == options[j] && (args.length>(i+1)) && !this.isParameterOption(args[i+1])) {
                        let pr = args[i+1].toLowerCase();
                        if(pr === "true") return true;
                        if(pr === "false") return false;
                    }
                }
            }
        }
        return defaultValue;
    }

}
export {
    Arguments
}
