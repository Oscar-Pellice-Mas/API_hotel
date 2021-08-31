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

const getHotel = async (id) => {
	try {
		const result = await Hotel.findAll({
			where: { id: id },
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
}

const addNewHotel = async (hotel) => {
	try {
		const newHotel = Hotel.create({
			id: 1,
			name: hotel.name,
			mail: hotel.mail,
			phone: hotel.phone
		});
		return {
			success: true,
			code: code.success,
			lead: newHotel,
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			code: code.error,
			error: error,
		};
	}
}

const updateHotel = async (hotel, id) => {
	try {
		const [numberOfAffectedRows, affectedRows] = await Hotel.update({
			name: hotel.name,
			mail: hotel.mail,
			phone: hotel.phone
		},{where:{id: id}})
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
}

const deleteHotel = async (hotelId) => {
	try {
		const numberOfAffectedRows = await Hotel.destroy({where: {id: hotelId}});
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
}

module.exports = {
  	getAllHotels,
	getHotel,
	addNewHotel,
	updateHotel,
	deleteHotel
}