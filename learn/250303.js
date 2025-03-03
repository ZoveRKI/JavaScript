//target = '{{{ 従業員/カスタマイズ項目["p &nbsp; q &nbsp;s t"] }}}'
const val1 = '{{{ 従業員/カスタマイズ項目["p   q s t"] }}}'
const val2 = '{{{ 従業員/カスタマイズ項目["p  q"] }}}'
const val3 = '{{{ 従業員/カスタマイズ項目["p qs  t      h"] }}}'

const originalValue = '{{{ 従業員/カスタマイズ項目["p   q  s t"] }}}'
const extractedRule = /\["(.*?)"\]/
const replaceSpaceRule = /( {2,})/g
const replaceValue = '&nbsp;'

function replaceConsecutiveSpace(originalValue, extractedRule, replaceSpaceRule, replaceValue) {
    const replaceTarget = originalValue.match(extractedRule);
    if (replaceTarget) {
        const newValue = replaceTarget[1].replace(replaceSpaceRule, (spacePart) => {
            return spacePart.split('').map((char, index) => (
                index % 2 === 1 ? replaceValue : char
            )).join('');
        });

        const result = originalValue.replace(extractedRule, `["${newValue}"]`);
        return result;
    }
    return originalValue;
}

const a = replaceConsecutiveSpace(originalValue, extractedRule, replaceSpaceRule, replaceValue);
console.log('a: ', a);

const b = replaceConsecutiveSpace(val1, extractedRule, replaceSpaceRule, replaceValue);
console.log('b: ', b);

const c = replaceConsecutiveSpace(val2, extractedRule, replaceSpaceRule, replaceValue);
console.log('c: ', c);

const d = replaceConsecutiveSpace(val3, extractedRule, replaceSpaceRule, replaceValue);
console.log('d: ', d);
