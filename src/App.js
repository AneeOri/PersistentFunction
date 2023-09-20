/**Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number) */

import "./styles.css";

export default function App() {
  function persistence(num, count) {
    count = count || 0;
    let numStr = num.toString();

    if (numStr.length === 1) {
      return count;
    }
    let new_num = numStr.split("").reduce((acc, val) => {
      return acc * val;
    }, 1);
    return persistence(new_num, count + 1);
  }

  function persistence1(num) {
    let count = 0;
    num = String(num);
    while (num.length > 1) {
      count++;
      num = String([...num].reduce((ac, a) => a * ac, 1));
    }
    return count;
  }

  const persistence2 = (num) => {
    return `${num}`.length > 1
      ? 1 + persistence2(`${num}`.split("").reduce((a, b) => a * +b))
      : 0;
  };

  function persistence3(num, cnt = 0) {
    console.log("holi", cnt);
    let arrayNum = num.toString().split("");
    return arrayNum.length === 1
      ? cnt
      : persistence3(
          arrayNum.reduce((x, y) => x * y),
          ++cnt
        );
  }

  console.log(persistence(98));

  return (
    <div className="App">
      <input />
    </div>
  );
}
