//INSERTION SORT
document.getElementById('insertion_sort_button').addEventListener('click',insertionSort);

function insertionSort(){
  let time = 0;
  let n = arr.length;
  let s = getspeed();
  let speed_var = 50/s;

  for(let i=1;i<n;i++){
    setTimeout(function(){
      arr[i].style.backgroundColor = "yellow";
    },time = time + speed_var);
      let j = i-1;

      while(j>-1 && height[j]>height[i]){
      height[j+1] = height[j];
      setTimeout(function(){
      arr[j+1].style.backgroundColor = "red";
      },time = time + speed_var);

      setTimeout(function(){
      arr[j].style.backgroundColor = "red";
      },time = time + speed_var);

      setTimeout(function(){
      arr[j+1].style.height = `${height[j+1]}px`;
      },time = time + speed_var);

      setTimeout(function(){
      arr[j].style.backgroundColor = "blue";
      },time = time + speed_var);
      j--;
  }
    height[j+1]= height[i];
    setTimeout(function(){
    arr[j+1].style.height = `${height[j+1]}px`;
    },time = time + speed_var);

    for(let t=0;t<i;t++)
        setTimeout(function(){
    arr[j+1].style.backgroundColor = "green";
  },time = time + speed_var);
  }
}
