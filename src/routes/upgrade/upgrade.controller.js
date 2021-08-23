const code = require('../../helpers/status');
const Upgrade = require('../../models').upgrade;
const User = require('../../models').user;
const Hotel = require('../../models').hotel;

const getAllUpgrades = async (condition) => {
	try {
		const result = await Upgrade.findAll({
        	where: { ...condition },
        	include: [{
            	model: Hotel,
            	as: 'hotel',
            	attributes: ["id", "name"],
        	}, 
            {
                model: User,
                as: 'reporter',
                attributes: ["id", "name", "role"]
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

const getUpgrade = async (id) => {
	try {
		const result = await Upgrade.findAll({
        	where: { id:id },
        	include: [{
            	model: Hotel,
            	as: 'hotel',
            	attributes: ["id", "name"],
        	}, 
            {
                model: User,
                as: 'reporter',
                attributes: ["id", "name", "role"]
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
}

const newUpgrade = async (upgrade) => {
	try {
		const newUpgrade = await Upgrade.create({
			id: 1,
			id_hotel: upgrade.id_hotel,
			id_reporter: upgrade.id_reporter,
			room: upgrade.room,
			title: upgrade.title,
			description: upgrade.description,
			picture: upgrade.picture,
			status: upgrade.status,
			date: upgrade.date

		});
		return{
			success: true,
			code: code.success,
			lead: newUpgrade
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

const updateUpgrade = async (upgrade, id) => {
	try {
		const [numberOfAffectedRows, affectedRows] = await Upgrade.update({
				status: upgrade.status,
                title: upgrade.title,
				description: upgrade.description,
				picture: upgrade.picture
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

const deleteUpgrade = async (upgradeId) => {
	try {
		const numberOfAffectedRows = await Upgrade.destroy({where: {id: upgradeId}});
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
    getAllUpgrades,
    getUpgrade,
    newUpgrade,
    updateUpgrade,
    deleteUpgrade
}