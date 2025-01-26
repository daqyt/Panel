import{a$ as d,d as I,e as l,f as _,cg as c,k as n,aL as S,ch as y,ci as N,bF as q,i as L,u as R,w as B,aG as D}from"./index-CBmakSG_.js";import{P as M}from"./index-Dhh4hmB1.js";const V=()=>d.request("get","/get-group-list"),$=()=>d.request("get","/get-friend-list"),U=(u,g)=>d.request("post",`/setting/${u}`,{data:g}),W=u=>d.request("get","/get-guoba-data",{params:{plugin:u}}),j=I({__name:"plusForm",props:{pluginName:{type:String,required:!0},loading:{type:Boolean,default:!1}},emits:["update:loading"],setup(u,{expose:g,emit:h}){const m=u,G=l(window.innerWidth>768?"right":"top"),x=h,w=_({get:()=>m.loading,set:a=>x("update:loading",a)}),f=l(null),p=l(null),P=l(null);W(m.pluginName).then(a=>{p.value=c(a.data,!0),P.value=c(a.data,!0),f.value=a.schemas,f.value.forEach(t=>{var i;const e={label:t.label,prop:t.field,colProps:{span:24,className:"w-[80%]"},tooltip:t.helpMessage,renderLabel:C};switch(e.fieldProps={},t.componentProps&&(e.fieldProps.placeholder=t.componentProps.placeholder),t.component){case"InputPassword":e.fieldProps.type="password";case"InputTextArea":(i=e.fieldProps).type||(i.type="textarea");case"Input":e.valueType="input",e.fieldProps.clearable=!0;break;case"InputNumber":e.valueType="input-number",e.fieldProps.controlsPosition="right",e.renderField=(o,s)=>n(N,{value:o,onChange:s,class:"w-[51%]"});break;case"Select":e.valueType="select",e.renderField=(o,s)=>n(y,{value:o,onChange:s,filterable:!0,tagType:"primary",clearable:!0,multiple:t.componentProps.mode==="multiple"||t.componentProps.multiple,options:t.componentProps.options});break;case"RadioGroup":e.valueType="radio",e.options=t.componentProps.options;break;case"Checkbox":e.valueType="checkbox",e.options=t.componentProps.options;case"Switch":e.valueType="switch";break;case"Slider":e.valueType="slider";break;case"Rate":e.valueType="rate";break;case"SOFT_GROUP_BEGIN":case"Divider":r.columns.length>0&&(b.value.push(c(r,!0)),r.columns=[],r.title=""),r.title=t.label;return;case"GSelectGroup":case"GSelectFriend":{const o=l([]);(t.component==="GSelectGroup"?V():$()).then(s=>{o.value=s.data}).catch(()=>{}),e.renderField=(s,A)=>n(y,{value:s,onChange:A,filterable:!0,tagType:"primary",clearable:!0,multiple:!0,options:o.value});break}case"GTags":e.valueType="plus-input-tag",e.fieldProps={...e.fieldProps,trigger:["blur","enter"],inputProps:{placeholder:"输入内容后按回车或别处进行添加"},formatTag(o){return o.length>20?`${o.slice(0,20)}...`:o}};break;case"GSubForm":case"GColorPicker":case"EasyCron":case"InputGroup":case"InputSearch":case"InputCountDown":case"ApiSelect":case"TreeSelect":case"ApiTree":case"ApiTreeSelect":case"ApiRadioGroup":case"RadioButtonGroup":case"AutoComplete":case"ApiCascader":case"CheckboxGroup":case"Cascader":case"DatePicker":case"MonthPicker":case"RangePicker":case"WeekPicker":case"TimePicker":case"StrengthMeter":case"Upload":case"IconPicker":case"ApiTransfer":default:e.renderField=(o,s)=>n(S,{type:"warning"},"暂未适配本组件");break}t.bottomHelpMessage&&(e.renderExtra=()=>t.bottomHelpMessage,e.colProps.className+=" __mb-0 "),e.fieldProps={...e.fieldProps,...t.componentProps},e.fieldSlots={...e.fieldSlots,suffix:()=>{var o;return(o=t.componentProps)==null?void 0:o.addonAfter},prefix:()=>{var o;return(o=t.componentProps)==null?void 0:o.addonBefore}},r.columns.push(e),t.required&&(v.value[t.field]=[{required:!0,message:`请输入 ${t.label}`}])}),r.columns.length>0&&b.value.push(r),w.value=!1});const v=l({}),b=l([]),C=a=>n(q,{content:a,placement:"top",effect:"light"},[n(S,{truncated:!0,class:"max-w-[190px] text-right"},a),n("br")]),r={title:"",columns:[]},E=l(!1),k=()=>{const a={};f.value.forEach(t=>{t.field&&(a[t.field]=t.field.split(".").reduce((e,i)=>e&&e[i],p.value))}),U(m.pluginName,a).then(t=>{D(t.message,{type:"success",customClass:"el"})})},F=()=>{},T=()=>{p.value=c(P.value,!0)};return g({getData:T,submit:k}),(a,t)=>(L(),R(B(M),{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=e=>p.value=e),rules:v.value,group:b.value,"inline-message":"","label-position":G.value,resetText:"重置",submitText:"保存",footerAlign:"center",class:"mt-5",labelWidth:"30%",submitLoading:E.value,onSubmit:k,onSubmitError:F,onReset:T},null,8,["modelValue","rules","group","label-position","submitLoading"]))}});export{j as _};
