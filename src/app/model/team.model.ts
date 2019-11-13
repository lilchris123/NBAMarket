import { Player} from '../model/player.model'
export class Team {
  id: string;
  name: string;
  location: string;
  offensiveRating: number;
  defensiveRating: number;
  overallRating: number;
  price: number;
  players: Player[];
}