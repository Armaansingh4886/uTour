import express from "express";
import { createTour, deleteTour , updateTour ,getTourCount, getFeaturedTour, getSingleTour , getAllTour, getTourBySearch} from "../controllers/tourController.js";

const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";
//create new tour
router.post("/", verifyAdmin,createTour);


//delete tour
router.delete("/:id", verifyAdmin, deleteTour);


//update tour
router.put("/:id", verifyAdmin, updateTour);


//getSingle tour
router.get("/:id", getSingleTour);


//getAll tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

//get featured tours
router.get("/search/getFeaturedTours", getFeaturedTour);

//get tour count
router.get("/search/getTourCount", getTourCount);

export default router;
