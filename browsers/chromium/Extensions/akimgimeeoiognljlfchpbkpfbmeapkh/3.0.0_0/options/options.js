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
function $$jscomp$polyfill$$($property$jscomp$inline_152_split$jscomp$inline_149_target$jscomp$97$$, $impl$jscomp$inline_154_polyfill$jscomp$1$$) {
  if ($impl$jscomp$inline_154_polyfill$jscomp$1$$) {
    a: {
      var $obj$jscomp$inline_148$$ = $$jscomp$global$$;
      $property$jscomp$inline_152_split$jscomp$inline_149_target$jscomp$97$$ = $property$jscomp$inline_152_split$jscomp$inline_149_target$jscomp$97$$.split(".");
      for (var $i$jscomp$inline_150_orig$jscomp$inline_153$$ = 0; $i$jscomp$inline_150_orig$jscomp$inline_153$$ < $property$jscomp$inline_152_split$jscomp$inline_149_target$jscomp$97$$.length - 1; $i$jscomp$inline_150_orig$jscomp$inline_153$$++) {
        var $key$jscomp$inline_151$$ = $property$jscomp$inline_152_split$jscomp$inline_149_target$jscomp$97$$[$i$jscomp$inline_150_orig$jscomp$inline_153$$];
        if (!($key$jscomp$inline_151$$ in $obj$jscomp$inline_148$$)) {
          break a;
        }
        $obj$jscomp$inline_148$$ = $obj$jscomp$inline_148$$[$key$jscomp$inline_151$$];
      }
      $property$jscomp$inline_152_split$jscomp$inline_149_target$jscomp$97$$ = $property$jscomp$inline_152_split$jscomp$inline_149_target$jscomp$97$$[$property$jscomp$inline_152_split$jscomp$inline_149_target$jscomp$97$$.length - 1];
      $i$jscomp$inline_150_orig$jscomp$inline_153$$ = $obj$jscomp$inline_148$$[$property$jscomp$inline_152_split$jscomp$inline_149_target$jscomp$97$$];
      $impl$jscomp$inline_154_polyfill$jscomp$1$$ = $impl$jscomp$inline_154_polyfill$jscomp$1$$($i$jscomp$inline_150_orig$jscomp$inline_153$$);
      $impl$jscomp$inline_154_polyfill$jscomp$1$$ != $i$jscomp$inline_150_orig$jscomp$inline_153$$ && null != $impl$jscomp$inline_154_polyfill$jscomp$1$$ && $$jscomp$defineProperty$$($obj$jscomp$inline_148$$, $property$jscomp$inline_152_split$jscomp$inline_149_target$jscomp$97$$, {configurable:!0, writable:!0, value:$impl$jscomp$inline_154_polyfill$jscomp$1$$});
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
function $$jscomp$arrayFromIterable$$($JSCompiler_temp$jscomp$115_iterable$jscomp$5_iterator$jscomp$inline_156$$) {
  if (!($JSCompiler_temp$jscomp$115_iterable$jscomp$5_iterator$jscomp$inline_156$$ instanceof Array)) {
    $JSCompiler_temp$jscomp$115_iterable$jscomp$5_iterator$jscomp$inline_156$$ = $$jscomp$makeIterator$$($JSCompiler_temp$jscomp$115_iterable$jscomp$5_iterator$jscomp$inline_156$$);
    for (var $i$jscomp$inline_157$$, $arr$jscomp$inline_158$$ = []; !($i$jscomp$inline_157$$ = $JSCompiler_temp$jscomp$115_iterable$jscomp$5_iterator$jscomp$inline_156$$.next()).done;) {
      $arr$jscomp$inline_158$$.push($i$jscomp$inline_157$$.value);
    }
    $JSCompiler_temp$jscomp$115_iterable$jscomp$5_iterator$jscomp$inline_156$$ = $arr$jscomp$inline_158$$;
  }
  return $JSCompiler_temp$jscomp$115_iterable$jscomp$5_iterator$jscomp$inline_156$$;
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
}(), $JSCompiler_temp$jscomp$116$$;
if ("function" == typeof Object.setPrototypeOf) {
  $JSCompiler_temp$jscomp$116$$ = Object.setPrototypeOf;
} else {
  var $JSCompiler_inline_result$jscomp$117$$;
  a: {
    var $x$jscomp$inline_160$$ = {a:!0}, $y$jscomp$inline_161$$ = {};
    try {
      $y$jscomp$inline_161$$.__proto__ = $x$jscomp$inline_160$$;
      $JSCompiler_inline_result$jscomp$117$$ = $y$jscomp$inline_161$$.a;
      break a;
    } catch ($e$jscomp$inline_162$$) {
    }
    $JSCompiler_inline_result$jscomp$117$$ = !1;
  }
  $JSCompiler_temp$jscomp$116$$ = $JSCompiler_inline_result$jscomp$117$$ ? function($target$jscomp$103$$, $proto$jscomp$4$$) {
    $target$jscomp$103$$.__proto__ = $proto$jscomp$4$$;
    if ($target$jscomp$103$$.__proto__ !== $proto$jscomp$4$$) {
      throw new TypeError($target$jscomp$103$$ + " is not extensible");
    }
    return $target$jscomp$103$$;
  } : null;
}
var $$jscomp$setPrototypeOf$$ = $JSCompiler_temp$jscomp$116$$;
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
function $JSCompiler_StaticMethods_JSC$3498_throw_$$($JSCompiler_StaticMethods_JSC$3498_throw_$self$$, $e$jscomp$8$$) {
  $JSCompiler_StaticMethods_JSC$3498_throw_$self$$.$l$ = {$exception$:$e$jscomp$8$$, isException:!0};
  $JSCompiler_StaticMethods_JSC$3498_throw_$self$$.$g$ = $JSCompiler_StaticMethods_JSC$3498_throw_$self$$.$o$ || $JSCompiler_StaticMethods_JSC$3498_throw_$self$$.$u$;
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
    return $JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$.$j$ = null, $JSCompiler_StaticMethods_JSC$3498_throw_$$($JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$, $e$jscomp$9$$), $JSCompiler_StaticMethods_nextStep_$$($JSCompiler_StaticMethods_yieldAllStep_$self$$);
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
      $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$i$ = void 0, $JSCompiler_StaticMethods_JSC$3498_throw_$$($JSCompiler_StaticMethods_nextStep_$self$$.$g$, $e$jscomp$10$$);
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
  this.next = function($JSCompiler_inline_result$jscomp$122_opt_value$jscomp$10$$) {
    $JSCompiler_StaticMethods_start_$$($engine$$.$g$);
    $engine$$.$g$.$j$ ? $JSCompiler_inline_result$jscomp$122_opt_value$jscomp$10$$ = $JSCompiler_StaticMethods_yieldAllStep_$$($engine$$, $engine$$.$g$.$j$.next, $JSCompiler_inline_result$jscomp$122_opt_value$jscomp$10$$, $engine$$.$g$.$s$) : ($engine$$.$g$.$s$($JSCompiler_inline_result$jscomp$122_opt_value$jscomp$10$$), $JSCompiler_inline_result$jscomp$122_opt_value$jscomp$10$$ = $JSCompiler_StaticMethods_nextStep_$$($engine$$));
    return $JSCompiler_inline_result$jscomp$122_opt_value$jscomp$10$$;
  };
  this.throw = function($JSCompiler_inline_result$jscomp$123_exception$jscomp$4$$) {
    $JSCompiler_StaticMethods_start_$$($engine$$.$g$);
    $engine$$.$g$.$j$ ? $JSCompiler_inline_result$jscomp$123_exception$jscomp$4$$ = $JSCompiler_StaticMethods_yieldAllStep_$$($engine$$, $engine$$.$g$.$j$["throw"], $JSCompiler_inline_result$jscomp$123_exception$jscomp$4$$, $engine$$.$g$.$s$) : ($JSCompiler_StaticMethods_JSC$3498_throw_$$($engine$$.$g$, $JSCompiler_inline_result$jscomp$123_exception$jscomp$4$$), $JSCompiler_inline_result$jscomp$123_exception$jscomp$4$$ = $JSCompiler_StaticMethods_nextStep_$$($engine$$));
    return $JSCompiler_inline_result$jscomp$123_exception$jscomp$4$$;
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
              var $JSCompiler_inline_result$jscomp$126$$ = null != $value$jscomp$101$$;
              break a;
            case "function":
              $JSCompiler_inline_result$jscomp$126$$ = !0;
              break a;
            default:
              $JSCompiler_inline_result$jscomp$126$$ = !1;
          }
        }
        $JSCompiler_inline_result$jscomp$126$$ ? this.$B$($value$jscomp$101$$) : this.$o$($value$jscomp$101$$);
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
  function $makeIterator$$($map$jscomp$3$$, $func$jscomp$3$$) {
    var $entry$jscomp$8$$ = $map$jscomp$3$$[1];
    return $$jscomp$iteratorPrototype$$(function() {
      if ($entry$jscomp$8$$) {
        for (; $entry$jscomp$8$$.head != $map$jscomp$3$$[1];) {
          $entry$jscomp$8$$ = $entry$jscomp$8$$.previous;
        }
        for (; $entry$jscomp$8$$.next != $entry$jscomp$8$$.head;) {
          return $entry$jscomp$8$$ = $entry$jscomp$8$$.next, {done:!1, value:$func$jscomp$3$$($entry$jscomp$8$$)};
        }
        $entry$jscomp$8$$ = null;
      }
      return {done:!0, value:void 0};
    });
  }
  function $maybeGetEntry$$($index$jscomp$103_map$jscomp$2$$, $key$jscomp$53$$) {
    var $id$jscomp$31_id$jscomp$inline_184_type$jscomp$inline_183$$ = $key$jscomp$53$$ && typeof $key$jscomp$53$$;
    "object" == $id$jscomp$31_id$jscomp$inline_184_type$jscomp$inline_183$$ || "function" == $id$jscomp$31_id$jscomp$inline_184_type$jscomp$inline_183$$ ? $idMap$$.has($key$jscomp$53$$) ? $id$jscomp$31_id$jscomp$inline_184_type$jscomp$inline_183$$ = $idMap$$.get($key$jscomp$53$$) : ($id$jscomp$31_id$jscomp$inline_184_type$jscomp$inline_183$$ = "" + ++$mapIndex$$, $idMap$$.set($key$jscomp$53$$, $id$jscomp$31_id$jscomp$inline_184_type$jscomp$inline_183$$)) : $id$jscomp$31_id$jscomp$inline_184_type$jscomp$inline_183$$ = 
    "p_" + $key$jscomp$53$$;
    var $list$$ = $index$jscomp$103_map$jscomp$2$$[0][$id$jscomp$31_id$jscomp$inline_184_type$jscomp$inline_183$$];
    if ($list$$ && $$jscomp$owns$$($index$jscomp$103_map$jscomp$2$$[0], $id$jscomp$31_id$jscomp$inline_184_type$jscomp$inline_183$$)) {
      for ($index$jscomp$103_map$jscomp$2$$ = 0; $index$jscomp$103_map$jscomp$2$$ < $list$$.length; $index$jscomp$103_map$jscomp$2$$++) {
        var $entry$jscomp$7$$ = $list$$[$index$jscomp$103_map$jscomp$2$$];
        if ($key$jscomp$53$$ !== $key$jscomp$53$$ && $entry$jscomp$7$$.key !== $entry$jscomp$7$$.key || $key$jscomp$53$$ === $entry$jscomp$7$$.key) {
          return {id:$id$jscomp$31_id$jscomp$inline_184_type$jscomp$inline_183$$, list:$list$$, index:$index$jscomp$103_map$jscomp$2$$, entry:$entry$jscomp$7$$};
        }
      }
    }
    return {id:$id$jscomp$31_id$jscomp$inline_184_type$jscomp$inline_183$$, list:$list$$, index:-1, entry:void 0};
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
function $$jscomp$checkStringArgs$$($thisArg$jscomp$14$$, $arg$jscomp$8$$, $func$jscomp$4$$) {
  if (null == $thisArg$jscomp$14$$) {
    throw new TypeError("The 'this' value for String.prototype." + $func$jscomp$4$$ + " must not be null or undefined");
  }
  if ($arg$jscomp$8$$ instanceof RegExp) {
    throw new TypeError("First argument to String.prototype." + $func$jscomp$4$$ + " must not be a regular expression");
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
function $$jscomp$iteratorFromArray$$($array$jscomp$8$$, $transform$jscomp$1$$) {
  $array$jscomp$8$$ instanceof String && ($array$jscomp$8$$ += "");
  var $i$jscomp$14$$ = 0, $done$$ = !1, $iter$jscomp$5$$ = {next:function() {
    if (!$done$$ && $i$jscomp$14$$ < $array$jscomp$8$$.length) {
      var $index$jscomp$104$$ = $i$jscomp$14$$++;
      return {value:$transform$jscomp$1$$($index$jscomp$104$$, $array$jscomp$8$$[$index$jscomp$104$$]), done:!1};
    }
    $done$$ = !0;
    return {done:!0, value:void 0};
  }};
  $iter$jscomp$5$$[Symbol.iterator] = function() {
    return $iter$jscomp$5$$;
  };
  return $iter$jscomp$5$$;
}
$$jscomp$polyfill$$("Array.prototype.keys", function($orig$jscomp$11$$) {
  return $orig$jscomp$11$$ ? $orig$jscomp$11$$ : function() {
    return $$jscomp$iteratorFromArray$$(this, function($i$jscomp$16$$) {
      return $i$jscomp$16$$;
    });
  };
});
$$jscomp$polyfill$$("String.prototype.startsWith", function($orig$jscomp$12$$) {
  return $orig$jscomp$12$$ ? $orig$jscomp$12$$ : function($searchString$jscomp$4$$, $i$jscomp$17_opt_position$jscomp$4$$) {
    var $string$jscomp$4$$ = $$jscomp$checkStringArgs$$(this, $searchString$jscomp$4$$, "startsWith"), $strLen$$ = $string$jscomp$4$$.length, $searchLen$$ = $searchString$jscomp$4$$.length;
    $i$jscomp$17_opt_position$jscomp$4$$ = Math.max(0, Math.min($i$jscomp$17_opt_position$jscomp$4$$ | 0, $string$jscomp$4$$.length));
    for (var $j$jscomp$1$$ = 0; $j$jscomp$1$$ < $searchLen$$ && $i$jscomp$17_opt_position$jscomp$4$$ < $strLen$$;) {
      if ($string$jscomp$4$$[$i$jscomp$17_opt_position$jscomp$4$$++] != $searchString$jscomp$4$$[$j$jscomp$1$$++]) {
        return !1;
      }
    }
    return $j$jscomp$1$$ >= $searchLen$$;
  };
});
$$jscomp$polyfill$$("Number.isFinite", function($orig$jscomp$13$$) {
  return $orig$jscomp$13$$ ? $orig$jscomp$13$$ : function($x$jscomp$96$$) {
    return "number" !== typeof $x$jscomp$96$$ ? !1 : !isNaN($x$jscomp$96$$) && Infinity !== $x$jscomp$96$$ && -Infinity !== $x$jscomp$96$$;
  };
});
$$jscomp$polyfill$$("Set", function($NativeSet$$) {
  function $PolyfillSet$$($iter$jscomp$7_opt_iterable$jscomp$6$$) {
    this.$g$ = new Map();
    if ($iter$jscomp$7_opt_iterable$jscomp$6$$) {
      $iter$jscomp$7_opt_iterable$jscomp$6$$ = $$jscomp$makeIterator$$($iter$jscomp$7_opt_iterable$jscomp$6$$);
      for (var $entry$jscomp$9$$; !($entry$jscomp$9$$ = $iter$jscomp$7_opt_iterable$jscomp$6$$.next()).done;) {
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
      var $iter$jscomp$6$$ = $set$$.entries(), $item$jscomp$26$$ = $iter$jscomp$6$$.next();
      if ($item$jscomp$26$$.done || $item$jscomp$26$$.value[0] != $value$jscomp$106$$ || $item$jscomp$26$$.value[1] != $value$jscomp$106$$) {
        return !1;
      }
      $item$jscomp$26$$ = $iter$jscomp$6$$.next();
      return $item$jscomp$26$$.done || $item$jscomp$26$$.value[0] == $value$jscomp$106$$ || 4 != $item$jscomp$26$$.value[0].x || $item$jscomp$26$$.value[1] != $item$jscomp$26$$.value[0] ? !1 : $iter$jscomp$6$$.next().done;
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
  $PolyfillSet$$.prototype.delete = function($result$jscomp$7_value$jscomp$108$$) {
    $result$jscomp$7_value$jscomp$108$$ = this.$g$.delete($result$jscomp$7_value$jscomp$108$$);
    this.size = this.$g$.size;
    return $result$jscomp$7_value$jscomp$108$$;
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
$$jscomp$polyfill$$("Array.from", function($orig$jscomp$15$$) {
  return $orig$jscomp$15$$ ? $orig$jscomp$15$$ : function($arrayLike$jscomp$1$$, $opt_mapFn$jscomp$1$$, $opt_thisArg$jscomp$14$$) {
    $opt_mapFn$jscomp$1$$ = null != $opt_mapFn$jscomp$1$$ ? $opt_mapFn$jscomp$1$$ : function($x$jscomp$97$$) {
      return $x$jscomp$97$$;
    };
    var $result$jscomp$8$$ = [], $iteratorFunction$jscomp$1_len_next$jscomp$1$$ = "undefined" != typeof Symbol && Symbol.iterator && $arrayLike$jscomp$1$$[Symbol.iterator];
    if ("function" == typeof $iteratorFunction$jscomp$1_len_next$jscomp$1$$) {
      $arrayLike$jscomp$1$$ = $iteratorFunction$jscomp$1_len_next$jscomp$1$$.call($arrayLike$jscomp$1$$);
      for (var $i$jscomp$18_k$$ = 0; !($iteratorFunction$jscomp$1_len_next$jscomp$1$$ = $arrayLike$jscomp$1$$.next()).done;) {
        $result$jscomp$8$$.push($opt_mapFn$jscomp$1$$.call($opt_thisArg$jscomp$14$$, $iteratorFunction$jscomp$1_len_next$jscomp$1$$.value, $i$jscomp$18_k$$++));
      }
    } else {
      for ($iteratorFunction$jscomp$1_len_next$jscomp$1$$ = $arrayLike$jscomp$1$$.length, $i$jscomp$18_k$$ = 0; $i$jscomp$18_k$$ < $iteratorFunction$jscomp$1_len_next$jscomp$1$$; $i$jscomp$18_k$$++) {
        $result$jscomp$8$$.push($opt_mapFn$jscomp$1$$.call($opt_thisArg$jscomp$14$$, $arrayLike$jscomp$1$$[$i$jscomp$18_k$$], $i$jscomp$18_k$$));
      }
    }
    return $result$jscomp$8$$;
  };
});
$$jscomp$polyfill$$("Object.is", function($orig$jscomp$16$$) {
  return $orig$jscomp$16$$ ? $orig$jscomp$16$$ : function($left$jscomp$2$$, $right$jscomp$2$$) {
    return $left$jscomp$2$$ === $right$jscomp$2$$ ? 0 !== $left$jscomp$2$$ || 1 / $left$jscomp$2$$ === 1 / $right$jscomp$2$$ : $left$jscomp$2$$ !== $left$jscomp$2$$ && $right$jscomp$2$$ !== $right$jscomp$2$$;
  };
});
$$jscomp$polyfill$$("Array.prototype.includes", function($orig$jscomp$17$$) {
  return $orig$jscomp$17$$ ? $orig$jscomp$17$$ : function($searchElement$jscomp$5$$, $i$jscomp$19_opt_fromIndex$jscomp$11$$) {
    var $array$jscomp$9$$ = this;
    $array$jscomp$9$$ instanceof String && ($array$jscomp$9$$ = String($array$jscomp$9$$));
    var $len$jscomp$1$$ = $array$jscomp$9$$.length;
    $i$jscomp$19_opt_fromIndex$jscomp$11$$ = $i$jscomp$19_opt_fromIndex$jscomp$11$$ || 0;
    for (0 > $i$jscomp$19_opt_fromIndex$jscomp$11$$ && ($i$jscomp$19_opt_fromIndex$jscomp$11$$ = Math.max($i$jscomp$19_opt_fromIndex$jscomp$11$$ + $len$jscomp$1$$, 0)); $i$jscomp$19_opt_fromIndex$jscomp$11$$ < $len$jscomp$1$$; $i$jscomp$19_opt_fromIndex$jscomp$11$$++) {
      var $element$jscomp$13$$ = $array$jscomp$9$$[$i$jscomp$19_opt_fromIndex$jscomp$11$$];
      if ($element$jscomp$13$$ === $searchElement$jscomp$5$$ || Object.is($element$jscomp$13$$, $searchElement$jscomp$5$$)) {
        return !0;
      }
    }
    return !1;
  };
});
$$jscomp$polyfill$$("String.prototype.includes", function($orig$jscomp$18$$) {
  return $orig$jscomp$18$$ ? $orig$jscomp$18$$ : function($searchString$jscomp$5$$, $opt_position$jscomp$5$$) {
    return -1 !== $$jscomp$checkStringArgs$$(this, $searchString$jscomp$5$$, "includes").indexOf($searchString$jscomp$5$$, $opt_position$jscomp$5$$ || 0);
  };
});
$$jscomp$polyfill$$("Array.prototype.values", function($orig$jscomp$19$$) {
  return $orig$jscomp$19$$ ? $orig$jscomp$19$$ : function() {
    return $$jscomp$iteratorFromArray$$(this, function($k$jscomp$1$$, $v$jscomp$2$$) {
      return $v$jscomp$2$$;
    });
  };
});
$$jscomp$polyfill$$("Array.prototype.fill", function($orig$jscomp$20$$) {
  return $orig$jscomp$20$$ ? $orig$jscomp$20$$ : function($value$jscomp$111$$, $i$jscomp$20_opt_start$$, $opt_end$jscomp$9$$) {
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
function $$jscomp$typedArrayFill$$($orig$jscomp$21$$) {
  return $orig$jscomp$21$$ ? $orig$jscomp$21$$ : Array.prototype.fill;
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
$$jscomp$polyfill$$("Array.prototype.flat", function($orig$jscomp$22$$) {
  return $orig$jscomp$22$$ ? $orig$jscomp$22$$ : function($depth$jscomp$9$$) {
    $depth$jscomp$9$$ = void 0 === $depth$jscomp$9$$ ? 1 : $depth$jscomp$9$$;
    var $flattened$$ = [];
    Array.prototype.forEach.call(this, function($element$jscomp$14_inner$$) {
      Array.isArray($element$jscomp$14_inner$$) && 0 < $depth$jscomp$9$$ ? ($element$jscomp$14_inner$$ = Array.prototype.flat.call($element$jscomp$14_inner$$, $depth$jscomp$9$$ - 1), $flattened$$.push.apply($flattened$$, $element$jscomp$14_inner$$)) : $flattened$$.push($element$jscomp$14_inner$$);
    });
    return $flattened$$;
  };
});
$$jscomp$polyfill$$("Array.prototype.find", function($orig$jscomp$24$$) {
  return $orig$jscomp$24$$ ? $orig$jscomp$24$$ : function($JSCompiler_object_inline_v_397_callback$jscomp$470$$, $opt_thisArg$jscomp$15$$) {
    a: {
      var $array$jscomp$inline_186$$ = this;
      $array$jscomp$inline_186$$ instanceof String && ($array$jscomp$inline_186$$ = String($array$jscomp$inline_186$$));
      for (var $len$jscomp$inline_189$$ = $array$jscomp$inline_186$$.length, $i$jscomp$inline_190$$ = 0; $i$jscomp$inline_190$$ < $len$jscomp$inline_189$$; $i$jscomp$inline_190$$++) {
        var $value$jscomp$inline_191$$ = $array$jscomp$inline_186$$[$i$jscomp$inline_190$$];
        if ($JSCompiler_object_inline_v_397_callback$jscomp$470$$.call($opt_thisArg$jscomp$15$$, $value$jscomp$inline_191$$, $i$jscomp$inline_190$$, $array$jscomp$inline_186$$)) {
          $JSCompiler_object_inline_v_397_callback$jscomp$470$$ = $value$jscomp$inline_191$$;
          break a;
        }
      }
      $JSCompiler_object_inline_v_397_callback$jscomp$470$$ = void 0;
    }
    return $JSCompiler_object_inline_v_397_callback$jscomp$470$$;
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
    for (var $args$jscomp$4$$ = Array(arguments.length - 2), $i$jscomp$25$$ = 2; $i$jscomp$25$$ < arguments.length; $i$jscomp$25$$++) {
      $args$jscomp$4$$[$i$jscomp$25$$ - 2] = arguments[$i$jscomp$25$$];
    }
    return $parentCtor$jscomp$1$$.prototype[$methodName$$].apply($me$$, $args$jscomp$4$$);
  };
}
function $goog$identity_$$($s$jscomp$6$$) {
  return $s$jscomp$6$$;
}
;function $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$($decorators$$, $target$jscomp$109$$, $key$jscomp$62$$, $desc$$) {
  var $c$$ = arguments.length, $r$jscomp$3$$ = 3 > $c$$ ? $target$jscomp$109$$ : null === $desc$$ ? $desc$$ = Object.getOwnPropertyDescriptor($target$jscomp$109$$, $key$jscomp$62$$) : $desc$$, $d$jscomp$2$$;
  if ("object" === typeof Reflect && Reflect && "function" === typeof Reflect.decorate) {
    $r$jscomp$3$$ = Reflect.decorate($decorators$$, $target$jscomp$109$$, $key$jscomp$62$$, $desc$$);
  } else {
    for (var $i$jscomp$38$$ = $decorators$$.length - 1; 0 <= $i$jscomp$38$$; $i$jscomp$38$$--) {
      if ($d$jscomp$2$$ = $decorators$$[$i$jscomp$38$$]) {
        $r$jscomp$3$$ = (3 > $c$$ ? $d$jscomp$2$$($r$jscomp$3$$) : 3 < $c$$ ? $d$jscomp$2$$($target$jscomp$109$$, $key$jscomp$62$$, $r$jscomp$3$$) : $d$jscomp$2$$($target$jscomp$109$$, $key$jscomp$62$$)) || $r$jscomp$3$$;
      }
    }
  }
  return 3 < $c$$ && $r$jscomp$3$$ && Object.defineProperty($target$jscomp$109$$, $key$jscomp$62$$, $r$jscomp$3$$), $r$jscomp$3$$;
}
function $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$($metadataKey$$, $metadataValue$$) {
  if ("object" === typeof Reflect && Reflect && "function" === typeof Reflect.metadata) {
    return Reflect.metadata($metadataKey$$, $metadataValue$$);
  }
}
;function $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_writeData$$($key$jscomp$64$$, $data$jscomp$89$$) {
  var $local$$ = void 0 === $local$$ ? !1 : $local$$;
  var $$jscomp$compprop64$$, $$jscomp$compprop63$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$309632135$0$$) {
    if ($local$$) {
      return $$jscomp$compprop63$$ = {}, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$309632135$0$$, chrome.storage.local.set(($$jscomp$compprop63$$[$key$jscomp$64$$] = $data$jscomp$89$$, $$jscomp$compprop63$$)), 0);
    }
    $$jscomp$compprop64$$ = {};
    return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$309632135$0$$, chrome.storage.sync.set(($$jscomp$compprop64$$[$key$jscomp$64$$] = $data$jscomp$89$$, $$jscomp$compprop64$$)), 0);
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_readData$$($key$jscomp$65$$) {
  var $local$jscomp$1$$ = void 0 === $local$jscomp$1$$ ? !1 : $local$jscomp$1$$;
  var $data$jscomp$90$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$309632135$1$$) {
    switch($$jscomp$generator$context$309632135$1$$.$g$) {
      case 1:
        return $local$jscomp$1$$ ? $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$309632135$1$$, chrome.storage.local.get([$key$jscomp$65$$]), 5) : $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$309632135$1$$, chrome.storage.sync.get([$key$jscomp$65$$]), 4);
      case 4:
        $data$jscomp$90$$ = $$jscomp$generator$context$309632135$1$$.$i$;
        $$jscomp$generator$context$309632135$1$$.$g$ = 3;
        break;
      case 5:
        $data$jscomp$90$$ = $$jscomp$generator$context$309632135$1$$.$i$;
      case 3:
        return $$jscomp$generator$context$309632135$1$$.return($data$jscomp$90$$ ? $data$jscomp$90$$[$key$jscomp$65$$] : "");
    }
  });
}
;function $module$contents$goog$debug$Error_DebugError$$($msg$jscomp$1$$, $cause$$) {
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
function $module$contents$goog$asserts_AssertionError$$($messagePattern_splitParts$jscomp$inline_198$$, $messageArgs$$) {
  $messagePattern_splitParts$jscomp$inline_198$$ = $messagePattern_splitParts$jscomp$inline_198$$.split("%s");
  for (var $returnString$jscomp$inline_199$$ = "", $subLast$jscomp$inline_200$$ = $messagePattern_splitParts$jscomp$inline_198$$.length - 1, $i$jscomp$inline_201$$ = 0; $i$jscomp$inline_201$$ < $subLast$jscomp$inline_200$$; $i$jscomp$inline_201$$++) {
    $returnString$jscomp$inline_199$$ += $messagePattern_splitParts$jscomp$inline_198$$[$i$jscomp$inline_201$$] + ($i$jscomp$inline_201$$ < $messageArgs$$.length ? $messageArgs$$[$i$jscomp$inline_201$$] : "%s");
  }
  $module$contents$goog$debug$Error_DebugError$$.call(this, $returnString$jscomp$inline_199$$ + $messagePattern_splitParts$jscomp$inline_198$$[$subLast$jscomp$inline_200$$]);
}
$goog$inherits$$($module$contents$goog$asserts_AssertionError$$, $module$contents$goog$debug$Error_DebugError$$);
$module$contents$goog$asserts_AssertionError$$.prototype.name = "AssertionError";
var $goog$html$trustedtypes$cachedPolicy_$$;
function $goog$html$TrustedResourceUrl$$($value$jscomp$132$$) {
  this.$g$ = $value$jscomp$132$$;
}
$goog$html$TrustedResourceUrl$$.prototype.toString = function() {
  return this.$g$ + "";
};
function $goog$html$TrustedResourceUrl$unwrapTrustedScriptURL$$($trustedResourceUrl$jscomp$1$$) {
  return $trustedResourceUrl$jscomp$1$$ instanceof $goog$html$TrustedResourceUrl$$ && $trustedResourceUrl$jscomp$1$$.constructor === $goog$html$TrustedResourceUrl$$ ? $trustedResourceUrl$jscomp$1$$.$g$ : "type_error:TrustedResourceUrl";
}
var $goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$ = {};
function $goog$html$TrustedResourceUrl$createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse$$($noinlineUrl_url$jscomp$34_value$jscomp$133$$) {
  if (void 0 === $goog$html$trustedtypes$cachedPolicy_$$) {
    var $JSCompiler_inline_result$jscomp$400_policy$jscomp$inline_424$$ = null;
    var $policyFactory$jscomp$inline_425$$ = $goog$global$$.trustedTypes;
    if ($policyFactory$jscomp$inline_425$$ && $policyFactory$jscomp$inline_425$$.createPolicy) {
      try {
        $JSCompiler_inline_result$jscomp$400_policy$jscomp$inline_424$$ = $policyFactory$jscomp$inline_425$$.createPolicy("goog#html", {createHTML:$goog$identity_$$, createScript:$goog$identity_$$, createScriptURL:$goog$identity_$$});
      } catch ($e$jscomp$inline_426$$) {
        $goog$global$$.console && $goog$global$$.console.error($e$jscomp$inline_426$$.message);
      }
      $goog$html$trustedtypes$cachedPolicy_$$ = $JSCompiler_inline_result$jscomp$400_policy$jscomp$inline_424$$;
    } else {
      $goog$html$trustedtypes$cachedPolicy_$$ = $JSCompiler_inline_result$jscomp$400_policy$jscomp$inline_424$$;
    }
  }
  $noinlineUrl_url$jscomp$34_value$jscomp$133$$ = ($JSCompiler_inline_result$jscomp$400_policy$jscomp$inline_424$$ = $goog$html$trustedtypes$cachedPolicy_$$) ? $JSCompiler_inline_result$jscomp$400_policy$jscomp$inline_424$$.createScriptURL($noinlineUrl_url$jscomp$34_value$jscomp$133$$) : $noinlineUrl_url$jscomp$34_value$jscomp$133$$;
  return new $goog$html$TrustedResourceUrl$$($noinlineUrl_url$jscomp$34_value$jscomp$133$$, $goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$);
}
;function $module$contents$goog$html$SafeHtml_SafeHtml$$($value$jscomp$161$$) {
  this.$g$ = $value$jscomp$161$$;
}
$module$contents$goog$html$SafeHtml_SafeHtml$$.prototype.toString = function() {
  return this.$g$.toString();
};
function $module$contents$goog$html$SafeHtml_SafeHtml$unwrapTrustedHTML$$($safeHtml$jscomp$1$$) {
  return $safeHtml$jscomp$1$$ instanceof $module$contents$goog$html$SafeHtml_SafeHtml$$ && $safeHtml$jscomp$1$$.constructor === $module$contents$goog$html$SafeHtml_SafeHtml$$ ? $safeHtml$jscomp$1$$.$g$ : "type_error:SafeHtml";
}
var $module$contents$goog$html$SafeHtml_SafeHtml$EMPTY$$ = new $module$contents$goog$html$SafeHtml_SafeHtml$$($goog$global$$.trustedTypes && $goog$global$$.trustedTypes.emptyHTML || "", {});
var $goog$string$repeat$$ = String.prototype.repeat ? function($string$jscomp$8$$, $length$jscomp$19$$) {
  return $string$jscomp$8$$.repeat($length$jscomp$19$$);
} : function($string$jscomp$9$$, $length$jscomp$20$$) {
  return Array($length$jscomp$20$$ + 1).join($string$jscomp$9$$);
};
function $goog$string$padNumber$$($num$jscomp$6_s$jscomp$22$$, $length$jscomp$21$$) {
  if (!Number.isFinite($num$jscomp$6_s$jscomp$22$$)) {
    return String($num$jscomp$6_s$jscomp$22$$);
  }
  $num$jscomp$6_s$jscomp$22$$ = String($num$jscomp$6_s$jscomp$22$$);
  var $index$jscomp$115$$ = $num$jscomp$6_s$jscomp$22$$.indexOf(".");
  -1 === $index$jscomp$115$$ && ($index$jscomp$115$$ = $num$jscomp$6_s$jscomp$22$$.length);
  var $sign$$ = "-" === $num$jscomp$6_s$jscomp$22$$[0] ? "-" : "";
  $sign$$ && ($num$jscomp$6_s$jscomp$22$$ = $num$jscomp$6_s$jscomp$22$$.substring(1));
  return $sign$$ + $goog$string$repeat$$("0", Math.max(0, $length$jscomp$21$$ - $index$jscomp$115$$)) + $num$jscomp$6_s$jscomp$22$$;
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
$JSCompiler_prototypeAlias$$.add = function($interval$jscomp$3_result$jscomp$23$$) {
  if ($interval$jscomp$3_result$jscomp$23$$.$j$ || $interval$jscomp$3_result$jscomp$23$$.$i$) {
    var $month$jscomp$9_yearAdjustment$$ = this.getMonth() + $interval$jscomp$3_result$jscomp$23$$.$i$ + 12 * $interval$jscomp$3_result$jscomp$23$$.$j$, $initialYear_year$jscomp$14$$ = this.getFullYear() + Math.floor($month$jscomp$9_yearAdjustment$$ / 12);
    $month$jscomp$9_yearAdjustment$$ %= 12;
    0 > $month$jscomp$9_yearAdjustment$$ && ($month$jscomp$9_yearAdjustment$$ += 12);
    a: {
      switch($month$jscomp$9_yearAdjustment$$) {
        case 1:
          var $JSCompiler_inline_result$jscomp$131_date$jscomp$15$$ = 0 != $initialYear_year$jscomp$14$$ % 4 || 0 == $initialYear_year$jscomp$14$$ % 100 && 0 != $initialYear_year$jscomp$14$$ % 400 ? 28 : 29;
          break a;
        case 5:
        case 8:
        case 10:
        case 3:
          $JSCompiler_inline_result$jscomp$131_date$jscomp$15$$ = 30;
          break a;
      }
      $JSCompiler_inline_result$jscomp$131_date$jscomp$15$$ = 31;
    }
    $JSCompiler_inline_result$jscomp$131_date$jscomp$15$$ = Math.min($JSCompiler_inline_result$jscomp$131_date$jscomp$15$$, this.getDate());
    this.$g$.setDate(1);
    this.$g$.setFullYear($initialYear_year$jscomp$14$$);
    this.$g$.setMonth($month$jscomp$9_yearAdjustment$$);
    this.$g$.setDate($JSCompiler_inline_result$jscomp$131_date$jscomp$15$$);
  }
  $interval$jscomp$3_result$jscomp$23$$.$g$ && ($initialYear_year$jscomp$14$$ = this.getFullYear(), $month$jscomp$9_yearAdjustment$$ = 0 <= $initialYear_year$jscomp$14$$ && 99 >= $initialYear_year$jscomp$14$$ ? -1900 : 0, $interval$jscomp$3_result$jscomp$23$$ = new Date((new Date($initialYear_year$jscomp$14$$, this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * $interval$jscomp$3_result$jscomp$23$$.$g$), this.$g$.setDate(1), this.$g$.setFullYear($interval$jscomp$3_result$jscomp$23$$.getFullYear() + 
  $month$jscomp$9_yearAdjustment$$), this.$g$.setMonth($interval$jscomp$3_result$jscomp$23$$.getMonth()), this.$g$.setDate($interval$jscomp$3_result$jscomp$23$$.getDate()), $JSCompiler_StaticMethods_maybeFixDst_$$(this, $interval$jscomp$3_result$jscomp$23$$.getDate()));
};
function $JSCompiler_StaticMethods_JSC$3590_toIsoString$$($JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$, $JSCompiler_temp_const$jscomp$133_opt_verbose$jscomp$1$$, $h$jscomp$inline_240_opt_tz$$) {
  var $m$jscomp$inline_241_n$jscomp$inline_239_year$jscomp$inline_233$$ = $JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$.getFullYear(), $sign$jscomp$inline_234$$ = 0 > $m$jscomp$inline_241_n$jscomp$inline_239_year$jscomp$inline_233$$ ? "-" : 1E4 <= $m$jscomp$inline_241_n$jscomp$inline_239_year$jscomp$inline_233$$ ? "+" : "";
  $JSCompiler_temp_const$jscomp$133_opt_verbose$jscomp$1$$ = [$sign$jscomp$inline_234$$ + $goog$string$padNumber$$(Math.abs($m$jscomp$inline_241_n$jscomp$inline_239_year$jscomp$inline_233$$), $sign$jscomp$inline_234$$ ? 6 : 4), $goog$string$padNumber$$($JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$.getMonth() + 1, 2), $goog$string$padNumber$$($JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$.getDate(), 
  2)].join($JSCompiler_temp_const$jscomp$133_opt_verbose$jscomp$1$$ ? "-" : "");
  $h$jscomp$inline_240_opt_tz$$ ? ($JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$ = $JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$.$g$.getTimezoneOffset(), 0 == $JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$ ? $JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$ = 
  "Z" : ($m$jscomp$inline_241_n$jscomp$inline_239_year$jscomp$inline_233$$ = Math.abs($JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$) / 60, $h$jscomp$inline_240_opt_tz$$ = Math.floor($m$jscomp$inline_241_n$jscomp$inline_239_year$jscomp$inline_233$$), $m$jscomp$inline_241_n$jscomp$inline_239_year$jscomp$inline_233$$ = 60 * ($m$jscomp$inline_241_n$jscomp$inline_239_year$jscomp$inline_233$$ - $h$jscomp$inline_240_opt_tz$$), 
  $JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$ = (0 < $JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$ ? "-" : "+") + $goog$string$padNumber$$($h$jscomp$inline_240_opt_tz$$, 2) + ":" + $goog$string$padNumber$$($m$jscomp$inline_241_n$jscomp$inline_239_year$jscomp$inline_233$$, 2))) : $JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$ = 
  "";
  return $JSCompiler_temp_const$jscomp$133_opt_verbose$jscomp$1$$ + $JSCompiler_StaticMethods_JSC$3590_toIsoString$self_JSCompiler_temp$jscomp$134_offset$jscomp$inline_238_tz$jscomp$inline_237$$;
}
$JSCompiler_prototypeAlias$$.toString = function() {
  return $JSCompiler_StaticMethods_JSC$3590_toIsoString$$(this);
};
function $JSCompiler_StaticMethods_maybeFixDst_$$($JSCompiler_StaticMethods_maybeFixDst_$self$$, $expected$$) {
  $JSCompiler_StaticMethods_maybeFixDst_$self$$.getDate() != $expected$$ && $JSCompiler_StaticMethods_maybeFixDst_$self$$.$g$.setUTCHours($JSCompiler_StaticMethods_maybeFixDst_$self$$.$g$.getUTCHours() + ($JSCompiler_StaticMethods_maybeFixDst_$self$$.getDate() < $expected$$ ? 1 : -1));
}
$JSCompiler_prototypeAlias$$.valueOf = function() {
  return this.$g$.valueOf();
};
var $$jscomp$compprop65$$ = {}, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_DEFAULT_USER_SETTINGS$$ = ($$jscomp$compprop65$$.turnoverAlways = !1, $$jscomp$compprop65$$.appsButtonHidden = !1, $$jscomp$compprop65$$.defaultNewTabButtonHidden = !1, $$jscomp$compprop65$$.topSitesButtonHidden = !1, $$jscomp$compprop65$$);
function $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_getUserSettings$$() {
  var $userSettings$$, $$jscomp$iter$70$$, $$jscomp$key$680228004$16$key$jscomp$98$$, $key$jscomp$98$$, $storedValueStr$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$680228004$19$$) {
    switch($$jscomp$generator$context$680228004$19$$.$g$) {
      case 1:
        var $res$jscomp$inline_244$$ = {}, $key$jscomp$inline_245$$;
        for ($key$jscomp$inline_245$$ in $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_DEFAULT_USER_SETTINGS$$) {
          $res$jscomp$inline_244$$[$key$jscomp$inline_245$$] = $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_DEFAULT_USER_SETTINGS$$[$key$jscomp$inline_245$$];
        }
        $userSettings$$ = $res$jscomp$inline_244$$;
        $$jscomp$iter$70$$ = $$jscomp$makeIterator$$(Object.keys($userSettings$$));
        $$jscomp$key$680228004$16$key$jscomp$98$$ = $$jscomp$iter$70$$.next();
      case 2:
        if ($$jscomp$key$680228004$16$key$jscomp$98$$.done) {
          $$jscomp$generator$context$680228004$19$$.$g$ = 4;
          break;
        }
        $key$jscomp$98$$ = $$jscomp$key$680228004$16$key$jscomp$98$$.value;
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$680228004$19$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_readData$$($key$jscomp$98$$), 5);
      case 5:
        ($storedValueStr$$ = $$jscomp$generator$context$680228004$19$$.$i$) && ($userSettings$$[$key$jscomp$98$$] = JSON.parse($storedValueStr$$));
        $$jscomp$key$680228004$16$key$jscomp$98$$ = $$jscomp$iter$70$$.next();
        $$jscomp$generator$context$680228004$19$$.$g$ = 2;
        break;
      case 4:
        return $$jscomp$generator$context$680228004$19$$.return($userSettings$$);
    }
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeUserSetting$$($key$jscomp$99$$, $value$jscomp$189$$) {
  $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$680228004$20$$) {
    return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$680228004$20$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_writeData$$($key$jscomp$99$$, JSON.stringify($value$jscomp$189$$)), 0);
  });
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
    }, $cssForScope$$ = function($name$jscomp$105$$) {
      var $scopeCss$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_scopeCssStore$$.get($name$jscomp$105$$);
      void 0 === $scopeCss$$ && $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_scopeCssStore$$.set($name$jscomp$105$$, $scopeCss$$ = []);
      return $scopeCss$$;
    }, $scopedTemplateCache$$ = new Map(), $originalCreateElement$$ = $Template$$.createElement;
    $Template$$.createElement = function($element$jscomp$24_html$jscomp$12$$, $options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$) {
      $element$jscomp$24_html$jscomp$12$$ = $originalCreateElement$$.call($Template$$, $element$jscomp$24_html$jscomp$12$$, $options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$);
      $options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$ = null == $options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$ ? void 0 : $options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$.scope;
      void 0 !== $options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$ && (window.ShadyCSS.nativeShadow || window.ShadyCSS.prepareTemplateDom($element$jscomp$24_html$jscomp$12$$, $options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$), void 0 === $options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$ || $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_styledScopes$$.has($options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$) || ($options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$ = 
      $cssForScope$$($options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$), $options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$.push.apply($options$jscomp$124_scope$jscomp$1_scopeCss$jscomp$2$$, $$jscomp$arrayFromIterable$$(Array.from($element$jscomp$24_html$jscomp$12$$.content.querySelectorAll("style")).map(function($style$jscomp$10$$) {
        var $$jscomp$optchain$tmpm255315871$5$$;
        null == ($$jscomp$optchain$tmpm255315871$5$$ = $style$jscomp$10$$.parentNode) || $$jscomp$optchain$tmpm255315871$5$$.removeChild($style$jscomp$10$$);
        return $style$jscomp$10$$.textContent;
      })))));
      return $element$jscomp$24_html$jscomp$12$$;
    };
    var $renderContainer$$ = document.createDocumentFragment(), $renderContainerMarker$$ = document.createComment("");
    $ChildPart_childPartProto$$ = $ChildPart_childPartProto$$.prototype;
    var $setValue$$ = $ChildPart_childPartProto$$.$_$setValue$;
    $ChildPart_childPartProto$$.$_$setValue$ = function($template$jscomp$5_value$jscomp$191$$, $directiveParent$jscomp$1_scopeCss$jscomp$inline_255$$) {
      $directiveParent$jscomp$1_scopeCss$jscomp$inline_255$$ = void 0 === $directiveParent$jscomp$1_scopeCss$jscomp$inline_255$$ ? this : $directiveParent$jscomp$1_scopeCss$jscomp$inline_255$$;
      var $container$jscomp$1$$ = $wrap$$(this.$_$startNode$).parentNode, $$jscomp$optchain$tmpm255315871$6_startNode$$, $scope$jscomp$2_style$jscomp$inline_258$$ = null == ($$jscomp$optchain$tmpm255315871$6_startNode$$ = this.options) ? void 0 : $$jscomp$optchain$tmpm255315871$6_startNode$$.scope, $$jscomp$optchain$tmpm255315871$7_endNode$$;
      if (($container$jscomp$1$$ instanceof ShadowRoot || $container$jscomp$1$$ === (null == ($$jscomp$optchain$tmpm255315871$7_endNode$$ = this.options) ? void 0 : $$jscomp$optchain$tmpm255315871$7_endNode$$.$renderContainer$)) && void 0 !== $scope$jscomp$2_style$jscomp$inline_258$$ && !$module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_styledScopes$$.has($scope$jscomp$2_style$jscomp$inline_258$$)) {
        $$jscomp$optchain$tmpm255315871$6_startNode$$ = this.$_$startNode$;
        $$jscomp$optchain$tmpm255315871$7_endNode$$ = this.$_$endNode$;
        $renderContainer$$.appendChild($renderContainerMarker$$);
        this.$_$startNode$ = $renderContainerMarker$$;
        this.$_$endNode$ = null;
        $setValue$$.call(this, $template$jscomp$5_value$jscomp$191$$, $directiveParent$jscomp$1_scopeCss$jscomp$inline_255$$);
        $template$jscomp$5_value$jscomp$191$$ = (null == $template$jscomp$5_value$jscomp$191$$ ? 0 : $template$jscomp$5_value$jscomp$191$$._$litType$) ? this.$_$committedValue$.$_$template$.$el$ : document.createElement("template");
        $directiveParent$jscomp$1_scopeCss$jscomp$inline_255$$ = $cssForScope$$($scope$jscomp$2_style$jscomp$inline_258$$);
        var $hasScopeCss$jscomp$inline_256$$ = 0 !== $directiveParent$jscomp$1_scopeCss$jscomp$inline_255$$.length;
        if ($hasScopeCss$jscomp$inline_256$$) {
          var $style$jscomp$inline_257$$ = document.createElement("style");
          $style$jscomp$inline_257$$.textContent = $directiveParent$jscomp$1_scopeCss$jscomp$inline_255$$.join("\n");
          $template$jscomp$5_value$jscomp$191$$.content.appendChild($style$jscomp$inline_257$$);
        }
        $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_styledScopes$$.add($scope$jscomp$2_style$jscomp$inline_258$$);
        $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_scopeCssStore$$.delete($scope$jscomp$2_style$jscomp$inline_258$$);
        window.ShadyCSS.prepareTemplateStyles($template$jscomp$5_value$jscomp$191$$, $scope$jscomp$2_style$jscomp$inline_258$$);
        $hasScopeCss$jscomp$inline_256$$ && window.ShadyCSS.nativeShadow && ($scope$jscomp$2_style$jscomp$inline_258$$ = $template$jscomp$5_value$jscomp$191$$.content.querySelector("style"), null !== $scope$jscomp$2_style$jscomp$inline_258$$ && $template$jscomp$5_value$jscomp$191$$.content.appendChild($scope$jscomp$2_style$jscomp$inline_258$$));
        $renderContainer$$.removeChild($renderContainerMarker$$);
        var $$jscomp$optchain$tmpm255315871$9_style$jscomp$11$$;
        if (null == ($$jscomp$optchain$tmpm255315871$9_style$jscomp$11$$ = window.ShadyCSS) ? 0 : $$jscomp$optchain$tmpm255315871$9_style$jscomp$11$$.nativeShadow) {
          $$jscomp$optchain$tmpm255315871$9_style$jscomp$11$$ = $template$jscomp$5_value$jscomp$191$$.content.querySelector("style"), null !== $$jscomp$optchain$tmpm255315871$9_style$jscomp$11$$ && $renderContainer$$.appendChild($$jscomp$optchain$tmpm255315871$9_style$jscomp$11$$.cloneNode(!0));
        }
        $container$jscomp$1$$.insertBefore($renderContainer$$, $$jscomp$optchain$tmpm255315871$7_endNode$$);
        this.$_$startNode$ = $$jscomp$optchain$tmpm255315871$6_startNode$$;
        this.$_$endNode$ = $$jscomp$optchain$tmpm255315871$7_endNode$$;
      } else {
        $setValue$$.call(this, $template$jscomp$5_value$jscomp$191$$, $directiveParent$jscomp$1_scopeCss$jscomp$inline_255$$);
      }
    };
    $ChildPart_childPartProto$$.$_$getTemplate$ = function($result$jscomp$25$$) {
      var $$jscomp$optchain$tmpm255315871$10_templateCache$$, $scope$jscomp$3_template$jscomp$6$$ = null == ($$jscomp$optchain$tmpm255315871$10_templateCache$$ = this.options) ? void 0 : $$jscomp$optchain$tmpm255315871$10_templateCache$$.scope;
      $$jscomp$optchain$tmpm255315871$10_templateCache$$ = $scopedTemplateCache$$.get($scope$jscomp$3_template$jscomp$6$$);
      void 0 === $$jscomp$optchain$tmpm255315871$10_templateCache$$ && $scopedTemplateCache$$.set($scope$jscomp$3_template$jscomp$6$$, $$jscomp$optchain$tmpm255315871$10_templateCache$$ = new Map());
      $scope$jscomp$3_template$jscomp$6$$ = $$jscomp$optchain$tmpm255315871$10_templateCache$$.get($result$jscomp$25$$.$strings$);
      void 0 === $scope$jscomp$3_template$jscomp$6$$ && $$jscomp$optchain$tmpm255315871$10_templateCache$$.set($result$jscomp$25$$.$strings$, $scope$jscomp$3_template$jscomp$6$$ = new $Template$$($result$jscomp$25$$, this.options));
      return $scope$jscomp$3_template$jscomp$6$$;
    };
  }
}
var $$jscomp$logical$assign$tmpm255315871$1$$;
null != ($$jscomp$logical$assign$tmpm255315871$1$$ = window).litHtmlPolyfillSupport || ($$jscomp$logical$assign$tmpm255315871$1$$.litHtmlPolyfillSupport = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_polyfillSupport$$);
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_symbolKey$$ = "";
if (window.Symbol) {
  var $s$jscomp$24$$ = Symbol();
  "symbol" !== typeof $s$jscomp$24$$ && ($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_symbolKey$$ = Object.keys($s$jscomp$24$$)[0]);
}
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_needsSymbolSupport$$ = "" !== $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_symbolKey$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport$isPolyfilledSymbol$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_needsSymbolSupport$$ ? function($value$jscomp$192$$) {
  return null != $value$jscomp$192$$ && void 0 !== $value$jscomp$192$$[$module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_symbolKey$$];
} : function() {
  return !1;
};
if ($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport_needsSymbolSupport$$ && !window.Symbol.for) {
  var $map$jscomp$6$$ = new Map();
  window.Symbol.for = function($key$jscomp$101$$) {
    $map$jscomp$6$$.has($key$jscomp$101$$) || $map$jscomp$6$$.set($key$jscomp$101$$, Symbol($key$jscomp$101$$));
    return $map$jscomp$6$$.get($key$jscomp$101$$);
  };
}
;function $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$polyfill$2dsupport_polyfillSupport$$($$jscomp$destructuring$var1_elementProto$$) {
  if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
    $$jscomp$destructuring$var1_elementProto$$ = $$jscomp$destructuring$var1_elementProto$$.ReactiveElement.prototype;
    window.ShadyDOM && window.ShadyDOM.inUse && !0 === window.ShadyDOM.noPatch && window.ShadyDOM.patchElementProto($$jscomp$destructuring$var1_elementProto$$);
    var $createRenderRoot$$ = $$jscomp$destructuring$var1_elementProto$$.$createRenderRoot$;
    $$jscomp$destructuring$var1_elementProto$$.$createRenderRoot$ = function() {
      var $name$jscomp$107$$ = this.localName;
      if (window.ShadyCSS.nativeShadow) {
        return $createRenderRoot$$.call(this);
      }
      if (!this.constructor.hasOwnProperty("__scoped")) {
        this.constructor.__scoped = !0;
        var $css$$ = this.constructor.$elementStyles$.map(function($v$jscomp$22$$) {
          return $v$jscomp$22$$ instanceof CSSStyleSheet ? Array.from($v$jscomp$22$$.cssRules).reduce(function($a$jscomp$12$$, $r$jscomp$8$$) {
            return $a$jscomp$12$$ + $r$jscomp$8$$.cssText;
          }, "") : $v$jscomp$22$$.cssText;
        }), $$jscomp$optchain$tmp138717800$2$$, $$jscomp$optchain$tmp138717800$3$$;
        null == ($$jscomp$optchain$tmp138717800$2$$ = window.ShadyCSS) || null == ($$jscomp$optchain$tmp138717800$3$$ = $$jscomp$optchain$tmp138717800$2$$.ScopingShim) || $$jscomp$optchain$tmp138717800$3$$.prepareAdoptedCssText($css$$, $name$jscomp$107$$);
        void 0 === this.constructor.$_$handlesPrepareStyles$ && window.ShadyCSS.prepareTemplateStyles(document.createElement("template"), $name$jscomp$107$$);
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
/*

 Copyright 2019 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
/*

 SPDX-License-Identifier: Apache-2.0
*/
var $$jscomp$templatelit$m917256334$9$$ = $$jscomp$createTemplateTagFirstArg$$(["about:invalid#zClosurez"]), $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity$sanitizerFactory$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_realSanitizerFactory$$;
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_realSanitizerFactory$$($baseToCheck_node$jscomp$14$$, $name$jscomp$113_rawName$$, $type$jscomp$181$$) {
  if (1 !== $baseToCheck_node$jscomp$14$$.nodeType) {
    return $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_allowAnything$$;
  }
  $name$jscomp$113_rawName$$ = $name$jscomp$113_rawName$$.toLowerCase();
  if ("innerhtml" === $name$jscomp$113_rawName$$ || "innertext" === $name$jscomp$113_rawName$$ || "textcontent" === $name$jscomp$113_rawName$$ || "outerhtml" === $name$jscomp$113_rawName$$) {
    return function() {
      return $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_fallbackHtml$$;
    };
  }
  var $contract$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_securityContracts$$.get($baseToCheck_node$jscomp$14$$.tagName + " " + $name$jscomp$113_rawName$$);
  return void 0 !== $contract$$ ? $contract$$ : /^on/.test($name$jscomp$113_rawName$$) && "attribute" === $type$jscomp$181$$ && ($baseToCheck_node$jscomp$14$$ = $baseToCheck_node$jscomp$14$$.tagName.includes("-") ? HTMLElement.prototype : $baseToCheck_node$jscomp$14$$, $name$jscomp$113_rawName$$ in $baseToCheck_node$jscomp$14$$) ? function() {
    throw Error("invalid binding");
  } : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_allowAnything$$;
}
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_BLOCK_JAVASCRIPT_URL_PATTERN$$ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_fallbackTrustedUrl$$ = $goog$html$TrustedResourceUrl$unwrapTrustedScriptURL$$(function($templateObj$jscomp$8$$) {
  var $rest$jscomp$2$$ = $$jscomp$getRestArguments$$.apply(1, arguments);
  if (0 === $rest$jscomp$2$$.length) {
    return $goog$html$TrustedResourceUrl$createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse$$($templateObj$jscomp$8$$[0]);
  }
  for (var $url$jscomp$80$$ = $templateObj$jscomp$8$$[0], $i$jscomp$121$$ = 0; $i$jscomp$121$$ < $rest$jscomp$2$$.length; $i$jscomp$121$$++) {
    $url$jscomp$80$$ += encodeURIComponent($rest$jscomp$2$$[$i$jscomp$121$$]) + $templateObj$jscomp$8$$[$i$jscomp$121$$ + 1];
  }
  return $goog$html$TrustedResourceUrl$createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse$$($url$jscomp$80$$);
}($$jscomp$templatelit$m917256334$9$$)), $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_fallbackHtml$$ = $module$contents$goog$html$SafeHtml_SafeHtml$unwrapTrustedHTML$$($module$contents$goog$html$SafeHtml_SafeHtml$EMPTY$$);
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_allowAnything$$($value$jscomp$207$$) {
  return $value$jscomp$207$$;
}
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_onlyForbidJavascriptUrls$$($url$jscomp$82$$) {
  return $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_BLOCK_JAVASCRIPT_URL_PATTERN$$.test(String($url$jscomp$82$$)) ? $url$jscomp$82$$ : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity_fallbackTrustedUrl$$;
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
}, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustedTypes$$ = $goog$global$$.trustedTypes, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_policy$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustedTypes$$ ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustedTypes$$.createPolicy("lit-html", {createHTML:function($s$jscomp$28$$) {
  return $s$jscomp$28$$;
}}) : void 0;
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_identityFunction$$($value$jscomp$210$$) {
  return $value$jscomp$210$$;
}
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_noopSanitizer$$() {
  return $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_identityFunction$$;
}
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$ = "lit$" + String(Math.random()).slice(9) + "$", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_markerMatch$$ = "?" + $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_nodeMarker$$ = "<" + $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_markerMatch$$ + 
">", $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$ = document;
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isPrimitive$$($value$jscomp$211$$) {
  return null === $value$jscomp$211$$ || "object" != typeof $value$jscomp$211$$ && "function" != typeof $value$jscomp$211$$ || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$polyfill$2dsupport$isPolyfilledSymbol$$($value$jscomp$211$$);
}
var $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isArray$$ = Array.isArray, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_textEndRegex$$ = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_commentEndRegex$$ = /--\x3e/g, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_comment2EndRegex$$ = 
/>/g, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$ = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"), $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_singleQuoteAttrEndRegex$$ = /'/g, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_doubleQuoteAttrEndRegex$$ = /"/g, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_rawTextElement$$ = 
/^(?:script|style|textarea|title)$/i;
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($strings$jscomp$1$$) {
  var $values$jscomp$14$$ = $$jscomp$getRestArguments$$.apply(1, arguments), $$jscomp$compprop67$$ = {};
  return $$jscomp$compprop67$$._$litType$ = 1, $$jscomp$compprop67$$.$strings$ = $strings$jscomp$1$$, $$jscomp$compprop67$$.values = $values$jscomp$14$$, $$jscomp$compprop67$$;
}
var $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$ = Symbol.for ? Symbol.for("lit-noChange") : Symbol("lit-noChange"), $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ = Symbol.for ? Symbol.for("lit-nothing") : Symbol("lit-nothing"), $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_templateCache$$ = new WeakMap(), $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$ = 
$module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createTreeWalker($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$, 129);
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustFromTemplateString$$($tsa$$, $stringFromTSA$$) {
  if (!Array.isArray($tsa$$) || !$tsa$$.hasOwnProperty("raw")) {
    throw Error("invalid template strings array");
  }
  return void 0 !== $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_policy$$ ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_policy$$.createHTML($stringFromTSA$$) : $stringFromTSA$$;
}
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$Template$$($$jscomp$destructuring$var13_nodeIndex$$, $node$jscomp$18_options$jscomp$134_svgElement$$) {
  var $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$ = $$jscomp$destructuring$var13_nodeIndex$$.$strings$, $$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$ = $$jscomp$destructuring$var13_nodeIndex$$._$litType$;
  this.$g$ = [];
  for (var $attrNameIndex$$ = $$jscomp$destructuring$var13_nodeIndex$$ = 0, $partCount$$ = $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$.length - 1, $parts$jscomp$10$$ = this.$g$, $i$jscomp$125_l$jscomp$inline_262_statics$jscomp$1$$ = $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$.length - 1, $attrNames$jscomp$inline_263_m$jscomp$7_realName$$ = [], $html$jscomp$inline_264$$ = 
  2 === $$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$ ? "<svg>" : "", $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$, $regex$jscomp$inline_266$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_textEndRegex$$, $i$jscomp$inline_267$$ = 0; $i$jscomp$inline_267$$ < $i$jscomp$125_l$jscomp$inline_262_statics$jscomp$1$$; $i$jscomp$inline_267$$++) {
    for (var $s$jscomp$inline_268$$ = $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$[$i$jscomp$inline_267$$], $$jscomp$inline_273_attrNameEndIndex$jscomp$inline_269$$ = -1, $attrName$jscomp$inline_270$$ = void 0, $end$jscomp$inline_274_lastIndex$jscomp$inline_271$$ = 0, $match$jscomp$inline_272$$; $end$jscomp$inline_274_lastIndex$jscomp$inline_271$$ < $s$jscomp$inline_268$$.length;) {
      $regex$jscomp$inline_266$$.lastIndex = $end$jscomp$inline_274_lastIndex$jscomp$inline_271$$;
      $match$jscomp$inline_272$$ = $regex$jscomp$inline_266$$.exec($s$jscomp$inline_268$$);
      if (null === $match$jscomp$inline_272$$) {
        break;
      }
      $end$jscomp$inline_274_lastIndex$jscomp$inline_271$$ = $regex$jscomp$inline_266$$.lastIndex;
      $regex$jscomp$inline_266$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_textEndRegex$$ ? "!--" === $match$jscomp$inline_272$$[1] ? $regex$jscomp$inline_266$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_commentEndRegex$$ : void 0 !== $match$jscomp$inline_272$$[1] ? $regex$jscomp$inline_266$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_comment2EndRegex$$ : void 0 !== 
      $match$jscomp$inline_272$$[2] ? ($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_rawTextElement$$.test($match$jscomp$inline_272$$[2]) && ($$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$ = new RegExp("</" + $match$jscomp$inline_272$$[2], "g")), $regex$jscomp$inline_266$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$) : 
      void 0 !== $match$jscomp$inline_272$$[3] && ($regex$jscomp$inline_266$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$) : $regex$jscomp$inline_266$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$ ? ">" === $match$jscomp$inline_272$$[0] ? ($$jscomp$inline_273_attrNameEndIndex$jscomp$inline_269$$ = void 0, $regex$jscomp$inline_266$$ = null != ($$jscomp$inline_273_attrNameEndIndex$jscomp$inline_269$$ = 
      $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$) ? $$jscomp$inline_273_attrNameEndIndex$jscomp$inline_269$$ : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_textEndRegex$$, $$jscomp$inline_273_attrNameEndIndex$jscomp$inline_269$$ = -1) : void 0 === $match$jscomp$inline_272$$[1] ? $$jscomp$inline_273_attrNameEndIndex$jscomp$inline_269$$ = -2 : ($$jscomp$inline_273_attrNameEndIndex$jscomp$inline_269$$ = 
      $regex$jscomp$inline_266$$.lastIndex - $match$jscomp$inline_272$$[2].length, $attrName$jscomp$inline_270$$ = $match$jscomp$inline_272$$[1], $regex$jscomp$inline_266$$ = void 0 === $match$jscomp$inline_272$$[3] ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$ : '"' === $match$jscomp$inline_272$$[3] ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_doubleQuoteAttrEndRegex$$ : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_singleQuoteAttrEndRegex$$) : 
      $regex$jscomp$inline_266$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_doubleQuoteAttrEndRegex$$ || $regex$jscomp$inline_266$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_singleQuoteAttrEndRegex$$ ? $regex$jscomp$inline_266$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$ : $regex$jscomp$inline_266$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_commentEndRegex$$ || 
      $regex$jscomp$inline_266$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_comment2EndRegex$$ ? $regex$jscomp$inline_266$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_textEndRegex$$ : ($regex$jscomp$inline_266$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$, $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$ = 
      void 0);
    }
    $end$jscomp$inline_274_lastIndex$jscomp$inline_271$$ = $regex$jscomp$inline_266$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_tagEndRegex$$ && $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$[$i$jscomp$inline_267$$ + 1].startsWith("/>") ? " " : "";
    $html$jscomp$inline_264$$ += $regex$jscomp$inline_266$$ === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_textEndRegex$$ ? $s$jscomp$inline_268$$ + $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_nodeMarker$$ : 0 <= $$jscomp$inline_273_attrNameEndIndex$jscomp$inline_269$$ ? ($attrNames$jscomp$inline_263_m$jscomp$7_realName$$.push($attrName$jscomp$inline_270$$), $s$jscomp$inline_268$$.slice(0, $$jscomp$inline_273_attrNameEndIndex$jscomp$inline_269$$) + 
    "$lit$" + $s$jscomp$inline_268$$.slice($$jscomp$inline_273_attrNameEndIndex$jscomp$inline_269$$)) + $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$ + $end$jscomp$inline_274_lastIndex$jscomp$inline_271$$ : $s$jscomp$inline_268$$ + $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$ + (-2 === $$jscomp$inline_273_attrNameEndIndex$jscomp$inline_269$$ ? $i$jscomp$inline_267$$ : $end$jscomp$inline_274_lastIndex$jscomp$inline_271$$);
  }
  $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$ = [$module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustFromTemplateString$$($$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$, $html$jscomp$inline_264$$ + ($$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$[$i$jscomp$125_l$jscomp$inline_262_statics$jscomp$1$$] || 
  "<?>") + (2 === $$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$ ? "</svg>" : "")), $attrNames$jscomp$inline_263_m$jscomp$7_realName$$];
  $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$ = $$jscomp$makeIterator$$($$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$);
  $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$ = $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$.next().value;
  $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$ = $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$.next().value;
  this.$el$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$Template$$.createElement($$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$, $node$jscomp$18_options$jscomp$134_svgElement$$);
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.currentNode = this.$el$.content;
  2 === $$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$ && ($node$jscomp$18_options$jscomp$134_svgElement$$ = this.$el$.content.firstChild, $node$jscomp$18_options$jscomp$134_svgElement$$.replaceWith.apply($node$jscomp$18_options$jscomp$134_svgElement$$, $$jscomp$arrayFromIterable$$($node$jscomp$18_options$jscomp$134_svgElement$$.childNodes)));
  for (; null !== ($node$jscomp$18_options$jscomp$134_svgElement$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.nextNode()) && $parts$jscomp$10$$.length < $partCount$$;) {
    if (1 === $node$jscomp$18_options$jscomp$134_svgElement$$.nodeType) {
      if ($node$jscomp$18_options$jscomp$134_svgElement$$.hasAttributes()) {
        for ($$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$ = $$jscomp$makeIterator$$($node$jscomp$18_options$jscomp$134_svgElement$$.getAttributeNames()), $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$ = $$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$.next(); !$$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$.done; $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$ = 
        $$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$.next()) {
          $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$ = $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$.value, $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$.endsWith("$lit$") ? ($attrNames$jscomp$inline_263_m$jscomp$7_realName$$ = 
          $$jscomp$destructuring$var15_JSCompiler_inline_result$jscomp$135_attrNames__tsickle_destructured_2_strings$jscomp$4$$[$attrNameIndex$$++], $i$jscomp$125_l$jscomp$inline_262_statics$jscomp$1$$ = $node$jscomp$18_options$jscomp$134_svgElement$$.getAttribute($$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$).split($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$), 
          $attrNames$jscomp$inline_263_m$jscomp$7_realName$$ = /([.?@])?(.*)/.exec($attrNames$jscomp$inline_263_m$jscomp$7_realName$$), $parts$jscomp$10$$.push({type:1, index:$$jscomp$destructuring$var13_nodeIndex$$, name:$attrNames$jscomp$inline_263_m$jscomp$7_realName$$[2], $strings$:$i$jscomp$125_l$jscomp$inline_262_statics$jscomp$1$$, $ctor$:"." === $attrNames$jscomp$inline_263_m$jscomp$7_realName$$[1] ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$PropertyPart$$ : 
          "?" === $attrNames$jscomp$inline_263_m$jscomp$7_realName$$[1] ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$BooleanAttributePart$$ : "@" === $attrNames$jscomp$inline_263_m$jscomp$7_realName$$[1] ? $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$EventPart$$ : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$}), $node$jscomp$18_options$jscomp$134_svgElement$$.removeAttribute($$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$)) : 
          $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$.startsWith($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$) && ($parts$jscomp$10$$.push({type:6, index:$$jscomp$destructuring$var13_nodeIndex$$}), $node$jscomp$18_options$jscomp$134_svgElement$$.removeAttribute($$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$));
        }
      }
      if ($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_rawTextElement$$.test($node$jscomp$18_options$jscomp$134_svgElement$$.tagName) && ($$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$ = $node$jscomp$18_options$jscomp$134_svgElement$$.textContent.split($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$), $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$ = 
      $$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$.length - 1, 0 < $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$)) {
        $node$jscomp$18_options$jscomp$134_svgElement$$.textContent = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustedTypes$$ ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustedTypes$$.emptyScript : "";
        for ($i$jscomp$125_l$jscomp$inline_262_statics$jscomp$1$$ = 0; $i$jscomp$125_l$jscomp$inline_262_statics$jscomp$1$$ < $$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$; $i$jscomp$125_l$jscomp$inline_262_statics$jscomp$1$$++) {
          $node$jscomp$18_options$jscomp$134_svgElement$$.append($$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$[$i$jscomp$125_l$jscomp$inline_262_statics$jscomp$1$$], $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createComment("")), $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.nextNode(), $parts$jscomp$10$$.push({type:2, index:++$$jscomp$destructuring$var13_nodeIndex$$});
        }
        $node$jscomp$18_options$jscomp$134_svgElement$$.append($$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$[$$jscomp$key$m1864887151$81$name$jscomp$116_html__tsickle_destructured_1_lastIndex$jscomp$1_name$jscomp$116_rawTextEndRegex$jscomp$inline_265$$], $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createComment(""));
      }
    } else if (8 === $node$jscomp$18_options$jscomp$134_svgElement$$.nodeType) {
      if ($node$jscomp$18_options$jscomp$134_svgElement$$.data === $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_markerMatch$$) {
        $parts$jscomp$10$$.push({type:2, index:$$jscomp$destructuring$var13_nodeIndex$$});
      } else {
        for ($$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$ = -1; -1 !== ($$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$ = $node$jscomp$18_options$jscomp$134_svgElement$$.data.indexOf($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$, $$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$ + 1));) {
          $parts$jscomp$10$$.push({type:7, index:$$jscomp$destructuring$var13_nodeIndex$$}), $$jscomp$iter$81_i$jscomp$126_strings$jscomp$5_type$jscomp$186$$ += $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_marker$$.length - 1;
        }
      }
    }
    $$jscomp$destructuring$var13_nodeIndex$$++;
  }
}
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$Template$$.createElement = function($html$jscomp$32$$) {
  var $el$jscomp$6$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createElement("template");
  $el$jscomp$6$$.innerHTML = $html$jscomp$32$$;
  return $el$jscomp$6$$;
};
function $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$($part$jscomp$1$$, $value$jscomp$214$$, $parent$jscomp$10$$, $attributeIndex$$) {
  $parent$jscomp$10$$ = void 0 === $parent$jscomp$10$$ ? $part$jscomp$1$$ : $parent$jscomp$10$$;
  if ($value$jscomp$214$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$) {
    return $value$jscomp$214$$;
  }
  var $$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$, $currentDirective$$ = void 0 !== $attributeIndex$$ ? null == ($$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$ = $parent$jscomp$10$$.$i$) ? void 0 : $$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$[$attributeIndex$$] : $parent$jscomp$10$$.$o$;
  $$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isPrimitive$$($value$jscomp$214$$) ? void 0 : $value$jscomp$214$$._$litDirective$;
  var $$jscomp$optchain$tmpm1864887151$9$$;
  if ((null == ($$jscomp$optchain$tmpm1864887151$9$$ = $currentDirective$$) ? void 0 : $$jscomp$optchain$tmpm1864887151$9$$.constructor) !== $$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$) {
    var $$jscomp$optchain$tmpm1864887151$10$$, $$jscomp$optchain$tmpm1864887151$12$$;
    null == ($$jscomp$optchain$tmpm1864887151$10$$ = $currentDirective$$) || null == ($$jscomp$optchain$tmpm1864887151$12$$ = $$jscomp$optchain$tmpm1864887151$10$$._$notifyDirectiveConnectionChanged) || $$jscomp$optchain$tmpm1864887151$12$$.call($$jscomp$optchain$tmpm1864887151$10$$, !1);
    void 0 === $$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$ ? $currentDirective$$ = void 0 : ($currentDirective$$ = new $$jscomp$optchain$tmpm1864887151$8_nextDirectiveConstructor$$($part$jscomp$1$$), $currentDirective$$.$_$initialize$($part$jscomp$1$$, $parent$jscomp$10$$, $attributeIndex$$));
    if (void 0 !== $attributeIndex$$) {
      var $$jscomp$logical$assign$tmpm1864887151$1$$, $$jscomp$nullish$tmp13$$;
      (null != ($$jscomp$nullish$tmp13$$ = ($$jscomp$logical$assign$tmpm1864887151$1$$ = $parent$jscomp$10$$).$i$) ? $$jscomp$nullish$tmp13$$ : $$jscomp$logical$assign$tmpm1864887151$1$$.$i$ = [])[$attributeIndex$$] = $currentDirective$$;
    } else {
      $parent$jscomp$10$$.$o$ = $currentDirective$$;
    }
  }
  void 0 !== $currentDirective$$ && ($value$jscomp$214$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$($part$jscomp$1$$, $currentDirective$$.$_$resolve$($part$jscomp$1$$, $value$jscomp$214$$.values), $currentDirective$$, $attributeIndex$$));
  return $value$jscomp$214$$;
}
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$TemplateInstance$$($template$jscomp$7$$, $parent$jscomp$11$$) {
  this.$i$ = [];
  this.$j$ = void 0;
  this.$_$template$ = $template$jscomp$7$$;
  this.$g$ = $parent$jscomp$11$$;
}
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$TemplateInstance$$.prototype.$m$ = function($options$jscomp$135$$) {
  var $$jscomp$destructuring$var16_parts$jscomp$11$$ = this.$_$template$, $content$jscomp$9_node$jscomp$19$$ = $$jscomp$destructuring$var16_parts$jscomp$11$$.$el$.content;
  $$jscomp$destructuring$var16_parts$jscomp$11$$ = $$jscomp$destructuring$var16_parts$jscomp$11$$.$g$;
  var $$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$, $fragment$jscomp$2$$ = (null != ($$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$ = null == $options$jscomp$135$$ ? void 0 : $options$jscomp$135$$.$creationScope$) ? $$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$ : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$).importNode($content$jscomp$9_node$jscomp$19$$, !0);
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.currentNode = $fragment$jscomp$2$$;
  $content$jscomp$9_node$jscomp$19$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.nextNode();
  for (var $partIndex$$ = $$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$ = 0, $templatePart$$ = $$jscomp$destructuring$var16_parts$jscomp$11$$[0]; void 0 !== $templatePart$$;) {
    if ($$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$ === $templatePart$$.index) {
      var $$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$ = void 0;
      2 === $templatePart$$.type ? $$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$($content$jscomp$9_node$jscomp$19$$, $content$jscomp$9_node$jscomp$19$$.nextSibling, this, $options$jscomp$135$$) : 1 === $templatePart$$.type ? $$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$ = new $templatePart$$.$ctor$($content$jscomp$9_node$jscomp$19$$, $templatePart$$.name, $templatePart$$.$strings$, 
      this, $options$jscomp$135$$) : 6 === $templatePart$$.type && ($$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ElementPart$$($content$jscomp$9_node$jscomp$19$$, this, $options$jscomp$135$$));
      this.$i$.push($$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$);
      $templatePart$$ = $$jscomp$destructuring$var16_parts$jscomp$11$$[++$partIndex$$];
    }
    $$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$ = void 0;
    $$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$ !== (null == ($$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$ = $templatePart$$) ? void 0 : $$jscomp$optchain$tmpm1864887151$14_part$jscomp$2$$.index) && ($content$jscomp$9_node$jscomp$19$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.nextNode(), $$jscomp$nullish$tmp14_nodeIndex$jscomp$1$$++);
  }
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_walker$$.currentNode = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$;
  return $fragment$jscomp$2$$;
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$TemplateInstance$$.prototype.$l$ = function($values$jscomp$16$$) {
  for (var $i$jscomp$127$$ = 0, $$jscomp$iter$82$$ = $$jscomp$makeIterator$$(this.$i$), $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$ = $$jscomp$iter$82$$.next(); !$$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$.done; $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$ = $$jscomp$iter$82$$.next()) {
    $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$ = $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$.value, void 0 !== $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$ && (void 0 !== $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$.$strings$ ? ($$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$.$_$setValue$($values$jscomp$16$$, $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$, $i$jscomp$127$$), $i$jscomp$127$$ += $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$.$strings$.length - 
    2) : $$jscomp$key$m1864887151$82$part$jscomp$3_part$jscomp$3$$.$_$setValue$($values$jscomp$16$$[$i$jscomp$127$$])), $i$jscomp$127$$++;
  }
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$TemplateInstance$$.prototype, {parentNode:{configurable:!0, enumerable:!0, get:function() {
  return this.$g$.parentNode;
}}, $_$isConnected$:{configurable:!0, enumerable:!0, get:function() {
  return this.$g$.$_$isConnected$;
}}});
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$($startNode$jscomp$1$$, $endNode$jscomp$1$$, $parent$jscomp$12$$, $options$jscomp$136$$) {
  this.type = 2;
  this.$_$committedValue$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$;
  this.$j$ = void 0;
  this.$_$startNode$ = $startNode$jscomp$1$$;
  this.$_$endNode$ = $endNode$jscomp$1$$;
  this.$g$ = $parent$jscomp$12$$;
  this.options = $options$jscomp$136$$;
  var $$jscomp$nullish$tmp16$$;
  this.$l$ = null != ($$jscomp$nullish$tmp16$$ = null == $options$jscomp$136$$ ? void 0 : $options$jscomp$136$$.isConnected) ? $$jscomp$nullish$tmp16$$ : !0;
  this.$i$ = void 0;
}
$JSCompiler_prototypeAlias$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$.prototype;
$JSCompiler_prototypeAlias$$.$_$setValue$ = function($value$jscomp$215$$, $directiveParent$jscomp$2$$) {
  $value$jscomp$215$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$(this, $value$jscomp$215$$, void 0 === $directiveParent$jscomp$2$$ ? this : $directiveParent$jscomp$2$$);
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isPrimitive$$($value$jscomp$215$$) ? $value$jscomp$215$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ || null == $value$jscomp$215$$ || "" === $value$jscomp$215$$ ? (this.$_$committedValue$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ && this.$_$clear$(), this.$_$committedValue$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$) : 
  $value$jscomp$215$$ !== this.$_$committedValue$ && $value$jscomp$215$$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$ && this.$_commitText$($value$jscomp$215$$) : void 0 !== $value$jscomp$215$$._$litType$ ? this.$_commitTemplateResult$($value$jscomp$215$$) : void 0 !== $value$jscomp$215$$.nodeType ? this.$_commitNode$($value$jscomp$215$$) : $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isArray$$($value$jscomp$215$$) || 
  "function" === typeof(null == $value$jscomp$215$$ ? void 0 : $value$jscomp$215$$[Symbol.iterator]) ? this.$_commitIterable$($value$jscomp$215$$) : this.$_commitText$($value$jscomp$215$$);
};
$JSCompiler_prototypeAlias$$.$_insert$ = function($node$jscomp$20$$) {
  return $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.$_$startNode$).parentNode).insertBefore($node$jscomp$20$$, this.$_$endNode$);
};
$JSCompiler_prototypeAlias$$.$_commitNode$ = function($value$jscomp$216$$) {
  if (this.$_$committedValue$ !== $value$jscomp$216$$) {
    this.$_$clear$();
    if ($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity$sanitizerFactory$$ !== $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_noopSanitizer$$) {
      var $$jscomp$optchain$tmpm1864887151$19$$, $parentNodeName$$ = null == ($$jscomp$optchain$tmpm1864887151$19$$ = this.$_$startNode$.parentNode) ? void 0 : $$jscomp$optchain$tmpm1864887151$19$$.nodeName;
      if ("STYLE" === $parentNodeName$$ || "SCRIPT" === $parentNodeName$$) {
        throw Error("Forbidden");
      }
    }
    this.$_$committedValue$ = this.$_insert$($value$jscomp$216$$);
  }
};
$JSCompiler_prototypeAlias$$.$_commitText$ = function($value$jscomp$217$$) {
  if (this.$_$committedValue$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ && $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isPrimitive$$(this.$_$committedValue$)) {
    var $node$jscomp$21_textNode$jscomp$1$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.$_$startNode$).nextSibling;
    void 0 === this.$i$ && (this.$i$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity$sanitizerFactory$$($node$jscomp$21_textNode$jscomp$1$$, "data", "property"));
    $value$jscomp$217$$ = this.$i$($value$jscomp$217$$);
    $node$jscomp$21_textNode$jscomp$1$$.data = $value$jscomp$217$$;
  } else {
    $node$jscomp$21_textNode$jscomp$1$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createTextNode(""), this.$_commitNode$($node$jscomp$21_textNode$jscomp$1$$), void 0 === this.$i$ && (this.$i$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity$sanitizerFactory$$($node$jscomp$21_textNode$jscomp$1$$, "data", "property")), $value$jscomp$217$$ = this.$i$($value$jscomp$217$$), $node$jscomp$21_textNode$jscomp$1$$.data = 
    $value$jscomp$217$$;
  }
  this.$_$committedValue$ = $value$jscomp$217$$;
};
$JSCompiler_prototypeAlias$$.$_commitTemplateResult$ = function($fragment$jscomp$3_result$jscomp$30_template$jscomp$8$$) {
  var $values$jscomp$17$$ = $fragment$jscomp$3_result$jscomp$30_template$jscomp$8$$.values, $type$jscomp$187$$ = $fragment$jscomp$3_result$jscomp$30_template$jscomp$8$$._$litType$;
  $fragment$jscomp$3_result$jscomp$30_template$jscomp$8$$ = "number" === typeof $type$jscomp$187$$ ? this.$_$getTemplate$($fragment$jscomp$3_result$jscomp$30_template$jscomp$8$$) : (void 0 === $type$jscomp$187$$.$el$ && ($type$jscomp$187$$.$el$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$Template$$.createElement($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_trustFromTemplateString$$($type$jscomp$187$$.$h$, $type$jscomp$187$$.$h$[0]), 
  this.options)), $type$jscomp$187$$);
  var $$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$;
  (null == ($$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$ = this.$_$committedValue$) ? void 0 : $$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$.$_$template$) === $fragment$jscomp$3_result$jscomp$30_template$jscomp$8$$ ? this.$_$committedValue$.$l$($values$jscomp$17$$) : ($$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$TemplateInstance$$($fragment$jscomp$3_result$jscomp$30_template$jscomp$8$$, 
  this), $fragment$jscomp$3_result$jscomp$30_template$jscomp$8$$ = $$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$.$m$(this.options), $$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$.$l$($values$jscomp$17$$), this.$_commitNode$($fragment$jscomp$3_result$jscomp$30_template$jscomp$8$$), this.$_$committedValue$ = $$jscomp$optchain$tmpm1864887151$20_instance$jscomp$1$$);
};
$JSCompiler_prototypeAlias$$.$_$getTemplate$ = function($result$jscomp$31$$) {
  var $template$jscomp$9$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_templateCache$$.get($result$jscomp$31$$.$strings$);
  void 0 === $template$jscomp$9$$ && $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_templateCache$$.set($result$jscomp$31$$.$strings$, $template$jscomp$9$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$Template$$($result$jscomp$31$$));
  return $template$jscomp$9$$;
};
$JSCompiler_prototypeAlias$$.$_commitIterable$ = function($$jscomp$iter$83_value$jscomp$218$$) {
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isArray$$(this.$_$committedValue$) || (this.$_$committedValue$ = [], this.$_$clear$());
  var $itemParts$$ = this.$_$committedValue$, $partIndex$jscomp$1$$ = 0, $itemPart$$;
  $$jscomp$iter$83_value$jscomp$218$$ = $$jscomp$makeIterator$$($$jscomp$iter$83_value$jscomp$218$$);
  for (var $$jscomp$key$m1864887151$83$item$jscomp$29_item$jscomp$29$$ = $$jscomp$iter$83_value$jscomp$218$$.next(); !$$jscomp$key$m1864887151$83$item$jscomp$29_item$jscomp$29$$.done; $$jscomp$key$m1864887151$83$item$jscomp$29_item$jscomp$29$$ = $$jscomp$iter$83_value$jscomp$218$$.next()) {
    $$jscomp$key$m1864887151$83$item$jscomp$29_item$jscomp$29$$ = $$jscomp$key$m1864887151$83$item$jscomp$29_item$jscomp$29$$.value, $partIndex$jscomp$1$$ === $itemParts$$.length ? $itemParts$$.push($itemPart$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$(this.$_insert$($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createComment("")), this.$_insert$($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createComment("")), 
    this, this.options)) : $itemPart$$ = $itemParts$$[$partIndex$jscomp$1$$], $itemPart$$.$_$setValue$($$jscomp$key$m1864887151$83$item$jscomp$29_item$jscomp$29$$), $partIndex$jscomp$1$$++;
  }
  $partIndex$jscomp$1$$ < $itemParts$$.length && (this.$_$clear$($itemPart$$ && $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$($itemPart$$.$_$endNode$).nextSibling, $partIndex$jscomp$1$$), $itemParts$$.length = $partIndex$jscomp$1$$);
};
$JSCompiler_prototypeAlias$$.$_$clear$ = function($start$jscomp$17$$, $from$jscomp$1_n$jscomp$18$$) {
  $start$jscomp$17$$ = void 0 === $start$jscomp$17$$ ? $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.$_$startNode$).nextSibling : $start$jscomp$17$$;
  var $$jscomp$optchain$tmpm1864887151$22$$;
  for (null == ($$jscomp$optchain$tmpm1864887151$22$$ = this.$m$) || $$jscomp$optchain$tmpm1864887151$22$$.call(this, !1, !0, $from$jscomp$1_n$jscomp$18$$); $start$jscomp$17$$ && $start$jscomp$17$$ !== this.$_$endNode$;) {
    $from$jscomp$1_n$jscomp$18$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$($start$jscomp$17$$).nextSibling, $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$($start$jscomp$17$$).remove(), $start$jscomp$17$$ = $from$jscomp$1_n$jscomp$18$$;
  }
};
function $JSCompiler_StaticMethods_setConnected$$($JSCompiler_StaticMethods_setConnected$self$$, $isConnected$$) {
  if (void 0 === $JSCompiler_StaticMethods_setConnected$self$$.$g$) {
    $JSCompiler_StaticMethods_setConnected$self$$.$l$ = $isConnected$$;
    var $$jscomp$optchain$tmpm1864887151$24$$;
    null == ($$jscomp$optchain$tmpm1864887151$24$$ = $JSCompiler_StaticMethods_setConnected$self$$.$m$) || $$jscomp$optchain$tmpm1864887151$24$$.call($JSCompiler_StaticMethods_setConnected$self$$, $isConnected$$);
  }
}
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$.prototype, {$_$isConnected$:{configurable:!0, enumerable:!0, get:function() {
  var $$jscomp$optchain$tmpm1864887151$15$$, $$jscomp$nullish$tmp15$$;
  return null != ($$jscomp$nullish$tmp15$$ = null == ($$jscomp$optchain$tmpm1864887151$15$$ = this.$g$) ? void 0 : $$jscomp$optchain$tmpm1864887151$15$$.$_$isConnected$) ? $$jscomp$nullish$tmp15$$ : this.$l$;
}}, parentNode:{configurable:!0, enumerable:!0, get:function() {
  var $parentNode$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.$_$startNode$).parentNode, $parent$jscomp$13$$ = this.$g$, $$jscomp$optchain$tmpm1864887151$17$$;
  void 0 !== $parent$jscomp$13$$ && 11 === (null == ($$jscomp$optchain$tmpm1864887151$17$$ = $parentNode$$) ? void 0 : $$jscomp$optchain$tmpm1864887151$17$$.nodeType) && ($parentNode$$ = $parent$jscomp$13$$.parentNode);
  return $parentNode$$;
}}});
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$($element$jscomp$27$$, $name$jscomp$117$$, $strings$jscomp$7$$, $parent$jscomp$14$$, $options$jscomp$137$$) {
  this.type = 1;
  this.$_$committedValue$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$;
  this.$j$ = void 0;
  this.element = $element$jscomp$27$$;
  this.name = $name$jscomp$117$$;
  this.$g$ = $parent$jscomp$14$$;
  this.options = $options$jscomp$137$$;
  2 < $strings$jscomp$7$$.length || "" !== $strings$jscomp$7$$[0] || "" !== $strings$jscomp$7$$[1] ? (this.$_$committedValue$ = Array($strings$jscomp$7$$.length - 1).fill(new String()), this.$strings$ = $strings$jscomp$7$$) : this.$_$committedValue$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$;
  this.$_sanitizer$ = void 0;
}
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$.prototype.$_$setValue$ = function($value$jscomp$219$$, $directiveParent$jscomp$3$$, $valueIndex$$, $noCommit$$) {
  $directiveParent$jscomp$3$$ = void 0 === $directiveParent$jscomp$3$$ ? this : $directiveParent$jscomp$3$$;
  var $strings$jscomp$8$$ = this.$strings$, $change$$ = !1;
  if (void 0 === $strings$jscomp$8$$) {
    if ($value$jscomp$219$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$(this, $value$jscomp$219$$, $directiveParent$jscomp$3$$, 0), $change$$ = !$module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isPrimitive$$($value$jscomp$219$$) || $value$jscomp$219$$ !== this.$_$committedValue$ && $value$jscomp$219$$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$) {
      this.$_$committedValue$ = $value$jscomp$219$$;
    }
  } else {
    var $values$jscomp$18$$ = $value$jscomp$219$$;
    $value$jscomp$219$$ = $strings$jscomp$8$$[0];
    var $i$jscomp$128$$;
    for ($i$jscomp$128$$ = 0; $i$jscomp$128$$ < $strings$jscomp$8$$.length - 1; $i$jscomp$128$$++) {
      var $v$jscomp$25$$ = $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$(this, $values$jscomp$18$$[$valueIndex$$ + $i$jscomp$128$$], $directiveParent$jscomp$3$$, $i$jscomp$128$$);
      $v$jscomp$25$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$ && ($v$jscomp$25$$ = this.$_$committedValue$[$i$jscomp$128$$]);
      $change$$ || ($change$$ = !$module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_isPrimitive$$($v$jscomp$25$$) || $v$jscomp$25$$ !== this.$_$committedValue$[$i$jscomp$128$$]);
      if ($v$jscomp$25$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$) {
        $value$jscomp$219$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$;
      } else if ($value$jscomp$219$$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$) {
        var $$jscomp$nullish$tmp17$$ = void 0;
        $value$jscomp$219$$ += (null != ($$jscomp$nullish$tmp17$$ = $v$jscomp$25$$) ? $$jscomp$nullish$tmp17$$ : "") + $strings$jscomp$8$$[$i$jscomp$128$$ + 1];
      }
      this.$_$committedValue$[$i$jscomp$128$$] = $v$jscomp$25$$;
    }
  }
  $change$$ && !$noCommit$$ && this.$_commitValue$($value$jscomp$219$$);
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$.prototype.$_commitValue$ = function($value$jscomp$220$$) {
  if ($value$jscomp$220$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$) {
    $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.element).removeAttribute(this.name);
  } else {
    void 0 === this.$_sanitizer$ && (this.$_sanitizer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity$sanitizerFactory$$(this.element, this.name, "attribute"));
    var $$jscomp$nullish$tmp18$$;
    $value$jscomp$220$$ = this.$_sanitizer$(null != ($$jscomp$nullish$tmp18$$ = $value$jscomp$220$$) ? $$jscomp$nullish$tmp18$$ : "");
    var $$jscomp$nullish$tmp19$$;
    $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.element).setAttribute(this.name, null != ($$jscomp$nullish$tmp19$$ = $value$jscomp$220$$) ? $$jscomp$nullish$tmp19$$ : "");
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
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$PropertyPart$$.prototype.$_commitValue$ = function($value$jscomp$221$$) {
  void 0 === this.$_sanitizer$ && (this.$_sanitizer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$internal$2dsecurity$sanitizerFactory$$(this.element, this.name, "property"));
  $value$jscomp$221$$ = this.$_sanitizer$($value$jscomp$221$$);
  this.element[this.name] = $value$jscomp$221$$ === $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$ ? void 0 : $value$jscomp$221$$;
};
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$BooleanAttributePart$$() {
  $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$.apply(this, arguments);
  this.type = 4;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$BooleanAttributePart$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$);
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$BooleanAttributePart$$.prototype.$_commitValue$ = function($value$jscomp$222$$) {
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_wrap$$(this.element).toggleAttribute(this.name, !!$value$jscomp$222$$ && $value$jscomp$222$$ !== $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$);
};
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$EventPart$$($element$jscomp$28$$, $name$jscomp$118$$, $strings$jscomp$9$$, $parent$jscomp$15$$, $options$jscomp$138$$) {
  $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$AttributePart$$.call(this, $element$jscomp$28$$, $name$jscomp$118$$, $strings$jscomp$9$$, $parent$jscomp$15$$, $options$jscomp$138$$);
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
function $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ElementPart$$($element$jscomp$29$$, $parent$jscomp$16$$, $options$jscomp$139$$) {
  this.element = $element$jscomp$29$$;
  this.type = 6;
  this.$j$ = void 0;
  this.$g$ = $parent$jscomp$16$$;
  this.options = $options$jscomp$139$$;
}
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ElementPart$$.prototype.$_$setValue$ = function($value$jscomp$223$$) {
  $module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_resolveDirective$$(this, $value$jscomp$223$$);
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ElementPart$$.prototype, {$_$isConnected$:{configurable:!0, enumerable:!0, get:function() {
  return this.$g$.$_$isConnected$;
}}});
var $$jscomp$optchain$tmpm1864887151$26$$;
null == ($$jscomp$optchain$tmpm1864887151$26$$ = window.litHtmlPolyfillSupport) || $$jscomp$optchain$tmpm1864887151$26$$($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$Template$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$);
var $JSCompiler_inline_result$jscomp$136$$, $$jscomp$inline_410$$;
(null != ($$jscomp$inline_410$$ = $goog$global$$.litHtmlVersions) ? $$jscomp$inline_410$$ : $goog$global$$.litHtmlVersions = []).push("3.1.0");
$JSCompiler_inline_result$jscomp$136$$ = function($value$jscomp$inline_276$$, $container$jscomp$inline_277$$, $options$jscomp$inline_278$$) {
  var $$jscomp$inline_279_endNode$jscomp$inline_283_part$jscomp$inline_281$$, $partOwnerNode$jscomp$inline_280$$ = null != ($$jscomp$inline_279_endNode$jscomp$inline_283_part$jscomp$inline_281$$ = null == $options$jscomp$inline_278$$ ? void 0 : $options$jscomp$inline_278$$.$renderBefore$) ? $$jscomp$inline_279_endNode$jscomp$inline_283_part$jscomp$inline_281$$ : $container$jscomp$inline_277$$;
  $$jscomp$inline_279_endNode$jscomp$inline_283_part$jscomp$inline_281$$ = $partOwnerNode$jscomp$inline_280$$._$litPart$;
  if (void 0 === $$jscomp$inline_279_endNode$jscomp$inline_283_part$jscomp$inline_281$$) {
    var $$jscomp$inline_282$$;
    $$jscomp$inline_279_endNode$jscomp$inline_283_part$jscomp$inline_281$$ = null != ($$jscomp$inline_282$$ = null == $options$jscomp$inline_278$$ ? void 0 : $options$jscomp$inline_278$$.$renderBefore$) ? $$jscomp$inline_282$$ : null;
    $partOwnerNode$jscomp$inline_280$$._$litPart$ = $$jscomp$inline_279_endNode$jscomp$inline_283_part$jscomp$inline_281$$ = new $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$ChildPart$$($container$jscomp$inline_277$$.insertBefore($module$contents$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml_d$$.createComment(""), $$jscomp$inline_279_endNode$jscomp$inline_283_part$jscomp$inline_281$$), $$jscomp$inline_279_endNode$jscomp$inline_283_part$jscomp$inline_281$$, 
    void 0, null != $options$jscomp$inline_278$$ ? $options$jscomp$inline_278$$ : {});
  }
  $$jscomp$inline_279_endNode$jscomp$inline_283_part$jscomp$inline_281$$.$_$setValue$($value$jscomp$inline_276$$);
  return $$jscomp$inline_279_endNode$jscomp$inline_283_part$jscomp$inline_281$$;
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
  var $values$jscomp$19$$ = $$jscomp$getRestArguments$$.apply(1, arguments);
  return function() {
    var $cssText$jscomp$2$$ = 1 === $strings$jscomp$12$$.length ? $strings$jscomp$12$$[0] : $values$jscomp$19$$.reduce(function($acc$$, $JSCompiler_inline_result$jscomp$137_v$jscomp$26$$, $idx$$) {
      if (!0 === $JSCompiler_inline_result$jscomp$137_v$jscomp$26$$._$cssResult$) {
        $JSCompiler_inline_result$jscomp$137_v$jscomp$26$$ = $JSCompiler_inline_result$jscomp$137_v$jscomp$26$$.cssText;
      } else {
        if ("number" !== typeof $JSCompiler_inline_result$jscomp$137_v$jscomp$26$$) {
          throw Error("Value passed to 'css' function must be a 'css' function result: " + ($JSCompiler_inline_result$jscomp$137_v$jscomp$26$$ + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."));
        }
      }
      return $acc$$ + $JSCompiler_inline_result$jscomp$137_v$jscomp$26$$ + $strings$jscomp$12$$[$idx$$ + 1];
    }, $strings$jscomp$12$$[0]);
    return new $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$CSSResult$$($cssText$jscomp$2$$, $strings$jscomp$12$$, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag_constructionToken$$);
  }();
}
function $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$adoptStyles$$($renderRoot$$, $$jscomp$iter$84_styles$jscomp$2$$) {
  if ($module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$supportsAdoptingStyleSheets$$) {
    $renderRoot$$.adoptedStyleSheets = $$jscomp$iter$84_styles$jscomp$2$$.map(function($s$jscomp$31$$) {
      return $s$jscomp$31$$ instanceof CSSStyleSheet ? $s$jscomp$31$$ : $s$jscomp$31$$.$g$;
    });
  } else {
    $$jscomp$iter$84_styles$jscomp$2$$ = $$jscomp$makeIterator$$($$jscomp$iter$84_styles$jscomp$2$$);
    for (var $$jscomp$key$m1914574069$6$s$jscomp$32_s$jscomp$32$$ = $$jscomp$iter$84_styles$jscomp$2$$.next(); !$$jscomp$key$m1914574069$6$s$jscomp$32_s$jscomp$32$$.done; $$jscomp$key$m1914574069$6$s$jscomp$32_s$jscomp$32$$ = $$jscomp$iter$84_styles$jscomp$2$$.next()) {
      $$jscomp$key$m1914574069$6$s$jscomp$32_s$jscomp$32$$ = $$jscomp$key$m1914574069$6$s$jscomp$32_s$jscomp$32$$.value;
      var $style$jscomp$13$$ = document.createElement("style"), $nonce$jscomp$7$$ = $goog$global$$.litNonce;
      void 0 !== $nonce$jscomp$7$$ && $style$jscomp$13$$.setAttribute("nonce", $nonce$jscomp$7$$);
      $style$jscomp$13$$.textContent = $$jscomp$key$m1914574069$6$s$jscomp$32_s$jscomp$32$$.cssText;
      $renderRoot$$.appendChild($style$jscomp$13$$);
    }
  }
}
var $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$getCompatibleStyle$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$supportsAdoptingStyleSheets$$ ? function($s$jscomp$33$$) {
  return $s$jscomp$33$$;
} : function($$jscomp$inline_289_s$jscomp$34$$) {
  if ($$jscomp$inline_289_s$jscomp$34$$ instanceof CSSStyleSheet) {
    var $JSCompiler_temp$jscomp$138_cssText$jscomp$inline_288$$ = "";
    $$jscomp$inline_289_s$jscomp$34$$ = $$jscomp$makeIterator$$($$jscomp$inline_289_s$jscomp$34$$.cssRules);
    for (var $$jscomp$key$m1914574069$7$rule$jscomp$inline_290$$ = $$jscomp$inline_289_s$jscomp$34$$.next(); !$$jscomp$key$m1914574069$7$rule$jscomp$inline_290$$.done; $$jscomp$key$m1914574069$7$rule$jscomp$inline_290$$ = $$jscomp$inline_289_s$jscomp$34$$.next()) {
      $JSCompiler_temp$jscomp$138_cssText$jscomp$inline_288$$ += $$jscomp$key$m1914574069$7$rule$jscomp$inline_290$$.value.cssText;
    }
    $JSCompiler_temp$jscomp$138_cssText$jscomp$inline_288$$ = new $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$CSSResult$$("string" === typeof $JSCompiler_temp$jscomp$138_cssText$jscomp$inline_288$$ ? $JSCompiler_temp$jscomp$138_cssText$jscomp$inline_288$$ : String($JSCompiler_temp$jscomp$138_cssText$jscomp$inline_288$$), void 0, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag_constructionToken$$);
  } else {
    $JSCompiler_temp$jscomp$138_cssText$jscomp$inline_288$$ = $$jscomp$inline_289_s$jscomp$34$$;
  }
  return $JSCompiler_temp$jscomp$138_cssText$jscomp$inline_288$$;
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
{$toAttribute$:function($value$jscomp$231$$, $type$jscomp$190$$) {
  switch($type$jscomp$190$$) {
    case Boolean:
      $value$jscomp$231$$ = $value$jscomp$231$$ ? $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_emptyStringForBooleanAttribute$$ : null;
      break;
    case Object:
    case Array:
      $value$jscomp$231$$ = null == $value$jscomp$231$$ ? $value$jscomp$231$$ : JSON.stringify($value$jscomp$231$$);
  }
  return $value$jscomp$231$$;
}, $fromAttribute$:function($value$jscomp$232$$, $type$jscomp$191$$) {
  var $fromValue$$ = $value$jscomp$232$$;
  switch($type$jscomp$191$$) {
    case Boolean:
      $fromValue$$ = null !== $value$jscomp$232$$;
      break;
    case Number:
      $fromValue$$ = null === $value$jscomp$232$$ ? null : Number($value$jscomp$232$$);
      break;
    case Object:
    case Array:
      try {
        $fromValue$$ = JSON.parse($value$jscomp$232$$);
      } catch ($e$jscomp$42$$) {
        $fromValue$$ = null;
      }
  }
  return $fromValue$$;
}};
function $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$notEqual$$($value$jscomp$233$$, $old$$) {
  return !$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_is$$($value$jscomp$233$$, $old$$);
}
var $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_defaultPropertyDeclaration$$ = {$attribute$:!0, type:String, $converter$:$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$defaultConverter$$, $reflect$:!1, $hasChanged$:$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$notEqual$$}, $JSCompiler_inline_result$jscomp$139$$;
null == Symbol.metadata && (Symbol.metadata = Symbol("metadata"));
$JSCompiler_inline_result$jscomp$139$$ = Symbol.metadata;
var $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$litPropertyMetadata$$ = new WeakMap();
function $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$() {
  var $$jscomp$super$this$1744250161$93$$ = $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_HTMLElement$$.call(this) || this;
  $$jscomp$super$this$1744250161$93$$.$m$ = void 0;
  $$jscomp$super$this$1744250161$93$$.$l$ = !1;
  $$jscomp$super$this$1744250161$93$$.$hasUpdated$ = !1;
  $$jscomp$super$this$1744250161$93$$.$g$ = null;
  $$jscomp$super$this$1744250161$93$$.$__initialize$();
  return $$jscomp$super$this$1744250161$93$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$, $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_HTMLElement$$);
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$addInitializer$ = function($initializer$$) {
  this.$__prepare$();
  var $$jscomp$nullish$tmp28$$;
  (null != ($$jscomp$nullish$tmp28$$ = this.$_initializers$) ? $$jscomp$nullish$tmp28$$ : this.$_initializers$ = []).push($initializer$$);
};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$createProperty$ = function($name$jscomp$119$$, $descriptor$jscomp$3_options$jscomp$141$$) {
  $descriptor$jscomp$3_options$jscomp$141$$ = void 0 === $descriptor$jscomp$3_options$jscomp$141$$ ? $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_defaultPropertyDeclaration$$ : $descriptor$jscomp$3_options$jscomp$141$$;
  $descriptor$jscomp$3_options$jscomp$141$$.state && ($descriptor$jscomp$3_options$jscomp$141$$.$attribute$ = !1);
  this.$__prepare$();
  this.$elementProperties$.set($name$jscomp$119$$, $descriptor$jscomp$3_options$jscomp$141$$);
  $descriptor$jscomp$3_options$jscomp$141$$.$noAccessor$ || ($descriptor$jscomp$3_options$jscomp$141$$ = this.$getPropertyDescriptor$($name$jscomp$119$$, Symbol(), $descriptor$jscomp$3_options$jscomp$141$$), void 0 !== $descriptor$jscomp$3_options$jscomp$141$$ && $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_defineProperty$$(this.prototype, $name$jscomp$119$$, $descriptor$jscomp$3_options$jscomp$141$$));
};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$getPropertyDescriptor$ = function($name$jscomp$120$$, $key$jscomp$107$$, $options$jscomp$142$$) {
  var $$jscomp$nullish$tmp29$$, $$jscomp$destructuring$var20$$ = null != ($$jscomp$nullish$tmp29$$ = $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_getOwnPropertyDescriptor$$(this.prototype, $name$jscomp$120$$)) ? $$jscomp$nullish$tmp29$$ : {get:function() {
    return this[$key$jscomp$107$$];
  }, set:function($v$jscomp$27$$) {
    this[$key$jscomp$107$$] = $v$jscomp$27$$;
  }}, $get$$ = $$jscomp$destructuring$var20$$.get, $set$jscomp$2$$ = $$jscomp$destructuring$var20$$.set;
  return {get:function() {
    return null == $get$$ ? void 0 : $get$$.call(this);
  }, set:function($value$jscomp$234$$) {
    var $oldValue$jscomp$2$$ = null == $get$$ ? void 0 : $get$$.call(this);
    $set$jscomp$2$$.call(this, $value$jscomp$234$$);
    this.$requestUpdate$($name$jscomp$120$$, $oldValue$jscomp$2$$, $options$jscomp$142$$);
  }, configurable:!0, enumerable:!0};
};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$getPropertyOptions$ = function($name$jscomp$121$$) {
  var $$jscomp$nullish$tmp31$$;
  return null != ($$jscomp$nullish$tmp31$$ = this.$elementProperties$.get($name$jscomp$121$$)) ? $$jscomp$nullish$tmp31$$ : $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_defaultPropertyDeclaration$$;
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
      var $$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$ = this.properties, $$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = [].concat($$jscomp$arrayFromIterable$$($module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_getOwnPropertyNames$$($$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$)), 
      $$jscomp$arrayFromIterable$$($module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement_getOwnPropertySymbols$$($$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$)));
      $$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = $$jscomp$makeIterator$$($$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$);
      for (var $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$ = $$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$.next(); !$$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$.done; $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$ = 
      $$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$.next()) {
        $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$ = $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$.value, this.$createProperty$($$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$, 
        $$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$[$$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$]);
      }
    }
    $$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$ = this[$JSCompiler_inline_result$jscomp$139$$];
    if (null !== $$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$ && ($$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$litPropertyMetadata$$.get($$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$), void 0 !== $$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$)) {
      for ($$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$ = $$jscomp$makeIterator$$($$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$), $$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = $$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$.next(); !$$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$.done; $$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = 
      $$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$.next()) {
        $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$ = $$jscomp$makeIterator$$($$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$.value), $$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = 
        $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$.next().value, $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$ = $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$.next().value, 
        this.$elementProperties$.set($$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$, $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$);
      }
    }
    this.$__attributeToPropertyMap$ = new Map();
    $$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$ = $$jscomp$makeIterator$$(this.$elementProperties$);
    for ($$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = $$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$.next(); !$$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$.done; $$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = 
    $$jscomp$iter$87_$jscomp$iter$88_metadata_properties$jscomp$6_props$jscomp$2$$.next()) {
      $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$ = $$jscomp$makeIterator$$($$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$.value), $$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$ = 
      $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$.next().value, $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$ = $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$.next().value, 
      $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$ = this.$__attributeNameForProperty$($$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$, $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$), 
      void 0 !== $$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$ && this.$__attributeToPropertyMap$.set($$jscomp$destructuring$var22_$jscomp$destructuring$var24_$jscomp$key$1744250161$94$p$jscomp$8_attr$jscomp$3_options__tsickle_destructured_2_options__tsickle_destructured_4_p$jscomp$8$$, $$jscomp$iter$86_$jscomp$key$1744250161$95$$jscomp$destructuring$var21_$jscomp$key$1744250161$96$$jscomp$destructuring$var23_p$jscomp$10_p__tsickle_destructured_1_p__tsickle_destructured_3_propKeys$$);
    }
    this.$elementStyles$ = this.$finalizeStyles$(this.$styles$);
  }
};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$finalizeStyles$ = function($$jscomp$iter$89_set$jscomp$3_styles$jscomp$3$$) {
  var $elementStyles$$ = [];
  if (Array.isArray($$jscomp$iter$89_set$jscomp$3_styles$jscomp$3$$)) {
    $$jscomp$iter$89_set$jscomp$3_styles$jscomp$3$$ = new Set($$jscomp$iter$89_set$jscomp$3_styles$jscomp$3$$.flat(Infinity).reverse());
    $$jscomp$iter$89_set$jscomp$3_styles$jscomp$3$$ = $$jscomp$makeIterator$$($$jscomp$iter$89_set$jscomp$3_styles$jscomp$3$$);
    for (var $$jscomp$key$1744250161$97$s$jscomp$35$$ = $$jscomp$iter$89_set$jscomp$3_styles$jscomp$3$$.next(); !$$jscomp$key$1744250161$97$s$jscomp$35$$.done; $$jscomp$key$1744250161$97$s$jscomp$35$$ = $$jscomp$iter$89_set$jscomp$3_styles$jscomp$3$$.next()) {
      $elementStyles$$.unshift($module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$getCompatibleStyle$$($$jscomp$key$1744250161$97$s$jscomp$35$$.value));
    }
  } else {
    void 0 !== $$jscomp$iter$89_set$jscomp$3_styles$jscomp$3$$ && $elementStyles$$.push($module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$getCompatibleStyle$$($$jscomp$iter$89_set$jscomp$3_styles$jscomp$3$$));
  }
  return $elementStyles$$;
};
$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.$__attributeNameForProperty$ = function($name$jscomp$122$$, $attribute$jscomp$5_options$jscomp$145$$) {
  $attribute$jscomp$5_options$jscomp$145$$ = $attribute$jscomp$5_options$jscomp$145$$.$attribute$;
  return !1 === $attribute$jscomp$5_options$jscomp$145$$ ? void 0 : "string" === typeof $attribute$jscomp$5_options$jscomp$145$$ ? $attribute$jscomp$5_options$jscomp$145$$ : "string" === typeof $name$jscomp$122$$ ? $name$jscomp$122$$.toLowerCase() : void 0;
};
$JSCompiler_prototypeAlias$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.prototype;
$JSCompiler_prototypeAlias$$.$__initialize$ = function() {
  var $$jscomp$this$1744250161$64$$ = this;
  this.$u$ = new Promise(function($res$jscomp$8$$) {
    return $$jscomp$this$1744250161$64$$.$enableUpdating$ = $res$jscomp$8$$;
  });
  this.$i$ = new Map();
  this.$__saveInstanceProperties$();
  this.$requestUpdate$();
  var $$jscomp$optchain$tmp1744250161$12$$;
  null == ($$jscomp$optchain$tmp1744250161$12$$ = this.constructor.$_initializers$) || $$jscomp$optchain$tmp1744250161$12$$.forEach(function($i$jscomp$129$$) {
    return $i$jscomp$129$$($$jscomp$this$1744250161$64$$);
  });
};
function $JSCompiler_StaticMethods_addController$$($JSCompiler_StaticMethods_addController$self$$, $controller$jscomp$4$$) {
  var $$jscomp$nullish$tmp32$$;
  (null != ($$jscomp$nullish$tmp32$$ = $JSCompiler_StaticMethods_addController$self$$.$j$) ? $$jscomp$nullish$tmp32$$ : $JSCompiler_StaticMethods_addController$self$$.$j$ = new Set()).add($controller$jscomp$4$$);
  if (void 0 !== $JSCompiler_StaticMethods_addController$self$$.$renderRoot$ && $JSCompiler_StaticMethods_addController$self$$.isConnected) {
    var $$jscomp$optchain$tmp1744250161$14$$;
    null == ($$jscomp$optchain$tmp1744250161$14$$ = $controller$jscomp$4$$.$hostConnected$) || $$jscomp$optchain$tmp1744250161$14$$.call($controller$jscomp$4$$);
  }
}
$JSCompiler_prototypeAlias$$.$__saveInstanceProperties$ = function() {
  for (var $instanceProperties$$ = new Map(), $$jscomp$iter$90$$ = $$jscomp$makeIterator$$(this.constructor.$elementProperties$.keys()), $$jscomp$key$1744250161$98$p$jscomp$11_p$jscomp$11$$ = $$jscomp$iter$90$$.next(); !$$jscomp$key$1744250161$98$p$jscomp$11_p$jscomp$11$$.done; $$jscomp$key$1744250161$98$p$jscomp$11_p$jscomp$11$$ = $$jscomp$iter$90$$.next()) {
    $$jscomp$key$1744250161$98$p$jscomp$11_p$jscomp$11$$ = $$jscomp$key$1744250161$98$p$jscomp$11_p$jscomp$11$$.value, this.hasOwnProperty($$jscomp$key$1744250161$98$p$jscomp$11_p$jscomp$11$$) && ($instanceProperties$$.set($$jscomp$key$1744250161$98$p$jscomp$11_p$jscomp$11$$, this[$$jscomp$key$1744250161$98$p$jscomp$11_p$jscomp$11$$]), delete this[$$jscomp$key$1744250161$98$p$jscomp$11_p$jscomp$11$$]);
  }
  0 < $instanceProperties$$.size && (this.$m$ = $instanceProperties$$);
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
  null == ($$jscomp$optchain$tmp1744250161$18$$ = this.$j$) || $$jscomp$optchain$tmp1744250161$18$$.forEach(function($c$jscomp$6$$) {
    var $$jscomp$optchain$tmp1744250161$17$$;
    return null == ($$jscomp$optchain$tmp1744250161$17$$ = $c$jscomp$6$$.$hostConnected$) ? void 0 : $$jscomp$optchain$tmp1744250161$17$$.call($c$jscomp$6$$);
  });
};
$JSCompiler_prototypeAlias$$.$enableUpdating$ = function() {
};
$JSCompiler_prototypeAlias$$.disconnectedCallback = function() {
  var $$jscomp$optchain$tmp1744250161$21$$;
  null == ($$jscomp$optchain$tmp1744250161$21$$ = this.$j$) || $$jscomp$optchain$tmp1744250161$21$$.forEach(function($c$jscomp$7$$) {
    var $$jscomp$optchain$tmp1744250161$20$$;
    return null == ($$jscomp$optchain$tmp1744250161$20$$ = $c$jscomp$7$$.$hostDisconnected$) ? void 0 : $$jscomp$optchain$tmp1744250161$20$$.call($c$jscomp$7$$);
  });
};
$JSCompiler_prototypeAlias$$.attributeChangedCallback = function($name$jscomp$123$$, $_old$$, $value$jscomp$235$$) {
  this.$_$attributeToProperty$($name$jscomp$123$$, $value$jscomp$235$$);
};
$JSCompiler_prototypeAlias$$.$__propertyToAttribute$ = function($name$jscomp$124$$, $value$jscomp$236$$) {
  var $options$jscomp$146$$ = this.constructor.$elementProperties$.get($name$jscomp$124$$), $attr$jscomp$4$$ = this.constructor.$__attributeNameForProperty$($name$jscomp$124$$, $options$jscomp$146$$);
  if (void 0 !== $attr$jscomp$4$$ && !0 === $options$jscomp$146$$.$reflect$) {
    var $$jscomp$optchain$tmp1744250161$22$$, $attrValue$$ = (void 0 !== (null == ($$jscomp$optchain$tmp1744250161$22$$ = $options$jscomp$146$$.$converter$) ? void 0 : $$jscomp$optchain$tmp1744250161$22$$.$toAttribute$) ? $options$jscomp$146$$.$converter$ : $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$defaultConverter$$).$toAttribute$($value$jscomp$236$$, $options$jscomp$146$$.type);
    this.$g$ = $name$jscomp$124$$;
    null == $attrValue$$ ? this.removeAttribute($attr$jscomp$4$$) : this.setAttribute($attr$jscomp$4$$, $attrValue$$);
    this.$g$ = null;
  }
};
$JSCompiler_prototypeAlias$$.$_$attributeToProperty$ = function($name$jscomp$125_propName$$, $value$jscomp$237$$) {
  var $ctor$jscomp$2_options$jscomp$147$$ = this.constructor;
  $name$jscomp$125_propName$$ = $ctor$jscomp$2_options$jscomp$147$$.$__attributeToPropertyMap$.get($name$jscomp$125_propName$$);
  if (void 0 !== $name$jscomp$125_propName$$ && this.$g$ !== $name$jscomp$125_propName$$) {
    $ctor$jscomp$2_options$jscomp$147$$ = $ctor$jscomp$2_options$jscomp$147$$.$getPropertyOptions$($name$jscomp$125_propName$$);
    var $$jscomp$optchain$tmp1744250161$23$$, $converter$jscomp$1$$ = "function" === typeof $ctor$jscomp$2_options$jscomp$147$$.$converter$ ? {$fromAttribute$:$ctor$jscomp$2_options$jscomp$147$$.$converter$} : void 0 !== (null == ($$jscomp$optchain$tmp1744250161$23$$ = $ctor$jscomp$2_options$jscomp$147$$.$converter$) ? void 0 : $$jscomp$optchain$tmp1744250161$23$$.$fromAttribute$) ? $ctor$jscomp$2_options$jscomp$147$$.$converter$ : $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$defaultConverter$$;
    this.$g$ = $name$jscomp$125_propName$$;
    this[$name$jscomp$125_propName$$] = $converter$jscomp$1$$.$fromAttribute$($value$jscomp$237$$, $ctor$jscomp$2_options$jscomp$147$$.type);
    this.$g$ = null;
  }
};
$JSCompiler_prototypeAlias$$.$requestUpdate$ = function($name$jscomp$126$$, $oldValue$jscomp$3$$, $options$jscomp$148$$) {
  var $initial$$ = void 0 === $initial$$ ? !1 : $initial$$;
  if (void 0 !== $name$jscomp$126$$) {
    null != $options$jscomp$148$$ || ($options$jscomp$148$$ = this.constructor.$getPropertyOptions$($name$jscomp$126$$));
    var $$jscomp$nullish$tmp36$$;
    if ((null != ($$jscomp$nullish$tmp36$$ = $options$jscomp$148$$.$hasChanged$) ? $$jscomp$nullish$tmp36$$ : $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$notEqual$$)($initial$$ ? void 0 : this[$name$jscomp$126$$], $oldValue$jscomp$3$$)) {
      this.$_$changeProperty$($name$jscomp$126$$, $oldValue$jscomp$3$$, $options$jscomp$148$$);
    } else {
      return;
    }
  }
  !1 === this.$l$ && (this.$u$ = this.$__enqueueUpdate$());
};
$JSCompiler_prototypeAlias$$.$_$changeProperty$ = function($name$jscomp$127$$, $oldValue$jscomp$4$$, $options$jscomp$149$$) {
  this.$i$.has($name$jscomp$127$$) || this.$i$.set($name$jscomp$127$$, $oldValue$jscomp$4$$);
  if (!0 === $options$jscomp$149$$.$reflect$ && this.$g$ !== $name$jscomp$127$$) {
    var $$jscomp$nullish$tmp37$$;
    (null != ($$jscomp$nullish$tmp37$$ = this.$o$) ? $$jscomp$nullish$tmp37$$ : this.$o$ = new Set()).add($name$jscomp$127$$);
  }
};
$JSCompiler_prototypeAlias$$.$__enqueueUpdate$ = function() {
  var $$jscomp$async$this$$ = this, $e$jscomp$43$$, $result$jscomp$33$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$1744250161$101$$) {
    switch($$jscomp$generator$context$1744250161$101$$.$g$) {
      case 1:
        return $$jscomp$async$this$$.$l$ = !0, $$jscomp$generator$context$1744250161$101$$.$o$ = 2, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1744250161$101$$, $$jscomp$async$this$$.$u$, 4);
      case 4:
        $$jscomp$generator$context$1744250161$101$$.$g$ = 3;
        $$jscomp$generator$context$1744250161$101$$.$o$ = 0;
        break;
      case 2:
        $$jscomp$generator$context$1744250161$101$$.$o$ = 0;
        var $exception$jscomp$inline_304$$ = $$jscomp$generator$context$1744250161$101$$.$l$.$exception$;
        $$jscomp$generator$context$1744250161$101$$.$l$ = null;
        $e$jscomp$43$$ = $exception$jscomp$inline_304$$;
        $$jscomp$async$this$$.$v$ || Promise.reject($e$jscomp$43$$);
      case 3:
        $result$jscomp$33$$ = $JSCompiler_StaticMethods_performUpdate$$($$jscomp$async$this$$);
        if (null == $result$jscomp$33$$) {
          $$jscomp$generator$context$1744250161$101$$.$g$ = 5;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1744250161$101$$, $result$jscomp$33$$, 5);
      case 5:
        return $$jscomp$generator$context$1744250161$101$$.return(!$$jscomp$async$this$$.$l$);
    }
  });
};
function $JSCompiler_StaticMethods_performUpdate$$($JSCompiler_StaticMethods_performUpdate$self$$) {
  if ($JSCompiler_StaticMethods_performUpdate$self$$.$l$) {
    if (!$JSCompiler_StaticMethods_performUpdate$self$$.$hasUpdated$) {
      null != $JSCompiler_StaticMethods_performUpdate$self$$.$renderRoot$ || ($JSCompiler_StaticMethods_performUpdate$self$$.$renderRoot$ = $JSCompiler_StaticMethods_performUpdate$self$$.$createRenderRoot$());
      if ($JSCompiler_StaticMethods_performUpdate$self$$.$m$) {
        for (var $$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$ = $$jscomp$makeIterator$$($JSCompiler_StaticMethods_performUpdate$self$$.$m$), $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = $$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$.next(); !$$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$.done; $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = 
        $$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$.next()) {
          var $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$150_options__tsickle_destructured_8_value__tsickle_destructured_6$$ = $$jscomp$makeIterator$$($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$.value);
          $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$150_options__tsickle_destructured_8_value__tsickle_destructured_6$$.next().value;
          $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$150_options__tsickle_destructured_8_value__tsickle_destructured_6$$ = $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$150_options__tsickle_destructured_8_value__tsickle_destructured_6$$.next().value;
          $JSCompiler_StaticMethods_performUpdate$self$$[$$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$] = $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$150_options__tsickle_destructured_8_value__tsickle_destructured_6$$;
        }
        $JSCompiler_StaticMethods_performUpdate$self$$.$m$ = void 0;
      }
      $$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$ = $JSCompiler_StaticMethods_performUpdate$self$$.constructor.$elementProperties$;
      if (0 < $$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$.size) {
        for ($$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$ = $$jscomp$makeIterator$$($$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$), $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = $$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$.next(); !$$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$.done; $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = 
        $$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$.next()) {
          $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$150_options__tsickle_destructured_8_value__tsickle_destructured_6$$ = $$jscomp$makeIterator$$($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$.value), $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = 
          $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$150_options__tsickle_destructured_8_value__tsickle_destructured_6$$.next().value, $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$150_options__tsickle_destructured_8_value__tsickle_destructured_6$$ = $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$150_options__tsickle_destructured_8_value__tsickle_destructured_6$$.next().value, !0 !== $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$150_options__tsickle_destructured_8_value__tsickle_destructured_6$$.$wrapped$ || 
          $JSCompiler_StaticMethods_performUpdate$self$$.$i$.has($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$) || void 0 === $JSCompiler_StaticMethods_performUpdate$self$$[$$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$] || 
          $JSCompiler_StaticMethods_performUpdate$self$$.$_$changeProperty$($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$, $JSCompiler_StaticMethods_performUpdate$self$$[$$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$], 
          $$jscomp$destructuring$var26_$jscomp$destructuring$var28_options$jscomp$150_options__tsickle_destructured_8_value__tsickle_destructured_6$$);
        }
      }
    }
    $$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$ = !1;
    $$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$ = $JSCompiler_StaticMethods_performUpdate$self$$.$i$;
    try {
      $$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$ = !0;
      var $$jscomp$optchain$tmp1744250161$28$$;
      null == ($$jscomp$optchain$tmp1744250161$28$$ = $JSCompiler_StaticMethods_performUpdate$self$$.$j$) || $$jscomp$optchain$tmp1744250161$28$$.forEach(function($c$jscomp$8$$) {
        var $$jscomp$optchain$tmp1744250161$27$$;
        return null == ($$jscomp$optchain$tmp1744250161$27$$ = $c$jscomp$8$$.$hostUpdate$) ? void 0 : $$jscomp$optchain$tmp1744250161$27$$.call($c$jscomp$8$$);
      });
      $JSCompiler_StaticMethods_performUpdate$self$$.update($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$);
    } catch ($e$jscomp$44$$) {
      throw $$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$ = !1, $JSCompiler_StaticMethods_performUpdate$self$$.$__markUpdated$(), $e$jscomp$44$$;
    }
    $$jscomp$iter$91_$jscomp$iter$92_elementProperties$jscomp$1_shouldUpdate$$ && $JSCompiler_StaticMethods_performUpdate$self$$.$_$didUpdate$($$jscomp$key$1744250161$100$$jscomp$destructuring$var27_$jscomp$key$1744250161$99$$jscomp$destructuring$var25_changedProperties$jscomp$2_p$jscomp$14_p__tsickle_destructured_5_p__tsickle_destructured_7$$);
  }
}
$JSCompiler_prototypeAlias$$.$_$didUpdate$ = function($changedProperties$jscomp$3$$) {
  var $$jscomp$optchain$tmp1744250161$31$$;
  null == ($$jscomp$optchain$tmp1744250161$31$$ = this.$j$) || $$jscomp$optchain$tmp1744250161$31$$.forEach(function($c$jscomp$9$$) {
    var $$jscomp$optchain$tmp1744250161$30$$;
    return null == ($$jscomp$optchain$tmp1744250161$30$$ = $c$jscomp$9$$.$hostUpdated$) ? void 0 : $$jscomp$optchain$tmp1744250161$30$$.call($c$jscomp$9$$);
  });
  this.$hasUpdated$ || (this.$hasUpdated$ = !0, this.$firstUpdated$($changedProperties$jscomp$3$$));
  this.$updated$();
};
$JSCompiler_prototypeAlias$$.$__markUpdated$ = function() {
  this.$i$ = new Map();
  this.$l$ = !1;
};
$JSCompiler_prototypeAlias$$.update = function() {
  var $$jscomp$this$1744250161$87$$ = this;
  this.$o$ && (this.$o$ = this.$o$.forEach(function($p$jscomp$15$$) {
    return $$jscomp$this$1744250161$87$$.$__propertyToAttribute$($p$jscomp$15$$, $$jscomp$this$1744250161$87$$[$p$jscomp$15$$]);
  }));
  this.$__markUpdated$();
};
$JSCompiler_prototypeAlias$$.$updated$ = function() {
};
$JSCompiler_prototypeAlias$$.$firstUpdated$ = function() {
};
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
  $$jscomp$super$this$m1165170663$18$$.$s$ = void 0;
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
  var $value$jscomp$239$$ = this.$render$();
  this.$hasUpdated$ || (this.$renderOptions$.isConnected = this.isConnected);
  $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.prototype.update.call(this, $changedProperties$jscomp$4$$);
  this.$s$ = $JSCompiler_inline_result$jscomp$136$$($value$jscomp$239$$, this.$renderRoot$, this.$renderOptions$);
};
$JSCompiler_prototypeAlias$$.connectedCallback = function() {
  $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.prototype.connectedCallback.call(this);
  var $$jscomp$optchain$tmpm1165170663$3$$;
  null == ($$jscomp$optchain$tmpm1165170663$3$$ = this.$s$) || $JSCompiler_StaticMethods_setConnected$$($$jscomp$optchain$tmpm1165170663$3$$, !0);
};
$JSCompiler_prototypeAlias$$.disconnectedCallback = function() {
  $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$reactive$2delement$ReactiveElement$$.prototype.disconnectedCallback.call(this);
  var $$jscomp$optchain$tmpm1165170663$4$$;
  null == ($$jscomp$optchain$tmpm1165170663$4$$ = this.$s$) || $JSCompiler_StaticMethods_setConnected$$($$jscomp$optchain$tmpm1165170663$4$$, !1);
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
;var $module$exports$google3$cultural$integrations$chromeextensions$arttab$options$options$2ecss$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$(['@font-face{font-family:Google Sans;font-style:normal;font-weight:400;src:local("Google Sans"),local("Google-Sans"),url(chrome-extension://__MSG_@@extension_id__/fonts/GoogleSans-Regular.ttf) format("truetype")}@font-face{font-family:Google Sans;font-style:normal;font-weight:700;src:local("Google Sans"),local("Google-Sans"),url(chrome-extension://__MSG_@@extension_id__/fonts/GoogleSans-Bold.ttf) format("truetype")}body{-webkit-box-align:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-moz-box-orient:horizontal;-moz-box-direction:normal;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-align-items:stretch;align-items:stretch;background-color:#fff;border:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;font-family:Google Sans,Arial,Helvetica,sans-serif;font-size:16px;-webkit-justify-content:center;justify-content:center;line-height:1.6;margin:0;padding:0}:host{-webkit-box-align:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;-ms-flex-item-align:stretch;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-moz-box-orient:horizontal;-moz-box-direction:normal;-webkit-align-items:stretch;align-items:stretch;-webkit-align-self:stretch;align-self:stretch;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;place-content:space-between space-between;width:100%}.options-container{margin:20px;min-width:500px}.option-title{font-size:18px;font-weight:700;margin-bottom:20px}.turnover{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-moz-box-orient:horizontal;-moz-box-direction:normal;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-left:18px;place-content:space-between space-between}md-radio{margin-right:9px}.toption{min-width:240px}.optdiv{margin:30px 0}.button{-webkit-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap}.button,.buttondesc{-webkit-box-align:start;-moz-box-align:start;-ms-flex-align:start;-webkit-box-direction:normal;-moz-box-direction:normal;-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;place-content:flex-start flex-start}.buttondesc{-webkit-box-orient:vertical;-moz-box-orient:vertical;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;margin-top:11px}']);
function $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_getOrCreateClientId$$() {
  var $result$jscomp$35$$, $clientId$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m730393743$7$$) {
    if (1 == $$jscomp$generator$context$m730393743$7$$.$g$) {
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$7$$, chrome.storage.local.get("clientId"), 2);
    }
    if (3 != $$jscomp$generator$context$m730393743$7$$.$g$) {
      if ($clientId$$ = ($result$jscomp$35$$ = $$jscomp$generator$context$m730393743$7$$.$i$) ? $result$jscomp$35$$.clientId : void 0) {
        $$jscomp$generator$context$m730393743$7$$.$g$ = 3;
        return;
      }
      $clientId$$ = self.crypto.randomUUID();
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$7$$, chrome.storage.local.set({clientId:$clientId$$}), 3);
    }
    return $$jscomp$generator$context$m730393743$7$$.return($clientId$$);
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_sendGoogleAnalyticsEvent$$() {
  var $params$jscomp$4$$ = {screen_class:"Dialog", screen_title:"UserOptions"};
  var $mode$jscomp$15$$ = void 0 === $mode$jscomp$15$$ ? "Production" : $mode$jscomp$15$$;
  var $JSCompiler_temp_const$jscomp$109$$, $JSCompiler_temp_const$jscomp$108$$, $body$jscomp$3$$, $postUrl$$, $postData$$, $response$jscomp$4$$, $validationResult$$;
  $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m730393743$8$$) {
    switch($$jscomp$generator$context$m730393743$8$$.$g$) {
      case 1:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$8$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_getOrCreateClientId$$(), 2);
      case 2:
        return $JSCompiler_temp_const$jscomp$109$$ = $$jscomp$generator$context$m730393743$8$$.$i$, $JSCompiler_temp_const$jscomp$108$$ = {value:chrome.runtime.getManifest().version}, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$8$$, chrome.i18n.getAcceptLanguages(), 3);
      case 3:
        return $body$jscomp$3$$ = {client_id:$JSCompiler_temp_const$jscomp$109$$, user_properties:{chrome_extension_version:$JSCompiler_temp_const$jscomp$108$$, preferred_user_languages:{value:$$jscomp$generator$context$m730393743$8$$.$i$.join(", ").substring(0, 100)}}, events:[{name:"screen_view", params:Object.assign({}, {session_id:$JSCompiler_StaticMethods_JSC$3590_toIsoString$$(new $goog$date$Date$$(), !1, !1), engagement_time_msec:100}, $params$jscomp$4$$, "Production" !== $mode$jscomp$15$$ ? 
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
      this.$requestUpdate$($name$jscomp$130$$, $oldValue$jscomp$5$$, $options$jscomp$153$$);
    }, $init$:function($v$jscomp$29$$) {
      void 0 !== $v$jscomp$29$$ && this.$_$changeProperty$($name$jscomp$130$$, void 0, $options$jscomp$153$$);
      return $v$jscomp$29$$;
    }};
  }
  if ("setter" === $kind$jscomp$6$$) {
    var $name$jscomp$131$$ = $context$jscomp$6$$.name;
    return function($value$jscomp$241$$) {
      var $oldValue$jscomp$6$$ = this[$name$jscomp$131$$];
      $target$jscomp$116$$.call(this, $value$jscomp$241$$);
      this.$requestUpdate$($name$jscomp$131$$, $oldValue$jscomp$6$$, $options$jscomp$153$$);
    };
  }
  throw Error("Unsupported decorator location: " + $kind$jscomp$6$$);
}
function $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$($options$jscomp$154$$) {
  return function($JSCompiler_temp$jscomp$140_protoOrTarget$$, $nameOrContext$jscomp$1$$) {
    if ("object" === typeof $nameOrContext$jscomp$1$$) {
      $JSCompiler_temp$jscomp$140_protoOrTarget$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property$standardProperty$$($options$jscomp$154$$, $JSCompiler_temp$jscomp$140_protoOrTarget$$, $nameOrContext$jscomp$1$$);
    } else {
      var $hasOwnProperty$jscomp$inline_320$$ = $JSCompiler_temp$jscomp$140_protoOrTarget$$.hasOwnProperty($nameOrContext$jscomp$1$$);
      $JSCompiler_temp$jscomp$140_protoOrTarget$$.constructor.$createProperty$($nameOrContext$jscomp$1$$, $hasOwnProperty$jscomp$inline_320$$ ? Object.assign({}, $options$jscomp$154$$, {$wrapped$:!0}) : $options$jscomp$154$$);
      $JSCompiler_temp$jscomp$140_protoOrTarget$$ = $hasOwnProperty$jscomp$inline_320$$ ? Object.getOwnPropertyDescriptor($JSCompiler_temp$jscomp$140_protoOrTarget$$, $nameOrContext$jscomp$1$$) : void 0;
    }
    return $JSCompiler_temp$jscomp$140_protoOrTarget$$;
  };
}
;function $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$base$desc$$($obj$jscomp$88$$, $name$jscomp$132$$, $descriptor$jscomp$4$$) {
  $descriptor$jscomp$4$$.configurable = !0;
  $descriptor$jscomp$4$$.enumerable = !0;
  Reflect.$decorate$ && "object" !== typeof $name$jscomp$132$$ && Object.defineProperty($obj$jscomp$88$$, $name$jscomp$132$$, $descriptor$jscomp$4$$);
  return $descriptor$jscomp$4$$;
}
;function $module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$($selector$jscomp$7$$) {
  return function($protoOrTarget$jscomp$1$$, $nameOrContext$jscomp$2$$) {
    return $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$base$desc$$($protoOrTarget$jscomp$1$$, $nameOrContext$jscomp$2$$, {get:function() {
      var $$jscomp$inline_413$$, $$jscomp$inline_414$$;
      return null != ($$jscomp$inline_414$$ = null == ($$jscomp$inline_413$$ = this.$renderRoot$) ? void 0 : $$jscomp$inline_413$$.querySelector($selector$jscomp$7$$)) ? $$jscomp$inline_414$$ : null;
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
var $$jscomp$templatelit$277864798$0$$ = $$jscomp$createTemplateTagFirstArg$$([":host{border-start-start-radius:var(--md-checkbox-container-shape-start-start,var(--md-checkbox-container-shape,2px));border-start-end-radius:var(--md-checkbox-container-shape-start-end,var(--md-checkbox-container-shape,2px));border-end-end-radius:var(--md-checkbox-container-shape-end-end,var(--md-checkbox-container-shape,2px));border-end-start-radius:var(--md-checkbox-container-shape-end-start,var(--md-checkbox-container-shape,2px));display:inline-flex;height:var(--md-checkbox-container-size,18px);position:relative;vertical-align:top;width:var(--md-checkbox-container-size,18px);-webkit-tap-highlight-color:transparent;cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-checkbox-container-size,18px))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{-moz-appearance:none;appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1;cursor:inherit}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.background,.icon,.outline{inset:0;position:absolute}.background,.outline{border-radius:inherit}.outline{border-color:var(--md-checkbox-outline-color,var(--md-sys-color-on-surface-variant,#49454f));border-style:solid;border-width:var(--md-checkbox-outline-width,2px);box-sizing:border-box}.background{background-color:var(--md-checkbox-selected-container-color,var(--md-sys-color-primary,#6750a4))}.background,.icon{opacity:0;transition-duration:.15s,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(.3,0,.8,.15),linear;transform:scale(.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:.35s,50ms;transition-timing-function:cubic-bezier(.05,.7,.1,1),linear;transform:scale(1)}md-ripple{border-radius:var(--md-checkbox-state-layer-shape,var(--md-sys-shape-corner-full,9999px));height:var(--md-checkbox-state-layer-size,40px);inset:unset;width:var(--md-checkbox-state-layer-size,40px);--md-ripple-hover-color:var(--md-checkbox-hover-state-layer-color,var(--md-sys-color-on-surface,#1d1b20));--md-ripple-hover-opacity:var(--md-checkbox-hover-state-layer-opacity,0.08);--md-ripple-pressed-color:var(--md-checkbox-pressed-state-layer-color,var(--md-sys-color-primary,#6750a4));--md-ripple-pressed-opacity:var(--md-checkbox-pressed-state-layer-opacity,0.12)}.selected md-ripple{--md-ripple-hover-color:var(--md-checkbox-selected-hover-state-layer-color,var(--md-sys-color-primary,#6750a4));--md-ripple-hover-opacity:var(--md-checkbox-selected-hover-state-layer-opacity,0.08);--md-ripple-pressed-color:var(--md-checkbox-selected-pressed-state-layer-color,var(--md-sys-color-on-surface,#1d1b20));--md-ripple-pressed-opacity:var(--md-checkbox-selected-pressed-state-layer-opacity,0.12)}.icon{fill:var(--md-checkbox-selected-icon-color,var(--md-sys-color-on-primary,#fff));height:var(--md-checkbox-icon-size,18px);width:var(--md-checkbox-icon-size,18px)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:.15s;animation-timing-function:cubic-bezier(.3,0,.8,.15);transition-duration:.15s;transition-timing-function:cubic-bezier(.3,0,.8,.15)}.selected .mark{animation-duration:.35s;animation-timing-function:cubic-bezier(.05,.7,.1,1);transition-duration:.35s;transition-timing-function:cubic-bezier(.05,.7,.1,1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px,-14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px,-10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{0%{width:0}}:where(:hover) .outline{border-color:var(--md-checkbox-hover-outline-color,var(--md-sys-color-on-surface,#1d1b20));border-width:var(--md-checkbox-hover-outline-width,2px)}:where(:hover) .background{background:var(--md-checkbox-selected-hover-container-color,var(--md-sys-color-primary,#6750a4))}:where(:hover) .icon{fill:var(--md-checkbox-selected-hover-icon-color,var(--md-sys-color-on-primary,#fff))}:where(:focus-within) .outline{border-color:var(--md-checkbox-focus-outline-color,var(--md-sys-color-on-surface,#1d1b20));border-width:var(--md-checkbox-focus-outline-width,2px)}:where(:focus-within) .background{background:var(--md-checkbox-selected-focus-container-color,var(--md-sys-color-primary,#6750a4))}:where(:focus-within) .icon{fill:var(--md-checkbox-selected-focus-icon-color,var(--md-sys-color-on-primary,#fff))}:where(:active) .outline{border-color:var(--md-checkbox-pressed-outline-color,var(--md-sys-color-on-surface,#1d1b20));border-width:var(--md-checkbox-pressed-outline-width,2px)}:where(:active) .background{background:var(--md-checkbox-selected-pressed-container-color,var(--md-sys-color-primary,#6750a4))}:where(:active) .icon{fill:var(--md-checkbox-selected-pressed-icon-color,var(--md-sys-color-on-primary,#fff))}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--md-checkbox-disabled-outline-color,var(--md-sys-color-on-surface,#1d1b20));border-width:var(--md-checkbox-disabled-outline-width,2px);opacity:var(--md-checkbox-disabled-container-opacity,.38)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--md-checkbox-selected-disabled-container-color,var(--md-sys-color-on-surface,#1d1b20));opacity:var(--md-checkbox-selected-disabled-container-opacity,.38)}:where(.disabled) .icon{fill:var(--md-checkbox-selected-disabled-icon-color,var(--md-sys-color-surface,#fef7ff))}@media (forced-colors:active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}\n"]), 
$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$277864798$0$$);
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
  return " " + Object.keys($classInfo$$).filter(function($key$jscomp$110$$) {
    return $classInfo$$[$key$jscomp$110$$];
  }).join(" ") + " ";
};
$module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$ClassMapDirective$$.prototype.update = function($$jscomp$iter$98_part$jscomp$7_value$jscomp$243$$, $$jscomp$destructuring$var35_classInfo$jscomp$1$$) {
  $$jscomp$destructuring$var35_classInfo$jscomp$1$$ = $$jscomp$makeIterator$$($$jscomp$destructuring$var35_classInfo$jscomp$1$$).next().value;
  if (void 0 === this.$i$) {
    this.$i$ = new Set();
    void 0 !== $$jscomp$iter$98_part$jscomp$7_value$jscomp$243$$.$strings$ && (this.$j$ = new Set($$jscomp$iter$98_part$jscomp$7_value$jscomp$243$$.$strings$.join(" ").split(/\s/).filter(function($s$jscomp$36$$) {
      return "" !== $s$jscomp$36$$;
    })));
    for (var $classList_name$jscomp$138$$ in $$jscomp$destructuring$var35_classInfo$jscomp$1$$) {
      var $$jscomp$optchain$tmp762760598$1_name$jscomp$140$$ = void 0;
      !$$jscomp$destructuring$var35_classInfo$jscomp$1$$[$classList_name$jscomp$138$$] || (null == ($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$ = this.$j$) ? 0 : $$jscomp$optchain$tmp762760598$1_name$jscomp$140$$.has($classList_name$jscomp$138$$)) || this.$i$.add($classList_name$jscomp$138$$);
    }
    return this.$render$($$jscomp$destructuring$var35_classInfo$jscomp$1$$);
  }
  $classList_name$jscomp$138$$ = $$jscomp$iter$98_part$jscomp$7_value$jscomp$243$$.element.classList;
  $$jscomp$iter$98_part$jscomp$7_value$jscomp$243$$ = $$jscomp$makeIterator$$(this.$i$);
  for (var $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$ = $$jscomp$iter$98_part$jscomp$7_value$jscomp$243$$.next(); !$$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$.done; $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$ = $$jscomp$iter$98_part$jscomp$7_value$jscomp$243$$.next()) {
    $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$ = $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$.value, $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$ in $$jscomp$destructuring$var35_classInfo$jscomp$1$$ || ($classList_name$jscomp$138$$.remove($$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$), this.$i$.delete($$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$));
  }
  for ($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$ in $$jscomp$destructuring$var35_classInfo$jscomp$1$$) {
    $$jscomp$iter$98_part$jscomp$7_value$jscomp$243$$ = !!$$jscomp$destructuring$var35_classInfo$jscomp$1$$[$$jscomp$optchain$tmp762760598$1_name$jscomp$140$$], $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$ = void 0, $$jscomp$iter$98_part$jscomp$7_value$jscomp$243$$ === this.$i$.has($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$) || null != ($$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$ = this.$j$) && $$jscomp$key$762760598$9$name$jscomp$139_$jscomp$optchain$tmp762760598$2_name$jscomp$139$$.has($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$) || 
    ($$jscomp$iter$98_part$jscomp$7_value$jscomp$243$$ ? ($classList_name$jscomp$138$$.add($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$), this.$i$.add($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$)) : ($classList_name$jscomp$138$$.remove($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$), this.$i$.delete($$jscomp$optchain$tmp762760598$1_name$jscomp$140$$)));
  }
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$noChange$$;
};
var $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$classMap$$ = function($c$jscomp$10$$) {
  return function() {
    var $values$jscomp$20$$ = $$jscomp$getRestArguments$$.apply(0, arguments), $$jscomp$compprop69$$ = {};
    return $$jscomp$compprop69$$._$litDirective$ = $c$jscomp$10$$, $$jscomp$compprop69$$.values = $values$jscomp$20$$, $$jscomp$compprop69$$;
  };
}($module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$ClassMapDirective$$);
var $$jscomp$templatelit$m105326783$0$$ = $$jscomp$createTemplateTagFirstArg$$([":host{animation-delay:0s,calc(var(--md-focus-ring-duration, .6s)*.25);animation-duration:calc(var(--md-focus-ring-duration, .6s)*.25),calc(var(--md-focus-ring-duration, .6s)*.75);animation-timing-function:cubic-bezier(.2,0,0,1);box-sizing:border-box;color:var(--md-focus-ring-color,var(--md-sys-color-secondary,#625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(var(--md-focus-ring-outward-offset, 2px)*-1);outline:var(--md-focus-ring-width,3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width,3px) solid currentColor;inset:var(--md-focus-ring-inward-offset,0)}@keyframes outward-grow{0%{outline-width:0}to{outline-width:var(--md-focus-ring-active-width,8px)}}@keyframes outward-shrink{0%{outline-width:var(--md-focus-ring-active-width,8px)}}@keyframes inward-grow{0%{border-width:0}to{border-width:var(--md-focus-ring-active-width,8px)}}@keyframes inward-shrink{0%{border-width:var(--md-focus-ring-active-width,8px)}}@media (prefers-reduced-motion){:host{animation:none}}\n"]), 
$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$m105326783$0$$);
/*

 Copyright 2023 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var $module$contents$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller_ATTACHABLE_CONTROLLER$$ = Symbol("attachableController"), $module$contents$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller_FOR_ATTRIBUTE_OBSERVER$$;
$module$contents$google3$third_party$javascript$material$web$internal$controller$attachable$2dcontroller_FOR_ATTRIBUTE_OBSERVER$$ = new MutationObserver(function($$jscomp$iter$99_records$$) {
  $$jscomp$iter$99_records$$ = $$jscomp$makeIterator$$($$jscomp$iter$99_records$$);
  for (var $$jscomp$key$m1781090501$17$record$$ = $$jscomp$iter$99_records$$.next(); !$$jscomp$key$m1781090501$17$record$$.done; $$jscomp$key$m1781090501$17$record$$ = $$jscomp$iter$99_records$$.next()) {
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
/*

 Copyright 2021 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
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
  for (var $$jscomp$iter$100$$ = $$jscomp$makeIterator$$($module$contents$google3$third_party$javascript$material$web$focus$internal$focus$2dring_EVENTS$$), $$jscomp$key$807024100$4$event$jscomp$11_event$jscomp$11$$ = $$jscomp$iter$100$$.next(); !$$jscomp$key$807024100$4$event$jscomp$11_event$jscomp$11$$.done; $$jscomp$key$807024100$4$event$jscomp$11_event$jscomp$11$$ = $$jscomp$iter$100$$.next()) {
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
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$() {
  return $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$, $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$.$elementStyles$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$elementStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$.$__prepare$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$__prepare$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$.$createProperty$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$createProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$.$addInitializer$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$addInitializer$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$.$finalize$ = $module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$FocusRing$$.$finalize$;
var $module$exports$google3$third_party$javascript$material$web$focus$md$2dfocus$2dring$MdFocusRing$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$focus$md_focus_ring_closure$classdecl$var7$$;
$module$exports$google3$third_party$javascript$material$web$focus$md$2dfocus$2dring$MdFocusRing$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$focus$internal$focus$2dring$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$focus$md$2dfocus$2dring$MdFocusRing$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-focus-ring")], $module$exports$google3$third_party$javascript$material$web$focus$md$2dfocus$2dring$MdFocusRing$$);
var $module$exports$google3$third_party$javascript$material$web$internal$aria$aria$ARIA_PROPERTIES$$ = "role ariaAtomic ariaAutoComplete ariaBusy ariaChecked ariaColCount ariaColIndex ariaColSpan ariaCurrent ariaDisabled ariaExpanded ariaHasPopup ariaHidden ariaInvalid ariaKeyShortcuts ariaLabel ariaLevel ariaLive ariaModal ariaMultiLine ariaMultiSelectable ariaOrientation ariaPlaceholder ariaPosInSet ariaPressed ariaReadOnly ariaRequired ariaRoleDescription ariaRowCount ariaRowIndex ariaRowSpan ariaSelected ariaSetSize ariaSort ariaValueMax ariaValueMin ariaValueNow ariaValueText".split(" ");
$module$exports$google3$third_party$javascript$material$web$internal$aria$aria$ARIA_PROPERTIES$$.map($module$contents$google3$third_party$javascript$material$web$internal$aria$aria_ariaPropertyToAttribute$$);
function $module$contents$google3$third_party$javascript$material$web$internal$aria$aria_ariaPropertyToAttribute$$($property$jscomp$12$$) {
  return $property$jscomp$12$$.replace("aria", "aria-").replace(/Elements?/g, "").toLowerCase();
}
;function $module$contents$google3$third_party$javascript$material$web$internal$events$form$2dlabel$2dactivation_isActivationClick$$($JSCompiler_temp$jscomp$141_event$jscomp$13$$) {
  if ($JSCompiler_temp$jscomp$141_event$jscomp$13$$.currentTarget !== $JSCompiler_temp$jscomp$141_event$jscomp$13$$.target || $JSCompiler_temp$jscomp$141_event$jscomp$13$$.composedPath()[0] !== $JSCompiler_temp$jscomp$141_event$jscomp$13$$.target || $JSCompiler_temp$jscomp$141_event$jscomp$13$$.target.disabled) {
    $JSCompiler_temp$jscomp$141_event$jscomp$13$$ = !1;
  } else {
    var $squelched$jscomp$inline_323$$ = $module$contents$google3$third_party$javascript$material$web$internal$events$form$2dlabel$2dactivation_isSquelchingEvents$$;
    $squelched$jscomp$inline_323$$ && ($JSCompiler_temp$jscomp$141_event$jscomp$13$$.preventDefault(), $JSCompiler_temp$jscomp$141_event$jscomp$13$$.stopImmediatePropagation());
    $module$contents$google3$third_party$javascript$material$web$internal$events$form$2dlabel$2dactivation_squelchEventsForMicrotask$$();
    $JSCompiler_temp$jscomp$141_event$jscomp$13$$ = !$squelched$jscomp$inline_323$$;
  }
  return $JSCompiler_temp$jscomp$141_event$jscomp$13$$;
}
var $module$contents$google3$third_party$javascript$material$web$internal$events$form$2dlabel$2dactivation_isSquelchingEvents$$ = !1;
function $module$contents$google3$third_party$javascript$material$web$internal$events$form$2dlabel$2dactivation_squelchEventsForMicrotask$$() {
  $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$356324912$0$$) {
    if (1 == $$jscomp$generator$context$356324912$0$$.$g$) {
      return $module$contents$google3$third_party$javascript$material$web$internal$events$form$2dlabel$2dactivation_isSquelchingEvents$$ = !0, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$356324912$0$$, null, 2);
    }
    $module$contents$google3$third_party$javascript$material$web$internal$events$form$2dlabel$2dactivation_isSquelchingEvents$$ = !1;
    $$jscomp$generator$context$356324912$0$$.$g$ = 0;
  });
}
;var $module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$ = Symbol("internals"), $module$contents$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals_privateInternals$$ = Symbol("privateInternals");
function $module$contents$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals_mixinElementInternals$$($base$jscomp$9$$) {
  function $WithElementInternalsElement$$() {
    return $base$jscomp$9$$.apply(this, arguments) || this;
  }
  $$jscomp$inherits$$($WithElementInternalsElement$$, $base$jscomp$9$$);
  $$jscomp$global$$.Object.defineProperty($WithElementInternalsElement$$.prototype, $module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$, {configurable:!0, enumerable:!0, get:function() {
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals_privateInternals$$] || (this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals_privateInternals$$] = this.attachInternals());
    return this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals_privateInternals$$];
  }});
  return $WithElementInternalsElement$$;
}
;var $module$exports$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation$createValidator$$ = Symbol("createValidator"), $module$exports$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation$getValidityAnchor$$ = Symbol("getValidityAnchor"), $module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateValidator$$ = Symbol("privateValidator"), $module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateSyncValidity$$ = 
Symbol("privateSyncValidity"), $module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateCustomValidationMessage$$ = Symbol("privateCustomValidationMessage");
function $module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_mixinConstraintValidation$$($base$jscomp$10$$) {
  function $ConstraintValidationElement$$() {
    var $$jscomp$super$this$1113079070$0$$ = $base$jscomp$10$$.apply(this, arguments) || this;
    $$jscomp$super$this$1113079070$0$$[$_a$$] = "";
    return $$jscomp$super$this$1113079070$0$$;
  }
  var $_a$$;
  $$jscomp$inherits$$($ConstraintValidationElement$$, $base$jscomp$10$$);
  $ConstraintValidationElement$$.prototype.checkValidity = function() {
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateSyncValidity$$]();
    return this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].checkValidity();
  };
  $ConstraintValidationElement$$.prototype.reportValidity = function() {
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateSyncValidity$$]();
    return this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].reportValidity();
  };
  $ConstraintValidationElement$$.prototype.setCustomValidity = function($error$jscomp$15$$) {
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateCustomValidationMessage$$] = $error$jscomp$15$$;
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateSyncValidity$$]();
  };
  $ConstraintValidationElement$$.prototype.$requestUpdate$ = function($name$jscomp$141$$, $oldValue$jscomp$8$$, $options$jscomp$158$$) {
    $base$jscomp$10$$.prototype.$requestUpdate$.call(this, $name$jscomp$141$$, $oldValue$jscomp$8$$, $options$jscomp$158$$);
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateSyncValidity$$]();
  };
  $ConstraintValidationElement$$.prototype.$firstUpdated$ = function($changed$jscomp$1$$) {
    $base$jscomp$10$$.prototype.$firstUpdated$.call(this, $changed$jscomp$1$$);
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateSyncValidity$$]();
  };
  $ConstraintValidationElement$$.prototype[$_a$$ = $module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateCustomValidationMessage$$, $module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateSyncValidity$$] = function() {
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateValidator$$] || (this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateValidator$$] = this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation$createValidator$$]());
    var $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$ = this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateValidator$$];
    var $nonCustomValidationMessage_state$jscomp$inline_328_validationMessage$$ = $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$.$s$();
    if ($$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$.$o$ && $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$.$j$($$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$.$o$, $nonCustomValidationMessage_state$jscomp$inline_328_validationMessage$$)) {
      $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$ = $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$.$i$;
    } else {
      var $$jscomp$inline_329_validationMessage$jscomp$inline_331$$ = $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$.$l$($nonCustomValidationMessage_state$jscomp$inline_328_validationMessage$$), $validity$jscomp$inline_330$$ = $$jscomp$inline_329_validationMessage$jscomp$inline_331$$.validity;
      $$jscomp$inline_329_validationMessage$jscomp$inline_331$$ = $$jscomp$inline_329_validationMessage$jscomp$inline_331$$.validationMessage;
      $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$.$o$ = $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$.$m$($nonCustomValidationMessage_state$jscomp$inline_328_validationMessage$$);
      $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$.$i$ = {validationMessage:$$jscomp$inline_329_validationMessage$jscomp$inline_331$$, validity:{badInput:$validity$jscomp$inline_330$$.badInput, customError:$validity$jscomp$inline_330$$.customError, patternMismatch:$validity$jscomp$inline_330$$.patternMismatch, rangeOverflow:$validity$jscomp$inline_330$$.rangeOverflow, rangeUnderflow:$validity$jscomp$inline_330$$.rangeUnderflow, 
      stepMismatch:$validity$jscomp$inline_330$$.stepMismatch, tooLong:$validity$jscomp$inline_330$$.tooLong, tooShort:$validity$jscomp$inline_330$$.tooShort, typeMismatch:$validity$jscomp$inline_330$$.typeMismatch, valueMissing:$validity$jscomp$inline_330$$.valueMissing}};
      $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$ = $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$.$i$;
    }
    $nonCustomValidationMessage_state$jscomp$inline_328_validationMessage$$ = $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$.validationMessage;
    $nonCustomValidationMessage_state$jscomp$inline_328_validationMessage$$ = this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateCustomValidationMessage$$] || $nonCustomValidationMessage_state$jscomp$inline_328_validationMessage$$;
    var $$jscomp$nullish$tmp55$$;
    this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].setValidity(Object.assign({}, $$jscomp$destructuring$var37_JSCompiler_StaticMethods_getValidity$self$jscomp$inline_327_JSCompiler_inline_result$jscomp$143$$.validity, {customError:!!this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateCustomValidationMessage$$]}), $nonCustomValidationMessage_state$jscomp$inline_328_validationMessage$$, 
    null != ($$jscomp$nullish$tmp55$$ = this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation$getValidityAnchor$$]()) ? $$jscomp$nullish$tmp55$$ : void 0);
  };
  $ConstraintValidationElement$$.prototype[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation$createValidator$$] = function() {
    throw Error("Implement [createValidator]");
  };
  $ConstraintValidationElement$$.prototype[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation$getValidityAnchor$$] = function() {
    throw Error("Implement [getValidityAnchor]");
  };
  $$jscomp$global$$.Object.defineProperties($ConstraintValidationElement$$.prototype, {validity:{configurable:!0, enumerable:!0, get:function() {
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateSyncValidity$$]();
    return this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].validity;
  }}, validationMessage:{configurable:!0, enumerable:!0, get:function() {
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateSyncValidity$$]();
    return this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].validationMessage;
  }}, willValidate:{configurable:!0, enumerable:!0, get:function() {
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_privateSyncValidity$$]();
    return this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].willValidate;
  }}});
  return $ConstraintValidationElement$$;
}
;var $module$exports$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated$getFormValue$$ = Symbol("getFormValue"), $module$exports$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated$getFormState$$ = Symbol("getFormState");
function $module$contents$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated_mixinFormAssociated$$($base$jscomp$11$$) {
  function $FormAssociatedElement$$() {
    return $base$jscomp$11$$.apply(this, arguments) || this;
  }
  $$jscomp$inherits$$($FormAssociatedElement$$, $base$jscomp$11$$);
  $FormAssociatedElement$$.prototype.attributeChangedCallback = function($name$jscomp$143$$, $old$jscomp$1$$, $value$jscomp$244$$) {
    "name" === $name$jscomp$143$$ || "disabled" === $name$jscomp$143$$ ? this.$requestUpdate$($name$jscomp$143$$, "disabled" === $name$jscomp$143$$ ? null !== $old$jscomp$1$$ : $old$jscomp$1$$) : $base$jscomp$11$$.prototype.attributeChangedCallback.call(this, $name$jscomp$143$$, $old$jscomp$1$$, $value$jscomp$244$$);
  };
  $FormAssociatedElement$$.prototype.$requestUpdate$ = function($name$jscomp$144$$, $oldValue$jscomp$10$$, $options$jscomp$159$$) {
    $base$jscomp$11$$.prototype.$requestUpdate$.call(this, $name$jscomp$144$$, $oldValue$jscomp$10$$, $options$jscomp$159$$);
    this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].setFormValue(this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated$getFormValue$$](), this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated$getFormState$$]());
  };
  $FormAssociatedElement$$.prototype[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated$getFormValue$$] = function() {
    throw Error("Implement [getFormValue]");
  };
  $FormAssociatedElement$$.prototype[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated$getFormState$$] = function() {
    return this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated$getFormValue$$]();
  };
  $FormAssociatedElement$$.prototype.formDisabledCallback = function($disabled$jscomp$5$$) {
    this.disabled = $disabled$jscomp$5$$;
  };
  $$jscomp$global$$.Object.defineProperties($FormAssociatedElement$$.prototype, {form:{configurable:!0, enumerable:!0, get:function() {
    return this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].form;
  }}, labels:{configurable:!0, enumerable:!0, get:function() {
    return this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].labels;
  }}, name:{configurable:!0, enumerable:!0, get:function() {
    var $$jscomp$nullish$tmp56$$;
    return null != ($$jscomp$nullish$tmp56$$ = this.getAttribute("name")) ? $$jscomp$nullish$tmp56$$ : "";
  }, set:function($name$jscomp$142$$) {
    this.setAttribute("name", $name$jscomp$142$$);
  }}, disabled:{configurable:!0, enumerable:!0, get:function() {
    return this.hasAttribute("disabled");
  }, set:function($disabled$jscomp$4$$) {
    this.toggleAttribute("disabled", $disabled$jscomp$4$$);
  }}});
  $FormAssociatedElement$$.formAssociated = !0;
  $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({$noAccessor$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", String), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:paramtypes", [String])], $FormAssociatedElement$$.prototype, "name", null);
  $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean, $noAccessor$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Boolean), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:paramtypes", [Boolean])], $FormAssociatedElement$$.prototype, "disabled", null);
  return $FormAssociatedElement$$;
}
;function $module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$validator$Validator$$($getCurrentState$$) {
  this.$s$ = $getCurrentState$$;
  this.$i$ = {validity:{}, validationMessage:""};
}
;function $module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$checkbox$2dvalidator$CheckboxValidator$$() {
  $module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$validator$Validator$$.apply(this, arguments);
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$checkbox$2dvalidator$CheckboxValidator$$, $module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$validator$Validator$$);
$module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$checkbox$2dvalidator$CheckboxValidator$$.prototype.$l$ = function($state$jscomp$11$$) {
  this.$g$ || (this.$g$ = document.createElement("input"), this.$g$.type = "checkbox");
  this.$g$.checked = $state$jscomp$11$$.checked;
  this.$g$.required = $state$jscomp$11$$.required;
  return {validity:this.$g$.validity, validationMessage:this.$g$.validationMessage};
};
$module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$checkbox$2dvalidator$CheckboxValidator$$.prototype.$j$ = function($prev$jscomp$3$$, $next$jscomp$4$$) {
  return $prev$jscomp$3$$.checked === $next$jscomp$4$$.checked && $prev$jscomp$3$$.required === $next$jscomp$4$$.required;
};
$module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$checkbox$2dvalidator$CheckboxValidator$$.prototype.$m$ = function($$jscomp$destructuring$var39$$) {
  return {checked:$$jscomp$destructuring$var39$$.checked, required:$$jscomp$destructuring$var39$$.required};
};
var $$jscomp$templatelit$168124472$0$$ = $$jscomp$createTemplateTagFirstArg$$([':host {\n  display: flex;\n  margin: auto;\n  pointer-events: none;\n}\n\n:host([disabled]) {\n  display: none;\n}\n\n@media (forced-colors: active) {\n  :host {\n    display: none;\n  }\n}\n:host,\n.surface {\n  border-radius: inherit;\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n\n.surface {\n  -webkit-tap-highlight-color: transparent;\n}\n.surface::before, .surface::after {\n  content: "";\n  opacity: 0;\n  position: absolute;\n}\n.surface::before {\n  background-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));\n  inset: 0;\n  transition: opacity 15ms linear, background-color 15ms linear;\n}\n.surface::after {\n  background: radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);\n  transform-origin: center center;\n  transition: opacity 375ms linear;\n}\n\n.hovered::before {\n  background-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));\n  opacity: var(--md-ripple-hover-opacity, 0.08);\n}\n\n.pressed::after {\n  opacity: var(--md-ripple-pressed-opacity, 0.12);\n  transition-duration: 105ms;\n}\n\n']), 
$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$168124472$0$$);
/*

 Copyright 2022 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
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
function $JSCompiler_StaticMethods_handlePointerdown$$($JSCompiler_StaticMethods_handlePointerdown$self$$, $event$jscomp$19$$) {
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m1165769523$40$$) {
    if (1 == $$jscomp$generator$context$m1165769523$40$$.$g$) {
      if (!$JSCompiler_StaticMethods_shouldReactToEvent$$($JSCompiler_StaticMethods_handlePointerdown$self$$, $event$jscomp$19$$)) {
        return $$jscomp$generator$context$m1165769523$40$$.return();
      }
      $JSCompiler_StaticMethods_handlePointerdown$self$$.$rippleStartEvent$ = $event$jscomp$19$$;
      if ("touch" !== $event$jscomp$19$$.pointerType) {
        return $JSCompiler_StaticMethods_handlePointerdown$self$$.state = 3, $JSCompiler_StaticMethods_startPressAnimation$$($JSCompiler_StaticMethods_handlePointerdown$self$$, $event$jscomp$19$$), $$jscomp$generator$context$m1165769523$40$$.return();
      }
      if ($JSCompiler_StaticMethods_handlePointerdown$self$$.$checkBoundsAfterContextMenu$ && !$JSCompiler_StaticMethods_inBounds$$($JSCompiler_StaticMethods_handlePointerdown$self$$, $event$jscomp$19$$)) {
        return $$jscomp$generator$context$m1165769523$40$$.return();
      }
      $JSCompiler_StaticMethods_handlePointerdown$self$$.$checkBoundsAfterContextMenu$ = !1;
      $JSCompiler_StaticMethods_handlePointerdown$self$$.state = 1;
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m1165769523$40$$, new Promise(function($resolve$jscomp$9$$) {
        setTimeout($resolve$jscomp$9$$, 150);
      }), 2);
    }
    if (1 !== $JSCompiler_StaticMethods_handlePointerdown$self$$.state) {
      return $$jscomp$generator$context$m1165769523$40$$.return();
    }
    $JSCompiler_StaticMethods_handlePointerdown$self$$.state = 2;
    $JSCompiler_StaticMethods_startPressAnimation$$($JSCompiler_StaticMethods_handlePointerdown$self$$, $event$jscomp$19$$);
    $$jscomp$generator$context$m1165769523$40$$.$g$ = 0;
  });
}
$JSCompiler_prototypeAlias$$.$handleClick$ = function() {
  this.disabled || (3 === this.state ? $JSCompiler_StaticMethods_endPressAnimation$$(this) : 0 === this.state && ($JSCompiler_StaticMethods_startPressAnimation$$(this), $JSCompiler_StaticMethods_endPressAnimation$$(this)));
};
function $JSCompiler_StaticMethods_startPressAnimation$$($JSCompiler_StaticMethods_startPressAnimation$self$$, $JSCompiler_object_inline_startPoint_398_JSCompiler_temp$jscomp$403_positionEvent$jscomp$1_startPoint$jscomp$inline_350$$) {
  if ($JSCompiler_StaticMethods_startPressAnimation$self$$.$mdRoot$) {
    $JSCompiler_StaticMethods_startPressAnimation$self$$.pressed = !0;
    var $$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$;
    null == ($$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$ = $JSCompiler_StaticMethods_startPressAnimation$self$$.$growAnimation$) || $$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$.cancel();
    var $$jscomp$inline_336_JSCompiler_object_inline_y_431_softEdgeSize$jscomp$inline_340$$ = $JSCompiler_StaticMethods_startPressAnimation$self$$.getBoundingClientRect();
    $$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$ = $$jscomp$inline_336_JSCompiler_object_inline_y_431_softEdgeSize$jscomp$inline_340$$.height;
    var $height$jscomp$inline_347_scrollX$jscomp$inline_419_width$jscomp$inline_338$$ = $$jscomp$inline_336_JSCompiler_object_inline_y_431_softEdgeSize$jscomp$inline_340$$.width, $$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$ = Math.max($$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$, $height$jscomp$inline_347_scrollX$jscomp$inline_419_width$jscomp$inline_338$$);
    $$jscomp$inline_336_JSCompiler_object_inline_y_431_softEdgeSize$jscomp$inline_340$$ = Math.max(.35 * $$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$, 75);
    $$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$ = Math.floor(.2 * $$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$);
    $$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$ = Math.sqrt(Math.pow($height$jscomp$inline_347_scrollX$jscomp$inline_419_width$jscomp$inline_338$$, 2) + Math.pow($$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$, 2)) + 10;
    $JSCompiler_StaticMethods_startPressAnimation$self$$.$initialSize$ = $$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$;
    $JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleScale$ = "" + ($$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$ + $$jscomp$inline_336_JSCompiler_object_inline_y_431_softEdgeSize$jscomp$inline_340$$) / $$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$;
    $JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleSize$ = $$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$ + "px";
    $$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$ = $JSCompiler_StaticMethods_startPressAnimation$self$$.getBoundingClientRect();
    $height$jscomp$inline_347_scrollX$jscomp$inline_419_width$jscomp$inline_338$$ = $$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$.height;
    $$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$ = $$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$.width;
    $$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$ = ($$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$ - $JSCompiler_StaticMethods_startPressAnimation$self$$.$initialSize$) / 2;
    $$jscomp$inline_336_JSCompiler_object_inline_y_431_softEdgeSize$jscomp$inline_340$$ = ($height$jscomp$inline_347_scrollX$jscomp$inline_419_width$jscomp$inline_338$$ - $JSCompiler_StaticMethods_startPressAnimation$self$$.$initialSize$) / 2;
    if ($JSCompiler_object_inline_startPoint_398_JSCompiler_temp$jscomp$403_positionEvent$jscomp$1_startPoint$jscomp$inline_350$$ instanceof PointerEvent) {
      $$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$ = window;
      $height$jscomp$inline_347_scrollX$jscomp$inline_419_width$jscomp$inline_338$$ = $$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$.scrollX;
      $$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$ = $$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$.scrollY;
      var $$jscomp$inline_421$$ = $JSCompiler_StaticMethods_startPressAnimation$self$$.getBoundingClientRect();
      $JSCompiler_object_inline_startPoint_398_JSCompiler_temp$jscomp$403_positionEvent$jscomp$1_startPoint$jscomp$inline_350$$ = {x:$JSCompiler_object_inline_startPoint_398_JSCompiler_temp$jscomp$403_positionEvent$jscomp$1_startPoint$jscomp$inline_350$$.pageX - ($height$jscomp$inline_347_scrollX$jscomp$inline_419_width$jscomp$inline_338$$ + $$jscomp$inline_421$$.left), y:$JSCompiler_object_inline_startPoint_398_JSCompiler_temp$jscomp$403_positionEvent$jscomp$1_startPoint$jscomp$inline_350$$.pageY - 
      ($$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$ + $$jscomp$inline_421$$.top)};
    } else {
      $JSCompiler_object_inline_startPoint_398_JSCompiler_temp$jscomp$403_positionEvent$jscomp$1_startPoint$jscomp$inline_350$$ = {x:$$jscomp$inline_418_initialSize$jscomp$inline_341_maxDim$jscomp$inline_339_scrollY$jscomp$inline_420_width$jscomp$inline_348$$ / 2, y:$height$jscomp$inline_347_scrollX$jscomp$inline_419_width$jscomp$inline_338$$ / 2};
    }
    $JSCompiler_object_inline_startPoint_398_JSCompiler_temp$jscomp$403_positionEvent$jscomp$1_startPoint$jscomp$inline_350$$ = {x:$JSCompiler_object_inline_startPoint_398_JSCompiler_temp$jscomp$403_positionEvent$jscomp$1_startPoint$jscomp$inline_350$$.x - $JSCompiler_StaticMethods_startPressAnimation$self$$.$initialSize$ / 2, y:$JSCompiler_object_inline_startPoint_398_JSCompiler_temp$jscomp$403_positionEvent$jscomp$1_startPoint$jscomp$inline_350$$.y - $JSCompiler_StaticMethods_startPressAnimation$self$$.$initialSize$ / 
    2};
    $JSCompiler_StaticMethods_startPressAnimation$self$$.$growAnimation$ = $JSCompiler_StaticMethods_startPressAnimation$self$$.$mdRoot$.animate({top:[0, 0], left:[0, 0], height:[$JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleSize$, $JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleSize$], width:[$JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleSize$, $JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleSize$], transform:["translate(" + ($JSCompiler_object_inline_startPoint_398_JSCompiler_temp$jscomp$403_positionEvent$jscomp$1_startPoint$jscomp$inline_350$$.x + 
    "px, " + $JSCompiler_object_inline_startPoint_398_JSCompiler_temp$jscomp$403_positionEvent$jscomp$1_startPoint$jscomp$inline_350$$.y + "px) scale(1)"), "translate(" + ($$jscomp$inline_346_$jscomp$optchain$tmpm1165769523$0_JSCompiler_object_inline_x_430_height$jscomp$inline_337_maxRadius$jscomp$inline_342$$ + "px, " + $$jscomp$inline_336_JSCompiler_object_inline_y_431_softEdgeSize$jscomp$inline_340$$ + "px) scale(") + $JSCompiler_StaticMethods_startPressAnimation$self$$.$rippleScale$ + ")"]}, 
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
      return 225 <= $pressAnimationPlayState$$ ? ($JSCompiler_StaticMethods_endPressAnimation$self$$.pressed = !1, $$jscomp$generator$context$m1165769523$41$$.return()) : $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m1165769523$41$$, new Promise(function($resolve$jscomp$10$$) {
        setTimeout($resolve$jscomp$10$$, 225 - $pressAnimationPlayState$$);
      }), 2);
    }
    if ($JSCompiler_StaticMethods_endPressAnimation$self$$.$growAnimation$ !== $animation$$) {
      return $$jscomp$generator$context$m1165769523$41$$.return();
    }
    $JSCompiler_StaticMethods_endPressAnimation$self$$.pressed = !1;
    $$jscomp$generator$context$m1165769523$41$$.$g$ = 0;
  });
}
function $JSCompiler_StaticMethods_shouldReactToEvent$$($JSCompiler_StaticMethods_shouldReactToEvent$self_isPrimaryButton$$, $event$jscomp$21$$) {
  if ($JSCompiler_StaticMethods_shouldReactToEvent$self_isPrimaryButton$$.disabled || !$event$jscomp$21$$.isPrimary || $JSCompiler_StaticMethods_shouldReactToEvent$self_isPrimaryButton$$.$rippleStartEvent$ && $JSCompiler_StaticMethods_shouldReactToEvent$self_isPrimaryButton$$.$rippleStartEvent$.pointerId !== $event$jscomp$21$$.pointerId) {
    return !1;
  }
  if ("pointerenter" === $event$jscomp$21$$.type || "pointerleave" === $event$jscomp$21$$.type) {
    return "touch" !== $event$jscomp$21$$.pointerType;
  }
  $JSCompiler_StaticMethods_shouldReactToEvent$self_isPrimaryButton$$ = 1 === $event$jscomp$21$$.buttons;
  return "touch" === $event$jscomp$21$$.pointerType || $JSCompiler_StaticMethods_shouldReactToEvent$self_isPrimaryButton$$;
}
function $JSCompiler_StaticMethods_inBounds$$($$jscomp$destructuring$var49_JSCompiler_StaticMethods_inBounds$self$$, $$jscomp$destructuring$var47_y$jscomp$80$$) {
  var $x$jscomp$103$$ = $$jscomp$destructuring$var47_y$jscomp$80$$.x;
  $$jscomp$destructuring$var47_y$jscomp$80$$ = $$jscomp$destructuring$var47_y$jscomp$80$$.y;
  $$jscomp$destructuring$var49_JSCompiler_StaticMethods_inBounds$self$$ = $$jscomp$destructuring$var49_JSCompiler_StaticMethods_inBounds$self$$.getBoundingClientRect();
  var $top$jscomp$4$$ = $$jscomp$destructuring$var49_JSCompiler_StaticMethods_inBounds$self$$.top, $bottom$jscomp$1$$ = $$jscomp$destructuring$var49_JSCompiler_StaticMethods_inBounds$self$$.bottom, $right$jscomp$5$$ = $$jscomp$destructuring$var49_JSCompiler_StaticMethods_inBounds$self$$.right;
  return $x$jscomp$103$$ >= $$jscomp$destructuring$var49_JSCompiler_StaticMethods_inBounds$self$$.left && $x$jscomp$103$$ <= $right$jscomp$5$$ && $$jscomp$destructuring$var47_y$jscomp$80$$ >= $top$jscomp$4$$ && $$jscomp$destructuring$var47_y$jscomp$80$$ <= $bottom$jscomp$1$$;
}
$JSCompiler_prototypeAlias$$.handleEvent = function($event$jscomp$22$$) {
  var $$jscomp$async$this$jscomp$4$$ = this, $$jscomp$optchain$tmpm1165769523$3$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$121$$) {
    if (1 == $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$121$$.$g$) {
      if (null == ($$jscomp$optchain$tmpm1165769523$3$$ = $module$contents$google3$third_party$javascript$material$web$ripple$internal$ripple_FORCED_COLORS$$) ? 0 : $$jscomp$optchain$tmpm1165769523$3$$.matches) {
        return $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$121$$.return();
      }
      switch($event$jscomp$22$$.type) {
        case "click":
          $$jscomp$async$this$jscomp$4$$.$handleClick$();
          break;
        case "contextmenu":
          $$jscomp$async$this$jscomp$4$$.disabled || ($$jscomp$async$this$jscomp$4$$.$checkBoundsAfterContextMenu$ = !0, $JSCompiler_StaticMethods_endPressAnimation$$($$jscomp$async$this$jscomp$4$$));
          break;
        case "pointercancel":
          $JSCompiler_StaticMethods_shouldReactToEvent$$($$jscomp$async$this$jscomp$4$$, $event$jscomp$22$$) && $JSCompiler_StaticMethods_endPressAnimation$$($$jscomp$async$this$jscomp$4$$);
          break;
        case "pointerdown":
          $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$121$$.$g$ = 2;
          return;
        case "pointerenter":
          $JSCompiler_StaticMethods_shouldReactToEvent$$($$jscomp$async$this$jscomp$4$$, $event$jscomp$22$$) && ($$jscomp$async$this$jscomp$4$$.$hovered$ = !0);
          break;
        case "pointerleave":
          $JSCompiler_StaticMethods_shouldReactToEvent$$($$jscomp$async$this$jscomp$4$$, $event$jscomp$22$$) && ($$jscomp$async$this$jscomp$4$$.$hovered$ = !1, 0 !== $$jscomp$async$this$jscomp$4$$.state && $JSCompiler_StaticMethods_endPressAnimation$$($$jscomp$async$this$jscomp$4$$));
          break;
        case "pointerup":
          $JSCompiler_StaticMethods_shouldReactToEvent$$($$jscomp$async$this$jscomp$4$$, $event$jscomp$22$$) && (2 === $$jscomp$async$this$jscomp$4$$.state ? $$jscomp$async$this$jscomp$4$$.state = 3 : 1 === $$jscomp$async$this$jscomp$4$$.state && ($$jscomp$async$this$jscomp$4$$.state = 3, $JSCompiler_StaticMethods_startPressAnimation$$($$jscomp$async$this$jscomp$4$$, $$jscomp$async$this$jscomp$4$$.$rippleStartEvent$)));
      }
      $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$121$$.$g$ = 0;
    } else {
      return 4 != $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$121$$.$g$ ? $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$121$$ = $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$121$$, $JSCompiler_StaticMethods_handlePointerdown$$($$jscomp$async$this$jscomp$4$$, $event$jscomp$22$$), 4) : ($$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$121$$.$g$ = 0, $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$121$$ = 
      void 0), $$jscomp$generator$context$m1165769523$42_JSCompiler_temp$jscomp$121$$;
    }
  });
};
$JSCompiler_prototypeAlias$$.$onControlChange$ = function($prev$jscomp$4$$, $next$jscomp$5$$) {
  for (var $$jscomp$iter$102$$ = $$jscomp$makeIterator$$($module$contents$google3$third_party$javascript$material$web$ripple$internal$ripple_EVENTS$$), $$jscomp$key$m1165769523$39$event$jscomp$23_event$jscomp$23$$ = $$jscomp$iter$102$$.next(); !$$jscomp$key$m1165769523$39$event$jscomp$23_event$jscomp$23$$.done; $$jscomp$key$m1165769523$39$event$jscomp$23_event$jscomp$23$$ = $$jscomp$iter$102$$.next()) {
    $$jscomp$key$m1165769523$39$event$jscomp$23_event$jscomp$23$$ = $$jscomp$key$m1165769523$39$event$jscomp$23_event$jscomp$23$$.value;
    var $$jscomp$optchain$tmpm1165769523$4_$jscomp$optchain$tmpm1165769523$5$$ = void 0;
    null == ($$jscomp$optchain$tmpm1165769523$4_$jscomp$optchain$tmpm1165769523$5$$ = $prev$jscomp$4$$) || $$jscomp$optchain$tmpm1165769523$4_$jscomp$optchain$tmpm1165769523$5$$.removeEventListener($$jscomp$key$m1165769523$39$event$jscomp$23_event$jscomp$23$$, this);
    $$jscomp$optchain$tmpm1165769523$4_$jscomp$optchain$tmpm1165769523$5$$ = void 0;
    null == ($$jscomp$optchain$tmpm1165769523$4_$jscomp$optchain$tmpm1165769523$5$$ = $next$jscomp$5$$) || $$jscomp$optchain$tmpm1165769523$4_$jscomp$optchain$tmpm1165769523$5$$.addEventListener($$jscomp$key$m1165769523$39$event$jscomp$23_event$jscomp$23$$, this);
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
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$() {
  return $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$, $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$.$elementStyles$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$elementStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$.$__prepare$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$__prepare$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$.$createProperty$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$createProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$.$addInitializer$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$addInitializer$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$.$finalize$ = $module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$Ripple$$.$finalize$;
var $module$exports$google3$third_party$javascript$material$web$ripple$ripple$MdRipple$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$ripple$ripple_closure$classdecl$var8$$;
$module$exports$google3$third_party$javascript$material$web$ripple$ripple$MdRipple$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$ripple$internal$ripple$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$ripple$ripple$MdRipple$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-ripple")], $module$exports$google3$third_party$javascript$material$web$ripple$ripple$MdRipple$$);
/*

 Copyright 2019 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var $$jscomp$templatelit$m146038169$13$$ = $$jscomp$createTemplateTagFirstArg$$('\n      <div class="container ;">\n        <input\n          type="checkbox"\n          id="input"\n          aria-checked=;\n          aria-label=;\n          aria-invalid=;\n          ?disabled=;\n          ?required=;\n          .indeterminate=;\n          .checked=;\n          @input=;\n          @change=; />\n\n        <div class="outline"></div>\n        <div class="background"></div>\n        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>\n        <md-ripple for="input" ?disabled=;></md-ripple>\n        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">\n          <rect class="mark short" />\n          <rect class="mark long" />\n        </svg>\n      </div>\n    '.split(";")), 
$module$contents$google3$third_party$javascript$material$web$checkbox$internal$checkbox_checkboxBaseClass$$ = $module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_mixinConstraintValidation$$($module$contents$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated_mixinFormAssociated$$($module$contents$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals_mixinElementInternals$$($module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$)));
function $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$() {
  var $$jscomp$super$this$m146038169$12$$ = $module$contents$google3$third_party$javascript$material$web$checkbox$internal$checkbox_checkboxBaseClass$$.call(this) || this;
  $$jscomp$super$this$m146038169$12$$.checked = !1;
  $$jscomp$super$this$m146038169$12$$.indeterminate = !1;
  $$jscomp$super$this$m146038169$12$$.required = !1;
  $$jscomp$super$this$m146038169$12$$.value = "on";
  $$jscomp$super$this$m146038169$12$$.$prevChecked$ = !1;
  $$jscomp$super$this$m146038169$12$$.$prevDisabled$ = !1;
  $$jscomp$super$this$m146038169$12$$.$prevIndeterminate$ = !1;
  $$jscomp$super$this$m146038169$12$$.addEventListener("click", function($element$jscomp$inline_377_event$jscomp$24$$) {
    if ($module$contents$google3$third_party$javascript$material$web$internal$events$form$2dlabel$2dactivation_isActivationClick$$($element$jscomp$inline_377_event$jscomp$24$$) && $$jscomp$super$this$m146038169$12$$.input) {
      $$jscomp$super$this$m146038169$12$$.focus();
      $element$jscomp$inline_377_event$jscomp$24$$ = $$jscomp$super$this$m146038169$12$$.input;
      var $event$jscomp$inline_378$$ = new MouseEvent("click", {bubbles:!0});
      $element$jscomp$inline_377_event$jscomp$24$$.dispatchEvent($event$jscomp$inline_378$$);
    }
  });
  return $$jscomp$super$this$m146038169$12$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$, $module$contents$google3$third_party$javascript$material$web$checkbox$internal$checkbox_checkboxBaseClass$$);
$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype.update = function($changed$jscomp$2$$) {
  if ($changed$jscomp$2$$.has("checked") || $changed$jscomp$2$$.has("disabled") || $changed$jscomp$2$$.has("indeterminate")) {
    var $$jscomp$nullish$tmp58$$;
    this.$prevChecked$ = null != ($$jscomp$nullish$tmp58$$ = $changed$jscomp$2$$.get("checked")) ? $$jscomp$nullish$tmp58$$ : this.checked;
    var $$jscomp$nullish$tmp59$$;
    this.$prevDisabled$ = null != ($$jscomp$nullish$tmp59$$ = $changed$jscomp$2$$.get("disabled")) ? $$jscomp$nullish$tmp59$$ : this.disabled;
    var $$jscomp$nullish$tmp60$$;
    this.$prevIndeterminate$ = null != ($$jscomp$nullish$tmp60$$ = $changed$jscomp$2$$.get("indeterminate")) ? $$jscomp$nullish$tmp60$$ : this.indeterminate;
  }
  $module$contents$google3$third_party$javascript$material$web$checkbox$internal$checkbox_checkboxBaseClass$$.prototype.update.call(this, $changed$jscomp$2$$);
};
$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype.$render$ = function() {
  var $containerClasses_isChecked$$ = this.checked && !this.indeterminate, $isIndeterminate$$ = this.indeterminate;
  $containerClasses_isChecked$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$classMap$$({disabled:this.disabled, selected:$containerClasses_isChecked$$ || $isIndeterminate$$, unselected:!$containerClasses_isChecked$$ && !$isIndeterminate$$, checked:$containerClasses_isChecked$$, indeterminate:$isIndeterminate$$, "prev-unselected":!this.$prevChecked$ && !this.$prevIndeterminate$, "prev-checked":this.$prevChecked$ && !this.$prevIndeterminate$, 
  "prev-indeterminate":this.$prevIndeterminate$, "prev-disabled":this.$prevDisabled$});
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$m146038169$13$$, $containerClasses_isChecked$$, $isIndeterminate$$ ? "mixed" : $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, this.ariaLabel || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, this.ariaInvalid || $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$nothing$$, 
  this.disabled, this.required, this.indeterminate, this.checked, this.$handleInput$, this.$handleChange$, this.disabled);
};
$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype.$handleInput$ = function($event$jscomp$25_target$jscomp$117$$) {
  $event$jscomp$25_target$jscomp$117$$ = $event$jscomp$25_target$jscomp$117$$.target;
  this.checked = $event$jscomp$25_target$jscomp$117$$.checked;
  this.indeterminate = $event$jscomp$25_target$jscomp$117$$.indeterminate;
};
$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype.$handleChange$ = function($event$jscomp$26$$) {
  !$event$jscomp$26$$.bubbles || this.shadowRoot && !$event$jscomp$26$$.composed || $event$jscomp$26$$.stopPropagation();
  var $copy$jscomp$inline_382$$ = Reflect.construct($event$jscomp$26$$.constructor, [$event$jscomp$26$$.type, $event$jscomp$26$$]);
  this.dispatchEvent($copy$jscomp$inline_382$$) || $event$jscomp$26$$.preventDefault();
};
$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated$getFormValue$$] = function() {
  return !this.checked || this.indeterminate ? null : this.value;
};
$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated$getFormState$$] = function() {
  return String(this.checked);
};
$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype.formResetCallback = function() {
  this.checked = this.hasAttribute("checked");
};
$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype.formStateRestoreCallback = function($state$jscomp$12$$) {
  this.checked = "true" === $state$jscomp$12$$;
};
$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation$createValidator$$] = function() {
  var $$jscomp$this$m146038169$10$$ = this;
  return new $module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$checkbox$2dvalidator$CheckboxValidator$$(function() {
    return $$jscomp$this$m146038169$10$$;
  });
};
$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation$getValidityAnchor$$] = function() {
  return this.input;
};
(function() {
  for (var $$jscomp$iter$101$$ = $$jscomp$makeIterator$$($module$exports$google3$third_party$javascript$material$web$internal$aria$aria$ARIA_PROPERTIES$$), $$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$ = $$jscomp$iter$101$$.next(); !$$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$.done; $$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$ = $$jscomp$iter$101$$.next()) {
    $$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$ = $$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$.value, $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.$createProperty$($$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$, {$attribute$:$module$contents$google3$third_party$javascript$material$web$internal$aria$aria_ariaPropertyToAttribute$$($$jscomp$key$m2068579593$3$ariaProperty_ariaProperty$$), $reflect$:!0});
  }
  $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.$addInitializer$(function($element$jscomp$30$$) {
    $JSCompiler_StaticMethods_addController$$($element$jscomp$30$$, {$hostConnected$:function() {
      $element$jscomp$30$$.setAttribute("role", "presentation");
    }});
  });
})();
$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.$shadowRootOptions$ = Object.assign({}, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$, {delegatesFocus:!0});
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype, "checked", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype, "indeterminate", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype, "required", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype, "value", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$state_state$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype, "$prevChecked$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$state_state$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype, "$prevDisabled$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$state_state$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype, "$prevIndeterminate$", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$("input"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.prototype, "input", void 0);
/*

 Copyright 2018 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$checkbox$checkbox_closure$classdecl$var9$$() {
  return $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$checkbox$checkbox_closure$classdecl$var9$$, $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$checkbox$checkbox_closure$classdecl$var9$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$Checkbox$$.$shadowRootOptions$;
var $module$exports$google3$third_party$javascript$material$web$checkbox$checkbox$MdCheckbox$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$checkbox$checkbox_closure$classdecl$var9$$;
$module$exports$google3$third_party$javascript$material$web$checkbox$checkbox$MdCheckbox$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$checkbox$internal$checkbox$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$checkbox$checkbox$MdCheckbox$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-checkbox")], $module$exports$google3$third_party$javascript$material$web$checkbox$checkbox$MdCheckbox$$);
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
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$() {
  return $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$, $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$);
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$.$elementStyles$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$elementStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$.$__prepare$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$__prepare$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$.$createProperty$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$createProperty$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$.$addInitializer$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$addInitializer$;
$blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$.$finalize$ = $module$exports$google3$third_party$javascript$material$web$divider$internal$divider$Divider$$.$finalize$;
var $module$exports$google3$third_party$javascript$material$web$divider$divider$MdDivider$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$divider$divider_closure$classdecl$var10$$;
$module$exports$google3$third_party$javascript$material$web$divider$divider$MdDivider$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$divider$internal$divider$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$divider$divider$MdDivider$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-divider")], $module$exports$google3$third_party$javascript$material$web$divider$divider$MdDivider$$);
var $$jscomp$templatelit$720328466$0$$ = $$jscomp$createTemplateTagFirstArg$$(["@layer{:host{display:inline-flex;height:var(--md-radio-icon-size,20px);outline:none;position:relative;vertical-align:top;width:var(--md-radio-icon-size,20px);-webkit-tap-highlight-color:transparent;cursor:pointer;--md-ripple-hover-color:var(--md-radio-hover-state-layer-color,var(--md-sys-color-on-surface,#1d1b20));--md-ripple-hover-opacity:var(--md-radio-hover-state-layer-opacity,0.08);--md-ripple-pressed-color:var(--md-radio-pressed-state-layer-color,var(--md-sys-color-primary,#6750a4));--md-ripple-pressed-opacity:var(--md-radio-pressed-state-layer-opacity,0.12)}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-radio-icon-size,20px))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color:var(--md-radio-selected-hover-state-layer-color,var(--md-sys-color-primary,#6750a4));--md-ripple-hover-opacity:var(--md-radio-selected-hover-state-layer-opacity,0.08);--md-ripple-pressed-color:var(--md-radio-selected-pressed-state-layer-color,var(--md-sys-color-on-surface,#1d1b20));--md-ripple-pressed-opacity:var(--md-radio-selected-pressed-state-layer-opacity,0.12)}input{-moz-appearance:none;appearance:none;height:48px;margin:0;position:absolute;width:48px;cursor:inherit}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--md-radio-state-layer-size,40px);inset:unset;width:var(--md-radio-state-layer-size,40px)}.icon{fill:var(--md-radio-icon-color,var(--md-sys-color-on-surface-variant,#49454f));inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--md-radio-selected-icon-color,var(--md-sys-color-primary,#6750a4))}.checked .inner.circle{animation:inner-circle-grow .3s cubic-bezier(.05,.7,.1,1);opacity:1}@keyframes inner-circle-grow{0%{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--md-radio-hover-icon-color,var(--md-sys-color-on-surface,#1d1b20))}:host(:focus-within) .icon{fill:var(--md-radio-focus-icon-color,var(--md-sys-color-on-surface,#1d1b20))}:host(:active) .icon{fill:var(--md-radio-pressed-icon-color,var(--md-sys-color-on-surface,#1d1b20))}:host([disabled]) .icon{fill:var(--md-radio-disabled-unselected-icon-color,var(--md-sys-color-on-surface,#1d1b20));opacity:var(--md-radio-disabled-unselected-icon-opacity,.38)}:host(:hover) .checked .icon{fill:var(--md-radio-selected-hover-icon-color,var(--md-sys-color-primary,#6750a4))}:host(:focus-within) .checked .icon{fill:var(--md-radio-selected-focus-icon-color,var(--md-sys-color-primary,#6750a4))}:host(:active) .checked .icon{fill:var(--md-radio-selected-pressed-icon-color,var(--md-sys-color-primary,#6750a4))}:host([disabled]) .checked .icon{fill:var(--md-radio-disabled-selected-icon-color,var(--md-sys-color-on-surface,#1d1b20));opacity:var(--md-radio-disabled-selected-icon-opacity,.38)}}@layer hcm{@media (forced-colors:active){.icon{fill:CanvasText}:host([disabled]) .icon{fill:GrayText;opacity:1}}}\n"]), 
$module$exports$google3$third_party$javascript$material$web$radio$internal$radio$2dstyles$styles$$ = $module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$css$2dtag$css$$($$jscomp$templatelit$720328466$0$$);
var $module$exports$google3$third_party$javascript$material$web$labs$behaviors$focusable$isFocusable$$ = Symbol("isFocusable"), $module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_privateIsFocusable$$ = Symbol("privateIsFocusable"), $module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_externalTabIndex$$ = Symbol("externalTabIndex"), $module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_isUpdatingTabIndex$$ = 
Symbol("isUpdatingTabIndex"), $module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_updateTabIndex$$ = Symbol("updateTabIndex");
function $module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$radio$2dvalidator$RadioValidator$$() {
  $module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$validator$Validator$$.apply(this, arguments);
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$radio$2dvalidator$RadioValidator$$, $module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$validator$Validator$$);
$module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$radio$2dvalidator$RadioValidator$$.prototype.$l$ = function($$jscomp$iter$103_states$$) {
  this.$g$ || (this.$g$ = document.createElement("input"), this.$g$.type = "radio", this.$g$.name = "group");
  var $isRequired$$ = !1, $isChecked$jscomp$1$$ = !1;
  $$jscomp$iter$103_states$$ = $$jscomp$makeIterator$$($$jscomp$iter$103_states$$);
  for (var $$jscomp$destructuring$var54_$jscomp$key$m353236101$7$$jscomp$destructuring$var53$$ = $$jscomp$iter$103_states$$.next(); !$$jscomp$destructuring$var54_$jscomp$key$m353236101$7$$jscomp$destructuring$var53$$.done; $$jscomp$destructuring$var54_$jscomp$key$m353236101$7$$jscomp$destructuring$var53$$ = $$jscomp$iter$103_states$$.next()) {
    $$jscomp$destructuring$var54_$jscomp$key$m353236101$7$$jscomp$destructuring$var53$$ = $$jscomp$destructuring$var54_$jscomp$key$m353236101$7$$jscomp$destructuring$var53$$.value;
    var $checked$jscomp$1$$ = $$jscomp$destructuring$var54_$jscomp$key$m353236101$7$$jscomp$destructuring$var53$$.checked;
    $$jscomp$destructuring$var54_$jscomp$key$m353236101$7$$jscomp$destructuring$var53$$.required && ($isRequired$$ = !0);
    $checked$jscomp$1$$ && ($isChecked$jscomp$1$$ = !0);
  }
  this.$g$.checked = $isChecked$jscomp$1$$;
  this.$g$.required = $isRequired$$;
  return {validity:{valueMissing:$isRequired$$ && !$isChecked$jscomp$1$$}, validationMessage:this.$g$.validationMessage};
};
$module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$radio$2dvalidator$RadioValidator$$.prototype.$j$ = function($prevGroup$$, $nextGroup$$) {
  if ($prevGroup$$.length !== $nextGroup$$.length) {
    return !1;
  }
  for (var $i$jscomp$131$$ = 0; $i$jscomp$131$$ < $prevGroup$$.length; $i$jscomp$131$$++) {
    var $prev$jscomp$5$$ = $prevGroup$$[$i$jscomp$131$$], $next$jscomp$6$$ = $nextGroup$$[$i$jscomp$131$$];
    if ($prev$jscomp$5$$.checked !== $next$jscomp$6$$.checked || $prev$jscomp$5$$.required !== $next$jscomp$6$$.required) {
      return !1;
    }
  }
  return !0;
};
$module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$radio$2dvalidator$RadioValidator$$.prototype.$m$ = function($states$jscomp$1$$) {
  return $states$jscomp$1$$.map(function($$jscomp$destructuring$var55$$) {
    return {checked:$$jscomp$destructuring$var55$$.checked, required:$$jscomp$destructuring$var55$$.required};
  });
};
function $module$exports$google3$third_party$javascript$material$web$radio$internal$single$2dselection$2dcontroller$SingleSelectionController$$($host$jscomp$1$$) {
  var $$jscomp$this$m1243286804$3$$ = this;
  this.host = $host$jscomp$1$$;
  this.focused = !1;
  this.root = null;
  this.$handleFocusIn$ = function() {
    $$jscomp$this$m1243286804$3$$.focused = !0;
    $JSCompiler_StaticMethods_updateTabIndices$$($$jscomp$this$m1243286804$3$$);
  };
  this.$handleFocusOut$ = function() {
    $$jscomp$this$m1243286804$3$$.focused = !1;
    $JSCompiler_StaticMethods_updateTabIndices$$($$jscomp$this$m1243286804$3$$);
  };
  this.$handleKeyDown$ = function($event$jscomp$27_nextSibling$$) {
    var $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$ = "ArrowDown" === $event$jscomp$27_nextSibling$$.key, $$jscomp$iter$104_isUp_siblings$$ = "ArrowUp" === $event$jscomp$27_nextSibling$$.key, $hostIndex_isLeft$$ = "ArrowLeft" === $event$jscomp$27_nextSibling$$.key, $isRight_nextIndex$$ = "ArrowRight" === $event$jscomp$27_nextSibling$$.key;
    if ($hostIndex_isLeft$$ || $isRight_nextIndex$$ || $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$ || $$jscomp$iter$104_isUp_siblings$$) {
      if ($$jscomp$iter$104_isUp_siblings$$ = $$jscomp$this$m1243286804$3$$.controls, $$jscomp$iter$104_isUp_siblings$$.length) {
        for ($event$jscomp$27_nextSibling$$.preventDefault(), $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$ = "rtl" === getComputedStyle($$jscomp$this$m1243286804$3$$.host).direction ? $hostIndex_isLeft$$ || $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$ : $isRight_nextIndex$$ || $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$, $hostIndex_isLeft$$ = $$jscomp$iter$104_isUp_siblings$$.indexOf($$jscomp$this$m1243286804$3$$.host), $isRight_nextIndex$$ = $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$ ? 
        $hostIndex_isLeft$$ + 1 : $hostIndex_isLeft$$ - 1; $isRight_nextIndex$$ !== $hostIndex_isLeft$$;) {
          if ($isRight_nextIndex$$ >= $$jscomp$iter$104_isUp_siblings$$.length ? $isRight_nextIndex$$ = 0 : 0 > $isRight_nextIndex$$ && ($isRight_nextIndex$$ = $$jscomp$iter$104_isUp_siblings$$.length - 1), $event$jscomp$27_nextSibling$$ = $$jscomp$iter$104_isUp_siblings$$[$isRight_nextIndex$$], $event$jscomp$27_nextSibling$$.hasAttribute("disabled")) {
            $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$ ? $isRight_nextIndex$$++ : $isRight_nextIndex$$--;
          } else {
            $$jscomp$iter$104_isUp_siblings$$ = $$jscomp$makeIterator$$($$jscomp$iter$104_isUp_siblings$$);
            for ($$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$ = $$jscomp$iter$104_isUp_siblings$$.next(); !$$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$.done; $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$ = $$jscomp$iter$104_isUp_siblings$$.next()) {
              $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$ = $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$.value, $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$ !== $event$jscomp$27_nextSibling$$ && ($$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$.checked = !1, $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$.tabIndex = -1, $$jscomp$key$m1243286804$9$sibling_forwards_isDown_sibling$$.blur());
            }
            $event$jscomp$27_nextSibling$$.checked = !0;
            $event$jscomp$27_nextSibling$$.tabIndex = 0;
            $event$jscomp$27_nextSibling$$.focus();
            $event$jscomp$27_nextSibling$$.dispatchEvent(new Event("change", {bubbles:!0}));
            break;
          }
        }
      }
    }
  };
}
$module$exports$google3$third_party$javascript$material$web$radio$internal$single$2dselection$2dcontroller$SingleSelectionController$$.prototype.$hostConnected$ = function() {
  this.root = this.host.getRootNode();
  this.host.addEventListener("keydown", this.$handleKeyDown$);
  this.host.addEventListener("focusin", this.$handleFocusIn$);
  this.host.addEventListener("focusout", this.$handleFocusOut$);
  this.host.checked && $JSCompiler_StaticMethods_uncheckSiblings$$(this);
  $JSCompiler_StaticMethods_updateTabIndices$$(this);
};
$module$exports$google3$third_party$javascript$material$web$radio$internal$single$2dselection$2dcontroller$SingleSelectionController$$.prototype.$hostDisconnected$ = function() {
  this.host.removeEventListener("keydown", this.$handleKeyDown$);
  this.host.removeEventListener("focusin", this.$handleFocusIn$);
  this.host.removeEventListener("focusout", this.$handleFocusOut$);
  $JSCompiler_StaticMethods_updateTabIndices$$(this);
  this.root = null;
};
function $JSCompiler_StaticMethods_uncheckSiblings$$($JSCompiler_StaticMethods_uncheckSiblings$self$$) {
  for (var $$jscomp$iter$105$$ = $$jscomp$makeIterator$$($JSCompiler_StaticMethods_uncheckSiblings$self$$.controls), $$jscomp$key$m1243286804$10$sibling$jscomp$1_sibling$jscomp$1$$ = $$jscomp$iter$105$$.next(); !$$jscomp$key$m1243286804$10$sibling$jscomp$1_sibling$jscomp$1$$.done; $$jscomp$key$m1243286804$10$sibling$jscomp$1_sibling$jscomp$1$$ = $$jscomp$iter$105$$.next()) {
    $$jscomp$key$m1243286804$10$sibling$jscomp$1_sibling$jscomp$1$$ = $$jscomp$key$m1243286804$10$sibling$jscomp$1_sibling$jscomp$1$$.value, $$jscomp$key$m1243286804$10$sibling$jscomp$1_sibling$jscomp$1$$ !== $JSCompiler_StaticMethods_uncheckSiblings$self$$.host && ($$jscomp$key$m1243286804$10$sibling$jscomp$1_sibling$jscomp$1$$.checked = !1);
  }
}
function $JSCompiler_StaticMethods_updateTabIndices$$($$jscomp$iter$107_JSCompiler_StaticMethods_updateTabIndices$self_focusable$$) {
  var $$jscomp$iter$106_$jscomp$key$m1243286804$12$sibling$jscomp$4_siblings$jscomp$1$$ = $$jscomp$iter$107_JSCompiler_StaticMethods_updateTabIndices$self_focusable$$.controls, $$jscomp$key$m1243286804$11$sibling$jscomp$3_checkedSibling_sibling$jscomp$3$$ = $$jscomp$iter$106_$jscomp$key$m1243286804$12$sibling$jscomp$4_siblings$jscomp$1$$.find(function($sibling$jscomp$2$$) {
    return $sibling$jscomp$2$$.checked;
  });
  if ($$jscomp$key$m1243286804$11$sibling$jscomp$3_checkedSibling_sibling$jscomp$3$$ || $$jscomp$iter$107_JSCompiler_StaticMethods_updateTabIndices$self_focusable$$.focused) {
    for ($$jscomp$iter$107_JSCompiler_StaticMethods_updateTabIndices$self_focusable$$ = $$jscomp$key$m1243286804$11$sibling$jscomp$3_checkedSibling_sibling$jscomp$3$$ || $$jscomp$iter$107_JSCompiler_StaticMethods_updateTabIndices$self_focusable$$.host, $$jscomp$iter$107_JSCompiler_StaticMethods_updateTabIndices$self_focusable$$.tabIndex = 0, $$jscomp$iter$106_$jscomp$key$m1243286804$12$sibling$jscomp$4_siblings$jscomp$1$$ = $$jscomp$makeIterator$$($$jscomp$iter$106_$jscomp$key$m1243286804$12$sibling$jscomp$4_siblings$jscomp$1$$), 
    $$jscomp$key$m1243286804$11$sibling$jscomp$3_checkedSibling_sibling$jscomp$3$$ = $$jscomp$iter$106_$jscomp$key$m1243286804$12$sibling$jscomp$4_siblings$jscomp$1$$.next(); !$$jscomp$key$m1243286804$11$sibling$jscomp$3_checkedSibling_sibling$jscomp$3$$.done; $$jscomp$key$m1243286804$11$sibling$jscomp$3_checkedSibling_sibling$jscomp$3$$ = $$jscomp$iter$106_$jscomp$key$m1243286804$12$sibling$jscomp$4_siblings$jscomp$1$$.next()) {
      $$jscomp$key$m1243286804$11$sibling$jscomp$3_checkedSibling_sibling$jscomp$3$$ = $$jscomp$key$m1243286804$11$sibling$jscomp$3_checkedSibling_sibling$jscomp$3$$.value, $$jscomp$key$m1243286804$11$sibling$jscomp$3_checkedSibling_sibling$jscomp$3$$ !== $$jscomp$iter$107_JSCompiler_StaticMethods_updateTabIndices$self_focusable$$ && ($$jscomp$key$m1243286804$11$sibling$jscomp$3_checkedSibling_sibling$jscomp$3$$.tabIndex = -1);
    }
  } else {
    for ($$jscomp$iter$107_JSCompiler_StaticMethods_updateTabIndices$self_focusable$$ = $$jscomp$makeIterator$$($$jscomp$iter$106_$jscomp$key$m1243286804$12$sibling$jscomp$4_siblings$jscomp$1$$), $$jscomp$iter$106_$jscomp$key$m1243286804$12$sibling$jscomp$4_siblings$jscomp$1$$ = $$jscomp$iter$107_JSCompiler_StaticMethods_updateTabIndices$self_focusable$$.next(); !$$jscomp$iter$106_$jscomp$key$m1243286804$12$sibling$jscomp$4_siblings$jscomp$1$$.done; $$jscomp$iter$106_$jscomp$key$m1243286804$12$sibling$jscomp$4_siblings$jscomp$1$$ = 
    $$jscomp$iter$107_JSCompiler_StaticMethods_updateTabIndices$self_focusable$$.next()) {
      $$jscomp$iter$106_$jscomp$key$m1243286804$12$sibling$jscomp$4_siblings$jscomp$1$$.value.tabIndex = 0;
    }
  }
}
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$material$web$radio$internal$single$2dselection$2dcontroller$SingleSelectionController$$.prototype, {controls:{configurable:!0, enumerable:!0, get:function() {
  var $name$jscomp$146$$ = this.host.getAttribute("name");
  return $name$jscomp$146$$ && this.root && this.host.isConnected ? Array.from(this.root.querySelectorAll('[name="' + $name$jscomp$146$$ + '"]')) : [this.host];
}}});
var $$jscomp$templatelit$735997747$17$$ = $$jscomp$createTemplateTagFirstArg$$('\n      <div class="container ;" aria-hidden="true">\n        <md-ripple\n          part="ripple"\n          .control=;\n          ?disabled=;></md-ripple>\n        <md-focus-ring part="focus-ring" .control=;></md-focus-ring>\n        <svg class="icon" viewBox="0 0 20 20">\n          <mask id=";">\n            <rect width="100%" height="100%" fill="white" />\n            <circle cx="10" cy="10" r="8" fill="black" />\n          </mask>\n          <circle\n            class="outer circle"\n            cx="10"\n            cy="10"\n            r="10"\n            mask="url(#;)" />\n          <circle class="inner circle" cx="10" cy="10" r="5" />\n        </svg>\n\n        <input\n          id="input"\n          type="radio"\n          tabindex="-1"\n          .checked=;\n          .value=;\n          ?disabled=; />\n      </div>\n    '.split(";")), 
$module$contents$google3$third_party$javascript$material$web$radio$internal$radio_CHECKED$$ = Symbol("checked"), $module$contents$google3$third_party$javascript$material$web$radio$internal$radio_maskId$$ = 0, $module$contents$google3$third_party$javascript$material$web$radio$internal$radio_radioBaseClass$$ = $module$contents$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation_mixinConstraintValidation$$($module$contents$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated_mixinFormAssociated$$($module$contents$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals_mixinElementInternals$$(function($base$jscomp$12$$) {
  function $FocusableElement$$() {
    var $$jscomp$super$this$m950207179$0$$ = $base$jscomp$12$$.apply(this, arguments) || this;
    $$jscomp$super$this$m950207179$0$$[$_a$jscomp$1$$] = !0;
    $$jscomp$super$this$m950207179$0$$[$_b$$] = null;
    $$jscomp$super$this$m950207179$0$$[$_c$$] = !1;
    return $$jscomp$super$this$m950207179$0$$;
  }
  var $_a$jscomp$1$$, $_b$$, $_c$$;
  $$jscomp$inherits$$($FocusableElement$$, $base$jscomp$12$$);
  $$jscomp$global$$.Object.defineProperty($FocusableElement$$.prototype, $module$exports$google3$third_party$javascript$material$web$labs$behaviors$focusable$isFocusable$$, {configurable:!0, enumerable:!0, get:function() {
    return this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_privateIsFocusable$$];
  }});
  $$jscomp$global$$.Object.defineProperty($FocusableElement$$.prototype, $module$exports$google3$third_party$javascript$material$web$labs$behaviors$focusable$isFocusable$$, {configurable:!0, enumerable:!0, set:function($value$jscomp$246$$) {
    this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$focusable$isFocusable$$] !== $value$jscomp$246$$ && (this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_privateIsFocusable$$] = $value$jscomp$246$$, this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_updateTabIndex$$]());
  }});
  $FocusableElement$$.prototype.connectedCallback = function() {
    $base$jscomp$12$$.prototype.connectedCallback.call(this);
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_updateTabIndex$$]();
  };
  $FocusableElement$$.prototype.attributeChangedCallback = function($name$jscomp$145$$, $old$jscomp$2$$, $value$jscomp$247$$) {
    "tabindex" !== $name$jscomp$145$$ ? $base$jscomp$12$$.prototype.attributeChangedCallback.call(this, $name$jscomp$145$$, $old$jscomp$2$$, $value$jscomp$247$$) : (this.$requestUpdate$("tabIndex", Number(null != $old$jscomp$2$$ ? $old$jscomp$2$$ : -1)), this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_isUpdatingTabIndex$$] || (this.hasAttribute("tabindex") ? this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_externalTabIndex$$] = 
    this.tabIndex : (this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_externalTabIndex$$] = null, this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_updateTabIndex$$]())));
  };
  $FocusableElement$$.prototype[$_a$jscomp$1$$ = $module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_privateIsFocusable$$, $_b$$ = $module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_externalTabIndex$$, $_c$$ = $module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_isUpdatingTabIndex$$, $module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_updateTabIndex$$] = function() {
    var $internalTabIndex$$ = this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$focusable$isFocusable$$] ? 0 : -1, $$jscomp$nullish$tmp62$$, $computedTabIndex$$ = null != ($$jscomp$nullish$tmp62$$ = this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_externalTabIndex$$]) ? $$jscomp$nullish$tmp62$$ : $internalTabIndex$$;
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_isUpdatingTabIndex$$] = !0;
    this.tabIndex = $computedTabIndex$$;
    this[$module$contents$google3$third_party$javascript$material$web$labs$behaviors$focusable_isUpdatingTabIndex$$] = !1;
  };
  $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({$noAccessor$:!0}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Number)], $FocusableElement$$.prototype, "tabIndex", void 0);
  return $FocusableElement$$;
}($module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$))));
function $module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$() {
  var $$jscomp$super$this$735997747$16$$ = $module$contents$google3$third_party$javascript$material$web$radio$internal$radio_radioBaseClass$$.call(this) || this;
  $$jscomp$super$this$735997747$16$$.$maskId$ = "cutout" + ++$module$contents$google3$third_party$javascript$material$web$radio$internal$radio_maskId$$;
  $$jscomp$super$this$735997747$16$$[$module$contents$google3$third_party$javascript$material$web$radio$internal$radio_CHECKED$$] = !1;
  $$jscomp$super$this$735997747$16$$.required = !1;
  $$jscomp$super$this$735997747$16$$.value = "on";
  $$jscomp$super$this$735997747$16$$.$selectionController$ = new $module$exports$google3$third_party$javascript$material$web$radio$internal$single$2dselection$2dcontroller$SingleSelectionController$$($$jscomp$super$this$735997747$16$$);
  $JSCompiler_StaticMethods_addController$$($$jscomp$super$this$735997747$16$$, $$jscomp$super$this$735997747$16$$.$selectionController$);
  $$jscomp$super$this$735997747$16$$[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].role = "radio";
  $$jscomp$super$this$735997747$16$$.addEventListener("click", $$jscomp$super$this$735997747$16$$.$handleClick$.bind($$jscomp$super$this$735997747$16$$));
  $$jscomp$super$this$735997747$16$$.addEventListener("keydown", $$jscomp$super$this$735997747$16$$.$handleKeydown$.bind($$jscomp$super$this$735997747$16$$));
  return $$jscomp$super$this$735997747$16$$;
}
$$jscomp$inherits$$($module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$, $module$contents$google3$third_party$javascript$material$web$radio$internal$radio_radioBaseClass$$);
$module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype.$render$ = function() {
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$735997747$17$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$directives$class$2dmap$classMap$$({checked:this.checked}), this, this.disabled, this, this.$maskId$, this.$maskId$, this.checked, this.value, this.disabled);
};
$module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype.$updated$ = function() {
  this[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$element$2dinternals$internals$$].ariaChecked = String(this.checked);
};
$module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype.$handleClick$ = function($event$jscomp$28$$) {
  var $$jscomp$async$this$jscomp$5$$ = this;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$735997747$18$$) {
    if (1 == $$jscomp$generator$context$735997747$18$$.$g$) {
      return $$jscomp$async$this$jscomp$5$$.disabled ? $$jscomp$generator$context$735997747$18$$.return() : $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$735997747$18$$, 0, 2);
    }
    if ($event$jscomp$28$$.defaultPrevented) {
      return $$jscomp$generator$context$735997747$18$$.return();
    }
    $module$contents$google3$third_party$javascript$material$web$internal$events$form$2dlabel$2dactivation_isActivationClick$$($event$jscomp$28$$) && $$jscomp$async$this$jscomp$5$$.focus();
    $$jscomp$async$this$jscomp$5$$.checked = !0;
    $$jscomp$async$this$jscomp$5$$.dispatchEvent(new Event("change", {bubbles:!0}));
    $$jscomp$async$this$jscomp$5$$.dispatchEvent(new InputEvent("input", {bubbles:!0, composed:!0}));
    $$jscomp$generator$context$735997747$18$$.$g$ = 0;
  });
};
$module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype.$handleKeydown$ = function($event$jscomp$29$$) {
  var $$jscomp$async$this$jscomp$6$$ = this;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$735997747$19$$) {
    if (1 == $$jscomp$generator$context$735997747$19$$.$g$) {
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$735997747$19$$, 0, 2);
    }
    if (" " !== $event$jscomp$29$$.key || $event$jscomp$29$$.defaultPrevented) {
      return $$jscomp$generator$context$735997747$19$$.return();
    }
    $$jscomp$async$this$jscomp$6$$.click();
    $$jscomp$generator$context$735997747$19$$.$g$ = 0;
  });
};
$module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated$getFormValue$$] = function() {
  return this.checked ? this.value : null;
};
$module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$form$2dassociated$getFormState$$] = function() {
  return String(this.checked);
};
$module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype.formResetCallback = function() {
  this.checked = this.hasAttribute("checked");
};
$module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype.formStateRestoreCallback = function($state$jscomp$13$$) {
  this.checked = "true" === $state$jscomp$13$$;
};
$module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation$createValidator$$] = function() {
  var $$jscomp$this$735997747$14$$ = this;
  return new $module$exports$google3$third_party$javascript$material$web$labs$behaviors$validators$radio$2dvalidator$RadioValidator$$(function() {
    return $$jscomp$this$735997747$14$$.$selectionController$ ? $$jscomp$this$735997747$14$$.$selectionController$.controls : [$$jscomp$this$735997747$14$$];
  });
};
$module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype[$module$exports$google3$third_party$javascript$material$web$labs$behaviors$constraint$2dvalidation$getValidityAnchor$$] = function() {
  return this.$container$;
};
$$jscomp$global$$.Object.defineProperties($module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype, {checked:{configurable:!0, enumerable:!0, get:function() {
  return this[$module$contents$google3$third_party$javascript$material$web$radio$internal$radio_CHECKED$$];
}, set:function($JSCompiler_StaticMethods_handleCheckedChange$self$jscomp$inline_390_checked$jscomp$3$$) {
  var $wasChecked$$ = this.checked;
  $wasChecked$$ !== $JSCompiler_StaticMethods_handleCheckedChange$self$jscomp$inline_390_checked$jscomp$3$$ && (this[$module$contents$google3$third_party$javascript$material$web$radio$internal$radio_CHECKED$$] = $JSCompiler_StaticMethods_handleCheckedChange$self$jscomp$inline_390_checked$jscomp$3$$, this.$requestUpdate$("checked", $wasChecked$$), $JSCompiler_StaticMethods_handleCheckedChange$self$jscomp$inline_390_checked$jscomp$3$$ = this.$selectionController$, $JSCompiler_StaticMethods_handleCheckedChange$self$jscomp$inline_390_checked$jscomp$3$$.host.checked && 
  ($JSCompiler_StaticMethods_uncheckSiblings$$($JSCompiler_StaticMethods_handleCheckedChange$self$jscomp$inline_390_checked$jscomp$3$$), $JSCompiler_StaticMethods_updateTabIndices$$($JSCompiler_StaticMethods_handleCheckedChange$self$jscomp$inline_390_checked$jscomp$3$$)));
}}});
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Boolean), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:paramtypes", [Boolean])], $module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype, 
"checked", null);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype, "required", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$(), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype, "value", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$query_query$$(".container"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", HTMLElement)], $module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.prototype, "$container$", void 0);
function $blaze_out$k8_opt$bin$third_party$javascript$material$web$radio$radio_closure$classdecl$var11$$() {
  return $module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$.apply(this, arguments) || this;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$third_party$javascript$material$web$radio$radio_closure$classdecl$var11$$, $module$exports$google3$third_party$javascript$material$web$radio$internal$radio$Radio$$);
var $module$exports$google3$third_party$javascript$material$web$radio$radio$MdRadio$$ = $blaze_out$k8_opt$bin$third_party$javascript$material$web$radio$radio_closure$classdecl$var11$$;
$module$exports$google3$third_party$javascript$material$web$radio$radio$MdRadio$$.$styles$ = [$module$exports$google3$third_party$javascript$material$web$radio$internal$radio$2dstyles$styles$$];
$module$exports$google3$third_party$javascript$material$web$radio$radio$MdRadio$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("md-radio")], $module$exports$google3$third_party$javascript$material$web$radio$radio$MdRadio$$);
var $$jscomp$templatelit$1594284404$9$$ = $$jscomp$createTemplateTagFirstArg$$('<div class="options-container">\n      <div id="group-turnover" class="option-title">\n        ;\n      </div>\n      <div role="radiogroup" aria-labelledby="group-turnover" class="turnover">\n        <div class="toption">\n          <md-radio\n            id="turnoverModeDaily"\n            name="turnover"\n            @change=";"\n            ?checked=";"\n            ?disabled=";"></md-radio>\n          <label for="turnoverModeDaily">\n            ;\n          </label>\n        </div>\n        <div class="toption">\n          <md-radio\n            id="turnoverModeAlways"\n            name="turnover"\n            @change=";"\n            ?checked=";"\n            ?disabled=";"></md-radio>\n          <label for="turnoverModeAlways">\n            ;\n          </label>\n        </div>\n      </div>\n      <md-divider class="optdiv"></md-divider>\n      <div class="option-title">\n        ;\n      </div>\n      <div class="buttonvisibility">\n        <div class="apps button">\n          <md-checkbox\n            id="optionsAppsBtn"\n            touch-target="wrapper"\n            @change=";"\n            .checked=";"\n            ?disabled=";"></md-checkbox>\n          <div class="buttondesc">\n            <label for="optionsAppsBtn">\n              ;\n            </label>\n            <div>;</div>\n          </div>\n        </div>\n        <div class="dntp button">\n          <md-checkbox\n            id="optionsNtpBtn"\n            touch-target="wrapper"\n            @change=";"\n            .checked=";"\n            ?disabled=";"></md-checkbox>\n          <div class="buttondesc">\n            <label for="optionsNtpBtn">\n              ;\n            </label>\n            <div>;</div>\n          </div>\n        </div>\n        <div class="tops button">\n          <md-checkbox\n            id="optionsTopSitesBtn"\n            touch-target="wrapper"\n            @change=";"\n            .checked=";"\n            ?disabled=";"></md-checkbox>\n          <div class="buttondesc">\n            <label for="optionsTopSitesBtn">\n              ;\n            </label>\n            <div>;</div>\n          </div>\n        </div>\n      </div>\n    </div>'.split(";"));
function $blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$() {
  var $$jscomp$super$this$1594284404$8$$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.call(this) || this;
  $$jscomp$super$this$1594284404$8$$.isLoading = !0;
  $$jscomp$super$this$1594284404$8$$.turnoverAlways = !1;
  $$jscomp$super$this$1594284404$8$$.appsButtonShown = !0;
  $$jscomp$super$this$1594284404$8$$.defaultNewTabButtonShown = !0;
  $$jscomp$super$this$1594284404$8$$.topSitesButtonShown = !0;
  $JSCompiler_StaticMethods_initialLoadTasks$$($$jscomp$super$this$1594284404$8$$);
  return $$jscomp$super$this$1594284404$8$$;
}
$$jscomp$inherits$$($blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$, $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$);
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$.$shadowRootOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$shadowRootOptions$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$.$elementStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$elementStyles$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$.$__attributeNameForProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__attributeNameForProperty$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$.$finalizeStyles$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalizeStyles$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$.$__prepare$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$__prepare$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$.$getPropertyOptions$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyOptions$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$.$getPropertyDescriptor$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$getPropertyDescriptor$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$.$createProperty$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$createProperty$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$.$addInitializer$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$addInitializer$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$.$finalize$ = $module$exports$google3$third_party$javascript$lit$packages$lit$2delement$src$lit$2delement$LitElement$$.$finalize$;
$blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$.prototype.$render$ = function() {
  $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_sendGoogleAnalyticsEvent$$();
  return $JSCompiler_StaticMethods_buildElement$$(this);
};
function $JSCompiler_StaticMethods_buildElement$$($JSCompiler_StaticMethods_buildElement$self$$) {
  return $module$exports$google3$third_party$javascript$lit$packages$lit$2dhtml$src$lit$2dhtml$html$$($$jscomp$templatelit$1594284404$9$$, chrome.i18n.getMessage("turnoverGroup"), function() {
    $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeUserSetting$$("turnoverAlways", !1);
  }, !$JSCompiler_StaticMethods_buildElement$self$$.turnoverAlways, $JSCompiler_StaticMethods_buildElement$self$$.isLoading, chrome.i18n.getMessage("turnoverModeDaily"), function() {
    $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeUserSetting$$("turnoverAlways", !0);
  }, $JSCompiler_StaticMethods_buildElement$self$$.turnoverAlways, $JSCompiler_StaticMethods_buildElement$self$$.isLoading, chrome.i18n.getMessage("turnoverModeAlways"), chrome.i18n.getMessage("optionsInterface"), function($e$jscomp$47$$) {
    $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeUserSetting$$("appsButtonHidden", !$e$jscomp$47$$.target.checked);
  }, $JSCompiler_StaticMethods_buildElement$self$$.appsButtonShown, $JSCompiler_StaticMethods_buildElement$self$$.isLoading, chrome.i18n.getMessage("optionsAppsBtn"), chrome.i18n.getMessage("optionsAppsBtnDesc"), function($e$jscomp$48$$) {
    $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeUserSetting$$("defaultNewTabButtonHidden", !$e$jscomp$48$$.target.checked);
  }, $JSCompiler_StaticMethods_buildElement$self$$.defaultNewTabButtonShown, $JSCompiler_StaticMethods_buildElement$self$$.isLoading, chrome.i18n.getMessage("optionsNtpBtn"), chrome.i18n.getMessage("optionsNtpBtnDesc"), function($e$jscomp$49$$) {
    $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeUserSetting$$("topSitesButtonHidden", !$e$jscomp$49$$.target.checked);
  }, $JSCompiler_StaticMethods_buildElement$self$$.topSitesButtonShown, $JSCompiler_StaticMethods_buildElement$self$$.isLoading, chrome.i18n.getMessage("optionsTopSitesBtn"), chrome.i18n.getMessage("optionsTopSitesBtnDesc"));
}
function $JSCompiler_StaticMethods_initialLoadTasks$$($JSCompiler_StaticMethods_initialLoadTasks$self$$) {
  $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$1594284404$10$$) {
    if (1 == $$jscomp$generator$context$1594284404$10$$.$g$) {
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1594284404$10$$, $JSCompiler_StaticMethods_syncUserSettings$$($JSCompiler_StaticMethods_initialLoadTasks$self$$), 2);
    }
    $JSCompiler_StaticMethods_initialLoadTasks$self$$.isLoading = !1;
    $JSCompiler_StaticMethods_initialLoadTasks$self$$.$requestUpdate$();
    $$jscomp$generator$context$1594284404$10$$.$g$ = 0;
  });
}
function $JSCompiler_StaticMethods_syncUserSettings$$($JSCompiler_StaticMethods_syncUserSettings$self$$) {
  var $storedSettings$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$1594284404$11$$) {
    if (1 == $$jscomp$generator$context$1594284404$11$$.$g$) {
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1594284404$11$$, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_getUserSettings$$(), 2);
    }
    $storedSettings$$ = $$jscomp$generator$context$1594284404$11$$.$i$;
    $JSCompiler_StaticMethods_syncUserSettings$self$$.turnoverAlways = $storedSettings$$.turnoverAlways;
    $JSCompiler_StaticMethods_syncUserSettings$self$$.appsButtonShown = !$storedSettings$$.appsButtonHidden;
    $JSCompiler_StaticMethods_syncUserSettings$self$$.defaultNewTabButtonShown = !$storedSettings$$.defaultNewTabButtonHidden;
    $JSCompiler_StaticMethods_syncUserSettings$self$$.topSitesButtonShown = !$storedSettings$$.topSitesButtonHidden;
    $$jscomp$generator$context$1594284404$11$$.$g$ = 0;
  });
}
var $module$exports$google3$cultural$integrations$chromeextensions$arttab$options$options$ArtTabOptions$$ = $blaze_out$k8_opt$bin$cultural$integrations$chromeextensions$arttab$options$options_closure$classdecl$var12$$;
$module$exports$google3$cultural$integrations$chromeextensions$arttab$options$options$ArtTabOptions$$.$styles$ = [$module$exports$google3$cultural$integrations$chromeextensions$arttab$options$options$2ecss$styles$$];
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$options$options$ArtTabOptions$$.prototype, "isLoading", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$options$options$ArtTabOptions$$.prototype, "turnoverAlways", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$options$options$ArtTabOptions$$.prototype, "appsButtonShown", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$options$options$ArtTabOptions$$.prototype, "defaultNewTabButtonShown", void 0);
$module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$contents$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$property_property$$({type:Boolean}), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:type", Object)], $module$exports$google3$cultural$integrations$chromeextensions$arttab$options$options$ArtTabOptions$$.prototype, "topSitesButtonShown", void 0);
$module$exports$google3$cultural$integrations$chromeextensions$arttab$options$options$ArtTabOptions$$ = $module$exports$google3$third_party$javascript$tslib$tslib$__decorate$$([$module$exports$google3$third_party$javascript$lit$packages$reactive$2delement$src$decorators$custom$2delement$customElement$$("gac-art-options"), $module$exports$google3$third_party$javascript$tslib$tslib$__metadata$$("design:paramtypes", [])], $module$exports$google3$cultural$integrations$chromeextensions$arttab$options$options$ArtTabOptions$$);

//# sourceMappingURL=js_options.nodeps.sourcemap
