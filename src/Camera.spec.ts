import Camera from './Camera';
import Vector from './Vector'

import { expect } from 'chai';

describe('Camera', () => {
    let camera = null;
    // runs before each test in this block
    beforeEach(() => {
        const position = new Vector(0.0, 0.0, 0.0);
        const direction = new Vector(1.0, 1.0, 0.0);
        camera = new Camera(position, direction);
    });
    it('should be instantiated', () => {
        expect(camera.pos instanceof Vector).to.equal(true);
        expect(camera.pos).to.deep.equal(new Vector(0.0, 0.0, 0.0));
    });
});