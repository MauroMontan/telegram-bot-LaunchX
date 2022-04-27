import * as fs from 'fs';
import ExplorersService from "./explorer_service/explorer_service.js"
// Part 1 Read json file ===========================
const rawdata = fs.readFileSync("./data/explorers.json");
const explorers = JSON.parse(rawdata);

// get node_explorers

const nodeExplorers = ExplorersService.filterByMission(explorers)

console.log(nodeExplorers)

const nodeExplorersCount = ExplorersService.nodeExplorersCount(explorers);

console.log(nodeExplorersCount)

// DEAD CODE: Part 5,6,7, please remove this and go to Part 8!


// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO

