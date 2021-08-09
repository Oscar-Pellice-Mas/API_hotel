const code = require('../../helpers/status');
const Material = require('../../models').material;
const Hotel = require('../../models').hotel;

/**
 * Get all lead
 * @param {Object} condition
 * @returns {ApiResponseList} reflection object
 */
 const getAllMaterials = async (condition) => {
    try {
      const result = await Material.findAll({
        where: { ...condition },
        attributes: ["id", "name", "quantity", "price", "average"],
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

const addNewMaterial = async (material) => {
    try{
        const newMaterial = await Material.create({
            id: 1,
            id_hotel: material.id_hotel,
            name: material.name,
            quantity: material.quantity,
            price: material.price,
            average: material.average,
            timestamps: false
        });

        return{
            success: true,
            code: code.success,
            lead: newMaterial
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

module.exports = {
    getAllMaterials,
    addNewMaterial
}