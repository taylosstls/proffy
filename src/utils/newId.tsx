/* eslint-disable @typescript-eslint/explicit-function-return-type */
let lastId = 0;

export default function newId(prefix = 'id') {
  lastId += 1;
  return `${prefix}${lastId}`;
}
