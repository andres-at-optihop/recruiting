import Solution from '.';

interface TestCase {
  name: string;
  input: number[];
  expectedOutput: number[][];
}

const TestCases: TestCase[] = [
  {
    name: '1,2,3',
    input: [1, 2, 3],
    expectedOutput: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]],
  },
  {
    name: '1,2,2',
    input: [1, 2, 2],
    expectedOutput: [[], [1], [1, 2], [2], [2, 2]],
  },
  {
    name: '1,2,2,3',
    input: [1, 2, 2, 3],
    expectedOutput: [
      [1, 2, 2, 3],
      [1, 2, 2],
      [1, 2, 3],
      [1, 2],
      [1, 3],
      [1],
      [2, 2, 3],
      [2, 2],
      [2, 3],
      [2],
      [3],
      [],
    ],
  },
  {
    name: '1,2,2,3 unsorted',
    input: [1, 3, 2, 2],
    expectedOutput: [
      [1, 2, 2, 3],
      [1, 2, 2],
      [1, 2, 3],
      [1, 2],
      [1, 3],
      [1],
      [2, 2, 3],
      [2, 2],
      [2, 3],
      [2],
      [3],
      [],
    ],
  },
];

describe('Solution Results', () => {
  const helperHash = (arr: number[][]): { [key: string]: boolean } => {
    const hash: { [key: string]: boolean } = {};
    for (const subArray of arr) {
      hash[subArray.join(',')] = true;
    }
    return hash;
  };

  let solution: Solution;
  beforeEach(() => {
    solution = new Solution();
  });
  for (const testCase of TestCases) {
    it(testCase.name, () => {
      const result = solution.getSubSets(testCase.input);
      expect(helperHash(result)).toStrictEqual(
        helperHash(testCase.expectedOutput),
      );
    });
  }
});
