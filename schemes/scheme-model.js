const Database = require('../data/db.config')


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find(){
    return Database("schemes")
}

function findById(id){
    return Database("schemes")
    .where({ id })
    .first()
}

function findSteps(stepsId){
    return Database("schemes as m")
    .join('steps as s', " m.steps_id", "s.id")
    .select("m.id", "m.text", "m.sender")

}

function add(schemes){
    return Database("schemes")
    .insert(schemes, 'id')
    .then(ids => ({ id: ids[0] }))
}

function update(id, changes){
return Database("schemes")
.where({ id })
.update(changes, "*")
}

function remove(id){
return Database('schemes')
.where({ id })
.del()
}