/*
### Best Time to Buy and Sell Stock

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

**Example 1:**

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

**Example 2:**

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done, i.e. max profit = 0.
```
*/


function maxProfit(prices) {
    let curr_min = prices[0];
    let max_profit = 0;

    for(let i = 1; i < prices.length; i++){
        // can i sell today?

        if(prices[i] > curr_min){
            // you can sell, but check is it better then previous profit
            max_profit = Math.max(max_profit, prices[i] - curr_min);
        }

        // can i buy
        if(prices[i] < curr_min){
            curr_min = prices[i];
        }
    }
    return max_profit;
}

console.log(maxProfit([7,1,5,3,6,4]));