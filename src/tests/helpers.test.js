const helpers = require('../helpers');

test('get row from chess position', () => {
    expect(helpers.getRow("A2")).toBe(2);
});

test('get column from chess position', () => {
    expect(helpers.getColumn("A2")).toBe("A");
});

test('combine row and column as chess position', () => {
    expect(helpers.getPosition(2, "A")).toStrictEqual({"row": 2, "col": "A"});
});

test('get x coordinate from letter', () => {
    expect(helpers)
})