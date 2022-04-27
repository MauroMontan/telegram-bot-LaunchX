
import * as fs from 'fs';


class Reader { 
  static loadJson(filename) {

    const rawdata =fs.readFileSync(`../data/${filename}`)
    return JSON.parse(rawdata);    
  }

}

export default Reader;
