import Vector from './Vector'
import Color from './Color'
import Camera from './Camera'

export interface Ray {
  start: Vector;
  dir: Vector;
}

export interface Intersection {
  thing: Thing;
  ray: Ray;
  dist: number;
}

export interface Surface {
  diffuse: (pos: Vector) => Color;
  specular: (pos: Vector) => Color;
  reflect: (pos: Vector) => number;
  roughness: number;
}

export interface Thing {
  intersect: (ray: Ray) => Intersection;
  normal: (pos: Vector) => Vector;
  surface: Surface;
}

export interface Light {
  pos: Vector;
  color: Color;
}

export interface Scene {
  things: Thing[];
  lights: Light[];
  camera: Camera;
}
