import { Player} from '../model/player.model'
export class Team {
  name: string;
  location: string;
  offensiveRating: number;
  defensiveRating: number;
  overallRating: number;
  players: Player[];
}