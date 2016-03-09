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
    var get_file_lines = function get_file_lines(globalStore, _k20, _address145, file_name) {
        var fs$2 = require.call(null, 'fs');
        var fileContents = fs$2.readFileSync(file_name, 'utf8');
        var file_lines$2 = fileContents.toString().split('\n');
        return function () {
            return _k20(globalStore, file_lines$2);
        };
    };
    var car = function car(globalStore, _k16, _address146, array) {
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
    var cdr = function cdr(globalStore, _k12, _address147, array) {
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
    var for_each = function for_each(globalStore, _k4, _address148, k, array) {
        return function () {
            return cdr(globalStore, function (globalStore, _result5) {
                return function () {
                    return ad.eq(_result5.length, 0) ? car(globalStore, function (globalStore, _result7) {
                        return function () {
                            return k(globalStore, function (globalStore, _dummy6) {
                                return function () {
                                    return _k4(globalStore, 0);
                                };
                            }, _address148.concat('_131'), _result7);
                        };
                    }, _address148.concat('_130'), array) : car(globalStore, function (globalStore, _result11) {
                        return function () {
                            return k(globalStore, function (globalStore, _dummy10) {
                                return function () {
                                    return cdr(globalStore, function (globalStore, _result9) {
                                        return function () {
                                            return for_each(globalStore, function (globalStore, _dummy8) {
                                                return function () {
                                                    return _k4(globalStore, 0);
                                                };
                                            }, _address148.concat('_135'), k, _result9);
                                        };
                                    }, _address148.concat('_134'), array);
                                };
                            }, _address148.concat('_133'), _result11);
                        };
                    }, _address148.concat('_132'), array);
                };
            }, _address148.concat('_129'), array);
        };
    };
    return function () {
        return get_file_lines(globalStore, function (globalStore, file_lines) {
            var inqueue = file_lines[0].split('');
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