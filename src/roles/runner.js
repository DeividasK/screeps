// @flow
import actions from './actions';
import checks from './checks';

export default function runner(
  creep: Creep,
  actionItems: Array<
    | string
    | {
      name: string,
      additionalArguments?: Array<mixed>,
      additionalCheck?: string,
    },
  >,
) {
  let working;

  for (let action of actionItems) {
    if (typeof action === 'string') {
      working = actions[action].call(null, creep);
    } else if (typeof action === 'object') {
      const additionalArguments = action.additionalArguments || {};

      working = actions[action.name].call(null, creep, ...additionalArguments);

      if (
        working &&
        action.additionalCheck &&
        typeof checks[action.additionalCheck] === 'function'
      ) {
        working = checks[action.additionalCheck].call(null, creep);
      }
    }

    if (working) {
      return;
    }
  }
}
