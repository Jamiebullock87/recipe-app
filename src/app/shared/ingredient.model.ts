/* export class Ingredient {    shortcut way of writing this below,
  public name: string;          declare the variables public directly
  public amount: number;        in the constructor instead of declaring them public then
                                referencing them with 'this' inside the constructor
  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
} */
export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
