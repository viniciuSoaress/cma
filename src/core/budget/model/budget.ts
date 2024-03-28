import { Equipment } from "../../client/model/client";

export default interface Budget{
  id?: string,
  date_delivery: string,
  date_entry: string,
  equipment: Equipment
}