const Database = require('../data/db.config')


module.exports = {
    find,
    findById,
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

function add(schemes){
    return Database("schemes")
    .insert(schemes, 'id')
    .then(ids => ({ id: ids[0] }))
}

function update(id, changes){
return Database("schemes")
.where({ id })
.update(changes)
.then( () => {
    return findById(id)
})
}

function remove(id){
return Database('schemes')
.where({ id })
.del()
}