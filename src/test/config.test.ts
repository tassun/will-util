import { Configure } from "../utils/Configure";
import config from "../utils/Configure";

describe('Test Configure', () => {
    it("getConfig",() => {
        let str = Configure.getConfig("authtype");
        expect(str).toStrictEqual("SYSTEM");
    });
    it("get",() => {
        let str = config.get("authtype");
        expect(str).toStrictEqual("SYSTEM");
    });

});
