import { TUserAuthInput } from '../../models/user/userModel';

export interface User {
  hello(input: TUserAuthInput): Promise<any>;
}
