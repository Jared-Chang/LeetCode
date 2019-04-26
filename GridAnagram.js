/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = {};

    strs.forEach(str => {
        let key = str.split('')
                     .sort((a, b) => { return a.charCodeAt(0) - b.charCodeAt(0)})
                     .join('');

        if (!map[key])
        {
            map[key] = [str];
        }
        else
        {
            map[key].push(str);
        }
    })

    return Object.values(map);
};