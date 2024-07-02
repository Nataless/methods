import Bowman from '../classes/Bowman';
import Swordsman from '../classes/Swordsman';
import Magician from '../classes/Magician';
import Undead from '../classes/Undead';
import Zombie from '../classes/Zombie';
import Daemon from '../classes/Daemon';
import Character from '../classes/Character';

test.each([
  [
    new Bowman('Kate'),
    {
      name: 'Kate',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    new Swordsman('Mark'),
    {
      name: 'Mark',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
  [
    new Magician('Natalie'),
    {
      name: 'Natalie',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
  [
    new Undead('John'),
    {
      name: 'John',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    new Zombie('Tanya'),
    {
      name: 'Nanya',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
  [
    new Daemon('Bred'),
    {
      name: 'Bred',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
])('create new characters', (character, expected) => {
  expect(character).toEqual(expected);
});

test('error short name', () => {
  expect(() => {
    new Bowman('M');
  }).toThrow();
});

test('error long name', () => {
  expect(() => {
    new Bowman('Maaaaaaaarryyyy');
  }).toThrow();
});

test('error other type', () => {
  expect(() => {
    new Character('Vick', 'Admin');
  }).toThrow();
});

test('levelUp success', () => {
  const tommy = new Bowman('Tommy');
  tommy.health = 50;
  tommy.levelUp();
  expect(tommy).toEqual({
    name: 'Tommy',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('levelUp death', () => {
  const elly = new Bowman('Elly');
  elly.health = 0;
  expect(() => {
    elly.levelUp();
  }).toThrow();
});

test('damage 20 points', () => {
  const sam = new Bowman('Sam');
  sam.damage(20);
  expect(sam.health).toBe(85);
});

test('damage death', () => {
  const iren = new Bowman('Iren');
  iren.damage(200);
  expect(() => {
    iren.damage(200);
  }).toThrow();
});
