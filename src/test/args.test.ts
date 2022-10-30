import { Arguments } from "../utils/Arguments";
import { Utilities } from "../utils/Utilities";

let args = ["-str","Hello","-date","2022-10-31","-int","2022","-float","2022.10"];
describe('Test Arguments', () => {
    it("getString",() => {
        let str = Arguments.getString(args,null,"-str");
        expect(str).toStrictEqual("Hello");
    });
    it("getDate",() => {
        let date = Arguments.getDate(args,undefined,"-date");
        expect(date).toStrictEqual(new Date("2022-10-31T00:00:00.000Z"));
    });
    it("getInteger",() => {
        let num = Arguments.getInteger(args,undefined,"-int");
        expect(num).toStrictEqual(2022);
    });
    it("getFloat",() => {
        let flt = Arguments.getFloat(args,undefined,"-float");
        expect(flt).toStrictEqual(2022.10);
    });
});
describe('Test Utilities', () => {
    it("parseInteger",() => {
        let num = Utilities.parseInteger("2022");
        expect(num).toStrictEqual(2022);
    });
    it("parseFloat",() => {
        let flt = Utilities.parseFloat("2022.10");
        expect(flt).toStrictEqual(2022.10);
    });
    it("parseBoolean",() => {
        let bool = Utilities.parseBoolean("false");
        expect(bool).toStrictEqual(false);
    });
    it("parseDate",() => {
        let date = Utilities.parseDate("2022-10-31");
        let dt1 = Utilities.formatDate(date);    
        expect(dt1).toStrictEqual("31/10/2022");
        let date2 = Utilities.parseDate("31/10/2022");
        let dt2 = Utilities.formatDate(date2);
        expect(dt2).toStrictEqual("31/10/2022");
    });
    it("parseTime",() => {
        let time = Utilities.parseDate("12:30:15");    
        let tm1 = Utilities.formatTime(time);
        expect(tm1).toStrictEqual("12:30:15");
    });
    it("parseDateTime",() => {
        let date = Utilities.parseDate("31/10/2022 12:30:15");        
        expect("31/10/2022 12:30:15").toStrictEqual(Utilities.formatDateTime(date));
        let date2 = Utilities.parseDate("31/10/2022T12:30:15");        
        expect("31/10/2022 12:30:15").toStrictEqual(Utilities.formatDateTime(date2));
        let date3 = Utilities.parseDate("31/10/2022T12:30:15.100Z");        
        expect("31/10/2022 12:30:15").toStrictEqual(Utilities.formatDateTime(date3));
    });
});
