{
  async function squareAsync(n: number): Promise<number> {
    // if (n < 0) {
    //     console.log('Negative number not allowed')
    // }
    return await new Promise<number>((res, rej) => {
      if (n < 0) {
        rej("Negative number not allowed");
      } else {
        setTimeout(() => {
 
            res(n * n);
          }, 1000);
      }
    });
  }
  squareAsync(-5)
    .then((res) => {

        console.log(res);

    }) // Output after 1s: 16
    .catch((err) => {
      console.log(err);
    });
}
