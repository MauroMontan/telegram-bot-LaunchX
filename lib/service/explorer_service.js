import Reader from "../utils/file_reader.js";

class ExplorersService {

  static explorers = Reader.loadJson("./lib/data/explorers.json");


  static filterByMission = (mission) => this.explorers.filter((explorer) => explorer.mission === mission);

  static explorersCount(mission) {
    let explorersTemp = this.explorers.filter((explorer) => explorer.mission == mission);

    return explorersTemp.length;
  }

  static getExplorersUsernamesByMission(mission) {
    const explorersByMission = this.filterByMission(mission);
    return explorersByMission.map((explorer) => explorer.githubUsername);
  }
}

export default ExplorersService;

