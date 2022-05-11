const axios = require("axios");

const { Router } = require("express");

const router = new Router();

router.post("/homeData", async (req, res) => {
  const { lat, lng, radius, placeType } = req.body;
  const response = await axios.get(
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
    {
      params: {
        keyword: `${placeType}`,
        location: `${lat},${lng}`,
        radius: `${radius}`,
        type: `${placeType}`,
        key: "AIzaSyDGnhMSdxZWn2pTKvaimAKqZif3PqA7LwY",
      },
    }
  );
  console.log(placeType);
  res.send({ message: "location data", homeData: response.data });
  // res.send({ homeData: response.data })
  //   res.status(200).send({ userWithExpenses });
  //
});

module.exports = router;

//try again axios//