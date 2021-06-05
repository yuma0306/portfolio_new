// Mailform Pro Javascript Libraryは正常に動作しています。
//
// SYNCK GRAPHICA
// mailformpro language file
// 2014-04-10 ver 4.1.3
//
var mfpLang = {
'ResetConfirm': '入力された内容をリセットしてもよろしいですか？',
'Price': '$1 <span>円</span>',
'PostPrice': '$1 円',
'ButtonSend': '送信する',
'ButtonCancel': 'キャンセル',
'ButtonNext': '$1 へすすむ &gt;',
'ButtonPrev': '&lt; $1 へもどる',
'Phase': 'Step.$1',
'PhaseConfirm': '確認画面',
'ConfirmTitle': '<h4>入力内容をご確認ください</h4>',
'ConfirmMessage': '送信してもよろしいですか？',
'CloseConfirmMessage': '入力中の内容が破棄されます。',
'TimeDay': '$1 日',
'TimeHour': '$1 時間',
'TimeMin': '$1 分',
'TimeSec': '$1 秒',
'ErrorCode1': '<p>応募定数を超過しました。</p>',
'ErrorCode2': '<p>このフォームの送信は <strong>$1</strong> に締め切りました。</p>',
'ErrorCode3': '<p>受付開始は <strong>$1</strong> からになります。</p>',
'WarningCode1': '<p>応募定数まであと <strong>$1</strong> 件です。</p>',
'WarningCode2': '<p>受付締め切りまであと <strong>$2</strong> です。<br />(締め切りは $1 です)</p>',
'WarningCode3': '<p>このフォームではURLを送信することはできません。</p>',
'ErrorCheckedType1': '$nameのチェックは$1個以上、$2個以下の範囲でお願いします。',
'ErrorCheckedType2': '$nameが$1個以上チェックされていません。',
'ErrorCheckedType3': '$nameでチェックできるのは$1個以下です。',
'ErrorCheckedType4': '$nameがチェックされていません。',
'ErrorTextFieldType1': '$nameが入力されていません。',
'ErrorTextFieldType2': '$nameが正しくありません。',
'ErrorTextFieldType3': '確認用メールアドレスとメールアドレスが一致しません。',
'ErrorTextFieldType4': '$nameの文字数は$1文字～$2文字の範囲でお願いします。現在の文字数は$3文字です。',
'ErrorTextFieldType5': '$nameが$1文字以上入力されていません。現在の文字数は$2文字です。',
'ErrorTextFieldType6': '$nameは$1文字以下で入力してください。現在の文字数は$2文字です。',
'ErrorTextFieldType7': '$nameに数字以外の文字が入力されています。',
'ErrorTextFieldType8': '$nameに数字とハイフン以外の文字が入力されています。',
'ErrorNumberFieldType1': '$nameの数値は$1～$2の範囲でお願いします。',
'ErrorNumberFieldType2': '$nameは$1以上の数値を入力してください。',
'ErrorNumberFieldType3': '$nameは$1以下の数値を入力してください。',
'ErrorDateFieldType1': '$nameの書式はYYYY-MM-DD形式で入力してください。',
'ErrorDateFieldType2': '$nameの日付は$1以降の日付を入力してください。',
'ErrorDateFieldType3': '$nameの日付は$1より前の日付を入力してください。',
'ErrorDateFieldType4': '$nameの日付は$1～$2の範囲で入力してください。',
'ErrorSelectFieldType1': '$nameが選択されていません。',
'ErrorFileFieldType1': '$nameが選択されていません。',
'ErrorFileFieldType2': '$nameに対応していないファイルが選択されています。',
'SpamBlockError': '入力内容にURLを含める事はできません。',
'WarningCode': [
'Javascriptが有効ではありません。<br />Javascript isn&rsquo;t enabled.',
'日本語が含まれない送信は許可されていません。<br />You cannot send only English.',
'送信内容に[url]や[link]といった文字を含める事はできません。<br />Contains an invalid character.',
'URLの送信は許可されていません。<br />URL submission is not allowed.',
'許可されていないドメインからの送信はできません。<br />Sending domain is not allowed.',
'送信数の制限を超えたため、送信できません。<br />Exceeds the limit.',
'受付期間外のため、送信できません。<br />Is outside the booking period.'
],
'ReservedWord': {
'email': 'メールアドレス',
'confirm_email': '確認用',
'price': 'お支払い代金',
'keep_resume': '入力内容を記憶する'
},
'SelfEvaluateType01': "Type 01 ERROR\nmailformproが定義されていません。",
'SelfEvaluateType02': "Type 02 ERROR\nHTMLの文字コードがUTF-8ではなく$1が指定されています。"
};
//
// SYNCK GRAPHICA
// mailformpro config file
// _%%Version%%_
//
var mfpConfigs = {
'Time': '_%%Time%%_',
'PageView': '_%%PageView%%_',
'InputTimeAVG': '_%%InputTimeAVG%%_',
'LimitOver': '_%%LimitOver%%_',
'Acceptable': '_%%Acceptable%%_',
'OpenDate': '_%%OpenDate%%_',
'CloseDate': '_%%CloseDate%%_',
'DisableURI': '_%%DisableURI%%_',
'ResumeCancel': false,
'ConfirmationMode': '_%%ConfirmationMode%%_',
'ResumeExpire': '',
'OverlayOpacity': 0.8,
'NoClassChange': false,
'LoadingScreen': true,
'ErrorFocusDisabled': false,
'LoadingImage': {
'width': 40,
'height': 40
},
'SizeAjustPx': 6,
'Stripe': ['dt','dd','tr'],
'SoundEffect': false,
'SoundEffectDir': 'mfp.statics/audios/',
'SoundEffectPreset': ['click'],
'SoundEffectVolume': 0.3,
'mfpButton': '<div class="mfp_buttons"><button id="mfp_button_send" class="mfp_element_button" onclick="mfp.sendmail()">'+mfpLang['ButtonSend']+'</button>&nbsp;<button id="mfp_button_cancel" class="mfp_element_button" onclick="mfp.cancel()">'+mfpLang['ButtonCancel']+'</button></div>'
};
function MailformPro(){
this.affterEffect = function(e){
if(e.type == 'select-one'){
if(mfp.GET[e.name]){
e.value = mfp.GET[e.name];
}
else if(mfp.Resume[mfp.Index.length-1] && !mfpConfigs['ResumeCancel']){
mfp.sandbox(function(){
e.selectedIndex = mfp.Resume[mfp.Index.length-1];
});
};
mfp.sizeajust(e);
}
else if(e.type == 'select-multiple'){
mfp.sizeajust(e);
}
else if(e.type == 'checkbox' || e.type == 'radio'){
if(e.name && !mfp.$('mfp_'+e.name+'_checkobj')){
var elm = document.createElement('input');
elm.type = 'hidden';
elm.name = 'mfp_'+e.name+'_checkobj';
elm.id = elm.name;
elm.value = 1;
if(e.nextSibling === null){
e.parentNode.appendChild(elm);
}
else {
e.parentNode.insertBefore(elm, e.nextSibling);
};
};
if(mfp.GET[e.name] == e.value){
e.checked = true;
}
else if(mfp.Resume[mfp.Index.length-1] == 1 && !mfpConfigs['ResumeCancel']){
mfp.sandbox(function(){e.checked = true;});
}
else if(mfp.Resume[mfp.Index.length-1] == 0 && !mfpConfigs['ResumeCancel']){
mfp.sandbox(function(){e.checked = false;});
};
mfp.setlabel(e);
}
else {
if(e.type != "text" && e.type != "textarea"){
e.style.imeMode = 'disabled';
};
if(mfp.GET[e.name]){
e.value = mfp.GET[e.name];
mfp.setresume(e);
}
else if(mfp.Resume[mfp.Index.length-1] && !mfpConfigs['ResumeCancel']){
mfp.sandbox(function(){
e.value = unescape(mfp.Resume[mfp.Index.length-1]);
});
};
mfp.sizeajust(e);
};
};
this.initialize = function(){
for(var i=0;i<mfp.Mfp.length;i++){
var e = mfp.Mfp[i];
this.addClassName(e,'mfp_element_'+e.type);
this.addClassName(e,'mfp_element_all');
if(e.name != "" && !e.type.match(/reset|button|submit/)){
if(!e.id)
e.id = "mfp_element_"+i;
mfp.Stat.qty++;
mfp.IndexName[e.id] = mfp.Index.length;
if(!mfp.Resume[mfp.Index.length] == undefined)
mfp.Resume[mfp.Index.length] = '';
mfp.Index.push(e.id);
mfp.ElementsClassName[e.id] = e.className;
var err = 'errormsg_' + e.name;
var type = e.getAttribute('data-type') || e.type;
var price = Number(e.getAttribute('data-price')) || null;
var required = e.getAttribute('required');
if(e.required)
required = 'required';
//e.setAttribute('required',false);
e.required = false;
if(e.getAttribute('data-join')) type = 'join';
if(e.getAttribute('data-unjoin')) type = 'unjoin';
if(price){
mfp.Items[e.id] = new Object();
mfp.Items[e.id].price = price;
}
else if(type == 'select-one'){
for(var ii=0;ii<e.length;ii++){
if(e.options[ii].getAttribute('data-price')){
mfp.Items[e.options[ii].id] = new Object();
mfp.Items[e.options[ii].id].price = Number(e.options[ii].getAttribute('data-price'));
};
};
};
if(type == 'number' || type == 'date'){
e.style.textAlign = 'center';
};
if(type != "unjoin" && type != "join"){
if(!mfp.$(err)){
var elm = mfp.d.createElement('div');
elm.className = "mfp_err";
elm.id = err;
//elm.innerHTML = type;
e.parentNode.appendChild(elm);
};
var _this = e;
e.onfocus = function(){
mfp.CurrentElement = mfp.IndexName[this.id];
mfp.addtimeline(this.name,'Focus');
mfp.LastFocus = this.name;
mfp.extend.run('focus',this);
mfp.removeClassName(this,"mfp_defaultValue");
};
e.onchange = function(){
mfp.calc();
mfp.extend.run('change',this);
};
e.onblur = function(){
mfp.check(this);
mfp.DisableSubmit = true;
mfp.calc();
mfp.addtimeline(this.name,'Blur');
if(this.value != this.defaultValue){
mfp.DropFlag = true;
};
if(!mfp.UnloadEvent && mfp.beforeunload){
mfp.add(window,"beforeunload",mfp.unload);
mfp.UnloadEvent = true;
};
if(this.name){
mfp.extend.run('blur',this);
};
};
}
if(!mfp.Elements[e.name]){
if(e.type != "hidden"){
this.Analytics.qty++;
if(required)
this.Analytics.requiredQty++;
if(!this.Analytics.type[e.type])
this.Analytics.type[e.type] = 0;
this.Analytics.type[e.type]++;
}
mfp.Names.push(e.name);
mfp.Elements[e.name] = new Object();
mfp.Elements[e.name].group = new Array(e.id);
mfp.Elements[e.name].type = type;
mfp.Elements[e.name].check = false;
mfp.Elements[e.name].required = required;
mfp.Elements[e.name].err = mfp.$(err);
mfp.Elements[e.name].min = e.getAttribute('data-min');
mfp.Elements[e.name].max = e.getAttribute('data-max');
if(mfp.$(e.getAttribute('data-parent'))){
mfp.Elements[e.name].parent = mfp.$(e.getAttribute('data-parent'));
mfp.Elements[e.name].parentClassName = mfp.Elements[e.name].parent.className;
};
}
else {
mfp.Elements[e.name].group.push(e.id);
}
// type of
if(e.type == 'checkbox' || e.type == 'radio'){
e.onclick = function(){
mfp.extend.run('click',this);
mfp.CurrentElement = mfp.IndexName[this.id];
mfp.check(this);
mfp.addtimeline(this.name,'Click');
mfp.calc();
this.blur();
};
};
mfp.extend.run('init',e);
mfp.affterEffect(e);
}
else if(e.type == 'reset'){
e.onclick = function(){
if(confirm(mfpLang['ResetConfirm'])){
mfp.Resume = new Array();
mfp.setcookie('_MFP',mfp.Resume.join('|'),mfpConfigs['ResumeExpire']);
mfp.addtimeline('Reset Button','Reset');
location.href = location.href;
//location.reload();
return true;
}
else {
mfp.addtimeline('Reset Button','Reset Cancel');
return false;
}
}
e.onmousedown = function(){
mfp.play('click');
}
}
else if(e.type == 'submit'){
e.onclick = function(){
mfp.sendmail();
};
e.onmousedown = function(){
mfp.play('click');
};
}
}
mfp.Mfp.onsubmit = function(){
mfp.submit();
return false;
}
// add hidden element
var elm = mfp.d.createElement('input');
elm.type = 'submit';
mfp.$('mfp_hidden').appendChild(elm);
mfp.addhiddenElement('input_time',0);
mfp.addhiddenElement('confirm_time',0);
mfp.addhiddenElement('referrer',document.referrer || "Not Provided");
mfp.addhiddenElement('errorlog',"");
mfp.addhiddenElement('timeline',"");
mfp.addhiddenElement('domain',document.domain);
mfp.addhiddenElement('uri',location.href);
mfp.addhiddenElement('jssemantics',"1");
mfp.addhiddenElement('cart',"");
mfp.addhiddenElement('cartprice',"");
mfp.addhiddenElement('paypal',"0");
mfp.addhiddenElement('elementsQty',this.Analytics.qty);
mfp.addhiddenElement('requiredElementsQty',this.Analytics.requiredQty);
var ElementsType = new Array();
for(var prop in this.Analytics.type)
ElementsType.push(prop+":"+this.Analytics.type[prop]);
mfp.addhiddenElement('elementsArch',ElementsType.join(','));
if(mfp.$('mfpjs').src.indexOf('http') > -1)
mfp.addhiddenElement('script',mfp.$('mfpjs').src);
else {
var src = new Array();
src = location.href.split('/');
src[src.length-1] = mfp.$('mfpjs').src;
var uri = src.join('/');
mfp.addhiddenElement('script',uri);
};
mfp.addtimeline('Mailform Pro','Open');
mfp.buffer();
mfp.checkall();
mfp.Ready = true;
mfp.extend.run('ready');
mfp.calc();
};
this.uri = function(pram){
var uri = mfp.$('mfpjs').src;
if(uri.indexOf('?') > -1){
uri += '&' + pram;
}
else {
uri += '?' + pram;
};
return uri;
};
this.extend = new Object();
this.extend.fn = new Object();
this.extend.event = function(evt,fn){
if(!mfp.extend.fn[evt])
mfp.extend.fn[evt] = new Array();
mfp.extend.fn[evt].push(fn);
}
this.extend.run = function(evt,prm){
if(mfp.extend.fn[evt]){
for(var i=0;i<mfp.extend.fn[evt].length;i++)
mfp.extend.fn[evt][i](prm);
}
}
this.obj = function(obj){
if(typeof obj == 'string')
return document.getElementById(obj);
else
return obj;
};
this.byClassName = function(parentNode,className){
try {
return parentNode.getElementsByClassName(className);
}
catch(e){
var classNames = [];
var elements = parentNode.getElementsByTagName('*');
for(var i=0;i<elements.length;i++){
if(mfp.className(elements[i],className)){
classNames.push(elements[i]);
};
};
return classNames;
};
};
this.className = function(obj,name,reg){
obj = mfp.obj(obj);
var classNames = new Array();
classNames = obj.className.split(' ');
if(!reg){
var className = new Object();
for(var i=0;i<classNames.length;i++)
className[classNames[i]] = true;
if(name)
return className[name];
else
return className;
}
else {
var className = null;
for(var i=0;i<classNames.length;i++){
if(classNames[i].match(reg))
return classNames[i];
};
return className;
};
};
this.toggleClassName = function(obj,enableClassName,disableClassName){
mfp.addClassName(obj,enableClassName);
mfp.removeClassName(obj,disableClassName);
}
this.addClassName = function(obj,name){
if(!mfp.className(obj,name)){
obj.className += ' '+name;
};
}
this.removeClassName = function(obj,name){
var classNames = [];
classNames = obj.className.split(' ');
var setClassName = [];
for(var i=0;i<classNames.length;i++){
if(classNames[i] != name)
setClassName.push(classNames[i]);
};
obj.className = setClassName.join(' ');
};
this.addhiddenElement = function(id,value,name){
if(!mfp.$('mfp_'+id)){
if(!name) name = 'mfp_' + id;
var elm = mfp.d.createElement('input');
elm.type = 'hidden';
elm.id = 'mfp_' + id;
elm.name = name;
elm.value = value;
mfp.$('mfp_hidden').appendChild(elm);
}
};
this.addhiddenObject = function(id,value,name){
if(!mfp.$('mfp_'+id)){
if(!name) name = 'mfp_' + id;
var elm = mfp.d.createElement('textarea');
elm.style.display = 'none';
elm.id = 'mfp_' + id;
elm.name = name;
elm.value = value;
mfp.$('mfp_hidden').appendChild(elm);
}
};
this.removeClassName = function(obj,name){
var classNames = [];
classNames = obj.className.split(' ');
var setClassName = [];
for(var i=0;i<classNames.length;i++){
if(classNames[i] != name)
setClassName.push(classNames[i]);
};
obj.className = setClassName.join(' ');
};
this.json = function(src){
var script = document.createElement('script');
script.async = false;
script.type = 'text/javascript';
script.src = src;
script.charset = 'UTF-8';
document.body.appendChild(script);
};
this.gettime = function(){
return new Date() - 0;
}
this.addtimeline = function(name,action){
name = mfpLang['ReservedWord'][name] || name;
var time = Math.floor(((new Date() - 0) - mfp.Stat.dateClient.getTime()) / 1000);
var elapsed = "";
if(action == 'Blur')
elapsed = time - mfp.FocusTime;
if(action == 'Focus')
mfp.FocusTime = time;
var line = new Array(time,name,action,elapsed);
mfp.Timeline.push(line.join(','));
}
this.calc = function(){
if(mfp.$('mfp_price')){
mfp.Price = 0;
mfp.Cost = 0;
mfp.Qty = 0;
mfp.Cart = new Array();
mfp.CartText = "";
for(var prop in mfp.Items){
var qty = 1;
if(mfp.$(prop).getAttribute('data-qty-element')){
qty = parseInt(mfp.$(mfp.$(prop).getAttribute('data-qty-element')).value);
if(isNaN(qty)){
qty = 1;
};
};
if(mfp.$(prop).tagName.toLowerCase() == 'option' && mfp.$(prop).selected && !mfp.$(prop).disabled && !mfp.$(prop).parentNode.disabled && !mfp.$(prop).parentNode.parentNode.disabled){
mfp.Price += mfp.Items[prop].price * qty;
mfp.Qty++;
if(mfp.$(prop).getAttribute('data-cost')){
mfp.Cost += mfp.Items[prop].price * qty;
};
mfp.addcart(mfp.$(prop).value,prop,mfp.Items[prop].price * qty,1);
}
else if((mfp.$(prop).type == 'radio' || mfp.$(prop).type == 'checkbox') && mfp.$(prop).checked && !mfp.$(prop).disabled){
mfp.Price += mfp.Items[prop].price * qty;
mfp.Qty++;
if(mfp.$(prop).getAttribute('data-cost')){
mfp.Cost += mfp.Items[prop].price * qty;
};
mfp.addcart(mfp.$(prop).value,prop,mfp.Items[prop].price * qty,1);
}
else if(!mfp.$(prop).value.match(/[^0-9]/) && Number(mfp.$(prop).value) > 0 && !mfp.$(prop).disabled){
mfp.Price += (mfp.Items[prop].price * Number(mfp.$(prop).value)) * qty;
mfp.Qty += Number(mfp.$(prop).value);
if(mfp.$(prop).getAttribute('data-cost')){
mfp.Cost += (mfp.Items[prop].price * Number(mfp.$(prop).value)) * qty;
};
mfp.addcart(mfp.$(prop).name,prop,mfp.Items[prop].price * qty,Number(mfp.$(prop).value));
};
};
mfp.extend.run('calc');
mfp.$('mfp_cart').value = mfp.Cart.join('||');
if(document.getElementById('mfp_paypal_payment')){
if(mfp.$('mfp_paypal_payment').checked){
mfp.$('mfp_paypal').value = 1;
}
else {
mfp.$('mfp_paypal').value = 0;
};
};
mfp.$('mfp_cartprice').value = mfp.Price;
if(document.getElementById('mfp_price_element')){
mfp.$('mfp_price_element').value = mfpLang['PostPrice'].replace('$1',mfp.cm(mfp.Price));
};
mfp.$('mfp_price').innerHTML = mfpLang['Price'].replace('$1',mfp.cm(mfp.Price))+mfp.CartText;
//
var objects = mfp.byClassName(mfp.Mfp,'mfp_price');
for(var i=0;i<objects.length;i++){
objects[i].innerHTML = mfpLang['Price'].replace('$1',mfp.cm(mfp.Price))+mfp.CartText;
};
//
//
var objects = mfp.byClassName(mfp.Mfp,'mfp_qty');
for(var i=0;i<objects.length;i++){
objects[i].innerHTML = mfp.Qty;
};
if(mfp.$('mfp_qty_element')){
mfp.$('mfp_qty_element').value = mfp.Qty;
};
//
mfp.extend.run('calc_after');
}
}
this.sw = function(flag,id,hide,block){
var tObj = mfp.$(id).getElementsByTagName("input");
for(var i=0;i<tObj.length;i++){
if(!tObj[i].getAttribute('data-toggle-process')){
if(flag){
tObj[i].disabled = true;
try {mfp.noproblem(tObj[i]);}catch(e){};
if(tObj[i].checked){
tObj[i].checked = false;
try {
mfp.removeClass(tObj[i].parentNode,'mfp_checked');
}catch(e){};
};
}
else {
tObj[i].disabled = false;
};
};
tObj[i].setAttribute('data-toggle-process',1);
};
var tObj = mfp.$(id).getElementsByTagName("select");
for(var i=0;i<tObj.length;i++){
if(!tObj[i].getAttribute('data-toggle-process')){
if(flag){
tObj[i].disabled = true;
try {mfp.noproblem(tObj[i]);}catch(e){};
}
else {
tObj[i].disabled = false;
};
};
tObj[i].setAttribute('data-toggle-process',1);
};
var tObj = mfp.$(id).getElementsByTagName("textarea");
for(var i=0;i<tObj.length;i++){
if(!tObj[i].getAttribute('data-toggle-process')){
if(flag){
tObj[i].disabled = true;
try {mfp.noproblem(tObj[i]);}catch(e){};
}
else {
tObj[i].disabled = false;
};
};
tObj[i].setAttribute('data-toggle-process',1);
};
if(!hide && flag){
if(mfp.$(id).className.indexOf('accordion') > -1){
try {
$("#"+id).slideUp();
}
catch(e){
mfp.$(id).style.display = "none";
};
}
else {
mfp.$(id).style.display = "none";
};
}
else if(!hide && block){
if(mfp.$(id).className.indexOf('accordion') > -1){
try {
$("#"+id).slideDown();
}
catch(e){
mfp.$(id).style.display = block;
};
}
else {
mfp.$(id).style.display = block;
};
}
else if(!hide){
if(mfp.$(id).className.indexOf('accordion') > -1){
try {
$("#"+id).slideDown();
}
catch(e){
mfp.$(id).style.display = "block";
};
}
else {
mfp.$(id).style.display = "block";
};
};
}
this.addcart = function(name,id,price,qty){
if(!mfp.Cart[id]){
var item = new Array(name,id,price,qty);
mfp.Cart.push(item.join('<->'))
}
}
this.cm = function(str){
var num = new String(str).replace(/,/g, "");
while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
return num;
}
this.stripe = function(){
for(var i=0;i<mfpConfigs['Stripe'].length;i++){
var tObj = document.getElementsByTagName(mfpConfigs['Stripe'][i]);
var counter = 0;
for(var ii=0;ii<tObj.length;ii++){
if(tObj[ii].className.indexOf("mfp") > -1){
if(counter % 2 != 0)
tObj[ii].className += ' mfp_colored';
else
tObj[ii].className += ' mfp_achroma';
counter++;
}
}
}
};
this.setlabel = function(obj){
var labelObj = obj.id + '_label';
if(!mfp.$(labelObj) && obj.parentNode.tagName == "LABEL"){
obj.parentNode.id = labelObj;
mfp.$(labelObj).style.cursor = 'pointer';
}
if(obj.checked && mfp.$(labelObj)){
//mfp.$(labelObj).className = 'mfp_checked';
mfp.toggleClassName(mfp.$(labelObj),'mfp_checked','mfp_not_checked');
}
else if(mfp.$(labelObj)){
//mfp.$(labelObj).className = 'mfp_not_checked';
mfp.toggleClassName(mfp.$(labelObj),'mfp_not_checked','mfp_checked');
}
}
this.problem = function(obj,msg){
if(mfp.Ready){
mfp.ErrorLog.push(obj.name);
if(obj.type != "radio" && obj.type != "checkbox" && obj.type != "file" && !mfpConfigs['NoClassChange']){
this.attachClass(obj,'problem');
};
//obj.className = mfp.ElementsClassName[obj.id]+'problem';
if(obj.getAttribute('data-error-text')){
msg = obj.getAttribute('data-error-text');
};
var elmName = obj.getAttribute('data-display-label') || mfpLang['ReservedWord'][obj.name] || obj.name;
msg = msg.replace('$name',elmName);
mfp.Elements[obj.name].err.innerHTML = msg.replace(/\_/ig,' ');
mfp.Elements[obj.name].err.style.display = "block";
if(mfp.Elements[obj.name].parent)
mfp.Elements[obj.name].parent.className = 'mfp_parent_error';
mfp.setresume(obj);
mfp.extend.run('problem',obj);
mfp.extend.run('problem'+obj.name,obj);
};
mfp.Elements[obj.name].check = false;
return true;
}
this.noproblem = function(obj){
if(obj.name){
if(mfp.Ready){
for(var i=0;i<mfp.Elements[obj.name].group.length;i++)
this.removeClass(obj,'problem');
//mfp.$(mfp.Elements[obj.name].group[i]).className = mfp.ElementsClassName[mfp.Elements[obj.name].group[i]];
if(mfp.Elements[obj.name].err)
mfp.Elements[obj.name].err.style.display = "none";
if(mfp.Elements[obj.name].parent)
mfp.Elements[obj.name].parent.className = mfp.Elements[obj.name].parentClassName;
mfp.setresume(obj);
mfp.extend.run('noproblem',obj);
mfp.extend.run('noproblem'+obj.name,obj);
}
mfp.Elements[obj.name].check = true;
};
return false;
}
this.attachClass = function(obj,className){
var classes = new Array();
classes = obj.className.split(' ');
classes.push(className);
obj.className = classes.join(' ');
};
this.removeClass = function(obj,className){
var classes = new Array();
var newClass = new Array();
classes = obj.className.split(' ');
for(var i=0;i<classes.length;i++){
if(className != classes[i])
newClass.push(classes[i]);
}
obj.className = newClass.join(' ');
};
this.setresume = function(obj){
// Resume
if(!obj.getAttribute('data-exc')){
if(obj.type == 'select-one')
mfp.Resume[mfp.IndexName[obj.id]] = obj.selectedIndex;
else if(obj.type == 'checkbox' || obj.type == 'radio'){
for(var i=0;i<mfp.Elements[obj.name].group.length;i++){
if(mfp.$(mfp.Elements[obj.name].group[i]).checked)
mfp.Resume[mfp.IndexName[mfp.Elements[obj.name].group[i]]] = 1;
else
mfp.Resume[mfp.IndexName[mfp.Elements[obj.name].group[i]]] = "";
}
}
else if(obj.type == 'file')
mfp.Resume[mfp.IndexName[obj.id]] = "";
else
mfp.Resume[mfp.IndexName[obj.id]] = escape(obj.value);
}
else
mfp.Resume[mfp.IndexName[obj.id]] = "";
mfp.setcookie('_MFP',mfp.Resume.join('|'),mfpConfigs['ResumeExpire']);
}
this.$ = function(id){
return mfp.d.getElementById(id);
}
this.check = function(obj){
if(obj.getAttribute('data-unrequired')){
mfp.Elements[obj.name].required = false;
}
else if(obj.getAttribute('data-required')){
mfp.Elements[obj.name].required = true;
};
if(obj.type == ('text' || 'textarea' || 'tel' || 'email' || 'number')){
if(obj.value == obj.defaultValue)
mfp.addClassName(obj,'mfp_defaultValue');
else
mfp.removeClassName(obj,"mfp_defaultValue");
};
mfp.ExtendErrorMsg = "";
mfp.ExtendErrorCancel = false;
if(obj.name){
mfp.extend.run('check',obj);
};
if(mfp.ExtendErrorMsg != ""){
return mfp.problem(obj,mfp.ExtendErrorMsg);
}
else if(!mfp.ExtendErrorCancel){
if(obj.getAttribute('data-error') && obj.getAttribute('data-error-text') && !obj.disabled){
return mfp.problem(obj,obj.getAttribute('data-error-text'));
}
else if(!obj.disabled && obj.type != "hidden" && obj.name != ""){
if(Number(mfpConfigs['DisableURI']) && (obj.value.match(/http:/i) || obj.value.match(/https:/i)))
return mfp.problem(obj,mfpLang['SpamBlockError']);
else if(mfp.Elements[obj.name].type == 'radio' || mfp.Elements[obj.name].type == 'checkbox'){
var check_count = 0;
for(var i=0;i<mfp.Elements[obj.name].group.length;i++){
if(mfp.$(mfp.Elements[obj.name].group[i]).checked){
if(mfp.$(mfp.Elements[obj.name].group[i]+'_label'))
mfp.toggleClassName(mfp.$(mfp.Elements[obj.name].group[i]+'_label'),'mfp_checked','mfp_not_checked');
//mfp.$(mfp.Elements[obj.name].group[i]+'_label').className = 'mfp_checked';
check_count++;
}
else if(mfp.$(mfp.Elements[obj.name].group[i]+'_label'))
mfp.toggleClassName(mfp.$(mfp.Elements[obj.name].group[i]+'_label'),'mfp_not_checked','mfp_checked');
//mfp.$(mfp.Elements[obj.name].group[i]+'_label').className = 'mfp_not_checked';
}
if((mfp.Elements[obj.name].min) && (mfp.Elements[obj.name].max) && (check_count < mfp.Elements[obj.name].min || mfp.Elements[obj.name].max < check_count)){
var errmsg = mfpLang['ErrorCheckedType1'].replace('$1',mfp.Elements[obj.name].min);
errmsg = errmsg.replace('$2',mfp.Elements[obj.name].max);
return mfp.problem(obj,errmsg);
}
else if((mfp.Elements[obj.name].min) && check_count < mfp.Elements[obj.name].min){
var errmsg = mfpLang['ErrorCheckedType2'].replace('$1',mfp.Elements[obj.name].min);
return mfp.problem(obj,errmsg);
}
else if((mfp.Elements[obj.name].max) && mfp.Elements[obj.name].max < check_count){
var errmsg = mfpLang['ErrorCheckedType3'].replace('$1',mfp.Elements[obj.name].max);
return mfp.problem(obj,errmsg);
}
else if(mfp.Elements[obj.name].required && check_count < 1)
return mfp.problem(obj,mfpLang['ErrorCheckedType4']);
else
return mfp.noproblem(obj);
}
else if(mfp.Elements[obj.name].required && (obj.value == obj.defaultValue || obj.value == "")){
if(mfp.Elements[obj.name].type == "select-one" || mfp.Elements[obj.name].type == "select-multiple")
return mfp.problem(obj,mfpLang['ErrorSelectFieldType1']);
else if(mfp.Elements[obj.name].type == "file")
return mfp.problem(obj,mfpLang['ErrorFileFieldType1']);
else
return mfp.problem(obj,mfpLang['ErrorTextFieldType1']);
}
else if(mfp.Elements[obj.name].type == "text" || mfp.Elements[obj.name].type == "textarea" || mfp.Elements[obj.name].type == "email" || mfp.Elements[obj.name].type == "password"){
if(mfp.Elements[obj.name].type == "email" && !obj.value.match(/.+@.+\..+/) && obj.value != obj.defaultValue){
return mfp.problem(obj,mfpLang['ErrorTextFieldType2']);
}
else if(obj.name == 'confirm_email' && mfp.$(mfp.Elements['email'].group[0]).value != obj.value){
return mfp.problem(obj,mfpLang['ErrorTextFieldType3']);
}
else if((mfp.Elements[obj.name].min) && (mfp.Elements[obj.name].max) && (obj.value.length < mfp.Elements[obj.name].min || mfp.Elements[obj.name].max < obj.value.length) && (obj.value != obj.defaultValue && obj.value != "")){
var errmsg = mfpLang['ErrorTextFieldType4'].replace('$1',mfp.Elements[obj.name].min);
errmsg = errmsg.replace('$2',mfp.Elements[obj.name].max);
errmsg = errmsg.replace('$3',obj.value.length);
return mfp.problem(obj,errmsg);
}
else if((mfp.Elements[obj.name].min) && obj.value.length < mfp.Elements[obj.name].min && (obj.value != obj.defaultValue && obj.value != "")){
var errmsg = mfpLang['ErrorTextFieldType5'].replace('$1',mfp.Elements[obj.name].min);
errmsg = errmsg.replace('$2',obj.value.length);
return mfp.problem(obj,errmsg);
}
else if((mfp.Elements[obj.name].max) && mfp.Elements[obj.name].max < obj.value.length && (obj.value != obj.defaultValue && obj.value != "")){
var errmsg = mfpLang['ErrorTextFieldType6'].replace('$1',mfp.Elements[obj.name].max);
errmsg = errmsg.replace('$2',obj.value.length);
return mfp.problem(obj,errmsg);
}
else
return mfp.noproblem(obj);
}
else if(mfp.Elements[obj.name].type == "number" && obj.value != obj.defaultValue && obj.value != ""){
if(obj.value.match(/[^0-9]/))
return mfp.problem(obj,mfpLang['ErrorTextFieldType7']);
else if((mfp.Elements[obj.name].min) && (mfp.Elements[obj.name].max) && (parseInt(obj.value) < parseInt(mfp.Elements[obj.name].min) || parseInt(mfp.Elements[obj.name].max) < parseInt(obj.value)) && (obj.value != obj.defaultValue && obj.value != "")){
var errmsg = mfpLang['ErrorNumberFieldType1'].replace('$1',mfp.Elements[obj.name].min);
errmsg = errmsg.replace('$2',mfp.Elements[obj.name].max);
return mfp.problem(obj,errmsg);
}
else if((mfp.Elements[obj.name].min) && parseInt(obj.value) < parseInt(mfp.Elements[obj.name].min) && (obj.value != obj.defaultValue && obj.value != "")){
var errmsg = mfpLang['ErrorNumberFieldType2'].replace('$1',mfp.Elements[obj.name].min);
return mfp.problem(obj,errmsg);
}
else if((mfp.Elements[obj.name].max) && parseInt(mfp.Elements[obj.name].max) < parseInt(obj.value) && (obj.value != obj.defaultValue && obj.value != "")){
var errmsg = mfpLang['ErrorNumberFieldType3'].replace('$1',mfp.Elements[obj.name].max);
return mfp.problem(obj,errmsg);
}
else
return mfp.noproblem(obj);
}
else if(mfp.Elements[obj.name].type == "tel" && obj.value != obj.defaultValue && obj.value != ""){
var tel = obj.value.replace(/\-/ig,'');
if(tel.match(/[^0-9\-\+]/))
return mfp.problem(obj,mfpLang['ErrorTextFieldType8']);
else if((mfp.Elements[obj.name].min) && (mfp.Elements[obj.name].max) && (tel.length < mfp.Elements[obj.name].min || mfp.Elements[obj.name].max < tel.length) && (tel != obj.defaultValue && tel != "")){
var errmsg = mfpLang['ErrorTextFieldType4'].replace('$1',mfp.Elements[obj.name].min);
errmsg = errmsg.replace('$2',mfp.Elements[obj.name].max);
errmsg = errmsg.replace('$3',tel.length);
return mfp.problem(obj,errmsg);
}
else if((mfp.Elements[obj.name].min) && tel.length < mfp.Elements[obj.name].min && (tel != obj.defaultValue && tel != "")){
var errmsg = mfpLang['ErrorTextFieldType5'].replace('$1',mfp.Elements[obj.name].min);
errmsg = errmsg.replace('$2',tel.length);
return mfp.problem(obj,errmsg);
}
else if((mfp.Elements[obj.name].max) && mfp.Elements[obj.name].max < tel.length && (tel != obj.defaultValue && tel != "")){
var errmsg = mfpLang['ErrorTextFieldType6'].replace('$1',mfp.Elements[obj.name].max);
errmsg = errmsg.replace('$2',tel.length);
return mfp.problem(obj,errmsg);
}
else
return mfp.noproblem(obj);
}
else if(mfp.Elements[obj.name].type == "date" && obj.value != obj.defaultValue && obj.value != ""){
var date = new Date(obj.value.replace(/-/ig,'/'));
var mon = (date.getMonth()+1);
var day = date.getDate();
if(mon < 10) mon = "0"+mon;
if(day < 10) day = "0"+day;
var dateStr = date.getFullYear() + '-' + mon + '-' + day;
if(dateStr.indexOf('NaN') > -1)
return mfp.problem(obj,mfpLang['ErrorDateFieldType1']);
else if(mfp.Elements[obj.name].max && mfp.Elements[obj.name].min){
var dateMax = new Date(mfp.Elements[obj.name].max.replace(/-/ig,'/'));
var dateMin = new Date(mfp.Elements[obj.name].min.replace(/-/ig,'/'));
if(dateMin.getTime() > date.getTime() || date.getTime() > dateMax.getTime()){
var errmsg = mfpLang['ErrorDateFieldType4'].replace('$1',mfp.Elements[obj.name].min);
return mfp.problem(obj,errmsg.replace('$2',mfp.Elements[obj.name].max));
}
else {
obj.value = dateStr;
return mfp.noproblem(obj);
}
}
else if(mfp.Elements[obj.name].max){
var dateMax = new Date(mfp.Elements[obj.name].max.replace(/-/ig,'/'));
if(date.getTime() > dateMax.getTime())
return mfp.problem(obj,mfpLang['ErrorDateFieldType3'].replace('$1',mfp.Elements[obj.name].max));
else {
obj.value = dateStr;
return mfp.noproblem(obj);
}
}
else if(mfp.Elements[obj.name].min){
var dateMin = new Date(mfp.Elements[obj.name].min.replace(/-/ig,'/'));
if(date.getTime() < dateMin.getTime())
return mfp.problem(obj,mfpLang['ErrorDateFieldType2'].replace('$1',mfp.Elements[obj.name].min));
else {
obj.value = dateStr;
return mfp.noproblem(obj);
}
}
else {
obj.value = dateStr;
return mfp.noproblem(obj);
}
}
else {
return mfp.noproblem(obj);
};
};
mfp.ExtendErrorMsg = "";
mfp.extend.run('checkafter',obj);
if(mfp.ExtendErrorMsg != ""){
return mfp.problem(obj,mfp.ExtendErrorMsg);
};
}
else {
return mfp.noproblem(obj);
};
}
this.val = function(id){
var e = mfp.$(id);
if(e.type == 'select-one' && !e.disabled && e.value != "")
return e.options[e.selectedIndex].text;
else if(e.type == 'checkbox' || e.type == 'radio'){
var values = new Array();
for(var i=0;i<mfp.Elements[e.name].group.length;i++){
if(mfp.$(mfp.Elements[e.name].group[i]).checked && !e.disabled){
if(mfp.$(mfp.Elements[e.name].group[i]).getAttribute('data-display-value')){
values.push(mfp.$(mfp.Elements[e.name].group[i]).getAttribute('data-display-value'));
}
else{
values.push(mfp.$(mfp.Elements[e.name].group[i]).value);
};
};
};
return values.join('<br />');
}
else if(e.type == 'file' && !e.disabled){
try {
var files = new Array();
for(var i=0;i<e.files.length;i++)
files.push(e.files[i].name);
return mfp.sanitizing(files.join("\n"));
}
catch(e){
return mfp.sanitizing(mfp.$(id).value.replace(/\\n/g,'<br />'));
}
}
else if(!e.disabled && e.value != e.defaultValue){
var val = mfp.sanitizing(mfp.$(id).value);
val = val.replace(/\\n/g,'<br />');
val = val.replace(/\n/g,'<br />');
//return mfp.sanitizing(mfp.$(id).value.replace(/\\n/g,'<br />').replace(/\\n/g,'<br />'));
return val;
}
else
return '';
}
this.sanitizing = function(str){
var before = new Array('&','"',"'","<",">","\n","\t","\\n");
var after = new Array('&amp;','&quot;','&rsquo;',"&lt;","&gt;","<br />"," ","<br />");
for(var i=0;i<before.length;i++)
str = str.replace(new RegExp(before[i],'g'), after[i]);
return str;
};
this.unsanitizing = function(str){
var after = new Array('&','"',"'","<",">","\n","\t","\\n");
var before = new Array('&amp;','&quot;','&rsquo;',"&lt;","&gt;","<br />"," ","<br />");
for(var i=0;i<before.length;i++)
str = str.replace(new RegExp(before[i],'g'), after[i]);
return str;
};
this.checkall = function(){
mfp.calc();
var errors = new Array();
var ElementsFlag = new Object();
mfp.ConfirmHTML = "";
var s = 0;
for(var i=0;i<mfp.Names.length;i++){
var e = mfp.$(mfp.Elements[mfp.Names[i]].group[0]);
var labelText = "";
if(e.getAttribute('data-confirm-label-text')){
labelText = '<div class="mfp_confirm_label">'+mfp.unsanitizing(e.getAttribute('data-confirm-label-text'))+'</div>';
};
var valueText = "";
if(e.getAttribute('data-confirm-value-text')){
valueText = '<div class="mfp_confirm_value">'+mfp.unsanitizing(e.getAttribute('data-confirm-value-text'))+'</div>';
};
if(e.name.match(/^mfp_h_/)){
var className = 'mfp_colored';
if(s % 2 == 0){
className = 'mfp_achroma';
};
elmName = elmName.replace(/\_/ig, " ");
mfp.ConfirmHTML += '<tr class="'+className+'"><th colspan="2">'+e.value+'</th></tr>';
s++;
}
else if(mfp.check(e)){
var eid = e.getAttribute('data-error-element') || e.id;
errors.push(eid);
}
else {
var elmName = e.getAttribute('data-display-label') || mfpLang['ReservedWord'][mfp.Names[i]] || mfp.Names[i];
var val = "";
// 2013-05-28 hotfix
if((mfp.Elements[mfp.Names[i]].type == 'join' || mfp.Elements[mfp.Names[i]].type == 'unjoin') && !mfp.Elements[mfp.Names[i]].disabled){
var joinObj = e.getAttribute('data-join') || e.getAttribute('data-unjoin');
var joinElements = joinObj.split('+');
var joinStr = "";
var allDefault = true;
for(var ii=0;ii<joinElements.length;ii++){
if(mfp.Elements[joinElements[ii]]){
if(mfp.$(mfp.Elements[joinElements[ii]].group[0]).getAttribute('data-format'))
joinStr += mfp.$(mfp.Elements[joinElements[ii]].group[0]).getAttribute('data-format').replace('$1',mfp.$(mfp.Elements[joinElements[ii]].group[0]).value);
else
joinStr += mfp.val(mfp.Elements[joinElements[ii]].group[0]);
var val = mfp.$(mfp.Elements[joinElements[ii]].group[0]).value;
if(mfp.$(mfp.Elements[joinElements[ii]].group[0]).value != "" && val != mfp.$(mfp.Elements[joinElements[ii]].group[0]).defaultValue && !mfp.$(mfp.Elements[joinElements[ii]].group[0]).disabled)
allDefault = false;
ElementsFlag[joinElements[ii]] = true;
}
else {
joinStr += joinElements[ii];
};
};
e.value = joinStr.replace(/\\n/g,'<br />');
val = e.value;
if(allDefault){
val = "";
e.value = "";
};
}
else {
val = mfp.val(e.id);
};
if(e.getAttribute('data-format') && val != ""){
val = e.getAttribute('data-format').replace('$1',val);
};
if(!ElementsFlag[mfp.Names[i]]){
ElementsFlag[mfp.Names[i]] = true;
if(val != "" && mfp.Names[i].indexOf('mfp_') == -1 && !e.getAttribute('data-post-disable')){
var className = 'mfp_colored';
if(s % 2 == 0){
className = 'mfp_achroma';
};
elmName = elmName.replace(/\_/ig, " ");
mfp.ConfirmHTML += '<tr class="'+className+'"><th id="th_'+mfp.Elements[mfp.Names[i]].group[0]+'">'+elmName+labelText+'</th><td id="td_'+mfp.Elements[mfp.Names[i]].group[0]+'">'+val+valueText+'</td></tr>';
s++;
};
};
};
};
if(errors.length > 0){
if(mfp.Ready){
if(!mfpConfigs['ErrorFocusDisabled']){
mfp.$(errors[0]).focus();
};
};
mfp.extend.run('elementError',mfp.$(errors[0]));
return false;
}
else {
return true;
};
}
this.sizeajust = function(obj){
if(mfpConfigs['SizeAjustPx'] != null){
if(obj.size && obj.size != 20)
obj.style.width = (Number(obj.size) * mfpConfigs['SizeAjustPx']) + "px";
if(obj.cols)
obj.style.width = (Number(obj.cols) * mfpConfigs['SizeAjustPx']) + "px";
if(obj.rows)
obj.style.height = (Number(obj.rows) * mfpConfigs['SizeAjustPx']) + "px";
}
}
this.submit = function(){
if(mfp.DisableSubmit){
mfp.CurrentElement++;
mfp.sandbox(function(){
if(mfp.$(mfp.Index[mfp.CurrentElement])){
mfp.$(mfp.Index[mfp.CurrentElement]).focus();
}
});
}
};
this.pos = function(id){
var obj = mfp.$(id);
var left = 0,top = 0;
while(obj.parentNode){
left += obj.offsetLeft;
top += obj.offsetTop;
obj = obj.parentNode;
};
return {"left" : left, "top" : top};
},
this.jump = function(id){
mfp.$(id).focus();
mfp.scroll(id);
};
this.scroll = function(id){
setTimeout(function(){
var ajust = 100;
scrollTo(0,mfp.absolutePosition(id) - ajust);
setTimeout(function(){
mfp.$(id).focus();
},100);
},10);
};
this.smoothScroll = function(toX,sec){
var begin = new Date() - 0;
var x = window.pageYOffset || document.body.scrollTop || 0;
var moveX = toX - x;
var duration = sec;
var timer = setInterval(function(){
var time = new Date() - begin;
var cuX = Math.floor(easing(time, x, moveX, duration));
if(time > duration){
clearInterval(timer);
cuX = toX;
};
window.scrollTo(0,cuX);
},10);
};
this.absolutePosition = function(id){
var top = 0;
try {
top = Math.max.apply( null, [mfp.getElementPosition(mfp.$(id)).top,mfp.getElementPosition(mfp.$(id).parentNode).top] );
}catch(e){
};
return top;
};
this.getElementPosition = function(elm){
var position = elm.getBoundingClientRect();
return {
left: Math.round(window.scrollX + position.left),
top: Math.round(window.scrollY + position.top)
};
};
this.cancel = function(){
mfp.SendFlag = false;
if(mfpConfigs['ConfirmationMode'] == 1){
mfp.$('mfp_phase_confirm').style.display = "none";
mfp.$('mfp_phase_confirm_inner').innerHTML = "";
//scrollTo(0,mfp.Mfp.offsetTop);
mfp.jump('mailformpro');
}
else if(mfpConfigs['ConfirmationMode'] == 0){
setTimeout(function(){
mfp.$('mfp_overlay_inner').innerHTML = "";
},1000);
opacitys('mfp_overlay',1,0,1000);
opacitys('mfp_overlay_background',mfpConfigs['OverlayOpacity'],0,1000);
}
mfp.Mfp.style.display = "block";
mfp.addtimeline('Confirm','cancel');
mfp.extend.run('cancel');
}
this.sendmail = function(){
if(mfp.SendFlag){
// go sendmail
mfp.$('mfp_confirm_time').value = Math.floor(((new Date() - 0) - mfp.Stat.dateConfirm.getTime()) / 1000);
mfp.$('mfp_input_time').value = Math.floor(((new Date() - 0) - mfp.Stat.dateClient.getTime()) / 1000);
// timeline
mfp.addtimeline('Confirm','send');
mfp.$('mfp_timeline').value = mfp.Timeline.join('<>');
mfp.$('mfp_errorlog').value = mfp.ErrorLog.join(',');
//
// opt
for(var i=0;i<mfp.Names.length;i++){
var e = mfp.$(mfp.Elements[mfp.Names[i]].group[0]);
if(e.getAttribute('data-format') && e.value != "" && e.type == 'select-one')
e.options[e.selectedIndex].value = e.getAttribute('data-format').replace('$1',e.value);
else if(e.getAttribute('data-format') && e.value != "")
e.value = e.getAttribute('data-format').replace('$1',e.value);
if(mfp.Elements[mfp.Names[i]].type == 'join'){
var joinObj = e.getAttribute('data-join');
var joinElements = joinObj.split('+');
for(var ii=0;ii<joinElements.length;ii++){
if(mfp.Elements[joinElements[ii]])
mfp.$(mfp.Elements[joinElements[ii]].group[0]).disabled = true;
}
}
else if(mfp.Elements[mfp.Names[i]].type == 'unjoin')
mfp.$(mfp.Elements[mfp.Names[i]].group[0]).name = "";
if(e.getAttribute('data-post-disable'))
e.disabled = true;
}
//
mfp.SendBusy = false;
mfp.extend.run('send');
if(mfpConfigs['LoadingScreen']){
mfp.$('mfp_loading').style.display = 'block';
mfp.$('mfp_loading_screen').style.display = 'block';
}
mfp.UnloadEvent = false;
mfp.beforeunload = false;
try {
window.removeEventListener("beforeunload",mfp.unload, false);
}
catch(e){
window.detachEvent("onbeforeunload", mfp.unload);
}
if(!mfp.SendBusy)
mfp.Mfp.submit();
}
else {
mfp.DisableSubmit = false;
if(mfp.checkall()){
mfp.extend.run('confirm');
mfp.addtimeline('Confirm','display');
mfp.SendFlag = true;
mfp.Stat.dateConfirm = new Date();
// confirm customize
var confirmCustomizeBefore = "";
if(mfp.$('mailformpro').getAttribute('data-confirm-before')){
confirmCustomizeBefore = '<div class="mfp_confirm_before">'+mfp.unsanitizing(mfp.$('mailformpro').getAttribute('data-confirm-before'))+'</div>';
};
var confirmCustomizeAfter = "";
if(mfp.$('mailformpro').getAttribute('data-confirm-after')){
confirmCustomizeAfter = '<div class="mfp_confirm_after">'+mfp.unsanitizing(mfp.$('mailformpro').getAttribute('data-confirm-after'))+'</div>';
};
//
if(mfpConfigs['ConfirmationMode'] == 2){
if(confirm(mfpLang['ConfirmMessage']))
mfp.sendmail();
else {
mfp.SendFlag = false;
mfp.extend.run('cancel');
}
}
else if(mfpConfigs['ConfirmationMode'] == 1){
var mfpButtons = "";
if(!mfp.$('mfp_button_send') && mfpConfigs['mfpButton'])
mfpButtons = mfpConfigs['mfpButton'];
else if(!mfp.$('mfp_button_send'))
mfpButtons = '<div class="mfp_buttons"><button id="mfp_button_send" class="mfp_element_button" onclick="mfp.sendmail()">'+mfpLang['ButtonSend']+'</button>&nbsp;<button id="mfp_button_cancel" class="mfp_element_button" onclick="mfp.cancel()">'+mfpLang['ButtonCancel']+'</button></div>';
mfp.Mfp.style.display = "none";
mfp.$('mfp_phase_confirm_inner').innerHTML = mfpLang['ConfirmTitle'] + confirmCustomizeBefore + '<table id="mfp_confirm_table">' + mfp.ConfirmHTML + '</table>' + confirmCustomizeAfter + mfpButtons;
mfp.$('mfp_phase_confirm').style.display = "block";
//scrollTo(0,mfp.$('mfp_phase_confirm').offsetTop);
mfp.jump('mfp_phase_confirm');
}
else if(mfpConfigs['ConfirmationMode'] == 0){
var mfpButtons = "";
if(!mfp.$('mfp_button_send') && mfpConfigs['mfpButton'])
mfpButtons = mfpConfigs['mfpButton'];
else if(!mfp.$('mfp_button_send'))
mfpButtons = '<div class="mfp_buttons"><button id="mfp_button_send" class="mfp_element_button" onclick="mfp.sendmail()">'+mfpLang['ButtonSend']+'</button>&nbsp;<button id="mfp_button_cancel" class="mfp_element_button" onclick="mfp.cancel()">'+mfpLang['ButtonCancel']+'</button></div>';
mfp.$('mfp_overlay_inner').innerHTML = mfpLang['ConfirmTitle'] + confirmCustomizeBefore + '<table id="mfp_confirm_table">' + mfp.ConfirmHTML + '</table>' + confirmCustomizeAfter + mfpButtons;
mfp.$('mfp_overlay').style.top = (mfp.Top+10) + "px";
opacitys('mfp_overlay',0,1,1000);
opacitys('mfp_overlay_background',0,mfpConfigs['OverlayOpacity'],1000);
}
else if(mfpConfigs['ConfirmationMode'] == 3)
mfp.sendmail();
// confirm process
}
else {
mfp.addtimeline('Confirm','error');
mfp.extend.run('error');
}
}
return false;
}
this.sandbox = function(fn){
try {
fn();
}
catch(e){
//alert(e);
}
}
this.setcookie = function(name,value,expire){
var current_dir = location.pathname;
var current_dirs = new Array();
current_dirs = current_dir.split("/");
if(current_dirs[current_dirs.length-1] != ""){
current_dirs[current_dirs.length-1] = "";
current_dir = current_dirs.join("/");
}
document.cookie = name + "=" + value + "; path=" + current_dir + "; expires="+expire;
}
this.size = function(){
var d = window.document;
var nWidth, nHeight, nTop, nLeft,scrollAdjust;
var ua = navigator.userAgent;
var nHit = ua.indexOf("MSIE");
var bIE = (nHit >=  0);
var bVer6 = (bIE && ua.substr(nHit+5, 1) == "6");
var bStd = (d.compatMode && d.compatMode=="CSS1Compat");
//alert(+","+document.body.offsetHeight);
if(this.MSIE){
if(bVer6 && bStd) {
nWidth = d.documentElement.clientWidth;
nHeight = d.documentElement.clientHeight;
nTop = d.documentElement.scrollTop;
nLeft = d.documentElement.scrollLeft;
}
else {
if(typeof d.body.style.maxHeight != "undefined") {
nWidth = d.documentElement.clientWidth;
nHeight = d.documentElement.clientHeight;
nTop = d.documentElement.scrollTop;
nLeft = d.documentElement.scrollLeft;
}
else {
nWidth = d.body.clientWidth;
nHeight = d.body.clientHeight;
nTop = d.body.scrollTop;
nLeft = d.body.scrollLeft;
}
}
}
else {
nWidth = window.innerWidth;
nHeight = window.innerHeight;
nTop = d.body.scrollTop  || d.documentElement.scrollTop;
nLeft = d.body.scrollLeft || d.documentElement.scrollLeft;
}
nWidth = document.documentElement.clientWidth || document.body.offsetWidth || d.body.clientWidth || window.innerWidth;
nHeight = document.documentElement.clientHeight || document.body.offsetHeight || d.body.clientHeight || window.innerHeight;
mfp.css(mfp.$('mfp_overlay'),{
width: nWidth+"px",
//height: nHeight+"px",
left: "0px"
});
var top = "0px";
var ltop = ((nHeight - mfpConfigs['LoadingImage']['height']) / 2) + "px";
var position = "fixed";
if(mfp.MSIELegacy){
top = nTop+"px";
ltop = ((nHeight - mfpConfigs['LoadingImage']['height']) / 2)+nTop + "px";
position = "absolute";
}
mfp.css(mfp.$('mfp_overlay_background'),{
width: nWidth+"px",
height: nHeight+"px",
top: top,
left: "0px",
"position": position
});
mfp.css(mfp.$('mfp_loading_screen'),{
width: nWidth+"px",
height: nHeight+"px",
top: top,
left: "0px",
"position": position
});
mfp.css(mfp.$('mfp_loading'),{
width: mfpConfigs['LoadingImage']['width']+"px",
height: mfpConfigs['LoadingImage']['height']+"px",
left: (nWidth - mfpConfigs['LoadingImage']['width']) / 2 + "px",
top: ltop,
"position": position
});
this.Width = nWidth;
this.Height = nHeight;
this.Top = nTop;
this.Left = nLeft;
mfp.extend.run('size');
}
function easing(t,b,c,d){
if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
return -c/2 * ((t-=2)*t*t*t - 2) + b;
}
function setopacity(id,opacity){
if(mfp.MSIELegacy)
document.all(id).style.filter = "alpha(opacity="+Math.floor(opacity*100)+")";
else
mfp.$(id).style.opacity = opacity;
}
function opacitys(id,cuOpacity,toOpacity,toMsec){
var begin = new Date() - 0;
var opacity = cuOpacity;
var moveOpacity = toOpacity - opacity;
var duration = toMsec;
setopacity(id,cuOpacity);
mfp.$(id).style.display = "block";
var timer = setInterval(function(){
var time = new Date() - begin;
var cuOpacity = easing(time, opacity, moveOpacity, duration);
if(time > duration){
clearInterval(timer);
cuOpacity = toOpacity;
if(cuOpacity == 0)
mfp.$(id).style.display = "none";
else if(cuOpacity > 0)
mfp.$(id).style.display = "block";
}
if(mfp.MSIELegacy)
document.all(id).style.filter = "alpha(opacity="+Math.floor(cuOpacity*100)+")";
else
mfp.$(id).style.opacity = cuOpacity;
},10);
}
this.css = function(obj,styles){
for(var prop in styles)
obj.style[prop] = styles[prop];
}
this.add = function(elm,listener,fn){
try { elm.addEventListener(listener,fn,false);}
catch(er){ elm.attachEvent("on"+listener,fn);}
}
this.unload = function(ev){
mfp.call(mfp.$('mfpjs').src,"drop="+encodeURIComponent(mfp.LastFocus)+"&time="+mfp.Stat.date.getTime());
if(mfp.beforeunload)
ev.returnValue = mfpLang['CloseConfirmMessage'];
return mfpLang['CloseConfirmMessage'];
}
this.onunload = function(){
if(mfp.LastFocus != null && mfp.DropFlag){
mfp.LastFocus = mfpLang['ReservedWord'][mfp.LastFocus] || mfp.LastFocus;
XMLhttpObj = mfp.createXMLHttpRequest();
if(mfp.$('mfpjs').src.indexOf('?') > -1)
XMLhttpObj.open("GET",mfp.$('mfpjs').src+'&drop='+encodeURIComponent(mfp.LastFocus)+"&time="+mfp.Stat.date.getTime(),false);
else
XMLhttpObj.open("GET",mfp.$('mfpjs').src+'?drop='+encodeURIComponent(mfp.LastFocus)+"&time="+mfp.Stat.date.getTime(),false);
XMLhttpObj.send(null);
}
}
this.call = function(src,query){
var script = document.createElement('script');
script.async = false;
script.type = 'text/javascript';
var u = '?';
if(src.indexOf('?') > -1) u = '&';
script.src = src + u + query;
//document.body.appendChild(script);
mfp.Mfp.parentNode.insertBefore(script,mfp.$('mfp_phase_confirm'));
}
this.createXMLHttpRequest = function(){
var XMLhttpObject = null;
try{
XMLhttpObject = new XMLHttpRequest();
}
catch(e){
try{
XMLhttpObject = new ActiveXObject("Msxml2.XMLHTTP");
}
catch(e){
try{
XMLhttpObject = new ActiveXObject("Microsoft.XMLHTTP");
}
catch(e){
return null;
}
}
}
return XMLhttpObject;
}
this.error = function(msg){
mfp.Mfp.style.display = "none";
mfp.$('mfp_error').style.display = "block";
msg = msg.replace(/\_/ig,' ');
mfp.$('mfp_error').innerHTML += msg;
mfp.extend.run('senderror');
};
this.warning = function(msg,scroll){
mfp.$('mfp_warning').style.display = "block";
mfp.$('mfp_warning').innerHTML += msg;
if(!scroll){
setTimeout(function(){
window.scrollTo(0,document.getElementById('mfp_warning').offsetTop);
},100);
}
mfp.extend.run('warning');
};
this.play = function(id){
if(mfp.Audio && mfpConfigs['SoundEffect'] && mfp.SoundEffect[id]){
mfp.SoundEffect[id].currentTime = 0;
mfp.SoundEffect[id].play();
}
}
this.buffer = function(){
if(mfp.Audio && mfpConfigs["SoundEffect"]){
mfp.SoundEffect.audio = new Audio();
if(("" != mfp.SoundEffect.audio.canPlayType("audio/ogg")))
mfp.AudioType = "ogg";
else
mfp.AudioType = "mp3";
for(var i=0;i<mfpConfigs["SoundEffectPreset"].length;i++){
mfp.SoundEffect[mfpConfigs["SoundEffectPreset"][i]] = new Audio();
mfp.SoundEffect[mfpConfigs["SoundEffectPreset"][i]].src = mfpConfigs['SoundEffectDir'] + mfpConfigs["SoundEffectPreset"][i] + "." + mfp.AudioType;
mfp.SoundEffect[mfpConfigs["SoundEffectPreset"][i]].autobuffer = true;
mfp.SoundEffect[mfpConfigs["SoundEffectPreset"][i]].volume = mfpConfigs['SoundEffectVolume'];
mfp.SoundEffect[mfpConfigs["SoundEffectPreset"][i]].load();
}
}
}
this.startup = function(){
this.d = window.document;
this.charset = document.charset || document.characterSet;
if(this.charset.toLowerCase() != 'utf-8')
alert(mfpLang['SelfEvaluateType02'].replace('$1',this.charset));
if(mfp.$('mailformpro')){
this.Mfp = mfp.$('mailformpro');
}
else {
alert(mfpLang['SelfEvaluateType01']);
};
// Overlay object
if(!mfp.$('mfp_overlay')){
var bodyObj = document.body;
var elm = mfp.d.createElement('div');
elm.id = 'mfp_overlay';
bodyObj.insertBefore(elm, bodyObj.firstChild);
elm = mfp.d.createElement('div');
elm.id = 'mfp_overlay_inner';
mfp.$('mfp_overlay').appendChild(elm);
elm = mfp.d.createElement('div');
elm.id = 'mfp_overlay_background';
elm.onclick = function(){
mfp.cancel();
}
bodyObj.insertBefore(elm, bodyObj.firstChild);
elm = mfp.d.createElement('div');
elm.id = 'mfp_loading_screen';
bodyObj.insertBefore(elm, bodyObj.firstChild);
elm = mfp.d.createElement('div');
elm.id = 'mfp_loading';
bodyObj.insertBefore(elm, bodyObj.firstChild);
}
// Error Object
if(!mfp.$('mfp_error')){
var elm = mfp.d.createElement('div');
elm.id = 'mfp_error';
mfp.Mfp.parentNode.insertBefore(elm,mfp.Mfp);
}
// Warning Object
if(!mfp.$('mfp_warning')){
var elm = mfp.d.createElement('div');
elm.id = 'mfp_warning';
mfp.Mfp.parentNode.insertBefore(elm,mfp.Mfp);
}
// MFP Hidden Object
if(!mfp.$('mfp_hidden')){
var elm = mfp.d.createElement('div');
elm.id = 'mfp_hidden';
mfp.Mfp.insertBefore(elm,mfp.Mfp.firstChild);
}
// Flat confirmation screen
if(!mfp.$('mfp_phase_confirm')){
var elm = mfp.d.createElement('div');
elm.id = 'mfp_phase_confirm';
mfp.Mfp.parentNode.insertBefore(elm,mfp.Mfp);
elm = mfp.d.createElement('div');
elm.id = 'mfp_phase_confirm_inner';
mfp.$('mfp_phase_confirm').appendChild(elm);
}
this.Stat = new Object();
this.Stat.qty = 0;
this.Stat.date = new Date((Number(mfpConfigs['Time'])*1000));
this.Stat.dateClient = new Date();
this.Stat.dateConfirm = new Date();
this.Mfp.method = 'post';
this.MSIELegacy = navigator.userAgent.match(/MSIE (5|6|7|8)/);
this.Mfp.acceptCharset = 'UTF-8';
this.Mfp.action = mfp.$('mfpjs').src;
this.sandbox(function(){
mfp.Mfp.noValidate = true;
});
this.FocusTime = 0;
this.Index = new Array();
this.Ready = false;
this.IndexName = new Object();
this.Names = new Array();
this.Required = new Object();
this.CurrentElement = 0;
this.ElementsClassName = new Object();
this.Elements = new Object();
this.Cookie = new Object();
this.Timeline = new Array();
this.GET = new Object();
this.Resume = new Array();
this.SendFlag = false;
this.Items = new Object();
this.Cart = new Array();
this.Price = 0;
this.Cost = 0;
this.UnloadEvent = false;
this.DisableSubmit = true;
this.LastFocus = null;
this.ExtendErrorMsg = "";
this.ConfirmHTML = "";
this.DropFlag = false;
this.FinalAnswer = true;
this.ErrorLog = new Array();
this.Audio = !!(document.createElement('audio').canPlayType);
this.SoundEffect = new Object();
this.Analytics = new Object();
this.Analytics.qty = 0;
this.Analytics.requiredQty = 0;
this.Analytics.type = new Object();
mfpConfigs['ConfirmationMode'] = Number(mfpConfigs['ConfirmationMode']);
mfp.stripe();
if(document.cookie){
var cookies = new Array();
cookies = document.cookie.split('; ');
for(var i=0;i<cookies.length;i++){
var cookie = new Array();
cookie = cookies[i].split('=');
this.Cookie[cookie[0]] = cookie[1];
}
if(this.Cookie['_MFP']){
this.Resume = this.Cookie['_MFP'].split('|');
}
}
if(location.search){
var gets = new Array();
gets = (location.search.substring(1,location.search.length)).split('&');
for(var i=0;i<gets.length;i++){
var get = new Array();
get = gets[i].split('=');
this.GET[decodeURIComponent(get[0])] = decodeURIComponent(get[1]);
}
}
if(location.hash.indexOf('#WarningCode') > -1){
var WarningCode = Number(location.hash.substring(12,14)) - 1;
if(mfpLang['WarningCode'][WarningCode]){
mfp.warning(mfpLang['WarningCode'][WarningCode]);
}
// setTimeout(function(){
// mfp.$('mfp_warning').style.display = "none";
// },3000);
}
else if(location.hash.indexOf('#Warning') > -1){
var WarningStr = location.hash.substring(1,location.hash.length);
if(mfpLang[WarningStr]) {
mfp.warning(mfpLang[WarningStr]);
};
};
//if(mfpConfigs['OpenDate'] != ''){
if((new Date(mfpConfigs['OpenDate'].replace(/-/ig,'/'))).getTime() > mfp.Stat.date.getTime() && mfpConfigs['OpenDate'] != ''){
mfp.error(mfpLang['ErrorCode3'].replace('$1',mfpConfigs['OpenDate']));
}
else if((new Date(mfpConfigs['CloseDate'].replace(/-/ig,'/'))).getTime() < mfp.Stat.date.getTime() && mfpConfigs['CloseDate'] != ''){
mfp.error(mfpLang['ErrorCode2'].replace('$1',mfpConfigs['CloseDate']));
}
else if(Number(mfpConfigs['LimitOver'])){
mfp.error(mfpLang['ErrorCode1']);
}
else {
if(mfpConfigs['Acceptable'])
mfp.warning(mfpLang['WarningCode1'].replace('$1',mfpConfigs['Acceptable']),1);
if(mfpConfigs['CloseDate']){
var sands = Math.floor(((new Date(mfpConfigs['CloseDate'].replace(/-/ig,'/'))).getTime() - mfp.Stat.date.getTime()) / 1000);
var $2;
if(sands > (60*60*24))
$2 = mfpLang['TimeDay'].replace('$1',Math.floor(sands/(60*60*24)));
else if(sands > (60*60))
$2 = mfpLang['TimeHour'].replace('$1',Math.floor(sands/(60*60)));
else if(sands > 60)
$2 = mfpLang['TimeMin'].replace('$1',Math.floor(sands/60));
else
$2 = mfpLang['TimeSec'].replace('$1',sands);
var msg = mfpLang['WarningCode2'].replace('$1',mfpConfigs['CloseDate']);
msg = msg.replace('$2',$2);
mfp.warning(msg,1);
}
mfp.size();
mfp.add(window,"scroll",function(){mfp.size();});
mfp.add(window,"resize",function(){mfp.size();});
mfp.add(window,"unload",function(){mfp.onunload();});
mfp.extend.run('startup');
mfp.initialize();
}
}
}
var mfp = new MailformPro();
var mfpElementsList = new Array();
var mfpElementsListCheck = new Object();
function mfpElementsListPrompt(){
prompt('MailformPro Elements List',mfpElementsList.join(','));
};
function mfpOperationCheckDetail(obj){
obj.style.display = 'none';
mfp.$('mfp_OperationCheck_inner').style.display = 'block';
};
function mfpOperationCheckSheet(){
var tObj = mfp.$('mfpOperationCheckSheet').getElementsByTagName('input');
var status = true;
for(var i=0;i<tObj.length;i++){
if(!tObj[i].checked){
status = false;
};
};
if(status){
setTimeout(function(){
alert("確認はバッチリですね！ではconfig.cgiの\npush @AddOns,'OperationCheck.js';\nを削除またはコメントアウトし、この表示を消しましょう。\nたくさんのお問い合わせが来ることを祈っています札幌から！");
},100);
};
};
var mfpOperationCheckObject = [];
mfp.extend.event('ready',
function(){
var version = '4.2.7';
var elm = mfp.d.createElement('div');
elm.id = 'mfp_OperationCheck';
mfp.Mfp.parentNode.insertBefore(elm,mfp.$('mfp_warning'));
var par = Math.round(mfp.Analytics.requiredQty/mfp.Analytics.qty*10000)/100;
var src = mfp.$('mfpjs').src + '?module=check';
if(mfp.$('mfpjs').src.indexOf('?') > -1){
src = mfp.$('mfpjs').src + '&module=check';
};
var innerHTML = '<strong>メールフォームプロ 動作チェック アドオン</strong>';
innerHTML += '<p>mailformpro.cgi version.'+version+' は正常に動作しています。 <button type="button" onclick="mfpOperationCheckDetail(this)">[ 詳細を表示する ]</button></p>';
innerHTML += '<div id="mfp_OperationCheck_inner">';
innerHTML += '<p><a href="'+src+'" target="_blank">[ CGI動作チェックモジュールを実行する ]</a> <button onclick="mfpElementsListPrompt()" type="button">[ エレメントリストを取得 ]</button></p>';
innerHTML += '<p>この表示はconfig.cgiの設定により消すことができます。っていうか消して。</p>';
innerHTML += '<p>このフォームには'+mfp.Analytics.qty+'個のエレメントが配置されており'+mfp.Analytics.requiredQty+'個('+par+'%)が必須項目です。</p>';
var ElementsType = new Array();
for(var prop in mfp.Analytics.type){
ElementsType.push(prop+"/"+mfp.Analytics.type[prop]);
};
innerHTML += '<p>'+ElementsType.join('、')+'で構成されています。</p>';
innerHTML += '</div>';
innerHTML += '<ul id="mfpOperationCheckSheet">';
innerHTML += '<li><label><input type="checkbox" onchange="mfpOperationCheckSheet()"> sendmailのパスの設定はお済みですか？</label></li>';
innerHTML += '<li><label><input type="checkbox" onchange="mfpOperationCheckSheet()"> フォームの送信先メールアドレスは変更しましたか？</label></li>';
innerHTML += '<li><label><input type="checkbox" onchange="mfpOperationCheckSheet()"> 自動返信メールの署名は変更しましたか？</label></li>';
innerHTML += '<li><label><input type="checkbox" onchange="mfpOperationCheckSheet()"> メールの送信テストは行いましたか？</label></li>';
innerHTML += '</ul>';
elm.innerHTML = innerHTML;
mfp.css(mfp.$('mfp_OperationCheck'),{
"borderRadius": "3px",
"fontSize": "16px",
"lineHeight": "1.5em",
"color": "#090",
"margin": "10px auto",
"boxShadow": "0px 2px 10px #666",
"textAlign": "left",
"padding": "10px",
"backgroundColor": '#222'
});
}
);
mfp.extend.event('init',
function(e){
if(e.name && !mfpElementsListCheck[e.name]){
mfpElementsList.push(e.name);
mfpElementsListCheck[e.name] = true;
}
}
);
function mfp_char1byte(str){
for(var i=0;i<str.length;i++){
if(escape(str.charAt(i)).length >= 4){
return true;
break;
};
};
return false;
};
function mfp_char2byte(str){
for(var i=0;i<str.length;i++){
if(!(escape(str.charAt(i)).length >= 4)){
return true;
break;
};
};
return false;
};
mfp.extend.event('check',
function(obj){
if(obj.name != ""){
if((mfp.Elements[obj.name].type == "text" || mfp.Elements[obj.name].type == "textarea" || mfp.Elements[obj.name].type == "email") && obj.getAttribute('data-charcheck') && obj.value != "" && obj.value != obj.defaultValue){
// data-charcheck="digit" 数字のみ
// data-charcheck="alphabet" 英語のみ
// data-charcheck="digit_and_alphabet" 英語と数字のみ(記号含まず)
// data-charcheck="kana" 全角カタカナとスペースのみ---edit poo
if(obj.value.match(/[^0-9]/) && obj.getAttribute('data-charcheck') == 'digit')
mfp.ExtendErrorMsg = '$name に数字以外の文字が入力されています。';
else if(obj.value.match(/[^A-Za-z ]/) && obj.getAttribute('data-charcheck') == 'alphabet')
mfp.ExtendErrorMsg = '$name に英字以外の文字が入力されています。';
else if(obj.value.match(/[^A-Za-z0-9]/) && obj.getAttribute('data-charcheck') == 'digit_and_alphabet')
mfp.ExtendErrorMsg = '$name に英数字以外の文字が入力されています。';
else if(obj.value.match(/[^ァ-ヶー 　]/) && obj.getAttribute('data-charcheck') == 'kana')
mfp.ExtendErrorMsg = '$name にカタカナ以外の文字が入力されています。';
else if(mfp_char1byte(obj.value) && obj.getAttribute('data-charcheck') == 'hankaku')
mfp.ExtendErrorMsg = '$name に半角以外の文字が入力されています。';
else if(mfp_char2byte(obj.value) && obj.getAttribute('data-charcheck') == 'zenkaku')
mfp.ExtendErrorMsg = '$name に全角以外の文字が入力されています。';
}
}
}
);
// 郵便番号からの住所入力機能
// prefcode.js 1.0.0 / 2013-01-21
mfp.extend.event('init',
function(obj){
if(obj.getAttribute('data-address')){
mfp.add(obj,"keyup",function(){
var CallBackElements = obj.getAttribute('data-address').split(',');
var value = obj.value;
if(value.length > 6){
value = value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
return String.fromCharCode(s.charCodeAt(0) - 65248);
});
var border = new Array("-", "－", "ー", "―", "ｰ", "‐");
for(var i=0;i<border.length;i++)
value = value.replace(border[i], "");
if(!(value.match(/[^0-9]+/)) && value.length > 6){
var s = document.createElement("script");
var u = '?';
if(mfp.$('mfpjs').src.indexOf('?') > -1) u = '&';
s.src = mfp.$('mfpjs').src + u + 'addon=prefcode/prefcode.js&zip=' + value
+ '&a1=' + encodeURI(CallBackElements[0])
+ '&a2=' + encodeURI(CallBackElements[1])
+ '&a3=' + encodeURI(CallBackElements[2]);
document.body.appendChild(s);
};
};
});
}
}
);
mfp.extend.event('blur',
function(obj){
if(obj.name){
if(obj.getAttribute('data-address') && obj.value != ""){
var CallBackElements = obj.getAttribute('data-address').split(',');
var value = obj.value;
value = value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
return String.fromCharCode(s.charCodeAt(0) - 65248);
});
var border = new Array("-", "－", "ー", "―", "ｰ", "‐");
for(var i=0;i<border.length;i++)
value = value.replace(border[i], "");
if(!(value.match(/[^0-9]+/)) && value.length > 6){
var s = document.createElement("script");
var u = '?';
if(mfp.$('mfpjs').src.indexOf('?') > -1) u = '&';
s.src = mfp.$('mfpjs').src + u + 'addon=prefcode/prefcode.js&zip=' + value
+ '&a1=' + encodeURI(CallBackElements[0])
+ '&a2=' + encodeURI(CallBackElements[1])
+ '&a3=' + encodeURI(CallBackElements[2]);
document.body.appendChild(s);
}
}
}
}
);
function callbackMFPZip(stat,a1,a2,a3,b1,b2,b3){
if(stat){
if(a1 == a2 && a2 == a3)
mfp.$(mfp.Elements[a1].group[0]).value = b1 + b2 + b3
else if(a1 == a2){
mfp.$(mfp.Elements[a1].group[0]).value = b1 + b2;
mfp.$(mfp.Elements[a2].group[0]).value = b3;
}
else if(a2 == a3){
mfp.$(mfp.Elements[a1].group[0]).value = b1;
mfp.$(mfp.Elements[a2].group[0]).value = b2 + b3;
}
else {
mfp.$(mfp.Elements[a1].group[0]).value = b1; //都道府県 b1;
mfp.$(mfp.Elements[a2].group[0]).value = b2; //市区町村 b2;
mfp.$(mfp.Elements[a3].group[0]).value = b3; //丁目番地 b3;
}
mfp.check(mfp.$(mfp.Elements[a1].group[0]));
mfp.check(mfp.$(mfp.Elements[a2].group[0]));
mfp.check(mfp.$(mfp.Elements[a3].group[0]));
}
}
// datelist.js 1.0.1
// 2014-11-13
mfpLang['week'] = new Array('日','月','火','水','木','金','土');
mfpLang['dayOptgroup'] = '$y年$m月';
mfpLang['dayText'] = '$y年$m月$d日($w)';
//mfpLang['dayText'] = '$d日($w)';
mfpLang['dayValue'] = '$y-$m-$d';
mfpConfigs['weekColors'] = new Array('#FEE','#FFF','#FFF','#FFF','#FFF','#FFF','#EEF');
// data-daystart="5"
// 5日後から表示
// data-daymax="60"
// 60日間分表示
// data-dayexc="2014-12-24,2015-01-01"
// 2014年12月24日と2015年01月01日は非表示
// data-dayexcon="2014-12-25,2015-01-02"
// 2014年12月25日と2015年01月02日は表示
// data-weekexc="1,0,0,0,0,0,0"
// 日・月・火・水・木・金・土 で非表示は1
// 上記の例では日曜日は非表示
function mfpDayFormat(y,m,d,w,str){
str = str.replace('$y',y);
str = str.replace('$m',m);
str = str.replace('$d',d);
str = str.replace('$w',w);
return str;
}
mfp.extend.event('init',
function(obj){
if(obj.getAttribute('data-daystart') && obj.getAttribute('data-daymax')){
var daymax = Number(obj.getAttribute('data-daymax'));
var daystart = Number(obj.getAttribute('data-daystart'));
var daytype = obj.getAttribute('data-daytype');
//var lastday = obj.getAttribute('data-lastday');
var excweek = new Array();
var excdates = new Array();
var excday = "";
var excdayon = "";
var lastday,startday;
if(obj.getAttribute('data-lastday')){
lastday = new Date(obj.getAttribute('data-lastday'));
};
if(obj.getAttribute('data-startday')){
startday = new Date(obj.getAttribute('data-startday'));
};
if(obj.getAttribute('data-weekexc')){
excweek = obj.getAttribute('data-weekexc').split(',');
};
if(obj.getAttribute('data-dayexc')){
excday = obj.getAttribute('data-dayexc');
};
if(obj.getAttribute('data-dayexcon')){
excdayon = obj.getAttribute('data-dayexcon');
};
var daycount = 0;
var dayAcount = 0;
var optgroup = "";
var enabled = false;
while(daycount < daymax){
var t = (Number(mfpConfigs['Time']) + (daycount * 86400))  * 1000;
var dayDate = new Date(t);
var num = obj.length;
var y = dayDate.getFullYear();
var m = dayDate.getMonth() + 1;
var d = dayDate.getDate();
var w = dayDate.getDay();
if(m < 10){
m = '0'+m;
};
if(d < 10){
d = '0'+d;
};
var daystr = y+"-"+m+"-"+d;
if(!daytype && daycount >= daystart){
enabled = true;
}
else if(daytype && dayAcount >= daystart){
enabled = true;
};
if(lastday && dayDate.getTime() >= lastday.getTime()){
enabled = false;
};
if(startday && dayDate.getTime() < startday.getTime()){
enabled = false;
};
if(excweek[dayDate.getDay()] == undefined || excweek[dayDate.getDay()] == 0 || excdayon.indexOf(daystr) > -1){
if(excday.indexOf(daystr) == -1){
// Active Day
if(enabled){
if(navigator.userAgent.indexOf("MSIE") == -1) {
if(optgroup != (obj.id+'-'+y+'-'+m)){
var elm = mfp.d.createElement('optgroup');
elm.label = mfpDayFormat(y,m,d,w,mfpLang['dayOptgroup']);
elm.id = (obj.id+'-'+y+'-'+m);
obj.appendChild(elm);
optgroup = (obj.id+'-'+y+'-'+m);
};
var elm = mfp.d.createElement('option');
elm.text = mfpDayFormat(y,m,d,mfpLang['week'][w],mfpLang['dayText']);
elm.value = mfpDayFormat(y,m,d,mfpLang['week'][w],mfpLang['dayValue']);
elm.style.backgroundColor = mfpConfigs['weekColors'][w];
mfp.$(optgroup).appendChild(elm);
}
else {
obj.length++;
obj.options[num].text = mfpDayFormat(y,m,d,mfpLang['week'][w],mfpLang['dayText']);
obj.options[num].value = mfpDayFormat(y,m,d,w,mfpLang['dayValue']);
obj.options[num].style.backgroundColor = mfpConfigs['weekColors'][w];
};
};
dayAcount++;
};
};
daycount++;
}
}
}
);
//
// taboowords.js 1.0.0 / 2015-03-03
//
mfp.TabooWords = [];
mfp.extend.event('check',
function(obj){
if(obj.name != "" && mfp.TabooWords.length > -1 && obj.value != obj.defaultValue && obj.value != ""){
var val = obj.value;
var hitWords = [];
for(var i=0;i<mfp.TabooWords.length;i++){
if(val.indexOf(mfp.TabooWords[i]) > -1){
hitWords.push('「'+mfp.sanitizing(mfp.TabooWords[i])+'」');
}
}
if(hitWords.length > 0){
var word = hitWords.join('、');
mfp.ExtendErrorMsg = '$name に'+word+'という文字を含める事はできません。';
}
}
}
);
function setTaboowords(arr){
mfp.TabooWords = arr;
}
mfp.extend.event('startup',
function(){
mfp.call(mfp.$('mfpjs').src,'addon=taboowords/taboowords.js&callback=setTaboowords');
}
);
mfpConfigs['ErrorFocusDisabled'] = true;
mfp.extend.event('elementError',
function(obj){
if(mfp.Ready){
var top = mfp.absolutePosition(obj.id);
mfp.smoothScroll(top-50,1000);
setTimeout(function(){
mfp.$(obj.id).focus();
},1000);
//mfp.scroll(obj.id);
};
}
);
//
// ticket.js 1.0.0 / 2021-01-26
//
mfpLang['WarningTicketConflictError'] = 'お申し込み内容はすでに他のお客様からお申し込まれてしまいました。';
var MfpTicket = {
Label: 'アイテムを選択してください',
Objects: [],
checked: function(obj){
var id = obj.getAttribute('data-id');
var objects = mfp.byClassName(mfp.$('mfp_ticket_map_'+id),'mfp_ticket_'+id);
var index = mfp.$('mfp_ticket_select_'+id).selectedIndex;
var itemId = mfp.$('mfp_ticket_select_'+id).options[index].value;
var itemText = mfp.$('mfp_ticket_select_'+id).options[index].text;
var value = [];
MfpTicket.Objects[id].cart = [];
MfpTicket.Objects[id].price = 0;
for(var i=0;i<objects.length;i++){
if(objects[i].checked && !objects[i].disabled){
var reserveId = itemId + '_' + objects[i].getAttribute('data-name');
var price = parseInt(objects[i].value);
var j = [];
j.name = itemText + ' ' + objects[i].getAttribute('data-name');
j.price = price;
j.id = reserveId;
value.push('[' + reserveId + ']' + itemText + ' ' + objects[i].name + ' / ' + mfp.cm(price) + '円');
MfpTicket.Objects[id].cart.push(j);
MfpTicket.Objects[id].price += price;
};
};
mfp.$(id).value = value.join("\n");
mfp.calc();
},
rebuild: function(json){
mfp.$('mfp_ticket_map_'+json.id).innerHTML = "";
var leftMax = 0;
var topMax = 0;
for(var i=0;i<json.ticket.length;i++){
var div = document.createElement('div');
var label = document.createElement('label');
var span = document.createElement('span');
var input = document.createElement('input');
input.type = 'checkbox';
if(!json.ticket[i].price){
input.disabled = true;
input.checked = true;
}
else {
input.value = json.ticket[i].price;
};
input.setAttribute('data-name',json.ticket[i].id);
var left = ((json.ticket[i].x-1) * 20);
var top = ((json.ticket[i].y-1) * 20);
if(leftMax < left){
leftMax = left;
};
if(topMax < top){
topMax = top;
};
span.innerHTML = json.ticket[i].name || json.ticket[i].id;
div.style.left = left + 'px';
div.style.top = top + 'px';
input.setAttribute('data-id',json.id);
input.className = 'mfp_ticket_'+json.id;
input.onchange = function(){
MfpTicket.checked(this);
};
label.appendChild(input);
label.appendChild(span);
div.appendChild(label);
mfp.$('mfp_ticket_map_'+json.id).appendChild(div);
};
mfp.$('mfp_ticket_map_'+json.id).style.minHeight = (topMax + 40) + 'px';
mfp.$('mfp_ticket_map_'+json.id).style.minWidth = (leftMax + 40) + 'px';
MfpTicket.Objects[json.id].cart = [];
MfpTicket.Objects[json.id].price = 0;
mfp.calc();
},
change: function(obj){
if(obj.value != ""){
var id = obj.getAttribute('data-id');
mfp.call(mfp.$('mfpjs').src,'addon=ticket/ticket.js&callback=MfpTicket.rebuild&id='+id+'&file='+MfpTicket.Objects[id].file+'&item='+obj.value);
};
},
reset: function(id){
var selectId = 'mfp_estimate_wrap_' + id + '_5_select';
mfp.$(selectId).selectedIndex = 0;
var col = 5;
var querys = new Array();
for(var i=0;i<MfpTicket.Objects[id].query.length+1;i++){
if(i < (col-6)){
querys.push(MfpTicket.Objects[id].query[i]);
}
else {
var childId = 'mfp_estimate_wrap_' + id + '_' + (i+6);
if(mfp.$(childId)){
mfp.$(childId).parentNode.removeChild(mfp.$(childId));
};
};
};
MfpTicket.Objects[id].query = querys;
MfpTicket.Objects[id].query.push("");
if(mfp.$('mfp_estimate_wrapper_'+id)){
var top = mfp.absolutePosition('mfp_estimate_list_'+id);
mfp.smoothScroll(top-50,1000);
};
},
callback: function(json){
mfp.$('mfp_ticket_select_' + json.id).length = json.items.length + 1;
mfp.$('mfp_ticket_select_' + json.id).options[0].text = MfpTicket.Objects[json.id].label;
mfp.$('mfp_ticket_select_' + json.id).options[0].value = "";
for(var i=0;i<json.items.length;i++){
mfp.$('mfp_ticket_select_' + json.id).options[i+1].text = json.items[i].text1 + ' ' + json.items[i].text2 + ' ' + json.items[i].text3 + ' ' + json.items[i].text4;
mfp.$('mfp_ticket_select_' + json.id).options[i+1].value = json.items[i].id;
};
},
add: function(obj){
var item = [];
item.id = obj.getAttribute('data-id');
item.name = obj.getAttribute('data-name');
item.code = obj.getAttribute('data-code');
item.image = obj.getAttribute('data-image');
item.price = obj.getAttribute('data-price');
item.status = obj.getAttribute('data-status');
MfpTicket.Objects[item.id].cart.push(item);
MfpTicket.rebuild(item.id);
MfpTicket.reset(item.id);
},
remove: function(obj){
var cart = [];
var id = obj.getAttribute('data-id');
var num = obj.getAttribute('data-num');
for(var i=0;i<MfpTicket.Objects[id].cart.length;i++){
if(i != num){
cart.push(MfpTicket.Objects[id].cart[i]);
};
};
MfpTicket.Objects[id].cart = [];
for(var i=0;i<cart.length;i++){
MfpTicket.Objects[id].cart.push(cart[i]);
};
MfpTicket.rebuild(id);
mfp.calc();
},
finish: function(json){
var id = json.id;
var wrap = document.createElement('div');
var button = document.createElement('button');
wrap.id = 'mfp_estimate_wrap_' + json.id + '_' + (MfpTicket.Objects[id].query.length+5);
wrap.className = 'mfp_estimate_wrap';
var label = document.createElement('div');
label.className = 'mfp_estimate_label';
label.innerHTML = json.name + ' / ' + json.code;
button.setAttribute('data-id',json.id);
button.setAttribute('data-name',json.name);
button.setAttribute('data-code',json.code);
button.setAttribute('data-status',MfpTicket.Objects[id].query.join('/'));
wrap.appendChild(label);
if(json.image){
var image = document.createElement('img');
image.src = "images/" + json.image;
wrap.appendChild(image);
button.setAttribute('data-image',json.image);
};
var strong = document.createElement('strong');
strong.innerHTML = '&yen;<em>' + mfp.cm(json.price) + '</em>'
button.setAttribute('data-price',json.price);
wrap.appendChild(strong);
if(mfp.$(json.id).type == 'textarea'){
button.innerHTML = 'リストに追加';
button.className = 'mfp_estimate_button';
button.onclick = function(){
MfpTicket.add(this);
};
wrap.appendChild(button);
};
wrap.style.opacity = 0;
mfp.$('mfp_estimate_wrapper_' + json.id).appendChild(wrap);
setTimeout(function(){
mfp.$('mfp_estimate_wrap_' + json.id + '_' + (MfpTicket.Objects[id].query.length+5)).style.opacity = '1';
},100);
},
error: function(code){
console.log('Error Code ' + code);
}
};
mfp.extend.event('calc',
function(){
for(var prop in MfpTicket.Objects){
if(MfpTicket.Objects[prop].price){
for(var i=0;i<MfpTicket.Objects[prop].cart.length;i++){
mfp.addcart(MfpTicket.Objects[prop].cart[i].name,MfpTicket.Objects[prop].cart[i].id,MfpTicket.Objects[prop].cart[i].price,1);
mfp.Price += MfpTicket.Objects[prop].cart[i].price;
};
};
};
}
);
mfp.extend.event('init',
function(obj){
if(obj.getAttribute('data-ticket')){
MfpTicket.Objects[obj.id] = [];
MfpTicket.Objects[obj.id].label = obj.getAttribute('data-ticket-label') || MfpTicket.Label;
MfpTicket.Objects[obj.id].cart = [];
MfpTicket.Objects[obj.id].json = [];
MfpTicket.Objects[obj.id].price = 0;
MfpTicket.Objects[obj.id].file = obj.getAttribute('data-ticket');
if(obj.getAttribute('data-ticket-value-hide')){
obj.style.display = 'none';
}
else {
obj.readOnly = true;
};
var wrap = document.createElement('div');
wrap.className = 'mfp_ticket_wrapper';
wrap.id = 'mfp_ticket_wrapper_' + obj.id;
var map = document.createElement('div');
map.className = 'mfp_ticket_map';
map.id = 'mfp_ticket_map_' + obj.id;
if(obj.getAttribute('data-ticket-background')){
map.style.backgroundImage = 'url('+obj.getAttribute('data-ticket-background')+')';
};
wrap.appendChild(map);
obj.parentNode.insertBefore(wrap,obj);
//obj.style.display = 'none';
};
}
);
mfp.extend.event('ready',
function(){
for(var prop in MfpTicket.Objects){
var obj = mfp.$(prop);
var select = document.createElement('select');
select.className = 'mfp_element_all mfp_element_select-one';
select.setAttribute('data-id',obj.id);
select.id = 'mfp_ticket_select_' + obj.id;
select.onchange = function(){
MfpTicket.change(this);
};
obj.parentNode.insertBefore(select,mfp.$('mfp_ticket_wrapper_'+obj.id));
mfp.call(mfp.$('mfpjs').src,'addon=ticket/ticket.js&callback=MfpTicket.callback&id='+prop+'&file='+MfpTicket.Objects[prop].file);
};
}
);
mfpLang['WarningCode'][12] = '利用できない文字列が含まれています。';
mfp.startup();