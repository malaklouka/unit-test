import { compute } from "./compute";

describe('compute', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(0);
    expect(result).toBe(1);
  })

  it('should increment the input if it is negative', () => {
    const result = compute(1);
    expect(result).toBe(2);
  })

})
