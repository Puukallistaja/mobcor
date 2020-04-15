import * as mongoose from "mongoose";

// interfaces has to extend mongoose document or we get TS error when using interfaces with mongoose
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33824
export interface Restaurant extends mongoose.Document{
  name: string,
  description: string,
  address: string,
}
