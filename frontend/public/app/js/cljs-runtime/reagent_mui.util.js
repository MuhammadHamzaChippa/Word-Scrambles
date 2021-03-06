goog.provide('reagent_mui.util');
goog.scope(function(){
  reagent_mui.util.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$mui$material$node$SvgIcon$index=shadow.js.require("module$node_modules$$mui$material$node$SvgIcon$index", {});
reagent_mui.util.adapt_react_class = (function reagent_mui$util$adapt_react_class(var_args){
var G__26879 = arguments.length;
switch (G__26879) {
case 1:
return reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1 = (function (c){
return reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2(c,reagent.impl.util.fun_name(c));
}));

(reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2 = (function (c,display_name){
var adapted = reagent.core.adapt_react_class(c);
(adapted.displayName = display_name);

return adapted;
}));

(reagent_mui.util.adapt_react_class.cljs$lang$maxFixedArity = 2);

reagent_mui.util.color_key_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["A700",null,"A200",null,new cljs.core.Keyword(null,"A200","A200",-116883354),null,new cljs.core.Keyword(null,"A400","A400",1881009576),null,new cljs.core.Keyword(null,"A700","A700",-181053111),null,"A400",null,new cljs.core.Keyword(null,"A100","A100",-1657389641),null,"A100",null], null), null);
reagent_mui.util.numeric_string_QMARK_ = (function reagent_mui$util$numeric_string_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches(/[0-9]+/,s) == null)))));
});
reagent_mui.util.pascal_case_QMARK_ = (function reagent_mui$util$pascal_case_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, ["A",null,"B",null,"C",null,"D",null,"E",null,"F",null,"G",null,"H",null,"I",null,"J",null,"K",null,"L",null,"M",null,"N",null,"O",null,"P",null,"Q",null,"R",null,"S",null,"T",null,"U",null,"V",null,"W",null,"X",null,"Y",null,"Z",null], null), null),cljs.core.first(s))));
});
reagent_mui.util.keyword_safe_QMARK_ = (function reagent_mui$util$keyword_safe_QMARK_(s){
return (!((cljs.core.re_matches(/[-*+!?<>='&$%#|\w]+/,s) == null)));
});
reagent_mui.util.key__GT_str = (function reagent_mui$util$key__GT_str(k){
var n = cljs.core.name(k);
if(cljs.core.truth_((reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : reagent_mui.util.color_key_QMARK_.call(null,k)))){
return n;
} else {
if(clojure.string.starts_with_QMARK_(n,"data-")){
return n;
} else {
if(clojure.string.starts_with_QMARK_(n,"aria-")){
return n;
} else {
if(reagent_mui.util.pascal_case_QMARK_(n)){
return n;
} else {
return camel_snake_kebab.core.__GT_camelCaseString(k);

}
}
}
}
});
reagent_mui.util.convert_map_keys = (function reagent_mui$util$convert_map_keys(m,f){
return clojure.walk.postwalk((function (x){
if(cljs.core.map_entry_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26906 = cljs.core.key(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26906) : f.call(null,G__26906));
})(),cljs.core.val(x)], null);
} else {
return x;
}
}),m);
});
reagent_mui.util.clj__GT_js_SINGLEQUOTE_ = (function reagent_mui$util$clj__GT_js_SINGLEQUOTE_(obj){
return cljs.core.clj__GT_js(reagent_mui.util.convert_map_keys(obj,(function (k){
if((k instanceof cljs.core.Keyword)){
return reagent_mui.util.key__GT_str(k);
} else {
return k;
}
})));
});
reagent_mui.util.js_key__GT_clj = (function reagent_mui$util$js_key__GT_clj(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
if(cljs.core.truth_((reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : reagent_mui.util.color_key_QMARK_.call(null,k)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
if(reagent_mui.util.numeric_string_QMARK_(k)){
return parseInt(k);
} else {
if(reagent_mui.util.keyword_safe_QMARK_(k)){
if(reagent_mui.util.pascal_case_QMARK_(k)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
return camel_snake_kebab.core.__GT_kebab_case_keyword(k);
}
} else {
return k;

}
}
}
}
});
reagent_mui.util.js__GT_clj_SINGLEQUOTE_ = (function reagent_mui$util$js__GT_clj_SINGLEQUOTE_(obj){
var convert = (function reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(x){
if(cljs.core.seq_QMARK_(x)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert,x));
} else {
if(cljs.core.map_entry_QMARK_(x)){
return (new cljs.core.MapEntry(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(cljs.core.key(x)),reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(cljs.core.val(x)),null));
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(x),cljs.core.map.cljs$core$IFn$_invoke$arity$1(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert),x);
} else {
if(cljs.core.array_QMARK_(x)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26908_SHARP_,p2__26909_SHARP_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__26908_SHARP_,reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(p2__26909_SHARP_));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),x));
} else {
if(cljs.core.truth_(module$node_modules$react$index.isValidElement(x))){
return x;
} else {
if((cljs.core.type(x) === Object)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ref",k)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"ref","ref",1289896967),reagent_mui.util.goog$module$goog$object.get(x,k));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(r,reagent_mui.util.js_key__GT_clj(k),reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(reagent_mui.util.goog$module$goog$object.get(x,k)));
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.js_keys(x)));
} else {
return x;

}
}
}
}
}
}
});
return convert(obj);
});
reagent_mui.util.wrap_clj_function = (function reagent_mui$util$wrap_clj_function(f){
return (function() { 
var G__26929__delegate = function (args){
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_mui.util.js__GT_clj_SINGLEQUOTE_,args)));
};
var G__26929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26930__i = 0, G__26930__a = new Array(arguments.length -  0);
while (G__26930__i < G__26930__a.length) {G__26930__a[G__26930__i] = arguments[G__26930__i + 0]; ++G__26930__i;}
  args = new cljs.core.IndexedSeq(G__26930__a,0,null);
} 
return G__26929__delegate.call(this,args);};
G__26929.cljs$lang$maxFixedArity = 0;
G__26929.cljs$lang$applyTo = (function (arglist__26931){
var args = cljs.core.seq(arglist__26931);
return G__26929__delegate(args);
});
G__26929.cljs$core$IFn$_invoke$arity$variadic = G__26929__delegate;
return G__26929;
})()
;
});
reagent_mui.util.wrap_js_function = (function reagent_mui$util$wrap_js_function(f){
return (function() { 
var G__26932__delegate = function (args){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_mui.util.clj__GT_js_SINGLEQUOTE_,args)));
};
var G__26932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26933__i = 0, G__26933__a = new Array(arguments.length -  0);
while (G__26933__i < G__26933__a.length) {G__26933__a[G__26933__i] = arguments[G__26933__i + 0]; ++G__26933__i;}
  args = new cljs.core.IndexedSeq(G__26933__a,0,null);
} 
return G__26932__delegate.call(this,args);};
G__26932.cljs$lang$maxFixedArity = 0;
G__26932.cljs$lang$applyTo = (function (arglist__26934){
var args = cljs.core.seq(arglist__26934);
return G__26932__delegate(args);
});
G__26932.cljs$core$IFn$_invoke$arity$variadic = G__26932__delegate;
return G__26932;
})()
;
});
reagent_mui.util.wrap_all_clj_functions = (function reagent_mui$util$wrap_all_clj_functions(m){
return clojure.walk.postwalk((function (x){
if(cljs.core.fn_QMARK_(x)){
return reagent_mui.util.wrap_clj_function(x);
} else {
return x;
}
}),m);
});
reagent_mui.util.reactify_component = (function reagent_mui$util$reactify_component(component){
var reactified = module$node_modules$react$index.forwardRef((function (props,ref){
var clj_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent_mui.util.js__GT_clj_SINGLEQUOTE_(props),new cljs.core.Keyword(null,"ref","ref",1289896967),ref);
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,clj_props], null));
}));
(reactified.displayName = reagent.impl.util.fun_name(component));

