// --- Part Two ---
// Amidst the chaos, you notice that exactly one claim doesn't overlap by even a single square inch of fabric with any other claim. If you can somehow draw attention to it, maybe the Elves will be able to make Santa's suit after all!

// For example, in the claims above, only claim 3 is intact after all claims are made.

// What is the ID of the only claim that doesn't overlap?

let arr = [[3, 5, 5, 2, 2], [1, 1, 3, 4, 4], [2, 3, 1, 4, 4]];
//[id(0), right(1), top(2), width(3), height(4)]

//top right corner: arr[i][1], arr[i][2] - x,y coordinates
//bottom left corner: (arr[i][1] + arr[i][3]), (arr[i][2] + arr[i][4]) - x, y coordinates

function overlap(arr){
  let unique = 0;

  for (let i = 0; i < arr.length; i++){

    let topRightXCoord = arr[i][1];
    let topRightYCoord = arr[i][2];
    let bottomLeftXCoord = (arr[i][1] + arr[i][3]);
    let bottomLeftYCoord = (arr[i][2] + arr[i][4]);


    for (let j = 0; j < arr.length; j++){
      //will cycle through each x coordinates of the j array
      if( i !== j){
        for (let x = arr[j][1]; x <= (arr[j][1] + arr[j][3]); x++){
          let targetX = (topRightXCoord <= x && x <= bottomLeftXCoord);
          if (targetX){
            // if x is in the target, cycle through the y coordinates
            for (let y = arr[j][2]; y <= (arr[j][2] + arr[j][4]); y++){
              let targetY = (topRightYCoord <= y && y <= bottomLeftYCoord);
              if (targetY){
                console.log('hit');
              } else {
                unique = arr[j][0];
                console.log('unique', arr[j][0]);
                break;
              }
          }
          } else {
            unique = arr[i][0];
            console.log('unique', arr[i][0]);
          }
        }
      }
    }
  }
  return unique;
}

console.log(overlap(arr));