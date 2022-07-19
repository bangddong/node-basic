const { USER_MASTER } = require('../models/index');

module.exports = {

    createUser: async ( user ) => {
        try {
            return await USER_MASTER.create(user);
        } catch (err) {
            console.error(err)
            throw err;
        }
    },

    getUsers: async () => {
      try {
          return await USER_MASTER.findAll();
      }  catch (err) {
          console.error(err);
          throw err;
      }
    },

    getUser: async ( id ) => {
        try {
            return await USER_MASTER.findOne({where: { id }})
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    modifyUser: async ( id, user ) => {
        try {
            return await USER_MASTER.update(user, { where: { id }});
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    deleteUser: async ( id ) => {
        try {
            return await USER_MASTER.destroy({ where: { id }});
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
};
