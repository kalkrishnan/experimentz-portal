import { Measurement } from './measurement.model';
import { User } from './user.model';
export class Test {
  user: User;
  name: string;
  timestamp: String;
  formulaId: string;
  version: String;
  specification: String;
  measurements: Measurement[] = [];
}
