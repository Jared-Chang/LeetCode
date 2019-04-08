/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let version1Array = version1.split('.').map(version => parseInt(version));
    let version2Array = version2.split('.').map(version => parseInt(version));
    
    let maxLength = Math.max(version1Array.length, version2Array.length);
    
    version1Array = version1Array.concat(Array(maxLength - version1Array.length).fill(0));
    version2Array = version2Array.concat(Array(maxLength - version2Array.length).fill(0));
    
    for (let i = 0; i < version1Array.length; ++i)
    {
        if (version1Array[i] > version2Array[i])
        {
            return 1;
        }
        else if (version1Array[i] < version2Array[i])
        {
            return -1;
        }
    }

    return 0;
};