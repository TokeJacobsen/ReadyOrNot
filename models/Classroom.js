const Model = require('objection').Model;
class Classroom extends Model {
  static get tableName(){
    return 'classroom';
}
}
module.exports = Classroom;
