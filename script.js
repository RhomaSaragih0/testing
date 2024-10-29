const navButton = document.getElementById("hidden-check");
const navMenu = document.getElementById("nav-menu");

navButton.addEventListener('change', function() {
  if(navButton.checked) {
    navMenu.style.right = '0px';
  } else {
    navMenu.style.right = '-999px';
  };
});

let data = [21, 53, 1, 40, 90, 200];

function sort(arr) {
  let longArr = arr.length;

  for(let i = 0; i < longArr; i++) {
    for(let j = 0; j < longArr - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      
      }
    }
  }

  console.log(arr);

}

sort(data);