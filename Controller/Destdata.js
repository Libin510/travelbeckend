const Destinations = require("../Schema/Destinations");
const jwt = require("jsonwebtoken");

const Dest = async (req, res) => {
  const { ImgSrc, DestTitle, Place, Grade, Fees, Description } = req.body;
  const name = await Destinations.findOne({ DestTitle});

  if (name) {
    res.json("User already exist");
  } else {
    const createDest = await Destinations.create({
      ImgSrc,
      DestTitle,
      Place,
      Grade,
      Fees,
      Description,
    });
    res.json(createDest);
  }
};

module.exports = Dest;
