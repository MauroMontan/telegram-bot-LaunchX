const Reader = require("../lib/utils/file_reader");
const ExplorersService = require("../lib/service/explorer_service");

describe("Reader test suit", () => {
    test("1) getting", () => {
        const data = Reader.loadJson("./lib/data/explorers.json");
        expect.objectContaining(data);
    });
});

describe("Explorer service test suit", () => {
    test("1) get data from json file", () => {
        const data = Reader.loadJson("./lib/data/explorers.json");
        expect.objectContaining(data);
    });

    test("2) get explorer lenght", () => {
        const nodeExplorersLenght = ExplorersService.explorersCount("node");
        expect(nodeExplorersLenght).toBe(10);
    });
});
