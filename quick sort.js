//QUICK SORT
document.getElementById('quick_sort_button').addEventListener('click', quickSort);

function partition(l,h){

  let pivot = height[l];
  let i = l, j = h;

  do{
    do{i++;}while(height[i] <= pivot);
    do{j--;}while(height[j] > pivot);

    if(i<j){
      let temp = height[i];
      height[i] = height[j];
      height[j] = temp;

      arr[i].style.height = `${height[i]}px`;
      arr[j].style.height = `${height[j]}px`;
    }
  }while(i<j);

  let temp = height[l];
  height[l] = height[j];
  height[j] = temp;

  arr[l].style.height = `${height[l]}px`;
  arr[j].style.height = `${height[j]}px`;

  return j;
}

function quickSort(l,h){
  let j;

  if(l<h){
    j = partition(l,h);
    quickSort(l,j);
    quickSort(j+1,h);
  }
}
