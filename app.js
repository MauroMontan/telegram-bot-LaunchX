import * as fs from 'fs';
import ExplorersService from "./explorer_service/explorer_service.js"
const rawdata = fs.readFileSync("./data/explorers.json");
const explorers = JSON.parse(rawdata);


// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO

