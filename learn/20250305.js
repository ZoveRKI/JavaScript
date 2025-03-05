const val1 = '{{{ 従業員/カスタマイズ項目["a  b"] }}}c  d["e   f"]{{{ 従業員/カスタマイズ項目["p qs  t      h"] }}}';
const val2 = '{{{ 従業員/カスタマイズ項目["g   h"] }}}';
const val3 = '{{{ 従業員/カスタマイズ項目["a  b"] }}}c &nbsp;d["e &nbsp; f"]{{{ 従業員/カスタマイズ項目["p qs  t      h"] }}}';

// const regex = /\{{3}([^\[]*)\["([^"]*)"\]([^\}]*)\}{3}/g;
const regex = /\{{3}([^{}]*)\["(.*?)"\]([^{}]*)\}{3}/g;
const replaceSpaceRule = /( {2,})/g;
const replaceValue = '&nbsp;';

function replaceConsecutiveSpace(originalValue, extractedRule, replaceSpaceRule, replaceValue) {
    let result = originalValue;
    const globalRule = new RegExp(extractedRule, 'g');
    const replaceTargets = [...originalValue.matchAll(globalRule)];

    // console.log('replaceTargets: ', replaceTargets);

    for (const replaceTarget of replaceTargets) {
        const originalPart = replaceTarget[0];
        const innerValue = replaceTarget[2]; // 捕获的 [""] 内的内容
        const newValue = innerValue.replace(replaceSpaceRule, (spacePart) => {
            return spacePart.split('')
                .map((char, index) => (index % 2 === 1 ? replaceValue : char))
                .join('');
        });

        // 替换原始字符串的部分
        result = result.replace(originalPart, `{{{${replaceTarget[1]}["${newValue}"]${replaceTarget[3]}}}}`);
    }

    return result;
}

// const a = replaceConsecutiveSpace(val1, regex, replaceSpaceRule, replaceValue);
// console.log('a: ', a);

// const b = replaceConsecutiveSpace(val2, regex, replaceSpaceRule, replaceValue);
// console.log('b: ', b);

const c = replaceConsecutiveSpace(val3, regex, replaceSpaceRule, replaceValue);
console.log('c: ', c);

function replaceConsecutiveSpace2(originalValue, extractedRule, replaceSpaceRule, replaceValue) {
    return originalValue.replace(extractedRule, (_, prefix, content, suffix) => {
        const newValue = content.replace(replaceSpaceRule, (spacePart) =>
            spacePart.split('')
                .map((char, index) => (index % 2 === 1 ? replaceValue : char))
                .join('')
        );

        return `{{{${prefix}["${newValue}"]${suffix}}}}`;
    });
}

const d = replaceConsecutiveSpace2(val3, regex, replaceSpaceRule, replaceValue);
console.log('d:', d);
