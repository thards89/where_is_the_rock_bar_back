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
        key: "AIzaSyD0kzAGWHAUK4AjGeEqWK0x5GAYCXhaz2g",
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