
app.service('dataService', function() {
	var story = null;

	var displayMessage = "Hey Visitor! Everything Looks Good! :)";
	
	return {
		getProperty : function() {
			return story;
		},
		setProperty : function(value) {
			story = value;
		},
		setErrorMessage : function()
		{
			displayMessage = "Error in server connection!";
		},
		getDisplayMessage: function()
		{
			return displayMessage;
		},
		setDisplayMessage: function(value)
		{
		  displayMessage = value;
		}
	};
});