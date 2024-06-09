'use strict';
var $JSCompiler_prototypeAlias$$;
function $$jscomp$arrayIteratorImpl$$($array$jscomp$6$$) {
  var $index$jscomp$101$$ = 0;
  return function() {
    return $index$jscomp$101$$ < $array$jscomp$6$$.length ? {done:!1, value:$array$jscomp$6$$[$index$jscomp$101$$++]} : {done:!0};
  };
}
var $$jscomp$defineProperty$$ = "function" == typeof Object.defineProperties ? Object.defineProperty : function($target$jscomp$95$$, $property$jscomp$5$$, $descriptor$jscomp$1$$) {
  if ($target$jscomp$95$$ == Array.prototype || $target$jscomp$95$$ == Object.prototype) {
    return $target$jscomp$95$$;
  }
  $target$jscomp$95$$[$property$jscomp$5$$] = $descriptor$jscomp$1$$.value;
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
function $$jscomp$polyfill$$($property$jscomp$inline_33_split$jscomp$inline_30_target$jscomp$97$$, $impl$jscomp$inline_35_polyfill$jscomp$1$$) {
  if ($impl$jscomp$inline_35_polyfill$jscomp$1$$) {
    a: {
      var $obj$jscomp$inline_29$$ = $$jscomp$global$$;
      $property$jscomp$inline_33_split$jscomp$inline_30_target$jscomp$97$$ = $property$jscomp$inline_33_split$jscomp$inline_30_target$jscomp$97$$.split(".");
      for (var $i$jscomp$inline_31_orig$jscomp$inline_34$$ = 0; $i$jscomp$inline_31_orig$jscomp$inline_34$$ < $property$jscomp$inline_33_split$jscomp$inline_30_target$jscomp$97$$.length - 1; $i$jscomp$inline_31_orig$jscomp$inline_34$$++) {
        var $key$jscomp$inline_32$$ = $property$jscomp$inline_33_split$jscomp$inline_30_target$jscomp$97$$[$i$jscomp$inline_31_orig$jscomp$inline_34$$];
        if (!($key$jscomp$inline_32$$ in $obj$jscomp$inline_29$$)) {
          break a;
        }
        $obj$jscomp$inline_29$$ = $obj$jscomp$inline_29$$[$key$jscomp$inline_32$$];
      }
      $property$jscomp$inline_33_split$jscomp$inline_30_target$jscomp$97$$ = $property$jscomp$inline_33_split$jscomp$inline_30_target$jscomp$97$$[$property$jscomp$inline_33_split$jscomp$inline_30_target$jscomp$97$$.length - 1];
      $i$jscomp$inline_31_orig$jscomp$inline_34$$ = $obj$jscomp$inline_29$$[$property$jscomp$inline_33_split$jscomp$inline_30_target$jscomp$97$$];
      $impl$jscomp$inline_35_polyfill$jscomp$1$$ = $impl$jscomp$inline_35_polyfill$jscomp$1$$($i$jscomp$inline_31_orig$jscomp$inline_34$$);
      $impl$jscomp$inline_35_polyfill$jscomp$1$$ != $i$jscomp$inline_31_orig$jscomp$inline_34$$ && null != $impl$jscomp$inline_35_polyfill$jscomp$1$$ && $$jscomp$defineProperty$$($obj$jscomp$inline_29$$, $property$jscomp$inline_33_split$jscomp$inline_30_target$jscomp$97$$, {configurable:!0, writable:!0, value:$impl$jscomp$inline_35_polyfill$jscomp$1$$});
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
var $$jscomp$assign$$ = "function" == typeof Object.assign ? Object.assign : function($target$jscomp$100$$, $var_args$jscomp$35$$) {
  for (var $i$jscomp$8$$ = 1; $i$jscomp$8$$ < arguments.length; $i$jscomp$8$$++) {
    var $source$jscomp$17$$ = arguments[$i$jscomp$8$$];
    if ($source$jscomp$17$$) {
      for (var $key$jscomp$41$$ in $source$jscomp$17$$) {
        Object.prototype.hasOwnProperty.call($source$jscomp$17$$, $key$jscomp$41$$) && ($target$jscomp$100$$[$key$jscomp$41$$] = $source$jscomp$17$$[$key$jscomp$41$$]);
      }
    }
  }
  return $target$jscomp$100$$;
};
$$jscomp$polyfill$$("Object.assign", function($orig$jscomp$4$$) {
  return $orig$jscomp$4$$ || $$jscomp$assign$$;
});
function $$jscomp$generator$Context$$() {
  this.$l$ = !1;
  this.$i$ = null;
  this.$h$ = void 0;
  this.$g$ = 1;
  this.$o$ = 0;
  this.$j$ = null;
}
function $JSCompiler_StaticMethods_start_$$($JSCompiler_StaticMethods_start_$self$$) {
  if ($JSCompiler_StaticMethods_start_$self$$.$l$) {
    throw new TypeError("Generator is already running");
  }
  $JSCompiler_StaticMethods_start_$self$$.$l$ = !0;
}
$$jscomp$generator$Context$$.prototype.$m$ = function($value$jscomp$93$$) {
  this.$h$ = $value$jscomp$93$$;
};
function $JSCompiler_StaticMethods_JSC$3492_throw_$$($JSCompiler_StaticMethods_JSC$3492_throw_$self$$, $e$jscomp$8$$) {
  $JSCompiler_StaticMethods_JSC$3492_throw_$self$$.$j$ = {$exception$:$e$jscomp$8$$, isException:!0};
  $JSCompiler_StaticMethods_JSC$3492_throw_$self$$.$g$ = $JSCompiler_StaticMethods_JSC$3492_throw_$self$$.$o$;
}
$$jscomp$generator$Context$$.prototype.return = function($value$jscomp$94$$) {
  this.$j$ = {return:$value$jscomp$94$$};
  this.$g$ = this.$o$;
};
function $JSCompiler_StaticMethods_yield$$($JSCompiler_StaticMethods_yield$self$$, $value$jscomp$95$$, $resumeAddress$$) {
  $JSCompiler_StaticMethods_yield$self$$.$g$ = $resumeAddress$$;
  return {value:$value$jscomp$95$$};
}
function $$jscomp$generator$Engine_$$($program$jscomp$63$$) {
  this.$g$ = new $$jscomp$generator$Context$$();
  this.$h$ = $program$jscomp$63$$;
}
function $JSCompiler_StaticMethods_return_$$($JSCompiler_StaticMethods_return_$self$$, $value$jscomp$97$$) {
  $JSCompiler_StaticMethods_start_$$($JSCompiler_StaticMethods_return_$self$$.$g$);
  var $yieldAllIterator$$ = $JSCompiler_StaticMethods_return_$self$$.$g$.$i$;
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
    var $result$jscomp$4$$ = $action$jscomp$1$$.call($JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$.$i$, $value$jscomp$98$$);
    if (!($result$jscomp$4$$ instanceof Object)) {
      throw new TypeError("Iterator result " + $result$jscomp$4$$ + " is not an object");
    }
    if (!$result$jscomp$4$$.done) {
      return $JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$.$l$ = !1, $result$jscomp$4$$;
    }
    var $resultValue$$ = $result$jscomp$4$$.value;
  } catch ($e$jscomp$9$$) {
    return $JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$.$i$ = null, $JSCompiler_StaticMethods_JSC$3492_throw_$$($JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$, $e$jscomp$9$$), $JSCompiler_StaticMethods_nextStep_$$($JSCompiler_StaticMethods_yieldAllStep_$self$$);
  }
  $JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$.$i$ = null;
  $nextAction$$.call($JSCompiler_StaticMethods_yieldAllStep_$self$$.$g$, $resultValue$$);
  return $JSCompiler_StaticMethods_nextStep_$$($JSCompiler_StaticMethods_yieldAllStep_$self$$);
}
function $JSCompiler_StaticMethods_nextStep_$$($JSCompiler_StaticMethods_nextStep_$self$$) {
  for (; $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$g$;) {
    try {
      var $abruptCompletion$jscomp$1_yieldValue$$ = $JSCompiler_StaticMethods_nextStep_$self$$.$h$($JSCompiler_StaticMethods_nextStep_$self$$.$g$);
      if ($abruptCompletion$jscomp$1_yieldValue$$) {
        return $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$l$ = !1, {value:$abruptCompletion$jscomp$1_yieldValue$$.value, done:!1};
      }
    } catch ($e$jscomp$10$$) {
      $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$h$ = void 0, $JSCompiler_StaticMethods_JSC$3492_throw_$$($JSCompiler_StaticMethods_nextStep_$self$$.$g$, $e$jscomp$10$$);
    }
  }
  $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$l$ = !1;
  if ($JSCompiler_StaticMethods_nextStep_$self$$.$g$.$j$) {
    $abruptCompletion$jscomp$1_yieldValue$$ = $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$j$;
    $JSCompiler_StaticMethods_nextStep_$self$$.$g$.$j$ = null;
    if ($abruptCompletion$jscomp$1_yieldValue$$.isException) {
      throw $abruptCompletion$jscomp$1_yieldValue$$.$exception$;
    }
    return {value:$abruptCompletion$jscomp$1_yieldValue$$.return, done:!0};
  }
  return {value:void 0, done:!0};
}
function $$jscomp$generator$Generator_$$($engine$$) {
  this.next = function($JSCompiler_inline_result$jscomp$15_opt_value$jscomp$10$$) {
    $JSCompiler_StaticMethods_start_$$($engine$$.$g$);
    $engine$$.$g$.$i$ ? $JSCompiler_inline_result$jscomp$15_opt_value$jscomp$10$$ = $JSCompiler_StaticMethods_yieldAllStep_$$($engine$$, $engine$$.$g$.$i$.next, $JSCompiler_inline_result$jscomp$15_opt_value$jscomp$10$$, $engine$$.$g$.$m$) : ($engine$$.$g$.$m$($JSCompiler_inline_result$jscomp$15_opt_value$jscomp$10$$), $JSCompiler_inline_result$jscomp$15_opt_value$jscomp$10$$ = $JSCompiler_StaticMethods_nextStep_$$($engine$$));
    return $JSCompiler_inline_result$jscomp$15_opt_value$jscomp$10$$;
  };
  this.throw = function($JSCompiler_inline_result$jscomp$16_exception$jscomp$4$$) {
    $JSCompiler_StaticMethods_start_$$($engine$$.$g$);
    $engine$$.$g$.$i$ ? $JSCompiler_inline_result$jscomp$16_exception$jscomp$4$$ = $JSCompiler_StaticMethods_yieldAllStep_$$($engine$$, $engine$$.$g$.$i$["throw"], $JSCompiler_inline_result$jscomp$16_exception$jscomp$4$$, $engine$$.$g$.$m$) : ($JSCompiler_StaticMethods_JSC$3492_throw_$$($engine$$.$g$, $JSCompiler_inline_result$jscomp$16_exception$jscomp$4$$), $JSCompiler_inline_result$jscomp$16_exception$jscomp$4$$ = $JSCompiler_StaticMethods_nextStep_$$($engine$$));
    return $JSCompiler_inline_result$jscomp$16_exception$jscomp$4$$;
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
$$jscomp$polyfill$$("Promise", function($NativePromise$$) {
  function $PolyfillPromise$$($executor$$) {
    this.$h$ = 0;
    this.$i$ = void 0;
    this.$g$ = [];
    this.$o$ = !1;
    var $resolveAndReject$$ = this.$j$();
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
  $AsyncExecutor$$.prototype.$h$ = function($f$jscomp$1$$) {
    if (null == this.$g$) {
      this.$g$ = [];
      var $self$jscomp$1$$ = this;
      this.$i$(function() {
        $self$jscomp$1$$.$l$();
      });
    }
    this.$g$.push($f$jscomp$1$$);
  };
  var $nativeSetTimeout$$ = $$jscomp$global$$.setTimeout;
  $AsyncExecutor$$.prototype.$i$ = function($f$jscomp$2$$) {
    $nativeSetTimeout$$($f$jscomp$2$$, 0);
  };
  $AsyncExecutor$$.prototype.$l$ = function() {
    for (; this.$g$ && this.$g$.length;) {
      var $executingBatch$$ = this.$g$;
      this.$g$ = [];
      for (var $i$jscomp$10$$ = 0; $i$jscomp$10$$ < $executingBatch$$.length; ++$i$jscomp$10$$) {
        var $f$jscomp$3$$ = $executingBatch$$[$i$jscomp$10$$];
        $executingBatch$$[$i$jscomp$10$$] = null;
        try {
          $f$jscomp$3$$();
        } catch ($error$jscomp$4$$) {
          this.$j$($error$jscomp$4$$);
        }
      }
    }
    this.$g$ = null;
  };
  $AsyncExecutor$$.prototype.$j$ = function($exception$jscomp$5$$) {
    this.$i$(function() {
      throw $exception$jscomp$5$$;
    });
  };
  $PolyfillPromise$$.prototype.$j$ = function() {
    function $firstCallWins$$($method$jscomp$2$$) {
      return function($x$jscomp$93$$) {
        $alreadyCalled$$ || ($alreadyCalled$$ = !0, $method$jscomp$2$$.call($thisPromise$$, $x$jscomp$93$$));
      };
    }
    var $thisPromise$$ = this, $alreadyCalled$$ = !1;
    return {resolve:$firstCallWins$$(this.$B$), reject:$firstCallWins$$(this.$l$)};
  };
  $PolyfillPromise$$.prototype.$B$ = function($value$jscomp$101$$) {
    if ($value$jscomp$101$$ === this) {
      this.$l$(new TypeError("A Promise cannot resolve to itself"));
    } else {
      if ($value$jscomp$101$$ instanceof $PolyfillPromise$$) {
        this.$D$($value$jscomp$101$$);
      } else {
        a: {
          switch(typeof $value$jscomp$101$$) {
            case "object":
              var $JSCompiler_inline_result$jscomp$19$$ = null != $value$jscomp$101$$;
              break a;
            case "function":
              $JSCompiler_inline_result$jscomp$19$$ = !0;
              break a;
            default:
              $JSCompiler_inline_result$jscomp$19$$ = !1;
          }
        }
        $JSCompiler_inline_result$jscomp$19$$ ? this.$A$($value$jscomp$101$$) : this.$m$($value$jscomp$101$$);
      }
    }
  };
  $PolyfillPromise$$.prototype.$A$ = function($obj$jscomp$33$$) {
    var $thenMethod$$ = void 0;
    try {
      $thenMethod$$ = $obj$jscomp$33$$.then;
    } catch ($error$jscomp$5$$) {
      this.$l$($error$jscomp$5$$);
      return;
    }
    "function" == typeof $thenMethod$$ ? this.$F$($thenMethod$$, $obj$jscomp$33$$) : this.$m$($obj$jscomp$33$$);
  };
  $PolyfillPromise$$.prototype.$l$ = function($reason$jscomp$9$$) {
    this.$s$(2, $reason$jscomp$9$$);
  };
  $PolyfillPromise$$.prototype.$m$ = function($value$jscomp$103$$) {
    this.$s$(1, $value$jscomp$103$$);
  };
  $PolyfillPromise$$.prototype.$s$ = function($settledState$$, $valueOrReason$$) {
    if (0 != this.$h$) {
      throw Error("Cannot settle(" + $settledState$$ + ", " + $valueOrReason$$ + "): Promise already settled in state" + this.$h$);
    }
    this.$h$ = $settledState$$;
    this.$i$ = $valueOrReason$$;
    2 === this.$h$ && this.$C$();
    this.$u$();
  };
  $PolyfillPromise$$.prototype.$C$ = function() {
    var $self$jscomp$2$$ = this;
    $nativeSetTimeout$$(function() {
      if ($self$jscomp$2$$.$v$()) {
        var $nativeConsole$$ = $$jscomp$global$$.console;
        "undefined" !== typeof $nativeConsole$$ && $nativeConsole$$.error($self$jscomp$2$$.$i$);
      }
    }, 1);
  };
  $PolyfillPromise$$.prototype.$v$ = function() {
    if (this.$o$) {
      return !1;
    }
    var $NativeCustomEvent_event$jscomp$6$$ = $$jscomp$global$$.CustomEvent, $NativeEvent$$ = $$jscomp$global$$.Event, $nativeDispatchEvent$$ = $$jscomp$global$$.dispatchEvent;
    if ("undefined" === typeof $nativeDispatchEvent$$) {
      return !0;
    }
    "function" === typeof $NativeCustomEvent_event$jscomp$6$$ ? $NativeCustomEvent_event$jscomp$6$$ = new $NativeCustomEvent_event$jscomp$6$$("unhandledrejection", {cancelable:!0}) : "function" === typeof $NativeEvent$$ ? $NativeCustomEvent_event$jscomp$6$$ = new $NativeEvent$$("unhandledrejection", {cancelable:!0}) : ($NativeCustomEvent_event$jscomp$6$$ = $$jscomp$global$$.document.createEvent("CustomEvent"), $NativeCustomEvent_event$jscomp$6$$.initCustomEvent("unhandledrejection", !1, !0, $NativeCustomEvent_event$jscomp$6$$));
    $NativeCustomEvent_event$jscomp$6$$.promise = this;
    $NativeCustomEvent_event$jscomp$6$$.reason = this.$i$;
    return $nativeDispatchEvent$$($NativeCustomEvent_event$jscomp$6$$);
  };
  $PolyfillPromise$$.prototype.$u$ = function() {
    if (null != this.$g$) {
      for (var $i$jscomp$11$$ = 0; $i$jscomp$11$$ < this.$g$.length; ++$i$jscomp$11$$) {
        $asyncExecutor$$.$h$(this.$g$[$i$jscomp$11$$]);
      }
      this.$g$ = null;
    }
  };
  var $asyncExecutor$$ = new $AsyncExecutor$$();
  $PolyfillPromise$$.prototype.$D$ = function($promise$$) {
    var $methods$jscomp$1$$ = this.$j$();
    $promise$$.$callWhenSettled_$($methods$jscomp$1$$.resolve, $methods$jscomp$1$$.reject);
  };
  $PolyfillPromise$$.prototype.$F$ = function($thenMethod$jscomp$1$$, $thenable$$) {
    var $methods$jscomp$2$$ = this.$j$();
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
    function $callback$jscomp$465$$() {
      switch($thisPromise$jscomp$1$$.$h$) {
        case 1:
          $onFulfilled$jscomp$1$$($thisPromise$jscomp$1$$.$i$);
          break;
        case 2:
          $onRejected$jscomp$3$$($thisPromise$jscomp$1$$.$i$);
          break;
        default:
          throw Error("Unexpected state: " + $thisPromise$jscomp$1$$.$h$);
      }
    }
    var $thisPromise$jscomp$1$$ = this;
    null == this.$g$ ? $asyncExecutor$$.$h$($callback$jscomp$465$$) : this.$g$.push($callback$jscomp$465$$);
    this.$o$ = !0;
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
$$jscomp$polyfill$$("Number.isFinite", function($orig$jscomp$13$$) {
  return $orig$jscomp$13$$ ? $orig$jscomp$13$$ : function($x$jscomp$96$$) {
    return "number" !== typeof $x$jscomp$96$$ ? !1 : !isNaN($x$jscomp$96$$) && Infinity !== $x$jscomp$96$$ && -Infinity !== $x$jscomp$96$$;
  };
});
function $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_writeData$$($key$jscomp$64$$, $data$jscomp$89$$, $local$$) {
  $local$$ = void 0 === $local$$ ? !1 : $local$$;
  var $$jscomp$compprop1$$, $$jscomp$compprop0$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$309632135$0$$) {
    if ($local$$) {
      return $$jscomp$compprop0$$ = {}, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$309632135$0$$, chrome.storage.local.set(($$jscomp$compprop0$$[$key$jscomp$64$$] = $data$jscomp$89$$, $$jscomp$compprop0$$)), 0);
    }
    $$jscomp$compprop1$$ = {};
    return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$309632135$0$$, chrome.storage.sync.set(($$jscomp$compprop1$$[$key$jscomp$64$$] = $data$jscomp$89$$, $$jscomp$compprop1$$)), 0);
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_readData$$() {
  var $local$jscomp$1$$ = !0;
  $local$jscomp$1$$ = void 0 === $local$jscomp$1$$ ? !1 : $local$jscomp$1$$;
  var $data$jscomp$90$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$309632135$1$$) {
    switch($$jscomp$generator$context$309632135$1$$.$g$) {
      case 1:
        return $local$jscomp$1$$ ? $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$309632135$1$$, chrome.storage.local.get(["currentAssetIndex"]), 5) : $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$309632135$1$$, chrome.storage.sync.get(["currentAssetIndex"]), 4);
      case 4:
        $data$jscomp$90$$ = $$jscomp$generator$context$309632135$1$$.$h$;
        $$jscomp$generator$context$309632135$1$$.$g$ = 3;
        break;
      case 5:
        $data$jscomp$90$$ = $$jscomp$generator$context$309632135$1$$.$h$;
      case 3:
        return $$jscomp$generator$context$309632135$1$$.return($data$jscomp$90$$ ? $data$jscomp$90$$.currentAssetIndex : "");
    }
  });
}
;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var $goog$string$repeat$$ = String.prototype.repeat ? function($string$jscomp$7$$, $length$jscomp$18$$) {
  return $string$jscomp$7$$.repeat($length$jscomp$18$$);
} : function($string$jscomp$8$$, $length$jscomp$19$$) {
  return Array($length$jscomp$19$$ + 1).join($string$jscomp$8$$);
};
function $goog$string$padNumber$$($num$jscomp$6_s$jscomp$22$$, $length$jscomp$20$$) {
  if (!Number.isFinite($num$jscomp$6_s$jscomp$22$$)) {
    return String($num$jscomp$6_s$jscomp$22$$);
  }
  $num$jscomp$6_s$jscomp$22$$ = String($num$jscomp$6_s$jscomp$22$$);
  var $index$jscomp$115$$ = $num$jscomp$6_s$jscomp$22$$.indexOf(".");
  -1 === $index$jscomp$115$$ && ($index$jscomp$115$$ = $num$jscomp$6_s$jscomp$22$$.length);
  var $sign$$ = "-" === $num$jscomp$6_s$jscomp$22$$[0] ? "-" : "";
  $sign$$ && ($num$jscomp$6_s$jscomp$22$$ = $num$jscomp$6_s$jscomp$22$$.substring(1));
  return $sign$$ + $goog$string$repeat$$("0", Math.max(0, $length$jscomp$20$$ - $index$jscomp$115$$)) + $num$jscomp$6_s$jscomp$22$$;
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
$JSCompiler_prototypeAlias$$.add = function($interval$jscomp$3_result$jscomp$21$$) {
  if ($interval$jscomp$3_result$jscomp$21$$.$i$ || $interval$jscomp$3_result$jscomp$21$$.$h$) {
    var $month$jscomp$9_yearAdjustment$$ = this.getMonth() + $interval$jscomp$3_result$jscomp$21$$.$h$ + 12 * $interval$jscomp$3_result$jscomp$21$$.$i$, $initialYear_year$jscomp$14$$ = this.getFullYear() + Math.floor($month$jscomp$9_yearAdjustment$$ / 12);
    $month$jscomp$9_yearAdjustment$$ %= 12;
    0 > $month$jscomp$9_yearAdjustment$$ && ($month$jscomp$9_yearAdjustment$$ += 12);
    a: {
      switch($month$jscomp$9_yearAdjustment$$) {
        case 1:
          var $JSCompiler_inline_result$jscomp$21_date$jscomp$15$$ = 0 != $initialYear_year$jscomp$14$$ % 4 || 0 == $initialYear_year$jscomp$14$$ % 100 && 0 != $initialYear_year$jscomp$14$$ % 400 ? 28 : 29;
          break a;
        case 5:
        case 8:
        case 10:
        case 3:
          $JSCompiler_inline_result$jscomp$21_date$jscomp$15$$ = 30;
          break a;
      }
      $JSCompiler_inline_result$jscomp$21_date$jscomp$15$$ = 31;
    }
    $JSCompiler_inline_result$jscomp$21_date$jscomp$15$$ = Math.min($JSCompiler_inline_result$jscomp$21_date$jscomp$15$$, this.getDate());
    this.$g$.setDate(1);
    this.$g$.setFullYear($initialYear_year$jscomp$14$$);
    this.$g$.setMonth($month$jscomp$9_yearAdjustment$$);
    this.$g$.setDate($JSCompiler_inline_result$jscomp$21_date$jscomp$15$$);
  }
  $interval$jscomp$3_result$jscomp$21$$.$g$ && ($initialYear_year$jscomp$14$$ = this.getFullYear(), $month$jscomp$9_yearAdjustment$$ = 0 <= $initialYear_year$jscomp$14$$ && 99 >= $initialYear_year$jscomp$14$$ ? -1900 : 0, $interval$jscomp$3_result$jscomp$21$$ = new Date((new Date($initialYear_year$jscomp$14$$, this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * $interval$jscomp$3_result$jscomp$21$$.$g$), this.$g$.setDate(1), this.$g$.setFullYear($interval$jscomp$3_result$jscomp$21$$.getFullYear() + 
  $month$jscomp$9_yearAdjustment$$), this.$g$.setMonth($interval$jscomp$3_result$jscomp$21$$.getMonth()), this.$g$.setDate($interval$jscomp$3_result$jscomp$21$$.getDate()), $JSCompiler_StaticMethods_maybeFixDst_$$(this, $interval$jscomp$3_result$jscomp$21$$.getDate()));
};
function $JSCompiler_StaticMethods_JSC$3551_toIsoString$$($JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$, $JSCompiler_temp_const$jscomp$23_opt_verbose$jscomp$1$$, $h$jscomp$inline_95_opt_tz$$) {
  var $m$jscomp$inline_96_n$jscomp$inline_94_year$jscomp$inline_88$$ = $JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$.getFullYear(), $sign$jscomp$inline_89$$ = 0 > $m$jscomp$inline_96_n$jscomp$inline_94_year$jscomp$inline_88$$ ? "-" : 1E4 <= $m$jscomp$inline_96_n$jscomp$inline_94_year$jscomp$inline_88$$ ? "+" : "";
  $JSCompiler_temp_const$jscomp$23_opt_verbose$jscomp$1$$ = [$sign$jscomp$inline_89$$ + $goog$string$padNumber$$(Math.abs($m$jscomp$inline_96_n$jscomp$inline_94_year$jscomp$inline_88$$), $sign$jscomp$inline_89$$ ? 6 : 4), $goog$string$padNumber$$($JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$.getMonth() + 1, 2), $goog$string$padNumber$$($JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$.getDate(), 
  2)].join($JSCompiler_temp_const$jscomp$23_opt_verbose$jscomp$1$$ ? "-" : "");
  $h$jscomp$inline_95_opt_tz$$ ? ($JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$ = $JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$.$g$.getTimezoneOffset(), 0 == $JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$ ? $JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$ = 
  "Z" : ($m$jscomp$inline_96_n$jscomp$inline_94_year$jscomp$inline_88$$ = Math.abs($JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$) / 60, $h$jscomp$inline_95_opt_tz$$ = Math.floor($m$jscomp$inline_96_n$jscomp$inline_94_year$jscomp$inline_88$$), $m$jscomp$inline_96_n$jscomp$inline_94_year$jscomp$inline_88$$ = 60 * ($m$jscomp$inline_96_n$jscomp$inline_94_year$jscomp$inline_88$$ - $h$jscomp$inline_95_opt_tz$$), $JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$ = 
  (0 < $JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$ ? "-" : "+") + $goog$string$padNumber$$($h$jscomp$inline_95_opt_tz$$, 2) + ":" + $goog$string$padNumber$$($m$jscomp$inline_96_n$jscomp$inline_94_year$jscomp$inline_88$$, 2))) : $JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$ = "";
  return $JSCompiler_temp_const$jscomp$23_opt_verbose$jscomp$1$$ + $JSCompiler_StaticMethods_JSC$3551_toIsoString$self_JSCompiler_temp$jscomp$24_offset$jscomp$inline_93_tz$jscomp$inline_92$$;
}
$JSCompiler_prototypeAlias$$.toString = function() {
  return $JSCompiler_StaticMethods_JSC$3551_toIsoString$$(this);
};
function $JSCompiler_StaticMethods_maybeFixDst_$$($JSCompiler_StaticMethods_maybeFixDst_$self$$, $expected$$) {
  $JSCompiler_StaticMethods_maybeFixDst_$self$$.getDate() != $expected$$ && $JSCompiler_StaticMethods_maybeFixDst_$self$$.$g$.setUTCHours($JSCompiler_StaticMethods_maybeFixDst_$self$$.$g$.getUTCHours() + ($JSCompiler_StaticMethods_maybeFixDst_$self$$.getDate() < $expected$$ ? 1 : -1));
}
$JSCompiler_prototypeAlias$$.valueOf = function() {
  return this.$g$.valueOf();
};
var $$jscomp$compprop2$$ = {}, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_DEFAULT_USER_SETTINGS$$ = ($$jscomp$compprop2$$.turnoverAlways = !1, $$jscomp$compprop2$$.appsButtonHidden = !1, $$jscomp$compprop2$$.defaultNewTabButtonHidden = !1, $$jscomp$compprop2$$.topSitesButtonHidden = !1, $$jscomp$compprop2$$);
function $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeDefaultUserSettings$$() {
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$680228004$18$$) {
    Object.keys($module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_DEFAULT_USER_SETTINGS$$).forEach(function($key$jscomp$97$$) {
      return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$680228004$17$$) {
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$680228004$17$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_writeData$$($key$jscomp$97$$, JSON.stringify($module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_DEFAULT_USER_SETTINGS$$[$key$jscomp$97$$])), 0);
      });
    });
    $$jscomp$generator$context$680228004$18$$.$g$ = 0;
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeCurrentAssetIndex$$($indexToSave$$) {
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$680228004$21$$) {
    return 1 == $$jscomp$generator$context$680228004$21$$.$g$ ? $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$680228004$21$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_writeData$$("indexWriteDate", $JSCompiler_StaticMethods_JSC$3551_toIsoString$$(new $goog$date$Date$$(), !1, !1), !0), 2) : $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$680228004$21$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_writeData$$("currentAssetIndex", 
    JSON.stringify($indexToSave$$), !0), 0);
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_getCurrentAssetIndex$$() {
  var $storedValueStr$jscomp$2$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$680228004$23$$) {
    return 1 == $$jscomp$generator$context$680228004$23$$.$g$ ? $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$680228004$23$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$storage$storage_readData$$(), 2) : ($storedValueStr$jscomp$2$$ = $$jscomp$generator$context$680228004$23$$.$h$) ? $$jscomp$generator$context$680228004$23$$.return(JSON.parse($storedValueStr$jscomp$2$$)) : $$jscomp$generator$context$680228004$23$$.return(0);
  });
}
;function $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_getOrCreateClientId$$() {
  var $result$jscomp$22$$, $clientId$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m730393743$7$$) {
    if (1 == $$jscomp$generator$context$m730393743$7$$.$g$) {
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$7$$, chrome.storage.local.get("clientId"), 2);
    }
    if (3 != $$jscomp$generator$context$m730393743$7$$.$g$) {
      if ($clientId$$ = ($result$jscomp$22$$ = $$jscomp$generator$context$m730393743$7$$.$h$) ? $result$jscomp$22$$.clientId : void 0) {
        $$jscomp$generator$context$m730393743$7$$.$g$ = 3;
        return;
      }
      $clientId$$ = self.crypto.randomUUID();
      return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$7$$, chrome.storage.local.set({clientId:$clientId$$}), 3);
    }
    return $$jscomp$generator$context$m730393743$7$$.return($clientId$$);
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_sendGoogleAnalyticsEvent$$($eventName$$, $params$jscomp$2$$) {
  var $mode$jscomp$15$$ = void 0 === $mode$jscomp$15$$ ? "Production" : $mode$jscomp$15$$;
  var $JSCompiler_temp_const$jscomp$5$$, $JSCompiler_temp_const$jscomp$4$$, $body$jscomp$2$$, $postUrl$$, $postData$$, $response$jscomp$4$$, $validationResult$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m730393743$8$$) {
    switch($$jscomp$generator$context$m730393743$8$$.$g$) {
      case 1:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$8$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_getOrCreateClientId$$(), 2);
      case 2:
        return $JSCompiler_temp_const$jscomp$5$$ = $$jscomp$generator$context$m730393743$8$$.$h$, $JSCompiler_temp_const$jscomp$4$$ = {value:chrome.runtime.getManifest().version}, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$8$$, chrome.i18n.getAcceptLanguages(), 3);
      case 3:
        return $body$jscomp$2$$ = {client_id:$JSCompiler_temp_const$jscomp$5$$, user_properties:{chrome_extension_version:$JSCompiler_temp_const$jscomp$4$$, preferred_user_languages:{value:$$jscomp$generator$context$m730393743$8$$.$h$.join(", ").substring(0, 100)}}, events:[{name:$eventName$$, params:Object.assign({}, {session_id:$JSCompiler_StaticMethods_JSC$3551_toIsoString$$(new $goog$date$Date$$(), !1, !1), engagement_time_msec:100}, $params$jscomp$2$$, "Production" !== $mode$jscomp$15$$ ? {debug_mode:!0} : 
        {})}]}, $postUrl$$ = ("Validate" === $mode$jscomp$15$$ ? "https://www.google-analytics.com/debug/mp/collect" : "https://www.google-analytics.com/mp/collect") + "?measurement_id=G-7822LS9WSS&api_secret=4Kqze13oQeysgtPTWX6YDA", $postData$$ = {method:"POST", headers:{Accept:"application/json"}, body:JSON.stringify($body$jscomp$2$$)}, "Production" !== $mode$jscomp$15$$ && console.info("POST GA4 event to " + $postUrl$$, $body$jscomp$2$$), $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$8$$, 
        fetch($postUrl$$, $postData$$), 4);
      case 4:
        $response$jscomp$4$$ = $$jscomp$generator$context$m730393743$8$$.$h$;
        $response$jscomp$4$$.ok || console.error("GA4 response error " + $response$jscomp$4$$.status);
        if ("Validate" !== $mode$jscomp$15$$) {
          $$jscomp$generator$context$m730393743$8$$.$g$ = 0;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m730393743$8$$, $response$jscomp$4$$.json(), 6);
      case 6:
        $validationResult$$ = $$jscomp$generator$context$m730393743$8$$.$h$, console.info("GA4 validation result", $validationResult$$), $$jscomp$generator$context$m730393743$8$$.$g$ = 0;
    }
  });
}
;var $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_CACHE_OPTIONS$$ = {ignoreMethod:!0, ignoreSearch:!0, ignoreVary:!0}, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_DATA_REQUEST_OPTIONS$$ = {method:"GET", headers:{Accept:"application/json"}}, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_IMAGE_REQUEST_OPTIONS$$ = {method:"GET", headers:{Accept:"image/*"}}, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$ = 
[];
function $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetCount$$() {
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14$$) {
    1 == $$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14$$.$g$ ? 0 !== $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$.length ? ($$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14$$.$g$ = 2, $$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14$$ = void 0) : $$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14$$ = 
    $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncData$$(), 2) : $$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14$$ = $$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14$$.return($module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$.length);
    return $$jscomp$generator$context$633210185$14_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14$$;
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncData$$() {
  var $cache$$, $cachedResponse$$, $fetchResponse$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$633210185$16$$) {
    switch($$jscomp$generator$context$633210185$16$$.$g$) {
      case 1:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$16$$, self.caches.open("gac_chromeextensions"), 2);
      case 2:
        return $cache$$ = $$jscomp$generator$context$633210185$16$$.$h$, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$16$$, $cache$$.match("https://www.gstatic.com/culturalinstitute/tabext/imax_2_2.json", $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_CACHE_OPTIONS$$), 3);
      case 3:
        if ($cachedResponse$$ = $$jscomp$generator$context$633210185$16$$.$h$) {
          $$jscomp$generator$context$633210185$16$$.$g$ = 4;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$16$$, fetch("https://www.gstatic.com/culturalinstitute/tabext/imax_2_2.json", $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_DATA_REQUEST_OPTIONS$$), 5);
      case 5:
        $fetchResponse$$ = $$jscomp$generator$context$633210185$16$$.$h$;
        if (!$fetchResponse$$.ok) {
          return console.error($fetchResponse$$.statusText), $$jscomp$generator$context$633210185$16$$.return(!1);
        }
        $cachedResponse$$ = $fetchResponse$$.clone();
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$16$$, $cache$$.put("https://www.gstatic.com/culturalinstitute/tabext/imax_2_2.json", $fetchResponse$$), 4);
      case 4:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$16$$, $cachedResponse$$.json(), 7);
      case 7:
        return $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$ = $$jscomp$generator$context$633210185$16$$.$h$, 0 === $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$.length ? (console.error("Asset data is empty"), $$jscomp$generator$context$633210185$16$$.return(!1)) : $$jscomp$generator$context$633210185$16$$.return(!0);
    }
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_loadImage$$($imageId$$) {
  var $assetData$jscomp$1$$, $imageUrl$$, $cache$jscomp$1$$, $cachedResponse$jscomp$1$$, $fetchResponse$jscomp$1$$, $JSCompiler_temp_const$jscomp$6$$, $dataUrl$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$633210185$17$$) {
    switch($$jscomp$generator$context$633210185$17$$.$g$) {
      case 1:
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
        return $cache$jscomp$1$$ = $$jscomp$generator$context$633210185$17$$.$h$, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$17$$, $cache$jscomp$1$$.match($imageUrl$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_CACHE_OPTIONS$$), 5);
      case 5:
        if ($cachedResponse$jscomp$1$$ = $$jscomp$generator$context$633210185$17$$.$h$) {
          $$jscomp$generator$context$633210185$17$$.$g$ = 6;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$17$$, fetch($imageUrl$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_IMAGE_REQUEST_OPTIONS$$), 7);
      case 7:
        $fetchResponse$jscomp$1$$ = $$jscomp$generator$context$633210185$17$$.$h$;
        if (!$fetchResponse$jscomp$1$$.ok) {
          return console.error($fetchResponse$jscomp$1$$.statusText), $$jscomp$generator$context$633210185$17$$.return(!1);
        }
        $cachedResponse$jscomp$1$$ = $fetchResponse$jscomp$1$$.clone();
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$17$$, $cache$jscomp$1$$.put($imageUrl$$, $fetchResponse$jscomp$1$$), 6);
      case 6:
        return $JSCompiler_temp_const$jscomp$6$$ = $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_blobToDataUrl$$, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$17$$, $cachedResponse$jscomp$1$$.blob(), 10);
      case 10:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$633210185$17$$, $JSCompiler_temp_const$jscomp$6$$($$jscomp$generator$context$633210185$17$$.$h$), 9);
      case 9:
        return $dataUrl$$ = $$jscomp$generator$context$633210185$17$$.$h$, 0 > $imageId$$ || $imageId$$ >= $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$.length ? console.error("ImageID " + $imageId$$ + " is invalid") : $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetData$$[$imageId$$].data_url = $dataUrl$$, $$jscomp$generator$context$633210185$17$$.return(!0);
    }
  });
}
function $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_blobToDataUrl$$($blob$jscomp$13$$) {
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$633210185$18$$) {
    return $$jscomp$generator$context$633210185$18$$.return(new Promise(function($resolve$jscomp$9$$, $reject$jscomp$9$$) {
      var $reader$$ = new FileReader();
      $reader$$.onload = function() {
        $resolve$jscomp$9$$($reader$$.result);
      };
      $reader$$.onerror = function() {
        $reject$jscomp$9$$($reader$$.error);
      };
      $reader$$.onabort = function() {
        $reject$jscomp$9$$(Error("Read aborted"));
      };
      $reader$$.readAsDataURL($blob$jscomp$13$$);
    }));
  });
}
;function $module$contents$google3$cultural$integrations$chromeextensions$arttab$background$handleMessages_handleRotateImage$$($currentAssetIndex$jscomp$1$$) {
  var $totalAssets$jscomp$1$$, $nextAssetIndex$jscomp$1$$, $result$jscomp$23$$;
  $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$m2122144436$0$$) {
    switch($$jscomp$generator$context$m2122144436$0$$.$g$) {
      case 1:
        return $currentAssetIndex$jscomp$1$$ += 1, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m2122144436$0$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetCount$$(), 2);
      case 2:
        return $totalAssets$jscomp$1$$ = $$jscomp$generator$context$m2122144436$0$$.$h$, $currentAssetIndex$jscomp$1$$ >= $totalAssets$jscomp$1$$ && ($currentAssetIndex$jscomp$1$$ = 0), $nextAssetIndex$jscomp$1$$ = $currentAssetIndex$jscomp$1$$ + 1, $nextAssetIndex$jscomp$1$$ >= $totalAssets$jscomp$1$$ && ($nextAssetIndex$jscomp$1$$ = 0), $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m2122144436$0$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_loadImage$$($nextAssetIndex$jscomp$1$$), 
        3);
      case 3:
        $result$jscomp$23$$ = $$jscomp$generator$context$m2122144436$0$$.$h$;
        if (!$result$jscomp$23$$) {
          $$jscomp$generator$context$m2122144436$0$$.$g$ = 0;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m2122144436$0$$, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeCurrentAssetIndex$$($currentAssetIndex$jscomp$1$$), 5);
      case 5:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$m2122144436$0$$, chrome.runtime.sendMessage({type:"updateAsset"}), 0);
    }
  });
}
;chrome.runtime.onInstalled.addListener(function($details$jscomp$85$$) {
  var $totalAssets$$, $currentAssetIndex$$, $nextAssetIndex$$, $currentLoad$$, $nextLoad$$;
  return $$jscomp$asyncExecutePromiseGeneratorProgram$$(function($$jscomp$generator$context$1112209924$0$$) {
    switch($$jscomp$generator$context$1112209924$0$$.$g$) {
      case 1:
        if ($details$jscomp$85$$.reason !== chrome.runtime.OnInstalledReason.INSTALL) {
          $$jscomp$generator$context$1112209924$0$$.$g$ = 2;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1112209924$0$$, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeDefaultUserSettings$$(), 2);
      case 2:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1112209924$0$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncData$$(), 4);
      case 4:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1112209924$0$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_syncedAssetCount$$(), 5);
      case 5:
        return $totalAssets$$ = $$jscomp$generator$context$1112209924$0$$.$h$, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1112209924$0$$, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_getCurrentAssetIndex$$(), 6);
      case 6:
        return $currentAssetIndex$$ = $$jscomp$generator$context$1112209924$0$$.$h$, $currentAssetIndex$$ >= $totalAssets$$ && ($currentAssetIndex$$ = 0), $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1112209924$0$$, $module$contents$google3$cultural$integrations$chromeextensions$arttab$newtab$settings_writeCurrentAssetIndex$$($currentAssetIndex$$), 7);
      case 7:
        return $nextAssetIndex$$ = $currentAssetIndex$$ + 1, $nextAssetIndex$$ >= $totalAssets$$ && ($nextAssetIndex$$ = 0), $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1112209924$0$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_loadImage$$($currentAssetIndex$$), 8);
      case 8:
        return $currentLoad$$ = $$jscomp$generator$context$1112209924$0$$.$h$, $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1112209924$0$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$assetdata$assetdata_loadImage$$($nextAssetIndex$$), 9);
      case 9:
        $nextLoad$$ = $$jscomp$generator$context$1112209924$0$$.$h$;
        if ($currentLoad$$ && $nextLoad$$) {
          $$jscomp$generator$context$1112209924$0$$.$g$ = 10;
          break;
        }
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1112209924$0$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_sendGoogleAnalyticsEvent$$("install_image_load_error", {total_assets:$totalAssets$$, current_asset:$currentAssetIndex$$}), 10);
      case 10:
        return $JSCompiler_StaticMethods_yield$$($$jscomp$generator$context$1112209924$0$$, $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_sendGoogleAnalyticsEvent$$("chrome_runtime_on_installed", {reason:$details$jscomp$85$$.reason}), 0);
    }
  });
});
chrome.runtime.onMessage.addListener(function($message$jscomp$56$$) {
  switch($message$jscomp$56$$.type) {
    case "rotateImage":
      $module$contents$google3$cultural$integrations$chromeextensions$arttab$background$handleMessages_handleRotateImage$$($message$jscomp$56$$.payload.currentAssetIndex);
  }
  return !1;
});
chrome.action.onClicked.addListener(function($tab$$) {
  chrome.tabs.create({active:!0, openerTabId:$tab$$.id, url:"https://artsandculture.google.com?utm_source=chrome_extension&utm_medium=default_link&utm_campaign=chrome_extension_3"});
  $module$contents$google3$cultural$integrations$chromeextensions$shared$analytics$analytics_sendGoogleAnalyticsEvent$$("action_clicked", {});
});

//# sourceMappingURL=js_background.nodeps.sourcemap
