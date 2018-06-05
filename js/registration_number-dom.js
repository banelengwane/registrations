var regElement = document.querySelector(".registration");
var addRegsBtn = document.querySelector(".addRegsBtn");
var resetRegsBtn = document.querySelector(".resetRegsBtn");
var displayArea = document.querySelector(".displayArea");
var selectedTown = document.querySelector(".towns");
var regsInStorage = localStorage.getItem('regsEntered') ? JSON.parse(localStorage.getItem('regsEntered')) : {};
var user = Registrator(regsInStorage);

function carDealer(){
  var userReg = regElement.value;
  var userTown = selectedTown.options[selectedTown.selectedIndex].value;

  if(userReg !== ''){
    if(user.regNumbers(userReg)){
      var regList = Object.keys(user.returnObj() )[Object.keys(user.returnObj()).length - 1];
      console.log(regList);
      var regText = document.createElement('li');
      regText.innerHTML = regList;
      displayArea.appendChild(regText);
      document.getElementById('registration').value = "";
      localStorage.setItem('regsEntered', JSON.stringify(user.returnObj()));
    }else{
      displayArea.innerHTML = 'Please enter the correct format of the registration';
      document.getElementById('registration').value = "";
    }
  }else {
    displayArea.innerHTML = 'Please Enter a Registration in this format: CJ 000-000';
    document.getElementById('registration').value = "";
  }
}
addRegsBtn.addEventListener("click", carDealer);
function filter(town){
    for(var i =0; i <user.whichTown(town).length; i++) {
      var regText = document.createElement('li');
      regText.innerHTML = user.whichTown(town)[i];
      displayArea.appendChild(regText);
    }
}
function theChanger(){
  while(displayArea.hasChildNodes()){
      displayArea.removeChild(displayArea.firstChild);
  }
  if(selectedTown.options[selectedTown.selectedIndex].value === 'capetown'){filter('capetown');}
  else if(selectedTown.options[selectedTown.selectedIndex].value === 'bellville'){filter('bellville');}
  else if(selectedTown.options[selectedTown.selectedIndex].value === 'paarl'){filter('paarl');}
  else if(selectedTown.options[selectedTown.selectedIndex].value === 'alltowns'){filter('alltowns');}
}
function reseter(){
  user.clearObj();
  displayArea.innerHTML = '';
  document.getElementById('registration').value = "";
  localStorage.clear();
}
resetRegsBtn.addEventListener('click', reseter);
