const code = require('../../helpers/status');
const Issue = require('../../models').issue;
const User = require('../../models').user;
const Hotel = require('../../models').hotel;

/**
 * Get all issues
 * @param {Object} condition
 * @returns {ApiResponseList} reflection object
 */
 const getAllIssues = async (condition) => {
	try {
		const result = await Issue.findAll({
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

const newIssue = async (issue) => {
	try {
		const newIssue = await Issue.create({
			id: 1,
			id_hotel: issue.id_hotel,
			id_reporter: issue.id_reporter,
			room: issue.room,
			title: issue.title,
			description: issue.description,
			picture: issue.picture,
			status: issue.status,
			category: issue.category,
			subcategory: issue.subcategory,
			priority: issue.priority,
			date: issue.date

		});
		return{
			success: true,
			code: code.success,
			lead: newIssue
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
    getAllIssues,
	newIssue
}