import { capitalizeName, formatTags } from './common';

describe("testing capitalizeName function", () => {
    it('should capitalize the first character of a string', () => {
        expect(capitalizeName("nikhil")).toEqual("Nikhil");
    })
     it("shouldnt capitalize other characters of a string", () => {
        expect(capitalizeName("nikhil")).not.toEqual("NIKHIL");
     })
})

describe("testing formatTags functionality", () => {
    it("should format and capitalize all items inside the string", () => {
        const tagsInput = "one, two, three";
        const tagsOutput = "One, Two, Three";
        expect(formatTags(tagsInput)).toBe(tagsOutput)
    })

    it("shouldnt capitalize items other than first letter", () => {
        const tagsInput = "one, two, three";
        const tagsOutput = "ONE, TWO, THREE";
        expect(formatTags(tagsInput)).not.toBe(tagsOutput)
    })
})