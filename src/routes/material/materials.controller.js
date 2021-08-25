const code = require('../../helpers/status');
const { Op } = require("sequelize");
const Material = require('../../models').material;
const Average = require('../../models').average;
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
        	include: [{
            	model: Hotel,
            	as: 'hotel',
            	attributes: ["id", "name"],
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

const getMaterial = async (id) => {
	try {
		const result = await Material.findAll({
        	where: { id: id },
        	include: [{
            	model: Hotel,
            	as: 'hotel',
            	attributes: ["id", "name"],
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
            average: material.average
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

const updateMaterial = async (material, id) => {
  try {
    const [numberOfAffectedRows, affectedRows] = await Material.update({
        	name: material.name,
        	quantity: material.quantity,
        	price: material.price,
        	average: material.average
		},{where:{id: id}}
    )
    return{
		success: true,
		code: code.success,
		lead: affectedRows
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

const deleteMaterial = async (materialId) => {
	try {
		const numberOfAffectedRows = await Material.destroy({where: {id: materialId}});
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

const getMaterialAverage = async (materialId, hotelId) => {
	try {
		const result = await Average.findAll({
        	where: {
				[Op.and]: [
					{ id_hotel: hotelId },
					{ id_material: materialId }
				]
			},
			attributes: ["price", "quantity"]
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

const extractAverage = (averages) => {
	var avg = 0;
    for(let average of averages.lead){
        avg += average.price;
    }
    return avg/averages.lead.length;
};

module.exports = {
    getAllMaterials,
    addNewMaterial,
	updateMaterial,
	deleteMaterial,
	getMaterial,
	getMaterialAverage,
	extractAverage
}