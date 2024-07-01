import Bowman from './classes/Bowman';
import Swordsman from './classes/Swordsman';
import Magician from './classes/Magician';
import Daemon from './classes/Undead';
import Undead from './classes/Zombie';
import Zombie from './classes/Daemon';

const bowman = new Bowman('Vasya');
const swordsman = new Swordsman('Sveta');
const magician = new Magician('Petya');
const daemon = new Daemon('Joker');
const undead = new Undead('Vova');
const zombie = new Zombie('Katya');

function dump() {}

dump(bowman, swordsman, magician, daemon, undead, zombie);
