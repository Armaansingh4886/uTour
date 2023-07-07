import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res
      .status(200)
      .json({ sucess: true, message: "Successfully created", data: savedTour });
  } catch (err) {
    res
      .status(500)
      .json({ sucess: false, message: "Failed to create. Try again" });
  }
};

// update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      sucess: true,
      message: "Successfully upated",
      data: updatedTour,
    });
  } catch (err) {
    res
      .status(500)
      .json({ sucess: false, message: "Failed to update. Try again" });
  }
};

// delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({ sucess: true, message: "Successfully deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ sucess: false, message: "Failed to delete. Try again" });
  }
};

// getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    res
      .status(200)
      .json({ sucess: true, message: "Successfully ", data: tour });
  } catch (err) {
    res.status(404).json({ sucess: false, message: "Not found" });
  }
};

// getAll tour
export const getAllTour = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({}).populate('reviews')
      .skip(page * 8)
      .limit(8);

    res.status(200).json({ sucess: true,count: tours.length, message: "Successful", data: tours });
  } catch (err) {
    res.status(404).json({ sucess: false, message: "Not found" });
  }
};


// get tour by search
export const getTourBySearch = async(req,res)=>{
 

  //here 'i' means case sensitive
  const City = new RegExp(req.query.city, 'i')
  const Distance = parseInt(req.query.distance)
  const MaxGroupSize = parseInt(req.query.maxGroupSize)

  try {
    // gte means greater than or equal
    const tours = await Tour.find({ city:City , distance:{$gte:Distance}, maxGroupSize:{$gte:MaxGroupSize}}).populate("reviews");

    res.status(200).json({ sucess: true, message: "Successful", data: tours });
  } catch (error) {
    res.status(404).json({ sucess: false, message: "Not found" }); 
  } 
}


// get featured tour
export const getFeaturedTour = async (req, res) => {
  

  try {
    const tours = await Tour.find({featured:true}).populate("reviews").limit(8);
    res.status(200).json({ sucess: true, message: "Successful", data: tours });
  } catch (err) {
    res.status(404).json({ sucess: false, message: "Not found" });
  }
};      

// get tour counts
export const getTourCount = async(req,res) =>{
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({ sucess:true, data: tourCount});
  } catch (err) {
    res.status(500).json({sucess:false, message: "failed to fetch"})
  }
}