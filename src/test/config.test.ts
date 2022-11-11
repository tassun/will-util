import { Configure } from "../utils/Configure";
import config from "../utils/Configure";

describe('Test Configure', () => {
    it("getConfig",() => {
        let str = Configure.getConfig("authtype");
        expect(str).toStrictEqual("SYSTEM");
    });
    it("getEnv",() => {
        let str = Configure.getEnv("DB_SECTION");
        expect(str).toStrictEqual("MYSQL");
    });
    it("getEnv with default value",() => {
        let str = Configure.getEnv("DB_SECTION","MYSQL");
        expect(str).toStrictEqual("MYSQL");
    });
    it("get",() => {
        let str = config.get("authtype");
        expect(str).toStrictEqual("SYSTEM");
    });
    it("env",() => {
        let str = config.env("DB_SECTION");
        expect(str).toStrictEqual("MYSQL");
    });
    it("env with default value",() => {
        let str = config.env("DB_SECTION","MYSQL");
        expect(str).toStrictEqual("MYSQL");
    });

});
