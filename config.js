const env = process.env;

/*
typically we would never persist this data to GitHub
but since this is not a produection product....
*/

//Local DB
// const config = {
//   db: {
//     host: env.DB_HOST || 'localhost',
//     port: env.DB_PORT || '5432',
//     user: env.DB_USER || 'cms_user',
//     password: env.DB_PASSWORD || 'password',
//     database: env.DB_NAME || 'lottolookup',
//   },
//   listPerPage: env.LIST_PER_PAGE || 10,
// };

//Heroku DB
const config = {
  db: {
    host: env.DB_HOST || 'ec2-52-73-149-159.compute-1.amazonaws.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'ytajdbkzkrmtnk',
    password: env.DB_PASSWORD || '67e62f6301037b528df77707b46ccfc50ff6fc437dbd568b9a4638c4d656a016',
    database: env.DB_NAME || 'd3h5400ge0064j',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;