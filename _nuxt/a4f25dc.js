(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{282:function(t,e,n){"use strict";var r=n(204);e.a=r.a},426:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h}));var r=n(442),o=n(1),l=Object(o.j)("v-card__actions"),c=Object(o.j)("v-card__subtitle"),d=Object(o.j)("v-card__text"),h=Object(o.j)("v-card__title");r.a},442:function(t,e,n){"use strict";n(9),n(5),n(7),n(14),n(8),n(15);var r=n(2),o=(n(25),n(200),n(444),n(205)),l=n(480),c=n(81),d=n(11);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},444:function(t,e,n){var content=n(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("e23b7040",content,!0,{sourceMap:!1})},463:function(t,e,n){var r=n(12)(!1);r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=r},468:function(t,e,n){"use strict";n(196);var r=n(197);e.a=Object(r.a)("flex")},471:function(t,e,n){var content=n(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("50788f08",content,!0,{sourceMap:!1})},472:function(t,e,n){var r=n(12)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},474:function(t,e,n){"use strict";var r=n(2),o=(n(47),n(57),n(202),n(7),n(8),n(56),n(115),n(9),n(5),n(14),n(15),n(11)),l=n(86),c=n(118);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},507:function(t,e,n){"use strict";n(9),n(5),n(14),n(8),n(15);var r=n(2),o=(n(58),n(7),n(59),n(115),n(47),n(57),n(471),n(500)),l=n(501),c=n(78),d=n(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=f(f({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return m}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},m),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.y.backspace&&t!==d.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.y.home,d.y.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(e=t.clipboardData)||e.setData("text/plain",o),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},518:function(t,e,n){"use strict";n.r(e);n(47),n(57),n(19),n(37),n(56),n(8);var r={name:"FormIn",props:{formTitle:{type:String,default:""},alias:{type:String,default:""},itemYesNo:{type:Array,default:function(){return[]}},itemBilling:{type:Array,default:function(){return[]}},employee:{type:Array,default:function(){return[]}}},data:function(){return{dialog:!1,loading:!1,submitLoad:!1,menu3:"",menu2:"",menu1:"",url:"",httpMethod:"get",form:{},attachment:"",defaultForm:{},entries:this.employee,isLoading:!1,model:null,model2:null,search:null,disabled:!0,leaveLists:[],dataVisitArea:this.$auth.$storage.getLocalStorage("visitArea"),dataFacilities:this.$auth.$storage.getLocalStorage("facilities")}},methods:{changeSelect:function(){"Karyawan"===this.form.for_self&&(this.disabled=!1)},checkFacilities:function(){if(this.form.facilities)return!!this.form.facilities.includes("Other")},changeFieldDetail:function(){this.$refs.childDetails.insertRow(0,this.form)},getDataEmployee:function(){var t=this;this.isLoading=!0,this.$axios.get("/api/master/employees",{params:{alias:this.alias}}).then((function(e){t.entries=e.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(){return t.isLoading=!1}))},changeData:function(){this.form.user_name=this.model.Name,this.form.id_card=this.model.Nik,this.form.occupation=this.model.JobPosition,this.form.company=this.model.Company,this.form.address=this.model.AlamatKTP,this.form.department=this.model.Department,this.form.company_email=this.model.OfficeEmailAddress,this.form.no_hp=this.model.MobilePhone,this.form.work_location=this.model.WorkLocation},changeDataLeave:function(){this.form.leave_from_to=this.model2.date_from_to,this.form.reference_number=this.model2.DocumentReferenceNumber},setLeaveList:function(data){this.leaveLists=data},setForm:function(form,t,e,n){var r=this;this.httpMethod=t,this.disabled=!0,this.form=Object.assign({},form),"post"===t?(this.disabled=!1,this.form.for_self=e,this.form.paper_date=(new Date).toISOString().substr(0,10),this.$refs.childDetails.setDataToDetails([]),this.$refs.childDetails.setDataToHttpMethod(t)):(this.$refs.childDetails.setDataToDetails(n),this.$refs.childDetails.setDataToHttpMethod(t),setTimeout((function(){r.form=Object.assign({},form),r.form.for_self=e}),300))},close:function(){this.$emit("close")},selectFile:function(){this.attachment=this.$refs.files.files},save:function(){var t=this,e={},details=this.$refs.childDetails.getDetailSourceData();details.forEach((function(n,r){t.$refs.childDetails.checkEmptyRow(r)||(e[r]=n)})),this.$emit("save",{form:this.form,defaultForm:this.defaultForm,details:details})}}},o=n(52),l=n(71),c=n.n(l),d=n(507),h=n(204),f=n(442),m=n(426),v=n(526),_=n(468),x=n(474),y=n(476),I=n(32),k=n(593),w=n(500),O=n(424),S=n(501),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.formTitle)}})]),t._v(" "),n("v-card-text",[n("v-form",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"No",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.paper_no,callback:function(e){t.$set(t.form,"paper_no",e)},expression:"form.paper_no"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{label:"Company Host",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.host_company,callback:function(e){t.$set(t.form,"host_company",e)},expression:"form.host_company"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md2:"",xs12:""}},[n("v-text-field",{attrs:{label:"Visitor Company",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.visitor_company,callback:function(e){t.$set(t.form,"visitor_company",e)},expression:"form.visitor_company"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md2:"",xs12:""}},[n("v-menu",{ref:"menu1",attrs:{readonly:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"From Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.date_in,callback:function(e){t.$set(t.form,"date_in",e)},expression:"form.date_in"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),n("v-date-picker",{attrs:{readonly:t.disabled,"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.form.date_in,callback:function(e){t.$set(t.form,"date_in",e)},expression:"form.date_in"}})],1)],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md2:"",xs12:""}},[n("v-menu",{ref:"menu2",attrs:{readonly:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"To Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.date_out,callback:function(e){t.$set(t.form,"date_out",e)},expression:"form.date_out"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),n("v-date-picker",{attrs:{readonly:t.disabled,"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.form.date_out,callback:function(e){t.$set(t.form,"date_out",e)},expression:"form.date_out"}})],1)],1),t._v(" "),"post"===t.httpMethod?n("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md3:""}},[n("v-autocomplete",{attrs:{items:t.entries,loading:t.isLoading,"item-text":"Name","item-value":"Name","hide-no-data":"","hide-selected":"",label:"Company Officer",outlined:"",dense:"","hide-details":"auto","return-object":""},on:{change:t.changeData},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(r.Name)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{textContent:t._s(r.Nik)}})],1)]}}],null,!1,2545025527),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1):t._e(),t._v(" "),"patch"===t.httpMethod?n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Company Officer",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.user_name,callback:function(e){t.$set(t.form,"user_name",e)},expression:"form.user_name"}})],1):t._e(),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Mobile Phone",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.no_hp,callback:function(e){t.$set(t.form,"no_hp",e)},expression:"form.no_hp"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Email",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.company_email,callback:function(e){t.$set(t.form,"company_email",e)},expression:"form.company_email"}})],1),t._v(" "),"patch"===t.httpMethod?n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Plan Visit Area",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.plan_visit_area,callback:function(e){t.$set(t.form,"plan_visit_area",e)},expression:"form.plan_visit_area"}})],1):t._e(),t._v(" "),"post"===t.httpMethod?n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-select",{attrs:{items:t.dataVisitArea,readonly:t.disabled,label:"Plan Visit Area",outlined:"",dense:"",multiple:"","persistent-hint":"","hide-details":"auto"},model:{value:t.form.plan_visit_area,callback:function(e){t.$set(t.form,"plan_visit_area",e)},expression:"form.plan_visit_area"}})],1):t._e(),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Visitor Officer",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.visitor_officer,callback:function(e){t.$set(t.form,"visitor_officer",e)},expression:"form.visitor_officer"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Visitor Mobile Phone",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.visitor_no_hp,callback:function(e){t.$set(t.form,"visitor_no_hp",e)},expression:"form.visitor_no_hp"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Visitor Email",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.visitor_email,callback:function(e){t.$set(t.form,"visitor_email",e)},expression:"form.visitor_email"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Visitor Address",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.visitor_address,callback:function(e){t.$set(t.form,"visitor_address",e)},expression:"form.visitor_address"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Purpose Visit",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.purpose_visit,callback:function(e){t.$set(t.form,"purpose_visit",e)},expression:"form.purpose_visit"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md1:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Total Guest",outlined:"",dense:"","hide-details":"auto"},on:{change:function(e){return t.changeFieldDetail()},mouseup:function(e){return t.changeFieldDetail()}},model:{value:t.form.total_guest,callback:function(e){t.$set(t.form,"total_guest",e)},expression:"form.total_guest"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md2:"",xs12:""}},[n("v-menu",{ref:"menu3",attrs:{readonly:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Reservation Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[t._v(" "),n("v-date-picker",{attrs:{readonly:t.disabled,"no-title":""},on:{input:function(e){t.menu3=!1}},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}})],1)],1),t._v(" "),"post"===t.httpMethod?n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-select",{attrs:{items:t.dataFacilities,readonly:t.disabled,label:"Requested Facilities",outlined:"",dense:"",multiple:"","persistent-hint":"","hide-details":"auto"},model:{value:t.form.facilities,callback:function(e){t.$set(t.form,"facilities",e)},expression:"form.facilities"}})],1):t._e(),t._v(" "),"patch"===t.httpMethod?n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Requested Facilities",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.facilities,callback:function(e){t.$set(t.form,"facilities",e)},expression:"form.facilities"}})],1):t._e(),t._v(" "),t.checkFacilities()?n("v-flex",{staticClass:"pa-2",attrs:{md3:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Other Facilities",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.other_facilities,callback:function(e){t.$set(t.form,"other_facilities",e)},expression:"form.other_facilities"}})],1):t._e(),t._v(" "),n("div",{staticClass:"scroll-container-mini"},[n("LazyPaperGuestVisit",{ref:"childDetails"})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md6:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"Notes",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.notes,callback:function(e){t.$set(t.form,"notes",e)},expression:"form.notes"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md2:"",xs12:""}},[n("v-text-field",{attrs:{readonly:t.disabled,label:"All Cost borne by",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.cost_cover,callback:function(e){t.$set(t.form,"cost_cover",e)},expression:"form.cost_cover"}})],1)],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){return t.close()}}},[t._v("\n      Close\n    ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",disabled:t.disabled,loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n      Save\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAutocomplete:d.a,VBtn:h.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VDatePicker:v.a,VFlex:_.a,VForm:x.a,VLayout:y.a,VListItemContent:I.a,VListItemSubtitle:I.b,VListItemTitle:I.c,VMenu:k.a,VSelect:w.a,VSpacer:O.a,VTextField:S.a})}}]);