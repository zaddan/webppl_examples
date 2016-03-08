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
    var return_file_lines = function return_file_lines(globalStore, _k20, _address138, file_name) {
        var fs = require.call(null, 'fs');
        var _dummy21 = console.error(file_name);
        var file_lines = fileContents.toString().split('\n');
        return function () {
            return _k20(globalStore, file_lines);
        };
    };
    var car = function car(globalStore, _k16, _address139, array) {
        var _k18 = function (globalStore, _dummy17) {
            return function () {
                return _k16(globalStore, array[0]);
            };
        };
        return function () {
            return ad.eq(array.length, 0) ? function (globalStore, _dummy19) {
                return function () {
                    return _k16(globalStore, 0);
                };
            }(globalStore, console.error('------nothing in the array to get the car for')) : _k18(globalStore, undefined);
        };
    };
    var cdr = function cdr(globalStore, _k12, _address140, array) {
        var _k14 = function (globalStore, _dummy13) {
            return function () {
                return _k12(globalStore, array.slice(1, array.length));
            };
        };
        return function () {
            return ad.eq(array.length, 0) ? function (globalStore, _dummy15) {
                return function () {
                    return _k12(globalStore, 0);
                };
            }(globalStore, console.error('-----nothing in the array to get the cdr for')) : _k14(globalStore, undefined);
        };
    };
    var for_each = function for_each(globalStore, _k4, _address141, k, array) {
        return function () {
            return cdr(globalStore, function (globalStore, _result5) {
                return function () {
                    return ad.eq(_result5.length, 0) ? car(globalStore, function (globalStore, _result7) {
                        return function () {
                            return k(globalStore, function (globalStore, _dummy6) {
                                return function () {
                                    return _k4(globalStore, 0);
                                };
                            }, _address141.concat('_128'), _result7);
                        };
                    }, _address141.concat('_127'), array) : car(globalStore, function (globalStore, _result11) {
                        return function () {
                            return k(globalStore, function (globalStore, _dummy10) {
                                return function () {
                                    return cdr(globalStore, function (globalStore, _result9) {
                                        return function () {
                                            return for_each(globalStore, function (globalStore, _dummy8) {
                                                return function () {
                                                    return _k4(globalStore, 0);
                                                };
                                            }, _address141.concat('_132'), k, _result9);
                                        };
                                    }, _address141.concat('_131'), array);
                                };
                            }, _address141.concat('_130'), _result11);
                        };
                    }, _address141.concat('_129'), array);
                };
            }, _address141.concat('_126'), array);
        };
    };
    var print_stuff = function print_stuff(globalStore, _k3, _address142, x) {
        return function () {
            return _k3(globalStore, console.log(x));
        };
    };
    return function () {
        return for_each(globalStore, function (globalStore, _dummy2) {
            return function () {
                return return_file_lines(globalStore, function (globalStore, _dummy1) {
                    return function () {
                        return _k0(globalStore, 1);
                    };
                }, _address0.concat('_134'), 'input.txt');
            };
        }, _address0.concat('_133'), print_stuff, [
            3,
            4,
            7,
            8
        ]);
    };
}));

main(__runner__)({}, topK, '');