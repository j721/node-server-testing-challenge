const db = require('../data/dbConfig')

module.exports={
    getAllFoods,
    findById,
    addFood,
    deleteFood
}

function getAllFoods (){
    return db('foods')
}

function findById(id){
    return db('foods')
    .where({id})
    .first();
}

// function addFood (food){
//     return db ('foods')
//         .insert (food, 'id')
//         .then(([id])=>{
//             return findById(id)
//         })
// }

function addFood(food){
    return db('foods')
        .insert(food, 'id')
        .then(id =>{
            return findById(id[0])
        })
}

// function deleteFood (id){
//     return db ('foods')
//     .where('id', Number(id))
//     .del()
// }

function deleteFood(id){
    return db('foods')
    .where({ id })
    .del();
}