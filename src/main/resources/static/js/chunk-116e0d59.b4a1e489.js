(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-116e0d59"],{"2bfd":function(t,e,i){},5311:function(t,e,i){"use strict";var s=i("5607"),n=i("2b0e");e["a"]=n["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},7212:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{color:"blue-grey darken-1",dark:"",loading:t.isUpdating},scopedSlots:t._u([{key:"progress",fn:function(){return[i("v-progress-linear",{attrs:{absolute:"",color:"green lighten-3",height:"4",indeterminate:""}})]},proxy:!0}])},[i("v-img",{attrs:{height:"200",src:"https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"}},[i("v-row",[i("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[i("v-menu",{attrs:{bottom:"",left:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),s),[i("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[i("v-list",[i("v-list-item",{on:{click:function(e){t.isUpdating=!0}}},[i("v-list-item-action",[i("v-icon",[t._v("mdi-cog")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Update")])],1)],1)],1)],1)],1),i("v-row",{staticClass:"pa-4",attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"text-center"},[i("h3",{staticClass:"text-h5"},[t._v(" "+t._s(t.name)+" ")]),i("span",{staticClass:"grey--text text--lighten-1"},[t._v(t._s(t.title))])])],1)],1)],1),i("v-form",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{disabled:t.isUpdating,filled:"",color:"blue-grey lighten-2",label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{disabled:t.isUpdating,filled:"",color:"blue-grey lighten-2",label:"Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{disabled:t.isUpdating,filled:"",color:"blue-grey lighten-2",label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{disabled:t.isUpdating,filled:"",color:"blue-grey lighten-2",label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{disabled:t.isUpdating,filled:"",color:"blue-grey lighten-2",label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{disabled:t.isUpdating,filled:"",color:"blue-grey lighten-2",label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{disabled:t.isUpdating,filled:"",color:"blue-grey lighten-2",label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-autocomplete",{attrs:{disabled:t.isUpdating,items:t.people,filled:"",chips:"",color:"blue-grey lighten-2",label:"Select","item-text":"name","item-value":"name",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("v-chip",t._b({attrs:{"input-value":e.selected,close:""},on:{click:e.select,"click:close":function(i){return t.remove(e.item)}}},"v-chip",e.attrs,!1),[i("v-avatar",{attrs:{left:""}},[i("v-img",{attrs:{src:e.item.avatar}})],1),t._v(" "+t._s(e.item.name)+" ")],1)]}},{key:"item",fn:function(e){return["object"!==typeof e.item?[i("v-list-item-content",{domProps:{textContent:t._s(e.item)}})]:[i("v-list-item-avatar",[i("img",{attrs:{src:e.item.avatar}})]),i("v-list-item-content",[i("v-list-item-title",{domProps:{innerHTML:t._s(e.item.name)}}),i("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.item.group)}})],1)]]}}]),model:{value:t.friends,callback:function(e){t.friends=e},expression:"friends"}})],1)],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-switch",{staticClass:"mt-0",attrs:{disabled:t.isUpdating,color:"green lighten-2","hide-details":"",label:"Auto Update"},model:{value:t.autoUpdate,callback:function(e){t.autoUpdate=e},expression:"autoUpdate"}}),i("v-spacer"),i("v-btn",{attrs:{disabled:t.autoUpdate,loading:t.isUpdating,color:"blue-grey darken-3",depressed:""},on:{click:function(e){t.isUpdating=!0}}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi-update ")]),t._v(" Update Now ")],1)],1)],1)},n=[],a=(i("b0c0"),i("a434"),{data:function(){var t={1:"https://cdn.vuetifyjs.com/images/lists/1.jpg",2:"https://cdn.vuetifyjs.com/images/lists/2.jpg",3:"https://cdn.vuetifyjs.com/images/lists/3.jpg",4:"https://cdn.vuetifyjs.com/images/lists/4.jpg",5:"https://cdn.vuetifyjs.com/images/lists/5.jpg"};return{autoUpdate:!0,friends:["Sandra Adams","Britta Holt"],isUpdating:!1,name:"Midnight Crew",people:[{header:"Group 1"},{name:"Sandra Adams",group:"Group 1",avatar:t[1]},{name:"Ali Connors",group:"Group 1",avatar:t[2]},{name:"Trevor Hansen",group:"Group 1",avatar:t[3]},{name:"Tucker Smith",group:"Group 1",avatar:t[2]},{divider:!0},{header:"Group 2"},{name:"Britta Holt",group:"Group 2",avatar:t[4]},{name:"Jane Smith ",group:"Group 2",avatar:t[5]},{name:"John Smith",group:"Group 2",avatar:t[1]},{name:"Sandra Williams",group:"Group 2",avatar:t[3]}],title:"The summer breeze"}},watch:{isUpdating:function(t){var e=this;t&&setTimeout((function(){return e.isUpdating=!1}),3e3)}},methods:{remove:function(t){var e=this.friends.indexOf(t.name);e>=0&&this.friends.splice(e,1)}}}),l=a,o=i("2877"),r=i("6544"),c=i.n(r),u=i("5530"),h=(i("d81d"),i("4de4"),i("498a"),i("7db0"),i("caad"),i("2532"),i("2bfd"),i("b974")),d=i("8654"),p=i("d9f7"),m=i("80d2"),f=Object(u["a"])(Object(u["a"])({},h["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),v=h["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,i){return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:h["a"].options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(u["a"])(Object(u["a"])({},h["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var i=Object(m["n"])(e,t.itemText),s=null!=i?String(i):"";return t.filter(e,String(t.internalSearch),s)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=h["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(u["a"])(Object(u["a"])({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=h["a"].options.computed.listData.call(this);return t.props=Object(u["a"])(Object(u["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var i=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){i.internalSearch&&(1===t.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===m["s"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===m["s"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==m["s"].backspace&&t!==m["s"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var i=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===i){var s=this.selectedItems.length,n=t!==s-1?t:t-1,a=this.selectedItems[n];a?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=i}},clearableCallback:function(){this.internalSearch=null,h["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=d["a"].options.methods.genInput.call(this);return t.data=Object(p["a"])(t.data,{attrs:{"aria-activedescendant":Object(m["m"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(m["m"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=h["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?h["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,i=e.value;e.value&&this.activateMenu(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[m["s"].home,m["s"].end].includes(e)||h["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){h["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){h["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){h["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,i;if(-1!==this.selectedIndex){var s=this.selectedItems[this.selectedIndex],n=this.getText(s);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(i=t.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}}),g=i("8212"),b=i("8336"),I=i("b0af"),S=i("99d9"),y=i("cc20"),x=i("62ad"),C=i("a523"),V=i("ce7e"),w=i("4bd4"),k=i("132d"),D=i("adda"),j=i("8860"),_=i("da13"),A=i("1800"),O=i("8270"),U=i("5d23"),T=i("e449"),$=i("8e36"),L=i("0fd9"),F=i("2fa4"),M=i("15fd"),B=(i("0481"),i("ec29"),i("9d01"),i("fe09")),E=i("c37a"),P=i("c3f0"),z=i("0789"),G=i("490a"),N=["title"],K=B["a"].extend({name:"v-switch",directives:{Touch:P["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(u["a"])(Object(u["a"])({},E["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(M["a"])(t,N));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(u["a"])(Object(u["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(u["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(u["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(z["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(G["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===m["s"].left&&this.isActive||t.keyCode===m["s"].right&&!this.isActive)&&this.onChange()}}}),R=Object(o["a"])(l,s,n,!1,null,null,null);e["default"]=R.exports;c()(R,{VAutocomplete:v,VAvatar:g["a"],VBtn:b["a"],VCard:I["a"],VCardActions:S["a"],VChip:y["a"],VCol:x["a"],VContainer:C["a"],VDivider:V["a"],VForm:w["a"],VIcon:k["a"],VImg:D["a"],VList:j["a"],VListItem:_["a"],VListItemAction:A["a"],VListItemAvatar:O["a"],VListItemContent:U["a"],VListItemSubtitle:U["b"],VListItemTitle:U["c"],VMenu:T["a"],VProgressLinear:$["a"],VRow:L["a"],VSpacer:F["a"],VSwitch:K,VTextField:d["a"]})},"9d01":function(t,e,i){},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i("d3b7"),i("25f0"),i("4de4");var s=i("c37a"),n=i("5311"),a=i("8547"),l=i("58df");function o(t){t.preventDefault()}e["a"]=Object(l["a"])(s["a"],n["a"],a["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var s=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===s&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-116e0d59.b4a1e489.js.map