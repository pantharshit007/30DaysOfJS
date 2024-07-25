export function addNum(num1: number, num2: number) {
  return num1 + num2;
}
export function subNum(num1: number, num2: number) {
  return num1 - num2;
}

export const obj = (name: string, age: number) => ({
  name: name,
  age: age,
  method1() {
    return `${this.name} is ${this.age} years old`;
  },
});

export default function areaOfCircle(radius: number): string {
  const area = (3.14 * radius * radius).toFixed(2);
  return `Area of circle with ${radius}: ${area}`;
}

export {};
