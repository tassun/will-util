
export class RandomUtility {
    
    public static readonly ALPHABETS = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
    public static readonly NUMERICS = Array.from("0123456789");

    public static getRandomNum(min: number, max: number) : number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static random(len: number = 6, alphabets: string[] = this.ALPHABETS ) : string {
        let result = "";        
        let max = alphabets.length - 1;
        for(let i = 0; i < len; i++) {
            let idx = this.getRandomNum(1,max);
            result += alphabets[idx-1];
        }
        return result;
    }

    public static randomNumber(len: number = 6, alphabets: string[] = this.NUMERICS) : string {
        return this.random(len, alphabets);
    }
    
}