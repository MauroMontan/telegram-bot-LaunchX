import * as fs from "fs";


class Reader { 
    static loadJson(filepath) {
        const rawdata =fs.readFileSync(filepath);
        return JSON.parse(rawdata);    
    }

}

export default Reader;
