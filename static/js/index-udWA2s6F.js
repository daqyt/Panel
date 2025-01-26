import{S as W}from"./index-PyZVjOxt.js";import"./index-CBmakSG_.js";var x=["-type","-spec","-export_type","-opaque"],z=["after","begin","catch","case","cond","end","fun","if","let","of","query","receive","try","when"],E=/[\->,;]/,T=["->",";",","],m=["and","andalso","band","bnot","bor","bsl","bsr","bxor","div","not","or","orelse","rem","xor"],R=/[\+\-\*\/<>=\|:!]/,A=["=","+","-","*","/",">",">=","<","=<","=:=","==","=/=","/=","||","<-","!"],U=/[<\(\[\{]/,b=["<<","(","[","{"],Z=/[>\)\]\}]/,y=["}","]",")",">>"],P=["is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_record","is_reference","is_tuple","atom","binary","bitstring","boolean","function","integer","list","number","pid","port","record","reference","tuple"],q=["abs","adler32","adler32_combine","alive","apply","atom_to_binary","atom_to_list","binary_to_atom","binary_to_existing_atom","binary_to_list","binary_to_term","bit_size","bitstring_to_list","byte_size","check_process_code","contact_binary","crc32","crc32_combine","date","decode_packet","delete_module","disconnect_node","element","erase","exit","float","float_to_list","garbage_collect","get","get_keys","group_leader","halt","hd","integer_to_list","internal_bif","iolist_size","iolist_to_binary","is_alive","is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_process_alive","is_record","is_reference","is_tuple","length","link","list_to_atom","list_to_binary","list_to_bitstring","list_to_existing_atom","list_to_float","list_to_integer","list_to_pid","list_to_tuple","load_module","make_ref","module_loaded","monitor_node","node","node_link","node_unlink","nodes","notalive","now","open_port","pid_to_list","port_close","port_command","port_connect","port_control","pre_loaded","process_flag","process_info","processes","purge_module","put","register","registered","round","self","setelement","size","spawn","spawn_link","spawn_monitor","spawn_opt","split_binary","statistics","term_to_binary","time","throw","tl","trunc","tuple_size","tuple_to_list","unlink","unregister","whereis"],p=/[\w@Ø-ÞÀ-Öß-öø-ÿ]/,j=/[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;function Q(e,n){if(n.in_string)return n.in_string=!v(e),i(n,e,"string");if(n.in_atom)return n.in_atom=!h(e),i(n,e,"atom");if(e.eatSpace())return i(n,e,"whitespace");if(!_(n)&&e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/))return u(e.current(),x)?i(n,e,"type"):i(n,e,"attribute");var r=e.next();if(r=="%")return e.skipToEnd(),i(n,e,"comment");if(r==":")return i(n,e,"colon");if(r=="?")return e.eatSpace(),e.eatWhile(p),i(n,e,"macro");if(r=="#")return e.eatSpace(),e.eatWhile(p),i(n,e,"record");if(r=="$")return e.next()=="\\"&&!e.match(j)?i(n,e,"error"):i(n,e,"number");if(r==".")return i(n,e,"dot");if(r=="'"){if(!(n.in_atom=!h(e))){if(e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),i(n,e,"fun");if(e.match(/\s*\(/,!1)||e.match(/\s*:/,!1))return i(n,e,"function")}return i(n,e,"atom")}if(r=='"')return n.in_string=!v(e),i(n,e,"string");if(/[A-Z_Ø-ÞÀ-Ö]/.test(r))return e.eatWhile(p),i(n,e,"variable");if(/[a-z_ß-öø-ÿ]/.test(r)){if(e.eatWhile(p),e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),i(n,e,"fun");var t=e.current();return u(t,z)?i(n,e,"keyword"):u(t,m)?i(n,e,"operator"):e.match(/\s*\(/,!1)?u(t,q)&&(_(n).token!=":"||_(n,2).token=="erlang")?i(n,e,"builtin"):u(t,P)?i(n,e,"guard"):i(n,e,"function"):D(e)==":"?t=="erlang"?i(n,e,"builtin"):i(n,e,"function"):u(t,["true","false"])?i(n,e,"boolean"):i(n,e,"atom")}var l=/[0-9]/,o=/[0-9a-zA-Z]/;return l.test(r)?(e.eatWhile(l),e.eat("#")?e.eatWhile(o)||e.backUp(1):e.eat(".")&&(e.eatWhile(l)?e.eat(/[eE]/)&&(e.eat(/[-+]/)?e.eatWhile(l)||e.backUp(2):e.eatWhile(l)||e.backUp(1)):e.backUp(1)),i(n,e,"number")):g(e,U,b)?i(n,e,"open_paren"):g(e,Z,y)?i(n,e,"close_paren"):k(e,E,T)?i(n,e,"separator"):k(e,R,A)?i(n,e,"operator"):i(n,e,null)}function g(e,n,r){if(e.current().length==1&&n.test(e.current())){for(e.backUp(1);n.test(e.peek());)if(e.next(),u(e.current(),r))return!0;e.backUp(e.current().length-1)}return!1}function k(e,n,r){if(e.current().length==1&&n.test(e.current())){for(;n.test(e.peek());)e.next();for(;0<e.current().length;){if(u(e.current(),r))return!0;e.backUp(1)}e.next()}return!1}function v(e){return w(e,'"',"\\")}function h(e){return w(e,"'","\\")}function w(e,n,r){for(;!e.eol();){var t=e.next();if(t==n)return!0;t==r&&e.next()}return!1}function D(e){var n=e.match(/^\s*([^\s%])/,!1);return n?n[1]:""}function u(e,n){return-1<n.indexOf(e)}function i(e,n,r){switch(N(e,I(r,n)),r){case"atom":return"atom";case"attribute":return"attribute";case"boolean":return"atom";case"builtin":return"builtin";case"close_paren":return null;case"colon":return null;case"comment":return"comment";case"dot":return null;case"error":return"error";case"fun":return"meta";case"function":return"tag";case"guard":return"property";case"keyword":return"keyword";case"macro":return"macroName";case"number":return"number";case"open_paren":return null;case"operator":return"operator";case"record":return"bracket";case"separator":return null;case"string":return"string";case"type":return"def";case"variable":return"variable";default:return null}}function S(e,n,r,t){return{token:e,column:n,indent:r,type:t}}function I(e,n){return S(n.current(),n.column(),n.indentation(),e)}function L(e){return S(e,0,0,e)}function _(e,n){var r=e.tokenStack.length,t=n||1;return r<t?!1:e.tokenStack[r-t]}function N(e,n){n.type=="comment"||n.type=="whitespace"||(e.tokenStack=O(e.tokenStack,n),e.tokenStack=$(e.tokenStack))}function O(e,n){var r=e.length-1;return 0<r&&e[r].type==="record"&&n.type==="dot"?e.pop():(0<r&&e[r].type==="group"&&e.pop(),e.push(n)),e}function $(e){if(!e.length)return e;var n=e.length-1;if(e[n].type==="dot")return[];if(n>1&&e[n].type==="fun"&&e[n-1].token==="fun")return e.slice(0,n-1);switch(e[n].token){case"}":return a(e,{g:["{"]});case"]":return a(e,{i:["["]});case")":return a(e,{i:["("]});case">>":return a(e,{i:["<<"]});case"end":return a(e,{i:["begin","case","fun","if","receive","try"]});case",":return a(e,{e:["begin","try","when","->",",","(","[","{","<<"]});case"->":return a(e,{r:["when"],m:["try","if","case","receive"]});case";":return a(e,{E:["case","fun","if","receive","try","when"]});case"catch":return a(e,{e:["try"]});case"of":return a(e,{e:["case"]});case"after":return a(e,{e:["receive","try"]});default:return e}}function a(e,n){for(var r in n)for(var t=e.length-1,l=n[r],o=t-1;-1<o;o--)if(u(e[o].token,l)){var c=e.slice(0,o);switch(r){case"m":return c.concat(e[o]).concat(e[t]);case"r":return c.concat(e[t]);case"i":return c;case"g":return c.concat(L("group"));case"E":return c.concat(e[o]);case"e":return c.concat(e[o])}}return r=="E"?[]:e}function B(e,n,r){var t,l=C(n),o=_(e,1),c=_(e,2);return e.in_string||e.in_atom?null:c?o.token=="when"?o.column+r.unit:l==="when"&&c.type==="function"?c.indent+r.unit:l==="("&&o.token==="fun"?o.column+3:l==="catch"&&(t=s(e,["try"]))?t.column:u(l,["end","after","of"])?(t=s(e,["begin","case","fun","if","receive","try"]),t?t.column:null):u(l,y)?(t=s(e,b),t?t.column:null):u(o.token,[",","|","||"])||u(l,[",","|","||"])?(t=F(e),t?t.column+t.token.length:r.unit):o.token=="->"?u(c.token,["receive","case","if","try"])?c.column+r.unit+r.unit:c.column+r.unit:u(o.token,b)?o.column+o.token.length:(t=G(e),f(t)?t.column+r.unit:0):0}function C(e){var n=e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);return f(n)&&n.index===0?n[0]:""}function F(e){var n=e.tokenStack.slice(0,-1),r=d(n,"type",["open_paren"]);return f(n[r])?n[r]:!1}function G(e){var n=e.tokenStack,r=d(n,"type",["open_paren","separator","keyword"]),t=d(n,"type",["operator"]);return f(r)&&f(t)&&r<t?n[r+1]:f(r)?n[r]:!1}function s(e,n){var r=e.tokenStack,t=d(r,"token",n);return f(r[t])?r[t]:!1}function d(e,n,r){for(var t=e.length-1;-1<t;t--)if(u(e[t][n],r))return t;return!1}function f(e){return e!==!1&&e!=null}const H={name:"erlang",startState(){return{tokenStack:[],in_string:!1,in_atom:!1}},token:Q,indent:B,languageData:{commentTokens:{line:"%"}}},M={language:()=>W.define(H),ext:"erl"};export{M as default};
