(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1e4i":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},"72Tc":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFieldButton <span class="token punctuation" >}</span> from <span class="token string" >\'./button-type.component\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      types<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          name<span class="token punctuation" >:</span> <span class="token string" >\'button\'</span><span class="token punctuation" >,</span>\n          component<span class="token punctuation" >:</span> FormlyFieldButton<span class="token punctuation" >,</span>\n          wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'form-field\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n          defaultOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n              btnType<span class="token punctuation" >:</span> <span class="token string" >\'default\'</span><span class="token punctuation" >,</span>\n              type<span class="token punctuation" >:</span> <span class="token string" >\'button\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n    FormlyFieldButton<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},"7gJl":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FieldType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-field-button',\n  template: `\n    <div>\n      <button [type]=\"to.type\" [ngClass]=\"'btn btn-' + to.btnType\" (click)=\"onClick($event)\">\n        {{ to.text }}\n      </button>\n    </div>\n  `,\n})\nexport class FormlyFieldButton extends FieldType {\n  onClick($event) {\n    if (this.to.onClick) {\n      this.to.onClick($event);\n    }\n  }\n}\n"},"Hb+O":function(n,s,a){"use strict";a.r(s);var t=a("CcnG"),p=a("gIcY"),o=function(){function n(){var n=this;this.form=new p.FormGroup({}),this.options={},this.model={someInput:""},this.fields=[{type:"button",templateOptions:{text:"With Function",onClick:function(n){return alert("You clicked me!")}}},{type:"button",templateOptions:{label:"Click this guy",text:"JSON Only",btnType:"info",onClick:function(s){n.form.get("someInput").setValue("clicked!")},description:"These can have labels and stuff too if you want...."}},{key:"someInput",type:"input",templateOptions:{label:"Some Input"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Buttons",description:"\n              This demonstrates a type for buttons. Specifically using bootstrap but this could easily be adapted for other frameworks\n            ",component:o,files:[{file:"app.component.html",content:a("wed3"),filecontent:a("1e4i")},{file:"app.component.ts",content:a("exF6"),filecontent:a("SJFx")},{file:"button-type.component.ts",content:a("zMya"),filecontent:a("7gJl")},{file:"app.module.ts",content:a("72Tc"),filecontent:a("vFJz")}]}]},l=function(){},c=a("NcP4"),u=a("goW2"),i=a("MT1c"),r=a("1Q/V"),k=a("9+aI"),m=a("haId"),d=a("LJsP"),f=a("yR2A"),y=a("grA4"),g=a("UFMs"),b=a("Ip0R"),F=a("mrSG"),v=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(F.__extends)(s,n),s.prototype.onClick=function(n){this.to.onClick&&this.to.onClick(n)},s}(a("HkYz").b),C=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"button",[],[[8,"type",0]],[[null,"click"]],function(n,s,a){var t=!0;return"click"===s&&(t=!1!==n.component.onClick(a)&&t),t},null,null)),t["\u0275did"](2,278528,null,0,b.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),(n()(),t["\u0275ted"](3,null,[" "," "]))],function(n,s){n(s,2,0,"btn btn-"+s.component.to.btnType)},function(n,s){var a=s.component;n(s,1,0,a.to.type),n(s,3,0,a.to.text)})}var h=t["\u0275ccf"]("formly-field-button",v,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-field-button",[],null,null,null,w,C)),t["\u0275did"](1,49152,null,0,v,[],null,null)],null,null)},{form:"form",field:"field",options:"options",model:"model"},{},[]),x=a("pMnS"),O=a("4o01"),M=a("Dl9q"),S=a("9Glx"),_=a("UcnZ"),T=a("wdLZ"),I=a("DAbo"),N=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,2).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,M.b,M.a)),t["\u0275did"](6,966656,null,0,S.a,[_.a,T.a,I.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,S.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,6,0,a.model,a.form,a.fields,a.options)},function(n,s){n(s,0,0,t["\u0275nov"](s,4).ngClassUntouched,t["\u0275nov"](s,4).ngClassTouched,t["\u0275nov"](s,4).ngClassPristine,t["\u0275nov"](s,4).ngClassDirty,t["\u0275nov"](s,4).ngClassValid,t["\u0275nov"](s,4).ngClassInvalid,t["\u0275nov"](s,4).ngClassPending)})}var A=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,R,N)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),B=a("M2Lx"),G=a("eDkP"),J=a("Fzqc"),L=a("v9Dh"),D=a("6LlJ"),z=a("F6kA"),$=a("dWZg"),U=a("lLAP"),W=a("4c35"),Y=a("qAlS"),P=a("Wf4p"),V=a("La40"),Q=a("SMsm"),Z=a("UodH"),q=a("5QwG"),E=a("AMrk"),j=a("me7w"),H=a("N3PW"),K=a("l4pn"),X=a("Fv2i"),nn=a("wBYW"),sn=a("IE48"),an=a("zn1Q"),tn=a("Q4Tx"),pn=a("zdmU"),on=a("XR12"),en=a("Nsh5"),ln=a("8mMr"),cn=a("LC5p"),un=a("0/Q6"),rn=a("mqvi"),kn=a("lYui"),mn=a("1ey0"),dn=function(){},fn=a("ZYCi"),yn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return gn});var gn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,k.a,m.a,d.a,f.a,y.a,g.a,h,x.a,O.a,A]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[t.LOCALE_ID,[2,b["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,B.c,B.c,[]),t["\u0275mpd"](4608,G.c,G.c,[G.i,G.e,t.ComponentFactoryResolver,G.h,G.f,t.Injector,t.NgZone,b.DOCUMENT,J.b]),t["\u0275mpd"](5120,G.j,G.k,[G.c]),t["\u0275mpd"](5120,L.b,L.c,[G.c]),t["\u0275mpd"](4608,D.a,D.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,z.a,z.a,[]),t["\u0275mpd"](4608,_.a,_.a,[I.b,T.a]),t["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),t["\u0275mpd"](1073742336,$.b,$.b,[]),t["\u0275mpd"](1073742336,B.d,B.d,[]),t["\u0275mpd"](1073742336,U.a,U.a,[]),t["\u0275mpd"](1073742336,J.a,J.a,[]),t["\u0275mpd"](1073742336,W.g,W.g,[]),t["\u0275mpd"](1073742336,Y.b,Y.b,[]),t["\u0275mpd"](1073742336,G.g,G.g,[]),t["\u0275mpd"](1073742336,P.l,P.l,[[2,P.d]]),t["\u0275mpd"](1073742336,L.e,L.e,[]),t["\u0275mpd"](1073742336,P.w,P.w,[]),t["\u0275mpd"](1073742336,V.i,V.i,[]),t["\u0275mpd"](1073742336,Q.b,Q.b,[]),t["\u0275mpd"](1073742336,Z.c,Z.c,[]),t["\u0275mpd"](1073742336,q.b,q.b,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](512,I.b,I.b,[]),t["\u0275mpd"](1024,I.a,function(){return[{types:[{name:"formly-group",component:E.a}]},{types:[{name:"input",component:j.a,wrappers:["form-field"]},{name:"checkbox",component:H.a,wrappers:["form-field"],defaultOptions:{templateOptions:{indeterminate:!0,hideLabel:!0}}},{name:"radio",component:K.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:X.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:nn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:sn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"addons",component:an.a},{name:"form-field",component:tn.a}],manipulators:[{class:pn.a,method:"run"}]},{types:[{name:"formly-group",component:E.a}]},{types:[{name:"button",component:v,wrappers:["form-field"],defaultOptions:{templateOptions:{btnType:"default",type:"button"}}}]}]},[]),t["\u0275mpd"](1073742336,on.a,on.a,[I.b,t.ComponentFactoryResolver,[2,I.a]]),t["\u0275mpd"](1073742336,en.h,en.h,[]),t["\u0275mpd"](1073742336,ln.b,ln.b,[]),t["\u0275mpd"](1073742336,P.m,P.m,[]),t["\u0275mpd"](1073742336,P.u,P.u,[]),t["\u0275mpd"](1073742336,cn.b,cn.b,[]),t["\u0275mpd"](1073742336,un.c,un.c,[]),t["\u0275mpd"](1073742336,rn.a,rn.a,[]),t["\u0275mpd"](1073742336,kn.a,kn.a,[]),t["\u0275mpd"](1073742336,mn.a,mn.a,[]),t["\u0275mpd"](1073742336,dn,dn,[]),t["\u0275mpd"](1073742336,fn.s,fn.s,[[2,fn.y],[2,fn.p]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,fn.n,function(){return[[{path:"",component:yn.a,data:e}]]},[])])})},SJFx:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  options: FormlyFormOptions = {};\n  model = { someInput: '' };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      type: 'button',\n      templateOptions: {\n        text: 'With Function',\n        onClick: ($event) => alert('You clicked me!'),\n      },\n    },\n    {\n      type: 'button',\n      templateOptions: {\n        label: 'Click this guy',\n        text: 'JSON Only',\n        btnType: 'info',\n        onClick: ($event) => {\n          this.form.get('someInput').setValue('clicked!');\n        },\n        description: 'These can have labels and stuff too if you want....',\n      },\n    },\n    {\n      key: 'someInput',\n      type: 'input',\n      templateOptions: {\n        label: 'Some Input',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},exF6:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  model <span class="token operator" >=</span> <span class="token punctuation" >{</span> someInput<span class="token punctuation" >:</span> <span class="token string" >\'\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'button\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        text<span class="token punctuation" >:</span> <span class="token string" >\'With Function\'</span><span class="token punctuation" >,</span>\n        onClick<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'You clicked me!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'button\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Click this guy\'</span><span class="token punctuation" >,</span>\n        text<span class="token punctuation" >:</span> <span class="token string" >\'JSON Only\'</span><span class="token punctuation" >,</span>\n        btnType<span class="token punctuation" >:</span> <span class="token string" >\'info\'</span><span class="token punctuation" >,</span>\n        onClick<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span><span class="token keyword" >get</span><span class="token punctuation" >(</span><span class="token string" >\'someInput\'</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >setValue</span><span class="token punctuation" >(</span><span class="token string" >\'clicked!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        description<span class="token punctuation" >:</span> <span class="token string" >\'These can have labels and stuff too if you want....\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'someInput\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Some Input\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},vFJz:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { FormlyFieldButton } from './button-type.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        {\n          name: 'button',\n          component: FormlyFieldButton,\n          wrappers: ['form-field'],\n          defaultOptions: {\n            templateOptions: {\n              btnType: 'default',\n              type: 'button',\n            },\n          },\n        },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyFieldButton,\n  ],\n})\nexport class AppModule { }\n"},wed3:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},zMya:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FieldType <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-field-button\'</span><span class="token punctuation" >,</span>\n  template<span class="token punctuation" >:</span> `\n    <span class="token operator" >&lt;</span>div<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>button <span class="token punctuation" >[</span>type<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"to.type"</span> <span class="token punctuation" >[</span>ngClass<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"\'btn btn-\' + to.btnType"</span> <span class="token punctuation" >(</span>click<span class="token punctuation" >)</span><span class="token operator" >=</span><span class="token string" >"onClick($event)"</span><span class="token operator" >></span>\n        <span class="token punctuation" >{</span><span class="token punctuation" >{</span> to<span class="token punctuation" >.</span>text <span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>button<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n  `<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >FormlyFieldButton</span> <span class="token keyword" >extends</span> <span class="token class-name" >FieldType</span> <span class="token punctuation" >{</span>\n  <span class="token function" >onClick</span><span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>to<span class="token punctuation" >.</span>onClick<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>to<span class="token punctuation" >.</span><span class="token function" >onClick</span><span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'}}]);