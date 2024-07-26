"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCircumference = exports.calculateAreaOfCircle = exports.PI = void 0;
exports.PI = 3.14159;
function calculateAreaOfCircle(radius) {
    if (radius <= 0) {
        throw new Error("Radius must be greater than zero.");
    }
    return exports.PI * radius * radius;
}
exports.calculateAreaOfCircle = calculateAreaOfCircle;
function calculateCircumference(radius) {
    if (radius <= 0) {
        throw new Error("Radius must be greater than zero.");
    }
    return 2 * exports.PI * radius;
}
exports.calculateCircumference = calculateCircumference;
