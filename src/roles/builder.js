// @flow
import actions from '../actions';
import updateWorkStatus from '../utils/updateWorkStatus';

var builder = {
	run: function(creep: Creep) {
		let status;
		let canWork = updateWorkStatus(creep);

		if (!canWork) {
			return actions.withdrawEnergy(creep);
		}

		// Try to repair first
		const repairSites = creep.room.find(FIND_MY_STRUCTURES, { filter: (structure) => structure.hits < structure.hitsMax / 3 }  );

		if (repairSites.length > 0) {
			status = creep.repair(repairSites[0]);

			if (status === ERR_NOT_IN_RANGE) {
				return creep.moveTo(repairSites[0]);
			}
		}

		// Look for construction sites
    const constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);

		if(constructionSites.length > 0) {
			status = creep.build(constructionSites[0]);

			if (status === ERR_NOT_IN_RANGE) {
				return creep.moveTo(constructionSites[0]);
			}
		}
  }
};

module.exports = builder;
