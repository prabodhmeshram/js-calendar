/*
* @author : Prabodh Meshram <prabodh.meshram7@gmail.com>
* @date : 28th Sept 2015
* @desc: Event Listners and Event Binding of the calendar library
*/

var EventListener = function (){
	Object.defineProperties(this,{
		__listeners: {
			value: {}
		}
	});
}

Object.defineProperties(EventListener.prototype,{
	addListener: {
		value: function(type,listner){
			if(typeof this.__listeners[type] === "undefined"){
				this.__listeners[type] = [];
			}
			console.log(this.__listeners[type]);
			this.__listeners[type].push(listner);
		},
		enumerable: true
	},

	__fire: {
		value: function(eventObj){
			if(typeof eventObj.type === "undefined"){
				throw new Error("Type is required for Event Object");
			}

			if(typeof eventObj.target === "undefined"){
				eventObj.target == this;
			}

			var listeners = this.__listeners[eventObj.type];
			if(typeof listeners === "undefined"){
				return;
			}

			var lengthOfListeners = listeners.length;
			for (var listenerIndex = 0; listenerIndex < lengthOfListeners; listenerIndex++) {
				listeners[listenerIndex].call(this,eventObj);
			};

		}
	},

	removeListener: {
		value: function(type,listener){
			var listeners = this.__listeners[type];
			if(typeof listeners === "undefined"){
				return;
			}
			var lengthOfListeners = listeners.length;
			for (var listenerIndex = 0; listenerIndex < lengthOfListeners; listenerIndex++) {
				if(listener === listeners[listenerIndex]){
					listeners.splice(listenerIndex,1);
					break;
				}
			};
		},
		enumerable: true
	},
});

//Define all the events below which will be attached to the calendar
