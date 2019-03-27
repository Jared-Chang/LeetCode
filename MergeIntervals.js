/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a.start - b.start);

    let result = [];

    while (intervals[0] !== undefined)
    {
        let cur = intervals.shift();
        let next = intervals.shift();
        if (!!cur && !!next && cur.end >= next.start)
        {
            intervals.unshift(new Interval(Math.min(cur.start, next.start), Math.max(cur.end, next.end)))
        }
        else
        {
            result.push(cur);
            intervals.unshift(next)
        }
    }

    return result;
};