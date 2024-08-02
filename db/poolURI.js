const { Pool } = require("pg");
require("dotenv").config();

// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: `postgresql://${process.env.ROLENAME}:${process.env.ROLEPASSWORD}@localhost:5432/top_users`
});
