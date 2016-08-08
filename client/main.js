var img_data = [
{
	img_src:"robert.jpg",
	img_alt:"Robert"
},
{
	img_src:"john3.jpeg",
	img_alt:"John"
},
{
	img_src:"matthew.jpeg",
	img_alt:"Matthew"
},
{
	img_src:"brooke.jpg",
	img_alt:"Brooke"
},
{
	img_src:"eric.jpeg",
	img_alt:"Eric"
},
];

Template.images.helpers({images:img_data});

Template.images.events({
	'click .js-image': function(event) {
		$(event.target).css("width", "50px");
	}
});