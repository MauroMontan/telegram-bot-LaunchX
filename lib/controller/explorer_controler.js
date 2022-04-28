import { Router } from "express";
import ExplorersService from "../service/explorer_service.js";
import FizzBuzzService from "../service/fizzbuzz_service.js";

const router = Router();

router.get("/", (_, res) => {
  res.json(ExplorersService.explorers);
});

router.get("/:mission", (req, res) => {
  const mission = req.params.mission;

  res.json(ExplorersService.filterByMission(mission));
});


router.get("/usernames/:mission", (req, res) => {
  const mission = req.params.mission;

  res.json(ExplorersService.getExplorersUsernamesByMission(mission));
});


router.get("/amout/:mission", (req, res) => {
  const mission = req.params.mission;

  res.json({ "mission": mission, "amount": ExplorersService.explorersCount(mission) });
});


router.get("/fizzbuzz/:score", (req, res) => {

  const score = req.params.score;
  const trick = FizzBuzzService.fizzBuzzValidation(score);
  res.json({ "score": score, "trick": trick });

});


export default router;