return reactified;
});
reagent_mui.util.wrap_styles = (function reagent_mui$util$wrap_styles(styles){
if(cljs.core.fn_QMARK_(styles)){
return (function (theme){
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_(reagent_mui.util.wrap_all_clj_functions((function (){var G__26910 = reagent_mui.util.js__GT_clj_SINGLEQUOTE_(theme);
return (styles.cljs$core$IFn$_invoke$arity$1 ? styles.cljs$core$IFn$_invoke$arity$1(G__26910) : styles.call(null,G__26910));
})()));
});
} else {
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_(reagent_mui.util.wrap_all_clj_functions(styles));
}
});
reagent_mui.util.apply_hoc = (function reagent_mui$util$apply_hoc(hoc,component){
return reagent_mui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1((function (){var G__26911 = reagent_mui.util.reactify_component(component);
return (hoc.cljs$core$IFn$_invoke$arity$1 ? hoc.cljs$core$IFn$_invoke$arity$1(G__26911) : hoc.call(null,G__26911));
})());
});
reagent_mui.util.get_anycase = (function reagent_mui$util$get_anycase(var_args){
var G__26913 = arguments.length;
switch (G__26913) {
case 2:
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3(m,k,null);
}));

(reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,default$){
var temp__5751__auto__ = (function (){var or__4253__auto__ = cljs.core.find(m,camel_snake_kebab.core.__GT_kebab_case_keyword(k));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.find(m,camel_snake_kebab.core.__GT_camelCaseKeyword(k));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var entry = temp__5751__auto__;
return cljs.core.val(entry);
} else {
return default$;
}
}));

