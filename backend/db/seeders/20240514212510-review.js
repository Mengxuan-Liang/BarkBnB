'use strict';
const { Review } = require('../models');


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Review.bulkCreate([
      {
        spotId: 1,
        userId: 1,
        review: 'great place to stay',
        stars: 3
      },
      {
        spotId: 1,
        userId: 2,
        review: 'even greater place to stay',
        stars: 4
      },{
        spotId: 1,
        userId: 3,
        review: 'not a great place to stay',
        stars: 5
      },{
        spotId: 2,
        userId: 1,
        review: 'this is a great place to stay',
        stars: 1
      },
      {
        spotId: 2,
        userId: 2,
        review: 'do not come here',
        stars: 4
      },{
        spotId: 2,
        userId: 3,
        review: 'this palce is great',
        stars: 3
      },{
        spotId: 3,
        userId:1,
        review: 'i will come back again',
        stars: 2
      },
      {
        spotId: 3,
        userId: 2,
        review: 'not a bad place',
        stars: 2
      },{
        spotId: 3,
        userId: 3,
        review: 'this is the best place ever',
        stars: 5
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, null, {});
  }
};