import { Auth } from "./Auth";

import { IDataDto } from "../../dtos/data.dto";

export class StorageData implements IDataDto {
  Auth = Auth
}