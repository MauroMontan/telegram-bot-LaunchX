import Reader from "../lib/utils/file_reader.js";
import ExplorersService from "../lib/service/explorer_service.js";
import FizzBuzzService from "../lib/service/fizzbuzz_service.js"

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


describe("FIZZBUZZ VALIDATION TEST", () => {

  test("1) getting FIZZBUZZ ", () => {

    const ex = [

      { score: 4, trick: "" },

      { score: 3, trick: "" }
    ];

    const fizzbuzz = FizzBuzzService.assignFizzBuzz(ex[0])

    expect(fizzbuzz).toBe("FIZZBUZZ");

  })

})
