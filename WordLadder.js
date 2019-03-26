/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var Heap = function (sort) {
    this._array = [];
    this._sort = sort;

    Object.defineProperty(this, 'length', {
        enumerable: true,
        get: function () { return this._array.length },
    });

    if (typeof this._sort !== 'function') {
        this._sort = function (a, b) {
            return a - b;
        }
    }
};

Heap.prototype.push = function (node) {
    node = node || {};
    this._array.push(node);
    this._bubble();
};

Heap.prototype.pop = function () {
    if (this.isEmpty()) {
        return null;
    }
    var top = this.peek();
    var last = this._array.pop();
    if (this.length > 0) {
        this._array[0] = last;
        this._sink();
    }
    return top;
};

Heap.prototype.peek = function () {
    return this._array[0];
};

Heap.prototype.isEmpty = function () {
    return this.length === 0;
};

Heap.prototype._compare = function (i, j) {
    return this._sort(this._array[i], this._array[j]) > 0;
};

Heap.prototype._bubble = function () {
    var i = this.length - 1;
    var j = this._parent(i);

    while (j !== null && this._compare(i, j)) {
        this._swap(i, j);
        i = j;
        j = this._parent(i);
    }
};

Heap.prototype._sink = function () {
    var i = 0;
    var lc = this._left(i);
    var rc = this._right(i);
    var next;

    while (lc !== null) {
        next = lc;
        if (rc !== null && this._compare(rc, lc)) {
            next = rc;
        }
        if (this._compare(next, i)) {
            this._swap(i, next);
            i = next;
            lc = this._left(i);
            rc = this._right(i);
        } else {
            return;
        }
    }
};

Heap.prototype.print = function () {
    var s = '';
    var nodes = 1;
    var values = 0;
    for (var i = 0; i < this.length; i++) {
        s += ' ' + this._array[i].toString();
        values++;
        if (values === nodes) {
            nodes = nodes << 1;
            values = 0;
            s += '\n';
        }
    }
    console.log('\n' + s + '\n');
};

Heap.prototype._parent = function (i) {
    var pi = (i - 1) / 2 >> 0;
    return pi >= 0 ? pi : null;
};

Heap.prototype._left = function (i) {
    var li = i * 2 + 1;
    return li < this.length ? li : null;
};

Heap.prototype._right = function (i) {
    var ri = i * 2 + 2;
    return ri < this.length ? ri : null;
};

Heap.prototype._swap = function (i, j) {
    var a = this._array;
    var v = a[i];
    a[i] = a[j];
    a[j] = v;
};

function formWordObject(word, score, step)
{
    return {word: word, score: score, step: step};
}

function charSub(l, r)
{
    return (l.charCodeAt(0) - r.charCodeAt(0)) === 0 ? 0 : 1;
}

function getScore(word, target) {
    return word.split('').reduce((total, c, i) => 
    {
        return total + charSub(c, target[i]);
    }, 0);
}

function findNextNode(wordList, target) {
    return wordList.filter(word => getScore(word, target) === 1);
}

function aStar(endWord, wordList, heap, used) {

    while (!heap.isEmpty())
    {
        let front = heap.pop();

        if (front.word === endWord)
        {
            return front.step;
        }

        let nextNodes = findNextNode(wordList, front.word);
        nextNodes.forEach(word =>
        {
            if (!used.some(usedWord => word === usedWord))
            {
                heap.push(formWordObject(word, getScore(word, endWord), front.step + 1));
            }
        });
        used = used.concat(nextNodes);
    }

    return 0;
}

var ladderLength = function (beginWord, endWord, wordList) {
    let heap = new Heap((a, b) => { return b.step - a.step; })

    heap.push(formWordObject(beginWord, 0, 1));

    let used = [beginWord];

    return aStar(endWord, wordList, heap, used);
};

