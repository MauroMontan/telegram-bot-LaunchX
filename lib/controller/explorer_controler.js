import { Router } from "express";
import ExplorersService from "../service/explorer_service.js";


const router = Router();


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



export default router;
