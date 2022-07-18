/**
 * @param {string[]} book
 */
 var WordsFrequency = function(book) {
    this.map = {}
     for(let i=0;i<book.length;i++){
         //console.log(this.map)
         this.map[book[i]] = ((book[i] in this.map)?this.map[book[i]]+1:1)
        //  console.log((this.map[book[i]]?this.map[book[i]]+1:0))
     }
};

/** 
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function(word) {
    //console.log(this.map)
    return (this.map[word]||0)
};

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */