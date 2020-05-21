const express = require('express');

const Foods = require('./food-model');

const router = express.Router();

router.get('/list', (req,res)=>{
    Foods.getAllFoods()
    .then(foods=>{
        res.status(200).json({message: 'Success! Getting foods list', foods})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({errorMessage:  err.message})
    })
})

router.post('/list', (req,res)=>{
    const newFood =req.body
    Foods.addFood(newFood)
        .then(food=>{
            res.status(201).json({message: "New food has been added!", food})
        })
        .catch(err=>{
            res.status(500).json({errorMessage: "Sorry, couldn't add new food to list", err})
        })
})

router.delete('/list/:id', (req,res)=>{
    const { id } = req.params;

    Foods.deleteFood(id)
    .then(food=>{
        res.status(200).json({message: "Food item is removed from list."})
    })
    .catch(err=>{
        res.status(500).json({errorMessage: 'Error, food item could not be removed from list.', err})
    })
})

module.exports = router;