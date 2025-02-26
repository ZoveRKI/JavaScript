// const keyList = ['name', 'resumes', 'file', 'email', 'resumes', 'file', 'email', 'file'];
const keyList = ['resumes', 'file', 'b', 'file'];
// const keyList = ['resumes', 'file', 'file', 'email', 'file'];
// const valueList = ['John', 'xxField', 'xxField', 'xxField', 'PPPPPP', 'xxField', 'xxField', 'File2'];
const valueList = ['xxField', 'xxField', 'aac', 'xxField'];
// const valueList = ['xxField', 'xxField1', 'xxField', 'tt', 'xxcc'];
// const targetList = ['resumes', 'file', 'email'];
const targetList = ['resumes', 'file'];

// const customDeduplicate = (keyList, valueList, tagetList) => {
//     if (keyList.length < 2) {
//         return valueList
//     }

//     console.log('doing!')
//     const seenValues = new Set();
//     for (let i = 0; i < keyList.length; i++) {
//         const key = keyList[i];
//         const value = valueList[i];
//         if (tagetList.includes(key) && seenValues.has(value)) {
//             continue;
//         }
//         seenValues.add(value);
//     }
//     return [...seenValues];
// }

/**
 * @description Deduplicate
 *
 * @param {Array<string>} keyList - オリジナルキーリスト
 * @param {Array<string>} valueList - オリジナルバリューリスト。
 * @param {Array<string>} targetList - 重複排除の対象となるターゲットキーのリスト。
 * @param {boolean|number} [hasRule=false] - 重複排除オプション。デフォルト値はfalse。
 * - boolean：falseの場合、valueListに重複した値を全部一つになる
 * - number：ターゲットキーの間に指定した数のキーがある場合、valueListに重複した値を一つになる。
 * @example
 * - customDeduplicate2(
 *  ['resumes', 'file', 'b', 'file'],
 *  ['xxField', 'xxField', 'aac', 'xxField'],
 *  ['resumes', 'file'],
 * ) >>>>>>> ['xxField', 'aac']
 *
 * - customDeduplicate2(
 *  ['resumes', 'file', 'b', 'file'],
 *  ['xxField', 'xxField', 'aac', 'xxField'],
 *  ['resumes', 'file'],
 *  0
 * ) >>>>>>> ['xxField', 'aac', 'xxField']
 *
 * - customDeduplicate2(
 *  ['resumes', 'b', 'file', 'c', 'file'],
 *  ['xxField', 'bbb', 'xxField', 'ccc', 'xxField'],
 *  ['resumes', 'file'],
 *  1
 * ) >>>>>>> ['xxField', 'bbb', 'ccc', 'xxField']
 * @returns {Array<string>} 重複排除後のバリューリスト
 */
const customDeduplicate = (keyList, valueList, targetList, hasRule = false) => {
    if (keyList.length < 2) return valueList;
    const result = [];
    let seenValues = new Set();
    let lastPositions = new Map();

    for (let i = 0; i < keyList.length; i++) {
        const key = keyList[i];
        const value = valueList[i];

        if (hasRule === false && targetList.includes(key)) {
            if (seenValues.has(value)) continue;
            seenValues.add(value);
        }

        if (typeof hasRule === 'number' && targetList.includes(key)) {
            lastPositions.set(key, i);
            const currentKeyIndexInTargetList = targetList.findIndex((item) => item === key)
            const getlastPosition = lastPositions.get(targetList[currentKeyIndexInTargetList - 1]);
            if (i - getlastPosition === hasRule + 1 && value === valueList[getlastPosition]) continue;
        }
        result.push(value);
    }

    return result;
};

const a = customDeduplicate2(keyList, valueList, targetList);
console.log(a);
