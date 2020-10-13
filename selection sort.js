//SELECTION SORT
document.getElementById('selection_sort_button').addEventListener('click', selectionSort);

function selectionSort(){
  let time = 0;
  let n = arr.length;
  let s = getspeed();
  let speed_var = 50/s;

  for(let i=0;i<n-1;i++){
      let k = i;

    setTimeout(() => {
      arr[i].style.backgroundColor = 'red';
    }, time = time + speed_var);

    for(let j=i+1;j<n;j++){

      setTimeout(() => {
        arr[j].style.backgroundColor = 'yellow';
      }, time = time + speed_var);
      setTimeout(function(){
      if(height[j] < height[k]){
        if(k!=i){
        arr[k].style.backgroundColor = 'blue';
        }
        k = j;
        arr[k].style.backgroundColor = 'red';
      }
      else{
        arr[j].style.backgroundColor = 'blue';
      }
      },time = time + speed_var);

    }
    setTimeout(function(){
      let t = height[k];
      height[k] = height[i];
      height[i] = t;

      arr[i].style.height = `${height[i]}px`;
      arr[k].style.height = `${height[k]}px`;

      arr[k].style.backgroundColor = "blue";

      arr[i].style.backgroundColor = "green";
    },time = time + speed_var);
    }
    setTimeout(function(){
      arr[n-1].style.backgroundColor = "green";
    },time = time + speed_var);
}
