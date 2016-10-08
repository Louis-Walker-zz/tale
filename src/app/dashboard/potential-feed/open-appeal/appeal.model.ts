export interface AppealModel {
  title: string;
  description: string;
  timestamp: number;
  reward?: string;
  itemType: string;
  microchipped?: boolean;
  neutured?: boolean;
  gender?: string;
  location?: number[];
}