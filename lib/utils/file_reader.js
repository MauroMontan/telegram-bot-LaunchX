// import * as fs from "fs";

const fs = require("fs");

module.exports = class Reader {
  static loadJson(filepath) {
    const rawdata = fs.readFileSync(filepath);
    return JSON.parse(rawdata);
  }
};
