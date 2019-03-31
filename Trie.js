/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.trie = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.trie;
    for (const char of word) {
        if (node[char] !== undefined)
        {
            node = node[char];
            continue;
        }
        else
        {
            node[char] = {end: false};
            node = node[char];
        }
    }    
    node["end"] = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, prefix) {
    let node = this.trie;

    for (const char of word) {
        if (node[char] !== undefined)
        {
            node = node[char];
            continue;
        }
        return false;
    }   

    return prefix ? true : !!node["end"];
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.search(prefix, true);
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
var obj = new Trie()
obj.insert("apple")
var param_2 = obj.search("apple")
var param_3 = obj.startsWith("app")