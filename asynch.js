function takeSync(fn1, fn2, cb) {
  //...
  state = {
    count: 0,
    hold : {
      a: 0,
      b: 0
    }
  }
  fn1(function(err, num){
    state.hold.a = num;
    state.count++
    if(state.count==2){
      cb(null, state.hold.a, state.hold.b);
    }
  });
  fn2(function(err,num){
      state.hold.b = num;
      state.count++
      if(state.count==2){
        cb(null, state.hold.a, state.hold.b);
      }
  });

};

var foo = function(cb) {
  setTimeout(function() {
    cb(null, 5)
  }, 5000)
};

foo2 = function(cb) {
  setTimeout(function() {
    cb(null, 10);
  }, 1000)
};

takeSync(foo, foo2, function(err, val1, val2) {
  console.log(val1 + val2);
});
