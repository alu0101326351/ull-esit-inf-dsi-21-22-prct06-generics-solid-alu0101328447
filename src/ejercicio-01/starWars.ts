import { Stats } from './stats';
import { Fighter } from './fighter'

export class StarWars extends Fighter {
  constructor(name: string, weight: number, height: number, habilityName: string, 
    habilityType: string, stats: Stats, cathPrase: string, private type: string) {
    super(name, weight, height, habilityName, habilityType, stats, cathPrase, 'Star Wars');
  }

  efectivity(fighter: Fighter): number {
    let result: number = 1;

    switch(fighter.getUniverse()) {
      case 'Marvel' || 'DC': 
        result *= 2;
        break;
      case 'Pokemon' || 'Dragon Ball': 
        result *= 2;
        break;
      default: 
        // En este caso la efectividad no cambia
        break;
    }

    result *= this.typeEfectivity(fighter);

    return result;
  }
}