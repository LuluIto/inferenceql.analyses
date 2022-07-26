// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.page.home.ensemble');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('goog.string');
goog.require('inferenceql.viz.stream.panels.jsmodel.views');
goog.require('inferenceql.viz.stream.panels.viz.views');
goog.require('inferenceql.viz.stream.store');
inferenceql.viz.stream.page.home.ensemble.model_summaries = (function inferenceql$viz$stream$page$home$ensemble$model_summaries(iteration){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border_DASH_radius,"4px",cljs.core.cst$kw$overflow,"hidden"], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.jsmodel.views.tiny_js_model,(0),iteration], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"5px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.jsmodel.views.tiny_js_model,(1),iteration], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"5px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.jsmodel.views.tiny_js_model,(2),iteration], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"5px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.jsmodel.views.tiny_js_model_placeholder,(97)], null)], null)], null)], null)], null);
});
inferenceql.viz.stream.page.home.ensemble.ensemble_options = (function inferenceql$viz$stream$page$home$ensemble$ensemble_options(){
var show_ensemble_options = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_show_DASH_ensemble_DASH_options], null)));
var mi_threshold = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_mi_DASH_threshold], null)));
var mi_bounds = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_mi_DASH_bounds], null)));
if(cljs.core.truth_(show_ensemble_options)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"5px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Dep-prob exponential weighting:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_top,"3px"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,cljs.core.cst$kw$width,"200px",cljs.core.cst$kw$min,cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(mi_bounds),cljs.core.cst$kw$max,cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(mi_bounds),cljs.core.cst$kw$step,((cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(mi_bounds) - cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(mi_bounds)) / (100)),cljs.core.cst$kw$model,mi_threshold,cljs.core.cst$kw$on_DASH_change,(function (val){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_set_DASH_mi_DASH_threshold,val], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,goog.string.format("%.5f",mi_threshold)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null)], null)], null);
} else {
return null;
}
});
inferenceql.viz.stream.page.home.ensemble.ensemble_section = (function inferenceql$viz$stream$page$home$ensemble$ensemble_section(){
var iteration = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$control_SLASH_iteration], null)));
var show_ensemble_section = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_show_DASH_ensemble_DASH_section], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level2,cljs.core.cst$kw$label,"Ensemble of synthesized probabilistic programs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"5px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.info_button,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"8px"], null),cljs.core.cst$kw$info,"This is the ..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,cljs.core.cst$kw$parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"8px",cljs.core.cst$kw$align_DASH_self,"center"], null)], null)], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(show_ensemble_section)?null:"darkblue")], null),cljs.core.cst$kw$label,"hide",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_toggle_DASH_show_DASH_ensemble_DASH_section], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,cljs.core.cst$kw$parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"8px",cljs.core.cst$kw$align_DASH_self,"center"], null)], null)], null),cljs.core.cst$kw$label,"options",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_toggle_DASH_ensemble_DASH_options], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.page.home.ensemble.ensemble_options], null),(cljs.core.truth_(show_ensemble_section)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.page.home.ensemble.model_summaries,iteration], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"50px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level3,cljs.core.cst$kw$label,"Pairwise predictive relationships",cljs.core.cst$kw$parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_self,"center"], null)], null)], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.viz.views.mi_plot,inferenceql.viz.stream.store.mutual_info,iteration], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null)], null):null)], null);
});