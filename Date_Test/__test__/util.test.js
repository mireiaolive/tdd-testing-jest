const {
    orderdates,
    substring,
    formatDate1,
    formatDate2,
    formattedDateRu,
    daysBetween,
    workdaysBetween,
} = require("../date_test/util");
//date-fns provides the most comprehensive, yet simple and consistent toolset
//for manipulating JavaScript dates in a browser & Node.js.
const parseISO = require("date-fns/parseISO");

test("order dates", () => {
    expect(
        orderdates([parseISO("2022-12-31"), parseISO("2022-12-25")])
    ).toStrictEqual([parseISO("2022-12-25"), parseISO("2022-12-31")]);
});

//substring() method returns the part of the string from the start index up
//to and excluding the end index, or to the end of the string if no end index is supplied.
test("substring", () => {
    expect(substring("Mozilla", 1, 3)).toBe("oz");
});

test("formatDate1", () => {
    expect(formatDate1(parseISO("2022-12-31"))).toBe("12/31/2022");
});
test("formatDate2", () => {
    expect(formatDate2(parseISO("2022-12-31"))).toBe("31-12-2022");
});
test("formattedDateRu", () => {
    expect(formattedDateRu(parseISO("2022-10-31"))).toBe("октября 31, 2022");
});
test("daysBetween", () => {
    expect(daysBetween(parseISO("2022-12-29"), parseISO("2022-12-31"))).toBe(2);
});
test("workdaysBetween", () => {
    expect(
        workdaysBetween(parseISO("2022-12-20"), parseISO("2022-12-24"))
    ).toBe(4);
});
