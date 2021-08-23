const code = require('../../helpers/status');
const Revision = require('../../models').revision;
const Hotel = require('../../models').hotel;

const getAllRevisions = async (condition) => {
    try {
        const result = await Revision.findAll({
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

const getRevision = async (id) => {
    try {
        const result = await Revision.findAll({
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

const addNewRevision = async (revision) => {
	try {
		const newRevision = Revision.create({
			id: 1,
			id_hotel: revision.id_hotel,
			title: revision.title,
			description: revision.description,
			date: revision.date,
			picture: revision.picture,
			next: revision.next
		});

		return {
        	success: true,
        	code: code.success,
        	lead: newRevision,
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

const updateRevision = async (revision, id) => {
	try {
		const [numberOfAffectedRows, affectedRows] = await Revision.update({
				description: revision.description,
				next: revision.next
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

const deleteRevision = async (revisionId) => {
	try {
		const numberOfAffectedRows = await Revision.destroy({where: {id: revisionId}});
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
    getAllRevisions,
	addNewRevision,
	updateRevision,
	deleteRevision,
	getRevision
}