let arr = [];
for (let i = 1; i < 300; i++) {
  arr.push(`Item no: ${i}`);
}

let lastItem = '';

export const fakeServer = qty =>
  new Promise((resolve, reject) => {
    let newArr;
    const lastItemIndex = arr.indexOf(lastItem);
    if (lastItemIndex === arr.length - 1) return resolve('done');

    if (!lastItem) {
      newArr = [...arr].slice(0, qty);
      lastItem = [...newArr].pop();
    } else {
      const newIndex = arr.indexOf(lastItem) + 1;
      newArr = [...arr].slice(newIndex, qty + newIndex);
      lastItem = [...newArr].pop();
    }
    setTimeout(() => {
      resolve(newArr);
    }, 1000);
  });
