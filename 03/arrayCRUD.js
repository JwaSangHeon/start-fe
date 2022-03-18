
function create(){
  var newArray = ['운동', '게임'];
  return newArray;
}

var array = create();

function read(array){
  array.forEach(element => {
    console.log(element);
  });
}

function update(newElement){
  array = array.map((element) => {
    if (element === newElement) {
      return '공부';
    }
    return element;
  });
}

function deletefun(deleteElement){
  array = array.filter(function(element) {
    return element !== deleteElement;
  });
}