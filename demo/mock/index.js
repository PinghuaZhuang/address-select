import random from 'lodash/random';
import { faker } from '@faker-js/faker';

// faker.setLocale('zh_CN');
let uid = 0;

function createList(pid, level = 0, columnsLength = 3) {
  const nextLevel = level + 1;
  const id = ++uid;
  const childrenList =
    level >= columnsLength - 1
      ? []
      : Array.from({
          length:
            columnsLength > 3
              ? random(10) > 9 && level >= columnsLength - 3
                ? 0
                : random(1, 3)
              : random(1, 5),
        }).map(() => createList(id, nextLevel, columnsLength));
  return {
    id,
    name: faker.name.firstName() + faker.name.lastName(),
    pid,
    childList: childrenList,
  };
}

export default function (columnsLength, count) {
  return new Array(count ?? random(8, 18))
    .fill(0)
    .map(() => createList(0, 0, columnsLength));
}
