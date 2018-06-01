function Registrator(sto){
  var regObj = sto || {};

  function regNumbers(reg){
    //registration validation
    // if(!reg){
    //   return 'Please enter a valid registration';
    // }

    if(reg.startsWith('CA') || reg.startsWith('CY') || reg.startsWith('CJ')){

      if(regObj[reg] === undefined){
        regObj[reg] = 0;
      }
      if(regObj[reg] === 1){}
      else{
        regObj[reg] += 1;
      }
    }

  }

  function whichTown(town){
    var cpt = [];
    var bel = [];
    var par = [];
    var all = [];

    //filter for cape town
    if(town === 'capetown'){
      for(var key in regObj){
        if(key.startsWith('CA')){
          cpt.push(key);
        }
      }
      return cpt;
    }
    //filter for Bellville
    if(town === 'bellville'){
      for(var key in regObj){
        if(key.startsWith('CY')){
          bel.push(key);
        }
      }
      return bel;
    }

    //filter for paarl
    if(town === 'paarl'){
      for(var key in regObj){
        if(key.startsWith('CJ')){
          par.push(key);
        }
      }
      return par;
    }

    //filter for All
    if(town === 'alltowns'){
      for(var key in regObj){
        all.push(key);
      }
      return all;
    }

  }
  function clearObj(){
    regObj = {};
  }

  function returnObj(){
    return regObj;
  }



  return{
    whichTown,
    returnObj,
    clearObj,
    regNumbers
  }
}
