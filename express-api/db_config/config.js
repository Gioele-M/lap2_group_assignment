const { Pool } = require("pg");

const pool = new Pool();

module.exports = pool

// function run(q, values, callback){
//     return pool.query(q, values, callback);
// };

// module.exports = { run };
