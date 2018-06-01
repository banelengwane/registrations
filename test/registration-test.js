describe('The Registration function' , function(){
  it('Should take in a registration and return it on the all towns list' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('CY 1234');
    assert.equal(user_regis.whichTown('alltowns'), 'CY 1234');
  });

  it('Should not take in a registration that is added twice' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('CY 1234');
    user_regis.regNumbers('CJ 74856');
    user_regis.regNumbers('CY 1234');
    assert.deepEqual(user_regis.whichTown('alltowns'), ['CY 1234', 'CJ 74856']);
  });

  it('Should take in a registration once regardless of the case of the start string' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('CY 1234');
    user_regis.regNumbers('CJ 74856');
    user_regis.regNumbers('cy 1234');
    assert.deepEqual(user_regis.whichTown('alltowns'), ['CY 1234', 'CJ 74856']);
  });

  it('Should take in a registrations from different towns and return it on the all towns list' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('CY 1234');
    user_regis.regNumbers('CJ 4568');
    user_regis.regNumbers('CA 9999');
    assert.deepEqual(user_regis.whichTown('alltowns'), ['CY 1234', 'CJ 4568', 'CA 9999']);
  });

  it('Should take in a registrations from different towns and each at its town' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('CY 1234');
    user_regis.regNumbers('CJ 4568');
    user_regis.regNumbers('CA 9999');
    assert.deepEqual(user_regis.whichTown('capetown'), ['CA 9999']);
    assert.deepEqual(user_regis.whichTown('paarl'), ['CJ 4568']);
    assert.deepEqual(user_regis.whichTown('bellville'), ['CY 1234']);
    assert.deepEqual(user_regis.whichTown('alltowns'), ['CY 1234', 'CJ 4568', 'CA 9999']);
  });

  it('Should take in a registrations and return all in All Towns, then clear the data in the object' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('CY 1234');
    user_regis.regNumbers('CJ 4568');
    user_regis.regNumbers('CA 9999');
    assert.deepEqual(user_regis.whichTown('alltowns'), ['CY 1234', 'CJ 4568', 'CA 9999']);
    assert.deepEqual(user_regis.clearObj(), {})
  });
});
