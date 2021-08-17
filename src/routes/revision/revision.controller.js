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

module.exports = {
    getAllRevisions
}