var img_data = [
{
	img_src:"robert.jpg",
	img_alt:"Robert",
	description: "Pianist and Soccer Player",
	place: "allpics"
},
{
	img_src:"john3.jpeg",
	img_alt:"John",
	description: "Soccer Player extraordinaire",
	place: "allpics"
},
{
	img_src:"matthew.jpeg",
	img_alt:"Matthew",
	description: "Math magician",
	place: "allpics"
},
{
	img_src:"brooke.jpg",
	img_alt:"Brooke",
	description: "The princess",
	place: "allpics"
},
{
	img_src:"eric.jpeg",
	img_alt:"Eric",
	description: "Future physicist",
	place: "allpics"
},
];

Template.album.helpers({images:img_data});

Template.album.events({
	'click .js-image': function(event) {
		$(event.target).css("width", "50px");
	}/*,
	'mouseenter .js-image': function(event) {
		$(event.target).css("width", "100px");
	},
	'mouseleave .js-image': function(event) {
		$(event.target).css("width", "100%");
	}*/
});