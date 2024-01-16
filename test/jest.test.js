test('devo conhecer o test', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect().not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
}
);