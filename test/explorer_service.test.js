import Reader from "../utils/file_reader.js";
import ExplorersService from "../service/explorer_service.js"

describe("Reader test suit",()=>{
  
  test("1) getting",()=>{
    const data = Reader.loadJson("./data/explorers.json");
    expect.objectContaining(data);
    
  })

})

describe("Explorer service test suit",()=>{

  test("1) get data from json file",()=>{
    const data = Reader.loadJson("./data/explorers.json");
    expect.objectContaining(data);
  })

  test("2) get explorer lenght",()=>{  
    const data = Reader.loadJson("./data/explorers.json");
    const nodeExplorersLenght = ExplorersService.nodeExplorersCount(data)
    expect(nodeExplorersLenght).toBe(10)
  })
})

