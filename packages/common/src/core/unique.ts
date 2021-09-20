export class UniqueIdentifier {
  private readonly value: string;
  constructor(value: string) {
    this.value = value;
  }

  /**
   * @public Checks the equality of the two values
   * @param target
   */
  public equals(target?: UniqueIdentifier): boolean {
    if (target === null || target === undefined) {
      return false;
    }
    if (!(target instanceof this.constructor)) {
      return false;
    }
    return target.value === this.value;
  }

  /**
   * @public Converts the identifier
   * @access public
   */
  public toString() {
    return this.value;
  }
}
