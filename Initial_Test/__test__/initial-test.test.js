const functions = require("../initial-test/initial-test");

test("adds 1 + 2 to equal 3", () => {
    expect(functions.sum(1, 2)).toBe(3);
});

test("adds 1 + 2 to NOT equal 3", () => {
    expect(functions.sum(1, 2)).not.toBe(6);
});

test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test("Should be truthy", () => {
    expect(functions.checkValue(true)).toBeTruthy();
});

test("User should be Brad Traversy", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Brad",
        lastName: "Traversy",
    });
});
