const express = require('express');
const Dog = require('./models/Dog');

const router = express.Router();

router.get('/dogs', async(req, res)=>{
    const dogs = await Dog.find();
    res.send(dogs);
    
})
router.post('/dog', async(req, res)=>{
    const dog = new Dog({
        name: req.body.name,
        color: req.body.color,
        race: req.body.race
    });
     await dog.save();
     res.send(dog);
})

router.update('/dog', async(req, res) => {
    const id = new  DogID(req.params.id);
    const newName = req.body.name;
    const newColor = req.body.color;
    const newRace = req.body.race;
    await id.updateOne(
        {_id: id},
        {$set: {name:newName, color:newColor, race:newRace}}   
        ); 
    res.send(id);
});
  router.delete('/dog', async(req, res) => {
    const id = new DogID(req.params.id);
    await id.deleteOne({_id: id});
    res.send(id);
  });
module.exports = router;
