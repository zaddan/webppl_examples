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
    var c1d4 = 362;
    var c1d8 = 473;
    var c3d8 = 196;
    var c1d16 = 502;
    var c3d16 = 426;
    var c5d16 = 284;
    var c7d16 = 100;
    var LS = function LS(globalStore, _k69, _address139, r, s) {
        return function () {
            return _k69(globalStore, r << s);
        };
    };
    var RS = function RS(globalStore, _k68, _address140, r, s) {
        return function () {
            return _k68(globalStore, r >> s);
        };
    };
    var MSCALE = function MSCALE(globalStore, _k67, _address141, r) {
        return function () {
            return _k67(globalStore, r >> 9);
        };
    };
    var CLIP_helper = function CLIP_helper(globalStore, _k66, _address142, tmp$2) {
        return function () {
            return ad.lt(tmp$2, 0) ? ad.eq(ad.sub(tmp$2, 4) % 8, 0) ? _k66(globalStore, ad.maths.floor(ad.div(ad.sub(tmp$2, 4), 8))) : _k66(globalStore, ad.add(ad.maths.floor(ad.div(ad.sub(tmp$2, 4), 8)), 1)) : _k66(globalStore, ad.maths.floor(ad.div(ad.add(tmp$2, 4), 8)));
        };
    };
    var CLIP = function CLIP(globalStore, _k65, _address143, tval) {
        return function () {
            return CLIP_helper(globalStore, function (globalStore, tval) {
                return function () {
                    return ad.lt(tval, ad.sub(0, 1023)) ? _k65(globalStore, ad.sub(0, 1023)) : ad.gt(tval, 1023) ? _k65(globalStore, 1023) : _k65(globalStore, tval);
                };
            }, _address143.concat('_127'), tval);
        };
    };
    var get_file_lines = function get_file_lines(globalStore, _k62, _address145, file_name) {
        var fs = require.call(null, 'fs');
        var fileContents = fs.readFileSync(file_name, 'utf8');
        var file_lines$2 = fileContents.toString().split('\n');
        return function () {
            return _k62(globalStore, file_lines$2);
        };
    };
    var for_one_helper = function for_one_helper(globalStore, _k34, _address150, k, for_one_context, counter, upper_bound, index) {
        var _k40 = function (globalStore, _dummy39) {
            return function () {
                return ad.eq(counter, ad.sub(upper_bound, 1)) ? function (globalStore, _k35) {
                    return function () {
                        return ad.eq(counter, index) ? k(globalStore, function (globalStore, _result36) {
                            return function () {
                                return _k35(globalStore, [_result36]);
                            };
                        }, _address150.concat('_139'), for_one_context, counter) : _k35(globalStore, [for_one_context.array[counter]]);
                    };
                }(globalStore, function (globalStore, return_val) {
                    return function () {
                        return _k34(globalStore, return_val);
                    };
                }) : for_one_helper(globalStore, function (globalStore, second_part) {
                    var _k37 = function (globalStore, first_part) {
                        return function () {
                            return _k34(globalStore, first_part.concat(second_part));
                        };
                    };
                    return function () {
                        return ad.eq(counter, index) ? k(globalStore, function (globalStore, _result38) {
                            return function () {
                                return _k37(globalStore, [_result38]);
                            };
                        }, _address150.concat('_141'), for_one_context, counter) : _k37(globalStore, [for_one_context.array[counter]]);
                    };
                }, _address150.concat('_140'), k, for_one_context, ad.add(counter, 1), upper_bound, index);
            };
        };
        return function () {
            return ad.geq(index, upper_bound) ? function (globalStore, _dummy42) {
                var _dummy41 = console.log('index is', index);
                return function () {
                    return _k34(globalStore, !1);
                };
            }(globalStore, console.log('***index out of bound****')) : _k40(globalStore, undefined);
        };
    };
    var for_one = function for_one(globalStore, _k33, _address151, k, for_one_context, index) {
        return function () {
            return for_one_helper(globalStore, _k33, _address151.concat('_142'), k, for_one_context, 0, for_one_context.array.length, index);
        };
    };
    var for_loop_2 = function for_loop_2(globalStore, _k31, _address152, k, context, counter, upper_bound) {
        return function () {
            return ad.eq(counter, ad.sub(upper_bound, 1)) ? k(globalStore, _k31, _address152.concat('_143'), context, counter) : k(globalStore, function (globalStore, _result32) {
                return function () {
                    return for_loop_2(globalStore, _k31, _address152.concat('_145'), k, _result32, ad.add(counter, 1), upper_bound);
                };
            }, _address152.concat('_144'), context, counter);
        };
    };
    var assign_array = function assign_array(globalStore, _k30, _address153, context) {
        return function () {
            return _k30(globalStore, context.MSCALE_val);
        };
    };
    var dct_first_loop_body = function dct_first_loop_body(globalStore, _k19, _address154, context, i) {
        var _k29 = function (globalStore, _dummy28) {
            var v0 = context.inqueue[ad.add(ad.mul(i, 8), 0)].charCodeAt(0);
            var v1 = context.inqueue[ad.add(ad.mul(i, 8), 1)].charCodeAt(0);
            var v2 = context.inqueue[ad.add(ad.mul(i, 8), 2)].charCodeAt(0);
            var v3 = context.inqueue[ad.add(ad.mul(i, 8), 3)].charCodeAt(0);
            var v4 = context.inqueue[ad.add(ad.mul(i, 8), 4)].charCodeAt(0);
            var v5 = context.inqueue[ad.add(ad.mul(i, 8), 5)].charCodeAt(0);
            var v6 = context.inqueue[ad.add(ad.mul(i, 8), 6)].charCodeAt(0);
            var v7 = context.inqueue[ad.add(ad.mul(i, 8), 7)].charCodeAt(0);
            return function () {
                return LS(globalStore, function (globalStore, a0) {
                    return function () {
                        return LS(globalStore, function (globalStore, c3) {
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
                                                                                return MSCALE(globalStore, function (globalStore, _result27) {
                                                                                    return function () {
                                                                                        return for_one(globalStore, function (globalStore, tmp_1) {
                                                                                            var b0b1Sub1 = ad.add(b0, ad.mul(ad.sub(0, 1), b1));
                                                                                            return function () {
                                                                                                return MSCALE(globalStore, function (globalStore, _result26) {
                                                                                                    return function () {
                                                                                                        return for_one(globalStore, function (globalStore, tmp_2) {
                                                                                                            var c3d8b2Mul = ad.mul(c3d8, b2);
                                                                                                            var c1d8b3Mul = ad.mul(c1d8, b3);
                                                                                                            var c3d8b3Mul = ad.mul(c3d8, b3);
                                                                                                            var c1d8b2Mul = ad.mul(c1d8, b2);
                                                                                                            return function () {
                                                                                                                return MSCALE(globalStore, function (globalStore, _result25) {
                                                                                                                    return function () {
                                                                                                                        return for_one(globalStore, function (globalStore, tmp_3) {
                                                                                                                            return function () {
                                                                                                                                return MSCALE(globalStore, function (globalStore, _result24) {
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
                                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result23) {
                                                                                                                                                                    return function () {
                                                                                                                                                                        return for_one(globalStore, function (globalStore, tmp_5) {
                                                                                                                                                                            return function () {
                                                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result22) {
                                                                                                                                                                                    return function () {
                                                                                                                                                                                        return for_one(globalStore, function (globalStore, tmp_6) {
                                                                                                                                                                                            return function () {
                                                                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result21) {
                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                        return for_one(globalStore, function (globalStore, tmp_7) {
                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                return MSCALE(globalStore, function (globalStore, _result20) {
                                                                                                                                                                                                                    return function () {
                                                                                                                                                                                                                        return for_one(globalStore, function (globalStore, tmp_8) {
                                                                                                                                                                                                                            return function () {
                                                                                                                                                                                                                                return _k19(globalStore, {
                                                                                                                                                                                                                                    inqueue: context.inqueue,
                                                                                                                                                                                                                                    dcten: context.dcten,
                                                                                                                                                                                                                                    qen: context.qen,
                                                                                                                                                                                                                                    tmp: tmp_8
                                                                                                                                                                                                                                });
                                                                                                                                                                                                                            };
                                                                                                                                                                                                                        }, _address154.concat('_171'), assign_array, {
                                                                                                                                                                                                                            array: tmp_7,
                                                                                                                                                                                                                            MSCALE_val: _result20
                                                                                                                                                                                                                        }, ad.add(i, 56));
                                                                                                                                                                                                                    };
                                                                                                                                                                                                                }, _address154.concat('_170'), ad.sub(c7d16a3Mul, c1d16a0Mul));
                                                                                                                                                                                                            };
                                                                                                                                                                                                        }, _address154.concat('_169'), assign_array, {
                                                                                                                                                                                                            array: tmp_6,
                                                                                                                                                                                                            MSCALE_val: _result21
                                                                                                                                                                                                        }, ad.add(i, 40));
                                                                                                                                                                                                    };
                                                                                                                                                                                                }, _address154.concat('_168'), ad.add(c3d16a1Mul, c5d16a2Mul));
                                                                                                                                                                                            };
                                                                                                                                                                                        }, _address154.concat('_167'), assign_array, {
                                                                                                                                                                                            array: tmp_5,
                                                                                                                                                                                            MSCALE_val: _result22
                                                                                                                                                                                        }, ad.add(i, 24));
                                                                                                                                                                                    };
                                                                                                                                                                                }, _address154.concat('_166'), ad.sub(c3d16a2Mul, c5d16a1Mul));
                                                                                                                                                                            };
                                                                                                                                                                        }, _address154.concat('_165'), assign_array, {
                                                                                                                                                                            array: tmp_4,
                                                                                                                                                                            MSCALE_val: _result23
                                                                                                                                                                        }, ad.add(i, 8));
                                                                                                                                                                    };
                                                                                                                                                                }, _address154.concat('_164'), ad.add(c7d16a0Mul, c1d16a3Mul));
                                                                                                                                                            };
                                                                                                                                                        }, _address154.concat('_163'), ad.mul(c1d4, c2c1Temp2));
                                                                                                                                                    };
                                                                                                                                                }, _address154.concat('_162'), ad.mul(c1d4, c2c1Temp));
                                                                                                                                            };
                                                                                                                                        }, _address154.concat('_161'), assign_array, {
                                                                                                                                            array: tmp_3,
                                                                                                                                            MSCALE_val: _result24
                                                                                                                                        }, ad.add(i, 48));
                                                                                                                                    };
                                                                                                                                }, _address154.concat('_160'), ad.add(c3d8b3Mul, ad.mul(ad.sub(0, 1), c1d8b2Mul)));
                                                                                                                            };
                                                                                                                        }, _address154.concat('_159'), assign_array, {
                                                                                                                            array: tmp_2,
                                                                                                                            MSCALE_val: _result25
                                                                                                                        }, ad.add(i, 16));
                                                                                                                    };
                                                                                                                }, _address154.concat('_158'), ad.add(c3d8b2Mul, c1d8b3Mul));
                                                                                                            };
                                                                                                        }, _address154.concat('_157'), assign_array, {
                                                                                                            array: tmp_1,
                                                                                                            MSCALE_val: _result26
                                                                                                        }, ad.add(i, 32));
                                                                                                    };
                                                                                                }, _address154.concat('_156'), ad.mul(c1d4, b0b1Sub1));
                                                                                            };
                                                                                        }, _address154.concat('_155'), assign_array, {
                                                                                            array: context.tmp,
                                                                                            MSCALE_val: _result27
                                                                                        }, i);
                                                                                    };
                                                                                }, _address154.concat('_154'), ad.mul(c1d4, b0b1Add1));
                                                                            };
                                                                        }, _address154.concat('_153'), ad.add(v3, ad.mul(ad.sub(0, 1), v4)), 2);
                                                                    };
                                                                }, _address154.concat('_152'), ad.add(v3, v4), 2);
                                                            };
                                                        }, _address154.concat('_151'), ad.add(v2, ad.mul(ad.sub(0, 1), v5)), 2);
                                                    };
                                                }, _address154.concat('_150'), ad.add(v2, v5), 2);
                                            };
                                        }, _address154.concat('_149'), ad.add(v1, ad.mul(ad.sub(0, 1), v6)), 2);
                                    };
                                }, _address154.concat('_148'), ad.add(v1, v6), 2);
                            };
                        }, _address154.concat('_147'), ad.add(v0, ad.mul(ad.sub(0, 1), v7)), 2);
                    };
                }, _address154.concat('_146'), ad.add(v0, v7), 2);
            };
        };
        return function () {
            return ad.eq(context.dcten, !1) ? _k19(globalStore, undefined) : _k29(globalStore, undefined);
        };
    };
    var dct_second_loop_body = function dct_second_loop_body(globalStore, _k2, _address155, context, i) {
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
                                                                                            return MSCALE(globalStore, function (globalStore, _result18) {
                                                                                                return function () {
                                                                                                    return CLIP(globalStore, function (globalStore, _result17) {
                                                                                                        return function () {
                                                                                                            return for_one(globalStore, function (globalStore, outqueue_0) {
                                                                                                                return function () {
                                                                                                                    return MSCALE(globalStore, function (globalStore, _result16) {
                                                                                                                        return function () {
                                                                                                                            return CLIP(globalStore, function (globalStore, _result15) {
                                                                                                                                return function () {
                                                                                                                                    return for_one(globalStore, function (globalStore, outqueue_1) {
                                                                                                                                        return function () {
                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result14) {
                                                                                                                                                return function () {
                                                                                                                                                    return CLIP(globalStore, function (globalStore, _result13) {
                                                                                                                                                        return function () {
                                                                                                                                                            return for_one(globalStore, function (globalStore, outqueue_2) {
                                                                                                                                                                return function () {
                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result12) {
                                                                                                                                                                        return function () {
                                                                                                                                                                            return CLIP(globalStore, function (globalStore, _result11) {
                                                                                                                                                                                return function () {
                                                                                                                                                                                    return for_one(globalStore, function (globalStore, outqueue_3) {
                                                                                                                                                                                        return function () {
                                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result10) {
                                                                                                                                                                                                return function () {
                                                                                                                                                                                                    return CLIP(globalStore, function (globalStore, _result9) {
                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                            return for_one(globalStore, function (globalStore, outqueue_4) {
                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result8) {
                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                            return CLIP(globalStore, function (globalStore, _result7) {
                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                    return for_one(globalStore, function (globalStore, outqueue_5) {
                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                            return MSCALE(globalStore, function (globalStore, _result6) {
                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                    return CLIP(globalStore, function (globalStore, _result5) {
                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                            return for_one(globalStore, function (globalStore, outqueue_6) {
                                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                                    return MSCALE(globalStore, function (globalStore, _result4) {
                                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                                            return CLIP(globalStore, function (globalStore, _result3) {
                                                                                                                                                                                                                                                                                return function () {
                                                                                                                                                                                                                                                                                    return for_one(globalStore, function (globalStore, outqueue_7) {
                                                                                                                                                                                                                                                                                        return function () {
                                                                                                                                                                                                                                                                                            return _k2(globalStore, {
                                                                                                                                                                                                                                                                                                tmp: context.tmp,
                                                                                                                                                                                                                                                                                                outqueue: outqueue_7
                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                    }, _address155.concat('_205'), assign_array, {
                                                                                                                                                                                                                                                                                        array: outqueue_6,
                                                                                                                                                                                                                                                                                        MSCALE_val: _result3
                                                                                                                                                                                                                                                                                    }, ad.add(ad.mul(i, 8), 7));
                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                            }, _address155.concat('_204'), _result4);
                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                    }, _address155.concat('_203'), ad.sub(ad.mul(c7d16, ta3), ad.mul(c1d16, ta0)));
                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                            }, _address155.concat('_202'), assign_array, {
                                                                                                                                                                                                                                                                array: outqueue_5,
                                                                                                                                                                                                                                                                MSCALE_val: _result5
                                                                                                                                                                                                                                                            }, ad.add(ad.mul(i, 8), 5));
                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                    }, _address155.concat('_201'), _result6);
                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                            }, _address155.concat('_200'), ad.add(ad.mul(c3d16, ta1), ad.mul(c5d16, ta2)));
                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                    }, _address155.concat('_199'), assign_array, {
                                                                                                                                                                                                                                        array: outqueue_4,
                                                                                                                                                                                                                                        MSCALE_val: _result7
                                                                                                                                                                                                                                    }, ad.add(ad.mul(i, 8), 3));
                                                                                                                                                                                                                                };
                                                                                                                                                                                                                            }, _address155.concat('_198'), _result8);
                                                                                                                                                                                                                        };
                                                                                                                                                                                                                    }, _address155.concat('_197'), ad.sub(ad.mul(c3d16, ta2), ad.mul(c5d16, ta1)));
                                                                                                                                                                                                                };
                                                                                                                                                                                                            }, _address155.concat('_196'), assign_array, {
                                                                                                                                                                                                                array: outqueue_3,
                                                                                                                                                                                                                MSCALE_val: _result9
                                                                                                                                                                                                            }, ad.add(ad.mul(i, 8), 1));
                                                                                                                                                                                                        };
                                                                                                                                                                                                    }, _address155.concat('_195'), _result10);
                                                                                                                                                                                                };
                                                                                                                                                                                            }, _address155.concat('_194'), ad.add(ad.mul(c7d16, ta0), ad.mul(c1d16, ta3)));
                                                                                                                                                                                        };
                                                                                                                                                                                    }, _address155.concat('_193'), assign_array, {
                                                                                                                                                                                        array: outqueue_2,
                                                                                                                                                                                        MSCALE_val: _result11
                                                                                                                                                                                    }, ad.add(ad.mul(i, 8), 6));
                                                                                                                                                                                };
                                                                                                                                                                            }, _address155.concat('_192'), _result12);
                                                                                                                                                                        };
                                                                                                                                                                    }, _address155.concat('_191'), ad.sub(c3d8b3Mul, c1d8b2Mul));
                                                                                                                                                                };
                                                                                                                                                            }, _address155.concat('_190'), assign_array, {
                                                                                                                                                                array: outqueue_1,
                                                                                                                                                                MSCALE_val: _result13
                                                                                                                                                            }, ad.add(ad.mul(i, 8), 2));
                                                                                                                                                        };
                                                                                                                                                    }, _address155.concat('_189'), _result14);
                                                                                                                                                };
                                                                                                                                            }, _address155.concat('_188'), ad.add(c3d8b2Mul, c1d8b3Mul));
                                                                                                                                        };
                                                                                                                                    }, _address155.concat('_187'), assign_array, {
                                                                                                                                        array: outqueue_0,
                                                                                                                                        MSCALE_val: _result15
                                                                                                                                    }, ad.add(ad.mul(i, 8), 4));
                                                                                                                                };
                                                                                                                            }, _address155.concat('_186'), _result16);
                                                                                                                        };
                                                                                                                    }, _address155.concat('_185'), ad.mul(c1d4, b0b1Sub));
                                                                                                                };
                                                                                                            }, _address155.concat('_184'), assign_array, {
                                                                                                                array: context.outqueue,
                                                                                                                MSCALE_val: _result17
                                                                                                            }, ad.mul(i, 8));
                                                                                                        };
                                                                                                    }, _address155.concat('_183'), _result18);
                                                                                                };
                                                                                            }, _address155.concat('_182'), ad.mul(c1d4, b0b1Add));
                                                                                        };
                                                                                    }, _address155.concat('_181'), ad.mul(c1d4, c1c2Add));
                                                                                };
                                                                            }, _address155.concat('_180'), ad.mul(c1d4, c1c2Sub));
                                                                        };
                                                                    }, _address155.concat('_179'), ad.add(v3, v4), 1);
                                                                };
                                                            }, _address155.concat('_178'), ad.add(v3, ad.mul(ad.sub(0, 1), v4)), 1);
                                                        };
                                                    }, _address155.concat('_177'), ad.add(v2, v5), 1);
                                                };
                                            }, _address155.concat('_176'), ad.add(v2, ad.mul(ad.sub(0, 1), v5)), 1);
                                        };
                                    }, _address155.concat('_175'), ad.add(v1, v6), 1);
                                };
                            }, _address155.concat('_174'), ad.add(v1, ad.mul(ad.sub(0, 1), v6)), 1);
                        };
                    }, _address155.concat('_173'), ad.add(v0, v7), 1);
                };
            }, _address155.concat('_172'), ad.add(v0, ad.mul(ad.sub(0, 1), v7)), 1);
        };
    };
    return function () {
        return get_file_lines(globalStore, function (globalStore, file_lines) {
            var inqueue = file_lines[0].split('');
            var tmp = [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                11,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                11,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ];
            var outqueue = [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                11,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                11,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ];
            var qen = !0;
            var dcten = qen;
            var first_loop_context = {
                inqueue: inqueue,
                dcten: dcten,
                qen: qen,
                tmp: tmp
            };
            return function () {
                return for_loop_2(globalStore, function (globalStore, dct_first_loop_result) {
                    var second_loop_context = {
                        tmp: dct_first_loop_result.tmp,
                        outqueue: outqueue
                    };
                    return function () {
                        return for_loop_2(globalStore, function (globalStore, dct_second_loop_result) {
                            var _dummy1 = console.log(dct_second_loop_result.outqueue);
                            return function () {
                                return _k0(globalStore, 1);
                            };
                        }, _address0.concat('_208'), dct_second_loop_body, second_loop_context, 0, 8);
                    };
                }, _address0.concat('_207'), dct_first_loop_body, first_loop_context, 0, 8);
            };
        }, _address0.concat('_206'), 'dct_in_golden.txt');
    };
}));

main(__runner__)({}, topK, '');