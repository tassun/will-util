import fs from 'fs';
import path from 'path';

export class Setting {
    
    public static settings?: any;

    private static initSetting() {
        if(!Setting.settings) {
            Setting.settings = Setting.readSetting();
        }
    }

    public static readSetting(filepath: string = path.join(process.cwd(), "config")) : any {
        try {
            let filename = path.resolve(filepath,'setting.json');
            let filedata = fs.readFileSync(filename,'utf-8');
            return JSON.parse(filedata);
        } catch(ex) {
            console.error(ex);
        }
        return {};
    }

    public static getSetting(key: string) : any {
        Setting.initSetting();
        return Setting.settings[key];
    }

    public static hasSetting(key: string) : boolean {
        Setting.initSetting();
        let value = Setting.settings?Setting.settings[key]:null;
        if(value === undefined || value === null) return false;
        return true;
    }
    
    public static reloadSetting() {
        Setting.settings = Setting.readSetting();
    }

    public get<T>(key:string) : T {
        return Setting.getSetting(key);
    }

    public has(key: string) : boolean {
        return Setting.hasSetting(key);
    }

}

export default new Setting();
