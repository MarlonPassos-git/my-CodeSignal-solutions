import { solution } from "./firstDigit"

describe("firstDigit", () => {
  it("should return the first digit in a string", () => {
    expect(solution("var_1__Int")).toBe("1")
    expect(solution("q2q-q")).toBe("2")
    expect(solution("0ss")).toBe("0")
  })
})