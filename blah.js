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
    var get_file_lines = function get_file_lines(globalStore, _k21, _address145, file_name) {
        var fs$2 = require.call(null, 'fs');
        var fileContents = fs$2.readFileSync(file_name, 'utf8');
        var file_lines$2 = fileContents.toString().split('\n');
        return function () {
            return _k21(globalStore, file_lines$2);
        };
    };
    var car = function car(globalStore, _k17, _address146, array) {
        var _k19 = function (globalStore, _dummy18) {
            return function () {
                return _k17(globalStore, array[0]);
            };
        };
        return function () {
            return ad.eq(array.length, 0) ? function (globalStore, _dummy20) {
                return function () {
                    return _k17(globalStore, 0);
                };
            }(globalStore, console.error('------nothing in the array to get the car for')) : _k19(globalStore, undefined);
        };
    };
    var cdr = function cdr(globalStore, _k13, _address147, array) {
        var _k15 = function (globalStore, _dummy14) {
            return function () {
                return _k13(globalStore, array.slice(1, array.length));
            };
        };
        return function () {
            return ad.eq(array.length, 0) ? function (globalStore, _dummy16) {
                return function () {
                    return _k13(globalStore, 0);
                };
            }(globalStore, console.error('-----nothing in the array to get the cdr for')) : _k15(globalStore, undefined);
        };
    };
    var for_each = function for_each(globalStore, _k5, _address148, k, array) {
        return function () {
            return cdr(globalStore, function (globalStore, _result6) {
                return function () {
                    return ad.eq(_result6.length, 0) ? car(globalStore, function (globalStore, _result8) {
                        return function () {
                            return k(globalStore, function (globalStore, _dummy7) {
                                return function () {
                                    return _k5(globalStore, 0);
                                };
                            }, _address148.concat('_131'), _result8);
                        };
                    }, _address148.concat('_130'), array) : car(globalStore, function (globalStore, _result12) {
                        return function () {
                            return k(globalStore, function (globalStore, _dummy11) {
                                return function () {
                                    return cdr(globalStore, function (globalStore, _result10) {
                                        return function () {
                                            return for_each(globalStore, function (globalStore, _dummy9) {
                                                return function () {
                                                    return _k5(globalStore, 0);
                                                };
                                            }, _address148.concat('_135'), k, _result10);
                                        };
                                    }, _address148.concat('_134'), array);
                                };
                            }, _address148.concat('_133'), _result12);
                        };
                    }, _address148.concat('_132'), array);
                };
            }, _address148.concat('_129'), array);
        };
    };
    return function () {
        return get_file_lines(globalStore, function (globalStore, file_lines) {
            var inqueue = file_lines[0].split('');
            var _dummy4 = console.log(inqueue.length);
            var fs = require.call(null, 'fs');
            var _dummy3 = fs.unlink('out_blah.txt');
            var write_char_to_file = function write_char_to_file(globalStore, _k2, _address149, in_char) {
                var fs$2 = require.call(null, 'fs');
                var fileContents = fs$2.appendFile('out_blah.txt', in_char, 'utf8');
                return function () {
                    return _k2(globalStore, undefined);
                };
            };
            return function () {
                return for_each(globalStore, function (globalStore, _dummy1) {
                    return function () {
                        return _k0(globalStore, 1);
                    };
                }, _address0.concat('_137'), write_char_to_file, inqueue);
            };
        }, _address0.concat('_136'), 'dct_in_golden.txt');
    };
}));

main(__runner__)({}, topK, '');