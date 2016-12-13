'use strict';

/**
 * Returns true if word occurrs in the specified word snaking puzzle.
 * Each words can be constructed using "snake" path inside a grid with top, left, right and bottom directions.
 * Each char can be used only once ("snake" should not cross itself).
 *
 * @param {array} puzzle
 * @param {array} searchStr
 * @return {bool}
 *
 * @example
 *   var puzzle = [
 *      'ANGULAR',
 *      'REDNCAE',
 *      'RFIDTCL',
 *      'AGNEGSA',
 *      'YTIRTSP',
 *   ];
 *   'ANGULAR'   => true   (first row)
 *   'REACT'     => true   (starting from the top-right R adn follow the ↓ ← ← ↓ )
 *   'UNDEFINED' => true
 *   'RED'       => true
 *   'STRING'    => true
 *   'CLASS'     => true
 *   'ARRAY'     => true   (first column)
 *   'FUNCTION'  => false
 *   'NULL'      => false
 */
function findStringInSnakingPuzzle(puzzle, searchStr) {
    throw new Error('Not implemented');
}


/**
 * Returns all permutations of the specified string.
 * Assume all chars in the specified string are different.
 * The order of permutations does not matter.
 *
 * @param {string} chars
 * @return {Iterable.<string>} all posible strings constructed with the chars from the specfied string
 *
 * @example
 *    'ab'  => 'ab','ba'
 *    'abc' => 'abc','acb','bac','bca','cab','cba'
 */
function* getPermutations(chars) {

    throw new Error('Not implemented');
}
var fact=1;
function getFactorial(n) {
    if(n==0)
        return fact;
    else
        return n*getFactorial(n-1);
}

/**
 * Returns the most profit from stock quotes.
 * Stock quotes are stores in an array in order of date.
 * The stock profit is the difference in prices in buying and selling stock.
 * Each day, you can either buy one unit of stock, sell any number of stock units you have already bought, or do nothing.
 * Therefore, the most profit is the maximum difference of all pairs in a sequence of stock prices.
 *
 * @param {array} quotes
 * @return {number} max profit
 *
 * @example
 *    [ 1, 2, 3, 4, 5, 6]   => 15  (buy at 1,2,3,4,5 and then sell all at 6)
 *    [ 6, 5, 4, 3, 2, 1]   => 0   (nothing to buy)
 *    [ 1, 6, 5, 10, 8, 7 ] => 18  (buy at 1,6,5 and sell all at 10)
 */
var buyAt=[];
var sellAt=[];
var newSellAt=[];
function getMostProfitFromStockQuotes(quotes) {
//     buyAt=[];
//     sellAt=[];
//     newSellAt=[];
//     var profit=0;
//     for(var i=0;i<quotes.length-1;i++)
//     {
//         for (var j = i + 1; j < quotes.length; j++)
//         {
//             if (quotes[i] < quotes[j])
//             {
//                 buyAt.push(quotes[i]);
//                 sellAt.push(quotes[j]);
//                 break;
//             }
//         }
//     }
//     if(sellAt.length!=0&& buyAt.length!=0)
//     {
//         newSellAt=getNew(buyAt,sellAt);
//
//         newSellAt=removeDup();
//         newSellAt=removeDup1(newSellAt);
//
//         profit=getProfit(buyAt,newSellAt,quotes);
//     }
//     return profit;
//     //throw new Error('Not implemented');
// }
// function getNew()
// {
//     var arr=[];
//     for(var i=0;i<buyAt.length;i++)
//     {
//
//         for(var j=0;j<sellAt.length;j++)
//         {
//             if(buyAt[i]==sellAt[j])
//                 arr=sellAt.splice(j,1);
//         }
//     }
//     return arr;
// }
// function removeDup()
// {
//     var arr=[];
//     for(var i=0;i<sellAt.length;i++)
//     {
//         if(notIn(arr,sellAt[i]))
//             arr.push(sellAt[i]);
//     }
//
//     return arr;
// }
// function removeDup1(ar)
// {
//     var temp=ar;
//     for(var i=0;i<temp.length;i++)
//     {
//         for(var j=0;j<buyAt.length;j++)
//         {
//             if(temp[i]==buyAt[j])
//                 temp.splice(i,1);
//         }
//     }
//     return temp;
// }
//
// function notIn(ar,ele)
// {
//     if(ar.length==0)
//         return true;
//     for(var i=0;i<ar.length;i++)
//     {
//         if(ar[i]==ele)
//             return false;
//     }
//     return true;
// }
//
// function getProfit(b,s,q)
// {
//     var pro=0;
//     for(var i=0;i<b.length;i++)
//     {
//         var k=getSellAtIn(b[i],s,q);
//         pro=pro+(s[k]-b[i]);
//     }
//     return pro;
// }
// function getSellAtIn(ele,s,q)
// {
//     var diffs=[];
//     var eleIndex=q.indexOf(ele);
//     for(var i=0;i<s.length;i++)
//     {
//         var dif=(q.indexOf(s[i])-eleIndex);
//         diffs.push(dif);
//     }
//     return getMinIn(diffs);
// }
//
// function getMinIn(d)
// {
//     var minIn=0;
//     var minVal=0;
//     for(var i=0;i<d.length;i++)
//     {
//         if(i==0)
//         {
//             minVal=d[i];
//             minIn=i;
//         }
//         else if(d[i]<minVal && d[i]>0)
//         {
//             minVal=d[i];
//             minIn=i;
//         }
//
//     }
//     return minIn;
    throw new Error('Not implemented');
}


/**
 * Class representing the url shorting helper.
 * Feel free to implement any algorithm, but do not store link in the key\value stores.
 * The short link can be at least 1.5 times shorter than the original url.
 *
 * @class
 *
 * @example
 *
 *     var urlShortener = new UrlShortener();
 *     var shortLink = urlShortener.encode('https://en.wikipedia.org/wiki/URL_shortening');
 *     var original  = urlShortener.decode(shortLink); // => 'https://en.wikipedia.org/wiki/URL_shortening'
 *
 */
function UrlShortener() {
    this.urlAllowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+
        "abcdefghijklmnopqrstuvwxyz"+
        "0123456789-_.~!*'();:@&=+$,/?#[]";
}

UrlShortener.prototype = {

    encode: function(url) {
        throw new Error('Not implemented');
    },

    decode: function(code) {
        throw new Error('Not implemented');
    }
}


module.exports = {
    findStringInSnakingPuzzle: findStringInSnakingPuzzle,
    getPermutations: getPermutations,
    getMostProfitFromStockQuotes: getMostProfitFromStockQuotes,
    UrlShortener: UrlShortener
};
