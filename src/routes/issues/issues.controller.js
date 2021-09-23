const code = require('../../helpers/status');
const Issue = require('../../models').issue;
const User = require('../../models').user;
const MatRequeried = require('../../models').material_required;
const MatUsed = require('../../models').material_used;
const { v4: uuidv4 } = require('uuid');
const { Op } = require("sequelize");
const Hotel = require('../../models').hotel;
const Comment = require('../../models').comentari;

/**
 * Get all issues
 * @param {Object} condition
 * @returns {ApiResponseList} reflection object
 */
 const getAllIssues = async (condition) => {
	try {
		const result = await Issue.findAll({
			order: [['visual_id', 'ASC']],
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

const getIssue = async (id) => {
	try {
		const result = await Issue.findAll({
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

const newIssue = async (issue) => {
	try {
		const newIssue = await Issue.create({
			id: uuidv4(),
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
			date: issue.date,
			id_carrec: issue.id_carrec

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

const logNewIssue = async (issue) => {
	try {
		const newComment = await Comment.create({
			issue_id: issue.id,
			hotel_id: issue.id_hotel,
			type: 0,
			comentari: issue.title
		});
		return{
			success: true,
			code: code.success,
			lead: newComment
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

const updateIssue = async (issue, id) => {
	try {
		const [numberOfAffectedRows, affectedRows] = await Issue.update({
				status: issue.status,
				priority: issue.priority,
				description: issue.description,
				category: issue.category,
				subcategory: issue.subcategory
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

const deleteIssue = async (issueId) => {
	try {
		const numberOfAffectedRows = await Issue.destroy({where: {id: issueId}});
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

const logUpdates = async (updates) => {
	let comments = new Array();
	for(let update of updates.list){
		try {
			const newComment = await Comment.create({
				issue_id: updates.issue_id,
				hotel_id: updates.hotel_id,
				type: 2,
				comentari: update
			});
			comments.push(newComment);
		} catch (error) {
			console.log(error);
			return {  
				success: false,
				code: code.error,
				error: error,
			};
		}
	}
	return{
		success: true,
		code: code.success,
		lead: comments
	};
}

const addMaterial = async (materialList, issueId) => {
	var allMaterials = []
	materialList.forEach(async (material) => {
		try {
			const newMaterial = await MatRequeried.create({
				id_issue: issueId,
				id_material: material.id_material,
				quantity: material.quantity
			});
			allMaterials.push(newMaterial);
		} catch (error) {
			console.log(error);
			return {  
				success: false,
				code: code.error,
				error: error,
			};			
		}
	});
	return{
		success: true,
		code: code.success,
		lead: allMaterials
	};
}

const updateRequiredMaterial = async (materialList, issueId) => {
	var allRows = 0;
	materialList.forEach(async (material) => {
		try {
			const [numberOfAffectedRows, affectedRows] = await MatRequeried.update({
				quantity: material.quantity
			},{where:{
				[Op.and]:[
					{id_material: material.id_material},
					{id_issue: issueId}
				]
			}});
			allRows += affectedRows;
		} catch (error) {
			console.log(error);
			return {  
				success: false,
				code: code.error,
				error: error,
			};			
		}
	});
	return{
		success: true,
		code: code.success,
		lead: allRows
	};
}

const consumeMaterial = async (materialList, issueId) => {
	materialList.forEach(async (material) => {
		try {
			await MatRequeried.increment('quantity',
			{by: -(material.quantity),
			where:{
				[Op.and]:[
					{id_material: material.id_material},
					{id_issue: issueId}
				]
			}}
		);
		//comprovar si existeix l entrada a material used, si no hi es crearla, d altre manera 
		const item = await MatUsed.findOne({where:{
			[Op.and]:[
				{id_material: material.id_material},
				{id_issue: issueId}
			]
		}});
		if(item === null){
			await MatUsed.create({
				id_issue: issueId,
				id_material: material.id_material,
				quantity: material.quantity
			});
		}else{
			await MatUsed.increment('quantity',
				{by: material.quantity,
				where:{
					[Op.and]:[
						{id_material: material.id_material},
						{id_issue: issueId}
					]
				}}
			);
		}
		} catch (error) {
			return {  
				success: false,
				code: code.error,
				error: error,
			};
		}
	});
	return{
		success: true,
		code: code.success,
		lead: "allRows"
	};
}

module.exports = {
    getAllIssues,
	getIssue,
	newIssue,
	updateIssue,
	deleteIssue,
	logNewIssue,
	logUpdates,
	addMaterial,
	updateRequiredMaterial,
	consumeMaterial
}