var img_data = [
{
	img_src:"robert.jpg",
	img_alt:"Robert",
	place: "allpics"
},
{
	img_src:"john3.jpeg",
	img_alt:"John",
	place: "allpics"
},
{
	img_src:"matthew.jpeg",
	img_alt:"Matthew",
	place: "allpics"
},
{
	img_src:"brooke.jpg",
	img_alt:"Brooke",
	place: "allpics"
},
{
	img_src:"eric.jpeg",
	img_alt:"Eric",
	place: "allpics"
},
];

Template.images.helpers({images:img_data});

Template.images.events({
	'click .js-image': function(event) {
		$(event.target).css("width", "500px");
	},
	'mouseenter .js-image': function(event) {
		$(event.target).css("width", "100px");
	},
	'mouseleave .js-image': function(event) {
		$(event.target).css("width", "100%");
	}
});