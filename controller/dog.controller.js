const dogModel = require("../models/dog.model");
//const service = require("../services/dog.service");

exports.create = async(req, res) => {
    const dog = new dogModel({
        name: req.body.name,
        color: req.body.color,
        race: req.body.race
    });
     await dog.save();
     res.send(dog);
};

exports.update = async function (req, res) {
    try {
      const dog = await dogModel.findByIdAndUpdate(
        req.params.id,
        {       
          name: req.body.name,
          color: req.body.color,
          race: req.body.race,
        },
        { new: true }
      );
      res.send(dog) ;
    } catch (err) {
      console.log(err);
    }
  };
//suppression
exports.delete = async function (req, res) {
    try {
        const dog = await dogModel.findByIdAndDelete(
        req.params.id
      );
      res.send(dog) ;
    } catch (err) {
      console.log(err);
    }
  };

exports.find = async(req, res)=>{
    console.log('im here')
    const dogs = await dogModel.find({});
    res.send(dogs);
}
