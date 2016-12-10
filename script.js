var app = new Vue({
	el: "#app",
	data: {
		clicks: 0,
		clickAverageSpeed: 0,
		clickInSec: 0,
		clickSpeed: 0,
		time: 1
	},
	methods: {
		clicked: function(){
			this.clicks++;
			this.clickInSec++;
			this.calculateAverageSpeed();
		},
		updateSpeedCounter: function(){
			if(this.clickSpeed>0)
				this.time++;
			this.calculateSpeed();
			this.calculateAverageSpeed();

			var self = this;
			setTimeout(function(){self.updateSpeedCounter(); },1000)
		},
		calculateSpeed: function(){
			this.clickSpeed = this.clickInSec;
			this.clickInSec = 0;
		},
		calculateAverageSpeed: function(){
			this.clickAverageSpeed = Math.round((this.clicks/this.time)*10)/10;
		}
	},
	created: function () {
	    this.updateSpeedCounter();
  	}
});