console.log(ladderLength("cet",
"ism",
["kid","tag","pup","ail","tun","woo","erg","luz","brr","gay","sip","kay","per","val","mes","ohs","now","boa","cet","pal","bar","die","war","hay","eco","pub","lob","rue","fry","lit","rex","jan","cot","bid","ali","pay","col","gum","ger","row","won","dan","rum","fad","tut","sag","yip","sui","ark","has","zip","fez","own","ump","dis","ads","max","jaw","out","btu","ana","gap","cry","led","abe","box","ore","pig","fie","toy","fat","cal","lie","noh","sew","ono","tam","flu","mgm","ply","awe","pry","tit","tie","yet","too","tax","jim","san","pan","map","ski","ova","wed","non","wac","nut","why","bye","lye","oct","old","fin","feb","chi","sap","owl","log","tod","dot","bow","fob","for","joe","ivy","fan","age","fax","hip","jib","mel","hus","sob","ifs","tab","ara","dab","jag","jar","arm","lot","tom","sax","tex","yum","pei","wen","wry","ire","irk","far","mew","wit","doe","gas","rte","ian","pot","ask","wag","hag","amy","nag","ron","soy","gin","don","tug","fay","vic","boo","nam","ave","buy","sop","but","orb","fen","paw","his","sub","bob","yea","oft","inn","rod","yam","pew","web","hod","hun","gyp","wei","wis","rob","gad","pie","mon","dog","bib","rub","ere","dig","era","cat","fox","bee","mod","day","apr","vie","nev","jam","pam","new","aye","ani","and","ibm","yap","can","pyx","tar","kin","fog","hum","pip","cup","dye","lyx","jog","nun","par","wan","fey","bus","oak","bad","ats","set","qom","vat","eat","pus","rev","axe","ion","six","ila","lao","mom","mas","pro","few","opt","poe","art","ash","oar","cap","lop","may","shy","rid","bat","sum","rim","fee","bmw","sky","maj","hue","thy","ava","rap","den","fla","auk","cox","ibo","hey","saw","vim","sec","ltd","you","its","tat","dew","eva","tog","ram","let","see","zit","maw","nix","ate","gig","rep","owe","ind","hog","eve","sam","zoo","any","dow","cod","bed","vet","ham","sis","hex","via","fir","nod","mao","aug","mum","hoe","bah","hal","keg","hew","zed","tow","gog","ass","dem","who","bet","gos","son","ear","spy","kit","boy","due","sen","oaf","mix","hep","fur","ada","bin","nil","mia","ewe","hit","fix","sad","rib","eye","hop","haw","wax","mid","tad","ken","wad","rye","pap","bog","gut","ito","woe","our","ado","sin","mad","ray","hon","roy","dip","hen","iva","lug","asp","hui","yak","bay","poi","yep","bun","try","lad","elm","nat","wyo","gym","dug","toe","dee","wig","sly","rip","geo","cog","pas","zen","odd","nan","lay","pod","fit","hem","joy","bum","rio","yon","dec","leg","put","sue","dim","pet","yaw","nub","bit","bur","sid","sun","oil","red","doc","moe","caw","eel","dix","cub","end","gem","off","yew","hug","pop","tub","sgt","lid","pun","ton","sol","din","yup","jab","pea","bug","gag","mil","jig","hub","low","did","tin","get","gte","sox","lei","mig","fig","lon","use","ban","flo","nov","jut","bag","mir","sty","lap","two","ins","con","ant","net","tux","ode","stu","mug","cad","nap","gun","fop","tot","sow","sal","sic","ted","wot","del","imp","cob","way","ann","tan","mci","job","wet","ism","err","him","all","pad","hah","hie","aim","ike","jed","ego","mac","baa","min","com","ill","was","cab","ago","ina","big","ilk","gal","tap","duh","ola","ran","lab","top","gob","hot","ora","tia","kip","han","met","hut","she","sac","fed","goo","tee","ell","not","act","gil","rut","ala","ape","rig","cid","god","duo","lin","aid","gel","awl","lag","elf","liz","ref","aha","fib","oho","tho","her","nor","ace","adz","fun","ned","coo","win","tao","coy","van","man","pit","guy","foe","hid","mai","sup","jay","hob","mow","jot","are","pol","arc","lax","aft","alb","len","air","pug","pox","vow","got","meg","zoe","amp","ale","bud","gee","pin","dun","pat","ten","mob"]))