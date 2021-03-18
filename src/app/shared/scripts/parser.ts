import get from 'lodash.get';

export function evaluateCode(code: string, dict: object): object {
    var json: object = JSON.parse(code);
    iterateAndParse(json, dict);
    return json;
}

function iterateAndParse(json: object, dict: object) {
    for (var key in json) {
        if (typeof json[key] === 'string') {
            parseString(json, key, dict);
        } else if (typeof json[key] === 'object') {
            iterateAndParse(json[key], dict);
        }
    }
}

function parseString(obj: object, key: string, dict: object) {
    while (1) {
        let text: string = obj[key];
        let index = text.search(/{{[a-zA-Z .]+}}/g)
        if (index < 0) break;
        let endIndex = text.search(/}}/g);
        let variable = text.substring(index + 2, endIndex).trim();
        let value = get(dict, variable);
        if (!value) throw "Invalid variable \"" + variable + "\"";
        obj[key] = text.substr(0, index) + value + text.substr(endIndex + 2);
    }
    obj[key] = eval(obj[key].replace(/[^0-9\(\)\+\-\*\/\.]/g, ""));
}