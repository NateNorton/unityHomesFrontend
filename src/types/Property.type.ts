import PropertyType from './PropertyType.type';
import { UserType } from './User.type';

export interface IProperty {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  isAvailable: boolean;
  numberOfBedrooms: number;
  hasGarden: boolean;
  squareMeeters: number;
  monthlyRent: number;
  postcode?: string;
  city?: string;
  propertyNumber?: number;
  street?: string;
  propertyTypeId: number;
  propertyType: PropertyType;
  dateAdded: string;
  dateUpdated: string;
  userId: number;
  user: UserType;
}

export interface EditPropertyType {
  title?: string;
  description?: string;
  fullDescription?: string;
  isAvailable?: boolean;
  numberOfBedrooms?: number;
  hasGarden?: boolean;
  squareMeeters?: number;
  monthlyRent?: number;
  postcode?: string;
  city?: string;
  propertyNumber?: number;
  street?: string;
}
