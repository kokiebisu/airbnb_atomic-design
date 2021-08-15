import { Entity } from "@4irbnb/common";
import { IStay } from "./types";

/**
 * @public
 * Blueprint of the Stay instance
 */
export class Stay extends Entity<IStay> {
  private constructor(props: any) {
    super(props);
  }

  static create(props: IStay) {
    return new Stay(props);
  }

  get title() {
    return this.props.title;
  }

  get numberOfReviews() {
    return this.props.numberOfReviews;
  }

  get averateRatings() {
    return this.props.averageRatings;
  }

  get city() {
    return this.props.city;
  }

  get province() {
    return this.props.province;
  }

  get country() {
    return this.props.country;
  }

  get imgUrls() {
    return this.props.imgUrls;
  }
}
