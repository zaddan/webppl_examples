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
    var randomInteger = function randomInteger(globalStore, _k345, _address2, n) {
        return function () {
            return sample(globalStore, _k345, _address2.concat('_1'), randomIntegerERP, [n]);
        };
    };
    var uniform = function uniform(globalStore, _k338, _address8, a, b) {
        return function () {
            return sample(globalStore, _k338, _address8.concat('_7'), uniformERP, [
                a,
                b
            ]);
        };
    };
    var plus = function plus(globalStore, _k306, _address26, a, b) {
        return function () {
            return _k306(globalStore, ad.add(a, b));
        };
    };
    var idF = function idF(globalStore, _k292, _address40, x) {
        return function () {
            return _k292(globalStore, x);
        };
    };
    var expectation = function expectation(globalStore, _k283, _address46, erp, func) {
        var _k286 = function (globalStore, f) {
            var supp = erp.support([]);
            return function () {
                return mapReduce1(globalStore, _k283, _address46.concat('_20'), plus, function (globalStore, _k284, _address47, s) {
                    return function () {
                        return f(globalStore, function (globalStore, _result285) {
                            return function () {
                                return _k284(globalStore, ad.mul(ad.maths.exp(erp.score([], s)), _result285));
                            };
                        }, _address47.concat('_19'), s);
                    };
                }, supp);
            };
        };
        return function () {
            return func ? _k286(globalStore, func) : _k286(globalStore, idF);
        };
    };
    var reduce = function reduce(globalStore, _k236, _address82, fn, init, ar) {
        var n = ar.length;
        var helper = function helper(globalStore, _k237, _address83, i) {
            return function () {
                return ad.peq(i, n) ? _k237(globalStore, init) : helper(globalStore, function (globalStore, _result238) {
                    return function () {
                        return fn(globalStore, _k237, _address83.concat('_48'), ar[i], _result238);
                    };
                }, _address83.concat('_47'), ad.add(i, 1));
            };
        };
        return function () {
            return helper(globalStore, _k236, _address82.concat('_49'), 0);
        };
    };
    var mapReduce1 = function mapReduce1(globalStore, _k228, _address86, f, g, ar) {
        return function () {
            return g(globalStore, function (globalStore, _result231) {
                return function () {
                    return reduce(globalStore, _k228, _address86.concat('_57'), function (globalStore, _k229, _address87, a, b) {
                        return function () {
                            return g(globalStore, function (globalStore, _result230) {
                                return function () {
                                    return f(globalStore, _k229, _address87.concat('_55'), _result230, b);
                                };
                            }, _address87.concat('_54'), a);
                        };
                    }, _result231, ar.slice(0, ad.sub(0, 1)));
                };
            }, _address86.concat('_56'), ar[ad.sub(ar.length, 1)]);
        };
    };
    var repeat = function repeat(globalStore, _k162, _address124, n, fn) {
        var helper = function helper(globalStore, _k163, _address125, m) {
            return function () {
                return ad.eq(m, 0) ? _k163(globalStore, []) : ad.eq(m, 1) ? fn(globalStore, function (globalStore, _result164) {
                    return function () {
                        return _k163(globalStore, [_result164]);
                    };
                }, _address125.concat('_103')) : function (globalStore, m1) {
                    var m2 = ad.sub(m, m1);
                    return function () {
                        return helper(globalStore, function (globalStore, _result165) {
                            return function () {
                                return helper(globalStore, function (globalStore, _result166) {
                                    return function () {
                                        return _k163(globalStore, _result165.concat(_result166));
                                    };
                                }, _address125.concat('_105'), m2);
                            };
                        }, _address125.concat('_104'), m1);
                    };
                }(globalStore, ad.maths.ceil(ad.div(m, 2)));
            };
        };
        return function () {
            return helper(globalStore, _k162, _address124.concat('_106'), n);
        };
    };
    var get_file_lines = function get_file_lines(globalStore, _k130, _address138, file_name) {
        var fs = require.call(null, 'fs');
        var fileContents = fs.readFileSync(file_name, 'utf8');
        var file_lines = fileContents.toString().split('\n');
        return function () {
            return _k130(globalStore, file_lines);
        };
    };
    var car = function car(globalStore, _k126, _address139, array) {
        var _k128 = function (globalStore, _dummy127) {
            return function () {
                return _k126(globalStore, array[0]);
            };
        };
        return function () {
            return ad.eq(array.length, 0) ? function (globalStore, _dummy129) {
                return function () {
                    return _k126(globalStore, 0);
                };
            }(globalStore, console.error('------nothing in the array to get the car for')) : _k128(globalStore, undefined);
        };
    };
    var cdr = function cdr(globalStore, _k122, _address140, array) {
        var _k124 = function (globalStore, _dummy123) {
            return function () {
                return _k122(globalStore, array.slice(1, array.length));
            };
        };
        return function () {
            return ad.eq(array.length, 0) ? function (globalStore, _dummy125) {
                return function () {
                    return _k122(globalStore, 0);
                };
            }(globalStore, console.error('-----nothing in the array to get the cdr for')) : _k124(globalStore, undefined);
        };
    };
    var accumulate = function accumulate(globalStore, _k107, _address141, array) {
        return function () {
            return cdr(globalStore, function (globalStore, _result108) {
                return function () {
                    return ad.eq(_result108.length, 0) ? function (globalStore, _k110) {
                        return function () {
                            return car(globalStore, function (globalStore, _result111) {
                                return function () {
                                    return ad.eq(_result111, Infinity) ? function (globalStore, _dummy113) {
                                        var _dummy112 = console.log('an element of the array is Infinity, this might result in undesired results');
                                        return function () {
                                            return _k110(globalStore, console.log('---------'));
                                        };
                                    }(globalStore, console.log('---------')) : _k110(globalStore, undefined);
                                };
                            }, _address141.concat('_127'), array);
                        };
                    }(globalStore, function (globalStore, _dummy109) {
                        return function () {
                            return car(globalStore, _k107, _address141.concat('_128'), array);
                        };
                    }) : function (globalStore, _k118) {
                        return function () {
                            return car(globalStore, function (globalStore, _result119) {
                                return function () {
                                    return ad.eq(_result119, Infinity) ? function (globalStore, _dummy121) {
                                        var _dummy120 = console.log('an element of the array is Infinity, this might result in undesired results');
                                        return function () {
                                            return _k118(globalStore, console.log('---------'));
                                        };
                                    }(globalStore, console.log('---------')) : _k118(globalStore, undefined);
                                };
                            }, _address141.concat('_129'), array);
                        };
                    }(globalStore, function (globalStore, _dummy117) {
                        return function () {
                            return cdr(globalStore, function (globalStore, _result116) {
                                return function () {
                                    return accumulate(globalStore, function (globalStore, _result114) {
                                        return function () {
                                            return car(globalStore, function (globalStore, _result115) {
                                                return function () {
                                                    return _k107(globalStore, ad.add(_result114, _result115));
                                                };
                                            }, _address141.concat('_132'), array);
                                        };
                                    }, _address141.concat('_131'), _result116);
                                };
                            }, _address141.concat('_130'), array);
                        };
                    });
                };
            }, _address141.concat('_126'), array);
        };
    };
    var expectation = function expectation(globalStore, _k105, _address142, array) {
        return function () {
            return accumulate(globalStore, function (globalStore, _result106) {
                return function () {
                    return _k105(globalStore, ad.div(_result106, array.length));
                };
            }, _address142.concat('_133'), array);
        };
    };
    var mean = function mean(globalStore, _k104, _address143, array) {
        return function () {
            return expectation(globalStore, _k104, _address143.concat('_134'), array);
        };
    };
    var variance_helper = function variance_helper(globalStore, _k98, _address144, array, mean$2) {
        return function () {
            return cdr(globalStore, function (globalStore, _result99) {
                return function () {
                    return ad.eq(_result99.length, 0) ? car(globalStore, function (globalStore, _result100) {
                        return function () {
                            return _k98(globalStore, ad.maths.pow(ad.sub(_result100, mean$2), 2));
                        };
                    }, _address144.concat('_136'), array) : cdr(globalStore, function (globalStore, _result103) {
                        return function () {
                            return variance_helper(globalStore, function (globalStore, _result101) {
                                return function () {
                                    return car(globalStore, function (globalStore, _result102) {
                                        return function () {
                                            return _k98(globalStore, ad.add(_result101, ad.maths.pow(ad.sub(_result102, mean$2), 2)));
                                        };
                                    }, _address144.concat('_139'), array);
                                };
                            }, _address144.concat('_138'), _result103, mean$2);
                        };
                    }, _address144.concat('_137'), array);
                };
            }, _address144.concat('_135'), array);
        };
    };
    var variance = function variance(globalStore, _k96, _address145, array) {
        return function () {
            return mean(globalStore, function (globalStore, mean_val) {
                return function () {
                    return variance_helper(globalStore, function (globalStore, _result97) {
                        return function () {
                            return _k96(globalStore, ad.div(_result97, ad.sub(array.length, 1)));
                        };
                    }, _address145.concat('_141'), array, mean_val);
                };
            }, _address145.concat('_140'), array);
        };
    };
    var std = function std(globalStore, _k94, _address146, array) {
        return function () {
            return mean(globalStore, function (globalStore, mean_val) {
                return function () {
                    return variance(globalStore, function (globalStore, _result95) {
                        return function () {
                            return _k94(globalStore, ad.maths.pow(_result95, 0.5));
                        };
                    }, _address146.concat('_143'), array);
                };
            }, _address146.concat('_142'), array);
        };
    };
    var for_loop = function for_loop(globalStore, _k91, _address147, k, context, counter, upper_bound) {
        return function () {
            return ad.eq(counter, ad.sub(upper_bound, 1)) ? k(globalStore, function (globalStore, _result92) {
                return function () {
                    return _k91(globalStore, [_result92]);
                };
            }, _address147.concat('_144'), context, counter) : for_loop(globalStore, function (globalStore, second_part) {
                return function () {
                    return k(globalStore, function (globalStore, _result93) {
                        var first_part = [_result93];
                        return function () {
                            return _k91(globalStore, first_part.concat(second_part));
                        };
                    }, _address147.concat('_146'), context, counter);
                };
            }, _address147.concat('_145'), k, context, ad.add(counter, 1), upper_bound);
        };
    };
    var for_loop_general = function for_loop_general(globalStore, _k82, _address149, k, context, counter, upper_bound) {
        return function () {
            return ad.eq(counter, ad.sub(upper_bound, 1)) ? k(globalStore, _k82, _address149.concat('_154'), context, counter) : k(globalStore, function (globalStore, _result83) {
                return function () {
                    return for_loop_general(globalStore, _k82, _address149.concat('_156'), k, _result83, ad.add(counter, 1), upper_bound);
                };
            }, _address149.concat('_155'), context, counter);
        };
    };
    var for_one_helper = function for_one_helper(globalStore, _k73, _address150, k, for_one_context, counter, upper_bound, index) {
        var _k79 = function (globalStore, _dummy78) {
            return function () {
                return ad.eq(counter, ad.sub(upper_bound, 1)) ? function (globalStore, _k74) {
                    return function () {
                        return ad.eq(counter, index) ? k(globalStore, function (globalStore, _result75) {
                            return function () {
                                return _k74(globalStore, [_result75]);
                            };
                        }, _address150.concat('_157'), for_one_context, counter) : _k74(globalStore, [for_one_context.array[counter]]);
                    };
                }(globalStore, function (globalStore, return_val) {
                    return function () {
                        return _k73(globalStore, return_val);
                    };
                }) : for_one_helper(globalStore, function (globalStore, second_part) {
                    var _k76 = function (globalStore, first_part) {
                        return function () {
                            return _k73(globalStore, first_part.concat(second_part));
                        };
                    };
                    return function () {
                        return ad.eq(counter, index) ? k(globalStore, function (globalStore, _result77) {
                            return function () {
                                return _k76(globalStore, [_result77]);
                            };
                        }, _address150.concat('_159'), for_one_context, counter) : _k76(globalStore, [for_one_context.array[counter]]);
                    };
                }, _address150.concat('_158'), k, for_one_context, ad.add(counter, 1), upper_bound, index);
            };
        };
        return function () {
            return ad.geq(index, upper_bound) ? function (globalStore, _dummy81) {
                var _dummy80 = console.log('index is', index);
                return function () {
                    return _k73(globalStore, !1);
                };
            }(globalStore, console.log('***index out of bound****')) : _k79(globalStore, undefined);
        };
    };
    var for_one = function for_one(globalStore, _k72, _address151, k, for_one_context, index) {
        return function () {
            return for_one_helper(globalStore, _k72, _address151.concat('_160'), k, for_one_context, 0, for_one_context.array.length, index);
        };
    };
    var add_round = function add_round(globalStore, _k62, _address153, a, b, Nia) {
        var weight = ad.sub(ad.maths.pow(2, Nia), 1);
        var iap_a = weight & a;
        var _k66 = function (globalStore, a_op) {
            var iap_b = weight & b;
            var _k65 = function (globalStore, b_op) {
                var step = ad.maths.pow(2, Nia);
                var _dummy64 = console.log('step/2 is', ad.div(step, 2));
                return function () {
                    return uniform(globalStore, function (globalStore, _result63) {
                        return function () {
                            return _k62(globalStore, ad.add(ad.add(a, b), _result63));
                        };
                    }, _address153.concat('_161'), ad.mul(ad.sub(0, 1), ad.div(step, 2)), ad.div(step, 2));
                };
            };
            return function () {
                return ad.eq(iap_b >> ad.sub(Nia, 1), 1) ? _k65(globalStore, ad.add(b >> Nia, 1)) : _k65(globalStore, b >> Nia);
            };
        };
        return function () {
            return ad.eq(iap_a >> ad.sub(Nia, 1), 1) ? _k66(globalStore, ad.add(a >> Nia, 1)) : _k66(globalStore, a >> Nia);
        };
    };
    var br_array = [
        4,
        10
    ];
    var get_inqueue_from_file = 0;
    var _k61 = function (globalStore, number_of_repetition) {
        var c1d4 = 362;
        var c1d8 = 473;
        var c3d8 = 196;
        var c1d16 = 502;
        var c3d16 = 426;
        var c5d16 = 284;
        var c7d16 = 100;
        var subtract_two_arrays = function subtract_two_arrays(globalStore, _k53, _address154, array1, array2) {
            return function () {
                return cdr(globalStore, function (globalStore, _result54) {
                    return function () {
                        return ad.eq(_result54.length, 0) ? car(globalStore, function (globalStore, _result55) {
                            return function () {
                                return car(globalStore, function (globalStore, _result56) {
                                    return function () {
                                        return _k53(globalStore, [ad.maths.abs(ad.sub(_result55, _result56))]);
                                    };
                                }, _address154.concat('_164'), array2);
                            };
                        }, _address154.concat('_163'), array1) : cdr(globalStore, function (globalStore, _result59) {
                            return function () {
                                return cdr(globalStore, function (globalStore, _result60) {
                                    return function () {
                                        return subtract_two_arrays(globalStore, function (globalStore, second_part) {
                                            return function () {
                                                return car(globalStore, function (globalStore, _result57) {
                                                    return function () {
                                                        return car(globalStore, function (globalStore, _result58) {
                                                            var first_part = [ad.maths.abs(ad.sub(_result57, _result58))];
                                                            return function () {
                                                                return _k53(globalStore, first_part.concat(second_part));
                                                            };
                                                        }, _address154.concat('_169'), array2);
                                                    };
                                                }, _address154.concat('_168'), array1);
                                            };
                                        }, _address154.concat('_167'), _result59, _result60);
                                    };
                                }, _address154.concat('_166'), array2);
                            };
                        }, _address154.concat('_165'), array1);
                    };
                }, _address154.concat('_162'), array1);
            };
        };
        var convert_to_char = function convert_to_char(globalStore, _k52, _address155, input, counter) {
            return function () {
                return _k52(globalStore, input[counter].charCodeAt(0));
            };
        };
        var assign_array = function assign_array(globalStore, _k51, _address156, context) {
            return function () {
                return _k51(globalStore, context.MSCALE_val);
            };
        };
        var LS = function LS(globalStore, _k50, _address157, r, s) {
            return function () {
                return _k50(globalStore, r << s);
            };
        };
        var RS = function RS(globalStore, _k49, _address158, r, s) {
            return function () {
                return _k49(globalStore, r >> s);
            };
        };
        var MSCALE = function MSCALE(globalStore, _k48, _address159, r) {
            return function () {
                return _k48(globalStore, r >> 9);
            };
        };
        var CLIP_helper = function CLIP_helper(globalStore, _k47, _address160, tmp) {
            return function () {
                return ad.lt(tmp, 0) ? ad.eq(ad.sub(tmp, 4) % 8, 0) ? _k47(globalStore, ad.maths.floor(ad.div(ad.sub(tmp, 4), 8))) : _k47(globalStore, ad.add(ad.maths.floor(ad.div(ad.sub(tmp, 4), 8)), 1)) : _k47(globalStore, ad.maths.floor(ad.div(ad.add(tmp, 4), 8)));
            };
        };
        var CLIP = function CLIP(globalStore, _k46, _address161, tval) {
            return function () {
                return CLIP_helper(globalStore, function (globalStore, tval) {
                    return function () {
                        return ad.lt(tval, ad.sub(0, 1023)) ? _k46(globalStore, ad.sub(0, 1023)) : ad.gt(tval, 1023) ? _k46(globalStore, 1023) : _k46(globalStore, tval);
                    };
                }, _address161.concat('_170'), tval);
            };
        };
        var dct_first_loop_body = function dct_first_loop_body(globalStore, _k33, _address162, context, i) {
            var _k45 = function (globalStore, _dummy44) {
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
                            return add_round(globalStore, function (globalStore, _result43) {
                                return function () {
                                    return LS(globalStore, function (globalStore, c3) {
                                        return function () {
                                            return add_round(globalStore, function (globalStore, _result42) {
                                                return function () {
                                                    return LS(globalStore, function (globalStore, a1) {
                                                        return function () {
                                                            return LS(globalStore, function (globalStore, c2) {
                                                                return function () {
                                                                    return LS(globalStore, function (globalStore, a2) {
                                                                        return function () {
                                                                            return LS(globalStore, function (globalStore, c1) {
                                                                                return function () {
                                                                                    return LS(globalStore, function (globalStore, a3) {
                                                                                        return function () {
                                                                                            return LS(globalStore, function (globalStore, c0) {
                                                                                                var b0 = ad.add(a0, a3);
                                                                                                var b1 = ad.add(a1, a2);
                                                                                                var b2 = ad.add(a1, ad.mul(ad.sub(0, 1), a2));
                                                                                                var b3 = ad.add(a0, ad.mul(ad.sub(0, 1), a3));
                                                                                                var b0b1Add1 = ad.add(b0, b1);
                                                                                                return function () {
                                                                                                    return MSCALE(globalStore, function (globalStore, _result41) {
                                                                                                        return function () {
                                                                                                            return for_one(globalStore, function (globalStore, tmp_1) {
                                                                                                                var b0b1Sub1 = ad.add(b0, ad.mul(ad.sub(0, 1), b1));
                                                                                                                return function () {
                                                                                                                    return MSCALE(globalStore, function (globalStore, _result40) {
                                                                                                                        return function () {
                                                                                                                            return for_one(globalStore, function (globalStore, tmp_2) {
                                                                                                                                var c3d8b2Mul = ad.mul(c3d8, b2);
                                                                                                                                var c1d8b3Mul = ad.mul(c1d8, b3);
                                                                                                                                var c3d8b3Mul = ad.mul(c3d8, b3);
                                                                                                                                var c1d8b2Mul = ad.mul(c1d8, b2);
                                                                                                                                return function () {
                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result39) {
                                                                                                                                        return function () {
                                                                                                                                            return for_one(globalStore, function (globalStore, tmp_3) {
                                                                                                                                                return function () {
                                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result38) {
                                                                                                                                                        return function () {
                                                                                                                                                            return for_one(globalStore, function (globalStore, tmp_4) {
                                                                                                                                                                var c2c1Temp = ad.add(c2, ad.mul(ad.sub(0, 1), c1));
                                                                                                                                                                var c2c1Temp2 = ad.add(c2, c1);
                                                                                                                                                                return function () {
                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, b0_2) {
                                                                                                                                                                        return function () {
                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, b1_2) {
                                                                                                                                                                                var a0_2 = ad.add(c0, b0_2);
                                                                                                                                                                                var a1_2 = ad.sub(c0, b0_2);
                                                                                                                                                                                var a2_2 = ad.sub(c3, b1_2);
                                                                                                                                                                                var a3_2 = ad.add(c3, b1_2);
                                                                                                                                                                                var c7d16a0Mul = ad.mul(c7d16, a0_2);
                                                                                                                                                                                var c1d16a3Mul = ad.mul(c1d16, a3_2);
                                                                                                                                                                                var c3d16a2Mul = ad.mul(c3d16, a2_2);
                                                                                                                                                                                var c5d16a1Mul = ad.mul(c5d16, a1_2);
                                                                                                                                                                                var c5d16a2Mul = ad.mul(c5d16, a2_2);
                                                                                                                                                                                var c3d16a1Mul = ad.mul(c3d16, a1_2);
                                                                                                                                                                                var c7d16a3Mul = ad.mul(c7d16, a3_2);
                                                                                                                                                                                var c1d16a0Mul = ad.mul(c1d16, a0_2);
                                                                                                                                                                                return function () {
                                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result37) {
                                                                                                                                                                                        return function () {
                                                                                                                                                                                            return for_one(globalStore, function (globalStore, tmp_5) {
                                                                                                                                                                                                return function () {
                                                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result36) {
                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                            return for_one(globalStore, function (globalStore, tmp_6) {
                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result35) {
                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                            return for_one(globalStore, function (globalStore, tmp_7) {
                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result34) {
                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                            return for_one(globalStore, function (globalStore, tmp_8) {
                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                    return _k33(globalStore, {
                                                                                                                                                                                                                                                        inqueue: context.inqueue,
                                                                                                                                                                                                                                                        dcten: context.dcten,
                                                                                                                                                                                                                                                        qen: context.qen,
                                                                                                                                                                                                                                                        tmp: tmp_8,
                                                                                                                                                                                                                                                        bt: context.bt
                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                            }, _address162.concat('_198'), assign_array, {
                                                                                                                                                                                                                                                array: tmp_7,
                                                                                                                                                                                                                                                MSCALE_val: _result34
                                                                                                                                                                                                                                            }, ad.add(i, 56));
                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                    }, _address162.concat('_197'), ad.sub(c7d16a3Mul, c1d16a0Mul));
                                                                                                                                                                                                                                };
                                                                                                                                                                                                                            }, _address162.concat('_196'), assign_array, {
                                                                                                                                                                                                                                array: tmp_6,
                                                                                                                                                                                                                                MSCALE_val: _result35
                                                                                                                                                                                                                            }, ad.add(i, 40));
                                                                                                                                                                                                                        };
                                                                                                                                                                                                                    }, _address162.concat('_195'), ad.add(c3d16a1Mul, c5d16a2Mul));
                                                                                                                                                                                                                };
                                                                                                                                                                                                            }, _address162.concat('_194'), assign_array, {
                                                                                                                                                                                                                array: tmp_5,
                                                                                                                                                                                                                MSCALE_val: _result36
                                                                                                                                                                                                            }, ad.add(i, 24));
                                                                                                                                                                                                        };
                                                                                                                                                                                                    }, _address162.concat('_193'), ad.sub(c3d16a2Mul, c5d16a1Mul));
                                                                                                                                                                                                };
                                                                                                                                                                                            }, _address162.concat('_192'), assign_array, {
                                                                                                                                                                                                array: tmp_4,
                                                                                                                                                                                                MSCALE_val: _result37
                                                                                                                                                                                            }, ad.add(i, 8));
                                                                                                                                                                                        };
                                                                                                                                                                                    }, _address162.concat('_191'), ad.add(c7d16a0Mul, c1d16a3Mul));
                                                                                                                                                                                };
                                                                                                                                                                            }, _address162.concat('_190'), ad.mul(c1d4, c2c1Temp2));
                                                                                                                                                                        };
                                                                                                                                                                    }, _address162.concat('_189'), ad.mul(c1d4, c2c1Temp));
                                                                                                                                                                };
                                                                                                                                                            }, _address162.concat('_188'), assign_array, {
                                                                                                                                                                array: tmp_3,
                                                                                                                                                                MSCALE_val: _result38
                                                                                                                                                            }, ad.add(i, 48));
                                                                                                                                                        };
                                                                                                                                                    }, _address162.concat('_187'), ad.add(c3d8b3Mul, ad.mul(ad.sub(0, 1), c1d8b2Mul)));
                                                                                                                                                };
                                                                                                                                            }, _address162.concat('_186'), assign_array, {
                                                                                                                                                array: tmp_2,
                                                                                                                                                MSCALE_val: _result39
                                                                                                                                            }, ad.add(i, 16));
                                                                                                                                        };
                                                                                                                                    }, _address162.concat('_185'), ad.add(c3d8b2Mul, c1d8b3Mul));
                                                                                                                                };
                                                                                                                            }, _address162.concat('_184'), assign_array, {
                                                                                                                                array: tmp_1,
                                                                                                                                MSCALE_val: _result40
                                                                                                                            }, ad.add(i, 32));
                                                                                                                        };
                                                                                                                    }, _address162.concat('_183'), ad.mul(c1d4, b0b1Sub1));
                                                                                                                };
                                                                                                            }, _address162.concat('_182'), assign_array, {
                                                                                                                array: context.tmp,
                                                                                                                MSCALE_val: _result41
                                                                                                            }, i);
                                                                                                        };
                                                                                                    }, _address162.concat('_181'), ad.mul(c1d4, b0b1Add1));
                                                                                                };
                                                                                            }, _address162.concat('_180'), ad.add(v3, ad.mul(ad.sub(0, 1), v4)), 2);
                                                                                        };
                                                                                    }, _address162.concat('_179'), ad.add(v3, v4), 2);
                                                                                };
                                                                            }, _address162.concat('_178'), ad.add(v2, ad.mul(ad.sub(0, 1), v5)), 2);
                                                                        };
                                                                    }, _address162.concat('_177'), ad.add(v2, v5), 2);
                                                                };
                                                            }, _address162.concat('_176'), ad.add(v1, ad.mul(ad.sub(0, 1), v6)), 2);
                                                        };
                                                    }, _address162.concat('_175'), _result42, 2);
                                                };
                                            }, _address162.concat('_174'), v1, v6, context.bt[1]);
                                        };
                                    }, _address162.concat('_173'), _result43, 2);
                                };
                            }, _address162.concat('_172'), v0, ad.mul(ad.sub(0, 1), v7), context.bt[0]);
                        };
                    }, _address162.concat('_171'), ad.add(v0, v7), 2);
                };
            };
            return function () {
                return ad.eq(context.dcten, !1) ? _k33(globalStore, undefined) : _k45(globalStore, undefined);
            };
        };
        var dct_second_loop_body = function dct_second_loop_body(globalStore, _k16, _address163, context, i) {
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
                                                                                                return MSCALE(globalStore, function (globalStore, _result32) {
                                                                                                    return function () {
                                                                                                        return CLIP(globalStore, function (globalStore, _result31) {
                                                                                                            return function () {
                                                                                                                return for_one(globalStore, function (globalStore, outqueue_0) {
                                                                                                                    return function () {
                                                                                                                        return MSCALE(globalStore, function (globalStore, _result30) {
                                                                                                                            return function () {
                                                                                                                                return CLIP(globalStore, function (globalStore, _result29) {
                                                                                                                                    return function () {
                                                                                                                                        return for_one(globalStore, function (globalStore, outqueue_1) {
                                                                                                                                            return function () {
                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result28) {
                                                                                                                                                    return function () {
                                                                                                                                                        return CLIP(globalStore, function (globalStore, _result27) {
                                                                                                                                                            return function () {
                                                                                                                                                                return for_one(globalStore, function (globalStore, outqueue_2) {
                                                                                                                                                                    return function () {
                                                                                                                                                                        return MSCALE(globalStore, function (globalStore, _result26) {
                                                                                                                                                                            return function () {
                                                                                                                                                                                return CLIP(globalStore, function (globalStore, _result25) {
                                                                                                                                                                                    return function () {
                                                                                                                                                                                        return for_one(globalStore, function (globalStore, outqueue_3) {
                                                                                                                                                                                            return function () {
                                                                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result24) {
                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                        return CLIP(globalStore, function (globalStore, _result23) {
                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                return for_one(globalStore, function (globalStore, outqueue_4) {
                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                        return MSCALE(globalStore, function (globalStore, _result22) {
                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                return CLIP(globalStore, function (globalStore, _result21) {
                                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                                        return for_one(globalStore, function (globalStore, outqueue_5) {
                                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result20) {
                                                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                                                        return CLIP(globalStore, function (globalStore, _result19) {
                                                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                                                return for_one(globalStore, function (globalStore, outqueue_6) {
                                                                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                                                                        return MSCALE(globalStore, function (globalStore, _result18) {
                                                                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                                                                return CLIP(globalStore, function (globalStore, _result17) {
                                                                                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                                                                                        return for_one(globalStore, function (globalStore, outqueue_7) {
                                                                                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                                                                                return _k16(globalStore, {
                                                                                                                                                                                                                                                                                                    tmp: context.tmp,
                                                                                                                                                                                                                                                                                                    outqueue: outqueue_7
                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                                                                        }, _address163.concat('_232'), assign_array, {
                                                                                                                                                                                                                                                                                            array: outqueue_6,
                                                                                                                                                                                                                                                                                            MSCALE_val: _result17
                                                                                                                                                                                                                                                                                        }, ad.add(ad.mul(i, 8), 7));
                                                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                                                }, _address163.concat('_231'), _result18);
                                                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                                                        }, _address163.concat('_230'), ad.sub(ad.mul(c7d16, ta3), ad.mul(c1d16, ta0)));
                                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                                }, _address163.concat('_229'), assign_array, {
                                                                                                                                                                                                                                                                    array: outqueue_5,
                                                                                                                                                                                                                                                                    MSCALE_val: _result19
                                                                                                                                                                                                                                                                }, ad.add(ad.mul(i, 8), 5));
                                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                                        }, _address163.concat('_228'), _result20);
                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                }, _address163.concat('_227'), ad.add(ad.mul(c3d16, ta1), ad.mul(c5d16, ta2)));
                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                        }, _address163.concat('_226'), assign_array, {
                                                                                                                                                                                                                                            array: outqueue_4,
                                                                                                                                                                                                                                            MSCALE_val: _result21
                                                                                                                                                                                                                                        }, ad.add(ad.mul(i, 8), 3));
                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                }, _address163.concat('_225'), _result22);
                                                                                                                                                                                                                            };
                                                                                                                                                                                                                        }, _address163.concat('_224'), ad.sub(ad.mul(c3d16, ta2), ad.mul(c5d16, ta1)));
                                                                                                                                                                                                                    };
                                                                                                                                                                                                                }, _address163.concat('_223'), assign_array, {
                                                                                                                                                                                                                    array: outqueue_3,
                                                                                                                                                                                                                    MSCALE_val: _result23
                                                                                                                                                                                                                }, ad.add(ad.mul(i, 8), 1));
                                                                                                                                                                                                            };
                                                                                                                                                                                                        }, _address163.concat('_222'), _result24);
                                                                                                                                                                                                    };
                                                                                                                                                                                                }, _address163.concat('_221'), ad.add(ad.mul(c7d16, ta0), ad.mul(c1d16, ta3)));
                                                                                                                                                                                            };
                                                                                                                                                                                        }, _address163.concat('_220'), assign_array, {
                                                                                                                                                                                            array: outqueue_2,
                                                                                                                                                                                            MSCALE_val: _result25
                                                                                                                                                                                        }, ad.add(ad.mul(i, 8), 6));
                                                                                                                                                                                    };
                                                                                                                                                                                }, _address163.concat('_219'), _result26);
                                                                                                                                                                            };
                                                                                                                                                                        }, _address163.concat('_218'), ad.sub(c3d8b3Mul, c1d8b2Mul));
                                                                                                                                                                    };
                                                                                                                                                                }, _address163.concat('_217'), assign_array, {
                                                                                                                                                                    array: outqueue_1,
                                                                                                                                                                    MSCALE_val: _result27
                                                                                                                                                                }, ad.add(ad.mul(i, 8), 2));
                                                                                                                                                            };
                                                                                                                                                        }, _address163.concat('_216'), _result28);
                                                                                                                                                    };
                                                                                                                                                }, _address163.concat('_215'), ad.add(c3d8b2Mul, c1d8b3Mul));
                                                                                                                                            };
                                                                                                                                        }, _address163.concat('_214'), assign_array, {
                                                                                                                                            array: outqueue_0,
                                                                                                                                            MSCALE_val: _result29
                                                                                                                                        }, ad.add(ad.mul(i, 8), 4));
                                                                                                                                    };
                                                                                                                                }, _address163.concat('_213'), _result30);
                                                                                                                            };
                                                                                                                        }, _address163.concat('_212'), ad.mul(c1d4, b0b1Sub));
                                                                                                                    };
                                                                                                                }, _address163.concat('_211'), assign_array, {
                                                                                                                    array: context.outqueue,
                                                                                                                    MSCALE_val: _result31
                                                                                                                }, ad.mul(i, 8));
                                                                                                            };
                                                                                                        }, _address163.concat('_210'), _result32);
                                                                                                    };
                                                                                                }, _address163.concat('_209'), ad.mul(c1d4, b0b1Add));
                                                                                            };
                                                                                        }, _address163.concat('_208'), ad.mul(c1d4, c1c2Add));
                                                                                    };
                                                                                }, _address163.concat('_207'), ad.mul(c1d4, c1c2Sub));
                                                                            };
                                                                        }, _address163.concat('_206'), ad.add(v3, v4), 1);
                                                                    };
                                                                }, _address163.concat('_205'), ad.add(v3, ad.mul(ad.sub(0, 1), v4)), 1);
                                                            };
                                                        }, _address163.concat('_204'), ad.add(v2, v5), 1);
                                                    };
                                                }, _address163.concat('_203'), ad.add(v2, ad.mul(ad.sub(0, 1), v5)), 1);
                                            };
                                        }, _address163.concat('_202'), ad.add(v1, v6), 1);
                                    };
                                }, _address163.concat('_201'), ad.add(v1, ad.mul(ad.sub(0, 1), v6)), 1);
                            };
                        }, _address163.concat('_200'), ad.add(v0, v7), 1);
                    };
                }, _address163.concat('_199'), ad.add(v0, ad.mul(ad.sub(0, 1), v7)), 1);
            };
        };
        var dct = function dct(globalStore, _k15, _address164, inqueue, dcten, qen, tmp, bt, outqueue) {
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
                                return _k15(globalStore, dct_second_loop_result.outqueue);
                            };
                        }, _address164.concat('_234'), dct_second_loop_body, second_loop_context, 0, 8);
                    };
                }, _address164.concat('_233'), dct_first_loop_body, first_loop_context, 0, 8);
            };
        };
        var get_one_sample_from_dct = function get_one_sample_from_dct(globalStore, _k6, _address165) {
            return function () {
                return get_file_lines(globalStore, function (globalStore, file_lines) {
                    var _k13 = function (globalStore, inqueue) {
                        return function () {
                            return for_loop(globalStore, function (globalStore, tmp) {
                                return function () {
                                    return for_loop(globalStore, function (globalStore, outqueue) {
                                        var qen = !0;
                                        var dcten = qen;
                                        var bt_no_error = [
                                            0,
                                            0
                                        ];
                                        return function () {
                                            return dct(globalStore, function (globalStore, accurate) {
                                                return function () {
                                                    return dct(globalStore, function (globalStore, inaccurate) {
                                                        var _k10 = function (globalStore, _dummy9) {
                                                            return function () {
                                                                return subtract_two_arrays(globalStore, function (globalStore, error) {
                                                                    return function () {
                                                                        return ad.eq(error, 0) ? _k6(globalStore, Infinity) : std(globalStore, function (globalStore, _result7) {
                                                                            return function () {
                                                                                return std(globalStore, function (globalStore, _result8) {
                                                                                    return function () {
                                                                                        return _k6(globalStore, ad.div(_result7, _result8));
                                                                                    };
                                                                                }, _address165.concat('_245'), error);
                                                                            };
                                                                        }, _address165.concat('_244'), accurate);
                                                                    };
                                                                }, _address165.concat('_243'), accurate, inaccurate);
                                                            };
                                                        };
                                                        return function () {
                                                            return get_inqueue_from_file ? _k10(globalStore, console.log(accurate)) : _k10(globalStore, undefined);
                                                        };
                                                    }, _address165.concat('_242'), inqueue, dcten, qen, tmp, br_array, outqueue);
                                                };
                                            }, _address165.concat('_241'), inqueue, dcten, qen, tmp, bt_no_error, outqueue);
                                        };
                                    }, _address165.concat('_240'), function (globalStore, _k11, _address168) {
                                        return function () {
                                            return _k11(globalStore, 1);
                                        };
                                    }, [], 0, 64);
                                };
                            }, _address165.concat('_239'), function (globalStore, _k12, _address167) {
                                return function () {
                                    return _k12(globalStore, 1);
                                };
                            }, [], 0, 64);
                        };
                    };
                    return function () {
                        return ad.eq(get_inqueue_from_file, 1) ? for_loop(globalStore, _k13, _address165.concat('_236'), convert_to_char, file_lines[0].split(''), 0, 64) : for_loop(globalStore, _k13, _address165.concat('_238'), function (globalStore, _k14, _address166) {
                            return function () {
                                return randomInteger(globalStore, _k14, _address166.concat('_237'), 255);
                            };
                        }, [], 0, 64);
                    };
                }, _address165.concat('_235'), 'dct_in_golden.txt');
            };
        };
        var main = function main(globalStore, _k1, _address169) {
            var _dummy5 = console.log('Note: If one of the samples don\'t result in any error, it results in SNR equal to Infity');
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
                                }, _address169.concat('_248'), snr_results);
                            };
                        }, _address169.concat('_247'), snr_results);
                    };
                }, _address169.concat('_246'), number_of_repetition, get_one_sample_from_dct);
            };
        };
        return function () {
            return main(globalStore, _k0, _address0.concat('_249'));
        };
    };
    return function () {
        return ad.eq(get_inqueue_from_file, 1) ? _k61(globalStore, 1) : _k61(globalStore, 10);
    };
}));

main(__runner__)({}, topK, '');