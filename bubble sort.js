//BUBBLE SORT
document.getElementById('bubble_sort_button').addEventListener('click', bubbleSort);

function bubbleSort() {
  let time = 0;
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {

    for (let j = 0; j < n - i - 1; j++) {

      setTimeout(function() {
        arr[j].style.backgroundColor = "red";
      }, time = time + 1);

      if (height[j] > height[j + 1]) {
        setTimeout(function() {
          arr[j].style.backgroundColor = "yellow";
        }, time = time + 1);
        setTimeout(function() {
          arr[j + 1].style.backgroundColor = "yellow";
        }, time = time + 1);

        let t = height[j];
        height[j] = height[j+1];
        height[j+1] = t;

        setTimeout(function() {
          arr[j].style.height = height[j] + "px";
        }, time = time + 1);
        setTimeout(function() {
          arr[j + 1].style.height = height[j+1] + "px";
        }, time = time + 1);

      }
        setTimeout(function() {
        arr[j].style.backgroundColor = "blue";
      }, time = time + 1);

    }
    setTimeout(function() {
      arr[j].style.backgroundColor = "green";
    }, time = time + 1);
  }
}
