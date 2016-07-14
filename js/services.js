angular.module('Excelian.Services', [])
.factory('SliderList', function () {
    var transaction = [];
    transaction.push(
    	{"Date": "","Description": "Lorem ipsum dolor sit amet", "Debit/Credit":"-1.60", "Balance":"414.29"},
		{"Date": "","Description": "Lorem ipsum dolor sit amet", "Debit/Credit":"-1.60", "Balance":"414.29"},
		{"Date": "","Description": "Lorem ipsum dolor sit amet", "Debit/Credit":"-1.60", "Balance":"414.29"}
	);

    return {
        getTransition:function(){
            return transaction;
        }
    };
})
;