/**
 * @param {string[]} equations
 * @return {boolean}
 */

function mergeSet(source, destination)
{
    for (const value of source) {
        destination.add(value);
    }
}

function setIntersectNotZero(a, b)
{
    for (const value of a) {
        if (b.has(value))
        {
            return true;
        }
    }

    return false;
}

var equationsPossible = function(equations) {
    let allEqual = equations.filter(equation => equation.indexOf('==') !== -1)
                            .map(equation => new Set(equation.split('==')));
    let allNonEqual = equations.filter(equation => equation.indexOf('!=') !== -1)
                               .map(equation => equation.split('!='));
    

    let groups = [];

    for (let i = 0; i < allEqual.length; i++) {
        let found = false;
        for (let j = i + 1; j < allEqual.length; j++) {
            if (setIntersectNotZero(allEqual[i], allEqual[j]))
            {
                mergeSet(allEqual[i], allEqual[j]);
                found = true;
                break;
            }
        }        

        if (!found)
        {
            groups.push(allEqual[i])
        }
    }

    for (const nonEqualArray of allNonEqual) {
        if (nonEqualArray[0] === nonEqualArray[1])
        {
            return false;
        }

        for (const group of groups) {
            if (group.has(nonEqualArray[0]) && group.has(nonEqualArray[1]))
            {
                return false;
            }
        }
    }

    return true;
};

equationsPossible(["a==b","e==c","b==c","a!=e"]);