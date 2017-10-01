// @flow
import _ from 'lodash';
import { attackInvaders } from 'structures/actions';

export default function roomActions(game: GameObject) {
  _.forEach(game.rooms, (room: Room) => {
    attackInvaders(room);
  });
}
