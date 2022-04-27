
class ExplorersService {
  static filterByMission(explorers) {
    return explorers.filter((explorer) => explorer.mission === "node");
  }

  static nodeExplorersCount(explorers) {
    let explorersTemp = explorers.filter((explorer) => explorer.mission == "node");

    return explorersTemp.length;
  }
}

export default ExplorersService;

