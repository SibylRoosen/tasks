/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let result: number[];
    if (numbers.length === 1) {
        result = [numbers[0], numbers[0]];
    } else if (numbers.length === 0) {
        result = [];
    } else {
        result = [numbers[0], numbers[numbers.length - 1]];
    }
    return result;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number) => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integer = numbers.map((str) => {
        const parse = parseInt(str, 10);
        return isNaN(parse) ? 0 : parse;
    });
    return integer;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollars = amounts.map((string) =>
        string[0] === "$" ? string.replace(/^\$/, "") : string
    );
    const int = noDollars.map((str) => parseInt(str, 10));
    const final = int.map((number) => (isNaN(number) ? 0 : number));
    return final;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const exclaiming = messages.map((str: string): string =>
        str[str.length - 1] === "!" ? str.toUpperCase() : str
    );
    const noQuestions = exclaiming.filter(
        (str: string): boolean => str[str.length - 1] != "?"
    );
    return noQuestions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((str: string): boolean => str.length < 4);
    const num = shortWords.length;
    return num;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const validColors = ["red", "blue", "green"];
    const status = colors.every((color) => validColors.includes(color));
    return status;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const sumArray = [...addends];
    const totalString = sumArray.join("+");
    return addends.length === 0 ? "0=0" : sum + "=" + totalString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firNegInd = values.findIndex((num) => num < 0);
    const result = [...values];

    if (firNegInd !== -1) {
        const negArray = values.slice(0, firNegInd);
        const sum = negArray.reduce((tot: number, num: number) => tot + num, 0);
        result.splice(firNegInd + 1, 0, sum);
    } else {
        const sum = values.reduce((tot: number, num: number) => tot + num, 0);
        result.push(sum);
    }
    return result;
}
