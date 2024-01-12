export interface IProperty {
  id: number;
  title: string;
  description: string;
  isAvailable: boolean;
  numberOfBedrooms: number;
  hasGarden: boolean;
  squareMeeters: number;
  monthlyRent: number;
  postcode?: string;
  city?: string;
  propertyNumber?: number;
  street?: string;
}
