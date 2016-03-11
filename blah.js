var webppl = require("/home/polaris/behzad/local/lib/node_modules/webppl/src/main.js");
var __runner__ = function (t) {
    while (t) {
      t = t()
    }
  };
function printWebPPLValue(x) {
  if (isErp(x)) {
    x.print();
  } else {
    console.log(x);
  }
};
function topK(s,x) {
  console.log('\n* Program return value:\n');
  printWebPPLValue(x);
};
var main = (function (p) {
    return function (runTrampoline) {
        return function (s, k, a) {
            var t = p(s, k, a);
            runTrampoline(t);
        };
    };
}(function (globalStore, _k0, _address0) {
    var uniform = function uniform(globalStore, _k218, _address8, a, b) {
        return function () {
            return sample(globalStore, _k218, _address8.concat('_7'), uniformERP, [
                a,
                b
            ]);
        };
    };
    var foo = function foo(globalStore, _k10, _address138, a, b, c, d, e1, e2) {
        var f = ad.add(ad.add(a, b), e1);
        var g = ad.add(ad.add(c, d), e2);
        return function () {
            return _k10(globalStore, ad.mul(g, f));
        };
    };
    var foo_stats2 = function foo_stats2(globalStore, _k2, _address141) {
        return function () {
            return sample(globalStore, function (globalStore, a) {
                return function () {
                    return sample(globalStore, function (globalStore, b) {
                        return function () {
                            return uniform(globalStore, function (globalStore, _result5) {
                                return function () {
                                    return sample(globalStore, function (globalStore, e1) {
                                        return function () {
                                            return sample(globalStore, function (globalStore, e1N) {
                                                return function () {
                                                    return foo(globalStore, function (globalStore, _result3) {
                                                        return function () {
                                                            return foo(globalStore, function (globalStore, _result4) {
                                                                return function () {
                                                                    return _k2(globalStore, ad.sub(_result3, _result4));
                                                                };
                                                            }, _address141.concat('_142'), a, b, e1N);
                                                        };
                                                    }, _address141.concat('_141'), a, b, e1);
                                                };
                                            }, _address141.concat('_140'), bernoulliERP, [0]);
                                        };
                                    }, _address141.concat('_139'), _result5);
                                };
                            }, _address141.concat('_138'), 5, 10);
                        };
                    }, _address141.concat('_137'), bernoulliERP, [0.5]);
                };
            }, _address141.concat('_136'), bernoulliERP, [0.5]);
        };
    };
    return function () {
        return Enumerate(globalStore, function (globalStore, _result1) {
            return function () {
                return _k0(globalStore, console.log(_result1));
            };
        }, _address0.concat('_143'), foo_stats2);
    };
}));

main(__runner__)({}, topK, '');