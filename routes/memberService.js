const { Member } = require('../models');

module.exports = {

    createMember: async ( member ) => {
        try {
            return await Member.create(member);
        } catch (err) {
            console.error(err)
            throw err;
        }
    },

    getMembers: async () => {
      try {
          return await Member.findAll();
      }  catch (err) {
          console.error(err);
          throw err;
      }
    },

    getMember: async ( id ) => {
        try {
            return await Member.findOne({where: { id }})
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    modifyMember: async ( id, member ) => {
        try {
            return await Member.update(member, { where: { id }});
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    deleteMember: async ( id ) => {
        try {
            return await Member.destroy({ where: { id }});
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
};
