import { Ingredient } from './ingredient.model';
import { User } from './user.model';
export class Experiment {
  user: User;
  name: string;
  timestamp: String;
  specification: String;
  ingredients: Ingredient[] = [];
}
