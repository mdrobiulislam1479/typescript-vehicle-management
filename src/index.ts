interface Vehicle {
  brand: string;
  speed: number;
  move(): void;
}

class Car implements Vehicle {
  constructor(
    public brand: string,
    public speed: number,
  ) {}
  move(): void {
    console.log(`The ${this.brand} car is moving at ${this.speed} km/h.`);
  }
}
