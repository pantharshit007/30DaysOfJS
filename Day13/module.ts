export const PI = 3.14159;

export function calculateAreaOfCircle(radius: number) {
  if (radius <= 0) {
    throw new Error("Radius must be greater than zero.");
  }
  return PI * radius * radius;
}

export function calculateCircumference(radius: number) {
  if (radius <= 0) {
    throw new Error("Radius must be greater than zero.");
  }
  return 2 * PI * radius;
}
