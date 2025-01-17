﻿function parseCount(value) {
  const parsedValue = Number.parseFloat(value);
  if (isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }
  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}


class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.checkTriangleExistence() === false) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  checkTriangleExistence() {
    return this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const s = this.perimeter / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return +area.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
