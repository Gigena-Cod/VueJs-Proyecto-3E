"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[547],{547:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pt-8 pl-20 bg-gradient-to-r from-red-400 to-red-600 h-screen",attrs:{id:"register"}},[r("div",{staticClass:"text-4xl w-full text-white  border-b border-white mb-8 pb-4  mx-auto  font-bold title"},[e._v(" Registrarse ")]),r("Register")],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"form"}},[r("form",{staticClass:"w-4/5 mx-auto px-4 py-8 md:w1/2 lg:w-1/3 rounded-xl bg-white",attrs:{id:"register"},on:{submit:function(t){return t.preventDefault(),e.registrar.apply(null,arguments)}}},[r("div",{staticClass:"flex flex-col items-start mb-4 nombre"},[r("label",{staticClass:"mb-2 text-gray-500 ",attrs:{for:"username"}},[e._v("Nombre")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.nombre,expression:"nombre"}],staticClass:"px-4 h-10 border border-gray-600 rounded-xl w-full",attrs:{type:"text",id:"nombre",required:""},domProps:{value:e.nombre},on:{input:function(t){t.target.composing||(e.nombre=t.target.value)}}})]),r("div",{staticClass:"flex flex-col items-start mb-4 nombre"},[r("label",{staticClass:"mb-2 text-gray-500 ",attrs:{for:"username"}},[e._v("Apellido")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.apellido,expression:"apellido"}],staticClass:"px-4 h-10 border border-gray-600 rounded-xl w-full",attrs:{type:"text",id:"apellido",required:""},domProps:{value:e.apellido},on:{input:function(t){t.target.composing||(e.apellido=t.target.value)}}})]),r("div",{staticClass:"flex flex-col items-start mb-4 username"},[r("label",{staticClass:"mb-2 text-gray-500 ",attrs:{for:"username"}},[e._v("Usuario")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"px-4 h-10 border border-gray-600 rounded-xl w-full",attrs:{type:"text",id:"username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),r("div",{staticClass:"flex flex-col items-start mb-4 password"},[r("label",{staticClass:"mb-2 text-gray-500 ",attrs:{for:"password"}},[e._v("Contraseña")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"px-4 h-10 border border-gray-600 rounded-xl w-full",attrs:{type:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("div",{staticClass:"flex flex-col items-start  justify-center  mx-auto rol"},[r("label",{staticClass:"mb-2 text-gray-500 ",attrs:{for:"password"}},[e._v("Rol")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.rol,expression:"rol"}],staticClass:"px-4 h-10 border border-gray-600 rounded-xl w-full",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.rol=t.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",value:""}},[e._v("Seleccione un rol")]),r("option",[e._v("Cliente")]),r("option",[e._v("Comercio")])])]),r("input",{staticClass:"mt-10   bg-emerald-500 text-white cursor-pointer text-center w-full  h-10  border border-gray-600 rounded-xl items-start button",class:"mt-5 : error",attrs:{type:"submit",value:"Registrarse"}})]),e.status?r("div",{staticClass:"h-screen w-screen absolute top-0 pt-56 bg-slate-900 bg-opacity-25 mensaje"},[r("div",{staticClass:"shadow-2xl flex flex-wrap justify-center m-auto w-96 py-4 bg-white rounded-xl",attrs:{id:"correct"}},[r("div",{staticClass:"w-full texto"},[e._v(" Registro realizado correctamente ")]),r("div",{staticClass:"bg-emerald-500 text-white w-28 rounded-md py-1 mt-4 cursor-pointer hover:bg-emerald-600 boton",on:{click:e.redirect}},[e._v(" Aceptar ")])])]):e._e()])},l=[],n=r(6198),i=(r(8975),r(6166)),u=r.n(i),d={name:"RegisterComponent",data:function(){return{status:!1,nombre:"",apellido:"",username:"",password:"",rol:""}},methods:{registrar:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){var r,a,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={nombre:e.nombre,apellido:e.apellido,username:e.username,password:e.password,rol:e.rol},a="/register",t.next=4,u().post(a,r);case 4:return s=t.sent,t.next=7,s.data;case 7:o=t.sent,o&&(e.status=!0);case 9:case"end":return t.stop()}}),t)})))()},redirect:function(){this.$router.push({name:"login"})}}},m=d,c=r(1001),p=(0,c.Z)(m,o,l,!1,null,null,null),v=p.exports,b={name:"RegisterView",components:{Register:v}},f=b,x=(0,c.Z)(f,a,s,!1,null,null,null),g=x.exports}}]);
//# sourceMappingURL=547-legacy.7b346edc.js.map