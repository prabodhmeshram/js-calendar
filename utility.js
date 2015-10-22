/**
* @author: Prabodh Meshram <prabodh.meshram7@gmail.com>
* @date : 27th Sept 2015
* @desc: utilities for Calendar Js
*/

//Todo :: Renaming with Application global
//Rename it sooner or stuck with this !! Devil Laugh :O
var Another = {};
Another.Utils = {
	DateUtils : {
		DAYMAP : {  
					'Sun':0,
					'Mon':1,
					'Tue':2,
					'Wed':3,
					'Thu':4,
					'Fri':5,
					'Sat':6
				},

		/**
		* @desc: Function to get current Date
		* @params: N/A
		* @return: Moment Date Object
		*/
		getCurrentDate : function(){
			return moment();
		},

		/**
		* @desc: Function to get next occurence of Date object for the date and day provided.
		* @params: MomentObj or Date String mDate , String sDay
		* @return: MomentObj oDate
		*/
		getNextDay: function(mDate,sDay){
			if(sDay === undefined){
				throw new Error("Day not specified");
			}

			var oDate;
			if(mDate === undefined || !mDate._isAMomentObject){
				oDate = new Date(mDate);
				if(oDate == "Invalid Date"){
					oDate = moment();
				}else{
					oDate = moment(oDate);
				}
				if(oDate.get('Day') == this.DAYMAP[sDay]){
					
				}
			}
		}
	}
};