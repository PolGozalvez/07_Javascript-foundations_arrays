// const MONKEYS = ["🐒", "🦍", "🦧"];

/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 */

/**
 * Feeds monkeys with the specified fruit.
 *
 * @param {string[]} monkeysList - An array of monkey names.
 * @param {string} fruit - The type of fruit to feed the monkeys.
 * @returns {string[]} An array of strings indicating each monkey has been fed with the specified fruit.
 */
export default function feedMonkeys(monkeyList, fruit) {
    if (!fruit) {
        return [];
    }
    
    const feedMonkeysList = [];

    const feedMonkeysListLength = monkeyList.length;

    for (let monkey = 0; monkey < feedMonkeysListLength; monkey++) {
        const currentMonkey = monkeyList[monkey];
        const currentFeedMonkey = `${currentMonkey} ${fruit}`;

        feedMonkeysList.push(currentFeedMonkey);
    }

    return feedMonkeysList;
}
