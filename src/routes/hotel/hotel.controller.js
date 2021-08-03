const code = require('../../helpers/status');
const Hotel = require('../../models').hotel;


/**
 * Get all lead
 * @param {Object} condition
 * @returns {ApiResponseList} reflection object
 */
const getAllHotels = async (condition) => {
    try {
      const result = await Hotel.findAll({
        where: { ...condition },
        attributes: ["id", "phone", "name", "mail"],
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

module.exports = {
  getAllHotels,
}