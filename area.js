const areaOfRect = (b, h) => b * h

const AreaOfTriangle = (b, h) => (1 / 2) * b * h

const areaofcircle = (r) => (22 / 7) * r * r;


const h = 14,
      b = 27,
      x = 12,
      r = 7,
      r2 = 5;

console.log(`Area of the figure is ${areaOfRect(b-r,h) + AreaOfTriangle(b-r, x) + (areaofcircle(r)/2) - areaofcircle(r2)  }`);