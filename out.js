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
    var randomInteger = function randomInteger(globalStore, _k350, _address2, n) {
        return function () {
            return sample(globalStore, _k350, _address2.concat('_1'), randomIntegerERP, [n]);
        };
    };
    var uniform = function uniform(globalStore, _k343, _address8, a, b) {
        return function () {
            return sample(globalStore, _k343, _address8.concat('_7'), uniformERP, [
                a,
                b
            ]);
        };
    };
    var repeat = function repeat(globalStore, _k167, _address124, n, fn) {
        var helper = function helper(globalStore, _k168, _address125, m) {
            return function () {
                return ad.eq(m, 0) ? _k168(globalStore, []) : ad.eq(m, 1) ? fn(globalStore, function (globalStore, _result169) {
                    return function () {
                        return _k168(globalStore, [_result169]);
                    };
                }, _address125.concat('_103')) : function (globalStore, m1) {
                    var m2 = ad.sub(m, m1);
                    return function () {
                        return helper(globalStore, function (globalStore, _result170) {
                            return function () {
                                return helper(globalStore, function (globalStore, _result171) {
                                    return function () {
                                        return _k168(globalStore, _result170.concat(_result171));
                                    };
                                }, _address125.concat('_105'), m2);
                            };
                        }, _address125.concat('_104'), m1);
                    };
                }(globalStore, ad.maths.ceil(ad.div(m, 2)));
            };
        };
        return function () {
            return helper(globalStore, _k167, _address124.concat('_106'), n);
        };
    };
    var bt_array = [
        4,
        10,
        2,
        4,
        5,
        6,
        1,
        6,
        1,
        6,
        1,
        6,
        3,
        1,
        1,
        2,
        0
    ];
    var get_inqueue_from_file = 0;
    var _k135 = function (globalStore, number_of_repetition) {
        var error_distribution_foo = function error_distribution_foo(globalStore, _k134, _address138, lower_bound, upper_bound) {
            return function () {
                return uniform(globalStore, _k134, _address138.concat('_126'), lower_bound, upper_bound);
            };
        };
        var get_file_lines = function get_file_lines(globalStore, _k133, _address139, file_name) {
            var fs = require.call(null, 'fs');
            var fileContents = fs.readFileSync(file_name, 'utf8');
            var file_lines = fileContents.toString().split('\n');
            return function () {
                return _k133(globalStore, file_lines);
            };
        };
        var car = function car(globalStore, _k129, _address140, array) {
            var _k131 = function (globalStore, _dummy130) {
                return function () {
                    return _k129(globalStore, array[0]);
                };
            };
            return function () {
                return ad.eq(array.length, 0) ? function (globalStore, _dummy132) {
                    return function () {
                        return _k129(globalStore, 0);
                    };
                }(globalStore, console.error('------nothing in the array to get the car for')) : _k131(globalStore, undefined);
            };
        };
        var cdr = function cdr(globalStore, _k125, _address141, array) {
            var _k127 = function (globalStore, _dummy126) {
                return function () {
                    return _k125(globalStore, array.slice(1, array.length));
                };
            };
            return function () {
                return ad.eq(array.length, 0) ? function (globalStore, _dummy128) {
                    return function () {
                        return _k125(globalStore, 0);
                    };
                }(globalStore, console.error('-----nothing in the array to get the cdr for')) : _k127(globalStore, undefined);
            };
        };
        var accumulate = function accumulate(globalStore, _k110, _address142, array) {
            return function () {
                return cdr(globalStore, function (globalStore, _result111) {
                    return function () {
                        return ad.eq(_result111.length, 0) ? function (globalStore, _k113) {
                            return function () {
                                return car(globalStore, function (globalStore, _result114) {
                                    return function () {
                                        return ad.eq(_result114, Infinity) ? function (globalStore, _dummy116) {
                                            var _dummy115 = console.log('ERROR: an element of the array is Infinity, this might result in undesired results');
                                            return function () {
                                                return _k113(globalStore, console.log('---------'));
                                            };
                                        }(globalStore, console.log('---------')) : _k113(globalStore, undefined);
                                    };
                                }, _address142.concat('_128'), array);
                            };
                        }(globalStore, function (globalStore, _dummy112) {
                            return function () {
                                return car(globalStore, _k110, _address142.concat('_129'), array);
                            };
                        }) : function (globalStore, _k121) {
                            return function () {
                                return car(globalStore, function (globalStore, _result122) {
                                    return function () {
                                        return ad.eq(_result122, Infinity) ? function (globalStore, _dummy124) {
                                            var _dummy123 = console.log('ERROR: an element of the array is Infinity, this might result in undesired results');
                                            return function () {
                                                return _k121(globalStore, console.log('---------'));
                                            };
                                        }(globalStore, console.log('---------')) : _k121(globalStore, undefined);
                                    };
                                }, _address142.concat('_130'), array);
                            };
                        }(globalStore, function (globalStore, _dummy120) {
                            return function () {
                                return cdr(globalStore, function (globalStore, _result119) {
                                    return function () {
                                        return accumulate(globalStore, function (globalStore, _result117) {
                                            return function () {
                                                return car(globalStore, function (globalStore, _result118) {
                                                    return function () {
                                                        return _k110(globalStore, ad.add(_result117, _result118));
                                                    };
                                                }, _address142.concat('_133'), array);
                                            };
                                        }, _address142.concat('_132'), _result119);
                                    };
                                }, _address142.concat('_131'), array);
                            };
                        });
                    };
                }, _address142.concat('_127'), array);
            };
        };
        var expectation = function expectation(globalStore, _k108, _address143, array) {
            return function () {
                return accumulate(globalStore, function (globalStore, _result109) {
                    return function () {
                        return _k108(globalStore, ad.div(_result109, array.length));
                    };
                }, _address143.concat('_134'), array);
            };
        };
        var mean = function mean(globalStore, _k107, _address144, array) {
            return function () {
                return expectation(globalStore, _k107, _address144.concat('_135'), array);
            };
        };
        var variance_helper = function variance_helper(globalStore, _k101, _address145, array, mean$2) {
            return function () {
                return cdr(globalStore, function (globalStore, _result102) {
                    return function () {
                        return ad.eq(_result102.length, 0) ? car(globalStore, function (globalStore, _result103) {
                            return function () {
                                return _k101(globalStore, ad.maths.pow(ad.sub(_result103, mean$2), 2));
                            };
                        }, _address145.concat('_137'), array) : cdr(globalStore, function (globalStore, _result106) {
                            return function () {
                                return variance_helper(globalStore, function (globalStore, _result104) {
                                    return function () {
                                        return car(globalStore, function (globalStore, _result105) {
                                            return function () {
                                                return _k101(globalStore, ad.add(_result104, ad.maths.pow(ad.sub(_result105, mean$2), 2)));
                                            };
                                        }, _address145.concat('_140'), array);
                                    };
                                }, _address145.concat('_139'), _result106, mean$2);
                            };
                        }, _address145.concat('_138'), array);
                    };
                }, _address145.concat('_136'), array);
            };
        };
        var variance = function variance(globalStore, _k99, _address146, array) {
            return function () {
                return mean(globalStore, function (globalStore, mean_val) {
                    return function () {
                        return variance_helper(globalStore, function (globalStore, _result100) {
                            return function () {
                                return _k99(globalStore, ad.div(_result100, ad.sub(array.length, 1)));
                            };
                        }, _address146.concat('_142'), array, mean_val);
                    };
                }, _address146.concat('_141'), array);
            };
        };
        var std = function std(globalStore, _k97, _address147, array) {
            return function () {
                return mean(globalStore, function (globalStore, mean_val) {
                    return function () {
                        return variance(globalStore, function (globalStore, _result98) {
                            return function () {
                                return _k97(globalStore, ad.maths.pow(_result98, 0.5));
                            };
                        }, _address147.concat('_144'), array);
                    };
                }, _address147.concat('_143'), array);
            };
        };
        var for_loop = function for_loop(globalStore, _k94, _address148, k, context, counter, upper_bound) {
            return function () {
                return ad.eq(counter, ad.sub(upper_bound, 1)) ? k(globalStore, function (globalStore, _result95) {
                    return function () {
                        return _k94(globalStore, [_result95]);
                    };
                }, _address148.concat('_145'), context, counter) : for_loop(globalStore, function (globalStore, second_part) {
                    return function () {
                        return k(globalStore, function (globalStore, _result96) {
                            var first_part = [_result96];
                            return function () {
                                return _k94(globalStore, first_part.concat(second_part));
                            };
                        }, _address148.concat('_147'), context, counter);
                    };
                }, _address148.concat('_146'), k, context, ad.add(counter, 1), upper_bound);
            };
        };
        var for_loop_general = function for_loop_general(globalStore, _k85, _address150, k, context, counter, upper_bound) {
            return function () {
                return ad.eq(counter, ad.sub(upper_bound, 1)) ? k(globalStore, _k85, _address150.concat('_155'), context, counter) : k(globalStore, function (globalStore, _result86) {
                    return function () {
                        return for_loop_general(globalStore, _k85, _address150.concat('_157'), k, _result86, ad.add(counter, 1), upper_bound);
                    };
                }, _address150.concat('_156'), context, counter);
            };
        };
        var for_one_helper = function for_one_helper(globalStore, _k76, _address151, k, for_one_context, counter, upper_bound, index) {
            var _k82 = function (globalStore, _dummy81) {
                return function () {
                    return ad.eq(counter, ad.sub(upper_bound, 1)) ? function (globalStore, _k77) {
                        return function () {
                            return ad.eq(counter, index) ? k(globalStore, function (globalStore, _result78) {
                                return function () {
                                    return _k77(globalStore, [_result78]);
                                };
                            }, _address151.concat('_158'), for_one_context, counter) : _k77(globalStore, [for_one_context.array[counter]]);
                        };
                    }(globalStore, function (globalStore, return_val) {
                        return function () {
                            return _k76(globalStore, return_val);
                        };
                    }) : for_one_helper(globalStore, function (globalStore, second_part) {
                        var _k79 = function (globalStore, first_part) {
                            return function () {
                                return _k76(globalStore, first_part.concat(second_part));
                            };
                        };
                        return function () {
                            return ad.eq(counter, index) ? k(globalStore, function (globalStore, _result80) {
                                return function () {
                                    return _k79(globalStore, [_result80]);
                                };
                            }, _address151.concat('_160'), for_one_context, counter) : _k79(globalStore, [for_one_context.array[counter]]);
                        };
                    }, _address151.concat('_159'), k, for_one_context, ad.add(counter, 1), upper_bound, index);
                };
            };
            return function () {
                return ad.geq(index, upper_bound) ? function (globalStore, _dummy84) {
                    var _dummy83 = console.log('index is', index);
                    return function () {
                        return _k76(globalStore, !1);
                    };
                }(globalStore, console.log('***index out of bound****')) : _k82(globalStore, undefined);
            };
        };
        var for_one = function for_one(globalStore, _k75, _address152, k, for_one_context, index) {
            return function () {
                return for_one_helper(globalStore, _k75, _address152.concat('_161'), k, for_one_context, 0, for_one_context.array.length, index);
            };
        };
        var multiply_round = function multiply_round(globalStore, _k73, _address153, a, b, num_of_bits) {
            var abs_a = ad.maths.abs(a);
            var abs_b = ad.maths.abs(b);
            return function () {
                return ad.eq(num_of_bits, 0) ? _k73(globalStore, ad.mul(a, b)) : function (globalStore, step) {
                    return function () {
                        return error_distribution_foo(globalStore, function (globalStore, _result74) {
                            return function () {
                                return _k73(globalStore, ad.add(ad.mul(a, b), _result74));
                            };
                        }, _address153.concat('_162'), ad.mul(ad.sub(0, 1), ad.div(step, 2)), ad.div(step, 2));
                    };
                }(globalStore, ad.maths.pow(2, ad.sub(num_of_bits, 1)));
            };
        };
        var add_round = function add_round(globalStore, _k71, _address154, a, b, num_of_bits) {
            return function () {
                return ad.eq(num_of_bits, 0) ? _k71(globalStore, ad.add(a, b)) : function (globalStore, step) {
                    return function () {
                        return error_distribution_foo(globalStore, function (globalStore, _result72) {
                            return function () {
                                return _k71(globalStore, ad.add(ad.add(a, b), _result72));
                            };
                        }, _address154.concat('_163'), ad.mul(ad.sub(0, 1), ad.div(step, 2)), ad.div(step, 2));
                    };
                }(globalStore, ad.maths.pow(2, ad.sub(num_of_bits, 1)));
            };
        };
        var c1d4 = 362;
        var c1d8 = 473;
        var c3d8 = 196;
        var c1d16 = 502;
        var c3d16 = 426;
        var c5d16 = 284;
        var c7d16 = 100;
        var subtract_two_arrays = function subtract_two_arrays(globalStore, _k63, _address155, array1, array2) {
            return function () {
                return cdr(globalStore, function (globalStore, _result64) {
                    return function () {
                        return ad.eq(_result64.length, 0) ? car(globalStore, function (globalStore, _result65) {
                            return function () {
                                return car(globalStore, function (globalStore, _result66) {
                                    return function () {
                                        return _k63(globalStore, [ad.maths.abs(ad.sub(_result65, _result66))]);
                                    };
                                }, _address155.concat('_166'), array2);
                            };
                        }, _address155.concat('_165'), array1) : cdr(globalStore, function (globalStore, _result69) {
                            return function () {
                                return cdr(globalStore, function (globalStore, _result70) {
                                    return function () {
                                        return subtract_two_arrays(globalStore, function (globalStore, second_part) {
                                            return function () {
                                                return car(globalStore, function (globalStore, _result67) {
                                                    return function () {
                                                        return car(globalStore, function (globalStore, _result68) {
                                                            var first_part = [ad.maths.abs(ad.sub(_result67, _result68))];
                                                            return function () {
                                                                return _k63(globalStore, first_part.concat(second_part));
                                                            };
                                                        }, _address155.concat('_171'), array2);
                                                    };
                                                }, _address155.concat('_170'), array1);
                                            };
                                        }, _address155.concat('_169'), _result69, _result70);
                                    };
                                }, _address155.concat('_168'), array2);
                            };
                        }, _address155.concat('_167'), array1);
                    };
                }, _address155.concat('_164'), array1);
            };
        };
        var convert_to_char = function convert_to_char(globalStore, _k62, _address156, input, counter) {
            return function () {
                return _k62(globalStore, input[counter].charCodeAt(0));
            };
        };
        var assign_array = function assign_array(globalStore, _k61, _address157, context) {
            return function () {
                return _k61(globalStore, context.MSCALE_val);
            };
        };
        var LS = function LS(globalStore, _k60, _address158, r, s) {
            return function () {
                return _k60(globalStore, r << s);
            };
        };
        var RS = function RS(globalStore, _k59, _address159, r, s) {
            return function () {
                return _k59(globalStore, r >> s);
            };
        };
        var MSCALE = function MSCALE(globalStore, _k58, _address160, r) {
            return function () {
                return _k58(globalStore, r >> 9);
            };
        };
        var CLIP_helper = function CLIP_helper(globalStore, _k57, _address161, tmp) {
            return function () {
                return ad.lt(tmp, 0) ? ad.eq(ad.sub(tmp, 4) % 8, 0) ? _k57(globalStore, ad.maths.floor(ad.div(ad.sub(tmp, 4), 8))) : _k57(globalStore, ad.add(ad.maths.floor(ad.div(ad.sub(tmp, 4), 8)), 1)) : _k57(globalStore, ad.maths.floor(ad.div(ad.add(tmp, 4), 8)));
            };
        };
        var CLIP = function CLIP(globalStore, _k56, _address162, tval) {
            return function () {
                return CLIP_helper(globalStore, function (globalStore, tval) {
                    return function () {
                        return ad.lt(tval, ad.sub(0, 1023)) ? _k56(globalStore, ad.sub(0, 1023)) : ad.gt(tval, 1023) ? _k56(globalStore, 1023) : _k56(globalStore, tval);
                    };
                }, _address162.concat('_172'), tval);
            };
        };
        var dct_first_loop_body = function dct_first_loop_body(globalStore, _k36, _address163, context, i) {
            var _k55 = function (globalStore, _dummy54) {
                var v0 = context.inqueue[ad.add(ad.mul(i, 8), 0)];
                var v1 = context.inqueue[ad.add(ad.mul(i, 8), 1)];
                var v2 = context.inqueue[ad.add(ad.mul(i, 8), 2)];
                var v3 = context.inqueue[ad.add(ad.mul(i, 8), 3)];
                var v4 = context.inqueue[ad.add(ad.mul(i, 8), 4)];
                var v5 = context.inqueue[ad.add(ad.mul(i, 8), 5)];
                var v6 = context.inqueue[ad.add(ad.mul(i, 8), 6)];
                var v7 = context.inqueue[ad.add(ad.mul(i, 8), 7)];
                return function () {
                    return LS(globalStore, function (globalStore, a0) {
                        return function () {
                            return add_round(globalStore, function (globalStore, _result53) {
                                return function () {
                                    return LS(globalStore, function (globalStore, c3) {
                                        return function () {
                                            return add_round(globalStore, function (globalStore, _result52) {
                                                return function () {
                                                    return LS(globalStore, function (globalStore, a1) {
                                                        return function () {
                                                            return add_round(globalStore, function (globalStore, _result51) {
                                                                return function () {
                                                                    return LS(globalStore, function (globalStore, c2) {
                                                                        return function () {
                                                                            return add_round(globalStore, function (globalStore, _result50) {
                                                                                return function () {
                                                                                    return LS(globalStore, function (globalStore, a2) {
                                                                                        return function () {
                                                                                            return add_round(globalStore, function (globalStore, _result49) {
                                                                                                return function () {
                                                                                                    return LS(globalStore, function (globalStore, c1) {
                                                                                                        return function () {
                                                                                                            return add_round(globalStore, function (globalStore, _result48) {
                                                                                                                return function () {
                                                                                                                    return LS(globalStore, function (globalStore, a3) {
                                                                                                                        return function () {
                                                                                                                            return add_round(globalStore, function (globalStore, _result47) {
                                                                                                                                return function () {
                                                                                                                                    return LS(globalStore, function (globalStore, c0) {
                                                                                                                                        return function () {
                                                                                                                                            return add_round(globalStore, function (globalStore, b0) {
                                                                                                                                                return function () {
                                                                                                                                                    return add_round(globalStore, function (globalStore, b1) {
                                                                                                                                                        var b2 = ad.add(a1, ad.mul(ad.sub(0, 1), a2));
                                                                                                                                                        var b3 = ad.add(a0, ad.mul(ad.sub(0, 1), a3));
                                                                                                                                                        var b0b1Add1 = ad.add(b0, b1);
                                                                                                                                                        return function () {
                                                                                                                                                            return multiply_round(globalStore, function (globalStore, _result46) {
                                                                                                                                                                return function () {
                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result45) {
                                                                                                                                                                        return function () {
                                                                                                                                                                            return for_one(globalStore, function (globalStore, tmp_1) {
                                                                                                                                                                                var b0b1Sub1 = ad.add(b0, ad.mul(ad.sub(0, 1), b1));
                                                                                                                                                                                return function () {
                                                                                                                                                                                    return multiply_round(globalStore, function (globalStore, _result44) {
                                                                                                                                                                                        return function () {
                                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result43) {
                                                                                                                                                                                                return function () {
                                                                                                                                                                                                    return for_one(globalStore, function (globalStore, tmp_2) {
                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                            return multiply_round(globalStore, function (globalStore, c3d8b2Mul) {
                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                    return multiply_round(globalStore, function (globalStore, c1d8b3Mul) {
                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                            return multiply_round(globalStore, function (globalStore, c3d8b3Mul) {
                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                    return multiply_round(globalStore, function (globalStore, c1d8b2Mul) {
                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result42) {
                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                    return for_one(globalStore, function (globalStore, tmp_3) {
                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result41) {
                                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                                    return for_one(globalStore, function (globalStore, tmp_4) {
                                                                                                                                                                                                                                                                        var c2c1Temp = ad.add(c2, ad.mul(ad.sub(0, 1), c1));
                                                                                                                                                                                                                                                                        var c2c1Temp2 = ad.add(c2, c1);
                                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, b0_2) {
                                                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, b1_2) {
                                                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                                                            return add_round(globalStore, function (globalStore, a0_2) {
                                                                                                                                                                                                                                                                                                var a1_2 = ad.sub(c0, b0_2);
                                                                                                                                                                                                                                                                                                var a2_2 = ad.sub(c3, b1_2);
                                                                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                                                                    return add_round(globalStore, function (globalStore, a3_2) {
                                                                                                                                                                                                                                                                                                        var c7d16a0Mul = ad.mul(c7d16, a0_2);
                                                                                                                                                                                                                                                                                                        var c1d16a3Mul = ad.mul(c1d16, a3_2);
                                                                                                                                                                                                                                                                                                        var c3d16a2Mul = ad.mul(c3d16, a2_2);
                                                                                                                                                                                                                                                                                                        var c5d16a1Mul = ad.mul(c5d16, a1_2);
                                                                                                                                                                                                                                                                                                        var c5d16a2Mul = ad.mul(c5d16, a2_2);
                                                                                                                                                                                                                                                                                                        var c3d16a1Mul = ad.mul(c3d16, a1_2);
                                                                                                                                                                                                                                                                                                        var c7d16a3Mul = ad.mul(c7d16, a3_2);
                                                                                                                                                                                                                                                                                                        var c1d16a0Mul = ad.mul(c1d16, a0_2);
                                                                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result40) {
                                                                                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                                                                                    return for_one(globalStore, function (globalStore, tmp_5) {
                                                                                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result39) {
                                                                                                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                                                                                                    return for_one(globalStore, function (globalStore, tmp_6) {
                                                                                                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result38) {
                                                                                                                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                                                                                                                    return for_one(globalStore, function (globalStore, tmp_7) {
                                                                                                                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result37) {
                                                                                                                                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                                                                                                                                    return for_one(globalStore, function (globalStore, tmp_8) {
                                                                                                                                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                                                                                                                                            return _k36(globalStore, {
                                                                                                                                                                                                                                                                                                                                                                                inqueue: context.inqueue,
                                                                                                                                                                                                                                                                                                                                                                                dcten: context.dcten,
                                                                                                                                                                                                                                                                                                                                                                                qen: context.qen,
                                                                                                                                                                                                                                                                                                                                                                                tmp: tmp_8,
                                                                                                                                                                                                                                                                                                                                                                                bt: context.bt
                                                                                                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                                                                                                    }, _address163.concat('_215'), assign_array, {
                                                                                                                                                                                                                                                                                                                                                                        array: tmp_7,
                                                                                                                                                                                                                                                                                                                                                                        MSCALE_val: _result37
                                                                                                                                                                                                                                                                                                                                                                    }, ad.add(i, 56));
                                                                                                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                                                                                                            }, _address163.concat('_214'), ad.sub(c7d16a3Mul, c1d16a0Mul));
                                                                                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                                                                                    }, _address163.concat('_213'), assign_array, {
                                                                                                                                                                                                                                                                                                                                                        array: tmp_6,
                                                                                                                                                                                                                                                                                                                                                        MSCALE_val: _result38
                                                                                                                                                                                                                                                                                                                                                    }, ad.add(i, 40));
                                                                                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                                                                                            }, _address163.concat('_212'), ad.add(c3d16a1Mul, c5d16a2Mul));
                                                                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                                                                    }, _address163.concat('_211'), assign_array, {
                                                                                                                                                                                                                                                                                                                                        array: tmp_5,
                                                                                                                                                                                                                                                                                                                                        MSCALE_val: _result39
                                                                                                                                                                                                                                                                                                                                    }, ad.add(i, 24));
                                                                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                                                                            }, _address163.concat('_210'), ad.sub(c3d16a2Mul, c5d16a1Mul));
                                                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                                                    }, _address163.concat('_209'), assign_array, {
                                                                                                                                                                                                                                                                                                                        array: tmp_4,
                                                                                                                                                                                                                                                                                                                        MSCALE_val: _result40
                                                                                                                                                                                                                                                                                                                    }, ad.add(i, 8));
                                                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                                                            }, _address163.concat('_208'), ad.add(c7d16a0Mul, c1d16a3Mul));
                                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                                    }, _address163.concat('_207'), c3, b1_2, context.bt[16]);
                                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                                            }, _address163.concat('_206'), c0, b0_2, context.bt[15]);
                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                    }, _address163.concat('_205'), ad.mul(c1d4, c2c1Temp2));
                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                            }, _address163.concat('_204'), ad.mul(c1d4, c2c1Temp));
                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                    }, _address163.concat('_203'), assign_array, {
                                                                                                                                                                                                                                                                        array: tmp_3,
                                                                                                                                                                                                                                                                        MSCALE_val: _result41
                                                                                                                                                                                                                                                                    }, ad.add(i, 48));
                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                            }, _address163.concat('_202'), ad.add(c3d8b3Mul, ad.mul(ad.sub(0, 1), c1d8b2Mul)));
                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                    }, _address163.concat('_201'), assign_array, {
                                                                                                                                                                                                                                                        array: tmp_2,
                                                                                                                                                                                                                                                        MSCALE_val: _result42
                                                                                                                                                                                                                                                    }, ad.add(i, 16));
                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                            }, _address163.concat('_200'), ad.add(c3d8b2Mul, c1d8b3Mul));
                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                    }, _address163.concat('_199'), c1d8, b2, context.bt[14]);
                                                                                                                                                                                                                                };
                                                                                                                                                                                                                            }, _address163.concat('_198'), c3d8, b3, context.bt[13]);
                                                                                                                                                                                                                        };
                                                                                                                                                                                                                    }, _address163.concat('_197'), c1d8, b3, context.bt[12]);
                                                                                                                                                                                                                };
                                                                                                                                                                                                            }, _address163.concat('_196'), c3d8, b2, context.bt[11]);
                                                                                                                                                                                                        };
                                                                                                                                                                                                    }, _address163.concat('_195'), assign_array, {
                                                                                                                                                                                                        array: tmp_1,
                                                                                                                                                                                                        MSCALE_val: _result43
                                                                                                                                                                                                    }, ad.add(i, 32));
                                                                                                                                                                                                };
                                                                                                                                                                                            }, _address163.concat('_194'), _result44);
                                                                                                                                                                                        };
                                                                                                                                                                                    }, _address163.concat('_193'), c1d4, b0b1Sub1, context.bt[10]);
                                                                                                                                                                                };
                                                                                                                                                                            }, _address163.concat('_192'), assign_array, {
                                                                                                                                                                                array: context.tmp,
                                                                                                                                                                                MSCALE_val: _result45
                                                                                                                                                                            }, i);
                                                                                                                                                                        };
                                                                                                                                                                    }, _address163.concat('_191'), _result46);
                                                                                                                                                                };
                                                                                                                                                            }, _address163.concat('_190'), c1d4, b0b1Add1, context.bt[9]);
                                                                                                                                                        };
                                                                                                                                                    }, _address163.concat('_189'), a1, a2, context.bt[8]);
                                                                                                                                                };
                                                                                                                                            }, _address163.concat('_188'), a0, a3, context.bt[7]);
                                                                                                                                        };
                                                                                                                                    }, _address163.concat('_187'), _result47, 2);
                                                                                                                                };
                                                                                                                            }, _address163.concat('_186'), v3, ad.mul(ad.sub(0, 1), v4), context.bt[6]);
                                                                                                                        };
                                                                                                                    }, _address163.concat('_185'), _result48, 2);
                                                                                                                };
                                                                                                            }, _address163.concat('_184'), v3, v4, context.bt[5]);
                                                                                                        };
                                                                                                    }, _address163.concat('_183'), _result49, 2);
                                                                                                };
                                                                                            }, _address163.concat('_182'), v2, ad.mul(ad.sub(0, 1), v5), context.bt[4]);
                                                                                        };
                                                                                    }, _address163.concat('_181'), _result50, 2);
                                                                                };
                                                                            }, _address163.concat('_180'), v2, v5, context.bt[3]);
                                                                        };
                                                                    }, _address163.concat('_179'), _result51, 2);
                                                                };
                                                            }, _address163.concat('_178'), v1, ad.mul(ad.sub(0, 1), v6), context.bt[2]);
                                                        };
                                                    }, _address163.concat('_177'), _result52, 2);
                                                };
                                            }, _address163.concat('_176'), v1, v6, context.bt[1]);
                                        };
                                    }, _address163.concat('_175'), _result53, 2);
                                };
                            }, _address163.concat('_174'), v0, ad.mul(ad.sub(0, 1), v7), context.bt[0]);
                        };
                    }, _address163.concat('_173'), ad.add(v0, v7), 2);
                };
            };
            return function () {
                return ad.eq(context.dcten, !1) ? _k36(globalStore, undefined) : _k55(globalStore, undefined);
            };
        };
        var dct_second_loop_body = function dct_second_loop_body(globalStore, _k19, _address164, context, i) {
            var v0 = context.tmp[ad.add(ad.mul(i, 8), 0)];
            var v1 = context.tmp[ad.add(ad.mul(i, 8), 1)];
            var v2 = context.tmp[ad.add(ad.mul(i, 8), 2)];
            var v3 = context.tmp[ad.add(ad.mul(i, 8), 3)];
            var v4 = context.tmp[ad.add(ad.mul(i, 8), 4)];
            var v5 = context.tmp[ad.add(ad.mul(i, 8), 5)];
            var v6 = context.tmp[ad.add(ad.mul(i, 8), 6)];
            var v7 = context.tmp[ad.add(ad.mul(i, 8), 7)];
            return function () {
                return RS(globalStore, function (globalStore, c3) {
                    return function () {
                        return RS(globalStore, function (globalStore, a0) {
                            return function () {
                                return RS(globalStore, function (globalStore, c2) {
                                    return function () {
                                        return RS(globalStore, function (globalStore, a1) {
                                            return function () {
                                                return RS(globalStore, function (globalStore, c1) {
                                                    return function () {
                                                        return RS(globalStore, function (globalStore, a2) {
                                                            return function () {
                                                                return RS(globalStore, function (globalStore, c0) {
                                                                    return function () {
                                                                        return RS(globalStore, function (globalStore, a3) {
                                                                            var b0 = ad.add(a0, a3);
                                                                            var b1 = ad.add(a1, a2);
                                                                            var b2 = ad.add(a1, ad.mul(ad.sub(0, 1), a2));
                                                                            var b3 = ad.add(a0, ad.mul(ad.sub(0, 1), a3));
                                                                            var c1c2Sub = ad.add(c2, ad.mul(ad.sub(0, 1), c1));
                                                                            var c1c2Add = ad.add(c2, c1);
                                                                            return function () {
                                                                                return MSCALE(globalStore, function (globalStore, tb0) {
                                                                                    return function () {
                                                                                        return MSCALE(globalStore, function (globalStore, tb1) {
                                                                                            var ta0 = ad.add(c0, tb0);
                                                                                            var ta1 = ad.add(c0, ad.mul(ad.sub(0, 1), tb0));
                                                                                            var ta2 = ad.add(c3, ad.mul(ad.sub(0, 1), tb1));
                                                                                            var ta3 = ad.add(c3, tb1);
                                                                                            var b0b1Add = ad.add(b0, b1);
                                                                                            var b0b1Sub = ad.add(b0, ad.mul(ad.sub(0, 1), b1));
                                                                                            var c3d8b2Mul = ad.mul(c3d8, b2);
                                                                                            var c1d8b3Mul = ad.mul(c1d8, b3);
                                                                                            var c3d8b3Mul = ad.mul(c3d8, b3);
                                                                                            var c1d8b2Mul = ad.mul(c1d8, b2);
                                                                                            return function () {
                                                                                                return MSCALE(globalStore, function (globalStore, _result35) {
                                                                                                    return function () {
                                                                                                        return CLIP(globalStore, function (globalStore, _result34) {
                                                                                                            return function () {
                                                                                                                return for_one(globalStore, function (globalStore, outqueue_0) {
                                                                                                                    return function () {
                                                                                                                        return MSCALE(globalStore, function (globalStore, _result33) {
                                                                                                                            return function () {
                                                                                                                                return CLIP(globalStore, function (globalStore, _result32) {
                                                                                                                                    return function () {
                                                                                                                                        return for_one(globalStore, function (globalStore, outqueue_1) {
                                                                                                                                            return function () {
                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result31) {
                                                                                                                                                    return function () {
                                                                                                                                                        return CLIP(globalStore, function (globalStore, _result30) {
                                                                                                                                                            return function () {
                                                                                                                                                                return for_one(globalStore, function (globalStore, outqueue_2) {
                                                                                                                                                                    return function () {
                                                                                                                                                                        return MSCALE(globalStore, function (globalStore, _result29) {
                                                                                                                                                                            return function () {
                                                                                                                                                                                return CLIP(globalStore, function (globalStore, _result28) {
                                                                                                                                                                                    return function () {
                                                                                                                                                                                        return for_one(globalStore, function (globalStore, outqueue_3) {
                                                                                                                                                                                            return function () {
                                                                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result27) {
                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                        return CLIP(globalStore, function (globalStore, _result26) {
                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                return for_one(globalStore, function (globalStore, outqueue_4) {
                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                        return MSCALE(globalStore, function (globalStore, _result25) {
                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                return CLIP(globalStore, function (globalStore, _result24) {
                                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                                        return for_one(globalStore, function (globalStore, outqueue_5) {
                                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result23) {
                                                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                                                        return CLIP(globalStore, function (globalStore, _result22) {
                                                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                                                return for_one(globalStore, function (globalStore, outqueue_6) {
                                                                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                                                                        return MSCALE(globalStore, function (globalStore, _result21) {
                                                                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                                                                return CLIP(globalStore, function (globalStore, _result20) {
                                                                                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                                                                                        return for_one(globalStore, function (globalStore, outqueue_7) {
                                                                                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                                                                                return _k19(globalStore, {
                                                                                                                                                                                                                                                                                                    tmp: context.tmp,
                                                                                                                                                                                                                                                                                                    outqueue: outqueue_7
                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                                                                        }, _address164.concat('_249'), assign_array, {
                                                                                                                                                                                                                                                                                            array: outqueue_6,
                                                                                                                                                                                                                                                                                            MSCALE_val: _result20
                                                                                                                                                                                                                                                                                        }, ad.add(ad.mul(i, 8), 7));
                                                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                                                }, _address164.concat('_248'), _result21);
                                                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                                                        }, _address164.concat('_247'), ad.sub(ad.mul(c7d16, ta3), ad.mul(c1d16, ta0)));
                                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                                }, _address164.concat('_246'), assign_array, {
                                                                                                                                                                                                                                                                    array: outqueue_5,
                                                                                                                                                                                                                                                                    MSCALE_val: _result22
                                                                                                                                                                                                                                                                }, ad.add(ad.mul(i, 8), 5));
                                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                                        }, _address164.concat('_245'), _result23);
                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                }, _address164.concat('_244'), ad.add(ad.mul(c3d16, ta1), ad.mul(c5d16, ta2)));
                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                        }, _address164.concat('_243'), assign_array, {
                                                                                                                                                                                                                                            array: outqueue_4,
                                                                                                                                                                                                                                            MSCALE_val: _result24
                                                                                                                                                                                                                                        }, ad.add(ad.mul(i, 8), 3));
                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                }, _address164.concat('_242'), _result25);
                                                                                                                                                                                                                            };
                                                                                                                                                                                                                        }, _address164.concat('_241'), ad.sub(ad.mul(c3d16, ta2), ad.mul(c5d16, ta1)));
                                                                                                                                                                                                                    };
                                                                                                                                                                                                                }, _address164.concat('_240'), assign_array, {
                                                                                                                                                                                                                    array: outqueue_3,
                                                                                                                                                                                                                    MSCALE_val: _result26
                                                                                                                                                                                                                }, ad.add(ad.mul(i, 8), 1));
                                                                                                                                                                                                            };
                                                                                                                                                                                                        }, _address164.concat('_239'), _result27);
                                                                                                                                                                                                    };
                                                                                                                                                                                                }, _address164.concat('_238'), ad.add(ad.mul(c7d16, ta0), ad.mul(c1d16, ta3)));
                                                                                                                                                                                            };
                                                                                                                                                                                        }, _address164.concat('_237'), assign_array, {
                                                                                                                                                                                            array: outqueue_2,
                                                                                                                                                                                            MSCALE_val: _result28
                                                                                                                                                                                        }, ad.add(ad.mul(i, 8), 6));
                                                                                                                                                                                    };
                                                                                                                                                                                }, _address164.concat('_236'), _result29);
                                                                                                                                                                            };
                                                                                                                                                                        }, _address164.concat('_235'), ad.sub(c3d8b3Mul, c1d8b2Mul));
                                                                                                                                                                    };
                                                                                                                                                                }, _address164.concat('_234'), assign_array, {
                                                                                                                                                                    array: outqueue_1,
                                                                                                                                                                    MSCALE_val: _result30
                                                                                                                                                                }, ad.add(ad.mul(i, 8), 2));
                                                                                                                                                            };
                                                                                                                                                        }, _address164.concat('_233'), _result31);
                                                                                                                                                    };
                                                                                                                                                }, _address164.concat('_232'), ad.add(c3d8b2Mul, c1d8b3Mul));
                                                                                                                                            };
                                                                                                                                        }, _address164.concat('_231'), assign_array, {
                                                                                                                                            array: outqueue_0,
                                                                                                                                            MSCALE_val: _result32
                                                                                                                                        }, ad.add(ad.mul(i, 8), 4));
                                                                                                                                    };
                                                                                                                                }, _address164.concat('_230'), _result33);
                                                                                                                            };
                                                                                                                        }, _address164.concat('_229'), ad.mul(c1d4, b0b1Sub));
                                                                                                                    };
                                                                                                                }, _address164.concat('_228'), assign_array, {
                                                                                                                    array: context.outqueue,
                                                                                                                    MSCALE_val: _result34
                                                                                                                }, ad.mul(i, 8));
                                                                                                            };
                                                                                                        }, _address164.concat('_227'), _result35);
                                                                                                    };
                                                                                                }, _address164.concat('_226'), ad.mul(c1d4, b0b1Add));
                                                                                            };
                                                                                        }, _address164.concat('_225'), ad.mul(c1d4, c1c2Add));
                                                                                    };
                                                                                }, _address164.concat('_224'), ad.mul(c1d4, c1c2Sub));
                                                                            };
                                                                        }, _address164.concat('_223'), ad.add(v3, v4), 1);
                                                                    };
                                                                }, _address164.concat('_222'), ad.add(v3, ad.mul(ad.sub(0, 1), v4)), 1);
                                                            };
                                                        }, _address164.concat('_221'), ad.add(v2, v5), 1);
                                                    };
                                                }, _address164.concat('_220'), ad.add(v2, ad.mul(ad.sub(0, 1), v5)), 1);
                                            };
                                        }, _address164.concat('_219'), ad.add(v1, v6), 1);
                                    };
                                }, _address164.concat('_218'), ad.add(v1, ad.mul(ad.sub(0, 1), v6)), 1);
                            };
                        }, _address164.concat('_217'), ad.add(v0, v7), 1);
                    };
                }, _address164.concat('_216'), ad.add(v0, ad.mul(ad.sub(0, 1), v7)), 1);
            };
        };
        var dct = function dct(globalStore, _k18, _address165, inqueue, dcten, qen, tmp, bt, outqueue) {
            var first_loop_context = {
                inqueue: inqueue,
                dcten: dcten,
                qen: qen,
                tmp: tmp,
                bt: bt
            };
            return function () {
                return for_loop_general(globalStore, function (globalStore, dct_first_loop_result) {
                    var second_loop_context = {
                        tmp: dct_first_loop_result.tmp,
                        outqueue: outqueue
                    };
                    return function () {
                        return for_loop_general(globalStore, function (globalStore, dct_second_loop_result) {
                            return function () {
                                return _k18(globalStore, dct_second_loop_result.outqueue);
                            };
                        }, _address165.concat('_251'), dct_second_loop_body, second_loop_context, 0, 8);
                    };
                }, _address165.concat('_250'), dct_first_loop_body, first_loop_context, 0, 8);
            };
        };
        var get_one_sample_from_dct = function get_one_sample_from_dct(globalStore, _k5, _address166) {
            return function () {
                return get_file_lines(globalStore, function (globalStore, file_lines) {
                    var _k15 = function (globalStore, inqueue) {
                        return function () {
                            return for_loop(globalStore, function (globalStore, tmp) {
                                return function () {
                                    return for_loop(globalStore, function (globalStore, outqueue) {
                                        var qen = !0;
                                        var dcten = qen;
                                        return function () {
                                            return for_loop(globalStore, function (globalStore, bt_no_error) {
                                                return function () {
                                                    return dct(globalStore, function (globalStore, accurate) {
                                                        return function () {
                                                            return dct(globalStore, function (globalStore, inaccurate) {
                                                                var _k11 = function (globalStore, _dummy10) {
                                                                    return function () {
                                                                        return subtract_two_arrays(globalStore, function (globalStore, error) {
                                                                            return function () {
                                                                                return accumulate(globalStore, function (globalStore, _result6) {
                                                                                    return function () {
                                                                                        return ad.eq(_result6, 0) ? function (globalStore, _dummy7) {
                                                                                            return function () {
                                                                                                return _k5(globalStore, Infinity);
                                                                                            };
                                                                                        }(globalStore, console.log('Can not have an input with no errors, this results in SNR=infinity')) : std(globalStore, function (globalStore, _result8) {
                                                                                            return function () {
                                                                                                return std(globalStore, function (globalStore, _result9) {
                                                                                                    return function () {
                                                                                                        return _k5(globalStore, ad.div(_result8, _result9));
                                                                                                    };
                                                                                                }, _address166.concat('_264'), error);
                                                                                            };
                                                                                        }, _address166.concat('_263'), accurate);
                                                                                    };
                                                                                }, _address166.concat('_262'), error);
                                                                            };
                                                                        }, _address166.concat('_261'), accurate, inaccurate);
                                                                    };
                                                                };
                                                                return function () {
                                                                    return get_inqueue_from_file ? _k11(globalStore, console.log(accurate)) : _k11(globalStore, undefined);
                                                                };
                                                            }, _address166.concat('_260'), inqueue, dcten, qen, tmp, bt_array, outqueue);
                                                        };
                                                    }, _address166.concat('_259'), inqueue, dcten, qen, tmp, bt_no_error, outqueue);
                                                };
                                            }, _address166.concat('_258'), function (globalStore, _k12, _address170) {
                                                return function () {
                                                    return _k12(globalStore, 0);
                                                };
                                            }, [], 0, bt_array.length);
                                        };
                                    }, _address166.concat('_257'), function (globalStore, _k13, _address169) {
                                        return function () {
                                            return _k13(globalStore, 1);
                                        };
                                    }, [], 0, 64);
                                };
                            }, _address166.concat('_256'), function (globalStore, _k14, _address168) {
                                return function () {
                                    return _k14(globalStore, 1);
                                };
                            }, [], 0, 64);
                        };
                    };
                    return function () {
                        return ad.eq(get_inqueue_from_file, 1) ? for_loop(globalStore, _k15, _address166.concat('_253'), convert_to_char, file_lines[0].split(''), 0, 64) : for_loop(globalStore, _k15, _address166.concat('_255'), function (globalStore, _k16, _address167) {
                            return function () {
                                return randomInteger(globalStore, function (globalStore, _result17) {
                                    return function () {
                                        return _k16(globalStore, ad.add(_result17, 2));
                                    };
                                }, _address167.concat('_254'), 253);
                            };
                        }, [], 0, 64);
                    };
                }, _address166.concat('_252'), 'dct_in_golden.txt');
            };
        };
        var main = function main(globalStore, _k1, _address171) {
            return function () {
                return repeat(globalStore, function (globalStore, snr_results) {
                    return function () {
                        return get_inqueue_from_file ? _k1(globalStore, undefined) : mean(globalStore, function (globalStore, _result4) {
                            var _dummy3 = console.log('mean of snr', _result4);
                            return function () {
                                return std(globalStore, function (globalStore, _result2) {
                                    return function () {
                                        return _k1(globalStore, console.log('std of snr', _result2));
                                    };
                                }, _address171.concat('_267'), snr_results);
                            };
                        }, _address171.concat('_266'), snr_results);
                    };
                }, _address171.concat('_265'), number_of_repetition, get_one_sample_from_dct);
            };
        };
        return function () {
            return main(globalStore, _k0, _address0.concat('_268'));
        };
    };
    return function () {
        return ad.eq(get_inqueue_from_file, 1) ? _k135(globalStore, 1) : _k135(globalStore, 10);
    };
}));

main(__runner__)({}, topK, '');