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
    var fs = require.call(null, 'fs');
    var fileContents = fs.readFileSync('input.txt', 'utf8');
    var file_lines = fileContents.toString().split('\n');
    var num_of_lines = file_lines.length;
    var car = function car(globalStore, _k25, _address138, array) {
        var _k27 = function (globalStore, _dummy26) {
            return function () {
                return _k25(globalStore, array[0]);
            };
        };
        return function () {
            return ad.eq(array.length, 0) ? function (globalStore, _dummy28) {
                return function () {
                    return _k25(globalStore, 0);
                };
            }(globalStore, console.error('------nothing in the array to get the car for')) : _k27(globalStore, undefined);
        };
    };
    var cdr = function cdr(globalStore, _k21, _address139, array) {
        var _k23 = function (globalStore, _dummy22) {
            return function () {
                return _k21(globalStore, array.slice(1, array.length));
            };
        };
        return function () {
            return ad.eq(array.length, 0) ? function (globalStore, _dummy24) {
                return function () {
                    return _k21(globalStore, 0);
                };
            }(globalStore, console.error('-----nothing in the array to get the cdr for')) : _k23(globalStore, undefined);
        };
    };
    return function () {
        return car(globalStore, function (globalStore, _result20) {
            var _dummy19 = console.error(_result20);
            return function () {
                return cdr(globalStore, function (globalStore, _result18) {
                    var _dummy17 = console.error(_result18);
                    var for_each = function for_each(globalStore, _k4, _address140, k, array) {
                        var _dummy16 = console.log('*****');
                        return function () {
                            return cdr(globalStore, function (globalStore, _result15) {
                                var _dummy14 = console.log(_result15);
                                var _dummy13 = console.log('*****');
                                return function () {
                                    return cdr(globalStore, function (globalStore, _result5) {
                                        return function () {
                                            return ad.eq(_result5, []) ? car(globalStore, function (globalStore, _result8) {
                                                return function () {
                                                    return k(globalStore, function (globalStore, _dummy7) {
                                                        var _dummy6 = console.log('12123123123');
                                                        return function () {
                                                            return _k4(globalStore, 0);
                                                        };
                                                    }, _address140.concat('_131'), _result8);
                                                };
                                            }, _address140.concat('_130'), array) : car(globalStore, function (globalStore, _result12) {
                                                return function () {
                                                    return k(globalStore, function (globalStore, _dummy11) {
                                                        return function () {
                                                            return cdr(globalStore, function (globalStore, _result10) {
                                                                return function () {
                                                                    return for_each(globalStore, function (globalStore, _dummy9) {
                                                                        return function () {
                                                                            return _k4(globalStore, 0);
                                                                        };
                                                                    }, _address140.concat('_135'), k, _result10);
                                                                };
                                                            }, _address140.concat('_134'), array);
                                                        };
                                                    }, _address140.concat('_133'), _result12);
                                                };
                                            }, _address140.concat('_132'), array);
                                        };
                                    }, _address140.concat('_129'), array);
                                };
                            }, _address140.concat('_128'), array);
                        };
                    };
                    var print_stuff = function print_stuff(globalStore, _k3, _address141, x) {
                        return function () {
                            return _k3(globalStore, console.log(x));
                        };
                    };
                    return function () {
                        return for_each(globalStore, function (globalStore, _dummy2) {
                            var _dummy1 = console.log([
                                3,
                                5,
                                6
                            ].slice(1, 3));
                            return function () {
                                return _k0(globalStore, 1);
                            };
                        }, _address0.concat('_136'), print_stuff, [
                            3,
                            4,
                            7,
                            8
                        ]);
                    };
                }, _address0.concat('_127'), [
                    1,
                    2
                ]);
            };
        }, _address0.concat('_126'), [1]);
    };
}));

main(__runner__)({}, topK, '');