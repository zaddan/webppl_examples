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
    var randomInteger = function randomInteger(globalStore, _k330, _address2, n) {
        return function () {
            return sample(globalStore, _k330, _address2.concat('_1'), randomIntegerERP, [n]);
        };
    };
    var plus = function plus(globalStore, _k291, _address26, a, b) {
        return function () {
            return _k291(globalStore, ad.add(a, b));
        };
    };
    var idF = function idF(globalStore, _k277, _address40, x) {
        return function () {
            return _k277(globalStore, x);
        };
    };
    var expectation = function expectation(globalStore, _k268, _address46, erp, func) {
        var _k271 = function (globalStore, f) {
            var supp = erp.support([]);
            return function () {
                return mapReduce1(globalStore, _k268, _address46.concat('_20'), plus, function (globalStore, _k269, _address47, s) {
                    return function () {
                        return f(globalStore, function (globalStore, _result270) {
                            return function () {
                                return _k269(globalStore, ad.mul(ad.maths.exp(erp.score([], s)), _result270));
                            };
                        }, _address47.concat('_19'), s);
                    };
                }, supp);
            };
        };
        return function () {
            return func ? _k271(globalStore, func) : _k271(globalStore, idF);
        };
    };
    var reduce = function reduce(globalStore, _k221, _address82, fn, init, ar) {
        var n = ar.length;
        var helper = function helper(globalStore, _k222, _address83, i) {
            return function () {
                return ad.peq(i, n) ? _k222(globalStore, init) : helper(globalStore, function (globalStore, _result223) {
                    return function () {
                        return fn(globalStore, _k222, _address83.concat('_48'), ar[i], _result223);
                    };
                }, _address83.concat('_47'), ad.add(i, 1));
            };
        };
        return function () {
            return helper(globalStore, _k221, _address82.concat('_49'), 0);
        };
    };
    var mapReduce1 = function mapReduce1(globalStore, _k213, _address86, f, g, ar) {
        return function () {
            return g(globalStore, function (globalStore, _result216) {
                return function () {
                    return reduce(globalStore, _k213, _address86.concat('_57'), function (globalStore, _k214, _address87, a, b) {
                        return function () {
                            return g(globalStore, function (globalStore, _result215) {
                                return function () {
                                    return f(globalStore, _k214, _address87.concat('_55'), _result215, b);
                                };
                            }, _address87.concat('_54'), a);
                        };
                    }, _result216, ar.slice(0, ad.sub(0, 1)));
                };
            }, _address86.concat('_56'), ar[ad.sub(ar.length, 1)]);
        };
    };
    var repeat = function repeat(globalStore, _k147, _address124, n, fn) {
        var helper = function helper(globalStore, _k148, _address125, m) {
            return function () {
                return ad.eq(m, 0) ? _k148(globalStore, []) : ad.eq(m, 1) ? fn(globalStore, function (globalStore, _result149) {
                    return function () {
                        return _k148(globalStore, [_result149]);
                    };
                }, _address125.concat('_103')) : function (globalStore, m1) {
                    var m2 = ad.sub(m, m1);
                    return function () {
                        return helper(globalStore, function (globalStore, _result150) {
                            return function () {
                                return helper(globalStore, function (globalStore, _result151) {
                                    return function () {
                                        return _k148(globalStore, _result150.concat(_result151));
                                    };
                                }, _address125.concat('_105'), m2);
                            };
                        }, _address125.concat('_104'), m1);
                    };
                }(globalStore, ad.maths.ceil(ad.div(m, 2)));
            };
        };
        return function () {
            return helper(globalStore, _k147, _address124.concat('_106'), n);
        };
    };
    var bt_array = [
        5,
        1
    ];
    var c1d4 = 362;
    var c1d8 = 473;
    var c3d8 = 196;
    var c1d16 = 502;
    var c3d16 = 426;
    var c5d16 = 284;
    var c7d16 = 100;
    var LS = function LS(globalStore, _k115, _address138, r, s) {
        return function () {
            return _k115(globalStore, r << s);
        };
    };
    var RS = function RS(globalStore, _k114, _address139, r, s) {
        return function () {
            return _k114(globalStore, r >> s);
        };
    };
    var MSCALE = function MSCALE(globalStore, _k113, _address140, r) {
        return function () {
            return _k113(globalStore, r >> 9);
        };
    };
    var CLIP_helper = function CLIP_helper(globalStore, _k112, _address141, tmp) {
        return function () {
            return ad.lt(tmp, 0) ? ad.eq(ad.sub(tmp, 4) % 8, 0) ? _k112(globalStore, ad.maths.floor(ad.div(ad.sub(tmp, 4), 8))) : _k112(globalStore, ad.add(ad.maths.floor(ad.div(ad.sub(tmp, 4), 8)), 1)) : _k112(globalStore, ad.maths.floor(ad.div(ad.add(tmp, 4), 8)));
        };
    };
    var CLIP = function CLIP(globalStore, _k111, _address142, tval) {
        return function () {
            return CLIP_helper(globalStore, function (globalStore, tval) {
                return function () {
                    return ad.lt(tval, ad.sub(0, 1023)) ? _k111(globalStore, ad.sub(0, 1023)) : ad.gt(tval, 1023) ? _k111(globalStore, 1023) : _k111(globalStore, tval);
                };
            }, _address142.concat('_126'), tval);
        };
    };
    var get_file_lines = function get_file_lines(globalStore, _k108, _address144, file_name) {
        var fs = require.call(null, 'fs');
        var fileContents = fs.readFileSync(file_name, 'utf8');
        var file_lines = fileContents.toString().split('\n');
        return function () {
            return _k108(globalStore, file_lines);
        };
    };
    var car = function car(globalStore, _k104, _address145, array) {
        var _k106 = function (globalStore, _dummy105) {
            return function () {
                return _k104(globalStore, array[0]);
            };
        };
        return function () {
            return ad.eq(array.length, 0) ? function (globalStore, _dummy107) {
                return function () {
                    return _k104(globalStore, 0);
                };
            }(globalStore, console.error('------nothing in the array to get the car for')) : _k106(globalStore, undefined);
        };
    };
    var cdr = function cdr(globalStore, _k100, _address146, array) {
        var _k102 = function (globalStore, _dummy101) {
            return function () {
                return _k100(globalStore, array.slice(1, array.length));
            };
        };
        return function () {
            return ad.eq(array.length, 0) ? function (globalStore, _dummy103) {
                return function () {
                    return _k100(globalStore, 0);
                };
            }(globalStore, console.error('-----nothing in the array to get the cdr for')) : _k102(globalStore, undefined);
        };
    };
    var accumulate = function accumulate(globalStore, _k95, _address147, array) {
        return function () {
            return cdr(globalStore, function (globalStore, _result96) {
                return function () {
                    return ad.eq(_result96.length, 0) ? car(globalStore, _k95, _address147.concat('_129'), array) : cdr(globalStore, function (globalStore, _result99) {
                        return function () {
                            return accumulate(globalStore, function (globalStore, _result97) {
                                return function () {
                                    return car(globalStore, function (globalStore, _result98) {
                                        return function () {
                                            return _k95(globalStore, ad.add(_result97, _result98));
                                        };
                                    }, _address147.concat('_132'), array);
                                };
                            }, _address147.concat('_131'), _result99);
                        };
                    }, _address147.concat('_130'), array);
                };
            }, _address147.concat('_128'), array);
        };
    };
    var expectation = function expectation(globalStore, _k93, _address148, array) {
        return function () {
            return accumulate(globalStore, function (globalStore, _result94) {
                return function () {
                    return _k93(globalStore, ad.div(_result94, array.length));
                };
            }, _address148.concat('_133'), array);
        };
    };
    var mean = function mean(globalStore, _k92, _address149, array) {
        return function () {
            return expectation(globalStore, _k92, _address149.concat('_134'), array);
        };
    };
    var variance_helper = function variance_helper(globalStore, _k86, _address150, array, mean$2) {
        return function () {
            return cdr(globalStore, function (globalStore, _result87) {
                return function () {
                    return ad.eq(_result87.length, 0) ? car(globalStore, function (globalStore, _result88) {
                        return function () {
                            return _k86(globalStore, ad.maths.pow(ad.sub(_result88, mean$2), 2));
                        };
                    }, _address150.concat('_136'), array) : cdr(globalStore, function (globalStore, _result91) {
                        return function () {
                            return variance_helper(globalStore, function (globalStore, _result89) {
                                return function () {
                                    return car(globalStore, function (globalStore, _result90) {
                                        return function () {
                                            return _k86(globalStore, ad.add(_result89, ad.maths.pow(ad.sub(_result90, mean$2), 2)));
                                        };
                                    }, _address150.concat('_139'), array);
                                };
                            }, _address150.concat('_138'), _result91, mean$2);
                        };
                    }, _address150.concat('_137'), array);
                };
            }, _address150.concat('_135'), array);
        };
    };
    var variance = function variance(globalStore, _k84, _address151, array) {
        return function () {
            return mean(globalStore, function (globalStore, mean_val) {
                return function () {
                    return variance_helper(globalStore, function (globalStore, _result85) {
                        return function () {
                            return _k84(globalStore, ad.div(_result85, ad.sub(array.length, 1)));
                        };
                    }, _address151.concat('_141'), array, mean_val);
                };
            }, _address151.concat('_140'), array);
        };
    };
    var std = function std(globalStore, _k82, _address152, array) {
        return function () {
            return mean(globalStore, function (globalStore, mean_val) {
                return function () {
                    return variance(globalStore, function (globalStore, _result83) {
                        return function () {
                            return _k82(globalStore, ad.maths.pow(_result83, 0.5));
                        };
                    }, _address152.concat('_143'), array);
                };
            }, _address152.concat('_142'), array);
        };
    };
    var for_loop = function for_loop(globalStore, _k79, _address153, k, context, counter, upper_bound) {
        return function () {
            return ad.eq(counter, ad.sub(upper_bound, 1)) ? k(globalStore, function (globalStore, _result80) {
                return function () {
                    return _k79(globalStore, [_result80]);
                };
            }, _address153.concat('_144'), context, counter) : for_loop(globalStore, function (globalStore, second_part) {
                return function () {
                    return k(globalStore, function (globalStore, _result81) {
                        var first_part = [_result81];
                        return function () {
                            return _k79(globalStore, first_part.concat(second_part));
                        };
                    }, _address153.concat('_146'), context, counter);
                };
            }, _address153.concat('_145'), k, context, ad.add(counter, 1), upper_bound);
        };
    };
    var for_one_helper = function for_one_helper(globalStore, _k63, _address155, k, for_one_context, counter, upper_bound, index) {
        var _k69 = function (globalStore, _dummy68) {
            return function () {
                return ad.eq(counter, ad.sub(upper_bound, 1)) ? function (globalStore, _k64) {
                    return function () {
                        return ad.eq(counter, index) ? k(globalStore, function (globalStore, _result65) {
                            return function () {
                                return _k64(globalStore, [_result65]);
                            };
                        }, _address155.concat('_154'), for_one_context, counter) : _k64(globalStore, [for_one_context.array[counter]]);
                    };
                }(globalStore, function (globalStore, return_val) {
                    return function () {
                        return _k63(globalStore, return_val);
                    };
                }) : for_one_helper(globalStore, function (globalStore, second_part) {
                    var _k66 = function (globalStore, first_part) {
                        return function () {
                            return _k63(globalStore, first_part.concat(second_part));
                        };
                    };
                    return function () {
                        return ad.eq(counter, index) ? k(globalStore, function (globalStore, _result67) {
                            return function () {
                                return _k66(globalStore, [_result67]);
                            };
                        }, _address155.concat('_156'), for_one_context, counter) : _k66(globalStore, [for_one_context.array[counter]]);
                    };
                }, _address155.concat('_155'), k, for_one_context, ad.add(counter, 1), upper_bound, index);
            };
        };
        return function () {
            return ad.geq(index, upper_bound) ? function (globalStore, _dummy71) {
                var _dummy70 = console.log('index is', index);
                return function () {
                    return _k63(globalStore, !1);
                };
            }(globalStore, console.log('***index out of bound****')) : _k69(globalStore, undefined);
        };
    };
    var for_one = function for_one(globalStore, _k62, _address156, k, for_one_context, index) {
        return function () {
            return for_one_helper(globalStore, _k62, _address156.concat('_157'), k, for_one_context, 0, for_one_context.array.length, index);
        };
    };
    var add_round = function add_round(globalStore, _k54, _address158, a, b, Nia) {
        var weight = ad.sub(ad.maths.pow(2, Nia), 1);
        var iap_a = weight & a;
        var _k56 = function (globalStore, a_op) {
            var iap_b = weight & b;
            var _k55 = function (globalStore, b_op) {
                return function () {
                    return _k54(globalStore, ad.add(a_op, b_op) << Nia);
                };
            };
            return function () {
                return ad.eq(iap_b >> ad.sub(Nia, 1), 1) ? _k55(globalStore, ad.add(b >> Nia, 1)) : _k55(globalStore, b >> Nia);
            };
        };
        return function () {
            return ad.eq(iap_a >> ad.sub(Nia, 1), 1) ? _k56(globalStore, ad.add(a >> Nia, 1)) : _k56(globalStore, a >> Nia);
        };
    };
    var for_loop_2 = function for_loop_2(globalStore, _k52, _address159, k, context, counter, upper_bound) {
        return function () {
            return ad.eq(counter, ad.sub(upper_bound, 1)) ? k(globalStore, _k52, _address159.concat('_158'), context, counter) : k(globalStore, function (globalStore, _result53) {
                return function () {
                    return for_loop_2(globalStore, _k52, _address159.concat('_160'), k, _result53, ad.add(counter, 1), upper_bound);
                };
            }, _address159.concat('_159'), context, counter);
        };
    };
    var subtract_two_arrays = function subtract_two_arrays(globalStore, _k44, _address160, array1, array2) {
        return function () {
            return cdr(globalStore, function (globalStore, _result45) {
                return function () {
                    return ad.eq(_result45.length, 0) ? car(globalStore, function (globalStore, _result46) {
                        return function () {
                            return car(globalStore, function (globalStore, _result47) {
                                return function () {
                                    return _k44(globalStore, [ad.maths.abs(ad.sub(_result46, _result47))]);
                                };
                            }, _address160.concat('_163'), array2);
                        };
                    }, _address160.concat('_162'), array1) : cdr(globalStore, function (globalStore, _result50) {
                        return function () {
                            return cdr(globalStore, function (globalStore, _result51) {
                                return function () {
                                    return subtract_two_arrays(globalStore, function (globalStore, second_part) {
                                        return function () {
                                            return car(globalStore, function (globalStore, _result48) {
                                                return function () {
                                                    return car(globalStore, function (globalStore, _result49) {
                                                        var first_part = [ad.maths.abs(ad.sub(_result48, _result49))];
                                                        return function () {
                                                            return _k44(globalStore, first_part.concat(second_part));
                                                        };
                                                    }, _address160.concat('_168'), array2);
                                                };
                                            }, _address160.concat('_167'), array1);
                                        };
                                    }, _address160.concat('_166'), _result50, _result51);
                                };
                            }, _address160.concat('_165'), array2);
                        };
                    }, _address160.concat('_164'), array1);
                };
            }, _address160.concat('_161'), array1);
        };
    };
    var assign_array = function assign_array(globalStore, _k43, _address161, context) {
        return function () {
            return _k43(globalStore, context.MSCALE_val);
        };
    };
    var dct_first_loop_body = function dct_first_loop_body(globalStore, _k30, _address162, context, i) {
        var _k42 = function (globalStore, _dummy41) {
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
                        return add_round(globalStore, function (globalStore, _result40) {
                            return function () {
                                return LS(globalStore, function (globalStore, c3) {
                                    return function () {
                                        return add_round(globalStore, function (globalStore, _result39) {
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
                                                                                                return MSCALE(globalStore, function (globalStore, _result38) {
                                                                                                    return function () {
                                                                                                        return for_one(globalStore, function (globalStore, tmp_1) {
                                                                                                            var b0b1Sub1 = ad.add(b0, ad.mul(ad.sub(0, 1), b1));
                                                                                                            return function () {
                                                                                                                return MSCALE(globalStore, function (globalStore, _result37) {
                                                                                                                    return function () {
                                                                                                                        return for_one(globalStore, function (globalStore, tmp_2) {
                                                                                                                            var c3d8b2Mul = ad.mul(c3d8, b2);
                                                                                                                            var c1d8b3Mul = ad.mul(c1d8, b3);
                                                                                                                            var c3d8b3Mul = ad.mul(c3d8, b3);
                                                                                                                            var c1d8b2Mul = ad.mul(c1d8, b2);
                                                                                                                            return function () {
                                                                                                                                return MSCALE(globalStore, function (globalStore, _result36) {
                                                                                                                                    return function () {
                                                                                                                                        return for_one(globalStore, function (globalStore, tmp_3) {
                                                                                                                                            return function () {
                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result35) {
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
                                                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result34) {
                                                                                                                                                                                    return function () {
                                                                                                                                                                                        return for_one(globalStore, function (globalStore, tmp_5) {
                                                                                                                                                                                            return function () {
                                                                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result33) {
                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                        return for_one(globalStore, function (globalStore, tmp_6) {
                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result32) {
                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                        return for_one(globalStore, function (globalStore, tmp_7) {
                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result31) {
                                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                                        return for_one(globalStore, function (globalStore, tmp_8) {
                                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                                return _k30(globalStore, {
                                                                                                                                                                                                                                                    inqueue: context.inqueue,
                                                                                                                                                                                                                                                    dcten: context.dcten,
                                                                                                                                                                                                                                                    qen: context.qen,
                                                                                                                                                                                                                                                    tmp: tmp_8,
                                                                                                                                                                                                                                                    bt: context.bt
                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                        }, _address162.concat('_196'), assign_array, {
                                                                                                                                                                                                                                            array: tmp_7,
                                                                                                                                                                                                                                            MSCALE_val: _result31
                                                                                                                                                                                                                                        }, ad.add(i, 56));
                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                }, _address162.concat('_195'), ad.sub(c7d16a3Mul, c1d16a0Mul));
                                                                                                                                                                                                                            };
                                                                                                                                                                                                                        }, _address162.concat('_194'), assign_array, {
                                                                                                                                                                                                                            array: tmp_6,
                                                                                                                                                                                                                            MSCALE_val: _result32
                                                                                                                                                                                                                        }, ad.add(i, 40));
                                                                                                                                                                                                                    };
                                                                                                                                                                                                                }, _address162.concat('_193'), ad.add(c3d16a1Mul, c5d16a2Mul));
                                                                                                                                                                                                            };
                                                                                                                                                                                                        }, _address162.concat('_192'), assign_array, {
                                                                                                                                                                                                            array: tmp_5,
                                                                                                                                                                                                            MSCALE_val: _result33
                                                                                                                                                                                                        }, ad.add(i, 24));
                                                                                                                                                                                                    };
                                                                                                                                                                                                }, _address162.concat('_191'), ad.sub(c3d16a2Mul, c5d16a1Mul));
                                                                                                                                                                                            };
                                                                                                                                                                                        }, _address162.concat('_190'), assign_array, {
                                                                                                                                                                                            array: tmp_4,
                                                                                                                                                                                            MSCALE_val: _result34
                                                                                                                                                                                        }, ad.add(i, 8));
                                                                                                                                                                                    };
                                                                                                                                                                                }, _address162.concat('_189'), ad.add(c7d16a0Mul, c1d16a3Mul));
                                                                                                                                                                            };
                                                                                                                                                                        }, _address162.concat('_188'), ad.mul(c1d4, c2c1Temp2));
                                                                                                                                                                    };
                                                                                                                                                                }, _address162.concat('_187'), ad.mul(c1d4, c2c1Temp));
                                                                                                                                                            };
                                                                                                                                                        }, _address162.concat('_186'), assign_array, {
                                                                                                                                                            array: tmp_3,
                                                                                                                                                            MSCALE_val: _result35
                                                                                                                                                        }, ad.add(i, 48));
                                                                                                                                                    };
                                                                                                                                                }, _address162.concat('_185'), ad.add(c3d8b3Mul, ad.mul(ad.sub(0, 1), c1d8b2Mul)));
                                                                                                                                            };
                                                                                                                                        }, _address162.concat('_184'), assign_array, {
                                                                                                                                            array: tmp_2,
                                                                                                                                            MSCALE_val: _result36
                                                                                                                                        }, ad.add(i, 16));
                                                                                                                                    };
                                                                                                                                }, _address162.concat('_183'), ad.add(c3d8b2Mul, c1d8b3Mul));
                                                                                                                            };
                                                                                                                        }, _address162.concat('_182'), assign_array, {
                                                                                                                            array: tmp_1,
                                                                                                                            MSCALE_val: _result37
                                                                                                                        }, ad.add(i, 32));
                                                                                                                    };
                                                                                                                }, _address162.concat('_181'), ad.mul(c1d4, b0b1Sub1));
                                                                                                            };
                                                                                                        }, _address162.concat('_180'), assign_array, {
                                                                                                            array: context.tmp,
                                                                                                            MSCALE_val: _result38
                                                                                                        }, i);
                                                                                                    };
                                                                                                }, _address162.concat('_179'), ad.mul(c1d4, b0b1Add1));
                                                                                            };
                                                                                        }, _address162.concat('_178'), ad.add(v3, ad.mul(ad.sub(0, 1), v4)), 2);
                                                                                    };
                                                                                }, _address162.concat('_177'), ad.add(v3, v4), 2);
                                                                            };
                                                                        }, _address162.concat('_176'), ad.add(v2, ad.mul(ad.sub(0, 1), v5)), 2);
                                                                    };
                                                                }, _address162.concat('_175'), ad.add(v2, v5), 2);
                                                            };
                                                        }, _address162.concat('_174'), ad.add(v1, ad.mul(ad.sub(0, 1), v6)), 2);
                                                    };
                                                }, _address162.concat('_173'), _result39, 2);
                                            };
                                        }, _address162.concat('_172'), v1, v6, context.bt[1]);
                                    };
                                }, _address162.concat('_171'), _result40, 2);
                            };
                        }, _address162.concat('_170'), v0, ad.mul(ad.sub(0, 1), v7), context.bt[0]);
                    };
                }, _address162.concat('_169'), ad.add(v0, v7), 2);
            };
        };
        return function () {
            return ad.eq(context.dcten, !1) ? _k30(globalStore, undefined) : _k42(globalStore, undefined);
        };
    };
    var dct_second_loop_body = function dct_second_loop_body(globalStore, _k13, _address163, context, i) {
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
                                                                                            return MSCALE(globalStore, function (globalStore, _result29) {
                                                                                                return function () {
                                                                                                    return CLIP(globalStore, function (globalStore, _result28) {
                                                                                                        return function () {
                                                                                                            return for_one(globalStore, function (globalStore, outqueue_0) {
                                                                                                                return function () {
                                                                                                                    return MSCALE(globalStore, function (globalStore, _result27) {
                                                                                                                        return function () {
                                                                                                                            return CLIP(globalStore, function (globalStore, _result26) {
                                                                                                                                return function () {
                                                                                                                                    return for_one(globalStore, function (globalStore, outqueue_1) {
                                                                                                                                        return function () {
                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result25) {
                                                                                                                                                return function () {
                                                                                                                                                    return CLIP(globalStore, function (globalStore, _result24) {
                                                                                                                                                        return function () {
                                                                                                                                                            return for_one(globalStore, function (globalStore, outqueue_2) {
                                                                                                                                                                return function () {
                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result23) {
                                                                                                                                                                        return function () {
                                                                                                                                                                            return CLIP(globalStore, function (globalStore, _result22) {
                                                                                                                                                                                return function () {
                                                                                                                                                                                    return for_one(globalStore, function (globalStore, outqueue_3) {
                                                                                                                                                                                        return function () {
                                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result21) {
                                                                                                                                                                                                return function () {
                                                                                                                                                                                                    return CLIP(globalStore, function (globalStore, _result20) {
                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                            return for_one(globalStore, function (globalStore, outqueue_4) {
                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result19) {
                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                            return CLIP(globalStore, function (globalStore, _result18) {
                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                    return for_one(globalStore, function (globalStore, outqueue_5) {
                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result17) {
                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                    return CLIP(globalStore, function (globalStore, _result16) {
                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                            return for_one(globalStore, function (globalStore, outqueue_6) {
                                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result15) {
                                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                                            return CLIP(globalStore, function (globalStore, _result14) {
                                                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                                                    return for_one(globalStore, function (globalStore, outqueue_7) {
                                                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                                                            return _k13(globalStore, {
                                                                                                                                                                                                                                                                                                tmp: context.tmp,
                                                                                                                                                                                                                                                                                                outqueue: outqueue_7
                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                    }, _address163.concat('_230'), assign_array, {
                                                                                                                                                                                                                                                                                        array: outqueue_6,
                                                                                                                                                                                                                                                                                        MSCALE_val: _result14
                                                                                                                                                                                                                                                                                    }, ad.add(ad.mul(i, 8), 7));
                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                            }, _address163.concat('_229'), _result15);
                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                    }, _address163.concat('_228'), ad.sub(ad.mul(c7d16, ta3), ad.mul(c1d16, ta0)));
                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                            }, _address163.concat('_227'), assign_array, {
                                                                                                                                                                                                                                                                array: outqueue_5,
                                                                                                                                                                                                                                                                MSCALE_val: _result16
                                                                                                                                                                                                                                                            }, ad.add(ad.mul(i, 8), 5));
                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                    }, _address163.concat('_226'), _result17);
                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                            }, _address163.concat('_225'), ad.add(ad.mul(c3d16, ta1), ad.mul(c5d16, ta2)));
                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                    }, _address163.concat('_224'), assign_array, {
                                                                                                                                                                                                                                        array: outqueue_4,
                                                                                                                                                                                                                                        MSCALE_val: _result18
                                                                                                                                                                                                                                    }, ad.add(ad.mul(i, 8), 3));
                                                                                                                                                                                                                                };
                                                                                                                                                                                                                            }, _address163.concat('_223'), _result19);
                                                                                                                                                                                                                        };
                                                                                                                                                                                                                    }, _address163.concat('_222'), ad.sub(ad.mul(c3d16, ta2), ad.mul(c5d16, ta1)));
                                                                                                                                                                                                                };
                                                                                                                                                                                                            }, _address163.concat('_221'), assign_array, {
                                                                                                                                                                                                                array: outqueue_3,
                                                                                                                                                                                                                MSCALE_val: _result20
                                                                                                                                                                                                            }, ad.add(ad.mul(i, 8), 1));
                                                                                                                                                                                                        };
                                                                                                                                                                                                    }, _address163.concat('_220'), _result21);
                                                                                                                                                                                                };
                                                                                                                                                                                            }, _address163.concat('_219'), ad.add(ad.mul(c7d16, ta0), ad.mul(c1d16, ta3)));
                                                                                                                                                                                        };
                                                                                                                                                                                    }, _address163.concat('_218'), assign_array, {
                                                                                                                                                                                        array: outqueue_2,
                                                                                                                                                                                        MSCALE_val: _result22
                                                                                                                                                                                    }, ad.add(ad.mul(i, 8), 6));
                                                                                                                                                                                };
                                                                                                                                                                            }, _address163.concat('_217'), _result23);
                                                                                                                                                                        };
                                                                                                                                                                    }, _address163.concat('_216'), ad.sub(c3d8b3Mul, c1d8b2Mul));
                                                                                                                                                                };
                                                                                                                                                            }, _address163.concat('_215'), assign_array, {
                                                                                                                                                                array: outqueue_1,
                                                                                                                                                                MSCALE_val: _result24
                                                                                                                                                            }, ad.add(ad.mul(i, 8), 2));
                                                                                                                                                        };
                                                                                                                                                    }, _address163.concat('_214'), _result25);
                                                                                                                                                };
                                                                                                                                            }, _address163.concat('_213'), ad.add(c3d8b2Mul, c1d8b3Mul));
                                                                                                                                        };
                                                                                                                                    }, _address163.concat('_212'), assign_array, {
                                                                                                                                        array: outqueue_0,
                                                                                                                                        MSCALE_val: _result26
                                                                                                                                    }, ad.add(ad.mul(i, 8), 4));
                                                                                                                                };
                                                                                                                            }, _address163.concat('_211'), _result27);
                                                                                                                        };
                                                                                                                    }, _address163.concat('_210'), ad.mul(c1d4, b0b1Sub));
                                                                                                                };
                                                                                                            }, _address163.concat('_209'), assign_array, {
                                                                                                                array: context.outqueue,
                                                                                                                MSCALE_val: _result28
                                                                                                            }, ad.mul(i, 8));
                                                                                                        };
                                                                                                    }, _address163.concat('_208'), _result29);
                                                                                                };
                                                                                            }, _address163.concat('_207'), ad.mul(c1d4, b0b1Add));
                                                                                        };
                                                                                    }, _address163.concat('_206'), ad.mul(c1d4, c1c2Add));
                                                                                };
                                                                            }, _address163.concat('_205'), ad.mul(c1d4, c1c2Sub));
                                                                        };
                                                                    }, _address163.concat('_204'), ad.add(v3, v4), 1);
                                                                };
                                                            }, _address163.concat('_203'), ad.add(v3, ad.mul(ad.sub(0, 1), v4)), 1);
                                                        };
                                                    }, _address163.concat('_202'), ad.add(v2, v5), 1);
                                                };
                                            }, _address163.concat('_201'), ad.add(v2, ad.mul(ad.sub(0, 1), v5)), 1);
                                        };
                                    }, _address163.concat('_200'), ad.add(v1, v6), 1);
                                };
                            }, _address163.concat('_199'), ad.add(v1, ad.mul(ad.sub(0, 1), v6)), 1);
                        };
                    }, _address163.concat('_198'), ad.add(v0, v7), 1);
                };
            }, _address163.concat('_197'), ad.add(v0, ad.mul(ad.sub(0, 1), v7)), 1);
        };
    };
    var return_1 = function return_1(globalStore, _k12, _address164) {
        return function () {
            return _k12(globalStore, 1);
        };
    };
    var sample_one_value = function sample_one_value(globalStore, _k11, _address165) {
        return function () {
            return randomInteger(globalStore, _k11, _address165.concat('_231'), 255);
        };
    };
    var dct = function dct(globalStore, _k10, _address166, inqueue, dcten, qen, tmp, bt, outqueue) {
        var first_loop_context = {
            inqueue: inqueue,
            dcten: dcten,
            qen: qen,
            tmp: tmp,
            bt: bt
        };
        return function () {
            return for_loop_2(globalStore, function (globalStore, dct_first_loop_result) {
                var second_loop_context = {
                    tmp: dct_first_loop_result.tmp,
                    outqueue: outqueue
                };
                return function () {
                    return for_loop_2(globalStore, function (globalStore, dct_second_loop_result) {
                        return function () {
                            return _k10(globalStore, dct_second_loop_result.outqueue);
                        };
                    }, _address166.concat('_233'), dct_second_loop_body, second_loop_context, 0, 8);
                };
            }, _address166.concat('_232'), dct_first_loop_body, first_loop_context, 0, 8);
        };
    };
    var convert_to_char = function convert_to_char(globalStore, _k9, _address167, input, counter) {
        return function () {
            return _k9(globalStore, input[counter].charCodeAt(0));
        };
    };
    var get_one_sample_from_dct = function get_one_sample_from_dct(globalStore, _k7, _address168) {
        return function () {
            return get_file_lines(globalStore, function (globalStore, file_lines) {
                var get_inqueue_from_file = 0;
                var _k8 = function (globalStore, inqueue) {
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
                                                    return function () {
                                                        return subtract_two_arrays(globalStore, function (globalStore, error) {
                                                            return function () {
                                                                return mean(globalStore, _k7, _address168.concat('_242'), error);
                                                            };
                                                        }, _address168.concat('_241'), accurate, inaccurate);
                                                    };
                                                }, _address168.concat('_240'), inqueue, dcten, qen, tmp, bt_array, outqueue);
                                            };
                                        }, _address168.concat('_239'), inqueue, dcten, qen, tmp, bt_no_error, outqueue);
                                    };
                                }, _address168.concat('_238'), return_1, [], 0, 64);
                            };
                        }, _address168.concat('_237'), return_1, [], 0, 64);
                    };
                };
                return function () {
                    return ad.eq(get_inqueue_from_file, 1) ? for_loop(globalStore, _k8, _address168.concat('_235'), convert_to_char, file_lines[0].split(''), 0, 64) : for_loop(globalStore, _k8, _address168.concat('_236'), sample_one_value, [], 0, 64);
                };
            }, _address168.concat('_234'), 'dct_in_golden.txt');
        };
    };
    var main = function main(globalStore, _k2, _address170) {
        return function () {
            return repeat(globalStore, function (globalStore, snr_results) {
                return function () {
                    return mean(globalStore, function (globalStore, _result5) {
                        var _dummy4 = console.log('mean of snr', _result5);
                        return function () {
                            return std(globalStore, function (globalStore, _result3) {
                                return function () {
                                    return _k2(globalStore, console.log('std of snr', _result3));
                                };
                            }, _address170.concat('_245'), snr_results);
                        };
                    }, _address170.concat('_244'), snr_results);
                };
            }, _address170.concat('_243'), 10, get_one_sample_from_dct);
        };
    };
    return function () {
        return main(globalStore, function (globalStore, _dummy1) {
            return function () {
                return _k0(globalStore, 1);
            };
        }, _address0.concat('_246'));
    };
}));

main(__runner__)({}, topK, '');