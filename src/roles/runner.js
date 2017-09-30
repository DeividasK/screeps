// @flow
import actions from './actions';

export default function runner(
  creep: Creep,
  actionItems: Array<
    string | { name: string, additionalArguments: Array<mixed> },
  >,
) {
  let working;

  for (let action of actionItems) {
    if (typeof action === 'string') {
      working = actions[action].call(null, creep);
    } else if (typeof action === 'object') {
      working = actions[action.name].call(
        null,
        creep,
        ...action.additionalArguments,
      );
    }

    if (working) {
      return;
    }
  }
}
