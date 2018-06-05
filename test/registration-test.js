describe('The Registration function' , function(){
  it('Should take in a registration and return it on the all towns list' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('CY 123-123');
    assert.equal(user_regis.whichTown('alltowns'), 'CY 123-123');
  });

  it('Should not take in a registration that is added twice' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('CY 123-123');
    user_regis.regNumbers('CJ 748-745');
    user_regis.regNumbers('CY 123-123');
    assert.deepEqual(user_regis.whichTown('alltowns'), ['CY 123-123', 'CJ 748-745']);
  });

  it('Should take in a registration once regardless of the case of the start string' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('CY 123-123');
    user_regis.regNumbers('CJ 748-745');
    user_regis.regNumbers('cy 123-123');
    assert.deepEqual(user_regis.whichTown('alltowns'), ['CY 123-123', 'CJ 748-745']);
  });

  it('Should take in a registrations from different towns and return it on the all towns list' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('CY 123-123');
    user_regis.regNumbers('CJ 456-456');
    user_regis.regNumbers('CA 999-999');
    assert.deepEqual(user_regis.whichTown('alltowns'), ['CY 123-123', 'CJ 456-456', 'CA 999-999']);
  });

  it('Should take in a registrations from different towns and each at its town' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('CY 123-123');
    user_regis.regNumbers('CJ 456-456');
    user_regis.regNumbers('CA 999-999');
    assert.deepEqual(user_regis.whichTown('capetown'), ['CA 999-999']);
    assert.deepEqual(user_regis.whichTown('paarl'), ['CJ 456-456']);
    assert.deepEqual(user_regis.whichTown('bellville'), ['CY 123-123']);
    assert.deepEqual(user_regis.whichTown('alltowns'), ['CY 123-123', 'CJ 456-456', 'CA 999-999']);
  });

  it('Should take in a registrations and return all in All Towns, then clear the data in the object' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('CY 123-123');
    user_regis.regNumbers('CJ 456-456');
    user_regis.regNumbers('CA 999-999');
    assert.deepEqual(user_regis.whichTown('alltowns'), ['CY 123-123', 'CJ 456-456', 'CA 999-999']);
    assert.deepEqual(user_regis.clearObj(), {})
  });

  it('Should not consider empty regs' , function(){
    var Obj = {};
    var user_regis = Registrator(Obj);
    user_regis.regNumbers('');
    assert.deepEqual(user_regis.whichTown('alltowns'), []);
  });
});