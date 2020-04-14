import { IsMongoId } from "class-validator";

export class FindByIdParam {
  @IsMongoId({message: 'Provided id is not valid'})
  id: string
}