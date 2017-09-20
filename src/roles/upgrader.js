// @flow
import actions from '../actions';
import updateWorkStatus from '../utils/updateWorkStatus';

const upgrader = {
	run: function(creep: Creep) {
		let status;
		let canWork = updateWorkStatus(creep);

		if (!canWork) {
			return actions.withdrawEnergy(creep);
		}

		status = creep.upgradeController(creep.room.controller);

		if(status === ERR_NOT_IN_RANGE) {
			return creep.moveTo(creep.room.controller);
		}
  }
};

module.exports = upgrader;
