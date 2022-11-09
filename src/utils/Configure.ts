import fs from 'fs';
import path from 'path';

export class Configure {
    
    public static configurations?: any;

    private static initConfig() {
        if(!Configure.configurations) {
            Configure.configurations = Configure.readConfig();
        }
    }

    public static readConfig(curDir?: string) : any {
        try {
            if(!curDir) curDir = process.cwd();
            let filepath = path.join(process.cwd(), 'config')
            let filename = path.resolve(filepath,'default.json');
            let filedata = fs.readFileSync(filename,'utf-8');
            return JSON.parse(filedata);
        } catch(ex) {
            console.error(ex);
        }
        return {};
    }

    public static getConfig(key: string) : any {
        this.initConfig();
        return Configure.configurations[key];
    }

    public static hasConfig(key: string) : boolean {
        this.initConfig();
        let value = Configure.configurations?Configure.configurations[key]:null;
        if(value === undefined || value === null) return false;
        return true;
    }

    public static reloadConfig() {
        Configure.configurations = Configure.readConfig();
    }

    public get<T>(key:string) : T {
        return Configure.getConfig(key);
    }

    public has(key: string) : boolean {
        return Configure.hasConfig(key);
    }

}

export default new Configure();
