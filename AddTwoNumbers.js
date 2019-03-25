
function generateNode(value)
{
    return {val: value, next: null};
}

function formNextNode(resultNode, value)
{
    resultNode.val = value;
    resultNode.next = generateNode(0);

    return resultNode.next;
}

function anyNull(array)
{
    return array.map(item => { return item == null; })
                .reduce((isNull, totalNull) => { return totalNull || isNull });
}

function allNull(array)
{
    return array.map(item => { return item == null; })
                .reduce((isNull, totalNull) => { return totalNull && isNull });
}

function sum(nodeArray)
{
    return nodeArray.map(({val}) => val)
                    .reduce((value, total) => {  return value + total; } );
}

function goToNext(nodeArray)
{
    for (let nodeIndex in nodeArray)
    {
        nodeArray[nodeIndex] = nodeArray[nodeIndex].next;
    }
}

function calculate(nodeArray, resultNode)
{
    let previousNode = null;
    let overflow = false;

    while (!anyNull(nodeArray))
    {
        let value = sum(nodeArray) + resultNode.val;

        if (overflow)
        {
            value++;
            overflow = false;
        }

        if (value >= 10)
        {
            value = value % 10;
            overflow =  true;
        }

        previousNode = resultNode;
        resultNode = formNextNode(resultNode, value);
        goToNext(nodeArray);
    }

    resultNode.val += overflow ? 1 : 0;

    return [previousNode, resultNode];
}

function pickNotNull(nodeArray)
{
    return nodeArray.filter(item => { return  item != null; });
}

function dealRemaining(nodeArray, resultNode, previousNode)
{
    if (!allNull(nodeArray))
    {
        [previousNode, resultNode] = calculate(pickNotNull(nodeArray), resultNode);
    }
    
    if (resultNode.val === 0)
    {
        previousNode.next = null;
    }
}

function addTwoNumbers(l1, l2)
{
    let resultHead = generateNode(0);
    let resultNode = resultHead;

    let nodeArray = [l1, l2];

    [previousNode, resultNode] = calculate(nodeArray, resultNode);

    dealRemaining(nodeArray, resultNode, previousNode);

    return resultHead;
}

//for  debug

function leetcode()
{
    return addTwoNumbers(prepareData([1]), prepareData([9, 9]));
}

function prepareData(intArray)
{
    let result = generateNode(0);

    let temp = result;

    while (intArray.length != 1)
    {
        temp = formNextNode(temp, intArray.shift());
    }

    temp.val = intArray.shift();

    return result;
}

console.log(JSON.stringify(leetcode()))