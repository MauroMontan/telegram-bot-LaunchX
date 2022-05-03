const Reader = require("../utils/file_reader");

module.exports = class ExplorersService {
  static explorers = Reader.loadJson("./lib/data/explorers.json");

  static filterByMission = (mission) =>
    this.explorers.filter((explorer) => explorer.mission === mission);

  static explorersCount(mission) {
    let explorersTemp = this.explorers.filter(
      (explorer) => explorer.mission == mission
    );

    return explorersTemp.length;
  }

  static getExplorersUsernamesByMission(mission) {
    const explorersByMission = this.filterByMission(mission);
    return explorersByMission.map((explorer) => explorer.githubUsername);
  }
};
