// todo: ここに単体テストを書いてみましょう！
import { asyncSumOfArray, asyncSumOfArraySometimesZero, getFirstNameThrowIfLong, sumOfArray } from "../functions";
import { NameApiService } from "../nameApiService";
import { DatabaseMock } from "../util";

describe('sumOfArray', () => {

    test('1 + 1', () => {
        expect(sumOfArray([1, 1])).toEqual(2);
    });
});

describe('asyncSumOfArray', () => {

    test('1 + 1', () => {
        return asyncSumOfArray([1, 1]).then(result => {
            expect(result).toBe(2);
        });
    });
});

jest.mock("../util");
const Database = DatabaseMock as jest.Mock;
describe("asyncSumOfArraySometimesZero", () => {
  test("1+2+3", async () => {
    Database.mockImplementationOnce(() => {
      return {
        save(_: number): void {},
      };
    });
    const database = new Database();
    expect(await asyncSumOfArraySometimesZero([1, 2, 3], database)).toBe(6);
  });
  test("空配列", async () => {
    Database.mockImplementationOnce(() => {
      return {
        save(_: number): void {
          throw new Error();
        },
      };
    });
    const database = new Database();
    expect(await asyncSumOfArraySometimesZero([], database)).toBe(0);
  });
});

jest.mock("../nameApiService");
const NameApiServiceMock = NameApiService as jest.Mock;
describe("getFirstNameThrowIfLong", () => {
  test("名前が最大長を超えない場合", async () => {
    NameApiServiceMock.mockImplementationOnce(() => {
      return {
        getFirstName(): string {
          return "Mike";
        },
      };
    });

    const nameApiServiceMock = new NameApiServiceMock();
    expect(await getFirstNameThrowIfLong(5, nameApiServiceMock)).toBe("John");
  });

  test("名前が最大長を超える場合", async () => {
    NameApiServiceMock.mockImplementationOnce(() => {
      return {
        getFirstName(): string {
          return "Mike";
        },
      };
    });

    const nameApiServiceMock = new NameApiServiceMock();
    const promise = async (): Promise<void> => {
      await getFirstNameThrowIfLong(3, nameApiServiceMock);
    };
    await expect(promise).rejects.toThrow(Error("first_name too long"));
  });
});