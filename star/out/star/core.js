// Compiled by ClojureScript 1.9.473 {}
goog.provide('star.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
star.core.vertexNum = (10);
star.core.setup = (function star$core$setup(){
return quil.core.frame_rate.call(null,(30));
});
star.core.draw = (function star$core$draw(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,(255),(255),(0));

quil.core.stroke.call(null,(0),(0),(0));

var tr__8398__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8398__auto__);

quil.core.rotate.call(null,(quil.core.PI / (2)));

quil.core.begin_shape.call(null);

var seq__8479_8483 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),star.core.vertexNum));
var chunk__8480_8484 = null;
var count__8481_8485 = (0);
var i__8482_8486 = (0);
while(true){
if((i__8482_8486 < count__8481_8485)){
var i_8487 = cljs.core._nth.call(null,chunk__8480_8484,i__8482_8486);
var r_8488 = ((100) + ((80) * cljs.core.rem.call(null,i_8487,(2))));
var x_8489 = (r_8488 * quil.core.cos.call(null,(i_8487 * (quil.core.TWO_PI / star.core.vertexNum))));
var y_8490 = (r_8488 * quil.core.sin.call(null,(i_8487 * (quil.core.TWO_PI / star.core.vertexNum))));
quil.core.vertex.call(null,x_8489,y_8490);

var G__8491 = seq__8479_8483;
var G__8492 = chunk__8480_8484;
var G__8493 = count__8481_8485;
var G__8494 = (i__8482_8486 + (1));
seq__8479_8483 = G__8491;
chunk__8480_8484 = G__8492;
count__8481_8485 = G__8493;
i__8482_8486 = G__8494;
continue;
} else {
var temp__4657__auto___8495 = cljs.core.seq.call(null,seq__8479_8483);
if(temp__4657__auto___8495){
var seq__8479_8496__$1 = temp__4657__auto___8495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8479_8496__$1)){
var c__7633__auto___8497 = cljs.core.chunk_first.call(null,seq__8479_8496__$1);
var G__8498 = cljs.core.chunk_rest.call(null,seq__8479_8496__$1);
var G__8499 = c__7633__auto___8497;
var G__8500 = cljs.core.count.call(null,c__7633__auto___8497);
var G__8501 = (0);
seq__8479_8483 = G__8498;
chunk__8480_8484 = G__8499;
count__8481_8485 = G__8500;
i__8482_8486 = G__8501;
continue;
} else {
var i_8502 = cljs.core.first.call(null,seq__8479_8496__$1);
var r_8503 = ((100) + ((80) * cljs.core.rem.call(null,i_8502,(2))));
var x_8504 = (r_8503 * quil.core.cos.call(null,(i_8502 * (quil.core.TWO_PI / star.core.vertexNum))));
var y_8505 = (r_8503 * quil.core.sin.call(null,(i_8502 * (quil.core.TWO_PI / star.core.vertexNum))));
quil.core.vertex.call(null,x_8504,y_8505);

var G__8506 = cljs.core.next.call(null,seq__8479_8496__$1);
var G__8507 = null;
var G__8508 = (0);
var G__8509 = (0);
seq__8479_8483 = G__8506;
chunk__8480_8484 = G__8507;
count__8481_8485 = G__8508;
i__8482_8486 = G__8509;
continue;
}
} else {
}
}
break;
}

return quil.core.end_shape.call(null,new cljs.core.Keyword(null,"close","close",1835149582));
}finally {quil.core.pop_matrix.call(null);
}});
star.core.star = (function star$core$star(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"star",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,star.core.setup))?(function() { 
var G__8510__delegate = function (args){
return cljs.core.apply.call(null,star.core.setup,args);
};
var G__8510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8511__i = 0, G__8511__a = new Array(arguments.length -  0);
while (G__8511__i < G__8511__a.length) {G__8511__a[G__8511__i] = arguments[G__8511__i + 0]; ++G__8511__i;}
  args = new cljs.core.IndexedSeq(G__8511__a,0);
} 
return G__8510__delegate.call(this,args);};
G__8510.cljs$lang$maxFixedArity = 0;
G__8510.cljs$lang$applyTo = (function (arglist__8512){
var args = cljs.core.seq(arglist__8512);
return G__8510__delegate(args);
});
G__8510.cljs$core$IFn$_invoke$arity$variadic = G__8510__delegate;
return G__8510;
})()
:star.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,star.core.draw))?(function() { 
var G__8513__delegate = function (args){
return cljs.core.apply.call(null,star.core.draw,args);
};
var G__8513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8514__i = 0, G__8514__a = new Array(arguments.length -  0);
while (G__8514__i < G__8514__a.length) {G__8514__a[G__8514__i] = arguments[G__8514__i + 0]; ++G__8514__i;}
  args = new cljs.core.IndexedSeq(G__8514__a,0);
} 
return G__8513__delegate.call(this,args);};
G__8513.cljs$lang$maxFixedArity = 0;
G__8513.cljs$lang$applyTo = (function (arglist__8515){
var args = cljs.core.seq(arglist__8515);
return G__8513__delegate(args);
});
G__8513.cljs$core$IFn$_invoke$arity$variadic = G__8513__delegate;
return G__8513;
})()
:star.core.draw));
});
goog.exportSymbol('star.core.star', star.core.star);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),star.core.star,new cljs.core.Keyword(null,"host-id","host-id",742376279),"star"], null));
}

//# sourceMappingURL=core.js.map