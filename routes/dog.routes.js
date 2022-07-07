const express = require('express');
const router =express.Router();
const dogController = require('../controller/dog.controller');

router.get('/get', dogController.find);
//router.update('/dogs',dogController.updateOne);
//router.post('/dogs',dogController.save);
//router.delete('/dogs', dogController.deleteOne);
router.patch('/update/:id', dogController.update);

router.post('/post', dogController.create);

router.delete('/delete/:id', dogController.delete);


module.exports = router

