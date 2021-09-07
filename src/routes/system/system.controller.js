const code = require('../../helpers/status');
const Issue = require('../../models').issue;
const Comment = require('../../models').comentari;

const getAllComments = async (condition) => {
    try {
        const result = await Comment.findAll({
            where: { ...condition },
        	include: [{
                model: Issue,
                as: 'issue'
            }]
        });
        return {
          success: true,
          code: code.success,
          lead: result,
      };
    } catch (error) {console.log(error);
		return {
			success: false,
        	code: code.error,
        	error: error,
		};
    }
}

module.exports = {
    getAllComments
}