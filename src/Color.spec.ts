import Color from './Color';
import { expect } from 'chai';

describe('Color', () => {
    let color = null;
    // runs before each test in this block
    beforeEach(() => {
        color = new Color(255,255,255);
    });
    it('should be instantiated', () => {
        console.log(color);
        expect(color instanceof Color).to.equal(true);
        expect(color).to.deep.equal({r: 255, g: 255, b: 255});
        expect(Color.black).to.deep.equal({r: 0, g: 0, b: 0});
    });
    it('#toDrawingColor() should return the right color', () => {
        let c = Color.toDrawingColor(color)
        expect(c).to.deep.equal({r: 255, g: 255, b:255});
    });

});