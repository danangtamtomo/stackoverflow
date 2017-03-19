'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      displayName: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      aboutMe: {
        type: Sequelize.STRING
      },
      profilePicture: {
        type: Sequelize.STRING
      },
      reputation: {
        type: Sequelize.INTEGER
      },
      websiteLink: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      lastSeen: {
        type: Sequelize.DATE
      },
      profileViews: {
        type: Sequelize.INTEGER
      },
      visited: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Profiles')
  }
}
