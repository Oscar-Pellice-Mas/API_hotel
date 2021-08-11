  const code = require('../../helpers/status');
const User = require('../../models').user;
const Hotel = require('../../models').hotel;


/**
 * Get all lead
 * @param {Object} condition
 * @returns {ApiResponseList} reflection object
 */
const getAllUsers = async (condition) => {
    try {
      const result = await User.findAll({
        where: { ...condition },
        attributes: ["id", "password", "name", "role"],
        include: [{
            model: Hotel,
            as: 'hotel',
            attributes: ["id", "phone", "name", "mail"],
        }]

      });
      return {
        success: true,
        code: code.success,
        lead: result,
      };
    } catch (error) {
        console.log(error);
      return {
        success: false,
        code: code.error,
        error: error,
      };
    }
};

const addNewUser = async (user) => {
  try{
      const newUser = await User.create({
          id: 2,
          password: user.password,
          name: user.name,
          role: user.role,
          id_hotel: user.id_hotel
      });

      return{
          success: true,
          code: code.success,
          lead: newUser
      };
  } catch (error){
      console.log(error);
      return {
          success: false,
          code: code.error,
          error: error,
      };
  }
};

const deleteUser = async (userId) => {
	try {
		const numberOfAffectedRows = await User.destroy({where: {id: userId}});
		return{
			success: true,
			code: code.success,
			lead: numberOfAffectedRows
		};
	} catch (error) {
		console.log(error);
    	return {
    		success: false,
     		code: code.error,
      		error: error,
		};
	}
};

module.exports = {
    getAllUsers,
    addNewUser,
	deleteUser
}