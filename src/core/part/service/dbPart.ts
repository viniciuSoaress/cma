import Part from "../model/part";

export default interface DbPart {
  createPart(data: Part): Promise<Part>,
  getParts(): Promise<Part[]>,
  deletePart(id: string): Promise<void>
}