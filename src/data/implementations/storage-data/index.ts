import { Auth } from "./Auth"
import { User } from "./User"

import { IDataDto } from "../../dtos/data.dto"

export class StorageData implements IDataDto {
  Auth = Auth
  User = User
}