'use strict';
var $JSCompiler_prototypeAlias$$;
function $$jscomp$arrayIteratorImpl$$($array$jscomp$6$$) {
  var $index$jscomp$101$$ = 0;
  return function() {
    return $index$jscomp$101$$ < $array$jscomp$6$$.length ? {done:!1, value:$array$jscomp$6$$[$index$jscomp$101$$++]} : {done:!0};
  };
}
var $$jscomp$defineProperty$$ = "function" == typeof Object.defineProperties ? Object.defineProperty : function($target$jscomp$95$$, $property$jscomp$6$$, $descriptor$jscomp$1$$) {
  if ($target$jscomp$95$$ == Array.prototype || $target$jscomp$95$$ == Object.prototype) {
    return $target$jscomp$95$$;
  }
  $target$jscomp$95$$[$property$jscomp$6$$] = $descriptor$jscomp$1$$.value;
  return $target$jscomp$95$$;
};
function $$jscomp$getGlobal$$($passedInThis_possibleGlobals$$) {
  $passedInThis_possibleGlobals$$ = ["object" == typeof globalThis && globalThis, $passedInThis_possibleGlobals$$, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var $i$jscomp$3$$ = 0; $i$jscomp$3$$ < $passedInThis_possibleGlobals$$.length; ++$i$jscomp$3$$) {
    var $maybeGlobal$$ = $passedInThis_possibleGlobals$$[$i$jscomp$3$$];
    if ($maybeGlobal$$ && $maybeGlobal$$.Math == Math) {
      return $maybeGlobal$$;
    }
  }
  throw Error("Cannot find global object");
}
var $$jscomp$global$$ = $$jscomp$getGlobal$$(this);
function $$jscomp$polyfill$$($property$jscomp$inline_184_split$jscomp$inline_181_target$jscomp$97$$, $impl$jscomp$inline_186_polyfill$jscomp$1$$) {
  if ($impl$jscomp$inline_186_polyfill$jscomp$1$$) {
    a: {
      var $obj$jscomp$inline_180$$ = $$jscomp$global$$;
      $property$jscomp$inline_184_split$jscomp$inline_181_target$jscomp$97$$ = $property$jscomp$inline_184_split$jscomp$inline_181_target$jscomp$97$$.split(".");
      for (var $i$jscomp$inline_182_orig$jscomp$inline_185$$ = 0; $i$jscomp$inline_182_orig$jscomp$inline_185$$ < $property$jscomp$inline_184_split$jscomp$inline_181_target$jscomp$97$$.length - 1; $i$jscomp$inline_182_orig$jscomp$inline_185$$++) {
        var $key$jscomp$inline_183$$ = $property$jscomp$inline_184_split$jscomp$inline_181_target$jscomp$97$$[$i$jscomp$inline_182_orig$jscomp$inline_185$$];
        if (!($key$jscomp$inline_183$$ in $obj$jscomp$inline_180$$)) {
          break a;
        }
        $obj$jscomp$inline_180$$ = $obj$jscomp$inline_180$$[$key$jscomp$inline_183$$];
      }
      $property$jscomp$inline_184_split$jscomp$inline_181_target$jscomp$97$$ = $property$jscomp$inline_184_split$jscomp$inline_181_target$jscomp$97$$[$property$jscomp$inline_184_split$jscomp$inline_181_target$jscomp$97$$.length - 1];
      $i$jscomp$inline_182_orig$jscomp$inline_185$$ = $obj$jscomp$inline_180$$[$property$jscomp$inline_184_split$jscomp$inline_181_target$jscomp$97$$];
      $impl$jscomp$inline_186_polyfill$jscomp$1$$ = $impl$jscomp$inline_186_polyfill$jscomp$1$$($i$jscomp$inline_182_orig$jscomp$inline_185$$);
      $impl$jscomp$inline_186_polyfill$jscomp$1$$ != $i$jscomp$inline_182_orig$jscomp$inline_185$$ && null != $impl$jscomp$inline_186_polyfill$jscomp$1$$ && $$jscomp$defineProperty$$($obj$jscomp$inline_180$$, $property$jscomp$inline_184_split$jscomp$inline_181_target$jscomp$97$$, {configurable:!0, writable:!0, value:$impl$jscomp$inline_186_polyfill$jscomp$1$$});
    }
  }
}
$$jscomp$polyfill$$("Symbol", function($orig$jscomp$1$$) {
  function $symbolPolyfill$$($opt_description$jscomp$2$$) {
    if (this instanceof $symbolPolyfill$$) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new $SymbolClass$$($SYMBOL_PREFIX$$ + ($opt_description$jscomp$2$$ || "") + "_" + $counter$$++, $opt_description$jscomp$2$$);
  }
  function $SymbolClass$$($id$jscomp$30$$, $opt_description$jscomp$1$$) {
    this.$g$ = $id$jscomp$30$$;
    $$jscomp$defineProperty$$(this, "description", {configurable:!0, writable:!0, value:$opt_description$jscomp$1$$});
  }
  if ($orig$jscomp$1$$) {
    return $orig$jscomp$1$$;
  }
  $SymbolClass$$.prototype.toString = function() {
    return this.$g$;
  };
  var $SYMBOL_PREFIX$$ = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", $counter$$ = 0;
  return $symbolPolyfill$$;
});
$$jscomp$polyfill$$("Symbol.iterator", function($orig$jscomp$2_symbolIterator$$) {
  if ($orig$jscomp$2_symbolIterator$$) {
    return $orig$jscomp$2_symbolIterator$$;
  }
  $orig$jscomp$2_symbolIterator$$ = Symbol("Symbol.iterator");
  for (var $arrayLikes$$ = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), $i$jscomp$6$$ = 0; $i$jscomp$6$$ < $arrayLikes$$.length; $i$jscomp$6$$++) {
    var $ArrayLikeCtor$$ = $$jscomp$global$$[$arrayLikes$$[$i$jscomp$6$$]];
    "function" === typeof $ArrayLikeCtor$$ && "function" != typeof $ArrayLikeCtor$$.prototype[$orig$jscomp$2_symbolIterator$$] && $$jscomp$defineProperty$$($ArrayLikeCtor$$.prototype, $orig$jscomp$2_symbolIterator$$, {configurable:!0, writable:!0, value:function() {
      return $$jscomp$iteratorPrototype$$($$jscomp$arrayIteratorImpl$$(this));
    }});
  }
  return $orig$jscomp$2_symbolIterator$$;
});
function $$jscomp$iteratorPrototype$$($iterator$jscomp$6_next$$) {
  $iterator$jscomp$6_next$$ = {next:$iterator$jscomp$6_next$$};
  $iterator$jscomp$6_next$$[Symbol.iterator] = function() {
    return this;
  };
  return $iterator$jscomp$6_next$$;
}
function $$jscomp$createTemplateTagFirstArg$$($arrayStrings$$) {
  return $arrayStrings$$.raw = $arrayStrings$$;
}
function $$jscomp$makeIterator$$($iterable$jscomp$4$$) {
  var $iteratorFunction$$ = "undefined" != typeof Symbol && Symbol.iterator && $iterable$jscomp$4$$[Symbol.iterator];
  if ($iteratorFunction$$) {
    return $iteratorFunction$$.call($iterable$jscomp$4$$);
  }
  if ("number" == typeof $iterable$jscomp$4$$.length) {
    return {next:$$jscomp$arrayIteratorImpl$$($iterable$jscomp$4$$)};
  }
  throw Error(String($iterable$jscomp$4$$) + " is not an iterable or ArrayLike");
}
function $$jscomp$arrayFromIterable$$($JSCompiler_temp$jscomp$135_iterable$jscomp$5_iterator$jscomp$inline_188$$) {
  if (!($JSCompiler_temp$jscomp$135_iterable$jscomp$5_iterator$jscomp$inline_188$$ instanceof Array)) {
    $JSCompiler_temp$jscomp$135_iterable$jscomp$5_iterator$jscomp$inline_188$$ = $$jscomp$makeIterator$$($JSCompiler_temp$jscomp$135_iterable$jscomp$5_iterator$jscomp$inline_188$$);
    for (var $i$jscomp$inline_189$$, $arr$jscomp$inline_190$$ = []; !($i$jscomp$inline_189$$ = $JSCompiler_temp$jscomp$135_iterable$jscomp$5_iterator$jscomp$inline_188$$.next()).done;) {
      $arr$jscomp$inline_190$$.push($i$jscomp$inline_189$$.value);
    }
    $JSCompiler_temp$jscomp$135_iterable$jscomp$5_iterator$jscomp$inline_188$$ = $arr$jscomp$inline_190$$;
  }
  return $JSCompiler_temp$jscomp$135_iterable$jscomp$5_iterator$jscomp$inline_188$$;
}
function $$jscomp$owns$$($obj$jscomp$31$$, $prop$jscomp$2$$) {
  return Object.prototype.hasOwnProperty.call($obj$jscomp$31$$, $prop$jscomp$2$$);
}
var $$jscomp$assign$$ = "function" == typeof Object.assign ? Object.assign : function($target$jscomp$100$$, $var_args$jscomp$35$$) {
  for (var $i$jscomp$8$$ = 1; $i$jscomp$8$$ < arguments.length; $i$jscomp$8$$++) {
    var $source$jscomp$17$$ = arguments[$i$jscomp$8$$];
    if ($source$jscomp$17$$) {
      for (var $key$jscomp$41$$ in $source$jscomp$17$$) {
        $$jscomp$owns$$($source$jscomp$17$$, $key$jscomp$41$$) && ($target$jscomp$100$$[$key$jscomp$41$$] = $source$jscomp$17$$[$key$jscomp$41$$]);
      }
    }
  }
  return $target$jscomp$100$$;
};
$$jscomp$polyfill$$("Object.assign", function($orig$jscomp$4$$) {
  return $orig$jscomp$4$$ || $$jscomp$assign$$;
});
var $$jscomp$objectCreate$$ = "function" == typeof Object.create ? Object.create : function($prototype$$) {
  function $ctor$$() {
  }
  $ctor$$.prototype = $prototype$$;
  return new $ctor$$();
}, $$jscomp$construct$$ = function() {
  function $reflectConstructWorks$$() {
    function $Base$$() {
    }
    new $Base$$();
    Reflect.construct($Base$$, [], function() {
    });
    return new $Base$$() instanceof $Base$$;
  }
  if ("undefined" != typeof Reflect && Reflect.construct) {
    if ($reflectConstructWorks$$()) {
      return Reflect.construct;
    }
    var $brokenConstruct$$ = Reflect.construct;
    return function($out_target$jscomp$101$$, $argList$jscomp$2$$, $opt_newTarget$$) {
      $out_target$jscomp$101$$ = $brokenConstruct$$($out_target$jscomp$101$$, $argList$jscomp$2$$);
      $opt_newTarget$$ && Reflect.setPrototypeOf($out_target$jscomp$101$$, $opt_newTarget$$.prototype);
      return $out_target$jscomp$101$$;
    };
  }
  return function($target$jscomp$102$$, $argList$jscomp$3$$, $obj$jscomp$32_opt_newTarget$jscomp$1$$) {
    void 0 === $obj$jscomp$32_opt_newTarget$jscomp$1$$ && ($obj$jscomp$32_opt_newTarget$jscomp$1$$ = $target$jscomp$102$$);
    $obj$jscomp$32_opt_newTarget$jscomp$1$$ = $$jscomp$objectCreate$$($obj$jscomp$32_opt_newTarget$jscomp$1$$.prototype || Object.prototype);
    return Function.prototype.apply.call($target$jscomp$102$$, $obj$jscomp$32_opt_newTarget$jscomp$1$$, $argList$jscomp$3$$) || $obj$jscomp$32_opt_newTarget$jscomp$1$$;
  };
}(), $JSCompiler_temp$jscomp$136$$;
if ("function" == typeof Object.setPrototypeOf) {
  $JSCompiler_temp$jscomp$136$$ = Object.setPrototypeOf;
} else {
  var $JSCompiler_inline_result$jscomp$137$$;
  a: {
    var $x$jscomp$inline_192$$ = {a:!0}, $y$jscomp$inline_193$$ = {};
    try {
      $y$jscomp$inline_193$$.__proto__ = $x$jscomp$inline_192$$;
      $JSCompiler_inline_result$jscomp$137$$ = $y$jscomp$inline_193$$.a;
      break a;
    } catch ($e$jscomp$inline_194$$) {
    }
    $JSCompiler_inline_result$jscomp$137$$ = !1;
  }
  $JSCompiler_temp$jscomp$136$$ = $JSCompiler_inline_result$jscomp$137$$ ? function($target$jscomp$103$$, $proto$jscomp$4$$) {
    $target$jscomp$103$$.__proto__ = $proto$jscomp$4$$;
    if ($target$jscomp$103$$.__proto__ !== $proto$jscomp$4$$) {
      throw new TypeError($target$jscomp$103$$ + " is not extensible");
    }
    return $target$jscomp$103$$;
  } : null;
}
var $$jscomp$setPrototypeOf$$ = $JSCompiler_temp$jscomp$136$$;
function $$jscomp$inherits$$($childCtor$$, $parentCtor$$) {
  $childCtor$$.prototype = $$jscomp$objectCreate$$($parentCtor$$.prototype);
  $childCtor$$.prototype.constructor = $childCtor$$;
  if ($$jscomp$setPrototypeOf$$) {
    $$jscomp$setPrototypeOf$$($childCtor$$, $parentCtor$$);
  } else {
    for (var $p$$ in $parentCtor$$) {
      if ("prototype" != $p$$) {
        if (Object.defineProperties) {
          var $descriptor$jscomp$2$$ = Object.getOwnPropertyDescriptor($parentCtor$$, $p$$);
          $descriptor$jscomp$2$$ && Object.defineProperty($childCtor$$, $p$$, $descriptor$jscomp$2$$);
        } else {
          $childCtor$$[$p$$] = $parentCtor$$[$p$$];
        }
      }
    }
  }
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
}
function $$jscomp$generator$Context$$() {
  this.$m$ = !1;
  this.$j$ = null;
  this.$i$ = void 0;
  this.$g$ = 1;
  this.$u$ = this.$o$ = 0;
  this.$l$ = null;
}
function $JSCompiler_StaticMethods_start_$$($JSCompiler_StaticMethods_start_$self$$) {
  if ($JSCompiler_StaticMethods_start_$self$$.$m$) {
    throw new TypeError("Generator is already running");
  }
  $JSCompiler_StaticMethods_start_$self$$.$m$ = !0;
}
$$jscomp$generator$Context$$.prototype.$s$ = function($value$jscomp$93$$) {
  this.$i$ = $value$jscomp$93$$;
};
function $JSCompiler_StaticMethods_JSC$3512_throw_$$($JSCompiler_StaticMethods_JSC$3512_throw_$self$$, $e$jscomp$8$$) {
  $JSCompiler_StaticMethods_JSC$3512_throw_$self$$.$l$ = {$exception$:$e$jscomp$8$$, isException:!0};
  $JSCompiler_StaticMethods_JSC$3512_throw_$self$$.$g$ = $JSCompiler_StaticMethods_JSC$3512_throw_$self$$.$o$ || $JSCompiler_StaticMethods_JSC$3512_throw_$self$$.$u$;
}
$$jscomp$generator$Context$$.prototype.return = function($value$jscomp$94$$) {
  this.$l$ = {return:$value$jscomp$94$$};
  this.$g$ = this.$u$;
};
function $JSCompiler_StaticMethods_yield$$($JSCompiler_StaticMethods_yield$self$$, $value$jscomp$95$$, $resumeAddress$$) {
  $JSCompiler_StaticMethods_yield$self$$.$g$ = $resumeAddress$$;
  return {value:$value$jscomp$95$$};
}
function $$jscomp$generator$Engine_$$($program$jscomp$63$$) {
  this.$g$ = new $$jscomp$generator$Context$$();
  this.$i$ = $program$jscomp$63$$;
}
function $JSCompiler_StaticMethods_return_$$($JSCompiler_StaticMethods_return_$self$$, $value$jscomp$97$$) {
  $JSCompiler_StaticMethods_start_$$($JSCompiler_StaticMethods_return_$self$$.$g$);
  var $yieldAllIterator$$ = $JSCompiler_StaticMethods_return_$self$$.$g$.$j$;
  if ($yieldAllIterator$$) {
    return $JSCompiler_StaticMethods_yieldAllStep_$$($JSCompiler_StaticMethods_return_$self$$, "return" in $yieldAllIterator$$ ? $yieldAllIterator$$["return"] : function($v$$) {
      return {value:$v$$, done:!0};
    }, $value$jscomp$97$$, $JSCompiler_StaticMethods_return_$self$$.$g$.return);
  }
  $JSCompiler_StaticMethods_return_$self$$.$g$.return($value$jscomp$97$$);
  return $JSCompiler_StaticMethods_nextStep_$$($JSCompiler_StaticMethods_return_$self$$);
}
function $JSCompiler_StaticMethods_yieldAllStep_$$($JSCompiler_StaticMethods_yieldAllStep_$self$$, $action$jscomp$1$$, $value$jscomp$98$$, $nextAction$$) {
  try {
    var $result$jscomp$4$$ = $action$jscomp$1$$.call($JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$.$j$, $value$jscomp$98$$);
    if (!($result$jscomp$4$$ instanceof Object)) {
      throw new TypeError("Iterator result " + $result$jscomp$4$$ + " is not an object");
    }
    if (!$result$jscomp$4$$.done) {
      return $JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$.$m$ = !1, $result$jscomp$4$$;
    }
    var $resultValue$$ = $result$jscomp$4$$.value;
  } catch ($e$jscomp$9$$) {
    return $JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$.$j$ = null, $JSCompiler_StaticMethods_JSC$3512_throw_$$($JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$, $e$jscomp$9$$), $JSCompiler_StaticMethods_nextStep_$$($JSCompiler_StaticMethods_yieldAllStep_$self$$);
  }
  $JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$.$j$ = null;
  $nextAction$$.call($JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$, $resultValue$$);
  return $JSCompiler_StaticMethods_nextStep_$$($JSCompiler_StaticMethods_yieldAllStep_$self$$);
}
function $JSCompiler_StaticMethods_nextStep_$$($JSCompiler_StaticMethods_nextStep_$self$$) {
  for (; $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$g$;) {
    try {
      var $abruptCompletion$jscomp$1_yieldValue$$ = $JSCompiler_StaticMethods_nextStep_$self$$.$i$($JSCompiler_StaticMethods_nextStep_$self$$.$g$);
      if ($abruptCompletion$jscomp$1_yieldValue$$) {
        return $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$m$ = !1, {value:$abruptCompletion$jscomp$1_yieldValue$$.value, done:!1};
      }
    } catch ($e$jscomp$10$$) {
      $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$i$ = void 0, $JSCompiler_StaticMethods_JSC$3512_throw_$$($JSCompiler_StaticMethods_nextStep_$self$$.$g$, $e$jscomp$10$$);
    }
  }
  $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$m$ = !1;
  if ($JSCompiler_StaticMethods_nextStep_$self$$.$g$.$l$) {
    $abruptCompletion$jscomp$1_yieldValue$$ = $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$l$;
    $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$l$ = null;
    if ($abruptCompletion$jscomp$1_yieldValue$$.isException) {
      throw $abruptCompletion$jscomp$1_yieldValue$$.$exception$;
    }
    return {value:$abruptCompletion$jscomp$1_yieldValue$$.return, done:!0};
  }
  return {value:void 0, done:!0};
}
function $$jscomp$generator$Generator_$$($engine$$) {
  this.next = function($JSCompiler_inline_result$jscomp$146_opt_value$jscomp$10$$) {
    $JSCompiler_StaticMethods_start_$$($engine$$.$g$);
    $engine$$.$g$.$j$ ? $JSCompiler_inline_result$jscomp$146_opt_value$jscomp$10$$ = $JSCompiler_StaticMethods_yieldAllStep_$$($engine$$, $engine$$.$g$.$j$.next, $JSCompiler_inline_result$jscomp$146_opt_value$jscomp$10$$, $engine$$.$g$.$s$) : ($engine$$.$g$.$s$($JSCompiler_inline_result$jscomp$146_opt_value$jscomp$10$$), $JSCompiler_inline_result$jscomp$146_opt_value$jscomp$10$$ = $JSCompiler_StaticMethods_nextStep_$$($engine$$));
    return $JSCompiler_inline_result$jscomp$146_opt_value$jscomp$10$$;
  };
  this.throw = function($JSCompiler_inline_result$jscomp$147_exception$jscomp$4$$) {
    $JSCompiler_StaticMethods_start_$$($engine$$.$g$);
    $engine$$.$g$.$j$ ? $JSCompiler_inline_result$jscomp$147_exception$jscomp$4$$ = $JSCompiler_StaticMethods_yieldAllStep_$$($engine$$, $engine$$.$g$.$j$["throw"], $JSCompiler_inline_result$jscomp$147_exception$jscomp$4$$, $engine$$.$g$.$s$) : ($JSCompiler_StaticMethods_JSC$3512_throw_$$($engine$$.$g$, $JSCompiler_inline_result$jscomp$147_exception$jscomp$4$$), $JSCompiler_inline_result$jscomp$147_exception$jscomp$4$$ = $JSCompiler_StaticMethods_nextStep_$$($engine$$));
    return $JSCompiler_inline_result$jscomp$147_exception$jscomp$4$$;
  };
  this.return = function($value$jscomp$99$$) {
    return $JSCompiler_StaticMethods_return_$$($engine$$, $value$jscomp$99$$);
  };
  this[Symbol.iterator] = function() {
    return this;
  };
}
function $$jscomp$asyncExecutePromiseGenerator$$($generator$jscomp$1$$) {
  function $passValueToGenerator$$($value$jscomp$100$$) {
    return $generator$jscomp$1$$.next($value$jscomp$100$$);
  }
  function $passErrorToGenerator$$($error$jscomp$3$$) {
    return $generator$jscomp$1$$.throw($error$jscomp$3$$);
  }
  return new Promise(function($resolve$$, $reject$$) {
    function $handleGeneratorRecord$$($genRec$$) {
      $genRec$$.done ? $resolve$$($genRec$$.value) : Promise.resolve($genRec$$.value).then($passValueToGenerator$$, $passErrorToGenerator$$).then($handleGeneratorRecord$$, $reject$$);
    }
    $handleGeneratorRecord$$($generator$jscomp$1$$.next());
  });
}
function $$jscomp$asyncExecutePromiseGeneratorProgram$$($program$jscomp$65$$) {
  return $$jscomp$asyncExecutePromiseGenerator$$(new $$jscomp$generator$Generator_$$(new $$jscomp$generator$Engine_$$($program$jscomp$65$$)));
}
function $$jscomp$getRestArguments$$() {
  for (var $startIndex$$ = Number(this), $restArgs$$ = [], $i$jscomp$9$$ = $startIndex$$; $i$jscomp$9$$ < arguments.length; $i$jscomp$9$$++) {
    $restArgs$$[$i$jscomp$9$$ - $startIndex$$] = arguments[$i$jscomp$9$$];
  }
  return $restArgs$$;
}
$$jscomp$polyfill$$("Reflect", function($orig$jscomp$5$$) {
  return $orig$jscomp$5$$ ? $orig$jscomp$5$$ : {};
});
$$jscomp$polyfill$$("Reflect.construct", function() {
  return $$jscomp$construct$$;
});
$$jscomp$polyfill$$("Reflect.setPrototypeOf", function($orig$jscomp$7$$) {
  return $orig$jscomp$7$$ ? $orig$jscomp$7$$ : $$jscomp$setPrototypeOf$$ ? function($target$jscomp$104$$, $proto$jscomp$5$$) {
    try {
      return $$jscomp$setPrototypeOf$$($target$jscomp$104$$, $proto$jscomp$5$$), !0;
    } catch ($e$jscomp$11$$) {
      return !1;
    }
  } : null;
});
$$jscomp$polyfill$$("Promise", function($NativePromise$$) {
  function $PolyfillPromise$$($executor$$) {
    this.$i$ = 0;
    this.$j$ = void 0;
    this.$g$ = [];
    this.$s$ = !1;
    var $resolveAndReject$$ = this.$l$();
    try {
      $executor$$($resolveAndReject$$.resolve, $resolveAndReject$$.reject);
    } catch ($e$jscomp$12$$) {
      $resolveAndReject$$.reject($e$jscomp$12$$);
    }
  }
  function $AsyncExecutor$$() {
    this.$g$ = null;
  }
  function $resolvingPromise$$($opt_value$jscomp$11$$) {
    return $opt_value$jscomp$11$$ instanceof $PolyfillPromise$$ ? $opt_value$jscomp$11$$ : new $PolyfillPromise$$(function($resolve$jscomp$2$$) {
      $resolve$jscomp$2$$($opt_value$jscomp$11$$);
    });
  }
  if ($NativePromise$$) {
    return $NativePromise$$;
  }
  $AsyncExecutor$$.prototype.$i$ = function($f$jscomp$1$$) {
    if (null == this.$g$) {
      this.$g$ = [];
      var $self$jscomp$1$$ = this;
      this.$j$(function() {
        $self$jscomp$1$$.$m$();
      });
    }
    this.$g$.push($f$jscomp$1$$);
  };
  var $nativeSetTimeout$$ = $$jscomp$global$$.setTimeout;
  $AsyncExecutor$$.prototype.$j$ = function($f$jscomp$2$$) {
    $nativeSetTimeout$$($f$jscomp$2$$, 0);
  };
  $AsyncExecutor$$.prototype.$m$ = function() {
    for (; this.$g$ && this.$g$.length;) {
      var $executingBatch$$ = this.$g$;
      this.$g$ = [];
      for (var $i$jscomp$10$$ = 0; $i$jscomp$10$$ < $executingBatch$$.length; ++$i$jscomp$10$$) {
        var $f$jscomp$3$$ = $executingBatch$$[$i$jscomp$10$$];
        $executingBatch$$[$i$jscomp$10$$] = null;
        try {
          $f$jscomp$3$$();
        } catch ($error$jscomp$4$$) {
          this.$l$($error$jscomp$4$$);
        }
      }
    }
    this.$g$ = null;
  };
  $AsyncExecutor$$.prototype.$l$ = function($exception$jscomp$5$$) {
    this.$j$(function() {
      throw $exception$jscomp$5$$;
    });
  };
  $PolyfillPromise$$.prototype.$l$ = function() {
    function $firstCallWins$$($method$jscomp$2$$) {
      return function($x$jscomp$93$$) {
        $alreadyCalled$$ || ($alreadyCalled$$ = !0, $method$jscomp$2$$.call($thisPromise$$, $x$jscomp$93$$));
      };
    }
    var $thisPromise$$ = this, $alreadyCalled$$ = !1;
    return {resolve:$firstCallWins$$(this.$C$), reject:$firstCallWins$$(this.$m$)};
  };
  $PolyfillPromise$$.prototype.$C$ = function($value$jscomp$101$$) {
    if ($value$jscomp$101$$ === this) {
      this.$m$(new TypeError("A Promise cannot resolve to itself"));
    } else {
      if ($value$jscomp$101$$ instanceof $PolyfillPromise$$) {
        this.$F$($value$jscomp$101$$);
      } else {
        a: {
          switch(typeof $value$jscomp$101$$) {
            case "object":
              var $JSCompiler_inline_result$jscomp$150$$ = null != $value$jscomp$101$$;
              break a;
            case "function":
              $JSCompiler_inline_result$jscomp$150$$ = !0;
              break a;
            default:
              $JSCompiler_inline_result$jscomp$150$$ = !1;
          }
        }
        $JSCompiler_inline_result$jscomp$150$$ ? this.$B$($value$jscomp$101$$) : this.$o$($value$jscomp$101$$);
      }
    }
  };
  $PolyfillPromise$$.prototype.$B$ = function($obj$jscomp$33$$) {
    var $thenMethod$$ = void 0;
    try {
      $thenMethod$$ = $obj$jscomp$33$$.then;
    } catch ($error$jscomp$5$$) {
      this.$m$($error$jscomp$5$$);
      return;
    }
    "function" == typeof $thenMethod$$ ? this.$G$($thenMethod$$, $obj$jscomp$33$$) : this.$o$($obj$jscomp$33$$);
  };
  $PolyfillPromise$$.prototype.$m$ = function($reason$jscomp$9$$) {
    this.$u$(2, $reason$jscomp$9$$);
  };
  $PolyfillPromise$$.prototype.$o$ = function($value$jscomp$103$$) {
    this.$u$(1, $value$jscomp$103$$);
  };
  $PolyfillPromise$$.prototype.$u$ = function($settledState$$, $valueOrReason$$) {
    if (0 != this.$i$) {
      throw Error("Cannot settle(" + $settledState$$ + ", " + $valueOrReason$$ + "): Promise already settled in state" + this.$i$);
    }
    this.$i$ = $settledState$$;
    this.$j$ = $valueOrReason$$;
    2 === this.$i$ && this.$D$();
    this.$v$();
  };
  $PolyfillPromise$$.prototype.$D$ = function() {
    var $self$jscomp$2$$ = this;
    $nativeSetTimeout$$(function() {
      if ($self$jscomp$2$$.$A$()) {
        var $nativeConsole$$ = $$jscomp$global$$.console;
        "undefined" !== typeof $nativeConsole$$ && $nativeConsole$$.error($self$jscomp$2$$.$j$);
      }
    }, 1);
  };
  $PolyfillPromise$$.prototype.$A$ = function() {
    if (this.$s$) {
      return !1;
    }
    var $NativeCustomEvent_event$jscomp$6$$ = $$jscomp$global$$.CustomEvent, $NativeEvent$$ = $$jscomp$global$$.Event, $nativeDispatchEvent$$ = $$jscomp$global$$.dispatchEvent;
    if ("undefined" === typeof $nativeDispatchEvent$$) {
      return !0;
    }
    "function" === typeof $NativeCustomEvent_event$jscomp$6$$ ? $NativeCustomEvent_event$jscomp$6$$ = new $NativeCustomEvent_event$jscomp$6$$("unhandledrejection", {cancelable:!0}) : "function" === typeof $NativeEvent$$ ? $NativeCustomEvent_event$jscomp$6$$ = new $NativeEvent$$("unhandledrejection", {cancelable:!0}) : ($NativeCustomEvent_event$jscomp$6$$ = $$jscomp$global$$.document.createEvent("CustomEvent"), $NativeCustomEvent_event$jscomp$6$$.initCustomEvent("unhandledrejection", !1, !0, $NativeCustomEvent_event$jscomp$6$$));
    $NativeCustomEvent_event$jscomp$6$$.promise = this;
    $NativeCustomEvent_event$jscomp$6$$.reason = this.$j$;
    return $nativeDispatchEvent$$($NativeCustomEvent_event$jscomp$6$$);
  };
  $PolyfillPromise$$.prototype.$v$ = function() {
    if (null != this.$g$) {
      for (var $i$jscomp$11$$ = 0; $i$jscomp$11$$ < this.$g$.length; ++$i$jscomp$11$$) {
        $asyncExecutor$$.$i$(this.$g$[$i$jscomp$11$$]);
      }
      this.$g$ = null;
    }
  };
  var $asyncExecutor$$ = new $AsyncExecutor$$();
  $PolyfillPromise$$.prototype.$F$ = function($promise$$) {
    var $methods$jscomp$1$$ = this.$l$();
    $promise$$.$callWhenSettled_$($methods$jscomp$1$$.resolve, $methods$jscomp$1$$.reject);
  };
  $PolyfillPromise$$.prototype.$G$ = function($thenMethod$jscomp$1$$, $thenable$$) {
    var $methods$jscomp$2$$ = this.$l$();
    try {
      $thenMethod$jscomp$1$$.call($thenable$$, $methods$jscomp$2$$.resolve, $methods$jscomp$2$$.reject);
    } catch ($error$jscomp$6$$) {
      $methods$jscomp$2$$.reject($error$jscomp$6$$);
    }
  };
  $PolyfillPromise$$.prototype.then = function($onFulfilled$$, $onRejected$jscomp$1$$) {
    function $createCallback$$($paramF$$, $defaultF$$) {
      return "function" == typeof $paramF$$ ? function($x$jscomp$94$$) {
        try {
          $resolveChild$$($paramF$$($x$jscomp$94$$));
        } catch ($error$jscomp$7$$) {
          $rejectChild$$($error$jscomp$7$$);
        }
      } : $defaultF$$;
    }
    var $resolveChild$$, $rejectChild$$, $childPromise$$ = new $PolyfillPromise$$(function($resolve$jscomp$1$$, $reject$jscomp$1$$) {
      $resolveChild$$ = $resolve$jscomp$1$$;
      $rejectChild$$ = $reject$jscomp$1$$;
    });
    this.$callWhenSettled_$($createCallback$$($onFulfilled$$, $resolveChild$$), $createCallback$$($onRejected$jscomp$1$$, $rejectChild$$));
    return $childPromise$$;
  };
  $PolyfillPromise$$.prototype.catch = function($onRejected$jscomp$2$$) {
    return this.then(void 0, $onRejected$jscomp$2$$);
  };
  $PolyfillPromise$$.prototype.$callWhenSettled_$ = function($onFulfilled$jscomp$1$$, $onRejected$jscomp$3$$) {
    function $callback$jscomp$466$$() {
      switch($thisPromise$jscomp$1$$.$i$) {
        case 1:
          $onFulfilled$jscomp$1$$($thisPromise$jscomp$1$$.$j$);
          break;
        case 2:
          $onRejected$jscomp$3$$($thisPromise$jscomp$1$$.$j$);
          break;
        default:
          throw Error("Unexpected state: " + $thisPromise$jscomp$1$$.$i$);
      }
    }
    var $thisPromise$jscomp$1$$ = this;
    null == this.$g$ ? $asyncExecutor$$.$i$($callback$jscomp$466$$) : this.$g$.push($callback$jscomp$466$$);
    this.$s$ = !0;
  };
  $PolyfillPromise$$.resolve = $resolvingPromise$$;
  $PolyfillPromise$$.reject = function($opt_reason$jscomp$1$$) {
    return new $PolyfillPromise$$(function($resolve$jscomp$3$$, $reject$jscomp$3$$) {
      $reject$jscomp$3$$($opt_reason$jscomp$1$$);
    });
  };
  $PolyfillPromise$$.race = function($thenablesOrValues$$) {
    return new $PolyfillPromise$$(function($resolve$jscomp$4$$, $reject$jscomp$4$$) {
      for (var $iterator$jscomp$9$$ = $$jscomp$makeIterator$$($thenablesOrValues$$), $iterRec$$ = $iterator$jscomp$9$$.next(); !$iterRec$$.done; $iterRec$$ = $iterator$jscomp$9$$.next()) {
        $resolvingPromise$$($iterRec$$.value).$callWhenSettled_$($resolve$jscomp$4$$, $reject$jscomp$4$$);
      }
    });
  };
  $PolyfillPromise$$.all = function($thenablesOrValues$jscomp$1$$) {
    var $iterator$jscomp$10$$ = $$jscomp$makeIterator$$($thenablesOrValues$jscomp$1$$), $iterRec$jscomp$1$$ = $iterator$jscomp$10$$.next();
    return $iterRec$jscomp$1$$.done ? $resolvingPromise$$([]) : new $PolyfillPromise$$(function($resolveAll$$, $rejectAll$$) {
      function $onFulfilled$jscomp$2$$($i$jscomp$12$$) {
        return function($ithResult$$) {
          $resultsArray$$[$i$jscomp$12$$] = $ithResult$$;
          $unresolvedCount$$--;
          0 == $unresolvedCount$$ && $resolveAll$$($resultsArray$$);
        };
      }
      var $resultsArray$$ = [], $unresolvedCount$$ = 0;
      do {
        $resultsArray$$.push(void 0), $unresolvedCount$$++, $resolvingPromise$$($iterRec$jscomp$1$$.value).$callWhenSettled_$($onFulfilled$jscomp$2$$($resultsArray$$.length - 1), $rejectAll$$), $iterRec$jscomp$1$$ = $iterator$jscomp$10$$.next();
      } while (!$iterRec$jscomp$1$$.done);
    });
  };
  return $PolyfillPromise$$;
});
$$jscomp$polyfill$$("Object.setPrototypeOf", function($orig$jscomp$8$$) {
  return $orig$jscomp$8$$ || $$jscomp$setPrototypeOf$$;
});
function $$jscomp$checkStringArgs$$($thisArg$jscomp$14$$, $arg$jscomp$8$$, $func$jscomp$3$$) {
  if (null == $thisArg$jscomp$14$$) {
    throw new TypeError("The 'this' value for String.prototype." + $func$jscomp$3$$ + " must not be null or undefined");
  }
  if ($arg$jscomp$8$$ instanceof RegExp) {
    throw new TypeError("First argument to String.prototype." + $func$jscomp$3$$ + " must not be a regular expression");
  }
  return $thisArg$jscomp$14$$ + "";
}
$$jscomp$polyfill$$("String.prototype.endsWith", function($orig$jscomp$9$$) {
  return $orig$jscomp$9$$ ? $orig$jscomp$9$$ : function($searchString$jscomp$3$$, $i$jscomp$13_opt_position$jscomp$3$$) {
    var $string$jscomp$3$$ = $$jscomp$checkStringArgs$$(this, $searchString$jscomp$3$$, "endsWith");
    void 0 === $i$jscomp$13_opt_position$jscomp$3$$ && ($i$jscomp$13_opt_position$jscomp$3$$ = $string$jscomp$3$$.length);
    $i$jscomp$13_opt_position$jscomp$3$$ = Math.max(0, Math.min($i$jscomp$13_opt_position$jscomp$3$$ | 0, $string$jscomp$3$$.length));
    for (var $j$$ = $searchString$jscomp$3$$.length; 0 < $j$$ && 0 < $i$jscomp$13_opt_position$jscomp$3$$;) {
      if ($string$jscomp$3$$[--$i$jscomp$13_opt_position$jscomp$3$$] != $searchString$jscomp$3$$[--$j$$]) {
        return !1;
      }
    }
    return 0 >= $j$$;
  };
});
$$jscomp$polyfill$$("WeakMap", function($NativeWeakMap$$) {
  function $PolyfillWeakMap$$($iter$jscomp$1_opt_iterable$jscomp$4$$) {
    this.$g$ = ($index$jscomp$102$$ += Math.random() + 1).toString();
    if ($iter$jscomp$1_opt_iterable$jscomp$4$$) {
      $iter$jscomp$1_opt_iterable$jscomp$4$$ = $$jscomp$makeIterator$$($iter$jscomp$1_opt_iterable$jscomp$4$$);
      for (var $entry_item$jscomp$22$$; !($entry_item$jscomp$22$$ = $iter$jscomp$1_opt_iterable$jscomp$4$$.next()).done;) {
        $entry_item$jscomp$22$$ = $entry_item$jscomp$22$$.value, this.set($entry_item$jscomp$22$$[0], $entry_item$jscomp$22$$[1]);
      }
    }
  }
  function $WeakMapMembership$$() {
  }
  function $isValidKey$$($key$jscomp$43$$) {
    var $type$jscomp$168$$ = typeof $key$jscomp$43$$;
    return "object" === $type$jscomp$168$$ && null !== $key$jscomp$43$$ || "function" === $type$jscomp$168$$;
  }
  function $insert$$($target$jscomp$106$$) {
    if (!$$jscomp$owns$$($target$jscomp$106$$, $prop$jscomp$3$$)) {
      var $obj$jscomp$34$$ = new $WeakMapMembership$$();
      $$jscomp$defineProperty$$($target$jscomp$106$$, $prop$jscomp$3$$, {value:$obj$jscomp$34$$});
    }
  }
  function $patch$$($name$jscomp$76$$) {
    var $prev$$ = Object[$name$jscomp$76$$];
    $prev$$ && (Object[$name$jscomp$76$$] = function($target$jscomp$107$$) {
      if ($target$jscomp$107$$ instanceof $WeakMapMembership$$) {
        return $target$jscomp$107$$;
      }
      Object.isExtensible($target$jscomp$107$$) && $insert$$($target$jscomp$107$$);
      return $prev$$($target$jscomp$107$$);
    });
  }
  if (function() {
    if (!$NativeWeakMap$$ || !Object.seal) {
      return !1;
    }
    try {
      var $x$jscomp$95$$ = Object.seal({}), $y$jscomp$78$$ = Object.seal({}), $map$$ = new $NativeWeakMap$$([[$x$jscomp$95$$, 2], [$y$jscomp$78$$, 3]]);
      if (2 != $map$$.get($x$jscomp$95$$) || 3 != $map$$.get($y$jscomp$78$$)) {
        return !1;
      }
      $map$$.delete($x$jscomp$95$$);
      $map$$.set($y$jscomp$78$$, 4);
      return !$map$$.has($x$jscomp$95$$) && 4 == $map$$.get($y$jscomp$78$$);
    } catch ($err$jscomp$4$$) {
      return !1;
    }
  }()) {
    return $NativeWeakMap$$;
  }
  var $prop$jscomp$3$$ = "$jscomp_hidden_" + Math.random();
  $patch$$("freeze");
  $patch$$("preventExtensions");
  $patch$$("seal");
  var $index$jscomp$102$$ = 0;
  $PolyfillWeakMap$$.prototype.set = function($key$jscomp$44$$, $value$jscomp$104$$) {
    if (!$isValidKey$$($key$jscomp$44$$)) {
      throw Error("Invalid WeakMap key");
    }
    $insert$$($key$jscomp$44$$);
    if (!$$jscomp$owns$$($key$jscomp$44$$, $prop$jscomp$3$$)) {
      throw Error("WeakMap key fail: " + $key$jscomp$44$$);
    }
    $key$jscomp$44$$[$prop$jscomp$3$$][this.$g$] = $value$jscomp$104$$;
    return this;
  };
  $PolyfillWeakMap$$.prototype.get = function($key$jscomp$45$$) {
    return $isValidKey$$($key$jscomp$45$$) && $$jscomp$owns$$($key$jscomp$45$$, $prop$jscomp$3$$) ? $key$jscomp$45$$[$prop$jscomp$3$$][this.$g$] : void 0;
  };
  $PolyfillWeakMap$$.prototype.has = function($key$jscomp$46$$) {
    return $isValidKey$$($key$jscomp$46$$) && $$jscomp$owns$$($key$jscomp$46$$, $prop$jscomp$3$$) && $$jscomp$owns$$($key$jscomp$46$$[$prop$jscomp$3$$], this.$g$);
  };
  $PolyfillWeakMap$$.prototype.delete = function($key$jscomp$47$$) {
    return $isValidKey$$($key$jscomp$47$$) && $$jscomp$owns$$($key$jscomp$47$$, $prop$jscomp$3$$) && $$jscomp$owns$$($key$jscomp$47$$[$prop$jscomp$3$$], this.$g$) ? delete $key$jscomp$47$$[$prop$jscomp$3$$][this.$g$] : !1;
  };
  return $PolyfillWeakMap$$;
});
$$jscomp$polyfill$$("Map", function($NativeMap$$) {
  function $createHead$$() {
    var $head$$ = {};
    return $head$$.previous = $head$$.next = $head$$.head = $head$$;
  }
  function $makeIterator$$($map$jscomp$3$$, $func$jscomp$4$$) {
    var $entry$jscomp$8$$ = $map$jscomp$3$$[1];
    return $$jscomp$iteratorPrototype$$(function() {
      if ($entry$jscomp$8$$) {
        for (; $entry$jscomp$8$$.head != $map$jscomp$3$$[1];) {
          $entry$jscomp$8$$ = $entry$jscomp$8$$.previous;
        }
        for (; $entry$jscomp$8$$.next != $entry$jscomp$8$$.head;) {
          return $entry$jscomp$8$$ = $entry$jscomp$8$$.next, {done:!1, value:$func$jscomp$4$$($entry$jscomp$8$$)};
        }
        $entry$jscomp$8$$ = null;
      }
      return {done:!0, value:void 0};
    });
  }
  function $maybeGetEntry$$($index$jscomp$103_map$jscomp$2$$, $key$jscomp$53$$) {
    var $id$jscomp$31_id$jscomp$inline_216_type$jscomp$inline_215$$ = $key$jscomp$53$$ && typeof $key$jscomp$53$$;
    "object" == $id$jscomp$31_id$jscomp$inline_216_type$jscomp$inline_215$$ || "function" == $id$jscomp$31_id$jscomp$inline_216_type$jscomp$inline_215$$ ? $idMap$$.has($key$jscomp$53$$) ? $id$jscomp$31_id$jscomp$inline_216_type$jscomp$inline_215$$ = $idMap$$.get($key$jscomp$53$$) : ($id$jscomp$31_id$jscomp$inline_216_type$jscomp$inline_215$$ = "" + ++$mapIndex$$, $idMap$$.set($key$jscomp$53$$, $id$jscomp$31_id$jscomp$inline_216_type$jscomp$inline_215$$)) : $id$jscomp$31_id$jscomp$inline_216_type$jscomp$inline_215$$ = 
    "p_" + $key$jscomp$53$$;
    var $list$$ = $index$jscomp$103_map$jscomp$2$$[0][$id$jscomp$31_id$jscomp$inline_216_type$jscomp$inline_215$$];
    if ($list$$ && $$jscomp$owns$$($index$jscomp$103_map$jscomp$2$$[0], $id$jscomp$31_id$jscomp$inline_216_type$jscomp$inline_215$$)) {
      for ($index$jscomp$103_map$jscomp$2$$ = 0; $index$jscomp$103_map$jscomp$2$$ < $list$$.length; $index$jscomp$103_map$jscomp$2$$++) {
        var $entry$jscomp$7$$ = $list$$[$index$jscomp$103_map$jscomp$2$$];
        if ($key$jscomp$53$$ !== $key$jscomp$53$$ && $entry$jscomp$7$$.key !== $entry$jscomp$7$$.key || $key$jscomp$53$$ === $entry$jscomp$7$$.key) {
          return {id:$id$jscomp$31_id$jscomp$inline_216_type$jscomp$inline_215$$, list:$list$$, index:$index$jscomp$103_map$jscomp$2$$, entry:$entry$jscomp$7$$};
        }
      }
    }
    return {id:$id$jscomp$31_id$jscomp$inline_216_type$jscomp$inline_215$$, list:$list$$, index:-1, entry:void 0};
  }
  function $PolyfillMap$$($iter$jscomp$3_opt_iterable$jscomp$5$$) {
    this[0] = {};
    this[1] = $createHead$$();
    this.size = 0;
    if ($iter$jscomp$3_opt_iterable$jscomp$5$$) {
      $iter$jscomp$3_opt_iterable$jscomp$5$$ = $$jscomp$makeIterator$$($iter$jscomp$3_opt_iterable$jscomp$5$$);
      for (var $entry$jscomp$1_item$jscomp$24$$; !($entry$jscomp$1_item$jscomp$24$$ = $iter$jscomp$3_opt_iterable$jscomp$5$$.next()).done;) {
        $entry$jscomp$1_item$jscomp$24$$ = $entry$jscomp$1_item$jscomp$24$$.value, this.set($entry$jscomp$1_item$jscomp$24$$[0], $entry$jscomp$1_item$jscomp$24$$[1]);
      }
    }
  }
  if (function() {
    if (!$NativeMap$$ || "function" != typeof $NativeMap$$ || !$NativeMap$$.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var $key$jscomp$48$$ = Object.seal({x:4}), $map$jscomp$1$$ = new $NativeMap$$($$jscomp$makeIterator$$([[$key$jscomp$48$$, "s"]]));
      if ("s" != $map$jscomp$1$$.get($key$jscomp$48$$) || 1 != $map$jscomp$1$$.size || $map$jscomp$1$$.get({x:4}) || $map$jscomp$1$$.set({x:4}, "t") != $map$jscomp$1$$ || 2 != $map$jscomp$1$$.size) {
        return !1;
      }
      var $iter$jscomp$2$$ = $map$jscomp$1$$.entries(), $item$jscomp$23$$ = $iter$jscomp$2$$.next();
      if ($item$jscomp$23$$.done || $item$jscomp$23$$.value[0] != $key$jscomp$48$$ || "s" != $item$jscomp$23$$.value[1]) {
        return !1;
      }
      $item$jscomp$23$$ = $iter$jscomp$2$$.next();
      return $item$jscomp$23$$.done || 4 != $item$jscomp$23$$.value[0].x || "t" != $item$jscomp$23$$.value[1] || !$iter$jscomp$2$$.next().done ? !1 : !0;
    } catch ($err$jscomp$5$$) {
      return !1;
    }
  }()) {
    return $NativeMap$$;
  }
  var $idMap$$ = new WeakMap();
  $PolyfillMap$$.prototype.set = function($key$jscomp$49$$, $value$jscomp$105$$) {
    $key$jscomp$49$$ = 0 === $key$jscomp$49$$ ? 0 : $key$jscomp$49$$;
    var $r$jscomp$1$$ = $maybeGetEntry$$(this, $key$jscomp$49$$);
    $r$jscomp$1$$.list || ($r$jscomp$1$$.list = this[0][$r$jscomp$1$$.id] = []);
    $r$jscomp$1$$.entry ? $r$jscomp$1$$.entry.value = $value$jscomp$105$$ : ($r$jscomp$1$$.entry = {next:this[1], previous:this[1].previous, head:this[1], key:$key$jscomp$49$$, value:$value$jscomp$105$$}, $r$jscomp$1$$.list.push($r$jscomp$1$$.entry), this[1].previous.next = $r$jscomp$1$$.entry, this[1].previous = $r$jscomp$1$$.entry, this.size++);
    return this;
  };
  $PolyfillMap$$.prototype.delete = function($key$jscomp$50_r$jscomp$2$$) {
    $key$jscomp$50_r$jscomp$2$$ = $maybeGetEntry$$(this, $key$jscomp$50_r$jscomp$2$$);
    return $key$jscomp$50_r$jscomp$2$$.entry && $key$jscomp$50_r$jscomp$2$$.list ? ($key$jscomp$50_r$jscomp$2$$.list.splice($key$jscomp$50_r$jscomp$2$$.index, 1), $key$jscomp$50_r$jscomp$2$$.list.length || delete this[0][$key$jscomp$50_r$jscomp$2$$.id], $key$jscomp$50_r$jscomp$2$$.entry.previous.next = $key$jscomp$50_r$jscomp$2$$.entry.next, $key$jscomp$50_r$jscomp$2$$.entry.next.previous = $key$jscomp$50_r$jscomp$2$$.entry.previous, $key$jscomp$50_r$jscomp$2$$.entry.head = null, this.size--, !0) : 
    !1;
  };
  $PolyfillMap$$.prototype.clear = function() {
    this[0] = {};
    this[1] = this[1].previous = $createHead$$();
    this.size = 0;
  };
  $PolyfillMap$$.prototype.has = function($key$jscomp$51$$) {
    return !!$maybeGetEntry$$(this, $key$jscomp$51$$).entry;
  };
  $PolyfillMap$$.prototype.get = function($entry$jscomp$2_key$jscomp$52$$) {
    return ($entry$jscomp$2_key$jscomp$52$$ = $maybeGetEntry$$(this, $entry$jscomp$2_key$jscomp$52$$).entry) && $entry$jscomp$2_key$jscomp$52$$.value;
  };
  $PolyfillMap$$.prototype.entries = function() {
    return $makeIterator$$(this, function($entry$jscomp$3$$) {
      return [$entry$jscomp$3$$.key, $entry$jscomp$3$$.value];
    });
  };
  $PolyfillMap$$.prototype.keys = function() {
    return $makeIterator$$(this, function($entry$jscomp$4$$) {
      return $entry$jscomp$4$$.key;
    });
  };
  $PolyfillMap$$.prototype.values = function() {
    return $makeIterator$$(this, function($entry$jscomp$5$$) {
      return $entry$jscomp$5$$.value;
    });
  };
  $PolyfillMap$$.prototype.forEach = function($callback$jscomp$467$$, $opt_thisArg$jscomp$12$$) {
    for (var $iter$jscomp$4$$ = this.entries(), $entry$jscomp$6_item$jscomp$25$$; !($entry$jscomp$6_item$jscomp$25$$ = $iter$jscomp$4$$.next()).done;) {
      $entry$jscomp$6_item$jscomp$25$$ = $entry$jscomp$6_item$jscomp$25$$.value, $callback$jscomp$467$$.call($opt_thisArg$jscomp$12$$, $entry$jscomp$6_item$jscomp$25$$[1], $entry$jscomp$6_item$jscomp$25$$[0], this);
    }
  };
  $PolyfillMap$$.prototype[Symbol.iterator] = $PolyfillMap$$.prototype.entries;
  var $mapIndex$$ = 0;
  return $PolyfillMap$$;
});
$$jscomp$polyfill$$("Set", function($NativeSet$$) {
  function $PolyfillSet$$($iter$jscomp$6_opt_iterable$jscomp$6$$) {
    this.$g$ = new Map();
    if ($iter$jscomp$6_opt_iterable$jscomp$6$$) {
      $iter$jscomp$6_opt_iterable$jscomp$6$$ = $$jscomp$makeIterator$$($iter$jscomp$6_opt_iterable$jscomp$6$$);
      for (var $entry$jscomp$9$$; !($entry$jscomp$9$$ = $iter$jscomp$6_opt_iterable$jscomp$6$$.next()).done;) {
        this.add($entry$jscomp$9$$.value);
      }
    }
    this.size = this.$g$.size;
  }
  if (function() {
    if (!$NativeSet$$ || "function" != typeof $NativeSet$$ || !$NativeSet$$.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var $value$jscomp$106$$ = Object.seal({x:4}), $set$$ = new $NativeSet$$($$jscomp$makeIterator$$([$value$jscomp$106$$]));
      if (!$set$$.has($value$jscomp$106$$) || 1 != $set$$.size || $set$$.add($value$jscomp$106$$) != $set$$ || 1 != $set$$.size || $set$$.add({x:4}) != $set$$ || 2 != $set$$.size) {
        return !1;
      }
      var $iter$jscomp$5$$ = $set$$.entries(), $item$jscomp$26$$ = $iter$jscomp$5$$.next();
      if ($item$jscomp$26$$.done || $item$jscomp$26$$.value[0] != $value$jscomp$106$$ || $item$jscomp$26$$.value[1] != $value$jscomp$106$$) {
        return !1;
      }
      $item$jscomp$26$$ = $iter$jscomp$5$$.next();
      return $item$jscomp$26$$.done || $item$jscomp$26$$.value[0] == $value$jscomp$106$$ || 4 != $item$jscomp$26$$.value[0].x || $item$jscomp$26$$.value[1] != $item$jscomp$26$$.value[0] ? !1 : $iter$jscomp$5$$.next().done;
    } catch ($err$jscomp$6$$) {
      return !1;
    }
  }()) {
    return $NativeSet$$;
  }
  $PolyfillSet$$.prototype.add = function($value$jscomp$107$$) {
    $value$jscomp$107$$ = 0 === $value$jscomp$107$$ ? 0 : $value$jscomp$107$$;
    this.$g$.set($value$jscomp$107$$, $value$jscomp$107$$);
    this.size = this.$g$.size;
    return this;
  };
  $PolyfillSet$$.prototype.delete = function($result$jscomp$6_value$jscomp$108$$) {
    $result$jscomp$6_value$jscomp$108$$ = this.$g$.delete($result$jscomp$6_value$jscomp$108$$);
    this.size = this.$g$.size;
    return $result$jscomp$6_value$jscomp$108$$;
  };
  $PolyfillSet$$.prototype.clear = function() {
    this.$g$.clear();
    this.size = 0;
  };
  $PolyfillSet$$.prototype.has = function($value$jscomp$109$$) {
    return this.$g$.has($value$jscomp$109$$);
  };
  $PolyfillSet$$.prototype.entries = function() {
    return this.$g$.entries();
  };
  $PolyfillSet$$.prototype.values = function() {
    return this.$g$.values();
  };
  $PolyfillSet$$.prototype.keys = $PolyfillSet$$.prototype.values;
  $PolyfillSet$$.prototype[Symbol.iterator] = $PolyfillSet$$.prototype.values;
  $PolyfillSet$$.prototype.forEach = function($callback$jscomp$468$$, $opt_thisArg$jscomp$13$$) {
    var $set$jscomp$1$$ = this;
    this.$g$.forEach(function($value$jscomp$110$$) {
      return $callback$jscomp$468$$.call($opt_thisArg$jscomp$13$$, $value$jscomp$110$$, $value$jscomp$110$$, $set$jscomp$1$$);
    });
  };
  return $PolyfillSet$$;
});
$$jscomp$polyfill$$("Array.from", function($orig$jscomp$10$$) {
  return $orig$jscomp$10$$ ? $orig$jscomp$10$$ : function($arrayLike$jscomp$1$$, $opt_mapFn$jscomp$1$$, $opt_thisArg$jscomp$14$$) {
    $opt_mapFn$jscomp$1$$ = null != $opt_mapFn$jscomp$1$$ ? $opt_mapFn$jscomp$1$$ : function($x$jscomp$96$$) {
      return $x$jscomp$96$$;
    };
    var $result$jscomp$7$$ = [], $iteratorFunction$jscomp$1_len_next$jscomp$1$$ = "undefined" != typeof Symbol && Symbol.iterator && $arrayLike$jscomp$1$$[Symbol.iterator];
    if ("function" == typeof $iteratorFunction$jscomp$1_len_next$jscomp$1$$) {
      $arrayLike$jscomp$1$$ = $iteratorFunction$jscomp$1_len_next$jscomp$1$$.call($arrayLike$jscomp$1$$);
      for (var $i$jscomp$14_k$$ = 0; !($iteratorFunction$jscomp$1_len_next$jscomp$1$$ = $arrayLike$jscomp$1$$.next()).done;) {
        $result$jscomp$7$$.push($opt_mapFn$jscomp$1$$.call($opt_thisArg$jscomp$14$$, $iteratorFunction$jscomp$1_len_next$jscomp$1$$.value, $i$jscomp$14_k$$++));
      }
    } else {
      for ($iteratorFunction$jscomp$1_len_next$jscomp$1$$ = $arrayLike$jscomp$1$$.length, $i$jscomp$14_k$$ = 0; $i$jscomp$14_k$$ < $iteratorFunction$jscomp$1_len_next$jscomp$1$$; $i$jscomp$14_k$$++) {
        $result$jscomp$7$$.push($opt_mapFn$jscomp$1$$.call($opt_thisArg$jscomp$14$$, $arrayLike$jscomp$1$$[$i$jscomp$14_k$$], $i$jscomp$14_k$$));
      }
    }
    return $result$jscomp$7$$;
  };
});
function $$jscomp$iteratorFromArray$$($array$jscomp$8$$, $transform$jscomp$1$$) {
  $array$jscomp$8$$ instanceof String && ($array$jscomp$8$$ += "");
  var $i$jscomp$15$$ = 0, $done$$ = !1, $iter$jscomp$7$$ = {next:function() {
    if (!$done$$ && $i$jscomp$15$$ < $array$jscomp$8$$.length) {
      var $index$jscomp$104$$ = $i$jscomp$15$$++;
      return {value:$transform$jscomp$1$$($index$jscomp$104$$, $array$jscomp$8$$[$index$jscomp$104$$]), done:!1};
    }
    $done$$ = !0;
    return {done:!0, value:void 0};
  }};
  $iter$jscomp$7$$[Symbol.iterator] = function() {
    return $iter$jscomp$7$$;
  };
  return $iter$jscomp$7$$;
}
$$jscomp$polyfill$$("Array.prototype.keys", function($orig$jscomp$11$$) {
  return $orig$jscomp$11$$ ? $orig$jscomp$11$$ : function() {
    return $$jscomp$iteratorFromArray$$(this, function($i$jscomp$16$$) {
      return $i$jscomp$16$$;
    });
  };
});
$$jscomp$polyfill$$("Object.is", function($orig$jscomp$13$$) {
  return $orig$jscomp$13$$ ? $orig$jscomp$13$$ : function($left$jscomp$2$$, $right$jscomp$2$$) {
    return $left$jscomp$2$$ === $right$jscomp$2$$ ? 0 !== $left$jscomp$2$$ || 1 / $left$jscomp$2$$ === 1 / $right$jscomp$2$$ : $left$jscomp$2$$ !== $left$jscomp$2$$ && $right$jscomp$2$$ !== $right$jscomp$2$$;
  };
});
$$jscomp$polyfill$$("Array.prototype.includes", function($orig$jscomp$14$$) {
  return $orig$jscomp$14$$ ? $orig$jscomp$14$$ : function($searchElement$jscomp$5$$, $i$jscomp$18_opt_fromIndex$jscomp$11$$) {
    var $array$jscomp$9$$ = this;
    $array$jscomp$9$$ instanceof String && ($array$jscomp$9$$ = String($array$jscomp$9$$));
    var $len$jscomp$1$$ = $array$jscomp$9$$.length;
    $i$jscomp$18_opt_fromIndex$jscomp$11$$ = $i$jscomp$18_opt_fromIndex$jscomp$11$$ || 0;
    for (0 > $i$jscomp$18_opt_fromIndex$jscomp$11$$ && ($i$jscomp$18_opt_fromIndex$jscomp$11$$ = Math.max($i$jscomp$18_opt_fromIndex$jscomp$11$$ + $len$jscomp$1$$, 0)); $i$jscomp$18_opt_fromIndex$jscomp$11$$ < $len$jscomp$1$$; $i$jscomp$18_opt_fromIndex$jscomp$11$$++) {
      var $element$jscomp$13$$ = $array$jscomp$9$$[$i$jscomp$18_opt_fromIndex$jscomp$11$$];
      if ($element$jscomp$13$$ === $searchElement$jscomp$5$$ || Object.is($element$jscomp$13$$, $searchElement$jscomp$5$$)) {
        return !0;
      }
    }
    return !1;
  };
});
$$jscomp$polyfill$$("String.prototype.includes", function($orig$jscomp$15$$) {
  return $orig$jscomp$15$$ ? $orig$jscomp$15$$ : function($searchString$jscomp$4$$, $opt_position$jscomp$4$$) {
    return -1 !== $$jscomp$checkStringArgs$$(this, $searchString$jscomp$4$$, "includes").indexOf($searchString$jscomp$4$$, $opt_position$jscomp$4$$ || 0);
  };
});
$$jscomp$polyfill$$("Array.prototype.values", function($orig$jscomp$16$$) {
  return $orig$jscomp$16$$ ? $orig$jscomp$16$$ : function() {
    return $$jscomp$iteratorFromArray$$(this, function($k$jscomp$1$$, $v$jscomp$2$$) {
      return $v$jscomp$2$$;
    });
  };
});
$$jscomp$polyfill$$("String.prototype.startsWith", function($orig$jscomp$17$$) {
  return $orig$jscomp$17$$ ? $orig$jscomp$17$$ : function($searchString$jscomp$5$$, $i$jscomp$19_opt_position$jscomp$5$$) {
    var $string$jscomp$5$$ = $$jscomp$checkStringArgs$$(this, $searchString$jscomp$5$$, "startsWith"), $strLen$$ = $string$jscomp$5$$.length, $searchLen$$ = $searchString$jscomp$5$$.length;
    $i$jscomp$19_opt_position$jscomp$5$$ = Math.max(0, Math.min($i$jscomp$19_opt_position$jscomp$5$$ | 0, $string$jscomp$5$$.length));
    for (var $j$jscomp$1$$ = 0; $j$jscomp$1$$ < $searchLen$$ && $i$jscomp$19_opt_position$jscomp$5$$ < $strLen$$;) {
      if ($string$jscomp$5$$[$i$jscomp$19_opt_position$jscomp$5$$++] != $searchString$jscomp$5$$[$j$jscomp$1$$++]) {
        return !1;
      }
    }
    return $j$jscomp$1$$ >= $searchLen$$;
  };
});
$$jscomp$polyfill$$("Array.prototype.fill", function($orig$jscomp$18$$) {
  return $orig$jscomp$18$$ ? $orig$jscomp$18$$ : function($value$jscomp$111$$, $i$jscomp$20_opt_start$$, $opt_end$jscomp$9$$) {
    var $length$jscomp$16$$ = this.length || 0;
    0 > $i$jscomp$20_opt_start$$ && ($i$jscomp$20_opt_start$$ = Math.max(0, $length$jscomp$16$$ + $i$jscomp$20_opt_start$$));
    if (null == $opt_end$jscomp$9$$ || $opt_end$jscomp$9$$ > $length$jscomp$16$$) {
      $opt_end$jscomp$9$$ = $length$jscomp$16$$;
    }
    $opt_end$jscomp$9$$ = Number($opt_end$jscomp$9$$);
    0 > $opt_end$jscomp$9$$ && ($opt_end$jscomp$9$$ = Math.max(0, $length$jscomp$16$$ + $opt_end$jscomp$9$$));
    for ($i$jscomp$20_opt_start$$ = Number($i$jscomp$20_opt_start$$ || 0); $i$jscomp$20_opt_start$$ < $opt_end$jscomp$9$$; $i$jscomp$20_opt_start$$++) {
      this[$i$jscomp$20_opt_start$$] = $value$jscomp$111$$;
    }
    return this;
  };
});
function $$jscomp$typedArrayFill$$($orig$jscomp$19$$) {
  return $orig$jscomp$19$$ ? $orig$jscomp$19$$ : Array.prototype.fill;
}
$$jscomp$polyfill$$("Int8Array.prototype.fill", $$jscomp$typedArrayFill$$);
$$jscomp$polyfill$$("Uint8Array.prototype.fill", $$jscomp$typedArrayFill$$);
$$jscomp$polyfill$$("Uint8ClampedArray.prototype.fill", $$jscomp$typedArrayFill$$);
$$jscomp$polyfill$$("Int16Array.prototype.fill", $$jscomp$typedArrayFill$$);
$$jscomp$polyfill$$("Uint16Array.prototype.fill", $$jscomp$typedArrayFill$$);
$$jscomp$polyfill$$("Int32Array.prototype.fill", $$jscomp$typedArrayFill$$);
$$jscomp$polyfill$$("Uint32Array.prototype.fill", $$jscomp$typedArrayFill$$);
$$jscomp$polyfill$$("Float32Array.prototype.fill", $$jscomp$typedArrayFill$$);
$$jscomp$polyfill$$("Float64Array.prototype.fill", $$jscomp$typedArrayFill$$);
$$jscomp$polyfill$$("Array.prototype.flat", function($orig$jscomp$20$$) {
  return $orig$jscomp$20$$ ? $orig$jscomp$20$$ : function($depth$jscomp$9$$) {
    $depth$jscomp$9$$ = void 0 === $depth$jscomp$9$$ ? 1 : $depth$jscomp$9$$;
    var $flattened$$ = [];
    Array.prototype.forEach.call(this, function($element$jscomp$14_inner$$) {
      Array.isArray($element$jscomp$14_inner$$) && 0 < $depth$jscomp$9$$ ? ($element$jscomp$14_inner$$ = Array.prototype.flat.call($element$jscomp$14_inner$$, $depth$jscomp$9$$ - 1), $flattened$$.push.apply($flattened$$, $element$jscomp$14_inner$$)) : $flattened$$.push($element$jscomp$14_inner$$);
    });
    return $flattened$$;
  };
});
$$jscomp$polyfill$$("Number.isFinite", function($orig$jscomp$21$$) {
  return $orig$jscomp$21$$ ? $orig$jscomp$21$$ : function($x$jscomp$97$$) {
    return "number" !== typeof $x$jscomp$97$$ ? !1 : !isNaN($x$jscomp$97$$) && Infinity !== $x$jscomp$97$$ && -Infinity !== $x$jscomp$97$$;
  };
});
$$jscomp$polyfill$$("Object.values", function($orig$jscomp$24$$) {
  return $orig$jscomp$24$$ ? $orig$jscomp$24$$ : function($obj$jscomp$36$$) {
    var $result$jscomp$9$$ = [], $key$jscomp$54$$;
    for ($key$jscomp$54$$ in $obj$jscomp$36$$) {
      $$jscomp$owns$$($obj$jscomp$36$$, $key$jscomp$54$$) && $result$jscomp$9$$.push($obj$jscomp$36$$[$key$jscomp$54$$]);
    }
    return $result$jscomp$9$$;
  };
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var $goog$global$$ = this || self;
function $goog$inherits$$($childCtor$jscomp$1$$, $parentCtor$jscomp$1$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.$superClass_$ = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.prototype = new $tempCtor$$();
  $childCtor$jscomp$1$$.prototype.constructor = $childCtor$jscomp$1$$;
  $childCtor$jscomp$1$$.$base$ = function($me$$, $methodName$$, $var_args$jscomp$40$$) {
    for (var $args$jscomp$4$$ = Array(arguments.length - 2), $i$jscomp$24$$ = 2; $i$jscomp$24$$ < arguments.length; $i$jscomp$24$$++) {
      $args$jscomp$4$$[$i$jscomp$24$$ - 2] = arguments[$i$jscomp$24$$];
    }
    return $parentCtor$jscomp$1$$.prototype[$methodName$$].apply($me$$, $args$jscomp$4$$);
  };
}
function $goog$identity_$$($s$jscomp$6$$) {
  return $s$jscomp$6$$;
}
;function $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$($decorators$$, $target$jscomp$109$$, $key$jscomp$63$$, $desc$$) {
  var $c$$ = arguments.length, $r$jscomp$3$$ = 3 > $c$$ ? $target$jscomp$109$$ : null === $desc$$ ? $desc$$ = Object.getOwnPropertyDescriptor($target$jscomp$109$$, $key$jscomp$63$$) : $desc$$, $d$jscomp$2$$;
  if ("object" === typeof Reflect && Reflect && "function" === typeof Reflect.decorate) {
    $r$jscomp$3$$ = Reflect.decorate($decorators$$, $target$jscomp$109$$, $key$jscomp$63$$, $desc$$);
  } else {
    for (var $i$jscomp$37$$ = $decorators$$.length - 1; 0 <= $i$jscomp$37$$; $i$jscomp$37$$--) {
      if ($d$jscomp$2$$ = $decorators$$[$i$jscomp$37$$]) {
        $r$jscomp$3$$ = (3 > $c$$ ? $d$jscomp$2$$($r$jscomp$3$$) : 3 < $c$$ ? $d$jscomp$2$$($target$jscomp$109$$, $key$jscomp$63$$, $r$jscomp$3$$) : $d$jscomp$2$$($target$jscomp$109$$, $key$jscomp$63$$)) || $r$jscomp$3$$;
      }
    }
  }
  return 3 < $c$$ && $r$jscomp$3$$ && Object.defineProperty($target$jscomp$109$$, $key$jscomp$63$$, $r$jscomp$3$$), $r$jscomp$3$$;
}
function $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$($metadataKey$$, $metadataValue$$) {
  if ("object" === typeof Reflect && Reflect && "function" === typeof Reflect.metadata) {
    return Reflect.metadata($metadataKey$$, $metadataValue$$);
  }
}
;/*

 Copyright 2017 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_styledScopes$$ = new Set(), $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_scopeCssStore$$ = new Map();
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_polyfillSupport$$($Template$$, $ChildPart_childPartProto$$) {
  if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
    var $$jscomp$optchain$tmpm255315871$2$$, $$jscomp$optchain$tmpm255315871$3$$, $wrap$$ = (null == ($$jscomp$optchain$tmpm255315871$2$$ = window.ShadyDOM) ? 0 : $$jscomp$optchain$tmpm255315871$2$$.inUse) && !0 === (null == ($$jscomp$optchain$tmpm255315871$3$$ = window.ShadyDOM) ? void 0 : $$jscomp$optchain$tmpm255315871$3$$.noPatch) ? window.ShadyDOM.wrap : function($node$jscomp$7$$) {
      return $node$jscomp$7$$;
    }, $cssForScope$$ = function($name$jscomp$92$$) {
      var $scopeCss$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_scopeCssStore$$.get($name$jscomp$92$$);
      void 0 === $scopeCss$$ && $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_scopeCssStore$$.set($name$jscomp$92$$, $scopeCss$$ = []);
      return $scopeCss$$;
    }, $scopedTemplateCache$$ = new Map(), $originalCreateElement$$ = $Template$$.createElement;
    $Template$$.createElement = function($element$jscomp$16_html$jscomp$1$$, $options$jscomp$113_scope_scopeCss$jscomp$2$$) {
      $element$jscomp$16_html$jscomp$1$$ = $originalCreateElement$$.call($Template$$, $element$jscomp$16_html$jscomp$1$$, $options$jscomp$113_scope_scopeCss$jscomp$2$$);
      $options$jscomp$113_scope_scopeCss$jscomp$2$$ = null == $options$jscomp$113_scope_scopeCss$jscomp$2$$ ? void 0 : $options$jscomp$113_scope_scopeCss$jscomp$2$$.scope;
      void 0 !== $options$jscomp$113_scope_scopeCss$jscomp$2$$ && (window.ShadyCSS.nativeShadow || window.ShadyCSS.prepareTemplateDom($element$jscomp$16_html$jscomp$1$$, $options$jscomp$113_scope_scopeCss$jscomp$2$$), void 0 === $options$jscomp$113_scope_scopeCss$jscomp$2$$ || $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_styledScopes$$.has($options$jscomp$113_scope_scopeCss$jscomp$2$$) || ($options$jscomp$113_scope_scopeCss$jscomp$2$$ = $cssForScope$$($options$jscomp$113_scope_scopeCss$jscomp$2$$), 
      $options$jscomp$113_scope_scopeCss$jscomp$2$$.push.apply($options$jscomp$113_scope_scopeCss$jscomp$2$$, $$jscomp$arrayFromIterable$$(Array.from($element$jscomp$16_html$jscomp$1$$.content.querySelectorAll("style")).map(function($style$jscomp$3$$) {
        var $$jscomp$optchain$tmpm255315871$5$$;
        null == ($$jscomp$optchain$tmpm255315871$5$$ = $style$jscomp$3$$.parentNode) || $$jscomp$optchain$tmpm255315871$5$$.removeChild($style$jscomp$3$$);
        return $style$jscomp$3$$.textContent;
      })))));
      return $element$jscomp$16_html$jscomp$1$$;
    };
    var $renderContainer$$ = document.createDocumentFragment(), $renderContainerMarker$$ = document.createComment("");
    $ChildPart_childPartProto$$ = $ChildPart_childPartProto$$.prototype;
    var $setValue$$ = $ChildPart_childPartProto$$.$_$setValue$;
    $ChildPart_childPartProto$$.$_$setValue$ = function($template$jscomp$5_value$jscomp$121$$, $directiveParent$jscomp$1_scopeCss$jscomp$inline_220$$) {
      $directiveParent$jscomp$1_scopeCss$jscomp$inline_220$$ = void 0 === $directiveParent$jscomp$1_scopeCss$jscomp$inline_220$$ ? this : $directiveParent$jscomp$1_scopeCss$jscomp$inline_220$$;
      var $container$$ = $wrap$$(this.$_$startNode$).parentNode, $$jscomp$optchain$tmpm255315871$6_startNode$$, $scope$jscomp$1_style$jscomp$inline_223$$ = null == ($$jscomp$optchain$tmpm255315871$6_startNode$$ = this.options) ? void 0 : $$jscomp$optchain$tmpm255315871$6_startNode$$.scope, $$jscomp$optchain$tmpm255315871$7_endNode$$;
      if (($container$$ instanceof ShadowRoot || $container$$ === (null == ($$jscomp$optchain$tmpm255315871$7_endNode$$ = this.options) ? void 0 : $$jscomp$optchain$tmpm255315871$7_endNode$$.$renderContainer$)) && void 0 !== $scope$jscomp$1_style$jscomp$inline_223$$ && !$module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_styledScopes$$.has($scope$jscomp$1_style$jscomp$inline_223$$)) {
        $$jscomp$optchain$tmpm255315871$6_startNode$$ = this.$_$startNode$;
        $$jscomp$optchain$tmpm255315871$7_endNode$$ = this.$_$endNode$;
        $renderContainer$$.appendChild($renderContainerMarker$$);
        this.$_$startNode$ = $renderContainerMarker$$;
        this.$_$endNode$ = null;
        $setValue$$.call(this, $template$jscomp$5_value$jscomp$121$$, $directiveParent$jscomp$1_scopeCss$jscomp$inline_220$$);
        $template$jscomp$5_value$jscomp$121$$ = (null == $template$jscomp$5_value$jscomp$121$$ ? 0 : $template$jscomp$5_value$jscomp$121$$._$litType$) ? this.$_$committedValue$.$_$template$.$el$ : document.createElement("template");
        $directiveParent$jscomp$1_scopeCss$jscomp$inline_220$$ = $cssForScope$$($scope$jscomp$1_style$jscomp$inline_223$$);
        var $hasScopeCss$jscomp$inline_221$$ = 0 !== $directiveParent$jscomp$1_scopeCss$jscomp$inline_220$$.length;
        if ($hasScopeCss$jscomp$inline_221$$) {
          var $style$jscomp$inline_222$$ = document.createElement("style");
          $style$jscomp$inline_222$$.textContent = $directiveParent$jscomp$1_scopeCss$jscomp$inline_220$$.join("\n");
          $template$jscomp$5_value$jscomp$121$$.content.appendChild($style$jscomp$inline_222$$);
        }
        $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_styledScopes$$.add($scope$jscomp$1_style$jscomp$inline_223$$);
        $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_scopeCssStore$$.delete($scope$jscomp$1_style$jscomp$inline_223$$);
        window.ShadyCSS.prepareTemplateStyles($template$jscomp$5_value$jscomp$121$$, $scope$jscomp$1_style$jscomp$inline_223$$);
        $hasScopeCss$jscomp$inline_221$$ && window.ShadyCSS.nativeShadow && ($scope$jscomp$1_style$jscomp$inline_223$$ = $template$jscomp$5_value$jscomp$121$$.content.querySelector("style"), null !== $scope$jscomp$1_style$jscomp$inline_223$$ && $template$jscomp$5_value$jscomp$121$$.content.appendChild($scope$jscomp$1_style$jscomp$inline_223$$));
        $renderContainer$$.removeChild($renderContainerMarker$$);
        var $$jscomp$optchain$tmpm255315871$9_style$jscomp$4$$;
        if (null == ($$jscomp$optchain$tmpm255315871$9_style$jscomp$4$$ = window.ShadyCSS) ? 0 : $$jscomp$optchain$tmpm255315871$9_style$jscomp$4$$.nativeShadow) {
          $$jscomp$optchain$tmpm255315871$9_style$jscomp$4$$ = $template$jscomp$5_value$jscomp$121$$.content.querySelector("style"), null !== $$jscomp$optchain$tmpm255315871$9_style$jscomp$4$$ && $renderContainer$$.appendChild($$jscomp$optchain$tmpm255315871$9_style$jscomp$4$$.cloneNode(!0));
        }
        $container$$.insertBefore($renderContainer$$, $$jscomp$optchain$tmpm255315871$7_endNode$$);
        this.$_$startNode$ = $$jscomp$optchain$tmpm255315871$6_startNode$$;
        this.$_$endNode$ = $$jscomp$optchain$tmpm255315871$7_endNode$$;
      } else {
        $setValue$$.call(this, $template$jscomp$5_value$jscomp$121$$, $directiveParent$jscomp$1_scopeCss$jscomp$inline_220$$);
      }
    };
    $ChildPart_childPartProto$$.$_$getTemplate$ = function($result$jscomp$13$$) {
      var $$jscomp$optchain$tmpm255315871$10_templateCache$$, $scope$jscomp$2_template$jscomp$6$$ = null == ($$jscomp$optchain$tmpm255315871$10_templateCache$$ = this.options) ? void 0 : $$jscomp$optchain$tmpm255315871$10_templateCache$$.scope;
      $$jscomp$optchain$tmpm255315871$10_templateCache$$ = $scopedTemplateCache$$.get($scope$jscomp$2_template$jscomp$6$$);
      void 0 === $$jscomp$optchain$tmpm255315871$10_templateCache$$ && $scopedTemplateCache$$.set($scope$jscomp$2_template$jscomp$6$$, $$jscomp$optchain$tmpm255315871$10_templateCache$$ = new Map());
      $scope$jscomp$2_template$jscomp$6$$ = $$jscomp$optchain$tmpm255315871$10_templateCache$$.get($result$jscomp$13$$.$strings$);
      void 0 === $scope$jscomp$2_template$jscomp$6$$ && $$jscomp$optchain$tmpm255315871$10_templateCache$$.set($result$jscomp$13$$.$strings$, $scope$jscomp$2_template$jscomp$6$$ = new $Template$$($result$jscomp$13$$, this.options));
      return $scope$jscomp$2_template$jscomp$6$$;
    };
  }
}
var $$jscomp$logical$assign$tmpm255315871$1$$;
null != ($$jscomp$logical$assign$tmpm255315871$1$$ = window).litHtmlPolyfillSupport || ($$jscomp$logical$assign$tmpm255315871$1$$.litHtmlPolyfillSupport = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_polyfillSupport$$);
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_symbolKey$$ = "";
if (window.Symbol) {
  var $s$jscomp$11$$ = Symbol();
  "symbol" !== typeof $s$jscomp$11$$ && ($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_symbolKey$$ = Object.keys($s$jscomp$11$$)[0]);
}
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_needsSymbolSupport$$ = "" !== $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_symbolKey$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport$isPolyfilledSymbol$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_needsSymbolSupport$$ ? function($value$jscomp$122$$) {
  return null != $value$jscomp$122$$ && void 0 !== $value$jscomp$122$$[$module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_symbolKey$$];
} : function() {
  return !1;
};
if ($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_needsSymbolSupport$$ && !window.Symbol.for) {
  var $map$jscomp$4$$ = new Map();
  window.Symbol.for = function($key$jscomp$66$$) {
    $map$jscomp$4$$.has($key$jscomp$66$$) || $map$jscomp$4$$.set($key$jscomp$66$$, Symbol($key$jscomp$66$$));
    return $map$jscomp$4$$.get($key$jscomp$66$$);
  };
}
;function $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$polyfill$2dsupport_polyfillSupport$$($$jscomp$destructuring$var1_elementProto$$) {
  if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
    $$jscomp$destructuring$var1_elementProto$$ = $$jscomp$destructuring$var1_elementProto$$.ReactiveElement.prototype;
    window.ShadyDOM && window.ShadyDOM.inUse && !0 === window.ShadyDOM.noPatch && window.ShadyDOM.patchElementProto($$jscomp$destructuring$var1_elementProto$$);
    var $createRenderRoot$$ = $$jscomp$destructuring$var1_elementProto$$.$createRenderRoot$;
    $$jscomp$destructuring$var1_elementProto$$.$createRenderRoot$ = function() {
      var $name$jscomp$94$$ = this.localName;
      if (window.ShadyCSS.nativeShadow) {
        return $createRenderRoot$$.call(this);
      }
      if (!this.constructor.hasOwnProperty("__scoped")) {
        this.constructor.__scoped = !0;
        var $css$$ = this.constructor.$elementStyles$.map(function($v$jscomp$13$$) {
          return $v$jscomp$13$$ instanceof CSSStyleSheet ? Array.from($v$jscomp$13$$.cssRules).reduce(function($a$jscomp$5$$, $r$jscomp$7$$) {
            return $a$jscomp$5$$ + $r$jscomp$7$$.cssText;
          }, "") : $v$jscomp$13$$.cssText;
        }), $$jscomp$optchain$tmp138717800$2$$, $$jscomp$optchain$tmp138717800$3$$;
        null == ($$jscomp$optchain$tmp138717800$2$$ = window.ShadyCSS) || null == ($$jscomp$optchain$tmp138717800$3$$ = $$jscomp$optchain$tmp138717800$2$$.ScopingShim) || $$jscomp$optchain$tmp138717800$3$$.prepareAdoptedCssText($css$$, $name$jscomp$94$$);
        void 0 === this.constructor.$_$handlesPrepareStyles$ && window.ShadyCSS.prepareTemplateStyles(document.createElement("template"), $name$jscomp$94$$);
      }
      var $$jscomp$nullish$tmp2$$;
      return null != ($$jscomp$nullish$tmp2$$ = this.shadowRoot) ? $$jscomp$nullish$tmp2$$ : this.attachShadow(this.constructor.$shadowRootOptions$);
    };
    var $connectedCallback$$ = $$jscomp$destructuring$var1_elementProto$$.connectedCallback;
    $$jscomp$destructuring$var1_elementProto$$.connectedCallback = function() {
      $connectedCallback$$.call(this);
      this.$hasUpdated$ && window.ShadyCSS.styleElement(this);
    };
    var $didUpdate$$ = $$jscomp$destructuring$var1_elementProto$$.$_$didUpdate$;
    $$jscomp$destructuring$var1_elementProto$$.$_$didUpdate$ = function($changedProperties$jscomp$1$$) {
      this.$hasUpdated$ || window.ShadyCSS.styleElement(this);
      $didUpdate$$.call(this, $changedProperties$jscomp$1$$);
    };
  }
}
var $$jscomp$logical$assign$tmp138717800$1$$;
null != ($$jscomp$logical$assign$tmp138717800$1$$ = window).reactiveElementPolyfillSupport || ($$jscomp$logical$assign$tmp138717800$1$$.reactiveElementPolyfillSupport = $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$polyfill$2dsupport_polyfillSupport$$);
function $module$contents$google3$third_party$javascript$lit$packages$lit$2delement$src$polyfill$2dsupport_polyfillSupport$$($$jscomp$destructuring$var3_LitElement_litElementProto$$) {
  $$jscomp$destructuring$var3_LitElement_litElementProto$$ = $$jscomp$destructuring$var3_LitElement_litElementProto$$.LitElement;
  if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
    $$jscomp$destructuring$var3_LitElement_litElementProto$$.$_$handlesPrepareStyles$ = !0;
    $$jscomp$destructuring$var3_LitElement_litElementProto$$ = $$jscomp$destructuring$var3_LitElement_litElementProto$$.prototype;
    var $createRenderRoot$jscomp$1$$ = $$jscomp$destructuring$var3_LitElement_litElementProto$$.$createRenderRoot$;
    $$jscomp$destructuring$var3_LitElement_litElementProto$$.$createRenderRoot$ = function() {
      this.$renderOptions$.scope = this.localName;
      return $createRenderRoot$jscomp$1$$.call(this);
    };
  }
}
var $$jscomp$logical$assign$tmpm444370780$1$$;
null != ($$jscomp$logical$assign$tmpm444370780$1$$ = window).litElementPolyfillSupport || ($$jscomp$logical$assign$tmpm444370780$1$$.litElementPolyfillSupport = $module$contents$google3$third_party$javascript$lit$packages$lit$2delement$src$polyfill$2dsupport_polyfillSupport$$);
function $module$contents$goog$debug$Error_DebugError$$($msg$jscomp$1$$, $cause$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, $module$contents$goog$debug$Error_DebugError$$);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $msg$jscomp$1$$ && (this.message = String($msg$jscomp$1$$));
  void 0 !== $cause$$ && (this.cause = $cause$$);
}
$goog$inherits$$($module$contents$goog$debug$Error_DebugError$$, Error);
$module$contents$goog$debug$Error_DebugError$$.prototype.name = "CustomError";
function $module$contents$goog$asserts_AssertionError$$($messagePattern_splitParts$jscomp$inline_227$$, $messageArgs$$) {
  $messagePattern_splitParts$jscomp$inline_227$$ = $messagePattern_splitParts$jscomp$inline_227$$.split("%s");
  for (var $returnString$jscomp$inline_228$$ = "", $subLast$jscomp$inline_229$$ = $messagePattern_splitParts$jscomp$inline_227$$.length - 1, $i$jscomp$inline_230$$ = 0; $i$jscomp$inline_230$$ < $subLast$jscomp$inline_229$$; $i$jscomp$inline_230$$++) {
    $returnString$jscomp$inline_228$$ += $messagePattern_splitParts$jscomp$inline_227$$[$i$jscomp$inline_230$$] + ($i$jscomp$inline_230$$ < $messageArgs$$.length ? $messageArgs$$[$i$jscomp$inline_230$$] : "%s");
  }
  $module$contents$goog$debug$Error_DebugError$$.call(this, $returnString$jscomp$inline_228$$ + $messagePattern_splitParts$jscomp$inline_227$$[$subLast$jscomp$inline_229$$]);
}
$goog$inherits$$($module$contents$goog$asserts_AssertionError$$, $module$contents$goog$debug$Error_DebugError$$);
$module$contents$goog$asserts_AssertionError$$.prototype.name = "AssertionError";
var $goog$html$trustedtypes$cachedPolicy_$$;
function $goog$html$TrustedResourceUrl$$($value$jscomp$147$$) {
  this.$g$ = $value$jscomp$147$$;
}
$goog$html$TrustedResourceUrl$$.prototype.toString = function() {
  return this.$g$ + "";
};
function $goog$html$TrustedResourceUrl$unwrapTrustedScriptURL$$($trustedResourceUrl$jscomp$1$$) {
  return $trustedResourceUrl$jscomp$1$$ instanceof $goog$html$TrustedResourceUrl$$ && $trustedResourceUrl$jscomp$1$$.constructor === $goog$html$TrustedResourceUrl$$ ? $trustedResourceUrl$jscomp$1$$.$g$ : "type_error:TrustedResourceUrl";
}
var $goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$ = {};
function $goog$html$TrustedResourceUrl$createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse$$($noinlineUrl_url$jscomp$34_value$jscomp$148$$) {
  if (void 0 === $goog$html$trustedtypes$cachedPolicy_$$) {
    var $JSCompiler_inline_result$jscomp$519_policy$jscomp$inline_577$$ = null;
    var $policyFactory$jscomp$inline_578$$ = $goog$global$$.trustedTypes;
    if ($policyFactory$jscomp$inline_578$$ && $policyFactory$jscomp$inline_578$$.createPolicy) {
      try {
        $JSCompiler_inline_result$jscomp$519_policy$jscomp$inline_577$$ = $policyFactory$jscomp$inline_578$$.createPolicy("goog#html", {createHTML:$goog$identity_$$, createScript:$goog$identity_$$, createScriptURL:$goog$identity_$$});
      } catch ($e$jscomp$inline_579$$) {
        $goog$global$$.console && $goog$global$$.console.error($e$jscomp$inline_579$$.message);
      }
      $goog$html$trustedtypes$cachedPolicy_$$ = $JSCompiler_inline_result$jscomp$519_policy$jscomp$inline_577$$;
    } else {
      $goog$html$trustedtypes$cachedPolicy_$$ = $JSCompiler_inline_result$jscomp$519_policy$jscomp$inline_577$$;
    }
  }
  $noinlineUrl_url$jscomp$34_value$jscomp$148$$ = ($JSCompiler_inline_result$jscomp$519_policy$jscomp$inline_577$$ = $goog$html$trustedtypes$cachedPolicy_$$) ? $JSCompiler_inline_result$jscomp$519_policy$jscomp$inline_577$$.createScriptURL($noinlineUrl_url$jscomp$34_value$jscomp$148$$) : $noinlineUrl_url$jscomp$34_value$jscomp$148$$;
  return new $goog$html$TrustedResourceUrl$$($noinlineUrl_url$jscomp$34_value$jscomp$148$$, $goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$);
}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
function $module$exports$google3$third_party$javascript$safevalues$internals$url_impl$SafeUrl$$($value$jscomp$152$$) {
  this.$g$ = $value$jscomp$152$$;
}
$module$exports$google3$third_party$javascript$safevalues$internals$url_impl$SafeUrl$$.prototype.toString = function() {
  return this.$g$;
};
var $module$exports$google3$third_party$javascript$safevalues$internals$url_impl$INNOCUOUS_URL$$ = new $module$exports$google3$third_party$javascript$safevalues$internals$url_impl$SafeUrl$$("about:invalid#zClosurez");
function $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SchemeImpl$$($isValid$$) {
  this.$isValid$ = $isValid$$;
}
function $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme$$($scheme$jscomp$3$$) {
  return new $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SchemeImpl$$(function($url$jscomp$37$$) {
    return $url$jscomp$37$$.substr(0, $scheme$jscomp$3$$.length + 1).toLowerCase() === $scheme$jscomp$3$$ + ":";
  });
}
var $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_DEFAULT_SCHEMES$$ = [$module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme$$("data"), $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme$$("http"), $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme$$("https"), $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme$$("mailto"), 
$module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme$$("ftp"), new $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SchemeImpl$$(function($url$jscomp$38$$) {
  return /^[^:]*([/?#]|$)/.test($url$jscomp$38$$);
})];
function $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_sanitizeUrl$$($JSCompiler_inline_result$jscomp$154_url$jscomp$44$$) {
  var $allowedSchemes$jscomp$1_allowedSchemes$jscomp$inline_233$$ = void 0 === $allowedSchemes$jscomp$1_allowedSchemes$jscomp$inline_233$$ ? $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_DEFAULT_SCHEMES$$ : $allowedSchemes$jscomp$1_allowedSchemes$jscomp$inline_233$$;
  a: {
    if ($allowedSchemes$jscomp$1_allowedSchemes$jscomp$inline_233$$ = void 0 === $allowedSchemes$jscomp$1_allowedSchemes$jscomp$inline_233$$ ? $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_DEFAULT_SCHEMES$$ : $allowedSchemes$jscomp$1_allowedSchemes$jscomp$inline_233$$, !($JSCompiler_inline_result$jscomp$154_url$jscomp$44$$ instanceof $module$exports$google3$third_party$javascript$safevalues$internals$url_impl$SafeUrl$$)) {
      for (var $i$jscomp$inline_234$$ = 0; $i$jscomp$inline_234$$ < $allowedSchemes$jscomp$1_allowedSchemes$jscomp$inline_233$$.length; ++$i$jscomp$inline_234$$) {
        var $scheme$jscomp$inline_235$$ = $allowedSchemes$jscomp$1_allowedSchemes$jscomp$inline_233$$[$i$jscomp$inline_234$$];
        if ($scheme$jscomp$inline_235$$ instanceof $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SchemeImpl$$ && $scheme$jscomp$inline_235$$.$isValid$($JSCompiler_inline_result$jscomp$154_url$jscomp$44$$)) {
          $JSCompiler_inline_result$jscomp$154_url$jscomp$44$$ = new $module$exports$google3$third_party$javascript$safevalues$internals$url_impl$SafeUrl$$($JSCompiler_inline_result$jscomp$154_url$jscomp$44$$);
          break a;
        }
      }
      $JSCompiler_inline_result$jscomp$154_url$jscomp$44$$ = void 0;
    }
  }
  return $JSCompiler_inline_result$jscomp$154_url$jscomp$44$$ || $module$exports$google3$third_party$javascript$safevalues$internals$url_impl$INNOCUOUS_URL$$;
}
;function $module$contents$goog$html$SafeHtml_SafeHtml$$($value$jscomp$164$$) {
  this.$g$ = $value$jscomp$164$$;
}
$module$contents$goog$html$SafeHtml_SafeHtml$$.prototype.toString = function() {
  return this.$g$.toString();
};
function $module$contents$goog$html$SafeHtml_SafeHtml$unwrapTrustedHTML$$($safeHtml$jscomp$1$$) {
  return $safeHtml$jscomp$1$$ instanceof $module$contents$goog$html$SafeHtml_SafeHtml$$ && $safeHtml$jscomp$1$$.constructor === $module$contents$goog$html$SafeHtml_SafeHtml$$ ? $safeHtml$jscomp$1$$.$g$ : "type_error:SafeHtml";
}
;/*

 Copyright 2019 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var $$jscomp$templatelit$m917256334$9$$ = $$jscomp$createTemplateTagFirstArg$$(["about:invalid#zClosurez"]), $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity$sanitizerFactory$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_realSanitizerFactory$$;
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_realSanitizerFactory$$($baseToCheck_node$jscomp$14$$, $name$jscomp$107_rawName$$, $type$jscomp$179$$) {
  if (1 !== $baseToCheck_node$jscomp$14$$.nodeType) {
    return $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_allowAnything$$;
  }
  $name$jscomp$107_rawName$$ = $name$jscomp$107_rawName$$.toLowerCase();
  if ("innerhtml" === $name$jscomp$107_rawName$$ || "innertext" === $name$jscomp$107_rawName$$ || "textcontent" === $name$jscomp$107_rawName$$ || "outerhtml" === $name$jscomp$107_rawName$$) {
    return function() {
      return $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_fallbackHtml$$;
    };
  }
  var $contract$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_securityContracts$$.get($baseToCheck_node$jscomp$14$$.tagName + " " + $name$jscomp$107_rawName$$);
  return void 0 !== $contract$$ ? $contract$$ : /^on/.test($name$jscomp$107_rawName$$) && "attribute" === $type$jscomp$179$$ && ($baseToCheck_node$jscomp$14$$ = $baseToCheck_node$jscomp$14$$.tagName.includes("-") ? HTMLElement.prototype : $baseToCheck_node$jscomp$14$$, $name$jscomp$107_rawName$$ in $baseToCheck_node$jscomp$14$$) ? function() {
    throw Error("invalid binding");
  } : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_allowAnything$$;
}
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_BLOCK_JAVASCRIPT_URL_PATTERN$$ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_fallbackTrustedUrl$$ = $goog$html$TrustedResourceUrl$unwrapTrustedScriptURL$$(function($templateObj$jscomp$8$$) {
  var $rest$jscomp$2$$ = $$jscomp$getRestArguments$$.apply(1, arguments);
  if (0 === $rest$jscomp$2$$.length) {
    return $goog$html$TrustedResourceUrl$createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse$$($templateObj$jscomp$8$$[0]);
  }
  for (var $url$jscomp$59$$ = $templateObj$jscomp$8$$[0], $i$jscomp$105$$ = 0; $i$jscomp$105$$ < $rest$jscomp$2$$.length; $i$jscomp$105$$++) {
    $url$jscomp$59$$ += encodeURIComponent($rest$jscomp$2$$[$i$jscomp$105$$]) + $templateObj$jscomp$8$$[$i$jscomp$105$$ + 1];
  }
  return $goog$html$TrustedResourceUrl$createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse$$($url$jscomp$59$$);
}($$jscomp$templatelit$m917256334$9$$)), $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_fallbackHtml$$ = $module$contents$goog$html$SafeHtml_SafeHtml$unwrapTrustedHTML$$(new $module$contents$goog$html$SafeHtml_SafeHtml$$($goog$global$$.trustedTypes && $goog$global$$.trustedTypes.emptyHTML || "", {}));
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_allowAnything$$($value$jscomp$192$$) {
  return $value$jscomp$192$$;
}
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_onlyForbidJavascriptUrls$$($url$jscomp$61$$) {
  return $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_BLOCK_JAVASCRIPT_URL_PATTERN$$.test(String($url$jscomp$61$$)) ? $url$jscomp$61$$ : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_fallbackTrustedUrl$$;
}
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_forbidEverythingBecauseFieldIsUnsupported$$() {
  return $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_fallbackTrustedUrl$$;
}
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_requireTrustedResourceUrl$$($maybeResourceUrl$$) {
  return $maybeResourceUrl$$ instanceof $goog$html$TrustedResourceUrl$$ ? $goog$html$TrustedResourceUrl$unwrapTrustedScriptURL$$($maybeResourceUrl$$) : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_fallbackTrustedUrl$$;
}
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_securityContracts$$ = new Map([["A href", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_onlyForbidJavascriptUrls$$], ["AREA href", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_onlyForbidJavascriptUrls$$], ["BASE href", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_forbidEverythingBecauseFieldIsUnsupported$$], 
["BUTTON formaction", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_onlyForbidJavascriptUrls$$], ["EMBED src", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_forbidEverythingBecauseFieldIsUnsupported$$], ["FORM action", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_onlyForbidJavascriptUrls$$], ["FRAME src", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_forbidEverythingBecauseFieldIsUnsupported$$], 
["IFRAME src", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_requireTrustedResourceUrl$$], ["IFRAME srcdoc", function($maybeSafeHtml$$) {
  return $maybeSafeHtml$$ instanceof $module$contents$goog$html$SafeHtml_SafeHtml$$ ? $module$contents$goog$html$SafeHtml_SafeHtml$unwrapTrustedHTML$$($maybeSafeHtml$$) : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_fallbackHtml$$;
}], ["INPUT formaction", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_onlyForbidJavascriptUrls$$], ["LINK href", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_requireTrustedResourceUrl$$], ["OBJECT codebase", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_forbidEverythingBecauseFieldIsUnsupported$$], ["OBJECT data", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_forbidEverythingBecauseFieldIsUnsupported$$], 
["SCRIPT href", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_requireTrustedResourceUrl$$], ["SCRIPT src", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_requireTrustedResourceUrl$$], ["SCRIPT text", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_forbidEverythingBecauseFieldIsUnsupported$$], ["USE href", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_requireTrustedResourceUrl$$]]);
var $$jscomp$optchain$tmpm1864887151$3$$, $$jscomp$optchain$tmpm1864887151$4$$, $$jscomp$optchain$tmpm1864887151$5$$, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$ = (null == ($$jscomp$optchain$tmpm1864887151$3$$ = $goog$global$$.ShadyDOM) ? 0 : $$jscomp$optchain$tmpm1864887151$3$$.inUse) && (!0 === (null == ($$jscomp$optchain$tmpm1864887151$4$$ = $goog$global$$.ShadyDOM) ? void 0 : $$jscomp$optchain$tmpm1864887151$4$$.noPatch) || "on-demand" === (null == 
($$jscomp$optchain$tmpm1864887151$5$$ = $goog$global$$.ShadyDOM) ? void 0 : $$jscomp$optchain$tmpm1864887151$5$$.noPatch)) ? $goog$global$$.ShadyDOM.wrap : function($node$jscomp$16$$) {
  return $node$jscomp$16$$;
}, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustedTypes$$ = $goog$global$$.trustedTypes, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_policy$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustedTypes$$ ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustedTypes$$.createPolicy("lit-html", {createHTML:function($s$jscomp$17$$) {
  return $s$jscomp$17$$;
}}) : void 0;
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_identityFunction$$($value$jscomp$195$$) {
  return $value$jscomp$195$$;
}
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_noopSanitizer$$() {
  return $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_identityFunction$$;
}
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$ = "lit$" + String(Math.random()).slice(9) + "$", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_markerMatch$$ = "?" + $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_nodeMarker$$ = "<" + $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_markerMatch$$ + 
">", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$ = document;
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isPrimitive$$($value$jscomp$196$$) {
  return null === $value$jscomp$196$$ || "object" != typeof $value$jscomp$196$$ && "function" != typeof $value$jscomp$196$$ || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport$isPolyfilledSymbol$$($value$jscomp$196$$);
}
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isArray$$ = Array.isArray, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_textEndRegex$$ = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_commentEndRegex$$ = /--\x3e/g, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_comment2EndRegex$$ = 
/>/g, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$ = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"), $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_singleQuoteAttrEndRegex$$ = /'/g, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_doubleQuoteAttrEndRegex$$ = /"/g, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_rawTextElement$$ = 
/^(?:script|style|textarea|title)$/i;
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($strings$jscomp$1$$) {
  var $values$jscomp$15$$ = $$jscomp$getRestArguments$$.apply(1, arguments), $$jscomp$compprop74$$ = {};
  return $$jscomp$compprop74$$._$litType$ = 1, $$jscomp$compprop74$$.$strings$ = $strings$jscomp$1$$, $$jscomp$compprop74$$.values = $values$jscomp$15$$, $$jscomp$compprop74$$;
}
var $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$ = Symbol.for ? Symbol.for("lit-noChange") : Symbol("lit-noChange"), $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ = Symbol.for ? Symbol.for("lit-nothing") : Symbol("lit-nothing"), $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_templateCache$$ = new WeakMap(), $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$ = 
$module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createTreeWalker($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$, 129);
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustFromTemplateString$$($tsa$$, $stringFromTSA$$) {
  if (!Array.isArray($tsa$$) || !$tsa$$.hasOwnProperty("raw")) {
    throw Error("invalid template strings array");
  }
  return void 0 !== $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_policy$$ ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_policy$$.createHTML($stringFromTSA$$) : $stringFromTSA$$;
}
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$Template$$($$jscomp$destructuring$var13_nodeIndex$$, $node$jscomp$18_options$jscomp$123_svgElement$$) {
  var $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$ = $$jscomp$destructuring$var13_nodeIndex$$.$strings$, $$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$ = $$jscomp$destructuring$var13_nodeIndex$$._$litType$;
  this.$g$ = [];
  for (var $attrNameIndex$$ = $$jscomp$destructuring$var13_nodeIndex$$ = 0, $partCount$$ = $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$.length - 1, $parts$jscomp$6$$ = this.$g$, $i$jscomp$109_l$jscomp$inline_239_statics$jscomp$1$$ = $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$.length - 1, $attrNames$jscomp$inline_240_m$jscomp$5_realName$$ = [], $html$jscomp$inline_241$$ = 
  2 === $$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$ ? "<svg>" : "", $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$, $regex$jscomp$inline_243$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_textEndRegex$$, $i$jscomp$inline_244$$ = 0; $i$jscomp$inline_244$$ < $i$jscomp$109_l$jscomp$inline_239_statics$jscomp$1$$; $i$jscomp$inline_244$$++) {
    for (var $s$jscomp$inline_245$$ = $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$[$i$jscomp$inline_244$$], $$jscomp$inline_250_attrNameEndIndex$jscomp$inline_246$$ = -1, $attrName$jscomp$inline_247$$ = void 0, $end$jscomp$inline_251_lastIndex$jscomp$inline_248$$ = 0, $match$jscomp$inline_249$$; $end$jscomp$inline_251_lastIndex$jscomp$inline_248$$ < $s$jscomp$inline_245$$.length;) {
      $regex$jscomp$inline_243$$.lastIndex = $end$jscomp$inline_251_lastIndex$jscomp$inline_248$$;
      $match$jscomp$inline_249$$ = $regex$jscomp$inline_243$$.exec($s$jscomp$inline_245$$);
      if (null === $match$jscomp$inline_249$$) {
        break;
      }
      $end$jscomp$inline_251_lastIndex$jscomp$inline_248$$ = $regex$jscomp$inline_243$$.lastIndex;
      $regex$jscomp$inline_243$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_textEndRegex$$ ? "!--" === $match$jscomp$inline_249$$[1] ? $regex$jscomp$inline_243$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_commentEndRegex$$ : void 0 !== $match$jscomp$inline_249$$[1] ? $regex$jscomp$inline_243$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_comment2EndRegex$$ : void 0 !== 
      $match$jscomp$inline_249$$[2] ? ($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_rawTextElement$$.test($match$jscomp$inline_249$$[2]) && ($$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$ = new RegExp("</" + $match$jscomp$inline_249$$[2], "g")), $regex$jscomp$inline_243$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$) : 
      void 0 !== $match$jscomp$inline_249$$[3] && ($regex$jscomp$inline_243$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$) : $regex$jscomp$inline_243$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$ ? ">" === $match$jscomp$inline_249$$[0] ? ($$jscomp$inline_250_attrNameEndIndex$jscomp$inline_246$$ = void 0, $regex$jscomp$inline_243$$ = null != ($$jscomp$inline_250_attrNameEndIndex$jscomp$inline_246$$ = 
      $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$) ? $$jscomp$inline_250_attrNameEndIndex$jscomp$inline_246$$ : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_textEndRegex$$, $$jscomp$inline_250_attrNameEndIndex$jscomp$inline_246$$ = -1) : void 0 === $match$jscomp$inline_249$$[1] ? $$jscomp$inline_250_attrNameEndIndex$jscomp$inline_246$$ = -2 : ($$jscomp$inline_250_attrNameEndIndex$jscomp$inline_246$$ = 
      $regex$jscomp$inline_243$$.lastIndex - $match$jscomp$inline_249$$[2].length, $attrName$jscomp$inline_247$$ = $match$jscomp$inline_249$$[1], $regex$jscomp$inline_243$$ = void 0 === $match$jscomp$inline_249$$[3] ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$ : '"' === $match$jscomp$inline_249$$[3] ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_doubleQuoteAttrEndRegex$$ : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_singleQuoteAttrEndRegex$$) : 
      $regex$jscomp$inline_243$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_doubleQuoteAttrEndRegex$$ || $regex$jscomp$inline_243$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_singleQuoteAttrEndRegex$$ ? $regex$jscomp$inline_243$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$ : $regex$jscomp$inline_243$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_commentEndRegex$$ || 
      $regex$jscomp$inline_243$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_comment2EndRegex$$ ? $regex$jscomp$inline_243$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_textEndRegex$$ : ($regex$jscomp$inline_243$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$, $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$ = 
      void 0);
    }
    $end$jscomp$inline_251_lastIndex$jscomp$inline_248$$ = $regex$jscomp$inline_243$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$ && $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$[$i$jscomp$inline_244$$ + 1].startsWith("/>") ? " " : "";
    $html$jscomp$inline_241$$ += $regex$jscomp$inline_243$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_textEndRegex$$ ? $s$jscomp$inline_245$$ + $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_nodeMarker$$ : 0 <= $$jscomp$inline_250_attrNameEndIndex$jscomp$inline_246$$ ? ($attrNames$jscomp$inline_240_m$jscomp$5_realName$$.push($attrName$jscomp$inline_247$$), $s$jscomp$inline_245$$.slice(0, $$jscomp$inline_250_attrNameEndIndex$jscomp$inline_246$$) + 
    "$lit$" + $s$jscomp$inline_245$$.slice($$jscomp$inline_250_attrNameEndIndex$jscomp$inline_246$$)) + $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$ + $end$jscomp$inline_251_lastIndex$jscomp$inline_248$$ : $s$jscomp$inline_245$$ + $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$ + (-2 === $$jscomp$inline_250_attrNameEndIndex$jscomp$inline_246$$ ? $i$jscomp$inline_244$$ : $end$jscomp$inline_251_lastIndex$jscomp$inline_248$$);
  }
  $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$ = [$module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustFromTemplateString$$($$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$, $html$jscomp$inline_241$$ + ($$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$[$i$jscomp$109_l$jscomp$inline_239_statics$jscomp$1$$] || 
  "<?>") + (2 === $$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$ ? "</svg>" : "")), $attrNames$jscomp$inline_240_m$jscomp$5_realName$$];
  $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$ = $$jscomp$makeIterator$$($$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$);
  $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$ = $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$.next().value;
  $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$ = $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$.next().value;
  this.$el$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$Template$$.createElement($$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$, $node$jscomp$18_options$jscomp$123_svgElement$$);
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.currentNode = this.$el$.content;
  2 === $$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$ && ($node$jscomp$18_options$jscomp$123_svgElement$$ = this.$el$.content.firstChild, $node$jscomp$18_options$jscomp$123_svgElement$$.replaceWith.apply($node$jscomp$18_options$jscomp$123_svgElement$$, $$jscomp$arrayFromIterable$$($node$jscomp$18_options$jscomp$123_svgElement$$.childNodes)));
  for (; null !== ($node$jscomp$18_options$jscomp$123_svgElement$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.nextNode()) && $parts$jscomp$6$$.length < $partCount$$;) {
    if (1 === $node$jscomp$18_options$jscomp$123_svgElement$$.nodeType) {
      if ($node$jscomp$18_options$jscomp$123_svgElement$$.hasAttributes()) {
        for ($$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$ = $$jscomp$makeIterator$$($node$jscomp$18_options$jscomp$123_svgElement$$.getAttributeNames()), $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$ = $$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$.next(); !$$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$.done; $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$ = 
        $$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$.next()) {
          $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$ = $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$.value, $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$.endsWith("$lit$") ? ($attrNames$jscomp$inline_240_m$jscomp$5_realName$$ = 
          $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$155_attrNames__tsickle_destructured_2_strings$jscomp$4$$[$attrNameIndex$$++], $i$jscomp$109_l$jscomp$inline_239_statics$jscomp$1$$ = $node$jscomp$18_options$jscomp$123_svgElement$$.getAttribute($$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$).split($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$), 
          $attrNames$jscomp$inline_240_m$jscomp$5_realName$$ = /([.?@])?(.*)/.exec($attrNames$jscomp$inline_240_m$jscomp$5_realName$$), $parts$jscomp$6$$.push({type:1, index:$$jscomp$destructuring$var13_nodeIndex$$, name:$attrNames$jscomp$inline_240_m$jscomp$5_realName$$[2], $strings$:$i$jscomp$109_l$jscomp$inline_239_statics$jscomp$1$$, $ctor$:"." === $attrNames$jscomp$inline_240_m$jscomp$5_realName$$[1] ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$PropertyPart$$ : 
          "?" === $attrNames$jscomp$inline_240_m$jscomp$5_realName$$[1] ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$BooleanAttributePart$$ : "@" === $attrNames$jscomp$inline_240_m$jscomp$5_realName$$[1] ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$EventPart$$ : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$}), $node$jscomp$18_options$jscomp$123_svgElement$$.removeAttribute($$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$)) : 
          $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$.startsWith($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$) && ($parts$jscomp$6$$.push({type:6, index:$$jscomp$destructuring$var13_nodeIndex$$}), $node$jscomp$18_options$jscomp$123_svgElement$$.removeAttribute($$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$));
        }
      }
      if ($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_rawTextElement$$.test($node$jscomp$18_options$jscomp$123_svgElement$$.tagName) && ($$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$ = $node$jscomp$18_options$jscomp$123_svgElement$$.textContent.split($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$), $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$ = 
      $$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$.length - 1, 0 < $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$)) {
        $node$jscomp$18_options$jscomp$123_svgElement$$.textContent = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustedTypes$$ ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustedTypes$$.emptyScript : "";
        for ($i$jscomp$109_l$jscomp$inline_239_statics$jscomp$1$$ = 0; $i$jscomp$109_l$jscomp$inline_239_statics$jscomp$1$$ < $$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$; $i$jscomp$109_l$jscomp$inline_239_statics$jscomp$1$$++) {
          $node$jscomp$18_options$jscomp$123_svgElement$$.append($$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$[$i$jscomp$109_l$jscomp$inline_239_statics$jscomp$1$$], $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createComment("")), $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.nextNode(), $parts$jscomp$6$$.push({type:2, index:++$$jscomp$destructuring$var13_nodeIndex$$});
        }
        $node$jscomp$18_options$jscomp$123_svgElement$$.append($$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$[$$jscomp$key$m1864887151$81$name$jscomp$110_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$110_rawTextEndRegex$jscomp$inline_242$$], $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createComment(""));
      }
    } else if (8 === $node$jscomp$18_options$jscomp$123_svgElement$$.nodeType) {
      if ($node$jscomp$18_options$jscomp$123_svgElement$$.data === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_markerMatch$$) {
        $parts$jscomp$6$$.push({type:2, index:$$jscomp$destructuring$var13_nodeIndex$$});
      } else {
        for ($$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$ = -1; -1 !== ($$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$ = $node$jscomp$18_options$jscomp$123_svgElement$$.data.indexOf($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$, $$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$ + 1));) {
          $parts$jscomp$6$$.push({type:7, index:$$jscomp$destructuring$var13_nodeIndex$$}), $$jscomp$iter$92_i$jscomp$110_strings$jscomp$5_type$jscomp$184$$ += $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$.length - 1;
        }
      }
    }
    $$jscomp$destructuring$var13_nodeIndex$$++;
  }
}
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$Template$$.createElement = function($html$jscomp$28$$) {
  var $el$jscomp$5$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createElement("template");
  $el$jscomp$5$$.innerHTML = $html$jscomp$28$$;
  return $el$jscomp$5$$;
};
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$($part$jscomp$1$$, $value$jscomp$199$$, $parent$jscomp$8$$, $attributeIndex$$) {
  $parent$jscomp$8$$ = void 0 === $parent$jscomp$8$$ ? $part$jscomp$1$$ : $parent$jscomp$8$$;
  if ($value$jscomp$199$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$) {
    return $value$jscomp$199$$;
  }
  var $$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$, $currentDirective$$ = void 0 !== $attributeIndex$$ ? null == ($$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$ = $parent$jscomp$8$$.$i$) ? void 0 : $$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$[$attributeIndex$$] : $parent$jscomp$8$$.$o$;
  $$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isPrimitive$$($value$jscomp$199$$) ? void 0 : $value$jscomp$199$$._$litDirective$;
  var $$jscomp$optchain$tmpm1864887151$9$$;
  if ((null == ($$jscomp$optchain$tmpm1864887151$9$$ = $currentDirective$$) ? void 0 : $$jscomp$optchain$tmpm1864887151$9$$.constructor) !== $$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$) {
    var $$jscomp$optchain$tmpm1864887151$10$$, $$jscomp$optchain$tmpm1864887151$12$$;
    null == ($$jscomp$optchain$tmpm1864887151$10$$ = $currentDirective$$) || null == ($$jscomp$optchain$tmpm1864887151$12$$ = $$jscomp$optchain$tmpm1864887151$10$$._$notifyDirectiveConnectionChanged) || $$jscomp$optchain$tmpm1864887151$12$$.call($$jscomp$optchain$tmpm1864887151$10$$, !1);
    void 0 === $$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$ ? $currentDirective$$ = void 0 : ($currentDirective$$ = new $$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$($part$jscomp$1$$), $currentDirective$$.$_$initialize$($part$jscomp$1$$, $parent$jscomp$8$$, $attributeIndex$$));
    if (void 0 !== $attributeIndex$$) {
      var $$jscomp$logical$assign$tmpm1864887151$1$$, $$jscomp$nullish$tmp13$$;
      (null != ($$jscomp$nullish$tmp13$$ = ($$jscomp$logical$assign$tmpm1864887151$1$$ = $parent$jscomp$8$$).$i$) ? $$jscomp$nullish$tmp13$$ : $$jscomp$logical$assign$tmpm1864887151$1$$.$i$ = [])[$attributeIndex$$] = $currentDirective$$;
    } else {
      $parent$jscomp$8$$.$o$ = $currentDirective$$;
    }
  }
  void 0 !== $currentDirective$$ && ($value$jscomp$199$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$($part$jscomp$1$$, $currentDirective$$.$_$resolve$($part$jscomp$1$$, $value$jscomp$199$$.values), $currentDirective$$, $attributeIndex$$));
  return $value$jscomp$199$$;
}
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$TemplateInstance$$($template$jscomp$7$$, $parent$jscomp$9$$) {
  this.$i$ = [];
  this.$l$ = void 0;
  this.$_$template$ = $template$jscomp$7$$;
  this.$g$ = $parent$jscomp$9$$;
}
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$TemplateInstance$$.prototype.$m$ = function($options$jscomp$124$$) {
  var $$jscomp$destructuring$var16_parts$jscomp$7$$ = this.$_$template$, $content$jscomp$8_node$jscomp$19$$ = $$jscomp$destructuring$var16_parts$jscomp$7$$.$el$.content;
  $$jscomp$destructuring$var16_parts$jscomp$7$$ = $$jscomp$destructuring$var16_parts$jscomp$7$$.$g$;
  var $$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$, $fragment$jscomp$2$$ = (null != ($$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$ = null == $options$jscomp$124$$ ? void 0 : $options$jscomp$124$$.$creationScope$) ? $$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$ : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$).importNode($content$jscomp$8_node$jscomp$19$$, !0);
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.currentNode = $fragment$jscomp$2$$;
  $content$jscomp$8_node$jscomp$19$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.nextNode();
  for (var $partIndex$$ = $$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$ = 0, $templatePart$$ = $$jscomp$destructuring$var16_parts$jscomp$7$$[0]; void 0 !== $templatePart$$;) {
    if ($$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$ === $templatePart$$.index) {
      var $$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$ = void 0;
      2 === $templatePart$$.type ? $$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$($content$jscomp$8_node$jscomp$19$$, $content$jscomp$8_node$jscomp$19$$.nextSibling, this, $options$jscomp$124$$) : 1 === $templatePart$$.type ? $$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$ = new $templatePart$$.$ctor$($content$jscomp$8_node$jscomp$19$$, $templatePart$$.name, $templatePart$$.$strings$, 
      this, $options$jscomp$124$$) : 6 === $templatePart$$.type && ($$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ElementPart$$($content$jscomp$8_node$jscomp$19$$, this, $options$jscomp$124$$));
      this.$i$.push($$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$);
      $templatePart$$ = $$jscomp$destructuring$var16_parts$jscomp$7$$[++$partIndex$$];
    }
    $$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$ = void 0;
    $$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$ !== (null == ($$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$ = $templatePart$$) ? void 0 : $$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$.index) && ($content$jscomp$8_node$jscomp$19$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.nextNode(), $$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$++);
  }
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.currentNode = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$;
  return $fragment$jscomp$2$$;
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$TemplateInstance$$.prototype.$j$ = function($values$jscomp$17$$) {
  for (var $i$jscomp$111$$ = 0, $$jscomp$iter$93$$ = $$jscomp$makeIterator$$(this.$i$), $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$ = $$jscomp$iter$93$$.next(); !$$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$.done; $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$ = $$jscomp$iter$93$$.next()) {
    $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$ = $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$.value, void 0 !== $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$ && (void 0 !== $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$.$strings$ ? ($$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$.$_$setValue$($values$jscomp$17$$, $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$, $i$jscomp$111$$), $i$jscomp$111$$ += $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$.$strings$.length - 
    2) : $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$.$_$setValue$($values$jscomp$17$$[$i$jscomp$111$$])), $i$jscomp$111$$++;
  }
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$TemplateInstance$$.prototype, {parentNode:{configurable:!0, enumerable:!0, get:function() {
  return this.$g$.parentNode;
}}, $_$isConnected$:{configurable:!0, enumerable:!0, get:function() {
  return this.$g$.$_$isConnected$;
}}});
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$($startNode$jscomp$1$$, $endNode$jscomp$1$$, $parent$jscomp$10$$, $options$jscomp$125$$) {
  this.type = 2;
  this.$_$committedValue$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$;
  this.$l$ = void 0;
  this.$_$startNode$ = $startNode$jscomp$1$$;
  this.$_$endNode$ = $endNode$jscomp$1$$;
  this.$g$ = $parent$jscomp$10$$;
  this.options = $options$jscomp$125$$;
  var $$jscomp$nullish$tmp16$$;
  this.$m$ = null != ($$jscomp$nullish$tmp16$$ = null == $options$jscomp$125$$ ? void 0 : $options$jscomp$125$$.isConnected) ? $$jscomp$nullish$tmp16$$ : !0;
  this.$i$ = void 0;
}
$JSCompiler_prototypeAlias$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$.prototype;
$JSCompiler_prototypeAlias$$.$_$setValue$ = function($value$jscomp$200$$, $directiveParent$jscomp$2$$) {
  $value$jscomp$200$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$(this, $value$jscomp$200$$, void 0 === $directiveParent$jscomp$2$$ ? this : $directiveParent$jscomp$2$$);
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isPrimitive$$($value$jscomp$200$$) ? $value$jscomp$200$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ || null == $value$jscomp$200$$ || "" === $value$jscomp$200$$ ? (this.$_$committedValue$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ && this.$_$clear$(), this.$_$committedValue$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$) : 
  $value$jscomp$200$$ !== this.$_$committedValue$ && $value$jscomp$200$$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$ && this.$_commitText$($value$jscomp$200$$) : void 0 !== $value$jscomp$200$$._$litType$ ? this.$_commitTemplateResult$($value$jscomp$200$$) : void 0 !== $value$jscomp$200$$.nodeType ? this.$_commitNode$($value$jscomp$200$$) : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isArray$$($value$jscomp$200$$) || 
  "function" === typeof(null == $value$jscomp$200$$ ? void 0 : $value$jscomp$200$$[Symbol.iterator]) ? this.$_commitIterable$($value$jscomp$200$$) : this.$_commitText$($value$jscomp$200$$);
};
$JSCompiler_prototypeAlias$$.$_insert$ = function($node$jscomp$20$$) {
  return $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.$_$startNode$).parentNode).insertBefore($node$jscomp$20$$, this.$_$endNode$);
};
$JSCompiler_prototypeAlias$$.$_commitNode$ = function($value$jscomp$201$$) {
  if (this.$_$committedValue$ !== $value$jscomp$201$$) {
    this.$_$clear$();
    if ($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity$sanitizerFactory$$ !== $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_noopSanitizer$$) {
      var $$jscomp$optchain$tmpm1864887151$19$$, $parentNodeName$$ = null == ($$jscomp$optchain$tmpm1864887151$19$$ = this.$_$startNode$.parentNode) ? void 0 : $$jscomp$optchain$tmpm1864887151$19$$.nodeName;
      if ("STYLE" === $parentNodeName$$ || "SCRIPT" === $parentNodeName$$) {
        throw Error("Forbidden");
      }
    }
    this.$_$committedValue$ = this.$_insert$($value$jscomp$201$$);
  }
};
$JSCompiler_prototypeAlias$$.$_commitText$ = function($value$jscomp$202$$) {
  if (this.$_$committedValue$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ && $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isPrimitive$$(this.$_$committedValue$)) {
    var $node$jscomp$21_textNode$jscomp$1$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.$_$startNode$).nextSibling;
    void 0 === this.$i$ && (this.$i$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity$sanitizerFactory$$($node$jscomp$21_textNode$jscomp$1$$, "data", "property"));
    $value$jscomp$202$$ = this.$i$($value$jscomp$202$$);
    $node$jscomp$21_textNode$jscomp$1$$.data = $value$jscomp$202$$;
  } else {
    $node$jscomp$21_textNode$jscomp$1$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createTextNode(""), this.$_commitNode$($node$jscomp$21_textNode$jscomp$1$$), void 0 === this.$i$ && (this.$i$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity$sanitizerFactory$$($node$jscomp$21_textNode$jscomp$1$$, "data", "property")), $value$jscomp$202$$ = this.$i$($value$jscomp$202$$), $node$jscomp$21_textNode$jscomp$1$$.data = 
    $value$jscomp$202$$;
  }
  this.$_$committedValue$ = $value$jscomp$202$$;
};
$JSCompiler_prototypeAlias$$.$_commitTemplateResult$ = function($fragment$jscomp$3_result$jscomp$28_template$jscomp$8$$) {
  var $values$jscomp$18$$ = $fragment$jscomp$3_result$jscomp$28_template$jscomp$8$$.values, $type$jscomp$185$$ = $fragment$jscomp$3_result$jscomp$28_template$jscomp$8$$._$litType$;
  $fragment$jscomp$3_result$jscomp$28_template$jscomp$8$$ = "number" === typeof $type$jscomp$185$$ ? this.$_$getTemplate$($fragment$jscomp$3_result$jscomp$28_template$jscomp$8$$) : (void 0 === $type$jscomp$185$$.$el$ && ($type$jscomp$185$$.$el$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$Template$$.createElement($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustFromTemplateString$$($type$jscomp$185$$.$h$, $type$jscomp$185$$.$h$[0]), 
  this.options)), $type$jscomp$185$$);
  var $$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$;
  (null == ($$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$ = this.$_$committedValue$) ? void 0 : $$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$.$_$template$) === $fragment$jscomp$3_result$jscomp$28_template$jscomp$8$$ ? this.$_$committedValue$.$j$($values$jscomp$18$$) : ($$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$TemplateInstance$$($fragment$jscomp$3_result$jscomp$28_template$jscomp$8$$, 
  this), $fragment$jscomp$3_result$jscomp$28_template$jscomp$8$$ = $$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$.$m$(this.options), $$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$.$j$($values$jscomp$18$$), this.$_commitNode$($fragment$jscomp$3_result$jscomp$28_template$jscomp$8$$), this.$_$committedValue$ = $$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$);
};
$JSCompiler_prototypeAlias$$.$_$getTemplate$ = function($result$jscomp$29$$) {
  var $template$jscomp$9$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_templateCache$$.get($result$jscomp$29$$.$strings$);
  void 0 === $template$jscomp$9$$ && $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_templateCache$$.set($result$jscomp$29$$.$strings$, $template$jscomp$9$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$Template$$($result$jscomp$29$$));
  return $template$jscomp$9$$;
};
$JSCompiler_prototypeAlias$$.$_commitIterable$ = function($$jscomp$iter$94_value$jscomp$203$$) {
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isArray$$(this.$_$committedValue$) || (this.$_$committedValue$ = [], this.$_$clear$());
  var $itemParts$$ = this.$_$committedValue$, $partIndex$jscomp$1$$ = 0, $itemPart$$;
  $$jscomp$iter$94_value$jscomp$203$$ = $$jscomp$makeIterator$$($$jscomp$iter$94_value$jscomp$203$$);
  for (var $$jscomp$key$m1864887151$83$item$jscomp$29_item$jscomp$29$$ = $$jscomp$iter$94_value$jscomp$203$$.next(); !$$jscomp$key$m1864887151$83$item$jscomp$29_item$jscomp$29$$.done; $$jscomp$key$m1864887151$83$item$jscomp$29_item$jscomp$29$$ = $$jscomp$iter$94_value$jscomp$203$$.next()) {
    $$jscomp$key$m1864887151$83$item$jscomp$29_item$jscomp$29$$ = $$jscomp$key$m1864887151$83$item$jscomp$29_item$jscomp$29$$.value, $partIndex$jscomp$1$$ === $itemParts$$.length ? $itemParts$$.push($itemPart$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$(this.$_insert$($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createComment("")), this.$_insert$($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createComment("")), 
    this, this.options)) : $itemPart$$ = $itemParts$$[$partIndex$jscomp$1$$], $itemPart$$.$_$setValue$($$jscomp$key$m1864887151$83$item$jscomp$29_item$jscomp$29$$), $partIndex$jscomp$1$$++;
  }
  $partIndex$jscomp$1$$ < $itemParts$$.length && (this.$_$clear$($itemPart$$ && $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$($itemPart$$.$_$endNode$).nextSibling, $partIndex$jscomp$1$$), $itemParts$$.length = $partIndex$jscomp$1$$);
};
$JSCompiler_prototypeAlias$$.$_$clear$ = function($start$jscomp$17$$, $from$jscomp$1_n$jscomp$13$$) {
  $start$jscomp$17$$ = void 0 === $start$jscomp$17$$ ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.$_$startNode$).nextSibling : $start$jscomp$17$$;
  var $$jscomp$optchain$tmpm1864887151$22$$;
  for (null == ($$jscomp$optchain$tmpm1864887151$22$$ = this.$j$) || $$jscomp$optchain$tmpm1864887151$22$$.call(this, !1, !0, $from$jscomp$1_n$jscomp$13$$); $start$jscomp$17$$ && $start$jscomp$17$$ !== this.$_$endNode$;) {
    $from$jscomp$1_n$jscomp$13$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$($start$jscomp$17$$).nextSibling, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$($start$jscomp$17$$).remove(), $start$jscomp$17$$ = $from$jscomp$1_n$jscomp$13$$;
  }
};
function $JSCompiler_StaticMethods_setConnected$$($JSCompiler_StaticMethods_setConnected$self$$, $isConnected$$) {
  if (void 0 === $JSCompiler_StaticMethods_setConnected$self$$.$g$) {
    $JSCompiler_StaticMethods_setConnected$self$$.$m$ = $isConnected$$;
    var $$jscomp$optchain$tmpm1864887151$24$$;
    null == ($$jscomp$optchain$tmpm1864887151$24$$ = $JSCompiler_StaticMethods_setConnected$self$$.$j$) || $$jscomp$optchain$tmpm1864887151$24$$.call($JSCompiler_StaticMethods_setConnected$self$$, $isConnected$$);
  }
}
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$.prototype, {$_$isConnected$:{configurable:!0, enumerable:!0, get:function() {
  var $$jscomp$optchain$tmpm1864887151$15$$, $$jscomp$nullish$tmp15$$;
  return null != ($$jscomp$nullish$tmp15$$ = null == ($$jscomp$optchain$tmpm1864887151$15$$ = this.$g$) ? void 0 : $$jscomp$optchain$tmpm1864887151$15$$.$_$isConnected$) ? $$jscomp$nullish$tmp15$$ : this.$m$;
}}, parentNode:{configurable:!0, enumerable:!0, get:function() {
  var $parentNode$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.$_$startNode$).parentNode, $parent$jscomp$11$$ = this.$g$, $$jscomp$optchain$tmpm1864887151$17$$;
  void 0 !== $parent$jscomp$11$$ && 11 === (null == ($$jscomp$optchain$tmpm1864887151$17$$ = $parentNode$$) ? void 0 : $$jscomp$optchain$tmpm1864887151$17$$.nodeType) && ($parentNode$$ = $parent$jscomp$11$$.parentNode);
  return $parentNode$$;
}}});
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$($element$jscomp$23$$, $name$jscomp$111$$, $strings$jscomp$7$$, $parent$jscomp$12$$, $options$jscomp$126$$) {
  this.type = 1;
  this.$_$committedValue$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$;
  this.$l$ = void 0;
  this.element = $element$jscomp$23$$;
  this.name = $name$jscomp$111$$;
  this.$g$ = $parent$jscomp$12$$;
  this.options = $options$jscomp$126$$;
  2 < $strings$jscomp$7$$.length || "" !== $strings$jscomp$7$$[0] || "" !== $strings$jscomp$7$$[1] ? (this.$_$committedValue$ = Array($strings$jscomp$7$$.length - 1).fill(new String()), this.$strings$ = $strings$jscomp$7$$) : this.$_$committedValue$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$;
  this.$_sanitizer$ = void 0;
}
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$.prototype.$_$setValue$ = function($value$jscomp$204$$, $directiveParent$jscomp$3$$, $valueIndex$$, $noCommit$$) {
  $directiveParent$jscomp$3$$ = void 0 === $directiveParent$jscomp$3$$ ? this : $directiveParent$jscomp$3$$;
  var $strings$jscomp$8$$ = this.$strings$, $change$$ = !1;
  if (void 0 === $strings$jscomp$8$$) {
    if ($value$jscomp$204$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$(this, $value$jscomp$204$$, $directiveParent$jscomp$3$$, 0), $change$$ = !$module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isPrimitive$$($value$jscomp$204$$) || $value$jscomp$204$$ !== this.$_$committedValue$ && $value$jscomp$204$$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$) {
      this.$_$committedValue$ = $value$jscomp$204$$;
    }
  } else {
    var $values$jscomp$19$$ = $value$jscomp$204$$;
    $value$jscomp$204$$ = $strings$jscomp$8$$[0];
    var $i$jscomp$112$$;
    for ($i$jscomp$112$$ = 0; $i$jscomp$112$$ < $strings$jscomp$8$$.length - 1; $i$jscomp$112$$++) {
      var $v$jscomp$16$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$(this, $values$jscomp$19$$[$valueIndex$$ + $i$jscomp$112$$], $directiveParent$jscomp$3$$, $i$jscomp$112$$);
      $v$jscomp$16$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$ && ($v$jscomp$16$$ = this.$_$committedValue$[$i$jscomp$112$$]);
      $change$$ || ($change$$ = !$module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isPrimitive$$($v$jscomp$16$$) || $v$jscomp$16$$ !== this.$_$committedValue$[$i$jscomp$112$$]);
      if ($v$jscomp$16$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$) {
        $value$jscomp$204$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$;
      } else if ($value$jscomp$204$$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$) {
        var $$jscomp$nullish$tmp17$$ = void 0;
        $value$jscomp$204$$ += (null != ($$jscomp$nullish$tmp17$$ = $v$jscomp$16$$) ? $$jscomp$nullish$tmp17$$ : "") + $strings$jscomp$8$$[$i$jscomp$112$$ + 1];
      }
      this.$_$committedValue$[$i$jscomp$112$$] = $v$jscomp$16$$;
    }
  }
  $change$$ && !$noCommit$$ && this.$_commitValue$($value$jscomp$204$$);
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$.prototype.$_commitValue$ = function($value$jscomp$205$$) {
  if ($value$jscomp$205$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$) {
    $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.element).removeAttribute(this.name);
  } else {
    void 0 === this.$_sanitizer$ && (this.$_sanitizer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity$sanitizerFactory$$(this.element, this.name, "attribute"));
    var $$jscomp$nullish$tmp18$$;
    $value$jscomp$205$$ = this.$_sanitizer$(null != ($$jscomp$nullish$tmp18$$ = $value$jscomp$205$$) ? $$jscomp$nullish$tmp18$$ : "");
    var $$jscomp$nullish$tmp19$$;
    $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.element).setAttribute(this.name, null != ($$jscomp$nullish$tmp19$$ = $value$jscomp$205$$) ? $$jscomp$nullish$tmp19$$ : "");
  }
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$.prototype, {tagName:{configurable:!0, enumerable:!0, get:function() {
  return this.element.tagName;
}}, $_$isConnected$:{configurable:!0, enumerable:!0, get:function() {
  return this.$g$.$_$isConnected$;
}}});
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$PropertyPart$$() {
  $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$.apply(this, arguments);
  this.type = 3;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$PropertyPart$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$);
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$PropertyPart$$.prototype.$_commitValue$ = function($value$jscomp$206$$) {
  void 0 === this.$_sanitizer$ && (this.$_sanitizer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity$sanitizerFactory$$(this.element, this.name, "property"));
  $value$jscomp$206$$ = this.$_sanitizer$($value$jscomp$206$$);
  this.element[this.name] = $value$jscomp$206$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ ? void 0 : $value$jscomp$206$$;
};
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$BooleanAttributePart$$() {
  $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$.apply(this, arguments);
  this.type = 4;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$BooleanAttributePart$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$);
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$BooleanAttributePart$$.prototype.$_commitValue$ = function($value$jscomp$207$$) {
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.element).toggleAttribute(this.name, !!$value$jscomp$207$$ && $value$jscomp$207$$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$);
};
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$EventPart$$($element$jscomp$24$$, $name$jscomp$112$$, $strings$jscomp$9$$, $parent$jscomp$13$$, $options$jscomp$127$$) {
  $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$.call(this, $element$jscomp$24$$, $name$jscomp$112$$, $strings$jscomp$9$$, $parent$jscomp$13$$, $options$jscomp$127$$);
  this.type = 5;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$EventPart$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$);
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$EventPart$$.prototype.$_$setValue$ = function($newListener$$, $directiveParent$jscomp$4_oldListener$$) {
  var $$jscomp$nullish$tmp20_shouldRemoveListener$$;
  $newListener$$ = null != ($$jscomp$nullish$tmp20_shouldRemoveListener$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$(this, $newListener$$, void 0 === $directiveParent$jscomp$4_oldListener$$ ? this : $directiveParent$jscomp$4_oldListener$$, 0)) ? $$jscomp$nullish$tmp20_shouldRemoveListener$$ : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$;
  if ($newListener$$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$) {
    $directiveParent$jscomp$4_oldListener$$ = this.$_$committedValue$;
    $$jscomp$nullish$tmp20_shouldRemoveListener$$ = $newListener$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ && $directiveParent$jscomp$4_oldListener$$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ || $newListener$$.capture !== $directiveParent$jscomp$4_oldListener$$.capture || $newListener$$.once !== $directiveParent$jscomp$4_oldListener$$.once || $newListener$$.passive !== $directiveParent$jscomp$4_oldListener$$.passive;
    var $shouldAddListener$$ = $newListener$$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ && ($directiveParent$jscomp$4_oldListener$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ || $$jscomp$nullish$tmp20_shouldRemoveListener$$);
    $$jscomp$nullish$tmp20_shouldRemoveListener$$ && this.element.removeEventListener(this.name, this, $directiveParent$jscomp$4_oldListener$$);
    $shouldAddListener$$ && this.element.addEventListener(this.name, this, $newListener$$);
    this.$_$committedValue$ = $newListener$$;
  }
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$EventPart$$.prototype.handleEvent = function($event$jscomp$8$$) {
  if ("function" === typeof this.$_$committedValue$) {
    var $$jscomp$optchain$tmpm1864887151$25$$, $$jscomp$nullish$tmp21$$;
    this.$_$committedValue$.call(null != ($$jscomp$nullish$tmp21$$ = null == ($$jscomp$optchain$tmpm1864887151$25$$ = this.options) ? void 0 : $$jscomp$optchain$tmpm1864887151$25$$.host) ? $$jscomp$nullish$tmp21$$ : this.element, $event$jscomp$8$$);
  } else {
    this.$_$committedValue$.handleEvent($event$jscomp$8$$);
  }
};
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ElementPart$$($element$jscomp$25$$, $parent$jscomp$14$$, $options$jscomp$128$$) {
  this.element = $element$jscomp$25$$;
  this.type = 6;
  this.$l$ = void 0;
  this.$g$ = $parent$jscomp$14$$;
  this.options = $options$jscomp$128$$;
}
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ElementPart$$.prototype.$_$setValue$ = function($value$jscomp$208$$) {
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$(this, $value$jscomp$208$$);
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ElementPart$$.prototype, {$_$isConnected$:{configurable:!0, enumerable:!0, get:function() {
  return this.$g$.$_$isConnected$;
}}});
var $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$_$0LH$_ChildPart$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$, $$jscomp$optchain$tmpm1864887151$26$$;
null == ($$jscomp$optchain$tmpm1864887151$26$$ = window.litHtmlPolyfillSupport) || $$jscomp$optchain$tmpm1864887151$26$$($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$Template$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$);
var $JSCompiler_inline_result$jscomp$156$$, $$jscomp$inline_527$$;
(null != ($$jscomp$inline_527$$ = $goog$global$$.litHtmlVersions) ? $$jscomp$inline_527$$ : $goog$global$$.litHtmlVersions = []).push("3.1.0");
$JSCompiler_inline_result$jscomp$156$$ = function($value$jscomp$inline_253$$, $container$jscomp$inline_254$$, $options$jscomp$inline_255$$) {
  var $$jscomp$inline_256_endNode$jscomp$inline_260_part$jscomp$inline_258$$, $partOwnerNode$jscomp$inline_257$$ = null != ($$jscomp$inline_256_endNode$jscomp$inline_260_part$jscomp$inline_258$$ = null == $options$jscomp$inline_255$$ ? void 0 : $options$jscomp$inline_255$$.$renderBefore$) ? $$jscomp$inline_256_endNode$jscomp$inline_260_part$jscomp$inline_258$$ : $container$jscomp$inline_254$$;
  $$jscomp$inline_256_endNode$jscomp$inline_260_part$jscomp$inline_258$$ = $partOwnerNode$jscomp$inline_257$$._$litPart$;
  if (void 0 === $$jscomp$inline_256_endNode$jscomp$inline_260_part$jscomp$inline_258$$) {
    var $$jscomp$inline_259$$;
    $$jscomp$inline_256_endNode$jscomp$inline_260_part$jscomp$inline_258$$ = null != ($$jscomp$inline_259$$ = null == $options$jscomp$inline_255$$ ? void 0 : $options$jscomp$inline_255$$.$renderBefore$) ? $$jscomp$inline_259$$ : null;
    $partOwnerNode$jscomp$inline_257$$._$litPart$ = $$jscomp$inline_256_endNode$jscomp$inline_260_part$jscomp$inline_258$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$($container$jscomp$inline_254$$.insertBefore($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createComment(""), $$jscomp$inline_256_endNode$jscomp$inline_260_part$jscomp$inline_258$$), $$jscomp$inline_256_endNode$jscomp$inline_260_part$jscomp$inline_258$$, 
    void 0, null != $options$jscomp$inline_255$$ ? $options$jscomp$inline_255$$ : {});
  }
  $$jscomp$inline_256_endNode$jscomp$inline_260_part$jscomp$inline_258$$.$_$setValue$($value$jscomp$inline_253$$);
  return $$jscomp$inline_256_endNode$jscomp$inline_260_part$jscomp$inline_258$$;
};
var $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$supportsAdoptingStyleSheets$$ = $goog$global$$.ShadowRoot && (void 0 === $goog$global$$.ShadyCSS || $goog$global$$.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag_constructionToken$$ = Symbol(), $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag_cssTagCache$$ = 
new WeakMap();
function $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$CSSResult$$($cssText$jscomp$1$$, $strings$jscomp$10$$, $safeToken$$) {
  this._$cssResult$ = !0;
  if ($safeToken$$ !== $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag_constructionToken$$) {
    throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
  }
  this.cssText = $cssText$jscomp$1$$;
  this.$i$ = $strings$jscomp$10$$;
}
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$CSSResult$$.prototype.toString = function() {
  return this.cssText;
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$CSSResult$$.prototype, {$g$:{configurable:!0, enumerable:!0, get:function() {
  var $styleSheet$jscomp$9$$ = this.$j$, $strings$jscomp$11$$ = this.$i$;
  if ($module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$supportsAdoptingStyleSheets$$ && void 0 === $styleSheet$jscomp$9$$) {
    var $cacheable$$ = void 0 !== $strings$jscomp$11$$ && 1 === $strings$jscomp$11$$.length;
    $cacheable$$ && ($styleSheet$jscomp$9$$ = $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag_cssTagCache$$.get($strings$jscomp$11$$));
    void 0 === $styleSheet$jscomp$9$$ && ((this.$j$ = $styleSheet$jscomp$9$$ = new CSSStyleSheet()).replaceSync(this.cssText), $cacheable$$ && $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag_cssTagCache$$.set($strings$jscomp$11$$, $styleSheet$jscomp$9$$));
  }
  return $styleSheet$jscomp$9$$;
}}});
function $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($strings$jscomp$12$$) {
  var $values$jscomp$20$$ = $$jscomp$getRestArguments$$.apply(1, arguments);
  return function() {
    var $cssText$jscomp$2$$ = 1 === $strings$jscomp$12$$.length ? $strings$jscomp$12$$[0] : $values$jscomp$20$$.reduce(function($acc$$, $JSCompiler_inline_result$jscomp$157_v$jscomp$17$$, $idx$$) {
      if (!0 === $JSCompiler_inline_result$jscomp$157_v$jscomp$17$$._$cssResult$) {
        $JSCompiler_inline_result$jscomp$157_v$jscomp$17$$ = $JSCompiler_inline_result$jscomp$157_v$jscomp$17$$.cssText;
      } else {
        if ("number" !== typeof $JSCompiler_inline_result$jscomp$157_v$jscomp$17$$) {
          throw Error("Value passed to 'css' function must be a 'css' function result: " + ($JSCompiler_inline_result$jscomp$157_v$jscomp$17$$ + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."));
        }
      }
      return $acc$$ + $JSCompiler_inline_result$jscomp$157_v$jscomp$17$$ + $strings$jscomp$12$$[$idx$$ + 1];
    }, $strings$jscomp$12$$[0]);
    return new $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$CSSResult$$($cssText$jscomp$2$$, $strings$jscomp$12$$, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag_constructionToken$$);
  }();
}
function $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$adoptStyles$$($renderRoot$$, $$jscomp$iter$95_styles$jscomp$2$$) {
  if ($module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$supportsAdoptingStyleSheets$$) {
    $renderRoot$$.adoptedStyleSheets = $$jscomp$iter$95_styles$jscomp$2$$.map(function($s$jscomp$20$$) {
      return $s$jscomp$20$$ instanceof CSSStyleSheet ? $s$jscomp$20$$ : $s$jscomp$20$$.$g$;
    });
  } else {
    $$jscomp$iter$95_styles$jscomp$2$$ = $$jscomp$makeIterator$$($$jscomp$iter$95_styles$jscomp$2$$);
    for (var $$jscomp$key$m1914574069$6$s$jscomp$21_s$jscomp$21$$ = $$jscomp$iter$95_styles$jscomp$2$$.next(); !$$jscomp$key$m1914574069$6$s$jscomp$21_s$jscomp$21$$.done; $$jscomp$key$m1914574069$6$s$jscomp$21_s$jscomp$21$$ = $$jscomp$iter$95_styles$jscomp$2$$.next()) {
      $$jscomp$key$m1914574069$6$s$jscomp$21_s$jscomp$21$$ = $$jscomp$key$m1914574069$6$s$jscomp$21_s$jscomp$21$$.value;
      var $style$jscomp$12$$ = document.createElement("style"), $nonce$jscomp$6$$ = $goog$global$$.litNonce;
      void 0 !== $nonce$jscomp$6$$ && $style$jscomp$12$$.setAttribute("nonce", $nonce$jscomp$6$$);
      $style$jscomp$12$$.textContent = $$jscomp$key$m1914574069$6$s$jscomp$21_s$jscomp$21$$.cssText;
      $renderRoot$$.appendChild($style$jscomp$12$$);
    }
  }
}
var $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$getCompatibleStyle$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$supportsAdoptingStyleSheets$$ ? function($s$jscomp$22$$) {
  return $s$jscomp$22$$;
} : function($$jscomp$inline_266_s$jscomp$23$$) {
  if ($$jscomp$inline_266_s$jscomp$23$$ instanceof CSSStyleSheet) {
    var $JSCompiler_temp$jscomp$158_cssText$jscomp$inline_265$$ = "";
    $$jscomp$inline_266_s$jscomp$23$$ = $$jscomp$makeIterator$$($$jscomp$inline_266_s$jscomp$23$$.cssRules);
    for (var $$jscomp$key$m1914574069$7$rule$jscomp$inline_267$$ = $$jscomp$inline_266_s$jscomp$23$$.next(); !$$jscomp$key$m1914574069$7$rule$jscomp$inline_267$$.done; $$jscomp$key$m1914574069$7$rule$jscomp$inline_267$$ = $$jscomp$inline_266_s$jscomp$23$$.next()) {
      $JSCompiler_temp$jscomp$158_cssText$jscomp$inline_265$$ += $$jscomp$key$m1914574069$7$rule$jscomp$inline_267$$.value.cssText;
    }
    $JSCompiler_temp$jscomp$158_cssText$jscomp$inline_265$$ = new $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$CSSResult$$("string" === typeof $JSCompiler_temp$jscomp$158_cssText$jscomp$inline_265$$ ? $JSCompiler_temp$jscomp$158_cssText$jscomp$inline_265$$ : String($JSCompiler_temp$jscomp$158_cssText$jscomp$inline_265$$), void 0, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag_constructionToken$$);
  } else {
    $JSCompiler_temp$jscomp$158_cssText$jscomp$inline_265$$ = $$jscomp$inline_266_s$jscomp$23$$;
  }
  return $JSCompiler_temp$jscomp$158_cssText$jscomp$inline_265$$;
};
/*

 Copyright 2016 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var $module$contents$webcomponentsjs$custom_elements$es5_shim_implementation_shimNotNeeded$$ = !!/^\s*class\s*\{\s*\}\s*$/.test(function() {
}.toString()) || HTMLElement.es5Shimmed || void 0 === $goog$global$$.Reflect || void 0 === $goog$global$$.customElements || $goog$global$$.customElements.polyfillWrapFlushCallback || !1, $module$contents$webcomponentsjs$custom_elements$es5_shim_implementation_patchedHTMLElement$$;
function $module$exports$webcomponentsjs$custom_elements$es5_shim_implementation$getHTMLElement$$() {
  function $shim$$() {
    return $reflect$$.construct($BuiltInHTMLElement$$, [], this.constructor);
  }
  var $BuiltInHTMLElement$$ = HTMLElement;
  if ($module$contents$webcomponentsjs$custom_elements$es5_shim_implementation_shimNotNeeded$$) {
    return $BuiltInHTMLElement$$;
  }
  if (void 0 !== $module$contents$webcomponentsjs$custom_elements$es5_shim_implementation_patchedHTMLElement$$) {
    return $module$contents$webcomponentsjs$custom_elements$es5_shim_implementation_patchedHTMLElement$$;
  }
  var $reflect$$ = $goog$global$$.Reflect;
  $shim$$.prototype = $BuiltInHTMLElement$$.prototype;
  $shim$$.prototype.constructor = $shim$$;
  $shim$$.es5Shimmed = !0;
  Object.setPrototypeOf($shim$$, $BuiltInHTMLElement$$);
  return $module$contents$webcomponentsjs$custom_elements$es5_shim_implementation_patchedHTMLElement$$ = $shim$$;
}
var $module$contents$webcomponentsjs$custom_elements$es5_shim_implementation_applied$$ = !1;
$module$contents$webcomponentsjs$custom_elements$es5_shim_implementation_shimNotNeeded$$ || $module$contents$webcomponentsjs$custom_elements$es5_shim_implementation_applied$$ || ($module$contents$webcomponentsjs$custom_elements$es5_shim_implementation_applied$$ = !0, $goog$global$$.HTMLElement = $module$exports$webcomponentsjs$custom_elements$es5_shim_implementation$getHTMLElement$$());
var $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_HTMLElement$$ = $module$exports$webcomponentsjs$custom_elements$es5_shim_implementation$getHTMLElement$$(), $$jscomp$destructuring$var19$$ = Object, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_is$$ = $$jscomp$destructuring$var19$$.is, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_defineProperty$$ = 
$$jscomp$destructuring$var19$$.defineProperty, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_getOwnPropertyDescriptor$$ = $$jscomp$destructuring$var19$$.getOwnPropertyDescriptor, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_getOwnPropertyNames$$ = $$jscomp$destructuring$var19$$.getOwnPropertyNames, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_getOwnPropertySymbols$$ = 
$$jscomp$destructuring$var19$$.getOwnPropertySymbols, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_getPrototypeOf$$ = $$jscomp$destructuring$var19$$.getPrototypeOf, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_trustedTypes$$ = $goog$global$$.trustedTypes, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_emptyStringForBooleanAttribute$$ = 
$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_trustedTypes$$ ? $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_trustedTypes$$.emptyScript : "", $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_polyfillSupport$$ = $goog$global$$.reactiveElementPolyfillSupport, $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$defaultConverter$$ = 
{$toAttribute$:function($value$jscomp$216$$, $type$jscomp$188$$) {
  switch($type$jscomp$188$$) {
    case Boolean:
      $value$jscomp$216$$ = $value$jscomp$216$$ ? $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_emptyStringForBooleanAttribute$$ : null;
      break;
    case Object:
    case Array:
      $value$jscomp$216$$ = null == $value$jscomp$216$$ ? $value$jscomp$216$$ : JSON.stringify($value$jscomp$216$$);
  }
  return $value$jscomp$216$$;
}, $fromAttribute$:function($value$jscomp$217$$, $type$jscomp$189$$) {
  var $fromValue$$ = $value$jscomp$217$$;
  switch($type$jscomp$189$$) {
    case Boolean:
      $fromValue$$ = null !== $value$jscomp$217$$;
      break;
    case Number:
      $fromValue$$ = null === $value$jscomp$217$$ ? null : Number($value$jscomp$217$$);
      break;
    case Object:
    case Array:
      try {
        $fromValue$$ = JSON.parse($value$jscomp$217$$);
      } catch ($e$jscomp$28$$) {
        $fromValue$$ = null;
      }
  }
  return $fromValue$$;
}};
function $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$notEqual$$($value$jscomp$218$$, $old$$) {
  return !$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_is$$($value$jscomp$218$$, $old$$);
}
var $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_defaultPropertyDeclaration$$ = {$attribute$:!0, type:String, $converter$:$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$defaultConverter$$, $reflect$:!1, $hasChanged$:$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$notEqual$$}, $JSCompiler_inline_result$jscomp$159$$;
null == Symbol.metadata && (Symbol.metadata = Symbol("metadata"));
$JSCompiler_inline_result$jscomp$159$$ = Symbol.metadata;
var $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$litPropertyMetadata$$ = new WeakMap();
function $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$() {
  var $$jscomp$super$this$1744250161$93$$ = $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_HTMLElement$$.call(this) || this;
  $$jscomp$super$this$1744250161$93$$.$__instanceProperties$ = void 0;
  $$jscomp$super$this$1744250161$93$$.$isUpdatePending$ = !1;
  $$jscomp$super$this$1744250161$93$$.$hasUpdated$ = !1;
  $$jscomp$super$this$1744250161$93$$.$__reflectingProperty$ = null;
  $$jscomp$super$this$1744250161$93$$.$__initialize$();
  return $$jscomp$super$this$1744250161$93$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_HTMLElement$$);
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$addInitializer$ = function($initializer$$) {
  this.$__prepare$();
  var $$jscomp$nullish$tmp28$$;
  (null != ($$jscomp$nullish$tmp28$$ = this.$_initializers$) ? $$jscomp$nullish$tmp28$$ : this.$_initializers$ = []).push($initializer$$);
};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$createProperty$ = function($name$jscomp$113$$, $descriptor$jscomp$3_options$jscomp$130$$) {
  $descriptor$jscomp$3_options$jscomp$130$$ = void 0 === $descriptor$jscomp$3_options$jscomp$130$$ ? $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_defaultPropertyDeclaration$$ : $descriptor$jscomp$3_options$jscomp$130$$;
  $descriptor$jscomp$3_options$jscomp$130$$.state && ($descriptor$jscomp$3_options$jscomp$130$$.$attribute$ = !1);
  this.$__prepare$();
  this.$elementProperties$.set($name$jscomp$113$$, $descriptor$jscomp$3_options$jscomp$130$$);
  $descriptor$jscomp$3_options$jscomp$130$$.$noAccessor$ || ($descriptor$jscomp$3_options$jscomp$130$$ = this.$getPropertyDescriptor$($name$jscomp$113$$, Symbol(), $descriptor$jscomp$3_options$jscomp$130$$), void 0 !== $descriptor$jscomp$3_options$jscomp$130$$ && $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_defineProperty$$(this.prototype, $name$jscomp$113$$, $descriptor$jscomp$3_options$jscomp$130$$));
};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$getPropertyDescriptor$ = function($name$jscomp$114$$, $key$jscomp$102$$, $options$jscomp$131$$) {
  var $$jscomp$nullish$tmp29$$, $$jscomp$destructuring$var20$$ = null != ($$jscomp$nullish$tmp29$$ = $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_getOwnPropertyDescriptor$$(this.prototype, $name$jscomp$114$$)) ? $$jscomp$nullish$tmp29$$ : {get:function() {
    return this[$key$jscomp$102$$];
  }, set:function($v$jscomp$18$$) {
    this[$key$jscomp$102$$] = $v$jscomp$18$$;
  }}, $get$$ = $$jscomp$destructuring$var20$$.get, $set$jscomp$2$$ = $$jscomp$destructuring$var20$$.set;
  return {get:function() {
    return null == $get$$ ? void 0 : $get$$.call(this);
  }, set:function($value$jscomp$219$$) {
    var $oldValue$jscomp$2$$ = null == $get$$ ? void 0 : $get$$.call(this);
    $set$jscomp$2$$.call(this, $value$jscomp$219$$);
    $JSCompiler_StaticMethods_requestUpdate$$(this, $name$jscomp$114$$, $oldValue$jscomp$2$$, $options$jscomp$131$$);
  }, configurable:!0, enumerable:!0};
};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$getPropertyOptions$ = function($name$jscomp$115$$) {
  var $$jscomp$nullish$tmp31$$;
  return null != ($$jscomp$nullish$tmp31$$ = this.$elementProperties$.get($name$jscomp$115$$)) ? $$jscomp$nullish$tmp31$$ : $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_defaultPropertyDeclaration$$;
};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$__prepare$ = function() {
  if (!this.hasOwnProperty("$elementProperties$")) {
    var $superCtor$$ = $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_getPrototypeOf$$(this);
    $superCtor$$.$finalize$();
    void 0 !== $superCtor$$.$_initializers$ && (this.$_initializers$ = [].concat($$jscomp$arrayFromIterable$$($superCtor$$.$_initializers$)));
    this.$elementProperties$ = new Map($superCtor$$.$elementProperties$);
  }
};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$finalize$ = function() {
  $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_oneTimeWork$$();
  if (!this.hasOwnProperty("$finalized$")) {
    this.$finalized$ = !0;
    this.$__prepare$();
    if (this.hasOwnProperty("properties")) {
      var $$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$ = this.properties, $$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = [].concat($$jscomp$arrayFromIterable$$($module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_getOwnPropertyNames$$($$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$)), 
      $$jscomp$arrayFromIterable$$($module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_getOwnPropertySymbols$$($$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$)));
      $$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = $$jscomp$makeIterator$$($$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$);
      for (var $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$ = $$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$.next(); !$$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$.done; $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$ = 
      $$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$.next()) {
        $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$ = $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$.value, this.$createProperty$($$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$, 
        $$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$[$$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$]);
      }
    }
    $$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$ = this[$JSCompiler_inline_result$jscomp$159$$];
    if (null !== $$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$ && ($$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$litPropertyMetadata$$.get($$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$), void 0 !== $$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$)) {
      for ($$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$ = $$jscomp$makeIterator$$($$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$), $$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = $$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$.next(); !$$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$.done; $$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = 
      $$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$.next()) {
        $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$ = $$jscomp$makeIterator$$($$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$.value), $$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = 
        $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$.next().value, $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$ = $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$.next().value, 
        this.$elementProperties$.set($$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$, $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$);
      }
    }
    this.$__attributeToPropertyMap$ = new Map();
    $$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$ = $$jscomp$makeIterator$$(this.$elementProperties$);
    for ($$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = $$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$.next(); !$$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$.done; $$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = 
    $$jscomp$iter$98_$jscomp$iter$99_metadata_properties$jscomp$6_props$jscomp$2$$.next()) {
      $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$ = $$jscomp$makeIterator$$($$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$.value), $$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = 
      $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$.next().value, $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$ = $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$.next().value, 
      $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$ = this.$__attributeNameForProperty$($$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$, $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$), 
      void 0 !== $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$ && this.$__attributeToPropertyMap$.set($$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$7_attr_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$7$$, $$jscomp$iter$97_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$9_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$);
    }
    this.$elementStyles$ = this.$finalizeStyles$(this.$styles$);
  }
};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$finalizeStyles$ = function($$jscomp$iter$100_set$jscomp$3_styles$jscomp$3$$) {
  var $elementStyles$$ = [];
  if (Array.isArray($$jscomp$iter$100_set$jscomp$3_styles$jscomp$3$$)) {
    $$jscomp$iter$100_set$jscomp$3_styles$jscomp$3$$ = new Set($$jscomp$iter$100_set$jscomp$3_styles$jscomp$3$$.flat(Infinity).reverse());
    $$jscomp$iter$100_set$jscomp$3_styles$jscomp$3$$ = $$jscomp$makeIterator$$($$jscomp$iter$100_set$jscomp$3_styles$jscomp$3$$);
    for (var $$jscomp$key$1744250161$97$s$jscomp$24$$ = $$jscomp$iter$100_set$jscomp$3_styles$jscomp$3$$.next(); !$$jscomp$key$1744250161$97$s$jscomp$24$$.done; $$jscomp$key$1744250161$97$s$jscomp$24$$ = $$jscomp$iter$100_set$jscomp$3_styles$jscomp$3$$.next()) {
      $elementStyles$$.unshift($module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$getCompatibleStyle$$($$jscomp$key$1744250161$97$s$jscomp$24$$.value));
    }
  } else {
    void 0 !== $$jscomp$iter$100_set$jscomp$3_styles$jscomp$3$$ && $elementStyles$$.push($module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$getCompatibleStyle$$($$jscomp$iter$100_set$jscomp$3_styles$jscomp$3$$));
  }
  return $elementStyles$$;
};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$__attributeNameForProperty$ = function($name$jscomp$116$$, $attribute$jscomp$5_options$jscomp$134$$) {
  $attribute$jscomp$5_options$jscomp$134$$ = $attribute$jscomp$5_options$jscomp$134$$.$attribute$;
  return !1 === $attribute$jscomp$5_options$jscomp$134$$ ? void 0 : "string" === typeof $attribute$jscomp$5_options$jscomp$134$$ ? $attribute$jscomp$5_options$jscomp$134$$ : "string" === typeof $name$jscomp$116$$ ? $name$jscomp$116$$.toLowerCase() : void 0;
};
$JSCompiler_prototypeAlias$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.prototype;
$JSCompiler_prototypeAlias$$.$__initialize$ = function() {
  var $$jscomp$this$1744250161$64$$ = this;
  this.$__updatePromise$ = new Promise(function($res$jscomp$7$$) {
    return $$jscomp$this$1744250161$64$$.$enableUpdating$ = $res$jscomp$7$$;
  });
  this.$_$changedProperties$ = new Map();
  this.$__saveInstanceProperties$();
  $JSCompiler_StaticMethods_requestUpdate$$(this);
  var $$jscomp$optchain$tmp1744250161$12$$;
  null == ($$jscomp$optchain$tmp1744250161$12$$ = this.constructor.$_initializers$) || $$jscomp$optchain$tmp1744250161$12$$.forEach(function($i$jscomp$113$$) {
    return $i$jscomp$113$$($$jscomp$this$1744250161$64$$);
  });
};
function $JSCompiler_StaticMethods_addController$$($JSCompiler_StaticMethods_addController$self$$, $controller$jscomp$4$$) {
  var $$jscomp$nullish$tmp32$$;
  (null != ($$jscomp$nullish$tmp32$$ = $JSCompiler_StaticMethods_addController$self$$.$__controllers$) ? $$jscomp$nullish$tmp32$$ : $JSCompiler_StaticMethods_addController$self$$.$__controllers$ = new Set()).add($controller$jscomp$4$$);
  if (void 0 !== $JSCompiler_StaticMethods_addController$self$$.$renderRoot$ && $JSCompiler_StaticMethods_addController$self$$.isConnected) {
    var $$jscomp$optchain$tmp1744250161$14$$;
    null == ($$jscomp$optchain$tmp1744250161$14$$ = $controller$jscomp$4$$.$hostConnected$) || $$jscomp$optchain$tmp1744250161$14$$.call($controller$jscomp$4$$);
  }
}
$JSCompiler_prototypeAlias$$.$__saveInstanceProperties$ = function() {
  for (var $instanceProperties$$ = new Map(), $$jscomp$iter$101$$ = $$jscomp$makeIterator$$(this.constructor.$elementProperties$.keys()), $$jscomp$key$1744250161$98$p$jscomp$10_p$jscomp$10$$ = $$jscomp$iter$101$$.next(); !$$jscomp$key$1744250161$98$p$jscomp$10_p$jscomp$10$$.done; $$jscomp$key$1744250161$98$p$jscomp$10_p$jscomp$10$$ = $$jscomp$iter$101$$.next()) {
    $$jscomp$key$1744250161$98$p$jscomp$10_p$jscomp$10$$ = $$jscomp$key$1744250161$98$p$jscomp$10_p$jscomp$10$$.value, this.hasOwnProperty($$jscomp$key$1744250161$98$p$jscomp$10_p$jscomp$10$$) && ($instanceProperties$$.set($$jscomp$key$1744250161$98$p$jscomp$10_p$jscomp$10$$, this[$$jscomp$key$1744250161$98$p$jscomp$10_p$jscomp$10$$]), delete this[$$jscomp$key$1744250161$98$p$jscomp$10_p$jscomp$10$$]);
  }
  0 < $instanceProperties$$.size && (this.$__instanceProperties$ = $instanceProperties$$);
};
$JSCompiler_prototypeAlias$$.$createRenderRoot$ = function() {
  var $$jscomp$nullish$tmp33$$, $renderRoot$jscomp$1$$ = null != ($$jscomp$nullish$tmp33$$ = this.shadowRoot) ? $$jscomp$nullish$tmp33$$ : this.attachShadow(this.constructor.$shadowRootOptions$);
  $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$adoptStyles$$($renderRoot$jscomp$1$$, this.constructor.$elementStyles$);
  return $renderRoot$jscomp$1$$;
};
$JSCompiler_prototypeAlias$$.connectedCallback = function() {
  null != this.$renderRoot$ || (this.$renderRoot$ = this.$createRenderRoot$());
  this.$enableUpdating$(!0);
  var $$jscomp$optchain$tmp1744250161$18$$;
  null == ($$jscomp$optchain$tmp1744250161$18$$ = this.$__controllers$) || $$jscomp$optchain$tmp1744250161$18$$.forEach(function($c$jscomp$5$$) {
    var $$jscomp$optchain$tmp1744250161$17$$;
    return null == ($$jscomp$optchain$tmp1744250161$17$$ = $c$jscomp$5$$.$hostConnected$) ? void 0 : $$jscomp$optchain$tmp1744250161$17$$.call($c$jscomp$5$$);
  });
};
$JSCompiler_prototypeAlias$$.$enableUpdating$ = function() {
};
$JSCompiler_prototypeAlias$$.disconnectedCallback = function() {
  var $$jscomp$optchain$tmp1744250161$21$$;
  null == ($$jscomp$optchain$tmp1744250161$21$$ = this.$__controllers$) || $$jscomp$optchain$tmp1744250161$21$$.forEach(function($c$jscomp$6$$) {
    var $$jscomp$optchain$tmp1744250161$20$$;
    return null == ($$jscomp$optchain$tmp1744250161$20$$ = $c$jscomp$6$$.$hostDisconnected$) ? void 0 : $$jscomp$optchain$tmp1744250161$20$$.call($c$jscomp$6$$);
  });
};
$JSCompiler_prototypeAlias$$.attributeChangedCallback = function($name$jscomp$117$$, $_old$$, $value$jscomp$220$$) {
  this.$_$attributeToProperty$($name$jscomp$117$$, $value$jscomp$220$$);
};
$JSCompiler_prototypeAlias$$.$__propertyToAttribute$ = function($name$jscomp$118$$, $value$jscomp$221$$) {
  var $options$jscomp$135$$ = this.constructor.$elementProperties$.get($name$jscomp$118$$), $attr$jscomp$1$$ = this.constructor.$__attributeNameForProperty$($name$jscomp$118$$, $options$jscomp$135$$);
  if (void 0 !== $attr$jscomp$1$$ && !0 === $options$jscomp$135$$.$reflect$) {
    var $$jscomp$optchain$tmp1744250161$22$$, $attrValue$$ = (void 0 !== (null == ($$jscomp$optchain$tmp1744250161$22$$ = $options$jscomp$135$$.$converter$) ? void 0 : $$jscomp$optchain$tmp1744250161$22$$.$toAttribute$) ? $options$jscomp$135$$.$converter$ : $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$defaultConverter$$).$toAttribute$($value$jscomp$221$$, $options$jscomp$135$$.type);
    this.$__reflectingProperty$ = $name$jscomp$118$$;
    null == $attrValue$$ ? this.removeAttribute($attr$jscomp$1$$) : this.setAttribute($attr$jscomp$1$$, $attrValue$$);
    this.$__reflectingProperty$ = null;
  }
};
$JSCompiler_prototypeAlias$$.$_$attributeToProperty$ = function($name$jscomp$119_propName$$, $value$jscomp$222$$) {
  var $ctor$jscomp$2_options$jscomp$136$$ = this.constructor;
  $name$jscomp$119_propName$$ = $ctor$jscomp$2_options$jscomp$136$$.$__attributeToPropertyMap$.get($name$jscomp$119_propName$$);
  if (void 0 !== $name$jscomp$119_propName$$ && this.$__reflectingProperty$ !== $name$jscomp$119_propName$$) {
    $ctor$jscomp$2_options$jscomp$136$$ = $ctor$jscomp$2_options$jscomp$136$$.$getPropertyOptions$($name$jscomp$119_propName$$);
    var $$jscomp$optchain$tmp1744250161$23$$, $converter$jscomp$1$$ = "function" === typeof $ctor$jscomp$2_options$jscomp$136$$.$converter$ ? {$fromAttribute$:$ctor$jscomp$2_options$jscomp$136$$.$converter$} : void 0 !== (null == ($$jscomp$optchain$tmp1744250161$23$$ = $ctor$jscomp$2_options$jscomp$136$$.$converter$) ? void 0 : $$jscomp$optchain$tmp1744250161$23$$.$fromAttribute$) ? $ctor$jscomp$2_options$jscomp$136$$.$converter$ : $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$defaultConverter$$;
    this.$__reflectingProperty$ = $name$jscomp$119_propName$$;
    this[$name$jscomp$119_propName$$] = $converter$jscomp$1$$.$fromAttribute$($value$jscomp$222$$, $ctor$jscomp$2_options$jscomp$136$$.type);
    this.$__reflectingProperty$ = null;
  }
};
function $JSCompiler_StaticMethods_requestUpdate$$($JSCompiler_StaticMethods_requestUpdate$self$$, $name$jscomp$120$$, $oldValue$jscomp$3$$, $options$jscomp$137$$) {
  var $initial$$ = void 0 === $initial$$ ? !1 : $initial$$;
  if (void 0 !== $name$jscomp$120$$) {
    null != $options$jscomp$137$$ || ($options$jscomp$137$$ = $JSCompiler_StaticMethods_requestUpdate$self$$.constructor.$getPropertyOptions$($name$jscomp$120$$));
    var $$jscomp$nullish$tmp36$$;
    if ((null != ($$jscomp$nullish$tmp36$$ = $options$jscomp$137$$.$hasChanged$) ? $$jscomp$nullish$tmp36$$ : $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$notEqual$$)($initial$$ ? void 0 : $JSCompiler_StaticMethods_requestUpdate$self$$[$name$jscomp$120$$], $oldValue$jscomp$3$$)) {
      $JSCompiler_StaticMethods_requestUpdate$self$$.$_$changeProperty$($name$jscomp$120$$, $oldValue$jscomp$3$$, $options$jscomp$137$$);
    } else {
      return;
    }
  }
  !1 === $JSCompiler_StaticMethods_requestUpdate$self$$.$isUpdatePending$ && ($JSCompiler_StaticMethods_requestUpdate$self$$.$__updatePromise$ = $JSCompiler_StaticMethods_requestUpdate$self$$.$__enqueueUpdate$());
}
$JSCompiler_prototypeAlias$$.$_$changeProperty$ = function($name$jscomp$121$$, $oldValue$jscomp$4$$, $options$jscomp$138$$) {
  this.$_$changedProperties$.has($name$jscomp$121$$) || this.$_$changedProperties$.set($name$jscomp$121$$, $oldValue$jscomp$4$$);
  if (!0 === $options$jscomp$138$$.$reflect$ && this.$__reflectingProperty$ !== $name$jscomp$121$$) {
    var $$jscomp$nullish$tmp37$$;
    (null != ($$jscomp$nullish$tmp37$$ = this.$__reflectingProperties$) ? $$jscomp$nullish$tmp37$$ : this.$__reflectingProperties$ = new Set()).add($name$jscomp$121$$);
  }
};
$JSCompiler_prototypeAlias$$.$__enqueueUpdate$ = function() {
  var $$jscomp$async$this$$ = this, $e$jscomp$29$$, $result$jscomp$31$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$1744250161$101$$) {
    switch($$jscomp$generator$context$1744250161$101$$.$g$) {
      case 1:
        return $$jscomp$async$this$$.$isUpdatePending$ = !0, $$jscomp$generator$context$1744250161$101$$.$o$ = 2, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1744250161$101$$, $$jscomp$async$this$$.$__updatePromise$, 4);
      case 4:
        $$jscomp$generator$context$1744250161$101$$.$g$ = 3;
        $$jscomp$generator$context$1744250161$101$$.$o$ = 0;
        break;
      case 2:
        $$jscomp$generator$context$1744250161$101$$.$o$ = 0;
        var $exception$jscomp$inline_281$$ = $$jscomp$generator$context$1744250161$101$$.$l$.$exception$;
        $$jscomp$generator$context$1744250161$101$$.$l$ = null;
        $e$jscomp$29$$ = $exception$jscomp$inline_281$$;
        $$jscomp$async$this$$.$squelchUpdateErrorsDuringLit2Migration$ || Promise.reject($e$jscomp$29$$);
      case 3:
        $result$jscomp$31$$ = $JSCompiler_StaticMethods_performUpdate$$($$jscomp$async$this$$);
        if (null == $result$jscomp$31$$) {
          $$jscomp$generator$context$1744250161$101$$.$g$ = 5;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1744250161$101$$, $result$jscomp$31$$, 5);
      case 5:
        return $$jscomp$generator$context$1744250161$101$$.return(!$$jscomp$async$this$$.$isUpdatePending$);
    }
  });
};
function $JSCompiler_StaticMethods_performUpdate$$($JSCompiler_StaticMethods_performUpdate$self$$) {
  if ($JSCompiler_StaticMethods_performUpdate$self$$.$isUpdatePending$) {
    if (!$JSCompiler_StaticMethods_performUpdate$self$$.$hasUpdated$) {
      null != $JSCompiler_StaticMethods_performUpdate$self$$.$renderRoot$ || ($JSCompiler_StaticMethods_performUpdate$self$$.$renderRoot$ = $JSCompiler_StaticMethods_performUpdate$self$$.$createRenderRoot$());
      if ($JSCompiler_StaticMethods_performUpdate$self$$.$__instanceProperties$) {
        for (var $$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$ = $$jscomp$makeIterator$$($JSCompiler_StaticMethods_performUpdate$self$$.$__instanceProperties$), $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = $$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$.next(); !$$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$.done; $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = 
        $$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$.next()) {
          var $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$139_options__tsickle_destructured_8_value__tsickle_destructured_6$$ = $$jscomp$makeIterator$$($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$.value);
          $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$139_options__tsickle_destructured_8_value__tsickle_destructured_6$$.next().value;
          $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$139_options__tsickle_destructured_8_value__tsickle_destructured_6$$ = $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$139_options__tsickle_destructured_8_value__tsickle_destructured_6$$.next().value;
          $JSCompiler_StaticMethods_performUpdate$self$$[$$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$] = $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$139_options__tsickle_destructured_8_value__tsickle_destructured_6$$;
        }
        $JSCompiler_StaticMethods_performUpdate$self$$.$__instanceProperties$ = void 0;
      }
      $$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$ = $JSCompiler_StaticMethods_performUpdate$self$$.constructor.$elementProperties$;
      if (0 < $$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$.size) {
        for ($$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$ = $$jscomp$makeIterator$$($$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$), $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = $$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$.next(); !$$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$.done; $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = 
        $$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$.next()) {
          $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$139_options__tsickle_destructured_8_value__tsickle_destructured_6$$ = $$jscomp$makeIterator$$($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$.value), $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = 
          $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$139_options__tsickle_destructured_8_value__tsickle_destructured_6$$.next().value, $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$139_options__tsickle_destructured_8_value__tsickle_destructured_6$$ = $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$139_options__tsickle_destructured_8_value__tsickle_destructured_6$$.next().value, !0 !== $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$139_options__tsickle_destructured_8_value__tsickle_destructured_6$$.$wrapped$ || 
          $JSCompiler_StaticMethods_performUpdate$self$$.$_$changedProperties$.has($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$) || void 0 === $JSCompiler_StaticMethods_performUpdate$self$$[$$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$] || 
          $JSCompiler_StaticMethods_performUpdate$self$$.$_$changeProperty$($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$, $JSCompiler_StaticMethods_performUpdate$self$$[$$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$], 
          $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$139_options__tsickle_destructured_8_value__tsickle_destructured_6$$);
        }
      }
    }
    $$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$ = !1;
    $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = $JSCompiler_StaticMethods_performUpdate$self$$.$_$changedProperties$;
    try {
      $$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$ = !0;
      $JSCompiler_StaticMethods_performUpdate$self$$.$willUpdate$($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$);
      var $$jscomp$optchain$tmp1744250161$28$$;
      null == ($$jscomp$optchain$tmp1744250161$28$$ = $JSCompiler_StaticMethods_performUpdate$self$$.$__controllers$) || $$jscomp$optchain$tmp1744250161$28$$.forEach(function($c$jscomp$7$$) {
        var $$jscomp$optchain$tmp1744250161$27$$;
        return null == ($$jscomp$optchain$tmp1744250161$27$$ = $c$jscomp$7$$.$hostUpdate$) ? void 0 : $$jscomp$optchain$tmp1744250161$27$$.call($c$jscomp$7$$);
      });
      $JSCompiler_StaticMethods_performUpdate$self$$.update($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$);
    } catch ($e$jscomp$30$$) {
      throw $$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$ = !1, $JSCompiler_StaticMethods_performUpdate$self$$.$__markUpdated$(), $e$jscomp$30$$;
    }
    $$jscomp$iter$102_$jscomp$iter$103_elementProperties$jscomp$1_shouldUpdate$$ && $JSCompiler_StaticMethods_performUpdate$self$$.$_$didUpdate$($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$13_p__tsickle_destructured_5_p__tsickle_destructured_7$$);
  }
}
$JSCompiler_prototypeAlias$$.$willUpdate$ = function() {
};
$JSCompiler_prototypeAlias$$.$_$didUpdate$ = function() {
  var $$jscomp$optchain$tmp1744250161$31$$;
  null == ($$jscomp$optchain$tmp1744250161$31$$ = this.$__controllers$) || $$jscomp$optchain$tmp1744250161$31$$.forEach(function($c$jscomp$8$$) {
    var $$jscomp$optchain$tmp1744250161$30$$;
    return null == ($$jscomp$optchain$tmp1744250161$30$$ = $c$jscomp$8$$.$hostUpdated$) ? void 0 : $$jscomp$optchain$tmp1744250161$30$$.call($c$jscomp$8$$);
  });
  this.$hasUpdated$ || (this.$hasUpdated$ = !0, this.$firstUpdated$());
};
$JSCompiler_prototypeAlias$$.$__markUpdated$ = function() {
  this.$_$changedProperties$ = new Map();
  this.$isUpdatePending$ = !1;
};
$JSCompiler_prototypeAlias$$.update = function() {
  var $$jscomp$this$1744250161$87$$ = this;
  this.$__reflectingProperties$ && (this.$__reflectingProperties$ = this.$__reflectingProperties$.forEach(function($p$jscomp$14$$) {
    return $$jscomp$this$1744250161$87$$.$__propertyToAttribute$($p$jscomp$14$$, $$jscomp$this$1744250161$87$$[$p$jscomp$14$$]);
  }));
  this.$__markUpdated$();
};
$JSCompiler_prototypeAlias$$.$firstUpdated$ = function() {
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.prototype, {$updateComplete$:{configurable:!0, enumerable:!0, get:function() {
  return this.$__updatePromise$;
}}});
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$, {observedAttributes:{configurable:!0, enumerable:!0, get:function() {
  this.$finalize$();
  return this.$__attributeToPropertyMap$ && [].concat($$jscomp$arrayFromIterable$$(this.$__attributeToPropertyMap$.keys()));
}}});
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$elementStyles$ = [];
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$shadowRootOptions$ = {mode:"open"};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$elementProperties$ = new Map();
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$finalized$ = new Map();
null == $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_polyfillSupport$$ || $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_polyfillSupport$$({ReactiveElement:$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$});
function $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_oneTimeWork$$() {
  var $$jscomp$nullish$tmp39$$;
  (null != ($$jscomp$nullish$tmp39$$ = $goog$global$$.reactiveElementVersions) ? $$jscomp$nullish$tmp39$$ : $goog$global$$.reactiveElementVersions = []).push("2.0.2");
  $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_oneTimeWork$$ = function() {
  };
}
;function $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$() {
  var $$jscomp$super$this$m1165170663$18$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.apply(this, arguments) || this;
  $$jscomp$super$this$m1165170663$18$$.$renderOptions$ = {host:$$jscomp$super$this$m1165170663$18$$};
  $$jscomp$super$this$m1165170663$18$$.$i$ = void 0;
  return $$jscomp$super$this$m1165170663$18$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$, $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$);
$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$shadowRootOptions$;
$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$elementStyles$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$elementStyles$;
$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$__attributeNameForProperty$;
$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$finalizeStyles$;
$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__prepare$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$__prepare$;
$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$getPropertyOptions$;
$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$getPropertyDescriptor$;
$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$createProperty$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$createProperty$;
$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$addInitializer$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$addInitializer$;
$JSCompiler_prototypeAlias$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.prototype;
$JSCompiler_prototypeAlias$$.$createRenderRoot$ = function() {
  var $renderRoot$jscomp$2$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.prototype.$createRenderRoot$.call(this), $$jscomp$logical$assign$tmpm1165170663$1$$;
  null != ($$jscomp$logical$assign$tmpm1165170663$1$$ = this.$renderOptions$).$renderBefore$ || ($$jscomp$logical$assign$tmpm1165170663$1$$.$renderBefore$ = $renderRoot$jscomp$2$$.firstChild);
  return $renderRoot$jscomp$2$$;
};
$JSCompiler_prototypeAlias$$.update = function($changedProperties$jscomp$4$$) {
  var $value$jscomp$224$$ = this.$render$();
  this.$hasUpdated$ || (this.$renderOptions$.isConnected = this.isConnected);
  $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.prototype.update.call(this, $changedProperties$jscomp$4$$);
  this.$i$ = $JSCompiler_inline_result$jscomp$156$$($value$jscomp$224$$, this.$renderRoot$, this.$renderOptions$);
};
$JSCompiler_prototypeAlias$$.connectedCallback = function() {
  $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.prototype.connectedCallback.call(this);
  var $$jscomp$optchain$tmpm1165170663$3$$;
  null == ($$jscomp$optchain$tmpm1165170663$3$$ = this.$i$) || $JSCompiler_StaticMethods_setConnected$$($$jscomp$optchain$tmpm1165170663$3$$, !0);
};
$JSCompiler_prototypeAlias$$.disconnectedCallback = function() {
  $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.prototype.disconnectedCallback.call(this);
  var $$jscomp$optchain$tmpm1165170663$4$$;
  null == ($$jscomp$optchain$tmpm1165170663$4$$ = this.$i$) || $JSCompiler_StaticMethods_setConnected$$($$jscomp$optchain$tmpm1165170663$4$$, !1);
};
$JSCompiler_prototypeAlias$$.$render$ = function() {
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$;
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalize$ = function() {
  $module$contents$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement_oneTimeWork$$();
  return $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$finalize$.call(this);
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$._$litElement$ = !0;
$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalized$ = !0;
var $$jscomp$optchain$tmpm1165170663$6$$;
null == ($$jscomp$optchain$tmpm1165170663$6$$ = window.litElementPolyfillSupport) || $$jscomp$optchain$tmpm1165170663$6$$({LitElement:$module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$});
function $module$contents$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement_oneTimeWork$$() {
  var $$jscomp$logical$assign$tmpm1165170663$2$$, $$jscomp$nullish$tmp42$$;
  (null != ($$jscomp$nullish$tmp42$$ = ($$jscomp$logical$assign$tmpm1165170663$2$$ = window).litElementVersions) ? $$jscomp$nullish$tmp42$$ : $$jscomp$logical$assign$tmpm1165170663$2$$.litElementVersions = []).push("4.0.2");
  $module$contents$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement_oneTimeWork$$ = function() {
  };
}
;var $module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$2ecss$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$([":host{-webkit-box-align:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-moz-box-orient:horizontal;-moz-box-direction:normal;-webkit-box-pack:start;-moz-box-pack:start;-ms-flex-pack:start;-webkit-align-items:stretch;align-items:stretch;color:#f5f5f5;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;font-family:Google Sans,Arial,Helvetica,sans-serif;font-size:16px;-webkit-justify-content:flex-start;justify-content:flex-start;margin:20px;text-shadow:0 2px 2px rgba(0,0,0,.5)}.col1,.col2{-webkit-box-flex:1;-moz-box-flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-moz-box-orient:vertical;-moz-box-direction:normal;-webkit-box-pack:stretch;-moz-box-pack:stretch;-ms-flex-pack:stretch;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-justify-content:stretch;justify-content:stretch}.col1{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.col2{-webkit-box-align:start;-moz-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start}.detail-cell{-webkit-box-align:baseline;-moz-box-align:baseline;-ms-flex-align:baseline;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-moz-box-orient:horizontal;-moz-box-direction:normal;-webkit-box-pack:start;-moz-box-pack:start;-ms-flex-pack:start;-webkit-align-items:baseline;align-items:baseline;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-justify-content:flex-start;justify-content:flex-start}.refresh-cell{margin-right:20px;margin-top:8px}md-icon{color:#fff}.detail-cell{margin-top:10px}.title{color:#fff;font-size:24px;font-weight:700}.detail-link{color:inherit;font-size:inherit;text-decoration:none}.detail-link:hover{text-decoration:underline}"]);
var $goog$string$repeat$$ = String.prototype.repeat ? function($string$jscomp$8$$, $length$jscomp$19$$) {
  return $string$jscomp$8$$.repeat($length$jscomp$19$$);
} : function($string$jscomp$9$$, $length$jscomp$20$$) {
  return Array($length$jscomp$20$$ + 1).join($string$jscomp$9$$);
};
function $goog$string$padNumber$$($num$jscomp$6_s$jscomp$35$$, $length$jscomp$21$$) {
  if (!Number.isFinite($num$jscomp$6_s$jscomp$35$$)) {
    return String($num$jscomp$6_s$jscomp$35$$);
  }
  $num$jscomp$6_s$jscomp$35$$ = String($num$jscomp$6_s$jscomp$35$$);
  var $index$jscomp$115$$ = $num$jscomp$6_s$jscomp$35$$.indexOf(".");
  -1 === $index$jscomp$115$$ && ($index$jscomp$115$$ = $num$jscomp$6_s$jscomp$35$$.length);
  var $sign$$ = "-" === $num$jscomp$6_s$jscomp$35$$[0] ? "-" : "";
  $sign$$ && ($num$jscomp$6_s$jscomp$35$$ = $num$jscomp$6_s$jscomp$35$$.substring(1));
  return $sign$$ + $goog$string$repeat$$("0", Math.max(0, $length$jscomp$21$$ - $index$jscomp$115$$)) + $num$jscomp$6_s$jscomp$35$$;
}
;function $goog$date$Date$$() {
  this.$g$ = new Date(Date.now());
  var $expectedDate$$ = this.$g$.getDate();
  this.$g$.setHours(0);
  this.$g$.setMinutes(0);
  this.$g$.setSeconds(0);
  this.$g$.setMilliseconds(0);
  $JSCompiler_StaticMethods_maybeFixDst_$$(this, $expectedDate$$);
}
$JSCompiler_prototypeAlias$$ = $goog$date$Date$$.prototype;
$JSCompiler_prototypeAlias$$.getFullYear = function() {
  return this.$g$.getFullYear();
};
$JSCompiler_prototypeAlias$$.getMonth = function() {
  return this.$g$.getMonth();
};
$JSCompiler_prototypeAlias$$.getDate = function() {
  return this.$g$.getDate();
};
$JSCompiler_prototypeAlias$$.set = function($date$jscomp$12$$) {
  this.$g$ = new Date($date$jscomp$12$$.getFullYear(), $date$jscomp$12$$.getMonth(), $date$jscomp$12$$.getDate());
};
$JSCompiler_prototypeAlias$$.add = function($interval$jscomp$3_result$jscomp$35$$) {
  if ($interval$jscomp$3_result$jscomp$35$$.$j$ || $interval$jscomp$3_result$jscomp$35$$.$i$) {
    var $month$jscomp$9_yearAdjustment$$ = this.getMonth() + $interval$jscomp$3_result$jscomp$35$$.$i$ + 12 * $interval$jscomp$3_result$jscomp$35$$.$j$, $initialYear_year$jscomp$14$$ = this.getFullYear() + Math.floor($month$jscomp$9_yearAdjustment$$ / 12);
    $month$jscomp$9_yearAdjustment$$ %= 12;
    0 > $month$jscomp$9_yearAdjustment$$ && ($month$jscomp$9_yearAdjustment$$ += 12);
    a: {
      switch($month$jscomp$9_yearAdjustment$$) {
        case 1:
          var $JSCompiler_inline_result$jscomp$160_date$jscomp$15$$ = 0 != $initialYear_year$jscomp$14$$ % 4 || 0 == $initialYear_year$jscomp$14$$ % 100 && 0 != $initialYear_year$jscomp$14$$ % 400 ? 28 : 29;
          break a;
        case 5:
        case 8:
        case 10:
        case 3:
          $JSCompiler_inline_result$jscomp$160_date$jscomp$15$$ = 30;
          break a;
      }
      $JSCompiler_inline_result$jscomp$160_date$jscomp$15$$ = 31;
    }
    $JSCompiler_inline_result$jscomp$160_date$jscomp$15$$ = Math.min($JSCompiler_inline_result$jscomp$160_date$jscomp$15$$, this.getDate());
    this.$g$.setDate(1);
    this.$g$.setFullYear($initialYear_year$jscomp$14$$);
    this.$g$.setMonth($month$jscomp$9_yearAdjustment$$);
    this.$g$.setDate($JSCompiler_inline_result$jscomp$160_date$jscomp$15$$);
  }
  $interval$jscomp$3_result$jscomp$35$$.$g$ && ($initialYear_year$jscomp$14$$ = this.getFullYear(), $month$jscomp$9_yearAdjustment$$ = 0 <= $initialYear_year$jscomp$14$$ && 99 >= $initialYear_year$jscomp$14$$ ? -1900 : 0, $interval$jscomp$3_result$jscomp$35$$ = new Date((new Date($initialYear_year$jscomp$14$$, this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * $interval$jscomp$3_result$jscomp$35$$.$g$), this.$g$.setDate(1), this.$g$.setFullYear($interval$jscomp$3_result$jscomp$35$$.getFullYear() + 
  $month$jscomp$9_yearAdjustment$$), this.$g$.setMonth($interval$jscomp$3_result$jscomp$35$$.getMonth()), this.$g$.setDate($interval$jscomp$3_result$jscomp$35$$.getDate()), $JSCompiler_StaticMethods_maybeFixDst_$$(this, $interval$jscomp$3_result$jscomp$35$$.getDate()));
};
function $JSCompiler_StaticMethods_JSC$3723_toIsoString$$($JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$, $JSCompiler_temp_const$jscomp$162_opt_verbose$jscomp$1$$, $h$jscomp$inline_323_opt_tz$$) {
  var $m$jscomp$inline_324_n$jscomp$inline_322_year$jscomp$inline_316$$ = $JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$.getFullYear(), $sign$jscomp$inline_317$$ = 0 > $m$jscomp$inline_324_n$jscomp$inline_322_year$jscomp$inline_316$$ ? "-" : 1E4 <= $m$jscomp$inline_324_n$jscomp$inline_322_year$jscomp$inline_316$$ ? "+" : "";
  $JSCompiler_temp_const$jscomp$162_opt_verbose$jscomp$1$$ = [$sign$jscomp$inline_317$$ + $goog$string$padNumber$$(Math.abs($m$jscomp$inline_324_n$jscomp$inline_322_year$jscomp$inline_316$$), $sign$jscomp$inline_317$$ ? 6 : 4), $goog$string$padNumber$$($JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$.getMonth() + 1, 2), $goog$string$padNumber$$($JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$.getDate(), 
  2)].join($JSCompiler_temp_const$jscomp$162_opt_verbose$jscomp$1$$ ? "-" : "");
  $h$jscomp$inline_323_opt_tz$$ ? ($JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$ = $JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$.$g$.getTimezoneOffset(), 0 == $JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$ ? $JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$ = 
  "Z" : ($m$jscomp$inline_324_n$jscomp$inline_322_year$jscomp$inline_316$$ = Math.abs($JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$) / 60, $h$jscomp$inline_323_opt_tz$$ = Math.floor($m$jscomp$inline_324_n$jscomp$inline_322_year$jscomp$inline_316$$), $m$jscomp$inline_324_n$jscomp$inline_322_year$jscomp$inline_316$$ = 60 * ($m$jscomp$inline_324_n$jscomp$inline_322_year$jscomp$inline_316$$ - $h$jscomp$inline_323_opt_tz$$), 
  $JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$ = (0 < $JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$ ? "-" : "+") + $goog$string$padNumber$$($h$jscomp$inline_323_opt_tz$$, 2) + ":" + $goog$string$padNumber$$($m$jscomp$inline_324_n$jscomp$inline_322_year$jscomp$inline_316$$, 2))) : $JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$ = 
  "";
  return $JSCompiler_temp_const$jscomp$162_opt_verbose$jscomp$1$$ + $JSCompiler_StaticMethods_JSC$3723_toIsoString$self_JSCompiler_temp$jscomp$163_offset$jscomp$inline_321_tz$jscomp$inline_320$$;
}
$JSCompiler_prototypeAlias$$.toString = function() {
  return $JSCompiler_StaticMethods_JSC$3723_toIsoString$$(this);
};
function $JSCompiler_StaticMethods_maybeFixDst_$$($JSCompiler_StaticMethods_maybeFixDst_$self$$, $expected$$) {
  $JSCompiler_StaticMethods_maybeFixDst_$self$$.getDate() != $expected$$ && $JSCompiler_StaticMethods_maybeFixDst_$self$$.$g$.setUTCHours($JSCompiler_StaticMethods_maybeFixDst_$self$$.$g$.getUTCHours() + ($JSCompiler_StaticMethods_maybeFixDst_$self$$.getDate() < $expected$$ ? 1 : -1));
}
$JSCompiler_prototypeAlias$$.valueOf = function() {
  return this.$g$.valueOf();
};
function $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_getUtmParams$$() {
  return "utm_source=chrome_extension&utm_medium=default_link&utm_campaign=chrome_extension_3";
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_getOrCreateClientId$$() {
  var $result$jscomp$36$$, $clientId$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m730393743$7$$) {
    if (1 == $$jscomp$generator$context$m730393743$7$$.$g$) {
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$7$$, chrome.storage.local.get("clientId"), 2);
    }
    if (3 != $$jscomp$generator$context$m730393743$7$$.$g$) {
      if ($clientId$$ = ($result$jscomp$36$$ = $$jscomp$generator$context$m730393743$7$$.$i$) ? $result$jscomp$36$$.clientId : void 0) {
        $$jscomp$generator$context$m730393743$7$$.$g$ = 3;
        return;
      }
      $clientId$$ = self.crypto.randomUUID();
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$7$$, chrome.storage.local.set({clientId:$clientId$$}), 3);
    }
    return $$jscomp$generator$context$m730393743$7$$.return($clientId$$);
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_sendGoogleAnalyticsEvent$$($eventName$$, $params$jscomp$4$$) {
  var $mode$jscomp$15$$ = void 0 === $mode$jscomp$15$$ ? "Production" : $mode$jscomp$15$$;
  var $JSCompiler_temp_const$jscomp$127$$, $JSCompiler_temp_const$jscomp$126$$, $body$jscomp$3$$, $postUrl$$, $postData$$, $response$jscomp$4$$, $validationResult$$;
  $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m730393743$8$$) {
    switch($$jscomp$generator$context$m730393743$8$$.$g$) {
      case 1:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$8$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_getOrCreateClientId$$(), 2);
      case 2:
        return $JSCompiler_temp_const$jscomp$127$$ = $$jscomp$generator$context$m730393743$8$$.$i$, $JSCompiler_temp_const$jscomp$126$$ = {value:chrome.runtime.getManifest().version}, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$8$$, chrome.i18n.getAcceptLanguages(), 3);
      case 3:
        return $body$jscomp$3$$ = {client_id:$JSCompiler_temp_const$jscomp$127$$, user_properties:{chrome_extension_version:$JSCompiler_temp_const$jscomp$126$$, preferred_user_languages:{value:$$jscomp$generator$context$m730393743$8$$.$i$.join(", ").substring(0, 100)}}, events:[{name:$eventName$$, params:Object.assign({}, {session_id:$JSCompiler_StaticMethods_JSC$3723_toIsoString$$(new $goog$date$Date$$(), !1, !1), engagement_time_msec:100}, $params$jscomp$4$$, "Production" !== $mode$jscomp$15$$ ? 
        {debug_mode:!0} : {})}]}, $postUrl$$ = ("Validate" === $mode$jscomp$15$$ ? "https://www.google-analytics.com/debug/mp/collect" : "https://www.google-analytics.com/mp/collect") + "?measurement_id=G-7822LS9WSS&api_secret=4Kqze13oQeysgtPTWX6YDA", $postData$$ = {method:"POST", headers:{Accept:"application/json"}, body:JSON.stringify($body$jscomp$3$$)}, "Production" !== $mode$jscomp$15$$ && console.info("POST GA4 event to " + $postUrl$$, $body$jscomp$3$$), $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$8$$, 
        fetch($postUrl$$, $postData$$), 4);
      case 4:
        $response$jscomp$4$$ = $$jscomp$generator$context$m730393743$8$$.$i$;
        $response$jscomp$4$$.ok || console.error("GA4 response error " + $response$jscomp$4$$.status);
        if ("Validate" !== $mode$jscomp$15$$) {
          $$jscomp$generator$context$m730393743$8$$.$g$ = 0;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$8$$, $response$jscomp$4$$.json(), 6);
      case 6:
        $validationResult$$ = $$jscomp$generator$context$m730393743$8$$.$i$, console.info("GA4 validation result", $validationResult$$), $$jscomp$generator$context$m730393743$8$$.$g$ = 0;
    }
  });
}
;function $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$($tagName$jscomp$20$$) {
  return function($classOrTarget$$, $context$jscomp$5$$) {
    void 0 !== $context$jscomp$5$$ ? $context$jscomp$5$$.$addInitializer$(function() {
      customElements.define($tagName$jscomp$20$$, $classOrTarget$$);
    }) : customElements.define($tagName$jscomp$20$$, $classOrTarget$$);
  };
}
;var $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_defaultPropertyDeclaration$$ = {$attribute$:!0, type:String, $converter$:$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$defaultConverter$$, $reflect$:!1, $hasChanged$:$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$notEqual$$};
function $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property$standardProperty$$($options$jscomp$153$$, $target$jscomp$116$$, $context$jscomp$6$$) {
  $options$jscomp$153$$ = void 0 === $options$jscomp$153$$ ? $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_defaultPropertyDeclaration$$ : $options$jscomp$153$$;
  var $kind$jscomp$6$$ = $context$jscomp$6$$.kind, $metadata$jscomp$1$$ = $context$jscomp$6$$.metadata, $properties$jscomp$7$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$litPropertyMetadata$$.get($metadata$jscomp$1$$);
  void 0 === $properties$jscomp$7$$ && $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$litPropertyMetadata$$.set($metadata$jscomp$1$$, $properties$jscomp$7$$ = new Map());
  $properties$jscomp$7$$.set($context$jscomp$6$$.name, $options$jscomp$153$$);
  if ("accessor" === $kind$jscomp$6$$) {
    var $name$jscomp$130$$ = $context$jscomp$6$$.name;
    return {set:function($v$jscomp$28$$) {
      var $oldValue$jscomp$5$$ = $target$jscomp$116$$.get.call(this);
      $target$jscomp$116$$.set.call(this, $v$jscomp$28$$);
      $JSCompiler_StaticMethods_requestUpdate$$(this, $name$jscomp$130$$, $oldValue$jscomp$5$$, $options$jscomp$153$$);
    }, $init$:function($v$jscomp$29$$) {
      void 0 !== $v$jscomp$29$$ && this.$_$changeProperty$($name$jscomp$130$$, void 0, $options$jscomp$153$$);
      return $v$jscomp$29$$;
    }};
  }
  if ("setter" === $kind$jscomp$6$$) {
    var $name$jscomp$131$$ = $context$jscomp$6$$.name;
    return function($value$jscomp$239$$) {
      var $oldValue$jscomp$6$$ = this[$name$jscomp$131$$];
      $target$jscomp$116$$.call(this, $value$jscomp$239$$);
      $JSCompiler_StaticMethods_requestUpdate$$(this, $name$jscomp$131$$, $oldValue$jscomp$6$$, $options$jscomp$153$$);
    };
  }
  throw Error("Unsupported decorator location: " + $kind$jscomp$6$$);
}
function $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$($options$jscomp$154$$) {
  return function($JSCompiler_temp$jscomp$164_protoOrTarget$$, $nameOrContext$jscomp$1$$) {
    if ("object" === typeof $nameOrContext$jscomp$1$$) {
      $JSCompiler_temp$jscomp$164_protoOrTarget$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property$standardProperty$$($options$jscomp$154$$, $JSCompiler_temp$jscomp$164_protoOrTarget$$, $nameOrContext$jscomp$1$$);
    } else {
      var $hasOwnProperty$jscomp$inline_337$$ = $JSCompiler_temp$jscomp$164_protoOrTarget$$.hasOwnProperty($nameOrContext$jscomp$1$$);
      $JSCompiler_temp$jscomp$164_protoOrTarget$$.constructor.$createProperty$($nameOrContext$jscomp$1$$, $hasOwnProperty$jscomp$inline_337$$ ? Object.assign({}, $options$jscomp$154$$, {$wrapped$:!0}) : $options$jscomp$154$$);
      $JSCompiler_temp$jscomp$164_protoOrTarget$$ = $hasOwnProperty$jscomp$inline_337$$ ? Object.getOwnPropertyDescriptor($JSCompiler_temp$jscomp$164_protoOrTarget$$, $nameOrContext$jscomp$1$$) : void 0;
    }
    return $JSCompiler_temp$jscomp$164_protoOrTarget$$;
  };
}
;function $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$base$desc$$($obj$jscomp$89$$, $name$jscomp$132$$, $descriptor$jscomp$4$$) {
  $descriptor$jscomp$4$$.configurable = !0;
  $descriptor$jscomp$4$$.enumerable = !0;
  Reflect.$decorate$ && "object" !== typeof $name$jscomp$132$$ && Object.defineProperty($obj$jscomp$89$$, $name$jscomp$132$$, $descriptor$jscomp$4$$);
  return $descriptor$jscomp$4$$;
}
;var $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query$2dall_fragment$$;
function $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$($selector$jscomp$7$$) {
  return function($protoOrTarget$jscomp$1$$, $nameOrContext$jscomp$2$$) {
    return $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$base$desc$$($protoOrTarget$jscomp$1$$, $nameOrContext$jscomp$2$$, {get:function() {
      var $$jscomp$inline_535$$, $$jscomp$inline_536$$;
      return null != ($$jscomp$inline_536$$ = null == ($$jscomp$inline_535$$ = this.$renderRoot$) ? void 0 : $$jscomp$inline_535$$.querySelector($selector$jscomp$7$$)) ? $$jscomp$inline_536$$ : null;
    }});
  };
}
;function $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$state_state$$() {
  return $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$(Object.assign({}, void 0, {state:!0, $attribute$:!1}));
}
;/*

 Copyright 2024 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var $$jscomp$templatelit$1833449034$0$$ = $$jscomp$createTemplateTagFirstArg$$([":host{font-size:var(--md-icon-size,24px);width:var(--md-icon-size,24px);height:var(--md-icon-size,24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font,Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;-webkit-user-select:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}\n"]), 
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$1833449034$0$$);
/*

 Copyright 2022 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
/*

 Copyright 2021 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var $$jscomp$templatelit$2078916347$1$$ = $$jscomp$createTemplateTagFirstArg$$(["<slot></slot>"]);
function $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$() {
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$);
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$;
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$elementStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$elementStyles$;
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__attributeNameForProperty$;
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalizeStyles$;
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$__prepare$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__prepare$;
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyOptions$;
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyDescriptor$;
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$createProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$createProperty$;
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$addInitializer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$addInitializer$;
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$finalize$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalize$;
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.prototype.$render$ = function() {
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$2078916347$1$$);
};
$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.prototype.connectedCallback = function() {
  $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.prototype.connectedCallback.call(this);
  "false" === this.getAttribute("aria-hidden") ? this.removeAttribute("aria-hidden") : this.setAttribute("aria-hidden", "true");
};
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$() {
  return $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$, $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$.$elementStyles$ = $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$elementStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$.$__prepare$ = $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$__prepare$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$.$createProperty$ = $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$createProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$.$addInitializer$ = $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$addInitializer$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$.$finalize$ = $module$exports$google3$third_party$javascript$material$web$icon$internal$icon$Icon$$.$finalize$;
var $module$exports$google3$third_party$javascript$material$web$icon$icon$MdIcon$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$icon$icon_closure$classdecl$var7$$;
$module$exports$google3$third_party$javascript$material$web$icon$icon$MdIcon$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$icon$internal$icon$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$icon$icon$MdIcon$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-icon")], $module$exports$google3$third_party$javascript$material$web$icon$icon$MdIcon$$);
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$directive$$($c$jscomp$10$$) {
  return function() {
    var $values$jscomp$21$$ = $$jscomp$getRestArguments$$.apply(0, arguments), $$jscomp$compprop76$$ = {};
    return $$jscomp$compprop76$$._$litDirective$ = $c$jscomp$10$$, $$jscomp$compprop76$$.values = $values$jscomp$21$$, $$jscomp$compprop76$$;
  };
}
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$Directive$$() {
}
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$Directive$$.prototype.$_$initialize$ = function($part$jscomp$5$$, $parent$jscomp$17$$, $attributeIndex$jscomp$1$$) {
  this.$m$ = $part$jscomp$5$$;
  this.$g$ = $parent$jscomp$17$$;
  this.$l$ = $attributeIndex$jscomp$1$$;
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$Directive$$.prototype.$_$resolve$ = function($part$jscomp$6$$, $props$jscomp$3$$) {
  return this.update($part$jscomp$6$$, $props$jscomp$3$$);
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$Directive$$.prototype.update = function($_part$$, $props$jscomp$4$$) {
  return this.$render$.apply(this, $$jscomp$arrayFromIterable$$($props$jscomp$4$$));
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$Directive$$.prototype, {$_$isConnected$:{configurable:!0, enumerable:!0, get:function() {
  return this.$g$.$_$isConnected$;
}}});
/*

 Copyright 2018 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$ClassMapDirective$$($partInfo$$) {
  var $$jscomp$optchain$tmp762760598$0$$;
  if (1 !== $partInfo$$.type || "class" !== $partInfo$$.name || 2 < (null == ($$jscomp$optchain$tmp762760598$0$$ = $partInfo$$.$strings$) ? void 0 : $$jscomp$optchain$tmp762760598$0$$.length)) {
    throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$ClassMapDirective$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$Directive$$);
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$ClassMapDirective$$.prototype.$render$ = function($classInfo$$) {
  return " " + Object.keys($classInfo$$).filter(function($key$jscomp$106$$) {
    return $classInfo$$[$key$jscomp$106$$];
  }).join(" ") + " ";
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$ClassMapDirective$$.prototype.update = function($$jscomp$iter$109_part$jscomp$7_value$jscomp$241$$, $$jscomp$destructuring$var35_classInfo$jscomp$1$$) {
  $$jscomp$destructuring$var35_classInfo$jscomp$1$$ = $$jscomp$makeIterator$$($$jscomp$destructuring$var35_classInfo$jscomp$1$$).next().value;
  if (void 0 === this.$i$) {
    this.$i$ = new Set();
    void 0 !== $$jscomp$iter$109_part$jscomp$7_value$jscomp$241$$.$strings$ && (this.$j$ = new Set($$jscomp$iter$109_part$jscomp$7_value$jscomp$241$$.$strings$.join(" ").split(/\s/).filter(function($s$jscomp$36$$) {
      return "" !== $s$jscomp$36$$;
    })));
    for (var $classList_name$jscomp$138$$ in $$jscomp$destructuring$var35_classInfo$jscomp$1$$) {
      var $$jscomp$optchain$tmp762760598$1_name$jscomp$140$$ = void 0;
      !$$jscomp$destructuring$var35_classInfo$jscomp$1$$[$classList_name$jscomp$138$$] || (null == ($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$ = this.$j$) ? 0 : $$jscomp$optchain$tmp762760598$1_name$jscomp$140$$.has($classList_name$jscomp$138$$)) || this.$i$.add($classList_name$jscomp$138$$);
    }
    return this.$render$($$jscomp$destructuring$var35_classInfo$jscomp$1$$);
  }
  $classList_name$jscomp$138$$ = $$jscomp$iter$109_part$jscomp$7_value$jscomp$241$$.element.classList;
  $$jscomp$iter$109_part$jscomp$7_value$jscomp$241$$ = $$jscomp$makeIterator$$(this.$i$);
  for (var $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$ = $$jscomp$iter$109_part$jscomp$7_value$jscomp$241$$.next(); !$$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$.done; $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$ = $$jscomp$iter$109_part$jscomp$7_value$jscomp$241$$.next()) {
    $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$ = $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$.value, $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$ in $$jscomp$destructuring$var35_classInfo$jscomp$1$$ || ($classList_name$jscomp$138$$.remove($$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$), this.$i$.delete($$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$));
  }
  for ($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$ in $$jscomp$destructuring$var35_classInfo$jscomp$1$$) {
    $$jscomp$iter$109_part$jscomp$7_value$jscomp$241$$ = !!$$jscomp$destructuring$var35_classInfo$jscomp$1$$[$$jscomp$optchain$tmp762760598$1_name$jscomp$140$$], $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$ = void 0, $$jscomp$iter$109_part$jscomp$7_value$jscomp$241$$ === this.$i$.has($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$) || null != ($$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$ = this.$j$) && 
    $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$.has($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$) || ($$jscomp$iter$109_part$jscomp$7_value$jscomp$241$$ ? ($classList_name$jscomp$138$$.add($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$), this.$i$.add($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$)) : ($classList_name$jscomp$138$$.remove($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$), this.$i$.delete($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$)));
  }
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$;
};
var $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$classMap$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$directive$$($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$ClassMapDirective$$);
/*

 Copyright 2020 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static_brand$$ = Symbol.for("");
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static_unwrapStaticValue$$($value$jscomp$242$$) {
  if ((null == $value$jscomp$242$$ ? void 0 : $value$jscomp$242$$.r) === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static_brand$$) {
    return null == $value$jscomp$242$$ ? void 0 : $value$jscomp$242$$._$litStatic$;
  }
}
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static$literal$$($strings$jscomp$13$$) {
  var $$jscomp$compprop78$$ = {};
  return $$jscomp$compprop78$$._$litStatic$ = $$jscomp$getRestArguments$$.apply(1, arguments).reduce(function($acc$jscomp$1$$, $JSCompiler_inline_result$jscomp$165_v$jscomp$31$$, $idx$jscomp$1$$) {
    if (void 0 !== $JSCompiler_inline_result$jscomp$165_v$jscomp$31$$._$litStatic$) {
      $JSCompiler_inline_result$jscomp$165_v$jscomp$31$$ = $JSCompiler_inline_result$jscomp$165_v$jscomp$31$$._$litStatic$;
    } else {
      throw Error("Value passed to 'literal' function must be a 'literal' result: " + $JSCompiler_inline_result$jscomp$165_v$jscomp$31$$ + ". Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.");
    }
    return $acc$jscomp$1$$ + $JSCompiler_inline_result$jscomp$165_v$jscomp$31$$ + $strings$jscomp$13$$[$idx$jscomp$1$$ + 1];
  }, $strings$jscomp$13$$[0]), $$jscomp$compprop78$$.r = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static_brand$$, $$jscomp$compprop78$$;
}
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static_stringsCache$$ = new Map(), $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static$html$$ = function($coreTag$$) {
  return function($strings$jscomp$14$$) {
    for (var $key$jscomp$107_values$jscomp$23$$ = $$jscomp$getRestArguments$$.apply(1, arguments), $l$jscomp$14$$ = $key$jscomp$107_values$jscomp$23$$.length, $staticValue$$, $dynamicValue$$, $staticStrings$$ = [], $dynamicValues$$ = [], $i$jscomp$130$$ = 0, $hasStatics$$ = !1, $s$jscomp$37$$; $i$jscomp$130$$ < $l$jscomp$14$$;) {
      for ($s$jscomp$37$$ = $strings$jscomp$14$$[$i$jscomp$130$$]; $i$jscomp$130$$ < $l$jscomp$14$$ && void 0 !== ($dynamicValue$$ = $key$jscomp$107_values$jscomp$23$$[$i$jscomp$130$$], $staticValue$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static_unwrapStaticValue$$($dynamicValue$$));) {
        $s$jscomp$37$$ += $staticValue$$ + $strings$jscomp$14$$[++$i$jscomp$130$$], $hasStatics$$ = !0;
      }
      $i$jscomp$130$$ !== $l$jscomp$14$$ && $dynamicValues$$.push($dynamicValue$$);
      $staticStrings$$.push($s$jscomp$37$$);
      $i$jscomp$130$$++;
    }
    $i$jscomp$130$$ === $l$jscomp$14$$ && $staticStrings$$.push($strings$jscomp$14$$[$l$jscomp$14$$]);
    $hasStatics$$ && ($key$jscomp$107_values$jscomp$23$$ = $staticStrings$$.join("$$lit$$"), $strings$jscomp$14$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static_stringsCache$$.get($key$jscomp$107_values$jscomp$23$$), void 0 === $strings$jscomp$14$$ && ($staticStrings$$.raw = $staticStrings$$, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static_stringsCache$$.set($key$jscomp$107_values$jscomp$23$$, $strings$jscomp$14$$ = $staticStrings$$)), 
    $key$jscomp$107_values$jscomp$23$$ = $dynamicValues$$);
    return $coreTag$$.apply(null, [$strings$jscomp$14$$].concat($$jscomp$arrayFromIterable$$($key$jscomp$107_values$jscomp$23$$)));
  };
}($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$);
var $$jscomp$templatelit$m105326783$0$$ = $$jscomp$createTemplateTagFirstArg$$([":host{animation-delay:0s,calc(var(--md-focus-ring-duration, .6s)*.25);animation-duration:calc(var(--md-focus-ring-duration, .6s)*.25),calc(var(--md-focus-ring-duration, .6s)*.75);animation-timing-function:cubic-bezier(.2,0,0,1);box-sizing:border-box;color:var(--md-focus-ring-color,var(--md-sys-color-secondary,#625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(var(--md-focus-ring-outward-offset, 2px)*-1);outline:var(--md-focus-ring-width,3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width,3px) solid currentColor;inset:var(--md-focus-ring-inward-offset,0)}@keyframes outward-grow{0%{outline-width:0}to{outline-width:var(--md-focus-ring-active-width,8px)}}@keyframes outward-shrink{0%{outline-width:var(--md-focus-ring-active-width,8px)}}@keyframes inward-grow{0%{border-width:0}to{border-width:var(--md-focus-ring-active-width,8px)}}@keyframes inward-shrink{0%{border-width:var(--md-focus-ring-active-width,8px)}}@media (prefers-reduced-motion){:host{animation:none}}\n"]), 
$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$m105326783$0$$);
/*

 Copyright 2023 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var $module$contents$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller_ATTACHABLE_CONTROLLER$$ = Symbol("attachableController"), $module$contents$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller_FOR_ATTRIBUTE_OBSERVER$$;
$module$contents$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller_FOR_ATTRIBUTE_OBSERVER$$ = new MutationObserver(function($$jscomp$iter$110_records$$) {
  $$jscomp$iter$110_records$$ = $$jscomp$makeIterator$$($$jscomp$iter$110_records$$);
  for (var $$jscomp$key$m1781090501$17$record$$ = $$jscomp$iter$110_records$$.next(); !$$jscomp$key$m1781090501$17$record$$.done; $$jscomp$key$m1781090501$17$record$$ = $$jscomp$iter$110_records$$.next()) {
    var $$jscomp$optchain$tmpm1781090501$0$$ = void 0;
    null == ($$jscomp$optchain$tmpm1781090501$0$$ = $$jscomp$key$m1781090501$17$record$$.value.target[$module$contents$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller_ATTACHABLE_CONTROLLER$$]) || $$jscomp$optchain$tmpm1781090501$0$$.$hostConnected$();
  }
});
function $module$exports$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller$AttachableController$$($host$$, $onControlChange$$) {
  this.host = $host$$;
  this.$onControlChange$ = $onControlChange$$;
  this.$currentControl$ = null;
  $JSCompiler_StaticMethods_addController$$($host$$, this);
  $host$$[$module$contents$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller_ATTACHABLE_CONTROLLER$$] = this;
  null == $module$contents$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller_FOR_ATTRIBUTE_OBSERVER$$ || $module$contents$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller_FOR_ATTRIBUTE_OBSERVER$$.observe($host$$, {attributeFilter:["for"]});
}
$module$exports$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller$AttachableController$$.prototype.attach = function($control$jscomp$2$$) {
  $control$jscomp$2$$ !== this.$currentControl$ && ($JSCompiler_StaticMethods_setCurrentControl$$(this, $control$jscomp$2$$), this.host.removeAttribute("for"));
};
$module$exports$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller$AttachableController$$.prototype.detach = function() {
  $JSCompiler_StaticMethods_setCurrentControl$$(this, null);
  this.host.setAttribute("for", "");
};
$module$exports$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller$AttachableController$$.prototype.$hostConnected$ = function() {
  $JSCompiler_StaticMethods_setCurrentControl$$(this, this.control);
};
$module$exports$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller$AttachableController$$.prototype.$hostDisconnected$ = function() {
  $JSCompiler_StaticMethods_setCurrentControl$$(this, null);
};
function $JSCompiler_StaticMethods_setCurrentControl$$($JSCompiler_StaticMethods_setCurrentControl$self$$, $control$jscomp$3$$) {
  $JSCompiler_StaticMethods_setCurrentControl$self$$.$onControlChange$($JSCompiler_StaticMethods_setCurrentControl$self$$.$currentControl$, $control$jscomp$3$$);
  $JSCompiler_StaticMethods_setCurrentControl$self$$.$currentControl$ = $control$jscomp$3$$;
}
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller$AttachableController$$.prototype, {htmlFor:{configurable:!0, enumerable:!0, get:function() {
  return this.host.getAttribute("for");
}, set:function($htmlFor$$) {
  null === $htmlFor$$ ? this.host.removeAttribute("for") : this.host.setAttribute("for", $htmlFor$$);
}}, control:{configurable:!0, enumerable:!0, get:function() {
  return this.host.hasAttribute("for") ? this.htmlFor && this.host.isConnected ? this.host.getRootNode().querySelector("#" + this.htmlFor) : null : this.$currentControl$ || this.host.parentElement;
}, set:function($control$jscomp$1$$) {
  $control$jscomp$1$$ ? this.attach($control$jscomp$1$$) : this.detach();
}}});
/*

 Copyright 2021 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var $module$contents$google3$third_party$javascript$material$web$focus$internal$focus$2dring_EVENTS$$ = ["focusin", "focusout", "pointerdown"];
function $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$() {
  var $$jscomp$super$this$807024100$3$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.apply(this, arguments) || this;
  $$jscomp$super$this$807024100$3$$.visible = !1;
  $$jscomp$super$this$807024100$3$$.inward = !1;
  $$jscomp$super$this$807024100$3$$.$attachableController$ = new $module$exports$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller$AttachableController$$($$jscomp$super$this$807024100$3$$, $$jscomp$super$this$807024100$3$$.$onControlChange$.bind($$jscomp$super$this$807024100$3$$));
  return $$jscomp$super$this$807024100$3$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$);
$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$;
$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$elementStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$elementStyles$;
$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__attributeNameForProperty$;
$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalizeStyles$;
$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$__prepare$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__prepare$;
$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyOptions$;
$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyDescriptor$;
$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$createProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$createProperty$;
$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$addInitializer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$addInitializer$;
$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$finalize$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalize$;
$JSCompiler_prototypeAlias$$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.prototype;
$JSCompiler_prototypeAlias$$.attach = function($control$jscomp$5$$) {
  this.$attachableController$.attach($control$jscomp$5$$);
};
$JSCompiler_prototypeAlias$$.detach = function() {
  this.$attachableController$.detach();
};
$JSCompiler_prototypeAlias$$.connectedCallback = function() {
  $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.prototype.connectedCallback.call(this);
  this.setAttribute("aria-hidden", "true");
};
$JSCompiler_prototypeAlias$$.handleEvent = function($event$jscomp$10$$) {
  if (!$event$jscomp$10$$[$module$contents$google3$third_party$javascript$material$web$focus$internal$focus$2dring_HANDLED_BY_FOCUS_RING$$]) {
    switch($event$jscomp$10$$.type) {
      default:
        return;
      case "focusin":
        var $$jscomp$optchain$tmp807024100$0$$, $$jscomp$nullish$tmp54$$;
        this.visible = null != ($$jscomp$nullish$tmp54$$ = null == ($$jscomp$optchain$tmp807024100$0$$ = this.control) ? void 0 : $$jscomp$optchain$tmp807024100$0$$.matches(":focus-visible")) ? $$jscomp$nullish$tmp54$$ : !1;
        break;
      case "focusout":
      case "pointerdown":
        this.visible = !1;
    }
    $event$jscomp$10$$[$module$contents$google3$third_party$javascript$material$web$focus$internal$focus$2dring_HANDLED_BY_FOCUS_RING$$] = !0;
  }
};
$JSCompiler_prototypeAlias$$.$onControlChange$ = function($prev$jscomp$1$$, $next$jscomp$2$$) {
  for (var $$jscomp$iter$111$$ = $$jscomp$makeIterator$$($module$contents$google3$third_party$javascript$material$web$focus$internal$focus$2dring_EVENTS$$), $$jscomp$key$807024100$4$event$jscomp$11_event$jscomp$11$$ = $$jscomp$iter$111$$.next(); !$$jscomp$key$807024100$4$event$jscomp$11_event$jscomp$11$$.done; $$jscomp$key$807024100$4$event$jscomp$11_event$jscomp$11$$ = $$jscomp$iter$111$$.next()) {
    $$jscomp$key$807024100$4$event$jscomp$11_event$jscomp$11$$ = $$jscomp$key$807024100$4$event$jscomp$11_event$jscomp$11$$.value;
    var $$jscomp$optchain$tmp807024100$1_$jscomp$optchain$tmp807024100$2$$ = void 0;
    null == ($$jscomp$optchain$tmp807024100$1_$jscomp$optchain$tmp807024100$2$$ = $prev$jscomp$1$$) || $$jscomp$optchain$tmp807024100$1_$jscomp$optchain$tmp807024100$2$$.removeEventListener($$jscomp$key$807024100$4$event$jscomp$11_event$jscomp$11$$, this);
    $$jscomp$optchain$tmp807024100$1_$jscomp$optchain$tmp807024100$2$$ = void 0;
    null == ($$jscomp$optchain$tmp807024100$1_$jscomp$optchain$tmp807024100$2$$ = $next$jscomp$2$$) || $$jscomp$optchain$tmp807024100$1_$jscomp$optchain$tmp807024100$2$$.addEventListener($$jscomp$key$807024100$4$event$jscomp$11_event$jscomp$11$$, this);
  }
};
$JSCompiler_prototypeAlias$$.update = function($changed$$) {
  $changed$$.has("visible") && this.dispatchEvent(new Event("visibility-changed"));
  $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.prototype.update.call(this, $changed$$);
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.prototype, {htmlFor:{configurable:!0, enumerable:!0, get:function() {
  return this.$attachableController$.htmlFor;
}, set:function($htmlFor$jscomp$1$$) {
  this.$attachableController$.htmlFor = $htmlFor$jscomp$1$$;
}}, control:{configurable:!0, enumerable:!0, get:function() {
  return this.$attachableController$.control;
}, set:function($control$jscomp$4$$) {
  this.$attachableController$.control = $control$jscomp$4$$;
}}});
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $reflect$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.prototype, "visible", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $reflect$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.prototype, "inward", void 0);
var $module$contents$google3$third_party$javascript$material$web$focus$internal$focus$2dring_HANDLED_BY_FOCUS_RING$$ = Symbol("handledByFocusRing");
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$() {
  return $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$, $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$.$elementStyles$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$elementStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$.$__prepare$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$__prepare$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$.$createProperty$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$createProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$.$addInitializer$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$addInitializer$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$.$finalize$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$finalize$;
var $module$exports$google3$third_party$javascript$material$web$focus$md$2dfocus$2dring$MdFocusRing$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var8$$;
$module$exports$google3$third_party$javascript$material$web$focus$md$2dfocus$2dring$MdFocusRing$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$focus$md$2dfocus$2dring$MdFocusRing$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-focus-ring")], $module$exports$google3$third_party$javascript$material$web$focus$md$2dfocus$2dring$MdFocusRing$$);
var $module$exports$google3$third_party$javascript$material$web$internal$aria$aria$ARIA_PROPERTIES$$ = "role ariaAtomic ariaAutoComplete ariaBusy ariaChecked ariaColCount ariaColIndex ariaColSpan ariaCurrent ariaDisabled ariaExpanded ariaHasPopup ariaHidden ariaInvalid ariaKeyShortcuts ariaLabel ariaLevel ariaLive ariaModal ariaMultiLine ariaMultiSelectable ariaOrientation ariaPlaceholder ariaPosInSet ariaPressed ariaReadOnly ariaRequired ariaRoleDescription ariaRowCount ariaRowIndex ariaRowSpan ariaSelected ariaSetSize ariaSort ariaValueMax ariaValueMin ariaValueNow ariaValueText".split(" ");
$module$exports$google3$third_party$javascript$material$web$internal$aria$aria$ARIA_PROPERTIES$$.map($module$contents$google3$third_party$javascript$material$web$internal$aria$aria_ariaPropertyToAttribute$$);
function $module$contents$google3$third_party$javascript$material$web$internal$aria$aria_ariaPropertyToAttribute$$($property$jscomp$12$$) {
  return $property$jscomp$12$$.replace("aria", "aria-").replace(/Elements?/g, "").toLowerCase();
}
;function $module$contents$google3$third_party$javascript$material$web$internal$aria$delegate_requestUpdateOnAriaChange$$($ctor$jscomp$5$$) {
  for (var $$jscomp$iter$112$$ = $$jscomp$makeIterator$$($module$exports$google3$third_party$javascript$material$web$internal$aria$aria$ARIA_PROPERTIES$$), $$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$ = $$jscomp$iter$112$$.next(); !$$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$.done; $$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$ = $$jscomp$iter$112$$.next()) {
    $$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$ = $$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$.value, $ctor$jscomp$5$$.$createProperty$($$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$, {$attribute$:$module$contents$google3$third_party$javascript$material$web$internal$aria$aria_ariaPropertyToAttribute$$($$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$), $reflect$:!0});
  }
  $ctor$jscomp$5$$.$addInitializer$(function($element$jscomp$30$$) {
    $JSCompiler_StaticMethods_addController$$($element$jscomp$30$$, {$hostConnected$:function() {
      $element$jscomp$30$$.setAttribute("role", "presentation");
    }});
  });
}
;var $module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$ = Symbol("internals"), $module$contents$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals_privateInternals$$ = Symbol("privateInternals");
function $module$contents$google3$third_party$javascript$material$web$internal$controller$is$2drtl_isRtl$$($el$jscomp$10$$, $shouldCheck$$) {
  return (void 0 === $shouldCheck$$ ? !0 : $shouldCheck$$) && "rtl" === getComputedStyle($el$jscomp$10$$).getPropertyValue("direction").trim();
}
;var $$jscomp$templatelit$168124472$0$$ = $$jscomp$createTemplateTagFirstArg$$([':host {\n  display: flex;\n  margin: auto;\n  pointer-events: none;\n}\n\n:host([disabled]) {\n  display: none;\n}\n\n@media (forced-colors: active) {\n  :host {\n    display: none;\n  }\n}\n:host,\n.surface {\n  border-radius: inherit;\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n\n.surface {\n  -webkit-tap-highlight-color: transparent;\n}\n.surface::before, .surface::after {\n  content: "";\n  opacity: 0;\n  position: absolute;\n}\n.surface::before {\n  background-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));\n  inset: 0;\n  transition: opacity 15ms linear, background-color 15ms linear;\n}\n.surface::after {\n  background: radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);\n  transform-origin: center center;\n  transition: opacity 375ms linear;\n}\n\n.hovered::before {\n  background-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));\n  opacity: var(--md-ripple-hover-opacity, 0.08);\n}\n\n.pressed::after {\n  opacity: var(--md-ripple-pressed-opacity, 0.12);\n  transition-duration: 105ms;\n}\n\n']), 
$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$168124472$0$$);
var $$jscomp$templatelit$m1165769523$38$$ = $$jscomp$createTemplateTagFirstArg$$(['<div class="surface ', '"></div>']), $module$contents$google3$third_party$javascript$material$web$ripple$internal$ripple_EVENTS$$ = "click contextmenu pointercancel pointerdown pointerenter pointerleave pointerup".split(" "), $module$contents$google3$third_party$javascript$material$web$ripple$internal$ripple_FORCED_COLORS$$ = window.matchMedia("(forced-colors: active)");
function $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$() {
  var $$jscomp$super$this$m1165769523$37$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.apply(this, arguments) || this;
  $$jscomp$super$this$m1165769523$37$$.disabled = !1;
  $$jscomp$super$this$m1165769523$37$$.$hovered$ = !1;
  $$jscomp$super$this$m1165769523$37$$.pressed = !1;
  $$jscomp$super$this$m1165769523$37$$.$rippleSize$ = "";
  $$jscomp$super$this$m1165769523$37$$.$rippleScale$ = "";
  $$jscomp$super$this$m1165769523$37$$.$initialSize$ = 0;
  $$jscomp$super$this$m1165769523$37$$.state = 0;
  $$jscomp$super$this$m1165769523$37$$.$checkBoundsAfterContextMenu$ = !1;
  $$jscomp$super$this$m1165769523$37$$.$attachableController$ = new $module$exports$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller$AttachableController$$($$jscomp$super$this$m1165769523$37$$, $$jscomp$super$this$m1165769523$37$$.$onControlChange$.bind($$jscomp$super$this$m1165769523$37$$));
  return $$jscomp$super$this$m1165769523$37$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$);
$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$;
$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$elementStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$elementStyles$;
$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__attributeNameForProperty$;
$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalizeStyles$;
$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$__prepare$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__prepare$;
$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyOptions$;
$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyDescriptor$;
$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$createProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$createProperty$;
$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$addInitializer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$addInitializer$;
$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$finalize$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalize$;
$JSCompiler_prototypeAlias$$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.prototype;
$JSCompiler_prototypeAlias$$.attach = function($control$jscomp$7$$) {
  this.$attachableController$.attach($control$jscomp$7$$);
};
$JSCompiler_prototypeAlias$$.detach = function() {
  this.$attachableController$.detach();
};
$JSCompiler_prototypeAlias$$.connectedCallback = function() {
  $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.prototype.connectedCallback.call(this);
  this.setAttribute("aria-hidden", "true");
};
$JSCompiler_prototypeAlias$$.$render$ = function() {
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$m1165769523$38$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$classMap$$({hovered:this.$hovered$, pressed:this.pressed}));
};
$JSCompiler_prototypeAlias$$.update = function($changedProps$$) {
  $changedProps$$.has("disabled") && this.disabled && (this.pressed = this.$hovered$ = !1);
  $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.prototype.update.call(this, $changedProps$$);
};
function $JSCompiler_StaticMethods_handlePointerdown$$($JSCompiler_StaticMethods_handlePointerdown$self$$, $event$jscomp$16$$) {
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m1165769523$40$$) {
    if (1 == $$jscomp$generator$context$m1165769523$40$$.$g$) {
      if (!$JSCompiler_StaticMethods_shouldReactToEvent$$($JSCompiler_StaticMethods_handlePointerdown$self$$, $event$jscomp$16$$)) {
        return $$jscomp$generator$context$m1165769523$40$$.return();
      }
      $JSCompiler_StaticMethods_handlePointerdown$self$$.$rippleStartEvent$ = $event$jscomp$16$$;
      if ("touch" !== $event$jscomp$16$$.pointerType) {
        return $JSCompiler_StaticMethods_handlePointerdown$self$$.state = 3, $JSCompiler_StaticMethods_startPressAnimation$$($JSCompiler_StaticMethods_handlePointerdown$self$$, $event$jscomp$16$$), $$jscomp$generator$context$m1165769523$40$$.return();
      }
      if ($JSCompiler_StaticMethods_handlePointerdown$self$$.$checkBoundsAfterContextMenu$ && !$JSCompiler_StaticMethods_inBounds$$($JSCompiler_StaticMethods_handlePointerdown$self$$, $event$jscomp$16$$)) {
        return $$jscomp$generator$context$m1165769523$40$$.return();
      }
      $JSCompiler_StaticMethods_handlePointerdown$self$$.$checkBoundsAfterContextMenu$ = !1;
      $JSCompiler_StaticMethods_handlePointerdown$self$$.state = 1;
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m1165769523$40$$, new Promise(function($resolve$jscomp$10$$) {
        setTimeout($resolve$jscomp$10$$, 150);
      }), 2);
    }
    if (1 !== $JSCompiler_StaticMethods_handlePointerdown$self$$.state) {
      return $$jscomp$generator$context$m1165769523$40$$.return();
    }
    $JSCompiler_StaticMethods_handlePointerdown$self$$.state = 2;
    $JSCompiler_StaticMethods_startPressAnimation$$($JSCompiler_StaticMethods_handlePointerdown$self$$, $event$jscomp$16$$);
    $$jscomp$generator$context$m1165769523$40$$.$g$ = 0;
  });
}
$JSCompiler_prototypeAlias$$.$handleClick$ = function() {
  this.disabled || (3 === this.state ? $JSCompiler_StaticMethods_endPressAnimation$$(this) : 0 === this.state && ($JSCompiler_StaticMethods_startPressAnimation$$(this), $JSCompiler_StaticMethods_endPressAnimation$$(this)));
};
function $JSCompiler_StaticMethods_startPressAnimation$$($JSCompiler_StaticMethods_startPressAnimation$self$$, $JSCompiler_object_inline_startPoint_517_JSCompiler_temp$jscomp$522_positionEvent$jscomp$1_startPoint$jscomp$inline_360$$) {
  if ($JSCompiler_StaticMethods_startPressAnimation$self$$.$mdRoot$) {
    $JSCompiler_StaticMethods_startPressAnimation$self$$.pressed = !0;
    var $$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$;
    null == ($$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$ = $JSCompiler_StaticMethods_startPressAnimation$self$$.$growAnimation$) || $$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$.cancel();
    var $$jscomp$inline_346_JSCompiler_object_inline_y_584_softEdgeSize$jscomp$inline_350$$ = $JSCompiler_StaticMethods_startPressAnimation$self$$.getBoundingClientRect();
    $$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$ = $$jscomp$inline_346_JSCompiler_object_inline_y_584_softEdgeSize$jscomp$inline_350$$.height;
    var $height$jscomp$inline_357_scrollX$jscomp$inline_541_width$jscomp$inline_348$$ = $$jscomp$inline_346_JSCompiler_object_inline_y_584_softEdgeSize$jscomp$inline_350$$.width, $$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$ = Math.max($$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$, $height$jscomp$inline_357_scrollX$jscomp$inline_541_width$jscomp$inline_348$$);
    $$jscomp$inline_346_JSCompiler_object_inline_y_584_softEdgeSize$jscomp$inline_350$$ = Math.max(.35 * $$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$, 75);
    $$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$ = Math.floor(.2 * $$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$);
    $$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$ = Math.sqrt(Math.pow($height$jscomp$inline_357_scrollX$jscomp$inline_541_width$jscomp$inline_348$$, 2) + Math.pow($$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$, 2)) + 10;
    $JSCompiler_StaticMethods_startPressAnimation$self$$.$initialSize$ = $$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$;
    $JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleScale$ = "" + ($$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$ + $$jscomp$inline_346_JSCompiler_object_inline_y_584_softEdgeSize$jscomp$inline_350$$) / $$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$;
    $JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleSize$ = $$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$ + "px";
    $$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$ = $JSCompiler_StaticMethods_startPressAnimation$self$$.getBoundingClientRect();
    $height$jscomp$inline_357_scrollX$jscomp$inline_541_width$jscomp$inline_348$$ = $$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$.height;
    $$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$ = $$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$.width;
    $$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$ = ($$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$ - $JSCompiler_StaticMethods_startPressAnimation$self$$.$initialSize$) / 2;
    $$jscomp$inline_346_JSCompiler_object_inline_y_584_softEdgeSize$jscomp$inline_350$$ = ($height$jscomp$inline_357_scrollX$jscomp$inline_541_width$jscomp$inline_348$$ - $JSCompiler_StaticMethods_startPressAnimation$self$$.$initialSize$) / 2;
    if ($JSCompiler_object_inline_startPoint_517_JSCompiler_temp$jscomp$522_positionEvent$jscomp$1_startPoint$jscomp$inline_360$$ instanceof PointerEvent) {
      $$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$ = window;
      $height$jscomp$inline_357_scrollX$jscomp$inline_541_width$jscomp$inline_348$$ = $$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$.scrollX;
      $$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$ = $$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$.scrollY;
      var $$jscomp$inline_543$$ = $JSCompiler_StaticMethods_startPressAnimation$self$$.getBoundingClientRect();
      $JSCompiler_object_inline_startPoint_517_JSCompiler_temp$jscomp$522_positionEvent$jscomp$1_startPoint$jscomp$inline_360$$ = {x:$JSCompiler_object_inline_startPoint_517_JSCompiler_temp$jscomp$522_positionEvent$jscomp$1_startPoint$jscomp$inline_360$$.pageX - ($height$jscomp$inline_357_scrollX$jscomp$inline_541_width$jscomp$inline_348$$ + $$jscomp$inline_543$$.left), y:$JSCompiler_object_inline_startPoint_517_JSCompiler_temp$jscomp$522_positionEvent$jscomp$1_startPoint$jscomp$inline_360$$.pageY - 
      ($$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$ + $$jscomp$inline_543$$.top)};
    } else {
      $JSCompiler_object_inline_startPoint_517_JSCompiler_temp$jscomp$522_positionEvent$jscomp$1_startPoint$jscomp$inline_360$$ = {x:$$jscomp$inline_540_initialSize$jscomp$inline_351_maxDim$jscomp$inline_349_scrollY$jscomp$inline_542_width$jscomp$inline_358$$ / 2, y:$height$jscomp$inline_357_scrollX$jscomp$inline_541_width$jscomp$inline_348$$ / 2};
    }
    $JSCompiler_object_inline_startPoint_517_JSCompiler_temp$jscomp$522_positionEvent$jscomp$1_startPoint$jscomp$inline_360$$ = {x:$JSCompiler_object_inline_startPoint_517_JSCompiler_temp$jscomp$522_positionEvent$jscomp$1_startPoint$jscomp$inline_360$$.x - $JSCompiler_StaticMethods_startPressAnimation$self$$.$initialSize$ / 2, y:$JSCompiler_object_inline_startPoint_517_JSCompiler_temp$jscomp$522_positionEvent$jscomp$1_startPoint$jscomp$inline_360$$.y - $JSCompiler_StaticMethods_startPressAnimation$self$$.$initialSize$ / 
    2};
    $JSCompiler_StaticMethods_startPressAnimation$self$$.$growAnimation$ = $JSCompiler_StaticMethods_startPressAnimation$self$$.$mdRoot$.animate({top:[0, 0], left:[0, 0], height:[$JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleSize$, $JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleSize$], width:[$JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleSize$, $JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleSize$], transform:["translate(" + ($JSCompiler_object_inline_startPoint_517_JSCompiler_temp$jscomp$522_positionEvent$jscomp$1_startPoint$jscomp$inline_360$$.x + 
    "px, " + $JSCompiler_object_inline_startPoint_517_JSCompiler_temp$jscomp$522_positionEvent$jscomp$1_startPoint$jscomp$inline_360$$.y + "px) scale(1)"), "translate(" + ($$jscomp$inline_356_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_583_height$jscomp$inline_347_maxRadius$jscomp$inline_352$$ + "px, " + $$jscomp$inline_346_JSCompiler_object_inline_y_584_softEdgeSize$jscomp$inline_350$$ + "px) scale(") + $JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleScale$ + ")"]}, 
    {pseudoElement:"::after", duration:450, easing:"cubic-bezier(0.2, 0, 0, 1)", fill:"forwards"});
  }
}
function $JSCompiler_StaticMethods_endPressAnimation$$($JSCompiler_StaticMethods_endPressAnimation$self$$) {
  var $animation$$, $pressAnimationPlayState$$, $$jscomp$optchain$tmpm1165769523$1$$, $$jscomp$optchain$tmpm1165769523$2$$;
  $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m1165769523$41$$) {
    if (1 == $$jscomp$generator$context$m1165769523$41$$.$g$) {
      $JSCompiler_StaticMethods_endPressAnimation$self$$.$rippleStartEvent$ = void 0;
      $JSCompiler_StaticMethods_endPressAnimation$self$$.state = 0;
      $animation$$ = $JSCompiler_StaticMethods_endPressAnimation$self$$.$growAnimation$;
      $pressAnimationPlayState$$ = Infinity;
      if ("number" === typeof(null == ($$jscomp$optchain$tmpm1165769523$1$$ = $animation$$) ? void 0 : $$jscomp$optchain$tmpm1165769523$1$$.currentTime)) {
        $pressAnimationPlayState$$ = $animation$$.currentTime;
      } else if (null == ($$jscomp$optchain$tmpm1165769523$2$$ = $animation$$) ? 0 : $$jscomp$optchain$tmpm1165769523$2$$.currentTime) {
        $pressAnimationPlayState$$ = $animation$$.currentTime.to("ms").value;
      }
      return 225 <= $pressAnimationPlayState$$ ? ($JSCompiler_StaticMethods_endPressAnimation$self$$.pressed = !1, $$jscomp$generator$context$m1165769523$41$$.return()) : $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m1165769523$41$$, new Promise(function($resolve$jscomp$11$$) {
        setTimeout($resolve$jscomp$11$$, 225 - $pressAnimationPlayState$$);
      }), 2);
    }
    if ($JSCompiler_StaticMethods_endPressAnimation$self$$.$growAnimation$ !== $animation$$) {
      return $$jscomp$generator$context$m1165769523$41$$.return();
    }
    $JSCompiler_StaticMethods_endPressAnimation$self$$.pressed = !1;
    $$jscomp$generator$context$m1165769523$41$$.$g$ = 0;
  });
}
function $JSCompiler_StaticMethods_shouldReactToEvent$$($JSCompiler_StaticMethods_shouldReactToEvent$self_isPrimaryButton$$, $event$jscomp$18$$) {
  if ($JSCompiler_StaticMethods_shouldReactToEvent$self_isPrimaryButton$$.disabled || !$event$jscomp$18$$.isPrimary || $JSCompiler_StaticMethods_shouldReactToEvent$self_isPrimaryButton$$.$rippleStartEvent$ && $JSCompiler_StaticMethods_shouldReactToEvent$self_isPrimaryButton$$.$rippleStartEvent$.pointerId !== $event$jscomp$18$$.pointerId) {
    return !1;
  }
  if ("pointerenter" === $event$jscomp$18$$.type || "pointerleave" === $event$jscomp$18$$.type) {
    return "touch" !== $event$jscomp$18$$.pointerType;
  }
  $JSCompiler_StaticMethods_shouldReactToEvent$self_isPrimaryButton$$ = 1 === $event$jscomp$18$$.buttons;
  return "touch" === $event$jscomp$18$$.pointerType || $JSCompiler_StaticMethods_shouldReactToEvent$self_isPrimaryButton$$;
}
function $JSCompiler_StaticMethods_inBounds$$($$jscomp$destructuring$var47_JSCompiler_StaticMethods_inBounds$self$$, $$jscomp$destructuring$var45_y$jscomp$80$$) {
  var $x$jscomp$103$$ = $$jscomp$destructuring$var45_y$jscomp$80$$.x;
  $$jscomp$destructuring$var45_y$jscomp$80$$ = $$jscomp$destructuring$var45_y$jscomp$80$$.y;
  $$jscomp$destructuring$var47_JSCompiler_StaticMethods_inBounds$self$$ = $$jscomp$destructuring$var47_JSCompiler_StaticMethods_inBounds$self$$.getBoundingClientRect();
  var $top$jscomp$4$$ = $$jscomp$destructuring$var47_JSCompiler_StaticMethods_inBounds$self$$.top, $bottom$jscomp$1$$ = $$jscomp$destructuring$var47_JSCompiler_StaticMethods_inBounds$self$$.bottom, $right$jscomp$5$$ = $$jscomp$destructuring$var47_JSCompiler_StaticMethods_inBounds$self$$.right;
  return $x$jscomp$103$$ >= $$jscomp$destructuring$var47_JSCompiler_StaticMethods_inBounds$self$$.left && $x$jscomp$103$$ <= $right$jscomp$5$$ && $$jscomp$destructuring$var45_y$jscomp$80$$ >= $top$jscomp$4$$ && $$jscomp$destructuring$var45_y$jscomp$80$$ <= $bottom$jscomp$1$$;
}
$JSCompiler_prototypeAlias$$.handleEvent = function($event$jscomp$19$$) {
  var $$jscomp$async$this$jscomp$4$$ = this, $$jscomp$optchain$tmpm1165769523$3$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$141$$) {
    if (1 == $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$141$$.$g$) {
      if (null == ($$jscomp$optchain$tmpm1165769523$3$$ = $module$contents$google3$third_party$javascript$material$web$ripple$internal$ripple_FORCED_COLORS$$) ? 0 : $$jscomp$optchain$tmpm1165769523$3$$.matches) {
        return $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$141$$.return();
      }
      switch($event$jscomp$19$$.type) {
        case "click":
          $$jscomp$async$this$jscomp$4$$.$handleClick$();
          break;
        case "contextmenu":
          $$jscomp$async$this$jscomp$4$$.disabled || ($$jscomp$async$this$jscomp$4$$.$checkBoundsAfterContextMenu$ = !0, $JSCompiler_StaticMethods_endPressAnimation$$($$jscomp$async$this$jscomp$4$$));
          break;
        case "pointercancel":
          $JSCompiler_StaticMethods_shouldReactToEvent$$($$jscomp$async$this$jscomp$4$$, $event$jscomp$19$$) && $JSCompiler_StaticMethods_endPressAnimation$$($$jscomp$async$this$jscomp$4$$);
          break;
        case "pointerdown":
          $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$141$$.$g$ = 2;
          return;
        case "pointerenter":
          $JSCompiler_StaticMethods_shouldReactToEvent$$($$jscomp$async$this$jscomp$4$$, $event$jscomp$19$$) && ($$jscomp$async$this$jscomp$4$$.$hovered$ = !0);
          break;
        case "pointerleave":
          $JSCompiler_StaticMethods_shouldReactToEvent$$($$jscomp$async$this$jscomp$4$$, $event$jscomp$19$$) && ($$jscomp$async$this$jscomp$4$$.$hovered$ = !1, 0 !== $$jscomp$async$this$jscomp$4$$.state && $JSCompiler_StaticMethods_endPressAnimation$$($$jscomp$async$this$jscomp$4$$));
          break;
        case "pointerup":
          $JSCompiler_StaticMethods_shouldReactToEvent$$($$jscomp$async$this$jscomp$4$$, $event$jscomp$19$$) && (2 === $$jscomp$async$this$jscomp$4$$.state ? $$jscomp$async$this$jscomp$4$$.state = 3 : 1 === $$jscomp$async$this$jscomp$4$$.state && ($$jscomp$async$this$jscomp$4$$.state = 3, $JSCompiler_StaticMethods_startPressAnimation$$($$jscomp$async$this$jscomp$4$$, $$jscomp$async$this$jscomp$4$$.$rippleStartEvent$)));
      }
      $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$141$$.$g$ = 0;
    } else {
      return 4 != $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$141$$.$g$ ? $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$141$$ = $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$141$$, $JSCompiler_StaticMethods_handlePointerdown$$($$jscomp$async$this$jscomp$4$$, $event$jscomp$19$$), 4) : ($$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$141$$.$g$ = 0, $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$141$$ = 
      void 0), $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$141$$;
    }
  });
};
$JSCompiler_prototypeAlias$$.$onControlChange$ = function($prev$jscomp$2$$, $next$jscomp$3$$) {
  for (var $$jscomp$iter$113$$ = $$jscomp$makeIterator$$($module$contents$google3$third_party$javascript$material$web$ripple$internal$ripple_EVENTS$$), $$jscomp$key$m1165769523$39$event$jscomp$20_event$jscomp$20$$ = $$jscomp$iter$113$$.next(); !$$jscomp$key$m1165769523$39$event$jscomp$20_event$jscomp$20$$.done; $$jscomp$key$m1165769523$39$event$jscomp$20_event$jscomp$20$$ = $$jscomp$iter$113$$.next()) {
    $$jscomp$key$m1165769523$39$event$jscomp$20_event$jscomp$20$$ = $$jscomp$key$m1165769523$39$event$jscomp$20_event$jscomp$20$$.value;
    var $$jscomp$optchain$tmpm1165769523$4_$jscomp$optchain$tmpm1165769523$5$$ = void 0;
    null == ($$jscomp$optchain$tmpm1165769523$4_$jscomp$optchain$tmpm1165769523$5$$ = $prev$jscomp$2$$) || $$jscomp$optchain$tmpm1165769523$4_$jscomp$optchain$tmpm1165769523$5$$.removeEventListener($$jscomp$key$m1165769523$39$event$jscomp$20_event$jscomp$20$$, this);
    $$jscomp$optchain$tmpm1165769523$4_$jscomp$optchain$tmpm1165769523$5$$ = void 0;
    null == ($$jscomp$optchain$tmpm1165769523$4_$jscomp$optchain$tmpm1165769523$5$$ = $next$jscomp$3$$) || $$jscomp$optchain$tmpm1165769523$4_$jscomp$optchain$tmpm1165769523$5$$.addEventListener($$jscomp$key$m1165769523$39$event$jscomp$20_event$jscomp$20$$, this);
  }
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.prototype, {htmlFor:{configurable:!0, enumerable:!0, get:function() {
  return this.$attachableController$.htmlFor;
}, set:function($htmlFor$jscomp$2$$) {
  this.$attachableController$.htmlFor = $htmlFor$jscomp$2$$;
}}, control:{configurable:!0, enumerable:!0, get:function() {
  return this.$attachableController$.control;
}, set:function($control$jscomp$6$$) {
  this.$attachableController$.control = $control$jscomp$6$$;
}}});
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $reflect$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.prototype, "disabled", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$state_state$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.prototype, "$hovered$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$state_state$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.prototype, "pressed", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$(".surface"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.prototype, "$mdRoot$", void 0);
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$() {
  return $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$, $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$.$elementStyles$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$elementStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$.$__prepare$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$__prepare$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$.$createProperty$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$createProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$.$addInitializer$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$addInitializer$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$.$finalize$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$finalize$;
var $module$exports$google3$third_party$javascript$material$web$ripple$ripple$MdRipple$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var9$$;
$module$exports$google3$third_party$javascript$material$web$ripple$ripple$MdRipple$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$ripple$ripple$MdRipple$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-ripple")], $module$exports$google3$third_party$javascript$material$web$ripple$ripple$MdRipple$$);
/*

 Copyright 2018 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var $$jscomp$templatelit$1117217516$19$$ = $$jscomp$createTemplateTagFirstArg$$(["div"]), $$jscomp$templatelit$1117217516$20$$ = $$jscomp$createTemplateTagFirstArg$$(["button"]), $$jscomp$templatelit$1117217516$21$$ = $$jscomp$createTemplateTagFirstArg$$('<;\n        class="icon-button ;"\n        id="button"\n        aria-label=";"\n        aria-haspopup=";"\n        aria-expanded=";"\n        aria-pressed=";"\n        ?disabled=";"\n        @click=";">\n        ;\n        ;\n        ;\n        ;\n        ;\n        ;\n  </;>'.split(";")), 
$$jscomp$templatelit$1117217516$22$$ = $$jscomp$createTemplateTagFirstArg$$(['\n      <a\n        class="link"\n        id="link"\n        href="', '"\n        target="', '"\n        aria-label="', '"></a>\n    ']), $$jscomp$templatelit$1117217516$23$$ = $$jscomp$createTemplateTagFirstArg$$(['<span class="icon"><slot></slot></span>']), $$jscomp$templatelit$1117217516$24$$ = $$jscomp$createTemplateTagFirstArg$$(['<span class="icon icon--selected"\n      ><slot name="selected"><slot></slot></slot\n    ></span>']), 
$$jscomp$templatelit$1117217516$25$$ = $$jscomp$createTemplateTagFirstArg$$(['<span class="touch"></span>']), $$jscomp$templatelit$1117217516$26$$ = $$jscomp$createTemplateTagFirstArg$$(['<md-focus-ring\n      part="focus-ring"\n      for=', "></md-focus-ring>"]), $$jscomp$templatelit$1117217516$27$$ = $$jscomp$createTemplateTagFirstArg$$(["<md-ripple\n      for=", '\n      ?disabled="', '"></md-ripple>']), $module$contents$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton_iconButtonBaseClass$$ = 
function($base$jscomp$9$$) {
  function $WithElementInternalsElement$$() {
    return $base$jscomp$9$$.apply(this, arguments) || this;
  }
  $$jscomp$inherits$$($WithElementInternalsElement$$, $base$jscomp$9$$);
  $$jscomp$global$$.Object.defineProperty($WithElementInternalsElement$$.prototype, $module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$, {configurable:!0, enumerable:!0, get:function() {
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals_privateInternals$$] || (this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals_privateInternals$$] = this.attachInternals());
    return this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals_privateInternals$$];
  }});
  return $WithElementInternalsElement$$;
}($module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$);
function $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$() {
  var $$jscomp$super$this$1117217516$18$$ = $module$contents$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton_iconButtonBaseClass$$.apply(this, arguments) || this;
  $$jscomp$super$this$1117217516$18$$.disabled = !1;
  $$jscomp$super$this$1117217516$18$$.flipIconInRtl = !1;
  $$jscomp$super$this$1117217516$18$$.href = "";
  $$jscomp$super$this$1117217516$18$$.target = "";
  $$jscomp$super$this$1117217516$18$$.ariaLabelSelected = "";
  $$jscomp$super$this$1117217516$18$$.toggle = !1;
  $$jscomp$super$this$1117217516$18$$.selected = !1;
  $$jscomp$super$this$1117217516$18$$.type = "submit";
  $$jscomp$super$this$1117217516$18$$.value = "";
  $$jscomp$super$this$1117217516$18$$.$flipIcon$ = $module$contents$google3$third_party$javascript$material$web$internal$controller$is$2drtl_isRtl$$($$jscomp$super$this$1117217516$18$$, $$jscomp$super$this$1117217516$18$$.flipIconInRtl);
  return $$jscomp$super$this$1117217516$18$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$, $module$contents$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton_iconButtonBaseClass$$);
$JSCompiler_prototypeAlias$$ = $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype;
$JSCompiler_prototypeAlias$$.$willUpdate$ = function() {
  this.href && (this.disabled = !1);
};
$JSCompiler_prototypeAlias$$.$render$ = function() {
  var $tag$jscomp$8$$ = this.href ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static$literal$$($$jscomp$templatelit$1117217516$19$$) : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static$literal$$($$jscomp$templatelit$1117217516$20$$), $ariaLabel$$ = this.ariaLabel, $ariaHasPopup$$ = this.ariaHasPopup, $ariaExpanded$$ = this.ariaExpanded, $hasToggledAriaLabel$$ = $ariaLabel$$ && this.ariaLabelSelected, $ariaPressedValue$$ = this.toggle ? 
  this.selected : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, $ariaLabelValue$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$;
  this.href || ($ariaLabelValue$$ = $hasToggledAriaLabel$$ && this.selected ? this.ariaLabelSelected : $ariaLabel$$);
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static$html$$($$jscomp$templatelit$1117217516$21$$, $tag$jscomp$8$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$classMap$$(this.$getRenderClasses$()), $ariaLabelValue$$ || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, !this.href && $ariaHasPopup$$ || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, 
  !this.href && $ariaExpanded$$ || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, $ariaPressedValue$$, !this.href && this.disabled, this.$handleClick$, this.$renderFocusRing$(), this.$renderRipple$(), this.selected ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1117217516$23$$), this.selected ? 
  $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1117217516$24$$) : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1117217516$25$$), this.href && $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1117217516$22$$, 
  this.href, this.target || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, this.ariaLabel || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$), $tag$jscomp$8$$);
};
$JSCompiler_prototypeAlias$$.$getRenderClasses$ = function() {
  return {"flip-icon":this.$flipIcon$, selected:this.toggle && this.selected};
};
$JSCompiler_prototypeAlias$$.$renderFocusRing$ = function() {
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1117217516$26$$, this.href ? "link" : "button");
};
$JSCompiler_prototypeAlias$$.$renderRipple$ = function() {
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1117217516$27$$, this.href ? "link" : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, !this.href && this.disabled);
};
$JSCompiler_prototypeAlias$$.connectedCallback = function() {
  this.$flipIcon$ = $module$contents$google3$third_party$javascript$material$web$internal$controller$is$2drtl_isRtl$$(this, this.flipIconInRtl);
  $module$contents$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton_iconButtonBaseClass$$.prototype.connectedCallback.call(this);
};
$JSCompiler_prototypeAlias$$.$handleClick$ = function($event$jscomp$21$$) {
  var $$jscomp$async$this$jscomp$5$$ = this;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$1117217516$28$$) {
    if (1 == $$jscomp$generator$context$1117217516$28$$.$g$) {
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1117217516$28$$, 0, 2);
    }
    if (!$$jscomp$async$this$jscomp$5$$.toggle || $$jscomp$async$this$jscomp$5$$.disabled || $event$jscomp$21$$.defaultPrevented) {
      return $$jscomp$generator$context$1117217516$28$$.return();
    }
    $$jscomp$async$this$jscomp$5$$.selected = !$$jscomp$async$this$jscomp$5$$.selected;
    $$jscomp$async$this$jscomp$5$$.dispatchEvent(new InputEvent("input", {bubbles:!0, composed:!0}));
    $$jscomp$async$this$jscomp$5$$.dispatchEvent(new Event("change", {bubbles:!0}));
    $$jscomp$generator$context$1117217516$28$$.$g$ = 0;
  });
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype, {name:{configurable:!0, enumerable:!0, get:function() {
  var $$jscomp$nullish$tmp56$$;
  return null != ($$jscomp$nullish$tmp56$$ = this.getAttribute("name")) ? $$jscomp$nullish$tmp56$$ : "";
}, set:function($name$jscomp$141$$) {
  this.setAttribute("name", $name$jscomp$141$$);
}}, form:{configurable:!0, enumerable:!0, get:function() {
  return this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].form;
}}, labels:{configurable:!0, enumerable:!0, get:function() {
  return this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].labels;
}}});
$module$contents$google3$third_party$javascript$material$web$internal$aria$delegate_requestUpdateOnAriaChange$$($module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$);
$module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.$addInitializer$(function($instance$jscomp$inline_545$$) {
  $instance$jscomp$inline_545$$.addEventListener("click", function($event$jscomp$inline_546$$) {
    var $$jscomp$inline_547$$, $type$jscomp$inline_548$$, $elementInternals$jscomp$inline_549$$, $$jscomp$inline_550$$, $form$jscomp$inline_551$$;
    return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$inline_552$$) {
      if (1 == $$jscomp$inline_552$$.$g$) {
        return $$jscomp$inline_547$$ = $instance$jscomp$inline_545$$, $type$jscomp$inline_548$$ = $$jscomp$inline_547$$.type, $$jscomp$inline_550$$ = $elementInternals$jscomp$inline_549$$ = $$jscomp$inline_547$$[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$], ($form$jscomp$inline_551$$ = $$jscomp$inline_550$$.form) && "button" !== $type$jscomp$inline_548$$ ? $JSCompiler_StaticMethods_yield$$($$jscomp$inline_552$$, new Promise(function($resolve$jscomp$inline_553$$) {
          setTimeout($resolve$jscomp$inline_553$$);
        }), 2) : $$jscomp$inline_552$$.return();
      }
      if ($event$jscomp$inline_546$$.defaultPrevented) {
        return $$jscomp$inline_552$$.return();
      }
      if ("reset" === $type$jscomp$inline_548$$) {
        return $form$jscomp$inline_551$$.reset(), $$jscomp$inline_552$$.return();
      }
      $form$jscomp$inline_551$$.addEventListener("submit", function($submitEvent$jscomp$inline_554$$) {
        Object.defineProperty($submitEvent$jscomp$inline_554$$, "submitter", {configurable:!0, enumerable:!0, get:function() {
          return $instance$jscomp$inline_545$$;
        }});
      }, {capture:!0, once:!0});
      $elementInternals$jscomp$inline_549$$.setFormValue($instance$jscomp$inline_545$$.value);
      $form$jscomp$inline_551$$.requestSubmit();
      $$jscomp$inline_552$$.$g$ = 0;
    });
  });
});
$module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.formAssociated = !0;
$module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.$shadowRootOptions$ = {mode:"open", delegatesFocus:!0};
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $reflect$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype, "disabled", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $attribute$:"flip-icon-in-rtl"}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype, "flipIconInRtl", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype, "href", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", String)], $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype, "target", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({$attribute$:"aria-label-selected"}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype, "ariaLabelSelected", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype, "toggle", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $reflect$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype, "selected", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", String)], $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype, "type", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({$reflect$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype, "value", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$state_state$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype, "$flipIcon$", void 0);
var $$jscomp$templatelit$m1787091416$0$$ = $$jscomp$createTemplateTagFirstArg$$([":host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start:var(--_container-shape-start-start);--md-focus-ring-shape-start-end:var(--_container-shape-start-end);--md-focus-ring-shape-end-end:var(--_container-shape-end-end);--md-focus-ring-shape-end-start:var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;-webkit-user-select:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media (forced-colors:active){:host([disabled]){--_disabled-icon-opacity:1}}\n"]), 
$module$exports$google3$third_party$javascript$material$web$iconbutton$internal$shared$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$m1787091416$0$$);
var $$jscomp$templatelit$1803585664$0$$ = $$jscomp$createTemplateTagFirstArg$$([":host{--_disabled-icon-color:var(--md-icon-button-disabled-icon-color,var(--md-sys-color-on-surface,#1d1b20));--_disabled-icon-opacity:var(--md-icon-button-disabled-icon-opacity,0.38);--_icon-size:var(--md-icon-button-icon-size,24px);--_selected-focus-icon-color:var(--md-icon-button-selected-focus-icon-color,var(--md-sys-color-primary,#6750a4));--_selected-hover-icon-color:var(--md-icon-button-selected-hover-icon-color,var(--md-sys-color-primary,#6750a4));--_selected-hover-state-layer-color:var(--md-icon-button-selected-hover-state-layer-color,var(--md-sys-color-primary,#6750a4));--_selected-hover-state-layer-opacity:var(--md-icon-button-selected-hover-state-layer-opacity,0.08);--_selected-icon-color:var(--md-icon-button-selected-icon-color,var(--md-sys-color-primary,#6750a4));--_selected-pressed-icon-color:var(--md-icon-button-selected-pressed-icon-color,var(--md-sys-color-primary,#6750a4));--_selected-pressed-state-layer-color:var(--md-icon-button-selected-pressed-state-layer-color,var(--md-sys-color-primary,#6750a4));--_selected-pressed-state-layer-opacity:var(--md-icon-button-selected-pressed-state-layer-opacity,0.12);--_state-layer-height:var(--md-icon-button-state-layer-height,40px);--_state-layer-shape:var(--md-icon-button-state-layer-shape,var(--md-sys-shape-corner-full,9999px));--_state-layer-width:var(--md-icon-button-state-layer-width,40px);--_focus-icon-color:var(--md-icon-button-focus-icon-color,var(--md-sys-color-on-surface-variant,#49454f));--_hover-icon-color:var(--md-icon-button-hover-icon-color,var(--md-sys-color-on-surface-variant,#49454f));--_hover-state-layer-color:var(--md-icon-button-hover-state-layer-color,var(--md-sys-color-on-surface-variant,#49454f));--_hover-state-layer-opacity:var(--md-icon-button-hover-state-layer-opacity,0.08);--_icon-color:var(--md-icon-button-icon-color,var(--md-sys-color-on-surface-variant,#49454f));--_pressed-icon-color:var(--md-icon-button-pressed-icon-color,var(--md-sys-color-on-surface-variant,#49454f));--_pressed-state-layer-color:var(--md-icon-button-pressed-state-layer-color,var(--md-sys-color-on-surface-variant,#49454f));--_pressed-state-layer-opacity:var(--md-icon-button-pressed-state-layer-opacity,0.12);--_container-shape-start-start:0;--_container-shape-start-end:0;--_container-shape-end-end:0;--_container-shape-end-start:0;--_container-height:0;--_container-width:0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start:var(--_state-layer-shape);--md-focus-ring-shape-start-end:var(--_state-layer-shape);--md-focus-ring-shape-end-end:var(--_state-layer-shape);--md-focus-ring-shape-end-start:var(--_state-layer-shape)}.standard{background-color:transparent;color:var(--_icon-color);--md-ripple-hover-color:var(--_hover-state-layer-color);--md-ripple-hover-opacity:var(--_hover-state-layer-opacity);--md-ripple-pressed-color:var(--_pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color:var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity:var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color:var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}\n"]), 
$module$exports$google3$third_party$javascript$material$web$iconbutton$internal$standard$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$1803585664$0$$);
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$iconbutton$icon_button_closure$classdecl$var10$$() {
  return $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$iconbutton$icon_button_closure$classdecl$var10$$, $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$iconbutton$icon_button_closure$classdecl$var10$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$iconbutton$icon_button_closure$classdecl$var10$$.formAssociated = $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.formAssociated;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$iconbutton$icon_button_closure$classdecl$var10$$.prototype.$getRenderClasses$ = function() {
  return Object.assign({}, $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$icon$2dbutton$IconButton$$.prototype.$getRenderClasses$.call(this), {standard:!0});
};
var $module$exports$google3$third_party$javascript$material$web$iconbutton$icon$2dbutton$MdIconButton$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$iconbutton$icon_button_closure$classdecl$var10$$;
$module$exports$google3$third_party$javascript$material$web$iconbutton$icon$2dbutton$MdIconButton$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$iconbutton$internal$shared$2dstyles$styles$$, $module$exports$google3$third_party$javascript$material$web$iconbutton$internal$standard$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$iconbutton$icon$2dbutton$MdIconButton$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-icon-button")], $module$exports$google3$third_party$javascript$material$web$iconbutton$icon$2dbutton$MdIconButton$$);
var $$jscomp$templatelit$1327102130$1$$ = $$jscomp$createTemplateTagFirstArg$$('\n      <div class="col1">\n        <div class="refresh-cell">\n          <md-icon-button\n            aria-label=","\n            title=","\n            @click=",">\n            <md-icon>,</md-icon>\n          </md-icon-button>\n        </div>\n      </div>\n      <div class="col2">\n        <div class="detail-cell title">,</div>\n        <div class="detail-cell creator partner">\n          <span class="sub-detail creator">,</span>\n          <span class="sub-detail pipe">&nbsp;|&nbsp;</span>\n          <span class="sub-detail partner">,</span>\n        </div>\n        <div class="detail-cell credits">,</div>\n      </div>\n    '.split(",")), 
$$jscomp$templatelit$1327102130$2$$ = $$jscomp$createTemplateTagFirstArg$$(['\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        height="24"\n        viewBox="0 -960 960 960"\n        width="24">\n        <path\n          d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />\n      </svg>\n    ']), $$jscomp$templatelit$1327102130$3$$ = 
$$jscomp$createTemplateTagFirstArg$$(['\n        <a\n          class="detail-link"\n          href="', '"\n          data-gacategory="AttributionClicked"\n          data-gaaction="Title">\n          ', "\n        </a>\n      "]), $$jscomp$templatelit$1327102130$4$$ = $$jscomp$createTemplateTagFirstArg$$(['<span class="bare-title">', "</span>"]), $$jscomp$templatelit$1327102130$5$$ = $$jscomp$createTemplateTagFirstArg$$(['\n        <a\n          class="detail-link"\n          href="', '"\n          data-gacategory="AttributionClicked"\n          data-gaaction="Artist">\n          ', 
"\n        </a>\n      "]), $$jscomp$templatelit$1327102130$6$$ = $$jscomp$createTemplateTagFirstArg$$(['<span class="bare-creator">', "</span>"]), $$jscomp$templatelit$1327102130$7$$ = $$jscomp$createTemplateTagFirstArg$$(['\n        <a\n          class="detail-link"\n          href="', '"\n          data-gacategory="AttributionClicked"\n          data-gaaction="Institution">\n          ', "\n        </a>\n      "]), $$jscomp$templatelit$1327102130$8$$ = $$jscomp$createTemplateTagFirstArg$$(['<span class="bare-partner">', 
"</span>"]), $$jscomp$templatelit$1327102130$9$$ = $$jscomp$createTemplateTagFirstArg$$(['\n        <a\n          class="detail-link"\n          href="', '"\n          data-gacategory="AttributionClicked"\n          data-gaaction="ArtProject">\n          ', "\n        </a>\n      "]), $$jscomp$templatelit$1327102130$10$$ = $$jscomp$createTemplateTagFirstArg$$(['<span class="bare-credits">', "</span>"]);
function $blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$() {
  var $$jscomp$super$this$1327102130$0$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.apply(this, arguments) || this;
  $$jscomp$super$this$1327102130$0$$.currentAssetIndex = 0;
  $$jscomp$super$this$1327102130$0$$.titleText = "";
  $$jscomp$super$this$1327102130$0$$.creatorText = "";
  $$jscomp$super$this$1327102130$0$$.partnerText = "";
  $$jscomp$super$this$1327102130$0$$.creditsText = "";
  $$jscomp$super$this$1327102130$0$$.titleUrl = "";
  $$jscomp$super$this$1327102130$0$$.creatorUrl = "";
  $$jscomp$super$this$1327102130$0$$.partnerUrl = "";
  $$jscomp$super$this$1327102130$0$$.creditsUrl = "";
  return $$jscomp$super$this$1327102130$0$$;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$);
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$.$elementStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$elementStyles$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$.$__prepare$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__prepare$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$.$createProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$createProperty$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$.$addInitializer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$addInitializer$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$.$finalize$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalize$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$.prototype.$render$ = function() {
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1327102130$1$$, chrome.i18n.getMessage("change"), chrome.i18n.getMessage("change"), this.$g$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1327102130$2$$), this.titleUrl ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1327102130$3$$, this.titleUrl, 
  this.titleText) : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1327102130$4$$, this.titleText), this.creatorUrl ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1327102130$5$$, this.creatorUrl, this.creatorText) : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1327102130$6$$, this.creatorText), 
  this.partnerUrl ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1327102130$7$$, this.partnerUrl, this.partnerText) : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1327102130$8$$, this.partnerText), this.creditsUrl ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1327102130$9$$, this.creditsUrl, 
  this.creditsText) : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1327102130$10$$, this.creditsText));
};
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$.prototype.$g$ = function() {
  chrome.runtime.sendMessage({type:"rotateImage", payload:{currentAssetIndex:this.currentAssetIndex}});
  $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_sendGoogleAnalyticsEvent$$("rotate_artwork_button_clicked", {});
};
var $module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$ = $blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails_closure$classdecl$var11$$;
$module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$.$styles$ = [$module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$2ecss$styles$$];
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Number}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$.prototype, "currentAssetIndex", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:String}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$.prototype, "titleText", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:String}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$.prototype, "creatorText", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:String}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$.prototype, "partnerText", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:String}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$.prototype, "creditsText", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:String}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$.prototype, "titleUrl", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:String}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$.prototype, "creatorUrl", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:String}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$.prototype, "partnerUrl", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:String}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$.prototype, "creditsUrl", void 0);
$module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("gac-art-assetdetails")], $module$exports$google3$cultural$integrations$chromeextensions$arttab$assetdetails$assetdetails$Assetdetails$$);
var $module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$2ecss$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$(['@font-face{font-family:Google Sans;font-style:normal;font-weight:400;src:local("Google Sans"),local("Google-Sans"),url(chrome-extension://__MSG_@@extension_id__/fonts/GoogleSans-Regular.ttf) format("truetype")}@font-face{font-family:Google Sans;font-style:normal;font-weight:700;src:local("Google Sans"),local("Google-Sans"),url(chrome-extension://__MSG_@@extension_id__/fonts/GoogleSans-Bold.ttf) format("truetype")}@font-face{font-display:block;font-family:Material Icons;font-style:normal;font-weight:400;src:url(chrome-extension://__MSG_@@extension_id__/fonts/mat_icons.woff2) format("woff2")}body{-webkit-box-align:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-moz-box-orient:horizontal;-moz-box-direction:normal;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-align-items:stretch;align-items:stretch;background-color:#000;border:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;font-family:Google Sans,Arial,Helvetica,sans-serif;font-size:16px;-webkit-justify-content:center;justify-content:center;line-height:1.6;margin:0;min-height:100vh;min-width:640px;overflow:hidden;padding:0}:host{-webkit-box-align:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;-ms-flex-item-align:stretch;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-moz-box-orient:horizontal;-moz-box-direction:normal;-webkit-align-items:stretch;align-items:stretch;-webkit-align-self:stretch;align-self:stretch;background-position:50%;background-repeat:no-repeat;background-size:cover;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;place-content:space-between space-between;width:100%}.load{color:#fff;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.gacant-b,.gacant-t,.load{-webkit-box-flex:1;-moz-box-flex:1;width:100%}.gacant-b,.gacant-t{-webkit-box-align:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-moz-box-orient:horizontal;-moz-box-direction:normal;-webkit-box-pack:justify;-moz-box-pack:justify;-ms-flex-pack:justify;-webkit-align-items:stretch;align-items:stretch;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-justify-content:space-between;justify-content:space-between;opacity:1;-webkit-transition:opacity .1s linear;transition:opacity .1s linear}.gacant-b.hideui,.gacant-t.hideui{opacity:0}md-icon-button{margin:20px}md-icon-button[hidden]{display:none}md-icon{color:#fff}.gacant-b{background:-webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(33%,rgba(0,0,0,.33)),to(rgba(0,0,0,.66)));background:-webkit-linear-gradient(top,transparent,rgba(0,0,0,.33) 33%,rgba(0,0,0,.66));background:linear-gradient(180deg,transparent,rgba(0,0,0,.33) 33%,rgba(0,0,0,.66))}.gacant-bl,.gacant-br,.gacant-tl,.gacant-tr{-webkit-box-flex:1;-moz-box-flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.gacant-bl,.gacant-tl{-webkit-box-pack:start;-moz-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.gacant-br,.gacant-tr{-webkit-box-pack:end;-moz-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.gacant-tl,.gacant-tr{-webkit-box-align:start;-moz-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start}.gacant-bl,.gacant-br{-webkit-box-align:end;-moz-box-align:end;-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end}']);
function $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_writeData$$($key$jscomp$110$$, $data$jscomp$90$$) {
  var $local$$ = !0;
  $local$$ = void 0 === $local$$ ? !1 : $local$$;
  var $$jscomp$compprop80$$, $$jscomp$compprop79$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$309632135$0$$) {
    if ($local$$) {
      return $$jscomp$compprop79$$ = {}, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$309632135$0$$, chrome.storage.local.set(($$jscomp$compprop79$$[$key$jscomp$110$$] = $data$jscomp$90$$, $$jscomp$compprop79$$)), 0);
    }
    $$jscomp$compprop80$$ = {};
    return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$309632135$0$$, chrome.storage.sync.set(($$jscomp$compprop80$$[$key$jscomp$110$$] = $data$jscomp$90$$, $$jscomp$compprop80$$)), 0);
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_readData$$($key$jscomp$111$$, $local$jscomp$1$$) {
  $local$jscomp$1$$ = void 0 === $local$jscomp$1$$ ? !1 : $local$jscomp$1$$;
  var $data$jscomp$91$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$309632135$1$$) {
    switch($$jscomp$generator$context$309632135$1$$.$g$) {
      case 1:
        return $local$jscomp$1$$ ? $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$309632135$1$$, chrome.storage.local.get([$key$jscomp$111$$]), 5) : $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$309632135$1$$, chrome.storage.sync.get([$key$jscomp$111$$]), 4);
      case 4:
        $data$jscomp$91$$ = $$jscomp$generator$context$309632135$1$$.$i$;
        $$jscomp$generator$context$309632135$1$$.$g$ = 3;
        break;
      case 5:
        $data$jscomp$91$$ = $$jscomp$generator$context$309632135$1$$.$i$;
      case 3:
        return $$jscomp$generator$context$309632135$1$$.return($data$jscomp$91$$ ? $data$jscomp$91$$[$key$jscomp$111$$] : "");
    }
  });
}
;var $$jscomp$compprop81$$ = {}, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_DEFAULT_USER_SETTINGS$$ = ($$jscomp$compprop81$$.turnoverAlways = !1, $$jscomp$compprop81$$.appsButtonHidden = !1, $$jscomp$compprop81$$.defaultNewTabButtonHidden = !1, $$jscomp$compprop81$$.topSitesButtonHidden = !1, $$jscomp$compprop81$$);
function $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_getUserSettings$$() {
  var $userSettings$$, $$jscomp$iter$114$$, $$jscomp$key$680228004$16$key$jscomp$113$$, $key$jscomp$113$$, $storedValueStr$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$680228004$19$$) {
    switch($$jscomp$generator$context$680228004$19$$.$g$) {
      case 1:
        var $res$jscomp$inline_394$$ = {}, $key$jscomp$inline_395$$;
        for ($key$jscomp$inline_395$$ in $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_DEFAULT_USER_SETTINGS$$) {
          $res$jscomp$inline_394$$[$key$jscomp$inline_395$$] = $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_DEFAULT_USER_SETTINGS$$[$key$jscomp$inline_395$$];
        }
        $userSettings$$ = $res$jscomp$inline_394$$;
        $$jscomp$iter$114$$ = $$jscomp$makeIterator$$(Object.keys($userSettings$$));
        $$jscomp$key$680228004$16$key$jscomp$113$$ = $$jscomp$iter$114$$.next();
      case 2:
        if ($$jscomp$key$680228004$16$key$jscomp$113$$.done) {
          $$jscomp$generator$context$680228004$19$$.$g$ = 4;
          break;
        }
        $key$jscomp$113$$ = $$jscomp$key$680228004$16$key$jscomp$113$$.value;
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$680228004$19$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_readData$$($key$jscomp$113$$), 5);
      case 5:
        ($storedValueStr$$ = $$jscomp$generator$context$680228004$19$$.$i$) && ($userSettings$$[$key$jscomp$113$$] = JSON.parse($storedValueStr$$));
        $$jscomp$key$680228004$16$key$jscomp$113$$ = $$jscomp$iter$114$$.next();
        $$jscomp$generator$context$680228004$19$$.$g$ = 2;
        break;
      case 4:
        return $$jscomp$generator$context$680228004$19$$.return($userSettings$$);
    }
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_dateStrToNumber$$($dateNum_dateStr$jscomp$1$$) {
  $dateNum_dateStr$jscomp$1$$ = Number($dateNum_dateStr$jscomp$1$$);
  isNaN($dateNum_dateStr$jscomp$1$$) && ($dateNum_dateStr$jscomp$1$$ = 0);
  return Math.floor($dateNum_dateStr$jscomp$1$$);
}
function $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeCurrentAssetIndex$$($indexToSave$$) {
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$680228004$21$$) {
    return 1 == $$jscomp$generator$context$680228004$21$$.$g$ ? $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$680228004$21$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_writeData$$("indexWriteDate", $JSCompiler_StaticMethods_JSC$3723_toIsoString$$(new $goog$date$Date$$(), !1, !1)), 2) : $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$680228004$21$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_writeData$$("currentAssetIndex", 
    JSON.stringify($indexToSave$$)), 0);
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_getIndexWriteDate$$() {
  var $storedValueStr$jscomp$1$$, $dateStr$jscomp$2$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$680228004$22$$) {
    if (1 == $$jscomp$generator$context$680228004$22$$.$g$) {
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$680228004$22$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_readData$$("indexWriteDate", !0), 2);
    }
    $storedValueStr$jscomp$1$$ = $$jscomp$generator$context$680228004$22$$.$i$;
    if (!$storedValueStr$jscomp$1$$) {
      return $$jscomp$generator$context$680228004$22$$.return($module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_dateStrToNumber$$($JSCompiler_StaticMethods_JSC$3723_toIsoString$$(new $goog$date$Date$$(), !1, !1)));
    }
    $dateStr$jscomp$2$$ = JSON.parse($storedValueStr$jscomp$1$$);
    return $$jscomp$generator$context$680228004$22$$.return($module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_dateStrToNumber$$($dateStr$jscomp$2$$));
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_getCurrentAssetIndex$$() {
  var $storedValueStr$jscomp$2$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$680228004$23$$) {
    return 1 == $$jscomp$generator$context$680228004$23$$.$g$ ? $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$680228004$23$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_readData$$("currentAssetIndex", !0), 2) : ($storedValueStr$jscomp$2$$ = $$jscomp$generator$context$680228004$23$$.$i$) ? $$jscomp$generator$context$680228004$23$$.return(JSON.parse($storedValueStr$jscomp$2$$)) : $$jscomp$generator$context$680228004$23$$.return(0);
  });
}
;var $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_CACHE_OPTIONS$$ = {ignoreMethod:!0, ignoreSearch:!0, ignoreVary:!0}, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_DATA_REQUEST_OPTIONS$$ = {method:"GET", headers:{Accept:"application/json"}}, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_IMAGE_REQUEST_OPTIONS$$ = {method:"GET", headers:{Accept:"image/*"}}, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$ = 
[];
function $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetCount$$() {
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$142_JSCompiler_temp$jscomp$143$$) {
    1 == $$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$142_JSCompiler_temp$jscomp$143$$.$g$ ? 0 !== $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$.length ? ($$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$142_JSCompiler_temp$jscomp$143$$.$g$ = 2, $$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$142_JSCompiler_temp$jscomp$143$$ = void 0) : $$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$142_JSCompiler_temp$jscomp$143$$ = 
    $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$142_JSCompiler_temp$jscomp$143$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncData$$(), 2) : $$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$142_JSCompiler_temp$jscomp$143$$ = $$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$142_JSCompiler_temp$jscomp$143$$.return($module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$.length);
    return $$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$142_JSCompiler_temp$jscomp$143$$;
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_getAssetData$$($index$jscomp$116$$) {
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$633210185$15_JSCompiler_temp$jscomp$144$$) {
    if (1 == $$jscomp$generator$context$633210185$15_JSCompiler_temp$jscomp$144$$.$g$) {
      return $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$[$index$jscomp$116$$].data_url ? ($$jscomp$generator$context$633210185$15_JSCompiler_temp$jscomp$144$$.$g$ = 2, $$jscomp$generator$context$633210185$15_JSCompiler_temp$jscomp$144$$ = void 0) : $$jscomp$generator$context$633210185$15_JSCompiler_temp$jscomp$144$$ = $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$15_JSCompiler_temp$jscomp$144$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_loadImage$$($index$jscomp$116$$), 
      2), $$jscomp$generator$context$633210185$15_JSCompiler_temp$jscomp$144$$;
    }
    var $assetData$jscomp$inline_410$$ = $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$[$index$jscomp$116$$];
    $assetData$jscomp$inline_410$$.artist_link && ($assetData$jscomp$inline_410$$.artist_link = $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_composeLink$$($assetData$jscomp$inline_410$$.artist_link));
    $assetData$jscomp$inline_410$$.attribution_link && ($assetData$jscomp$inline_410$$.attribution_link = $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_composeLink$$($assetData$jscomp$inline_410$$.attribution_link));
    $assetData$jscomp$inline_410$$.link && ($assetData$jscomp$inline_410$$.link = $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_composeLink$$($assetData$jscomp$inline_410$$.link));
    return $$jscomp$generator$context$633210185$15_JSCompiler_temp$jscomp$144$$.return($module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$[$index$jscomp$116$$]);
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_composeLink$$($link$jscomp$1$$) {
  return $link$jscomp$1$$.startsWith("http") ? $link$jscomp$1$$ : "https://artsandculture.google.com/" + $link$jscomp$1$$ + "?" + $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_getUtmParams$$();
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncData$$() {
  var $cache$jscomp$1$$, $cachedResponse$$, $fetchResponse$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$633210185$16$$) {
    switch($$jscomp$generator$context$633210185$16$$.$g$) {
      case 1:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$16$$, self.caches.open("gac_chromeextensions"), 2);
      case 2:
        return $cache$jscomp$1$$ = $$jscomp$generator$context$633210185$16$$.$i$, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$16$$, $cache$jscomp$1$$.match("https://www.gstatic.com/culturalinstitute/tabext/imax_2_2.json", $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_CACHE_OPTIONS$$), 3);
      case 3:
        if ($cachedResponse$$ = $$jscomp$generator$context$633210185$16$$.$i$) {
          $$jscomp$generator$context$633210185$16$$.$g$ = 4;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$16$$, fetch("https://www.gstatic.com/culturalinstitute/tabext/imax_2_2.json", $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_DATA_REQUEST_OPTIONS$$), 5);
      case 5:
        $fetchResponse$$ = $$jscomp$generator$context$633210185$16$$.$i$;
        if (!$fetchResponse$$.ok) {
          return console.error($fetchResponse$$.statusText), $$jscomp$generator$context$633210185$16$$.return(!1);
        }
        $cachedResponse$$ = $fetchResponse$$.clone();
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$16$$, $cache$jscomp$1$$.put("https://www.gstatic.com/culturalinstitute/tabext/imax_2_2.json", $fetchResponse$$), 4);
      case 4:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$16$$, $cachedResponse$$.json(), 7);
      case 7:
        return $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$ = $$jscomp$generator$context$633210185$16$$.$i$, 0 === $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$.length ? (console.error("Asset data is empty"), $$jscomp$generator$context$633210185$16$$.return(!1)) : $$jscomp$generator$context$633210185$16$$.return(!0);
    }
  });
}
var $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_loadImageTestMode$$ = !1;
function $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_loadImage$$($imageId$$) {
  var $assetData$jscomp$1$$, $imageUrl$$, $cache$jscomp$2$$, $cachedResponse$jscomp$1$$, $fetchResponse$jscomp$1$$, $JSCompiler_temp_const$jscomp$128$$, $dataUrl$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$633210185$17$$) {
    switch($$jscomp$generator$context$633210185$17$$.$g$) {
      case 1:
        if ($module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_loadImageTestMode$$) {
          return $$jscomp$generator$context$633210185$17$$.return(!0);
        }
        if (0 !== $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$.length) {
          $$jscomp$generator$context$633210185$17$$.$g$ = 2;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$17$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncData$$(), 2);
      case 2:
        if (0 > $imageId$$ || $imageId$$ >= $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$.length) {
          return console.error("ImageID " + $imageId$$ + "/" + ($module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$.length - 1) + " is invalid"), $$jscomp$generator$context$633210185$17$$.return(!1);
        }
        $assetData$jscomp$1$$ = $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$[$imageId$$];
        $imageUrl$$ = $assetData$jscomp$1$$.image + "=s1920-rw";
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$17$$, self.caches.open("gac_chromeextensions"), 4);
      case 4:
        return $cache$jscomp$2$$ = $$jscomp$generator$context$633210185$17$$.$i$, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$17$$, $cache$jscomp$2$$.match($imageUrl$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_CACHE_OPTIONS$$), 5);
      case 5:
        if ($cachedResponse$jscomp$1$$ = $$jscomp$generator$context$633210185$17$$.$i$) {
          $$jscomp$generator$context$633210185$17$$.$g$ = 6;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$17$$, fetch($imageUrl$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_IMAGE_REQUEST_OPTIONS$$), 7);
      case 7:
        $fetchResponse$jscomp$1$$ = $$jscomp$generator$context$633210185$17$$.$i$;
        if (!$fetchResponse$jscomp$1$$.ok) {
          return console.error($fetchResponse$jscomp$1$$.statusText), $$jscomp$generator$context$633210185$17$$.return(!1);
        }
        $cachedResponse$jscomp$1$$ = $fetchResponse$jscomp$1$$.clone();
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$17$$, $cache$jscomp$2$$.put($imageUrl$$, $fetchResponse$jscomp$1$$), 6);
      case 6:
        return $JSCompiler_temp_const$jscomp$128$$ = $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_blobToDataUrl$$, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$17$$, $cachedResponse$jscomp$1$$.blob(), 10);
      case 10:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$17$$, $JSCompiler_temp_const$jscomp$128$$($$jscomp$generator$context$633210185$17$$.$i$), 9);
      case 9:
        return $dataUrl$$ = $$jscomp$generator$context$633210185$17$$.$i$, 0 > $imageId$$ || $imageId$$ >= $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$.length ? console.error("ImageID " + $imageId$$ + " is invalid") : $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$[$imageId$$].data_url = $dataUrl$$, $$jscomp$generator$context$633210185$17$$.return(!0);
    }
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_blobToDataUrl$$($blob$jscomp$14$$) {
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$633210185$18$$) {
    return $$jscomp$generator$context$633210185$18$$.return(new Promise(function($resolve$jscomp$12$$, $reject$jscomp$9$$) {
      var $reader$$ = new FileReader();
      $reader$$.onload = function() {
        $resolve$jscomp$12$$($reader$$.result);
      };
      $reader$$.onerror = function() {
        $reject$jscomp$9$$($reader$$.error);
      };
      $reader$$.onabort = function() {
        $reject$jscomp$9$$(Error("Read aborted"));
      };
      $reader$$.readAsDataURL($blob$jscomp$14$$);
    }));
  });
}
;var $$jscomp$optchain$tmpm947182501$0$$, $$jscomp$optchain$tmpm947182501$1$$, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers_wrap$$ = (null == ($$jscomp$optchain$tmpm947182501$0$$ = window.ShadyDOM) ? 0 : $$jscomp$optchain$tmpm947182501$0$$.inUse) && !0 === (null == ($$jscomp$optchain$tmpm947182501$1$$ = window.ShadyDOM) ? void 0 : $$jscomp$optchain$tmpm947182501$1$$.noPatch) ? window.ShadyDOM.wrap : function($node$jscomp$25$$) {
  return $node$jscomp$25$$;
};
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$insertPart$$($containerPart_start$jscomp$18$$, $refNode$jscomp$8_refPart$$, $part$jscomp$9_startNode$jscomp$2$$) {
  var $container$jscomp$4_endNode$jscomp$3$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers_wrap$$($containerPart_start$jscomp$18$$.$_$startNode$).parentNode;
  $refNode$jscomp$8_refPart$$ = void 0 === $refNode$jscomp$8_refPart$$ ? $containerPart_start$jscomp$18$$.$_$endNode$ : $refNode$jscomp$8_refPart$$.$_$startNode$;
  if (void 0 === $part$jscomp$9_startNode$jscomp$2$$) {
    $part$jscomp$9_startNode$jscomp$2$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers_wrap$$($container$jscomp$4_endNode$jscomp$3$$).insertBefore(document.createComment(""), $refNode$jscomp$8_refPart$$), $container$jscomp$4_endNode$jscomp$3$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers_wrap$$($container$jscomp$4_endNode$jscomp$3$$).insertBefore(document.createComment(""), $refNode$jscomp$8_refPart$$), 
    $part$jscomp$9_startNode$jscomp$2$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$_$0LH$_ChildPart$$($part$jscomp$9_startNode$jscomp$2$$, $container$jscomp$4_endNode$jscomp$3$$, $containerPart_start$jscomp$18$$, $containerPart_start$jscomp$18$$.options);
  } else {
    var $endNode$jscomp$4$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers_wrap$$($part$jscomp$9_startNode$jscomp$2$$.$_$endNode$).nextSibling, $oldParent$$ = $part$jscomp$9_startNode$jscomp$2$$.$g$, $parentChanged$$ = $oldParent$$ !== $containerPart_start$jscomp$18$$;
    if ($parentChanged$$) {
      var $$jscomp$optchain$tmpm947182501$8_n$jscomp$19$$, $$jscomp$optchain$tmpm947182501$9$$;
      null == ($$jscomp$optchain$tmpm947182501$9$$ = ($$jscomp$optchain$tmpm947182501$8_n$jscomp$19$$ = $part$jscomp$9_startNode$jscomp$2$$).$s$) || $$jscomp$optchain$tmpm947182501$9$$.call($$jscomp$optchain$tmpm947182501$8_n$jscomp$19$$, $containerPart_start$jscomp$18$$);
      $part$jscomp$9_startNode$jscomp$2$$.$g$ = $containerPart_start$jscomp$18$$;
      var $newConnectionState$$;
      void 0 !== $part$jscomp$9_startNode$jscomp$2$$.$j$ && ($newConnectionState$$ = $containerPart_start$jscomp$18$$.$_$isConnected$) !== $oldParent$$.$_$isConnected$ && $part$jscomp$9_startNode$jscomp$2$$.$j$($newConnectionState$$);
    }
    if ($endNode$jscomp$4$$ !== $refNode$jscomp$8_refPart$$ || $parentChanged$$) {
      for ($containerPart_start$jscomp$18$$ = $part$jscomp$9_startNode$jscomp$2$$.$_$startNode$; $containerPart_start$jscomp$18$$ !== $endNode$jscomp$4$$;) {
        $$jscomp$optchain$tmpm947182501$8_n$jscomp$19$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers_wrap$$($containerPart_start$jscomp$18$$).nextSibling, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers_wrap$$($container$jscomp$4_endNode$jscomp$3$$).insertBefore($containerPart_start$jscomp$18$$, $refNode$jscomp$8_refPart$$), $containerPart_start$jscomp$18$$ = $$jscomp$optchain$tmpm947182501$8_n$jscomp$19$$;
      }
    }
  }
  return $part$jscomp$9_startNode$jscomp$2$$;
}
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$setChildPartValue$$($part$jscomp$10$$, $value$jscomp$252$$) {
  $part$jscomp$10$$.$_$setValue$($value$jscomp$252$$, $part$jscomp$10$$);
  return $part$jscomp$10$$;
}
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers_RESET_VALUE$$ = {};
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$removePart$$($end$jscomp$14_part$jscomp$13$$) {
  var $$jscomp$optchain$tmpm947182501$11_start$jscomp$19$$;
  null == ($$jscomp$optchain$tmpm947182501$11_start$jscomp$19$$ = $end$jscomp$14_part$jscomp$13$$.$j$) || $$jscomp$optchain$tmpm947182501$11_start$jscomp$19$$.call($end$jscomp$14_part$jscomp$13$$, !1, !0);
  $$jscomp$optchain$tmpm947182501$11_start$jscomp$19$$ = $end$jscomp$14_part$jscomp$13$$.$_$startNode$;
  for ($end$jscomp$14_part$jscomp$13$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers_wrap$$($end$jscomp$14_part$jscomp$13$$.$_$endNode$).nextSibling; $$jscomp$optchain$tmpm947182501$11_start$jscomp$19$$ !== $end$jscomp$14_part$jscomp$13$$;) {
    var $n$jscomp$20$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers_wrap$$($$jscomp$optchain$tmpm947182501$11_start$jscomp$19$$).nextSibling;
    $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers_wrap$$($$jscomp$optchain$tmpm947182501$11_start$jscomp$19$$).remove();
    $$jscomp$optchain$tmpm947182501$11_start$jscomp$19$$ = $n$jscomp$20$$;
  }
}
;function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$repeat_generateMap$$($list$jscomp$1$$, $i$jscomp$131_start$jscomp$20$$, $end$jscomp$15$$) {
  for (var $map$jscomp$9$$ = new Map(); $i$jscomp$131_start$jscomp$20$$ <= $end$jscomp$15$$; $i$jscomp$131_start$jscomp$20$$++) {
    $map$jscomp$9$$.set($list$jscomp$1$$[$i$jscomp$131_start$jscomp$20$$], $i$jscomp$131_start$jscomp$20$$);
  }
  return $map$jscomp$9$$;
}
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$repeat$RepeatDirective$$($partInfo$jscomp$1$$) {
  if (2 !== $partInfo$jscomp$1$$.type) {
    throw Error("repeat() can only be used in text expressions");
  }
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$repeat$RepeatDirective$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$Directive$$);
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$repeat$RepeatDirective$$.prototype.$j$ = function($$jscomp$iter$115_items$jscomp$5$$, $keyFnOrTemplate_keys$jscomp$2$$, $template$jscomp$10$$) {
  var $keyFn$jscomp$1$$;
  void 0 === $template$jscomp$10$$ ? $template$jscomp$10$$ = $keyFnOrTemplate_keys$jscomp$2$$ : void 0 !== $keyFnOrTemplate_keys$jscomp$2$$ && ($keyFn$jscomp$1$$ = $keyFnOrTemplate_keys$jscomp$2$$);
  $keyFnOrTemplate_keys$jscomp$2$$ = [];
  var $values$jscomp$24$$ = [], $index$jscomp$118$$ = 0;
  $$jscomp$iter$115_items$jscomp$5$$ = $$jscomp$makeIterator$$($$jscomp$iter$115_items$jscomp$5$$);
  for (var $$jscomp$key$1581773308$8$item$jscomp$30_item$jscomp$30$$ = $$jscomp$iter$115_items$jscomp$5$$.next(); !$$jscomp$key$1581773308$8$item$jscomp$30_item$jscomp$30$$.done; $$jscomp$key$1581773308$8$item$jscomp$30_item$jscomp$30$$ = $$jscomp$iter$115_items$jscomp$5$$.next()) {
    $$jscomp$key$1581773308$8$item$jscomp$30_item$jscomp$30$$ = $$jscomp$key$1581773308$8$item$jscomp$30_item$jscomp$30$$.value, $keyFnOrTemplate_keys$jscomp$2$$[$index$jscomp$118$$] = $keyFn$jscomp$1$$ ? $keyFn$jscomp$1$$($$jscomp$key$1581773308$8$item$jscomp$30_item$jscomp$30$$, $index$jscomp$118$$) : $index$jscomp$118$$, $values$jscomp$24$$[$index$jscomp$118$$] = $template$jscomp$10$$($$jscomp$key$1581773308$8$item$jscomp$30_item$jscomp$30$$, $index$jscomp$118$$), $index$jscomp$118$$++;
  }
  return {values:$values$jscomp$24$$, keys:$keyFnOrTemplate_keys$jscomp$2$$};
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$repeat$RepeatDirective$$.prototype.$render$ = function($items$jscomp$6$$, $keyFnOrTemplate$jscomp$1$$, $template$jscomp$11$$) {
  return this.$j$($items$jscomp$6$$, $keyFnOrTemplate$jscomp$1$$, $template$jscomp$11$$).values;
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$repeat$RepeatDirective$$.prototype.update = function($containerPart$jscomp$1$$, $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$) {
  $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$ = $$jscomp$makeIterator$$($$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$);
  var $items__tsickle_destructured_1_newValues$$ = $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$.next().value, $$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$ = $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$.next().value, $oldHead_template__tsickle_destructured_3$$ = $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$.next().value;
  $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$ = $containerPart$jscomp$1$$.$_$committedValue$;
  $$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$ = this.$j$($items__tsickle_destructured_1_newValues$$, $$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$, $oldHead_template__tsickle_destructured_3$$);
  $items__tsickle_destructured_1_newValues$$ = $$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$.values;
  $$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$ = $$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$.keys;
  if (!Array.isArray($$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$)) {
    return this.$i$ = $$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$, $items__tsickle_destructured_1_newValues$$;
  }
  var $$jscomp$nullish$tmp57_newParts$$, $oldKeys$$ = null != ($$jscomp$nullish$tmp57_newParts$$ = this.$i$) ? $$jscomp$nullish$tmp57_newParts$$ : this.$i$ = [];
  $$jscomp$nullish$tmp57_newParts$$ = [];
  $oldHead_template__tsickle_destructured_3$$ = 0;
  for (var $oldTail$$ = $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$.length - 1, $newHead$$ = 0, $newTail$$ = $items__tsickle_destructured_1_newValues$$.length - 1; $oldHead_template__tsickle_destructured_3$$ <= $oldTail$$ && $newHead$$ <= $newTail$$;) {
    if (null === $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldHead_template__tsickle_destructured_3$$]) {
      $oldHead_template__tsickle_destructured_3$$++;
    } else if (null === $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldTail$$]) {
      $oldTail$$--;
    } else if ($oldKeys$$[$oldHead_template__tsickle_destructured_3$$] === $$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$[$newHead$$]) {
      $$jscomp$nullish$tmp57_newParts$$[$newHead$$] = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$setChildPartValue$$($$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldHead_template__tsickle_destructured_3$$], $items__tsickle_destructured_1_newValues$$[$newHead$$]), $oldHead_template__tsickle_destructured_3$$++, $newHead$$++;
    } else if ($oldKeys$$[$oldTail$$] === $$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$[$newTail$$]) {
      $$jscomp$nullish$tmp57_newParts$$[$newTail$$] = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$setChildPartValue$$($$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldTail$$], $items__tsickle_destructured_1_newValues$$[$newTail$$]), $oldTail$$--, $newTail$$--;
    } else if ($oldKeys$$[$oldHead_template__tsickle_destructured_3$$] === $$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$[$newTail$$]) {
      $$jscomp$nullish$tmp57_newParts$$[$newTail$$] = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$setChildPartValue$$($$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldHead_template__tsickle_destructured_3$$], $items__tsickle_destructured_1_newValues$$[$newTail$$]), $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$insertPart$$($containerPart$jscomp$1$$, $$jscomp$nullish$tmp57_newParts$$[$newTail$$ + 
      1], $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldHead_template__tsickle_destructured_3$$]), $oldHead_template__tsickle_destructured_3$$++, $newTail$$--;
    } else if ($oldKeys$$[$oldTail$$] === $$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$[$newHead$$]) {
      $$jscomp$nullish$tmp57_newParts$$[$newHead$$] = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$setChildPartValue$$($$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldTail$$], $items__tsickle_destructured_1_newValues$$[$newHead$$]), $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$insertPart$$($containerPart$jscomp$1$$, $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldHead_template__tsickle_destructured_3$$], 
      $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldTail$$]), $oldTail$$--, $newHead$$++;
    } else {
      if (void 0 === $newKeyToIndexMap_newPart$jscomp$1_oldPart$jscomp$1$$) {
        var $newKeyToIndexMap_newPart$jscomp$1_oldPart$jscomp$1$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$repeat_generateMap$$($$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$, $newHead$$, $newTail$$);
        var $oldKeyToIndexMap$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$repeat_generateMap$$($oldKeys$$, $oldHead_template__tsickle_destructured_3$$, $oldTail$$);
      }
      if ($newKeyToIndexMap_newPart$jscomp$1_oldPart$jscomp$1$$.has($oldKeys$$[$oldHead_template__tsickle_destructured_3$$])) {
        if ($newKeyToIndexMap_newPart$jscomp$1_oldPart$jscomp$1$$.has($oldKeys$$[$oldTail$$])) {
          var $newPart_oldIndex$$ = $oldKeyToIndexMap$$.get($$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$[$newHead$$]), $oldPart$$ = void 0 !== $newPart_oldIndex$$ ? $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$newPart_oldIndex$$] : null;
          null === $oldPart$$ ? ($newPart_oldIndex$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$insertPart$$($containerPart$jscomp$1$$, $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldHead_template__tsickle_destructured_3$$]), $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$setChildPartValue$$($newPart_oldIndex$$, $items__tsickle_destructured_1_newValues$$[$newHead$$]), 
          $$jscomp$nullish$tmp57_newParts$$[$newHead$$] = $newPart_oldIndex$$) : ($$jscomp$nullish$tmp57_newParts$$[$newHead$$] = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$setChildPartValue$$($oldPart$$, $items__tsickle_destructured_1_newValues$$[$newHead$$]), $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$insertPart$$($containerPart$jscomp$1$$, $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldHead_template__tsickle_destructured_3$$], 
          $oldPart$$), $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$newPart_oldIndex$$] = null);
          $newHead$$++;
        } else {
          $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$removePart$$($$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldTail$$]), $oldTail$$--;
        }
      } else {
        $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$removePart$$($$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldHead_template__tsickle_destructured_3$$]), $oldHead_template__tsickle_destructured_3$$++;
      }
    }
  }
  for (; $newHead$$ <= $newTail$$;) {
    $newKeyToIndexMap_newPart$jscomp$1_oldPart$jscomp$1$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$insertPart$$($containerPart$jscomp$1$$, $$jscomp$nullish$tmp57_newParts$$[$newTail$$ + 1]), $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$setChildPartValue$$($newKeyToIndexMap_newPart$jscomp$1_oldPart$jscomp$1$$, $items__tsickle_destructured_1_newValues$$[$newHead$$]), $$jscomp$nullish$tmp57_newParts$$[$newHead$$++] = 
    $newKeyToIndexMap_newPart$jscomp$1_oldPart$jscomp$1$$;
  }
  for (; $oldHead_template__tsickle_destructured_3$$ <= $oldTail$$;) {
    $newKeyToIndexMap_newPart$jscomp$1_oldPart$jscomp$1$$ = $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$[$oldHead_template__tsickle_destructured_3$$++], null !== $newKeyToIndexMap_newPart$jscomp$1_oldPart$jscomp$1$$ && $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers$removePart$$($newKeyToIndexMap_newPart$jscomp$1_oldPart$jscomp$1$$);
  }
  this.$i$ = $$jscomp$destructuring$var55_keyFnOrTemplate__tsickle_destructured_2_newKeys$$;
  $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$ = $$jscomp$nullish$tmp57_newParts$$;
  $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$ = void 0 === $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$ ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$2dhelpers_RESET_VALUE$$ : $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$;
  $containerPart$jscomp$1$$.$_$committedValue$ = $$jscomp$destructuring$var53_$jscomp$destructuring$var54_oldParts_value$jscomp$inline_425$$;
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$;
};
var $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$repeat$repeat$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directive$directive$$($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$repeat$RepeatDirective$$);
var $$jscomp$templatelit$m465202584$0$$ = $$jscomp$createTemplateTagFirstArg$$([':host{border-start-start-radius:var(--md-dialog-container-shape-start-start,var(--md-dialog-container-shape,var(--md-sys-shape-corner-extra-large,28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end,var(--md-dialog-container-shape,var(--md-sys-shape-corner-extra-large,28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end,var(--md-dialog-container-shape,var(--md-sys-shape-corner-extra-large,28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start,var(--md-dialog-container-shape,var(--md-sys-shape-corner-extra-large,28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content}dialog{background:transparent;border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim,#000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color,var(--md-sys-color-on-surface,#1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font,var(--md-sys-typescale-headline-small-font,var(--md-ref-typeface-brand,Roboto)));font-size:var(--md-dialog-headline-size,var(--md-sys-typescale-headline-small-size,1.5rem));line-height:var(--md-dialog-headline-line-height,var(--md-sys-typescale-headline-small-line-height,2rem));font-weight:var(--md-dialog-headline-weight,var(--md-sys-typescale-headline-small-weight,var(--md-ref-typeface-weight-regular,400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color,var(--md-sys-color-secondary,#625b71));fill:currentColor;font-size:var(--md-dialog-icon-size,24px);margin-top:24px;height:var(--md-dialog-icon-size,24px);width:var(--md-dialog-icon-size,24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container:before{background:var(--md-dialog-container-color,var(--md-sys-color-surface-container-high,#ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color,var(--md-sys-color-on-surface-variant,#49454f));font-family:var(--md-dialog-supporting-text-font,var(--md-sys-typescale-body-medium-font,var(--md-ref-typeface-plain,Roboto)));font-size:var(--md-dialog-supporting-text-size,var(--md-sys-typescale-body-medium-size,.875rem));line-height:var(--md-dialog-supporting-text-line-height,var(--md-sys-typescale-body-medium-line-height,1.25rem));font-weight:var(--md-dialog-supporting-text-weight,var(--md-sys-typescale-body-medium-weight,var(--md-ref-typeface-weight-regular,400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-actions.show-bottom-divider .actions md-divider,.has-headline.show-top-divider .headline md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media (forced-colors:active){dialog{outline:2px solid WindowText}}\n']), 
$module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$m465202584$0$$);
var $module$exports$google3$third_party$javascript$material$web$dialog$internal$animations$DIALOG_DEFAULT_OPEN_ANIMATION$$ = {$dialog$:[[[{transform:"translateY(-50px)"}, {transform:"translateY(0)"}], {duration:500, easing:"cubic-bezier(.3,0,0,1)"}]], $scrim$:[[[{opacity:0}, {opacity:.32}], {duration:500, easing:"linear"}]], $container$:[[[{opacity:0}, {opacity:1}], {duration:50, easing:"linear", pseudoElement:"::before"}], [[{height:"35%"}, {height:"100%"}], {duration:500, easing:"cubic-bezier(.3,0,0,1)", 
pseudoElement:"::before"}]], $headline$:[[[{opacity:0}, {opacity:0, offset:.2}, {opacity:1}], {duration:250, easing:"linear", fill:"forwards"}]], content:[[[{opacity:0}, {opacity:0, offset:.2}, {opacity:1}], {duration:250, easing:"linear", fill:"forwards"}]], actions:[[[{opacity:0}, {opacity:0, offset:.5}, {opacity:1}], {duration:300, easing:"linear", fill:"forwards"}]]}, $module$exports$google3$third_party$javascript$material$web$dialog$internal$animations$DIALOG_DEFAULT_CLOSE_ANIMATION$$ = {$dialog$:[[[{transform:"translateY(0)"}, 
{transform:"translateY(-50px)"}], {duration:150, easing:"cubic-bezier(.3,0,.8,.15)"}]], $scrim$:[[[{opacity:.32}, {opacity:0}], {duration:150, easing:"linear"}]], $container$:[[[{height:"100%"}, {height:"35%"}], {duration:150, easing:"cubic-bezier(.3,0,.8,.15)", pseudoElement:"::before"}], [[{opacity:"1"}, {opacity:"0"}], {delay:100, duration:50, easing:"linear", pseudoElement:"::before"}]], $headline$:[[[{opacity:1}, {opacity:0}], {duration:100, easing:"linear", fill:"forwards"}]], content:[[[{opacity:1}, 
{opacity:0}], {duration:100, easing:"linear", fill:"forwards"}]], actions:[[[{opacity:1}, {opacity:0}], {duration:100, easing:"linear", fill:"forwards"}]]};
var $$jscomp$templatelit$m1747037870$0$$ = $$jscomp$createTemplateTagFirstArg$$([':host{box-sizing:border-box;color:var(--md-divider-color,var(--md-sys-color-outline-variant,#cac4d0));display:flex;height:var(--md-divider-thickness,1px);width:100%}:host([inset-start]),:host([inset]){padding-inline-start:16px}:host([inset-end]),:host([inset]){padding-inline-end:16px}:host:before{background:currentColor;content:"";height:100%;width:100%}@media (forced-colors:active){:host:before{background:CanvasText}}\n']), 
$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$m1747037870$0$$);
function $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$() {
  var $$jscomp$super$this$1238924531$0$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.apply(this, arguments) || this;
  $$jscomp$super$this$1238924531$0$$.inset = !1;
  $$jscomp$super$this$1238924531$0$$.insetStart = !1;
  $$jscomp$super$this$1238924531$0$$.insetEnd = !1;
  return $$jscomp$super$this$1238924531$0$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$);
$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$;
$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$elementStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$elementStyles$;
$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__attributeNameForProperty$;
$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalizeStyles$;
$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$__prepare$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__prepare$;
$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyOptions$;
$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyDescriptor$;
$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$createProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$createProperty$;
$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$addInitializer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$addInitializer$;
$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$finalize$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalize$;
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $reflect$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.prototype, "inset", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $reflect$:!0, $attribute$:"inset-start"}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.prototype, "insetStart", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $reflect$:!0, $attribute$:"inset-end"}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.prototype, "insetEnd", void 0);
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$() {
  return $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$, $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$.$elementStyles$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$elementStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$.$__prepare$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$__prepare$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$.$createProperty$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$createProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$.$addInitializer$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$addInitializer$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$.$finalize$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$finalize$;
var $module$exports$google3$third_party$javascript$material$web$divider$divider$MdDivider$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var12$$;
$module$exports$google3$third_party$javascript$material$web$divider$divider$MdDivider$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$divider$divider$MdDivider$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-divider")], $module$exports$google3$third_party$javascript$material$web$divider$divider$MdDivider$$);
var $$jscomp$templatelit$m1606244195$34$$ = $$jscomp$createTemplateTagFirstArg$$(['\n      <div\n        class="focus-trap"\n        tabindex="0"\n        aria-hidden="true"\n        @focus=', "></div>\n    "]), $$jscomp$templatelit$m1606244195$35$$ = $$jscomp$createTemplateTagFirstArg$$('\n      <div class="scrim"></div>\n      <dialog\n        class=;\n        aria-label=;\n        aria-labelledby=;\n        role=;\n        @cancel=;\n        @click=;\n        @close=;\n        @keydown=;\n        .returnValue=;>\n        ;\n        <div class="container" @click=;>\n          <div class="headline">\n            <div class="icon" aria-hidden="true">\n              <slot name="icon" @slotchange=;></slot>\n            </div>\n            <h2 id="headline" aria-hidden=;>\n              <slot\n                name="headline"\n                @slotchange=;></slot>\n            </h2>\n            <md-divider></md-divider>\n          </div>\n          <div class="scroller">\n            <div class="content">\n              <div class="top anchor"></div>\n              <slot name="content"></slot>\n              <div class="bottom anchor"></div>\n            </div>\n          </div>\n          <div class="actions">\n            <md-divider></md-divider>\n            <slot name="actions" @slotchange=;></slot>\n          </div>\n        </div>\n        ;\n      </dialog>\n    '.split(";"));
function $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$() {
  var $$jscomp$super$this$m1606244195$33$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.call(this) || this;
  $$jscomp$super$this$m1606244195$33$$.quick = !1;
  $$jscomp$super$this$m1606244195$33$$.returnValue = "";
  $$jscomp$super$this$m1606244195$33$$.noFocusTrap = !1;
  $$jscomp$super$this$m1606244195$33$$.$getOpenAnimation$ = function() {
    return $module$exports$google3$third_party$javascript$material$web$dialog$internal$animations$DIALOG_DEFAULT_OPEN_ANIMATION$$;
  };
  $$jscomp$super$this$m1606244195$33$$.$getCloseAnimation$ = function() {
    return $module$exports$google3$third_party$javascript$material$web$dialog$internal$animations$DIALOG_DEFAULT_CLOSE_ANIMATION$$;
  };
  $$jscomp$super$this$m1606244195$33$$.$isOpen$ = !1;
  $$jscomp$super$this$m1606244195$33$$.$isOpening$ = !1;
  $$jscomp$super$this$m1606244195$33$$.$isConnectedPromise$ = $JSCompiler_StaticMethods_getIsConnectedPromise$$($$jscomp$super$this$m1606244195$33$$);
  $$jscomp$super$this$m1606244195$33$$.$isAtScrollTop$ = !1;
  $$jscomp$super$this$m1606244195$33$$.$isAtScrollBottom$ = !1;
  $$jscomp$super$this$m1606244195$33$$.$nextClickIsFromContent$ = !1;
  $$jscomp$super$this$m1606244195$33$$.$hasHeadline$ = !1;
  $$jscomp$super$this$m1606244195$33$$.$hasActions$ = !1;
  $$jscomp$super$this$m1606244195$33$$.$hasIcon$ = !1;
  $$jscomp$super$this$m1606244195$33$$.$escapePressedWithoutCancel$ = !1;
  $$jscomp$super$this$m1606244195$33$$.$treewalker$ = document.createTreeWalker($$jscomp$super$this$m1606244195$33$$, NodeFilter.SHOW_ELEMENT);
  $$jscomp$super$this$m1606244195$33$$.addEventListener("submit", $$jscomp$super$this$m1606244195$33$$.$handleSubmit$);
  return $$jscomp$super$this$m1606244195$33$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$);
$module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$;
$module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$elementStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$elementStyles$;
$module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__attributeNameForProperty$;
$module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalizeStyles$;
$module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$__prepare$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__prepare$;
$module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyOptions$;
$module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyDescriptor$;
$module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$createProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$createProperty$;
$module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$addInitializer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$addInitializer$;
$module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$finalize$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalize$;
$JSCompiler_prototypeAlias$$ = $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype;
$JSCompiler_prototypeAlias$$.show = function() {
  var $$jscomp$async$this$jscomp$6$$ = this, $dialog$$, $preventOpen$$, $$jscomp$optchain$tmpm1606244195$0$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m1606244195$41$$) {
    switch($$jscomp$generator$context$m1606244195$41$$.$g$) {
      case 1:
        return $$jscomp$async$this$jscomp$6$$.$isOpening$ = !0, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m1606244195$41$$, $$jscomp$async$this$jscomp$6$$.$isConnectedPromise$, 2);
      case 2:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m1606244195$41$$, $$jscomp$async$this$jscomp$6$$.$updateComplete$, 3);
      case 3:
        $dialog$$ = $$jscomp$async$this$jscomp$6$$.$dialog$;
        if ($dialog$$.open || !$$jscomp$async$this$jscomp$6$$.$isOpening$) {
          return $$jscomp$async$this$jscomp$6$$.$isOpening$ = !1, $$jscomp$generator$context$m1606244195$41$$.return();
        }
        if ($preventOpen$$ = !$$jscomp$async$this$jscomp$6$$.dispatchEvent(new Event("open", {cancelable:!0}))) {
          return $$jscomp$async$this$jscomp$6$$.open = !1, $$jscomp$async$this$jscomp$6$$.$isOpening$ = !1, $$jscomp$generator$context$m1606244195$41$$.return();
        }
        $dialog$$.showModal();
        $$jscomp$async$this$jscomp$6$$.open = !0;
        $$jscomp$async$this$jscomp$6$$.$scroller$ && ($$jscomp$async$this$jscomp$6$$.$scroller$.scrollTop = 0);
        null == ($$jscomp$optchain$tmpm1606244195$0$$ = $$jscomp$async$this$jscomp$6$$.querySelector("[autofocus]")) || $$jscomp$optchain$tmpm1606244195$0$$.focus();
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m1606244195$41$$, $JSCompiler_StaticMethods_animateDialog$$($$jscomp$async$this$jscomp$6$$, $$jscomp$async$this$jscomp$6$$.$getOpenAnimation$()), 4);
      case 4:
        $$jscomp$async$this$jscomp$6$$.dispatchEvent(new Event("opened")), $$jscomp$async$this$jscomp$6$$.$isOpening$ = !1, $$jscomp$generator$context$m1606244195$41$$.$g$ = 0;
    }
  });
};
$JSCompiler_prototypeAlias$$.close = function($returnValue$$) {
  $returnValue$$ = void 0 === $returnValue$$ ? this.returnValue : $returnValue$$;
  var $$jscomp$async$this$jscomp$7$$ = this, $dialog$jscomp$1$$, $prevReturnValue$$, $preventClose$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m1606244195$42$$) {
    if (1 == $$jscomp$generator$context$m1606244195$42$$.$g$) {
      return $$jscomp$async$this$jscomp$7$$.$isOpening$ = !1, $$jscomp$async$this$jscomp$7$$.isConnected ? $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m1606244195$42$$, $$jscomp$async$this$jscomp$7$$.$updateComplete$, 2) : ($$jscomp$async$this$jscomp$7$$.open = !1, $$jscomp$generator$context$m1606244195$42$$.return());
    }
    if (3 != $$jscomp$generator$context$m1606244195$42$$.$g$) {
      $dialog$jscomp$1$$ = $$jscomp$async$this$jscomp$7$$.$dialog$;
      if (!$dialog$jscomp$1$$.open || $$jscomp$async$this$jscomp$7$$.$isOpening$) {
        return $$jscomp$async$this$jscomp$7$$.open = !1, $$jscomp$generator$context$m1606244195$42$$.return();
      }
      $prevReturnValue$$ = $$jscomp$async$this$jscomp$7$$.returnValue;
      $$jscomp$async$this$jscomp$7$$.returnValue = $returnValue$$;
      return ($preventClose$$ = !$$jscomp$async$this$jscomp$7$$.dispatchEvent(new Event("close", {cancelable:!0}))) ? ($$jscomp$async$this$jscomp$7$$.returnValue = $prevReturnValue$$, $$jscomp$generator$context$m1606244195$42$$.return()) : $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m1606244195$42$$, $JSCompiler_StaticMethods_animateDialog$$($$jscomp$async$this$jscomp$7$$, $$jscomp$async$this$jscomp$7$$.$getCloseAnimation$()), 3);
    }
    $dialog$jscomp$1$$.close($returnValue$$);
    $$jscomp$async$this$jscomp$7$$.open = !1;
    $$jscomp$async$this$jscomp$7$$.dispatchEvent(new Event("closed"));
    $$jscomp$generator$context$m1606244195$42$$.$g$ = 0;
  });
};
$JSCompiler_prototypeAlias$$.connectedCallback = function() {
  $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.prototype.connectedCallback.call(this);
  this.$isConnectedPromiseResolve$();
};
$JSCompiler_prototypeAlias$$.disconnectedCallback = function() {
  $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.prototype.disconnectedCallback.call(this);
  this.$isConnectedPromise$ = $JSCompiler_StaticMethods_getIsConnectedPromise$$(this);
};
$JSCompiler_prototypeAlias$$.$render$ = function() {
  var $scrollable$$ = this.open && !(this.$isAtScrollTop$ && this.$isAtScrollBottom$), $showFocusTrap$$ = this.open && !this.noFocusTrap, $focusTrap$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$m1606244195$34$$, this.$handleFocusTrapFocus$), $ariaLabel$jscomp$2$$ = this.ariaLabel;
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$m1606244195$35$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$classMap$$({"has-headline":this.$hasHeadline$, "has-actions":this.$hasActions$, "has-icon":this.$hasIcon$, scrollable:$scrollable$$, "show-top-divider":$scrollable$$ && !this.$isAtScrollTop$, "show-bottom-divider":$scrollable$$ && !this.$isAtScrollBottom$}), $ariaLabel$jscomp$2$$ || 
  $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, this.$hasHeadline$ ? "headline" : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, "alert" === this.type ? "alertdialog" : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, this.$handleCancel$, this.$handleDialogClick$, this.$handleClose$, this.$handleKeydown$, this.returnValue || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, 
  $showFocusTrap$$ ? $focusTrap$$ : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, this.$handleContentClick$, this.$handleIconChange$, !this.$hasHeadline$ || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, this.$handleHeadlineChange$, this.$handleActionsChange$, $showFocusTrap$$ ? $focusTrap$$ : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$);
};
$JSCompiler_prototypeAlias$$.$firstUpdated$ = function() {
  var $$jscomp$this$m1606244195$16$$ = this;
  this.$intersectionObserver$ = new IntersectionObserver(function($$jscomp$iter$116_entries$$) {
    $$jscomp$iter$116_entries$$ = $$jscomp$makeIterator$$($$jscomp$iter$116_entries$$);
    for (var $$jscomp$key$m1606244195$36$entry$jscomp$11_target$jscomp$inline_433$$ = $$jscomp$iter$116_entries$$.next(); !$$jscomp$key$m1606244195$36$entry$jscomp$11_target$jscomp$inline_433$$.done; $$jscomp$key$m1606244195$36$entry$jscomp$11_target$jscomp$inline_433$$ = $$jscomp$iter$116_entries$$.next()) {
      var $JSCompiler_StaticMethods_handleAnchorIntersection$self$jscomp$inline_431$$ = $$jscomp$this$m1606244195$16$$, $entry$jscomp$inline_432_isIntersecting$jscomp$inline_434$$ = $$jscomp$key$m1606244195$36$entry$jscomp$11_target$jscomp$inline_433$$.value;
      $$jscomp$key$m1606244195$36$entry$jscomp$11_target$jscomp$inline_433$$ = $entry$jscomp$inline_432_isIntersecting$jscomp$inline_434$$.target;
      $entry$jscomp$inline_432_isIntersecting$jscomp$inline_434$$ = $entry$jscomp$inline_432_isIntersecting$jscomp$inline_434$$.isIntersecting;
      $$jscomp$key$m1606244195$36$entry$jscomp$11_target$jscomp$inline_433$$ === $JSCompiler_StaticMethods_handleAnchorIntersection$self$jscomp$inline_431$$.$topAnchor$ && ($JSCompiler_StaticMethods_handleAnchorIntersection$self$jscomp$inline_431$$.$isAtScrollTop$ = $entry$jscomp$inline_432_isIntersecting$jscomp$inline_434$$);
      $$jscomp$key$m1606244195$36$entry$jscomp$11_target$jscomp$inline_433$$ === $JSCompiler_StaticMethods_handleAnchorIntersection$self$jscomp$inline_431$$.$bottomAnchor$ && ($JSCompiler_StaticMethods_handleAnchorIntersection$self$jscomp$inline_431$$.$isAtScrollBottom$ = $entry$jscomp$inline_432_isIntersecting$jscomp$inline_434$$);
    }
  }, {root:this.$scroller$});
  this.$intersectionObserver$.observe(this.$topAnchor$);
  this.$intersectionObserver$.observe(this.$bottomAnchor$);
};
$JSCompiler_prototypeAlias$$.$handleDialogClick$ = function() {
  this.$nextClickIsFromContent$ ? this.$nextClickIsFromContent$ = !1 : this.dispatchEvent(new Event("cancel", {cancelable:!0})) && this.close();
};
$JSCompiler_prototypeAlias$$.$handleContentClick$ = function() {
  this.$nextClickIsFromContent$ = !0;
};
$JSCompiler_prototypeAlias$$.$handleSubmit$ = function($event$jscomp$23$$) {
  var $submitter$jscomp$2$$ = $event$jscomp$23$$.submitter;
  if ("dialog" === $event$jscomp$23$$.target.method && $submitter$jscomp$2$$) {
    var $$jscomp$nullish$tmp58$$;
    this.close(null != ($$jscomp$nullish$tmp58$$ = $submitter$jscomp$2$$.getAttribute("value")) ? $$jscomp$nullish$tmp58$$ : this.returnValue);
  }
};
$JSCompiler_prototypeAlias$$.$handleCancel$ = function($event$jscomp$24$$) {
  if ($event$jscomp$24$$.target === this.$dialog$) {
    this.$escapePressedWithoutCancel$ = !1;
    !$event$jscomp$24$$.bubbles || this.shadowRoot && !$event$jscomp$24$$.composed || $event$jscomp$24$$.stopPropagation();
    var $copy$jscomp$inline_438_dispatched$jscomp$inline_439_preventDefault$jscomp$1$$ = Reflect.construct($event$jscomp$24$$.constructor, [$event$jscomp$24$$.type, $event$jscomp$24$$]);
    ($copy$jscomp$inline_438_dispatched$jscomp$inline_439_preventDefault$jscomp$1$$ = this.dispatchEvent($copy$jscomp$inline_438_dispatched$jscomp$inline_439_preventDefault$jscomp$1$$)) || $event$jscomp$24$$.preventDefault();
    $copy$jscomp$inline_438_dispatched$jscomp$inline_439_preventDefault$jscomp$1$$ = !$copy$jscomp$inline_438_dispatched$jscomp$inline_439_preventDefault$jscomp$1$$;
    $event$jscomp$24$$.preventDefault();
    $copy$jscomp$inline_438_dispatched$jscomp$inline_439_preventDefault$jscomp$1$$ || this.close();
  }
};
$JSCompiler_prototypeAlias$$.$handleClose$ = function() {
  if (this.$escapePressedWithoutCancel$) {
    this.$escapePressedWithoutCancel$ = !1;
    var $$jscomp$optchain$tmpm1606244195$1$$;
    null == ($$jscomp$optchain$tmpm1606244195$1$$ = this.$dialog$) || $$jscomp$optchain$tmpm1606244195$1$$.dispatchEvent(new Event("cancel", {cancelable:!0}));
  }
};
$JSCompiler_prototypeAlias$$.$handleKeydown$ = function($event$jscomp$25$$) {
  var $$jscomp$this$m1606244195$22$$ = this;
  "Escape" === $event$jscomp$25$$.key && (this.$escapePressedWithoutCancel$ = !0, setTimeout(function() {
    $$jscomp$this$m1606244195$22$$.$escapePressedWithoutCancel$ = !1;
  }));
};
function $JSCompiler_StaticMethods_animateDialog$$($JSCompiler_StaticMethods_animateDialog$self$$, $animation$jscomp$1$$) {
  var $$jscomp$optchain$tmpm1606244195$2$$, $$jscomp$destructuring$var58$$, $dialog$jscomp$2$$, $scrim$$, $container$jscomp$5$$, $headline$$, $content$jscomp$10$$, $actions$$, $$jscomp$destructuring$var59$$, $containerAnimate$$, $dialogAnimate$$, $scrimAnimate$$, $headlineAnimate$$, $contentAnimate$$, $actionsAnimate$$, $$jscomp$nullish$tmp59$$, $$jscomp$nullish$tmp60$$, $$jscomp$nullish$tmp61$$, $$jscomp$nullish$tmp62$$, $$jscomp$nullish$tmp63$$, $$jscomp$nullish$tmp64$$, $elementAndAnimation$$, 
  $animations$$, $$jscomp$iter$118$$, $$jscomp$key$m1606244195$38$$jscomp$destructuring$var60$$, $$jscomp$destructuring$var60$$, $$jscomp$destructuring$var61$$, $element__tsickle_destructured_1$jscomp$1$$, $animation__tsickle_destructured_2$$, $element$jscomp$32$$, $animation$jscomp$2$$, $$jscomp$iter$117$$, $$jscomp$key$m1606244195$37$animateArgs$$, $$jscomp$loop$m1606244195$39$$, $animateArgs$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m1606244195$43$$) {
    null == ($$jscomp$optchain$tmpm1606244195$2$$ = $JSCompiler_StaticMethods_animateDialog$self$$.$cancelAnimations$) || $$jscomp$optchain$tmpm1606244195$2$$.abort();
    $JSCompiler_StaticMethods_animateDialog$self$$.$cancelAnimations$ = new AbortController();
    if ($JSCompiler_StaticMethods_animateDialog$self$$.quick) {
      return $$jscomp$generator$context$m1606244195$43$$.return();
    }
    $$jscomp$destructuring$var58$$ = $JSCompiler_StaticMethods_animateDialog$self$$;
    $dialog$jscomp$2$$ = $$jscomp$destructuring$var58$$.$dialog$;
    $scrim$$ = $$jscomp$destructuring$var58$$.$scrim$;
    $container$jscomp$5$$ = $$jscomp$destructuring$var58$$.$container$;
    $headline$$ = $$jscomp$destructuring$var58$$.$headline$;
    $content$jscomp$10$$ = $$jscomp$destructuring$var58$$.content;
    $actions$$ = $$jscomp$destructuring$var58$$.actions;
    if (!($dialog$jscomp$2$$ && $scrim$$ && $container$jscomp$5$$ && $headline$$ && $content$jscomp$10$$ && $actions$$)) {
      return $$jscomp$generator$context$m1606244195$43$$.return();
    }
    $$jscomp$destructuring$var59$$ = $animation$jscomp$1$$;
    $containerAnimate$$ = $$jscomp$destructuring$var59$$.$container$;
    $dialogAnimate$$ = $$jscomp$destructuring$var59$$.$dialog$;
    $scrimAnimate$$ = $$jscomp$destructuring$var59$$.$scrim$;
    $headlineAnimate$$ = $$jscomp$destructuring$var59$$.$headline$;
    $contentAnimate$$ = $$jscomp$destructuring$var59$$.content;
    $actionsAnimate$$ = $$jscomp$destructuring$var59$$.actions;
    $elementAndAnimation$$ = [[$dialog$jscomp$2$$, null != ($$jscomp$nullish$tmp59$$ = $dialogAnimate$$) ? $$jscomp$nullish$tmp59$$ : []], [$scrim$$, null != ($$jscomp$nullish$tmp60$$ = $scrimAnimate$$) ? $$jscomp$nullish$tmp60$$ : []], [$container$jscomp$5$$, null != ($$jscomp$nullish$tmp61$$ = $containerAnimate$$) ? $$jscomp$nullish$tmp61$$ : []], [$headline$$, null != ($$jscomp$nullish$tmp62$$ = $headlineAnimate$$) ? $$jscomp$nullish$tmp62$$ : []], [$content$jscomp$10$$, null != ($$jscomp$nullish$tmp63$$ = 
    $contentAnimate$$) ? $$jscomp$nullish$tmp63$$ : []], [$actions$$, null != ($$jscomp$nullish$tmp64$$ = $actionsAnimate$$) ? $$jscomp$nullish$tmp64$$ : []]];
    $animations$$ = [];
    $$jscomp$iter$118$$ = $$jscomp$makeIterator$$($elementAndAnimation$$);
    for ($$jscomp$key$m1606244195$38$$jscomp$destructuring$var60$$ = $$jscomp$iter$118$$.next(); !$$jscomp$key$m1606244195$38$$jscomp$destructuring$var60$$.done; $$jscomp$key$m1606244195$38$$jscomp$destructuring$var60$$ = $$jscomp$iter$118$$.next()) {
      for ($$jscomp$destructuring$var60$$ = $$jscomp$key$m1606244195$38$$jscomp$destructuring$var60$$.value, $$jscomp$destructuring$var61$$ = $$jscomp$makeIterator$$($$jscomp$destructuring$var60$$), $element__tsickle_destructured_1$jscomp$1$$ = $$jscomp$destructuring$var61$$.next().value, $animation__tsickle_destructured_2$$ = $$jscomp$destructuring$var61$$.next().value, $element$jscomp$32$$ = $element__tsickle_destructured_1$jscomp$1$$, $animation$jscomp$2$$ = $animation__tsickle_destructured_2$$, 
      $$jscomp$iter$117$$ = $$jscomp$makeIterator$$($animation$jscomp$2$$), $$jscomp$key$m1606244195$37$animateArgs$$ = $$jscomp$iter$117$$.next(), $$jscomp$loop$m1606244195$39$$ = {}; !$$jscomp$key$m1606244195$37$animateArgs$$.done; $$jscomp$loop$m1606244195$39$$ = {$animation$jscomp$3$:void 0}, $$jscomp$key$m1606244195$37$animateArgs$$ = $$jscomp$iter$117$$.next()) {
        $animateArgs$$ = $$jscomp$key$m1606244195$37$animateArgs$$.value, $$jscomp$loop$m1606244195$39$$.$animation$jscomp$3$ = $element$jscomp$32$$.animate.apply($element$jscomp$32$$, $$jscomp$arrayFromIterable$$($animateArgs$$)), $JSCompiler_StaticMethods_animateDialog$self$$.$cancelAnimations$.signal.addEventListener("abort", function($$jscomp$loop$m1606244195$39$jscomp$loop_param$m1606244195$40$$) {
          return function() {
            $$jscomp$loop$m1606244195$39$jscomp$loop_param$m1606244195$40$$.$animation$jscomp$3$.cancel();
          };
        }($$jscomp$loop$m1606244195$39$$)), $animations$$.push($$jscomp$loop$m1606244195$39$$.$animation$jscomp$3$);
      }
    }
    return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m1606244195$43$$, Promise.all($animations$$.map(function($animation$jscomp$4$$) {
      return $animation$jscomp$4$$.finished.catch(function() {
      });
    })), 0);
  });
}
$JSCompiler_prototypeAlias$$.$handleHeadlineChange$ = function($event$jscomp$26$$) {
  this.$hasHeadline$ = 0 < $event$jscomp$26$$.target.assignedElements().length;
};
$JSCompiler_prototypeAlias$$.$handleActionsChange$ = function($event$jscomp$27$$) {
  this.$hasActions$ = 0 < $event$jscomp$27$$.target.assignedElements().length;
};
$JSCompiler_prototypeAlias$$.$handleIconChange$ = function($event$jscomp$28$$) {
  this.$hasIcon$ = 0 < $event$jscomp$28$$.target.assignedElements().length;
};
function $JSCompiler_StaticMethods_getIsConnectedPromise$$($JSCompiler_StaticMethods_getIsConnectedPromise$self$$) {
  return new Promise(function($resolve$jscomp$13$$) {
    $JSCompiler_StaticMethods_getIsConnectedPromise$self$$.$isConnectedPromiseResolve$ = $resolve$jscomp$13$$;
  });
}
$JSCompiler_prototypeAlias$$.$handleFocusTrapFocus$ = function($event$jscomp$29_focusCameFromLastChild$$) {
  var $firstFocusableChild$jscomp$inline_442_firstFocusableChild__tsickle_destructured_3$$ = null, $$jscomp$destructuring$var63_lastFocusableChild$jscomp$inline_443_lastFocusableChild__tsickle_destructured_4$$ = null;
  for (this.$treewalker$.currentNode = this.$treewalker$.root; this.$treewalker$.nextNode();) {
    var $isLastFocusTrap_nextChild$jscomp$inline_444$$ = this.$treewalker$.currentNode;
    var $$jscomp$inline_558_focusCameFromOutsideDialog$$ = void 0, $$jscomp$inline_557$$ = void 0;
    var $JSCompiler_inline_result$jscomp$523_focusCameFromFirstChild$$ = $isLastFocusTrap_nextChild$jscomp$inline_444$$.matches(':is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true]):not(:disabled,[disabled]):not([tabindex^="-"])') ? !0 : $isLastFocusTrap_nextChild$jscomp$inline_444$$.localName.includes("-") && $isLastFocusTrap_nextChild$jscomp$inline_444$$.matches(":not(:disabled,[disabled])") ? null != ($$jscomp$inline_558_focusCameFromOutsideDialog$$ = null == 
    ($$jscomp$inline_557$$ = $isLastFocusTrap_nextChild$jscomp$inline_444$$.shadowRoot) ? void 0 : $$jscomp$inline_557$$.delegatesFocus) ? $$jscomp$inline_558_focusCameFromOutsideDialog$$ : !1 : !1;
    $JSCompiler_inline_result$jscomp$523_focusCameFromFirstChild$$ && ($firstFocusableChild$jscomp$inline_442_firstFocusableChild__tsickle_destructured_3$$ || ($firstFocusableChild$jscomp$inline_442_firstFocusableChild__tsickle_destructured_3$$ = $isLastFocusTrap_nextChild$jscomp$inline_444$$), $$jscomp$destructuring$var63_lastFocusableChild$jscomp$inline_443_lastFocusableChild__tsickle_destructured_4$$ = $isLastFocusTrap_nextChild$jscomp$inline_444$$);
  }
  $$jscomp$destructuring$var63_lastFocusableChild$jscomp$inline_443_lastFocusableChild__tsickle_destructured_4$$ = $$jscomp$makeIterator$$([$firstFocusableChild$jscomp$inline_442_firstFocusableChild__tsickle_destructured_3$$, $$jscomp$destructuring$var63_lastFocusableChild$jscomp$inline_443_lastFocusableChild__tsickle_destructured_4$$]);
  $firstFocusableChild$jscomp$inline_442_firstFocusableChild__tsickle_destructured_3$$ = $$jscomp$destructuring$var63_lastFocusableChild$jscomp$inline_443_lastFocusableChild__tsickle_destructured_4$$.next().value;
  $$jscomp$destructuring$var63_lastFocusableChild$jscomp$inline_443_lastFocusableChild__tsickle_destructured_4$$ = $$jscomp$destructuring$var63_lastFocusableChild$jscomp$inline_443_lastFocusableChild__tsickle_destructured_4$$.next().value;
  if ($firstFocusableChild$jscomp$inline_442_firstFocusableChild__tsickle_destructured_3$$ && $$jscomp$destructuring$var63_lastFocusableChild$jscomp$inline_443_lastFocusableChild__tsickle_destructured_4$$) {
    var $$jscomp$optchain$tmpm1606244195$3_isFirstFocusTrap$$ = $event$jscomp$29_focusCameFromLastChild$$.target === this.$firstFocusTrap$;
    $isLastFocusTrap_nextChild$jscomp$inline_444$$ = !$$jscomp$optchain$tmpm1606244195$3_isFirstFocusTrap$$;
    $JSCompiler_inline_result$jscomp$523_focusCameFromFirstChild$$ = $event$jscomp$29_focusCameFromLastChild$$.relatedTarget === $firstFocusableChild$jscomp$inline_442_firstFocusableChild__tsickle_destructured_3$$;
    $event$jscomp$29_focusCameFromLastChild$$ = $event$jscomp$29_focusCameFromLastChild$$.relatedTarget === $$jscomp$destructuring$var63_lastFocusableChild$jscomp$inline_443_lastFocusableChild__tsickle_destructured_4$$;
    $$jscomp$inline_558_focusCameFromOutsideDialog$$ = !$JSCompiler_inline_result$jscomp$523_focusCameFromFirstChild$$ && !$event$jscomp$29_focusCameFromLastChild$$;
    $isLastFocusTrap_nextChild$jscomp$inline_444$$ && $event$jscomp$29_focusCameFromLastChild$$ || $$jscomp$optchain$tmpm1606244195$3_isFirstFocusTrap$$ && $$jscomp$inline_558_focusCameFromOutsideDialog$$ ? $firstFocusableChild$jscomp$inline_442_firstFocusableChild__tsickle_destructured_3$$.focus() : ($$jscomp$optchain$tmpm1606244195$3_isFirstFocusTrap$$ && $JSCompiler_inline_result$jscomp$523_focusCameFromFirstChild$$ || $isLastFocusTrap_nextChild$jscomp$inline_444$$ && $$jscomp$inline_558_focusCameFromOutsideDialog$$) && 
    $$jscomp$destructuring$var63_lastFocusableChild$jscomp$inline_443_lastFocusableChild__tsickle_destructured_4$$.focus();
  } else {
    null == ($$jscomp$optchain$tmpm1606244195$3_isFirstFocusTrap$$ = this.$dialog$) || $$jscomp$optchain$tmpm1606244195$3_isFirstFocusTrap$$.focus();
  }
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, {open:{configurable:!0, enumerable:!0, get:function() {
  return this.$isOpen$;
}, set:function($open$jscomp$2$$) {
  $open$jscomp$2$$ !== this.$isOpen$ && ((this.$isOpen$ = $open$jscomp$2$$) ? (this.setAttribute("open", ""), this.show()) : (this.removeAttribute("open"), this.close()));
}}});
$module$contents$google3$third_party$javascript$material$web$internal$aria$delegate_requestUpdateOnAriaChange$$($module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Boolean), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:paramtypes", [Boolean])], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, 
"open", null);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "quick", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({$attribute$:!1}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "returnValue", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", String)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "type", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $attribute$:"no-focus-trap"}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "noFocusTrap", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$("dialog"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$dialog$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$(".scrim"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$scrim$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$(".container"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$container$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$(".headline"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$headline$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$(".content"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "content", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$(".actions"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "actions", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$state_state$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$isAtScrollTop$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$state_state$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$isAtScrollBottom$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$(".scroller"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$scroller$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$(".top.anchor"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$topAnchor$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$(".bottom.anchor"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$bottomAnchor$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$(".focus-trap"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$firstFocusTrap$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$state_state$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$hasHeadline$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$state_state$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$hasActions$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$state_state$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.prototype, "$hasIcon$", void 0);
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$() {
  return $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$, $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$.$elementStyles$ = $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$elementStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$.$__prepare$ = $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$__prepare$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$.$createProperty$ = $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$createProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$.$addInitializer$ = $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$addInitializer$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$.$finalize$ = $module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$Dialog$$.$finalize$;
var $module$exports$google3$third_party$javascript$material$web$dialog$dialog$MdDialog$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$dialog$dialog_closure$classdecl$var13$$;
$module$exports$google3$third_party$javascript$material$web$dialog$dialog$MdDialog$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$dialog$internal$dialog$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$dialog$dialog$MdDialog$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-dialog")], $module$exports$google3$third_party$javascript$material$web$dialog$dialog$MdDialog$$);
var $$jscomp$templatelit$m2126407430$0$$ = $$jscomp$createTemplateTagFirstArg$$([":host{display:flex;-webkit-tap-highlight-color:transparent;--md-ripple-hover-color:var(--md-list-item-hover-state-layer-color,var(--md-sys-color-on-surface,#1d1b20));--md-ripple-hover-opacity:var(--md-list-item-hover-state-layer-opacity,0.08);--md-ripple-pressed-color:var(--md-list-item-pressed-state-layer-color,var(--md-sys-color-on-surface,#1d1b20));--md-ripple-pressed-opacity:var(--md-list-item-pressed-state-layer-opacity,0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape:8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:transparent;width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity,.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color,var(--md-sys-color-on-surface,#1d1b20));font-family:var(--md-list-item-label-text-font,var(--md-sys-typescale-body-large-font,var(--md-ref-typeface-plain,Roboto)));font-size:var(--md-list-item-label-text-size,var(--md-sys-typescale-body-large-size,1rem));line-height:var(--md-list-item-label-text-line-height,var(--md-sys-typescale-body-large-line-height,1.5rem));font-weight:var(--md-list-item-label-text-weight,var(--md-sys-typescale-body-large-weight,var(--md-ref-typeface-weight-regular,400)));min-height:var(--md-list-item-one-line-container-height,56px);padding-top:var(--md-list-item-top-space,12px);padding-bottom:var(--md-list-item-bottom-space,12px);padding-inline-start:var(--md-list-item-leading-space,16px);padding-inline-end:var(--md-list-item-trailing-space,16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height,72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color,var(--md-sys-color-on-surface-variant,#49454f));font-family:var(--md-list-item-supporting-text-font,var(--md-sys-typescale-body-medium-font,var(--md-ref-typeface-plain,Roboto)));font-size:var(--md-list-item-supporting-text-size,var(--md-sys-typescale-body-medium-size,.875rem));line-height:var(--md-list-item-supporting-text-line-height,var(--md-sys-typescale-body-medium-line-height,1.25rem));font-weight:var(--md-list-item-supporting-text-weight,var(--md-sys-typescale-body-medium-weight,var(--md-ref-typeface-weight-regular,400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color,var(--md-sys-color-on-surface-variant,#49454f));font-family:var(--md-list-item-trailing-supporting-text-font,var(--md-sys-typescale-label-small-font,var(--md-ref-typeface-plain,Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size,var(--md-sys-typescale-label-small-size,.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height,var(--md-sys-typescale-label-small-line-height,1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight,var(--md-sys-typescale-label-small-weight,var(--md-ref-typeface-weight-medium,500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color,var(--md-sys-color-on-surface-variant,#49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color,var(--md-sys-color-on-surface-variant,#49454f))}@media (forced-colors:active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}\n"]), 
$module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$m2126407430$0$$);
var $$jscomp$templatelit$2109702323$0$$ = $$jscomp$createTemplateTagFirstArg$$([":host{color:var(--md-sys-color-on-surface,#1d1b20);font-family:var(--md-sys-typescale-body-large-font,var(--md-ref-typeface-plain,Roboto));font-size:var(--md-sys-typescale-body-large-size,1rem);font-weight:var(--md-sys-typescale-body-large-weight,var(--md-ref-typeface-weight-regular,400));line-height:var(--md-sys-typescale-body-large-line-height,1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant,#49454f);font-family:var(--md-sys-typescale-label-small-font,var(--md-ref-typeface-plain,Roboto));font-size:var(--md-sys-typescale-label-small-size,.6875rem);font-weight:var(--md-sys-typescale-label-small-weight,var(--md-ref-typeface-weight-medium,500));line-height:var(--md-sys-typescale-label-small-line-height,1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant,#49454f);font-family:var(--md-sys-typescale-body-medium-font,var(--md-ref-typeface-plain,Roboto));font-size:var(--md-sys-typescale-body-medium-size,.875rem);font-weight:var(--md-sys-typescale-body-medium-weight,var(--md-ref-typeface-weight-regular,400));line-height:var(--md-sys-typescale-body-medium-line-height,1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant,#49454f);font-family:var(--md-sys-typescale-label-small-font,var(--md-ref-typeface-plain,Roboto));font-size:var(--md-sys-typescale-label-small-size,.6875rem);font-weight:var(--md-sys-typescale-label-small-weight,var(--md-ref-typeface-weight-medium,500));line-height:var(--md-sys-typescale-label-small-line-height,1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}\n"]), 
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$2109702323$0$$);
var $$jscomp$templatelit$m14063438$2$$ = $$jscomp$createTemplateTagFirstArg$$(['\n      <slot name="container"></slot>\n      <slot class="non-text" name="start"></slot>\n      <div class="text">\n        <slot name="overline" @slotchange=', '></slot>\n        <slot\n          class="default-slot"\n          @slotchange=', '></slot>\n        <slot name="headline" @slotchange=', '></slot>\n        <slot\n          name="supporting-text"\n          @slotchange=', '></slot>\n      </div>\n      <slot class="non-text" name="trailing-supporting-text"></slot>\n      <slot class="non-text" name="end"></slot>\n    ']);
function $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$() {
  var $$jscomp$super$this$m14063438$1$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.apply(this, arguments) || this;
  $$jscomp$super$this$m14063438$1$$.multiline = !1;
  return $$jscomp$super$this$m14063438$1$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$);
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$;
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$elementStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$elementStyles$;
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__attributeNameForProperty$;
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalizeStyles$;
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$__prepare$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__prepare$;
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyOptions$;
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyDescriptor$;
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$createProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$createProperty$;
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$addInitializer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$addInitializer$;
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$finalize$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalize$;
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.prototype.$render$ = function() {
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$m14063438$2$$, this.$g$, this.$g$, this.$g$, this.$g$);
};
$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.prototype.$g$ = function() {
  for (var $isMultiline$$ = !1, $slotsWithContent$$ = 0, $$jscomp$iter$119$$ = $$jscomp$makeIterator$$(this.$textSlots$), $$jscomp$inline_448_$jscomp$key$m14063438$3$slot$jscomp$6_JSCompiler_inline_result$jscomp$169$$ = $$jscomp$iter$119$$.next(); !$$jscomp$inline_448_$jscomp$key$m14063438$3$slot$jscomp$6_JSCompiler_inline_result$jscomp$169$$.done; $$jscomp$inline_448_$jscomp$key$m14063438$3$slot$jscomp$6_JSCompiler_inline_result$jscomp$169$$ = $$jscomp$iter$119$$.next()) {
    a: {
      $$jscomp$inline_448_$jscomp$key$m14063438$3$slot$jscomp$6_JSCompiler_inline_result$jscomp$169$$ = $$jscomp$makeIterator$$($$jscomp$inline_448_$jscomp$key$m14063438$3$slot$jscomp$6_JSCompiler_inline_result$jscomp$169$$.value.assignedNodes({flatten:!0}));
      for (var $$jscomp$key$m14063438$4$node$jscomp$inline_449_isElement$jscomp$inline_451$$ = $$jscomp$inline_448_$jscomp$key$m14063438$3$slot$jscomp$6_JSCompiler_inline_result$jscomp$169$$.next(); !$$jscomp$key$m14063438$4$node$jscomp$inline_449_isElement$jscomp$inline_451$$.done; $$jscomp$key$m14063438$4$node$jscomp$inline_449_isElement$jscomp$inline_451$$ = $$jscomp$inline_448_$jscomp$key$m14063438$3$slot$jscomp$6_JSCompiler_inline_result$jscomp$169$$.next()) {
        var $isTextWithContent$jscomp$inline_453_node$jscomp$inline_450$$ = $$jscomp$key$m14063438$4$node$jscomp$inline_449_isElement$jscomp$inline_451$$.value;
        $$jscomp$key$m14063438$4$node$jscomp$inline_449_isElement$jscomp$inline_451$$ = $isTextWithContent$jscomp$inline_453_node$jscomp$inline_450$$.nodeType === Node.ELEMENT_NODE;
        var $$jscomp$inline_452$$ = void 0;
        $isTextWithContent$jscomp$inline_453_node$jscomp$inline_450$$ = $isTextWithContent$jscomp$inline_453_node$jscomp$inline_450$$.nodeType === Node.TEXT_NODE && (null == ($$jscomp$inline_452$$ = $isTextWithContent$jscomp$inline_453_node$jscomp$inline_450$$.textContent) ? void 0 : $$jscomp$inline_452$$.match(/\S/));
        if ($$jscomp$key$m14063438$4$node$jscomp$inline_449_isElement$jscomp$inline_451$$ || $isTextWithContent$jscomp$inline_453_node$jscomp$inline_450$$) {
          $$jscomp$inline_448_$jscomp$key$m14063438$3$slot$jscomp$6_JSCompiler_inline_result$jscomp$169$$ = !0;
          break a;
        }
      }
      $$jscomp$inline_448_$jscomp$key$m14063438$3$slot$jscomp$6_JSCompiler_inline_result$jscomp$169$$ = !1;
    }
    $$jscomp$inline_448_$jscomp$key$m14063438$3$slot$jscomp$6_JSCompiler_inline_result$jscomp$169$$ && ($slotsWithContent$$ += 1);
    if (1 < $slotsWithContent$$) {
      $isMultiline$$ = !0;
      break;
    }
  }
  this.multiline = $isMultiline$$;
};
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $reflect$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.prototype, "multiline", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([function($selector$jscomp$4$$) {
  return function($obj$jscomp$90$$, $name$jscomp$133$$) {
    return $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$base$desc$$($obj$jscomp$90$$, $name$jscomp$133$$, {get:function() {
      var $$jscomp$nullish$tmp44$$, $$jscomp$nullish$tmp45$$;
      return (null != ($$jscomp$nullish$tmp45$$ = this.$renderRoot$) ? $$jscomp$nullish$tmp45$$ : null != ($$jscomp$nullish$tmp44$$ = $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query$2dall_fragment$$) ? $$jscomp$nullish$tmp44$$ : $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query$2dall_fragment$$ = document.createDocumentFragment()).querySelectorAll($selector$jscomp$4$$);
    }});
  };
}(".text slot"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Array)], $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.prototype, "$textSlots$", void 0);
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$() {
  return $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$, $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$.$elementStyles$ = $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$elementStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$.$__prepare$ = $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$__prepare$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$.$createProperty$ = $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$createProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$.$addInitializer$ = $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$addInitializer$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$.$finalize$ = $module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$Item$$.$finalize$;
var $module$exports$google3$third_party$javascript$material$web$labs$item$item$MdItem$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$labs$item$item_closure$classdecl$var14$$;
$module$exports$google3$third_party$javascript$material$web$labs$item$item$MdItem$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$labs$item$internal$item$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$labs$item$item$MdItem$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-item")], $module$exports$google3$third_party$javascript$material$web$labs$item$item$MdItem$$);
function $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_activateFirstItem$$($firstItem_items$jscomp$8$$, $isActivatable$$) {
  $isActivatable$$ = void 0 === $isActivatable$$ ? $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_isItemNotDisabled$$ : $isActivatable$$;
  if ($firstItem_items$jscomp$8$$ = $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_getFirstActivatableItem$$($firstItem_items$jscomp$8$$, $isActivatable$$)) {
    $firstItem_items$jscomp$8$$.tabIndex = 0, $firstItem_items$jscomp$8$$.focus();
  }
  return $firstItem_items$jscomp$8$$;
}
function $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_activateLastItem$$($JSCompiler_inline_result$jscomp$171_items$jscomp$9_lastItem$$, $isActivatable$jscomp$1_isActivatable$jscomp$inline_456$$) {
  $isActivatable$jscomp$1_isActivatable$jscomp$inline_456$$ = void 0 === $isActivatable$jscomp$1_isActivatable$jscomp$inline_456$$ ? $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_isItemNotDisabled$$ : $isActivatable$jscomp$1_isActivatable$jscomp$inline_456$$;
  a: {
    $isActivatable$jscomp$1_isActivatable$jscomp$inline_456$$ = void 0 === $isActivatable$jscomp$1_isActivatable$jscomp$inline_456$$ ? $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_isItemNotDisabled$$ : $isActivatable$jscomp$1_isActivatable$jscomp$inline_456$$;
    for (var $i$jscomp$inline_457$$ = $JSCompiler_inline_result$jscomp$171_items$jscomp$9_lastItem$$.length - 1; 0 <= $i$jscomp$inline_457$$; $i$jscomp$inline_457$$--) {
      var $item$jscomp$inline_458$$ = $JSCompiler_inline_result$jscomp$171_items$jscomp$9_lastItem$$[$i$jscomp$inline_457$$];
      if ($isActivatable$jscomp$1_isActivatable$jscomp$inline_456$$($item$jscomp$inline_458$$)) {
        $JSCompiler_inline_result$jscomp$171_items$jscomp$9_lastItem$$ = $item$jscomp$inline_458$$;
        break a;
      }
    }
    $JSCompiler_inline_result$jscomp$171_items$jscomp$9_lastItem$$ = null;
  }
  $JSCompiler_inline_result$jscomp$171_items$jscomp$9_lastItem$$ && ($JSCompiler_inline_result$jscomp$171_items$jscomp$9_lastItem$$.tabIndex = 0, $JSCompiler_inline_result$jscomp$171_items$jscomp$9_lastItem$$.focus());
  return $JSCompiler_inline_result$jscomp$171_items$jscomp$9_lastItem$$;
}
function $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_getFirstActivatableItem$$($$jscomp$iter$121_items$jscomp$12$$, $isActivatable$jscomp$4$$) {
  $isActivatable$jscomp$4$$ = void 0 === $isActivatable$jscomp$4$$ ? $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_isItemNotDisabled$$ : $isActivatable$jscomp$4$$;
  $$jscomp$iter$121_items$jscomp$12$$ = $$jscomp$makeIterator$$($$jscomp$iter$121_items$jscomp$12$$);
  for (var $$jscomp$key$m1224414166$0$item$jscomp$32_item$jscomp$32$$ = $$jscomp$iter$121_items$jscomp$12$$.next(); !$$jscomp$key$m1224414166$0$item$jscomp$32_item$jscomp$32$$.done; $$jscomp$key$m1224414166$0$item$jscomp$32_item$jscomp$32$$ = $$jscomp$iter$121_items$jscomp$12$$.next()) {
    if ($$jscomp$key$m1224414166$0$item$jscomp$32_item$jscomp$32$$ = $$jscomp$key$m1224414166$0$item$jscomp$32_item$jscomp$32$$.value, $isActivatable$jscomp$4$$($$jscomp$key$m1224414166$0$item$jscomp$32_item$jscomp$32$$)) {
      return $$jscomp$key$m1224414166$0$item$jscomp$32_item$jscomp$32$$;
    }
  }
  return null;
}
function $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_isItemNotDisabled$$($item$jscomp$36$$) {
  return !$item$jscomp$36$$.disabled;
}
;var $$jscomp$templatelit$464323147$15$$ = $$jscomp$createTemplateTagFirstArg$$(['\n      <md-item>\n        <div slot="container">\n          ', " ", '\n        </div>\n        <slot name="start" slot="start"></slot>\n        <slot name="end" slot="end"></slot>\n        ', "\n      </md-item>\n    "]), $$jscomp$templatelit$464323147$16$$ = $$jscomp$createTemplateTagFirstArg$$(["a"]), $$jscomp$templatelit$464323147$17$$ = $$jscomp$createTemplateTagFirstArg$$(["button"]), $$jscomp$templatelit$464323147$18$$ = 
$$jscomp$createTemplateTagFirstArg$$(["li"]), $$jscomp$templatelit$464323147$19$$ = $$jscomp$createTemplateTagFirstArg$$('\n      <;\n        id="item"\n        tabindex=";"\n        ?disabled=;\n        role="listitem"\n        aria-selected=;\n        aria-checked=;\n        aria-expanded=;\n        aria-haspopup=;\n        class="list-item ;"\n        href=;\n        target=;\n        @focus=;\n      >;</;>\n    '.split(";")), $$jscomp$templatelit$464323147$20$$ = $$jscomp$createTemplateTagFirstArg$$([' <md-ripple\n      part="ripple"\n      for="item"\n      ?disabled=', 
"></md-ripple>"]), $$jscomp$templatelit$464323147$21$$ = $$jscomp$createTemplateTagFirstArg$$([" <md-focus-ring\n      @visibility-changed=", '\n      part="focus-ring"\n      for="item"\n      inward></md-focus-ring>']), $$jscomp$templatelit$464323147$22$$ = $$jscomp$createTemplateTagFirstArg$$(['\n      <slot></slot>\n      <slot name="overline" slot="overline"></slot>\n      <slot name="headline" slot="headline"></slot>\n      <slot name="supporting-text" slot="supporting-text"></slot>\n      <slot\n        name="trailing-supporting-text"\n        slot="trailing-supporting-text"></slot>\n    ']);
function $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$() {
  var $$jscomp$super$this$464323147$14$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.apply(this, arguments) || this;
  $$jscomp$super$this$464323147$14$$.disabled = !1;
  $$jscomp$super$this$464323147$14$$.type = "text";
  $$jscomp$super$this$464323147$14$$.isListItem = !0;
  $$jscomp$super$this$464323147$14$$.href = "";
  $$jscomp$super$this$464323147$14$$.target = "";
  return $$jscomp$super$this$464323147$14$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$);
$module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$elementStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$elementStyles$;
$module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__attributeNameForProperty$;
$module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalizeStyles$;
$module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$__prepare$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__prepare$;
$module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyOptions$;
$module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyDescriptor$;
$module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$createProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$createProperty$;
$module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$addInitializer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$addInitializer$;
$module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$finalize$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalize$;
$JSCompiler_prototypeAlias$$ = $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.prototype;
$JSCompiler_prototypeAlias$$.$willUpdate$ = function($changed$jscomp$1$$) {
  this.href && (this.type = "link");
  $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.prototype.$willUpdate$.call(this, $changed$jscomp$1$$);
};
$JSCompiler_prototypeAlias$$.$render$ = function() {
  var $content$jscomp$inline_461$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$464323147$15$$, this.$renderRipple$(), this.$renderFocusRing$(), $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$464323147$22$$)), $isAnchor$jscomp$inline_462_target$jscomp$inline_465$$ = "link" === this.type;
  switch(this.type) {
    case "link":
      var $tag$jscomp$inline_463$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static$literal$$($$jscomp$templatelit$464323147$16$$);
      break;
    case "button":
      $tag$jscomp$inline_463$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static$literal$$($$jscomp$templatelit$464323147$17$$);
      break;
    default:
    case "text":
      $tag$jscomp$inline_463$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static$literal$$($$jscomp$templatelit$464323147$18$$);
  }
  var $isInteractive$jscomp$inline_464$$ = "text" !== this.type;
  $isAnchor$jscomp$inline_462_target$jscomp$inline_465$$ = $isAnchor$jscomp$inline_462_target$jscomp$inline_465$$ && this.target ? this.target : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$;
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$static$html$$($$jscomp$templatelit$464323147$19$$, $tag$jscomp$inline_463$$, this.$isDisabled$ || !$isInteractive$jscomp$inline_464$$ ? -1 : 0, this.$isDisabled$, this.ariaSelected || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, this.ariaChecked || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, this.ariaExpanded || 
  $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, this.ariaHasPopup || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$classMap$$(this.$getRenderClasses$()), this.href || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, $isAnchor$jscomp$inline_462_target$jscomp$inline_465$$, 
  this.onFocus, $content$jscomp$inline_461$$, $tag$jscomp$inline_463$$);
};
$JSCompiler_prototypeAlias$$.$renderRipple$ = function() {
  return "text" === this.type ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$464323147$20$$, this.$isDisabled$);
};
$JSCompiler_prototypeAlias$$.$renderFocusRing$ = function() {
  return "text" === this.type ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$464323147$21$$, this.$onFocusRingVisibilityChanged$);
};
$JSCompiler_prototypeAlias$$.$onFocusRingVisibilityChanged$ = function() {
};
$JSCompiler_prototypeAlias$$.$getRenderClasses$ = function() {
  return {disabled:this.$isDisabled$};
};
$JSCompiler_prototypeAlias$$.onFocus = function() {
  -1 === this.tabIndex && this.dispatchEvent(new Event("request-activation", {bubbles:!0, composed:!0}));
};
$JSCompiler_prototypeAlias$$.focus = function() {
  var $$jscomp$optchain$tmp464323147$0$$;
  null == ($$jscomp$optchain$tmp464323147$0$$ = this.$listItemRoot$) || $$jscomp$optchain$tmp464323147$0$$.focus();
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.prototype, {$isDisabled$:{configurable:!0, enumerable:!0, get:function() {
  return this.disabled && "link" !== this.type;
}}});
$module$contents$google3$third_party$javascript$material$web$internal$aria$delegate_requestUpdateOnAriaChange$$($module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$);
$module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$shadowRootOptions$ = Object.assign({}, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$, {delegatesFocus:!0});
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $reflect$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.prototype, "disabled", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({$reflect$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", String)], $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.prototype, "type", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $attribute$:"md-list-item", $reflect$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.prototype, "isListItem", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.prototype, "href", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", String)], $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.prototype, "target", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$(".list-item"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.prototype, "$listItemRoot$", void 0);
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$() {
  return $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$, $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$.$elementStyles$ = $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$elementStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$.$__prepare$ = $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$__prepare$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$.$createProperty$ = $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$createProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$.$addInitializer$ = $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$addInitializer$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$.$finalize$ = $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$finalize$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$ListItemEl$$.$shadowRootOptions$;
var $module$exports$google3$third_party$javascript$material$web$list$list$2ditem$MdListItem$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_item_closure$classdecl$var15$$;
$module$exports$google3$third_party$javascript$material$web$list$list$2ditem$MdListItem$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$list$internal$listitem$list$2ditem$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$list$list$2ditem$MdListItem$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-list-item")], $module$exports$google3$third_party$javascript$material$web$list$list$2ditem$MdListItem$$);
var $$jscomp$templatelit$1783917396$0$$ = $$jscomp$createTemplateTagFirstArg$$([":host{background:var(--md-list-container-color,var(--md-sys-color-surface,#fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}\n"]), $module$exports$google3$third_party$javascript$material$web$list$internal$list$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$1783917396$0$$);
var $module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$NavigableKeys$$ = {$ArrowDown$:"ArrowDown", $ArrowLeft$:"ArrowLeft", $ArrowUp$:"ArrowUp", $ArrowRight$:"ArrowRight", $Home$:"Home", $End$:"End"};
function $module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$ListController$$($config$jscomp$6$$) {
  var $$jscomp$this$2053780058$2$$ = this;
  this.$handleKeydown$ = function($event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$) {
    var $index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$ = $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$.key;
    if (!$event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$.defaultPrevented && $$jscomp$this$2053780058$2$$.$isNavigableKey$($index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$)) {
      var $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$ = $$jscomp$this$2053780058$2$$.items;
      if ($JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$.length) {
        a: {
          var $JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$ = $$jscomp$this$2053780058$2$$.$isActivatable$;
          $JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$ = void 0 === $JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$ ? $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_isItemNotDisabled$$ : $JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$;
          for (var $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ = 0; $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ < $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$.length; $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$++) {
            var $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ = $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$[$i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$];
            if (0 === $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$.tabIndex && $JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$($i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$)) {
              $JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$ = {item:$i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$, index:$i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$};
              break a;
            }
          }
          $JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$ = null;
        }
        $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$.preventDefault();
        $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$ = ($i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ = $$jscomp$this$2053780058$2$$.$isRtl$()) ? $module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$NavigableKeys$$.$ArrowRight$ : $module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$NavigableKeys$$.$ArrowLeft$;
        $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ = $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ ? $module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$NavigableKeys$$.$ArrowLeft$ : $module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$NavigableKeys$$.$ArrowRight$;
        $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ = null;
        switch($index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$) {
          case $module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$NavigableKeys$$.$ArrowDown$:
          case $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$:
            $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$ = $$jscomp$this$2053780058$2$$.$isActivatable$;
            $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ = $$jscomp$this$2053780058$2$$.$wrapNavigation$();
            $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$ = void 0 === $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$ ? $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_isItemNotDisabled$$ : $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$;
            $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ = void 0 === $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ ? !0 : $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$;
            if ($JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$) {
              b: {
                $index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$ = $JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$.index;
                $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$ = void 0 === $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$ ? $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_isItemNotDisabled$$ : $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$;
                $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ = void 0 === $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ ? !0 : $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$;
                for ($i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ = 1; $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ < $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$.length; $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$++) {
                  var $item$jscomp$inline_566_item$jscomp$inline_574_nextIndex$jscomp$inline_565_prevIndex$jscomp$inline_573$$ = ($i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ + $index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$) % $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$.length;
                  if ($item$jscomp$inline_566_item$jscomp$inline_574_nextIndex$jscomp$inline_565_prevIndex$jscomp$inline_573$$ < $index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$ && !$i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$) {
                    $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$ = null;
                    break b;
                  }
                  $item$jscomp$inline_566_item$jscomp$inline_574_nextIndex$jscomp$inline_565_prevIndex$jscomp$inline_573$$ = $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$[$item$jscomp$inline_566_item$jscomp$inline_574_nextIndex$jscomp$inline_565_prevIndex$jscomp$inline_573$$];
                  if ($event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$($item$jscomp$inline_566_item$jscomp$inline_574_nextIndex$jscomp$inline_565_prevIndex$jscomp$inline_573$$)) {
                    $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$ = $item$jscomp$inline_566_item$jscomp$inline_574_nextIndex$jscomp$inline_565_prevIndex$jscomp$inline_573$$;
                    break b;
                  }
                }
                $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$ = $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$[$index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$] ? $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$[$index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$] : 
                null;
              }
              $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$ && ($JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$.tabIndex = 0, $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$.focus());
              $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ = $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$;
            } else {
              $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ = $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_activateFirstItem$$($JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$, $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$);
            }
            break;
          case $module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$NavigableKeys$$.$ArrowUp$:
          case $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$:
            $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$ = $$jscomp$this$2053780058$2$$.$isActivatable$;
            $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ = $$jscomp$this$2053780058$2$$.$wrapNavigation$();
            $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$ = void 0 === $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$ ? $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_isItemNotDisabled$$ : $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$;
            $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ = void 0 === $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ ? !0 : $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$;
            if ($JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$) {
              b: {
                $index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$ = $JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$.index;
                $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$ = void 0 === $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$ ? $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_isItemNotDisabled$$ : $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$;
                $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ = void 0 === $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$ ? !0 : $i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$;
                for ($i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ = 1; $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ < $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$.length; $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$++) {
                  $item$jscomp$inline_566_item$jscomp$inline_574_nextIndex$jscomp$inline_565_prevIndex$jscomp$inline_573$$ = ($index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$ - $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ + $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$.length) % $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$.length;
                  if ($item$jscomp$inline_566_item$jscomp$inline_574_nextIndex$jscomp$inline_565_prevIndex$jscomp$inline_573$$ > $index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$ && !$i$jscomp$inline_470_inlineNext_isRtl$jscomp$1_wrap$jscomp$inline_476_wrap$jscomp$inline_482_wrap$jscomp$inline_563_wrap$jscomp$inline_571$$) {
                    $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$ = null;
                    break b;
                  }
                  $item$jscomp$inline_566_item$jscomp$inline_574_nextIndex$jscomp$inline_565_prevIndex$jscomp$inline_573$$ = $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$[$item$jscomp$inline_566_item$jscomp$inline_574_nextIndex$jscomp$inline_565_prevIndex$jscomp$inline_573$$];
                  if ($event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$($item$jscomp$inline_566_item$jscomp$inline_574_nextIndex$jscomp$inline_565_prevIndex$jscomp$inline_573$$)) {
                    $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$ = $item$jscomp$inline_566_item$jscomp$inline_574_nextIndex$jscomp$inline_565_prevIndex$jscomp$inline_573$$;
                    break b;
                  }
                }
                $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$ = $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$[$index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$] ? $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$[$index$jscomp$inline_561_index$jscomp$inline_569_key$jscomp$115$$] : 
                null;
              }
              $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$ && ($JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$.tabIndex = 0, $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$.focus());
              $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ = $JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$;
            } else {
              $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ = $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_activateLastItem$$($JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$, $event$jscomp$30_inlinePrevious_isActivatable$jscomp$inline_475_isActivatable$jscomp$inline_481_isActivatable$jscomp$inline_562_isActivatable$jscomp$inline_570$$);
            }
            break;
          case $module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$NavigableKeys$$.$Home$:
            $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ = $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_activateFirstItem$$($JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$, $$jscomp$this$2053780058$2$$.$isActivatable$);
            break;
          case $module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$NavigableKeys$$.$End$:
            $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ = $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_activateLastItem$$($JSCompiler_inline_result$jscomp$524_JSCompiler_inline_result$jscomp$525_items$jscomp$18_next$jscomp$inline_477_prev$jscomp$inline_483$$, $$jscomp$this$2053780058$2$$.$isActivatable$);
        }
        $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ && $JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$ && $JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$.item !== $i$jscomp$inline_564_i$jscomp$inline_572_item$jscomp$inline_471_nextActiveItem$$ && ($JSCompiler_inline_result$jscomp$170_activeItemRecord$jscomp$2_isActivatable$jscomp$inline_469$$.item.tabIndex = -1);
      }
    }
  };
  this.$g$ = function() {
    for (var $$jscomp$iter$122$$ = $$jscomp$makeIterator$$($$jscomp$this$2053780058$2$$.items), $$jscomp$key$2053780058$6$item$jscomp$37$$ = $$jscomp$iter$122$$.next(); !$$jscomp$key$2053780058$6$item$jscomp$37$$.done; $$jscomp$key$2053780058$6$item$jscomp$37$$ = $$jscomp$iter$122$$.next()) {
      $$jscomp$this$2053780058$2$$.$deactivateItem$($$jscomp$key$2053780058$6$item$jscomp$37$$.value);
    }
  };
  this.$i$ = function($event$jscomp$31_target$jscomp$119$$) {
    $$jscomp$this$2053780058$2$$.$g$();
    $event$jscomp$31_target$jscomp$119$$ = $event$jscomp$31_target$jscomp$119$$.target;
    $$jscomp$this$2053780058$2$$.$activateItem$($event$jscomp$31_target$jscomp$119$$);
    $event$jscomp$31_target$jscomp$119$$.focus();
  };
  this.$j$ = function() {
    for (var $firstActivatableItem_items$jscomp$20$$ = $$jscomp$this$2053780058$2$$.items, $encounteredActivated$$ = !1, $$jscomp$iter$123$$ = $$jscomp$makeIterator$$($firstActivatableItem_items$jscomp$20$$), $$jscomp$key$2053780058$7$item$jscomp$38_item$jscomp$38$$ = $$jscomp$iter$123$$.next(); !$$jscomp$key$2053780058$7$item$jscomp$38_item$jscomp$38$$.done; $$jscomp$key$2053780058$7$item$jscomp$38_item$jscomp$38$$ = $$jscomp$iter$123$$.next()) {
      $$jscomp$key$2053780058$7$item$jscomp$38_item$jscomp$38$$ = $$jscomp$key$2053780058$7$item$jscomp$38_item$jscomp$38$$.value, !$$jscomp$key$2053780058$7$item$jscomp$38_item$jscomp$38$$.disabled && -1 < $$jscomp$key$2053780058$7$item$jscomp$38_item$jscomp$38$$.tabIndex && !$encounteredActivated$$ ? ($encounteredActivated$$ = !0, $$jscomp$key$2053780058$7$item$jscomp$38_item$jscomp$38$$.tabIndex = 0) : $$jscomp$key$2053780058$7$item$jscomp$38_item$jscomp$38$$.tabIndex = -1;
    }
    !$encounteredActivated$$ && ($firstActivatableItem_items$jscomp$20$$ = $module$contents$google3$third_party$javascript$material$web$list$internal$list$2dnavigation$2dhelpers_getFirstActivatableItem$$($firstActivatableItem_items$jscomp$20$$, $$jscomp$this$2053780058$2$$.$isActivatable$)) && ($firstActivatableItem_items$jscomp$20$$.tabIndex = 0);
  };
  var $getPossibleItems$$ = $config$jscomp$6$$.$getPossibleItems$, $isRtl$$ = $config$jscomp$6$$.$isRtl$, $deactivateItem$$ = $config$jscomp$6$$.$deactivateItem$, $activateItem$$ = $config$jscomp$6$$.$activateItem$, $isNavigableKey$$ = $config$jscomp$6$$.$isNavigableKey$, $isActivatable$jscomp$10$$ = $config$jscomp$6$$.$isActivatable$, $wrapNavigation$$ = $config$jscomp$6$$.$wrapNavigation$;
  this.$isItem$ = $config$jscomp$6$$.$isItem$;
  this.$getPossibleItems$ = $getPossibleItems$$;
  this.$isRtl$ = $isRtl$$;
  this.$deactivateItem$ = $deactivateItem$$;
  this.$activateItem$ = $activateItem$$;
  this.$isNavigableKey$ = $isNavigableKey$$;
  this.$isActivatable$ = $isActivatable$jscomp$10$$;
  this.$wrapNavigation$ = null != $wrapNavigation$$ ? $wrapNavigation$$ : function() {
    return !0;
  };
}
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$ListController$$.prototype, {items:{configurable:!0, enumerable:!0, get:function() {
  var $$jscomp$iter$124_maybeItems$$ = this.$getPossibleItems$(), $items$jscomp$21$$ = [];
  $$jscomp$iter$124_maybeItems$$ = $$jscomp$makeIterator$$($$jscomp$iter$124_maybeItems$$);
  for (var $$jscomp$key$2053780058$8$itemOrParent_itemOrParent_subItem$$ = $$jscomp$iter$124_maybeItems$$.next(); !$$jscomp$key$2053780058$8$itemOrParent_itemOrParent_subItem$$.done; $$jscomp$key$2053780058$8$itemOrParent_itemOrParent_subItem$$ = $$jscomp$iter$124_maybeItems$$.next()) {
    $$jscomp$key$2053780058$8$itemOrParent_itemOrParent_subItem$$ = $$jscomp$key$2053780058$8$itemOrParent_itemOrParent_subItem$$.value, this.$isItem$($$jscomp$key$2053780058$8$itemOrParent_itemOrParent_subItem$$) ? $items$jscomp$21$$.push($$jscomp$key$2053780058$8$itemOrParent_itemOrParent_subItem$$) : ($$jscomp$key$2053780058$8$itemOrParent_itemOrParent_subItem$$ = $$jscomp$key$2053780058$8$itemOrParent_itemOrParent_subItem$$.item) && this.$isItem$($$jscomp$key$2053780058$8$itemOrParent_itemOrParent_subItem$$) && 
    $items$jscomp$21$$.push($$jscomp$key$2053780058$8$itemOrParent_itemOrParent_subItem$$);
  }
  return $items$jscomp$21$$;
}}});
var $$jscomp$templatelit$m837369551$8$$ = $$jscomp$createTemplateTagFirstArg$$(["\n      <slot\n        @deactivate-items=", "\n        @request-activation=", "\n        @slotchange=", ">\n      </slot>\n    "]), $module$contents$google3$third_party$javascript$material$web$list$internal$list_NAVIGABLE_KEY_SET$$ = new Set(Object.values($module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$NavigableKeys$$));
function $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$() {
  var $$jscomp$super$this$m837369551$7$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.call(this) || this;
  $$jscomp$super$this$m837369551$7$$.$g$ = new $module$exports$google3$third_party$javascript$material$web$list$internal$list$2dcontroller$ListController$$({$isItem$:function($item$jscomp$39$$) {
    return $item$jscomp$39$$.hasAttribute("md-list-item");
  }, $getPossibleItems$:function() {
    return $$jscomp$super$this$m837369551$7$$.$slotItems$;
  }, $isRtl$:function() {
    return "rtl" === getComputedStyle($$jscomp$super$this$m837369551$7$$).direction;
  }, $deactivateItem$:function($item$jscomp$40$$) {
    $item$jscomp$40$$.tabIndex = -1;
  }, $activateItem$:function($item$jscomp$41$$) {
    $item$jscomp$41$$.tabIndex = 0;
  }, $isNavigableKey$:function($key$jscomp$116$$) {
    return $module$contents$google3$third_party$javascript$material$web$list$internal$list_NAVIGABLE_KEY_SET$$.has($key$jscomp$116$$);
  }, $isActivatable$:function($item$jscomp$42$$) {
    return !$item$jscomp$42$$.disabled && "text" !== $item$jscomp$42$$.type;
  }});
  $$jscomp$super$this$m837369551$7$$.$j$ = $$jscomp$super$this$m837369551$7$$.attachInternals();
  $$jscomp$super$this$m837369551$7$$.$j$.role = "list";
  $$jscomp$super$this$m837369551$7$$.addEventListener("keydown", $$jscomp$super$this$m837369551$7$$.$g$.$handleKeydown$);
  return $$jscomp$super$this$m837369551$7$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$);
$module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$;
$module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$elementStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$elementStyles$;
$module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__attributeNameForProperty$;
$module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalizeStyles$;
$module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$__prepare$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__prepare$;
$module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyOptions$;
$module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyDescriptor$;
$module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$createProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$createProperty$;
$module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$addInitializer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$addInitializer$;
$module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$finalize$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalize$;
$module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.prototype.$render$ = function() {
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$m837369551$8$$, this.$g$.$g$, this.$g$.$i$, this.$g$.$j$);
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.prototype, {items:{configurable:!0, enumerable:!0, get:function() {
  return this.$g$.items;
}}});
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([function($options$jscomp$155$$) {
  return function($obj$jscomp$91$$, $name$jscomp$134$$) {
    var $$jscomp$destructuring$var32$$ = null != $options$jscomp$155$$ ? $options$jscomp$155$$ : {}, $slot$jscomp$1$$ = $$jscomp$destructuring$var32$$.slot, $selector$jscomp$5$$ = $$jscomp$destructuring$var32$$.$selector$, $slotSelector$$ = "slot" + ($slot$jscomp$1$$ ? "[name=" + $slot$jscomp$1$$ + "]" : ":not([name])");
    return $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$base$desc$$($obj$jscomp$91$$, $name$jscomp$134$$, {get:function() {
      var $$jscomp$optchain$tmp944286079$0$$, $$jscomp$optchain$tmp944286079$1$$, $$jscomp$nullish$tmp47$$, $elements$$ = null != ($$jscomp$nullish$tmp47$$ = null == ($$jscomp$optchain$tmp944286079$1$$ = null == ($$jscomp$optchain$tmp944286079$0$$ = this.$renderRoot$) ? void 0 : $$jscomp$optchain$tmp944286079$0$$.querySelector($slotSelector$$)) ? void 0 : $$jscomp$optchain$tmp944286079$1$$.assignedElements($options$jscomp$155$$)) ? $$jscomp$nullish$tmp47$$ : [];
      return void 0 === $selector$jscomp$5$$ ? $elements$$ : $elements$$.filter(function($node$jscomp$24$$) {
        return $node$jscomp$24$$.matches($selector$jscomp$5$$);
      });
    }});
  };
}({flatten:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Array)], $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.prototype, "$slotItems$", void 0);
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$() {
  return $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$, $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$.$elementStyles$ = $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$elementStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$.$__prepare$ = $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$__prepare$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$.$createProperty$ = $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$createProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$.$addInitializer$ = $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$addInitializer$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$.$finalize$ = $module$exports$google3$third_party$javascript$material$web$list$internal$list$List$$.$finalize$;
var $module$exports$google3$third_party$javascript$material$web$list$list$MdList$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$list$list_closure$classdecl$var16$$;
$module$exports$google3$third_party$javascript$material$web$list$list$MdList$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$list$internal$list$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$list$list$MdList$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-list")], $module$exports$google3$third_party$javascript$material$web$list$list$MdList$$);
var $$jscomp$templatelit$m179770670$42$$ = $$jscomp$createTemplateTagFirstArg$$(['<div class="load">Loading...</div>']), $$jscomp$templatelit$m179770670$43$$ = $$jscomp$createTemplateTagFirstArg$$(['<md-list-item\n                  id="ts-', '"\n                  type="link"\n                  href="', '">\n                  ', '\n                  <img\n                    slot="start"\n                    style="width: 32px"\n                    src="', '" />\n                </md-list-item>']), 
$$jscomp$templatelit$m179770670$44$$ = $$jscomp$createTemplateTagFirstArg$$('<md-dialog id="topsitesdialog">\n        <div slot="headline">;</div>\n        <div slot="content">\n          <md-list>\n            ;\n          </md-list>\n        </div>\n      </md-dialog>\n      <div id="uitop" class="gacant-t">\n        <div class="gacant-tl">\n          <md-icon-button\n            aria-label=";"\n            title=";"\n            @click=";"\n            ?hidden=";">\n            <md-icon>;</md-icon>\n          </md-icon-button>\n          <md-icon-button\n            aria-label=";"\n            title=";"\n            @click=";"\n            ?hidden=";">\n            <md-icon>;</md-icon>\n          </md-icon-button>\n        </div>\n        <div class="gacant-tr"></div>\n      </div>\n      <div id="uibottom" class="gacant-b">\n        <div class="gacant-bl">\n          <div>\n            <gac-art-assetdetails\n              .currentAssetIndex=";"\n              .titleText=";"\n              .creatorText=";"\n              .partnerText=";"\n              .creditsText=";"\n              .titleUrl=";"\n              .creatorUrl=";"\n              .partnerUrl=";"\n              .creditsUrl=";"></gac-art-assetdetails>\n          </div>\n        </div>\n        <div class="gacant-br">\n          <md-icon-button\n            aria-label=";"\n            title=";"\n            @click=";"\n            ?hidden=";">\n            <md-icon>;</md-icon>\n          </md-icon-button>\n        </div>\n      </div>'.split(";")), 
$$jscomp$templatelit$m179770670$45$$ = $$jscomp$createTemplateTagFirstArg$$(['\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        height="24"\n        viewBox="0 -960 960 960"\n        width="24">\n        <path\n          d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" />\n      </svg>\n    ']), 
$$jscomp$templatelit$m179770670$46$$ = $$jscomp$createTemplateTagFirstArg$$(['\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        height="24"\n        viewBox="0 -960 960 960"\n        width="24">\n        <path\n          d="M331-492 160-663v143H80v-280h280v80H216l172 171-57 57ZM160-160q-33 0-56.5-23.5T80-240v-200h80v200h320v80H160Zm640-280v-280H440v-80h360q33 0 56.5 23.5T880-720v280h-80Zm80 80v200H560v-200h320Z" />\n      </svg>\n    ']), $$jscomp$templatelit$m179770670$47$$ = $$jscomp$createTemplateTagFirstArg$$(['\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        height="24"\n        viewBox="0 -960 960 960"\n        width="24">\n        <path\n          d="M720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm66-106 28-28-74-74v-112h-40v128l86 86ZM520-560h280v52q22 7 42 16.5t38 22.5v-251q0-33-23.5-56.5T800-800H160q-33 0-56.5 23.5T80-720v480q0 33 23.5 56.5T160-160h292q-6-19-9-39t-3-41H160v-480h360v160ZM160-240v-480 480Z" />\n      </svg>\n    ']);
function $blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$() {
  var $$jscomp$super$this$m179770670$41$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.call(this) || this;
  $$jscomp$super$this$m179770670$41$$.appsButtonHidden = !1;
  $$jscomp$super$this$m179770670$41$$.defaultNewTabButtonHidden = !1;
  $$jscomp$super$this$m179770670$41$$.topSitesButtonHidden = !1;
  $$jscomp$super$this$m179770670$41$$.initialLoadComplete = !1;
  $$jscomp$super$this$m179770670$41$$.currentAssetIndex = 0;
  $$jscomp$super$this$m179770670$41$$.$m$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$m179770670$42$$);
  $$jscomp$super$this$m179770670$41$$.creditsUrl = "https://artsandculture.google.com?" + $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_getUtmParams$$();
  $$jscomp$super$this$m179770670$41$$.$l$ = !1;
  $$jscomp$super$this$m179770670$41$$.$g$ = null;
  $$jscomp$super$this$m179770670$41$$.$j$ = [];
  chrome.runtime.onMessage.addListener($$jscomp$super$this$m179770670$41$$.$handleAppMessage$.bind($$jscomp$super$this$m179770670$41$$));
  $$jscomp$super$this$m179770670$41$$.addEventListener("mouseover", $$jscomp$super$this$m179770670$41$$.$revealUi$);
  $$jscomp$super$this$m179770670$41$$.addEventListener("mouseout", $$jscomp$super$this$m179770670$41$$.$hideUi$);
  $JSCompiler_StaticMethods_initialLoadTasks$$($$jscomp$super$this$m179770670$41$$);
  return $$jscomp$super$this$m179770670$41$$;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$);
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$.$elementStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$elementStyles$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$.$__prepare$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__prepare$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$.$createProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$createProperty$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$.$addInitializer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$addInitializer$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$.$finalize$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalize$;
$JSCompiler_prototypeAlias$$ = $blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$.prototype;
$JSCompiler_prototypeAlias$$.$render$ = function() {
  return this.initialLoadComplete ? $JSCompiler_StaticMethods_buildElement$$(this) : this.$m$;
};
function $JSCompiler_StaticMethods_buildElement$$($JSCompiler_StaticMethods_buildElement$self$$) {
  var $$jscomp$optchain$tmpm179770670$0$$;
  $JSCompiler_StaticMethods_buildElement$self$$.style.cssText = "background-image:url(" + $module$contents$google3$third_party$javascript$safevalues$builders$url_builders_sanitizeUrl$$((null == ($$jscomp$optchain$tmpm179770670$0$$ = $JSCompiler_StaticMethods_buildElement$self$$.assetData) ? void 0 : $$jscomp$optchain$tmpm179770670$0$$.data_url) || "") + ");";
  var $$jscomp$optchain$tmpm179770670$1$$, $$jscomp$optchain$tmpm179770670$2$$, $$jscomp$optchain$tmpm179770670$3$$, $$jscomp$optchain$tmpm179770670$4$$, $$jscomp$optchain$tmpm179770670$5$$, $$jscomp$optchain$tmpm179770670$6$$, $$jscomp$nullish$tmp67$$, $$jscomp$nullish$tmp68$$, $$jscomp$nullish$tmp69$$, $$jscomp$nullish$tmp70$$, $$jscomp$nullish$tmp71$$, $$jscomp$nullish$tmp72$$;
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$m179770670$44$$, chrome.i18n.getMessage("topsites"), $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$repeat$repeat$$($JSCompiler_StaticMethods_buildElement$self$$.$j$, function($site$$, $index$jscomp$121$$) {
    return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$m179770670$43$$, $index$jscomp$121$$, $site$$.url, $site$$.title, $site$$.faviconUrl);
  }), chrome.i18n.getMessage("apps"), chrome.i18n.getMessage("apps"), $JSCompiler_StaticMethods_buildElement$self$$.$onApps$, $JSCompiler_StaticMethods_buildElement$self$$.appsButtonHidden, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$m179770670$45$$), chrome.i18n.getMessage("defaultNewTab"), chrome.i18n.getMessage("defaultNewTab"), $JSCompiler_StaticMethods_buildElement$self$$.$onDefaultNewTab$, $JSCompiler_StaticMethods_buildElement$self$$.defaultNewTabButtonHidden, 
  $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$m179770670$46$$), $JSCompiler_StaticMethods_buildElement$self$$.currentAssetIndex, null != ($$jscomp$nullish$tmp67$$ = null == ($$jscomp$optchain$tmpm179770670$1$$ = $JSCompiler_StaticMethods_buildElement$self$$.assetData) ? void 0 : $$jscomp$optchain$tmpm179770670$1$$.title) ? $$jscomp$nullish$tmp67$$ : chrome.i18n.getMessage("untitled"), null != ($$jscomp$nullish$tmp68$$ = null == 
  ($$jscomp$optchain$tmpm179770670$2$$ = $JSCompiler_StaticMethods_buildElement$self$$.assetData) ? void 0 : $$jscomp$optchain$tmpm179770670$2$$.creator) ? $$jscomp$nullish$tmp68$$ : chrome.i18n.getMessage("unknown"), null != ($$jscomp$nullish$tmp69$$ = null == ($$jscomp$optchain$tmpm179770670$3$$ = $JSCompiler_StaticMethods_buildElement$self$$.assetData) ? void 0 : $$jscomp$optchain$tmpm179770670$3$$.attribution) ? $$jscomp$nullish$tmp69$$ : "", chrome.i18n.getMessage("credits"), null != ($$jscomp$nullish$tmp70$$ = 
  null == ($$jscomp$optchain$tmpm179770670$4$$ = $JSCompiler_StaticMethods_buildElement$self$$.assetData) ? void 0 : $$jscomp$optchain$tmpm179770670$4$$.link) ? $$jscomp$nullish$tmp70$$ : "", null != ($$jscomp$nullish$tmp71$$ = null == ($$jscomp$optchain$tmpm179770670$5$$ = $JSCompiler_StaticMethods_buildElement$self$$.assetData) ? void 0 : $$jscomp$optchain$tmpm179770670$5$$.artist_link) ? $$jscomp$nullish$tmp71$$ : "", null != ($$jscomp$nullish$tmp72$$ = null == ($$jscomp$optchain$tmpm179770670$6$$ = 
  $JSCompiler_StaticMethods_buildElement$self$$.assetData) ? void 0 : $$jscomp$optchain$tmpm179770670$6$$.attribution_link) ? $$jscomp$nullish$tmp72$$ : "", $JSCompiler_StaticMethods_buildElement$self$$.creditsUrl, chrome.i18n.getMessage("topsites"), chrome.i18n.getMessage("topsites"), $JSCompiler_StaticMethods_buildElement$self$$.$onTopSites$, $JSCompiler_StaticMethods_buildElement$self$$.topSitesButtonHidden, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$m179770670$47$$));
}
function $JSCompiler_StaticMethods_setAssetData$$($JSCompiler_StaticMethods_setAssetData$self$$, $analyticsScreenTitle_newAsset$$) {
  $JSCompiler_StaticMethods_setAssetData$self$$.assetData = $analyticsScreenTitle_newAsset$$;
  var $$jscomp$optchain$tmpm179770670$7$$, $$jscomp$optchain$tmpm179770670$8$$, $$jscomp$optchain$tmpm179770670$9$$;
  $analyticsScreenTitle_newAsset$$ = (null == ($$jscomp$optchain$tmpm179770670$7$$ = $JSCompiler_StaticMethods_setAssetData$self$$.assetData) ? void 0 : $$jscomp$optchain$tmpm179770670$7$$.creator) + "|" + ((null == ($$jscomp$optchain$tmpm179770670$8$$ = $JSCompiler_StaticMethods_setAssetData$self$$.assetData) ? void 0 : $$jscomp$optchain$tmpm179770670$8$$.title) + "|") + ("" + (null == ($$jscomp$optchain$tmpm179770670$9$$ = $JSCompiler_StaticMethods_setAssetData$self$$.assetData) ? void 0 : $$jscomp$optchain$tmpm179770670$9$$.attribution)).substring(0, 
  100);
  $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_sendGoogleAnalyticsEvent$$("screen_view", {screen_class:"Asset", screen_title:$analyticsScreenTitle_newAsset$$});
}
function $JSCompiler_StaticMethods_initialLoadTasks$$($JSCompiler_StaticMethods_initialLoadTasks$self$$) {
  $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m179770670$49$$) {
    switch($$jscomp$generator$context$m179770670$49$$.$g$) {
      case 1:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$49$$, $JSCompiler_StaticMethods_syncUserSettings$$($JSCompiler_StaticMethods_initialLoadTasks$self$$), 2);
      case 2:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$49$$, $JSCompiler_StaticMethods_syncAssetData$$($JSCompiler_StaticMethods_initialLoadTasks$self$$), 3);
      case 3:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$49$$, $JSCompiler_StaticMethods_populateTopsitesList$$($JSCompiler_StaticMethods_initialLoadTasks$self$$), 4);
      case 4:
        $JSCompiler_StaticMethods_initialLoadTasks$self$$.initialLoadComplete = !0, $$jscomp$generator$context$m179770670$49$$.$g$ = 0;
    }
  });
}
function $JSCompiler_StaticMethods_syncUserSettings$$($JSCompiler_StaticMethods_syncUserSettings$self$$) {
  var $storedSettings$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m179770670$50$$) {
    if (1 == $$jscomp$generator$context$m179770670$50$$.$g$) {
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$50$$, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_getUserSettings$$(), 2);
    }
    $storedSettings$$ = $$jscomp$generator$context$m179770670$50$$.$i$;
    $JSCompiler_StaticMethods_syncUserSettings$self$$.$l$ = $storedSettings$$.turnoverAlways;
    $JSCompiler_StaticMethods_syncUserSettings$self$$.appsButtonHidden = $storedSettings$$.appsButtonHidden;
    $JSCompiler_StaticMethods_syncUserSettings$self$$.defaultNewTabButtonHidden = $storedSettings$$.defaultNewTabButtonHidden;
    $JSCompiler_StaticMethods_syncUserSettings$self$$.topSitesButtonHidden = $storedSettings$$.topSitesButtonHidden;
    $$jscomp$generator$context$m179770670$50$$.$g$ = 0;
  });
}
function $JSCompiler_StaticMethods_syncAssetData$$($JSCompiler_StaticMethods_syncAssetData$self$$) {
  var $success$$, $writeDate$$, $todayDate$$, $JSCompiler_temp_const$jscomp$129$$, $newAssetData$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m179770670$51$$) {
    switch($$jscomp$generator$context$m179770670$51$$.$g$) {
      case 1:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$51$$, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_getCurrentAssetIndex$$(), 2);
      case 2:
        return $JSCompiler_StaticMethods_syncAssetData$self$$.currentAssetIndex = $$jscomp$generator$context$m179770670$51$$.$i$, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$51$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncData$$(), 3);
      case 3:
        $success$$ = $$jscomp$generator$context$m179770670$51$$.$i$;
        if (!$success$$) {
          console.warn("syncData failed");
          $$jscomp$generator$context$m179770670$51$$.$g$ = 0;
          break;
        }
        if ($JSCompiler_StaticMethods_syncAssetData$self$$.$l$) {
          $JSCompiler_StaticMethods_syncAssetData$self$$.currentAssetIndex += 1;
          $$jscomp$generator$context$m179770670$51$$.$g$ = 5;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$51$$, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_getIndexWriteDate$$(), 6);
      case 6:
        if ($writeDate$$ = $$jscomp$generator$context$m179770670$51$$.$i$, $todayDate$$ = $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_dateStrToNumber$$($JSCompiler_StaticMethods_JSC$3723_toIsoString$$(new $goog$date$Date$$(), !1, !1)), 0 === $todayDate$$ || $todayDate$$ > $writeDate$$) {
          $JSCompiler_StaticMethods_syncAssetData$self$$.currentAssetIndex += 1;
        }
      case 5:
        return $JSCompiler_temp_const$jscomp$129$$ = $JSCompiler_StaticMethods_syncAssetData$self$$.currentAssetIndex, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$51$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetCount$$(), 7);
      case 7:
        return $JSCompiler_temp_const$jscomp$129$$ >= $$jscomp$generator$context$m179770670$51$$.$i$ && ($JSCompiler_StaticMethods_syncAssetData$self$$.currentAssetIndex = 0), $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$51$$, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeCurrentAssetIndex$$($JSCompiler_StaticMethods_syncAssetData$self$$.currentAssetIndex), 8);
      case 8:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$51$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_getAssetData$$($JSCompiler_StaticMethods_syncAssetData$self$$.currentAssetIndex), 9);
      case 9:
        $newAssetData$$ = $$jscomp$generator$context$m179770670$51$$.$i$, $JSCompiler_StaticMethods_setAssetData$$($JSCompiler_StaticMethods_syncAssetData$self$$, $newAssetData$$), $JSCompiler_StaticMethods_requestUpdate$$($JSCompiler_StaticMethods_syncAssetData$self$$), $$jscomp$generator$context$m179770670$51$$.$g$ = 0;
    }
  });
}
function $JSCompiler_StaticMethods_populateTopsitesList$$($JSCompiler_StaticMethods_populateTopsitesList$self$$) {
  var $topsitesList$$, $$jscomp$iter$125$$, $$jscomp$key$m179770670$48$topsite$$, $topsite$$, $thisSite$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m179770670$52$$) {
    if (1 == $$jscomp$generator$context$m179770670$52$$.$g$) {
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$52$$, chrome.topSites.get(), 2);
    }
    $topsitesList$$ = $$jscomp$generator$context$m179770670$52$$.$i$;
    $$jscomp$iter$125$$ = $$jscomp$makeIterator$$($topsitesList$$);
    for ($$jscomp$key$m179770670$48$topsite$$ = $$jscomp$iter$125$$.next(); !$$jscomp$key$m179770670$48$topsite$$.done; $$jscomp$key$m179770670$48$topsite$$ = $$jscomp$iter$125$$.next()) {
      $topsite$$ = $$jscomp$key$m179770670$48$topsite$$.value;
      var $JSCompiler_temp_const$jscomp$174$$ = $topsite$$.title, $JSCompiler_temp_const$jscomp$173$$ = $topsite$$.url, $site$jscomp$inline_498$$ = $topsite$$.url, $url$jscomp$inline_499$$ = new URL(chrome.runtime.getURL("/_favicon/"));
      $url$jscomp$inline_499$$.searchParams.set("pageUrl", $site$jscomp$inline_498$$);
      $url$jscomp$inline_499$$.searchParams.set("size", "32");
      $thisSite$$ = {title:$JSCompiler_temp_const$jscomp$174$$, url:$JSCompiler_temp_const$jscomp$173$$, faviconUrl:$url$jscomp$inline_499$$.toString()};
      $JSCompiler_StaticMethods_populateTopsitesList$self$$.$j$.push($thisSite$$);
    }
    $$jscomp$generator$context$m179770670$52$$.$g$ = 0;
  });
}
$JSCompiler_prototypeAlias$$.$handleAppMessage$ = function($message$jscomp$60$$) {
  var $$jscomp$async$this$jscomp$13$$ = this;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m179770670$53$$) {
    switch($$jscomp$generator$context$m179770670$53$$.$g$) {
      case 1:
        switch($message$jscomp$60$$.type) {
          case "updateAsset":
            $$jscomp$generator$context$m179770670$53$$.$g$ = 2;
            return;
          case "userSettingsUpdate":
            if ($message$jscomp$60$$.payload) {
              var $payload$jscomp$inline_507$$ = $message$jscomp$60$$.payload;
              switch($payload$jscomp$inline_507$$.key) {
                case "appsButtonHidden":
                  $$jscomp$async$this$jscomp$13$$.appsButtonHidden = $payload$jscomp$inline_507$$.value;
                  break;
                case "defaultNewTabButtonHidden":
                  $$jscomp$async$this$jscomp$13$$.defaultNewTabButtonHidden = $payload$jscomp$inline_507$$.value;
                  break;
                case "topSitesButtonHidden":
                  $$jscomp$async$this$jscomp$13$$.topSitesButtonHidden = $payload$jscomp$inline_507$$.value;
              }
            }
        }$$jscomp$generator$context$m179770670$53$$.$g$ = 3;
        break;
      case 2:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$53$$, $JSCompiler_StaticMethods_updateAssetData$$($$jscomp$async$this$jscomp$13$$), 4);
      case 4:
        $$jscomp$generator$context$m179770670$53$$.$g$ = 3;
        break;
      case 3:
        return $$jscomp$generator$context$m179770670$53$$.return(!1);
    }
  });
};
function $JSCompiler_StaticMethods_updateAssetData$$($JSCompiler_StaticMethods_updateAssetData$self$$) {
  var $newAssetData$jscomp$1$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m179770670$54$$) {
    if (1 == $$jscomp$generator$context$m179770670$54$$.$g$) {
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$54$$, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_getCurrentAssetIndex$$(), 2);
    }
    if (3 != $$jscomp$generator$context$m179770670$54$$.$g$) {
      return $JSCompiler_StaticMethods_updateAssetData$self$$.currentAssetIndex = $$jscomp$generator$context$m179770670$54$$.$i$, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m179770670$54$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_getAssetData$$($JSCompiler_StaticMethods_updateAssetData$self$$.currentAssetIndex), 3);
    }
    $newAssetData$jscomp$1$$ = $$jscomp$generator$context$m179770670$54$$.$i$;
    $JSCompiler_StaticMethods_setAssetData$$($JSCompiler_StaticMethods_updateAssetData$self$$, $newAssetData$jscomp$1$$);
    $JSCompiler_StaticMethods_requestUpdate$$($JSCompiler_StaticMethods_updateAssetData$self$$);
    $$jscomp$generator$context$m179770670$54$$.$g$ = 0;
  });
}
$JSCompiler_prototypeAlias$$.$revealUi$ = function() {
  this.$uiDivTop$ && this.$uiDivBottom$ && (this.$uiDivTop$.classList.remove("hideui"), this.$uiDivBottom$.classList.remove("hideui"), null != this.$g$ && window.clearTimeout(this.$g$));
};
$JSCompiler_prototypeAlias$$.$hideUi$ = function() {
  var $$jscomp$this$m179770670$36$$ = this;
  this.$uiDivTop$ && this.$uiDivBottom$ && (this.$g$ = window.setTimeout(function() {
    var $$jscomp$optchain$tmpm179770670$10$$;
    null == ($$jscomp$optchain$tmpm179770670$10$$ = $$jscomp$this$m179770670$36$$.$uiDivTop$) || $$jscomp$optchain$tmpm179770670$10$$.classList.add("hideui");
    var $$jscomp$optchain$tmpm179770670$11$$;
    null == ($$jscomp$optchain$tmpm179770670$11$$ = $$jscomp$this$m179770670$36$$.$uiDivBottom$) || $$jscomp$optchain$tmpm179770670$11$$.classList.add("hideui");
  }, 1E3));
};
function $JSCompiler_StaticMethods_changeTabUrl$$($url$jscomp$84$$) {
  window.setTimeout(function() {
    chrome.tabs.update({url:$url$jscomp$84$$});
  }, 100);
}
$JSCompiler_prototypeAlias$$.$onApps$ = function() {
  $JSCompiler_StaticMethods_changeTabUrl$$("chrome://apps/");
  $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_sendGoogleAnalyticsEvent$$("apps_button_clicked", {});
};
$JSCompiler_prototypeAlias$$.$onDefaultNewTab$ = function() {
  $JSCompiler_StaticMethods_changeTabUrl$$("chrome://new-tab-page/");
  $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_sendGoogleAnalyticsEvent$$("default_newtab_button_clicked", {});
};
$JSCompiler_prototypeAlias$$.$onTopSites$ = function() {
  this.$topsitesDialog$.show();
  $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_sendGoogleAnalyticsEvent$$("topsites_button_clicked", {});
};
var $module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$ = $blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$newtab$newtab_closure$classdecl$var17$$;
$module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$.$styles$ = [$module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$2ecss$styles$$];
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$.prototype, "appsButtonHidden", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$.prototype, "defaultNewTabButtonHidden", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$.prototype, "topSitesButtonHidden", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$.prototype, "initialLoadComplete", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({$attribute$:!1, state:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$.prototype, "currentAssetIndex", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({$attribute$:!1, type:Object}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$.prototype, "assetData", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$("#uitop"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", HTMLDivElement)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$.prototype, "$uiDivTop$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$("#uibottom"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", HTMLDivElement)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$.prototype, "$uiDivBottom$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$("#topsitesdialog"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", HTMLDialogElement)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$.prototype, "$topsitesDialog$", void 0);
$module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("gac-art-newtab"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:paramtypes", [])], $module$exports$google3$cultural$integrations$chromeextensions$arttab$newtab$newtab$Newtab$$);

//# sourceMappingURL=js_newtab.nodeps.sourcemap