(reagent_mui.util.get_anycase.cljs$lang$maxFixedArity = 3);

reagent_mui.util.assoc_anycase = (function reagent_mui$util$assoc_anycase(var_args){
var G__26919 = arguments.length;
switch (G__26919) {
case 3:
return reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___26941 = arguments.length;
var i__4865__auto___26942 = (0);
while(true){
if((i__4865__auto___26942 < len__4864__auto___26941)){
args_arr__4885__auto__.push((arguments[i__4865__auto___26942]));

var G__26943 = (i__4865__auto___26942 + (1));
i__4865__auto___26942 = G__26943;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((3)),(0),null));
return reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4886__auto__);

}
});

(reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,camel_snake_kebab.core.__GT_camelCaseKeyword(k)),camel_snake_kebab.core.__GT_kebab_case_keyword(k),v);
}));

(reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3(m,k,v);
if(cljs.core.truth_(kvs)){
var G__26944 = ret;
var G__26945 = cljs.core.first(kvs);
var G__26946 = cljs.core.second(kvs);
var G__26947 = cljs.core.nnext(kvs);
m = G__26944;
k = G__26945;
v = G__26946;
kvs = G__26947;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(reagent_mui.util.assoc_anycase.cljs$lang$applyTo = (function (seq26915){
var G__26916 = cljs.core.first(seq26915);
var seq26915__$1 = cljs.core.next(seq26915);
var G__26917 = cljs.core.first(seq26915__$1);
var seq26915__$2 = cljs.core.next(seq26915__$1);
var G__26918 = cljs.core.first(seq26915__$2);
var seq26915__$3 = cljs.core.next(seq26915__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26916,G__26917,G__26918,seq26915__$3);
}));

(reagent_mui.util.assoc_anycase.cljs$lang$maxFixedArity = (3));

reagent_mui.util.remove_undefined_vals = (function reagent_mui$util$remove_undefined_vals(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
if((void 0 === v)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$(m),m));
});
reagent_mui.util.set_ref = (function reagent_mui$util$set_ref(ref,value){
if(cljs.core.fn_QMARK_(ref)){
(ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(value) : ref.call(null,value));
} else {
if(cljs.core.truth_(ref)){
(ref.current = value);
} else {
}
}

return undefined;
});
reagent_mui.util.swap_ref = (function reagent_mui$util$swap_ref(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26948 = arguments.length;
var i__4865__auto___26949 = (0);
while(true){
if((i__4865__auto___26949 < len__4864__auto___26948)){
args__4870__auto__.push((arguments[i__4865__auto___26949]));

var G__26950 = (i__4865__auto___26949 + (1));
i__4865__auto___26949 = G__26950;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return reagent_mui.util.swap_ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(reagent_mui.util.swap_ref.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
return (ref.current = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ref.current,args));
}));

(reagent_mui.util.swap_ref.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent_mui.util.swap_ref.cljs$lang$applyTo = (function (seq26920){
var G__26921 = cljs.core.first(seq26920);
var seq26920__$1 = cljs.core.next(seq26920);
var G__26922 = cljs.core.first(seq26920__$1);
var seq26920__$2 = cljs.core.next(seq26920__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26921,G__26922,seq26920__$2);
}));

reagent_mui.util.use_fork_ref = (function reagent_mui$util$use_fork_ref(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26951 = arguments.length;
var i__4865__auto___26952 = (0);
while(true){
if((i__4865__auto___26952 < len__4864__auto___26951)){
args__4870__auto__.push((arguments[i__4865__auto___26952]));

var G__26953 = (i__4865__auto___26952 + (1));
i__4865__auto___26952 = G__26953;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return reagent_mui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(reagent_mui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic = (function (refs){
return module$node_modules$react$index.useMemo((function (){
if(cljs.core.not_every_QMARK_(cljs.core.nil_QMARK_,refs)){
return (function (value){
var seq__26924 = cljs.core.seq(refs);
var chunk__26925 = null;
var count__26926 = (0);
var i__26927 = (0);
while(true){
if((i__26927 < count__26926)){
var ref = chunk__26925.cljs$core$IIndexed$_nth$arity$2(null,i__26927);
reagent_mui.util.set_ref(ref,value);


var G__26954 = seq__26924;
var G__26955 = chunk__26925;
var G__26956 = count__26926;
var G__26957 = (i__26927 + (1));
seq__26924 = G__26954;
chunk__26925 = G__26955;
count__26926 = G__26956;
i__26927 = G__26957;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26924);
if(temp__5753__auto__){
var seq__26924__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26924__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26924__$1);
var G__26958 = cljs.core.chunk_rest(seq__26924__$1);
var G__26959 = c__4679__auto__;
var G__26960 = cljs.core.count(c__4679__auto__);
var G__26961 = (0);
seq__26924 = G__26958;
chunk__26925 = G__26959;
count__26926 = G__26960;
i__26927 = G__26961;
continue;
} else {
var ref = cljs.core.first(seq__26924__$1);
reagent_mui.util.set_ref(ref,value);


var G__26963 = cljs.core.next(seq__26924__$1);
var G__26964 = null;
var G__26965 = (0);
var G__26966 = (0);
seq__26924 = G__26963;
chunk__26925 = G__26964;
count__26926 = G__26965;
i__26927 = G__26966;
continue;
}
} else {
return null;
}
}
break;
}
});
} else {
return null;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,refs));
}));

(reagent_mui.util.use_fork_ref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reagent_mui.util.use_fork_ref.cljs$lang$applyTo = (function (seq26923){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26923));
}));

reagent_mui.util.use_callback = (function reagent_mui$util$use_callback(callback,props){
return module$node_modules$react$index.useCallback(callback,props);
});
reagent_mui.util.use_effect = (function reagent_mui$util$use_effect(effect,props){
return module$node_modules$react$index.useEffect(effect,props);
});
reagent_mui.util.use_layout_effect = (function reagent_mui$util$use_layout_effect(effect){
return module$node_modules$react$index.useLayoutEffect(effect);
});
reagent_mui.util.use_ref = (function reagent_mui$util$use_ref(value){
return module$node_modules$react$index.useRef(value);
});
reagent_mui.util.use_state = (function reagent_mui$util$use_state(initial_state){
return module$node_modules$react$index.useState(initial_state);
});

//# sourceMappingURL=reagent_mui.util.js.map
