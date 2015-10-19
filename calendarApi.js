// Api to communicate with the Calendar Library
/**
* @author: Prabodh Meshram <prabodh.meshram7@gmail.com>
* @date : 27th Sept 2015
* @desc: Api to interact with calendar library
*/

var JsCalendarApi = function (element) {
	this.__jsCal = new JSCalendar(element);
}

Object.defineProperties(JsCalendarApi.prototype,{
	render: function(){
		this.__jsCal.render();
	}
});

