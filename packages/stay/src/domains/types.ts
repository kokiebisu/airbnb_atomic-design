import { Identifier } from "@4irbnb/common";
import {
  // City,
  // Country,
  // ImgUrl,
  // Province,
  Title,
  // HostingType,
  // Guests,
  // Bedrooms,
  // Baths,
  // Beds,
} from "./fields";

/**
 * A stay posted by the user
 * @public
 */
export interface IEntityProps {
  title: Title;
  // city: City;
  // province: Province;
  // country: Country;
  // hostingType: HostingType;
  // guests: Guests;
  // bedrooms: Bedrooms;
  // beds: Beds;
  // baths: Baths;
  // imgUrls: ImgUrl[];
  // reviews: Reviews;
  // averageRatings: AverageRatings;
  // changeTitle(title: Title): void;
}

export interface IEntity extends IEntityProps {
  id: Identifier;
}
