Pictures = new Mongo.Collection('pictures');

if(Meteor.isClient) {
	Template.album.onRendered(function() {
		var templateInstance = this;

		templateInstance.$('#album').droppable({
			drop: function(evt, ui) {
				var query = {
					_id: ui.draggable.data('id')
				};
				var changes = {
					$set: {
						place: 'album'
					}
				};
				Pictures.update(query, changes);
			}
		});
	});

	Template.picBasket.onRendered(function() {
		var templateInstance = this;

		templateInstance.$('#picBasket').droppable({
			drop: function (evt, ui) {
				var query = {
					_id: ui.draggable.data('id')
				};
				var changes = {
					$set: {
						place: 'picBasket'
					}
				};
				Pictures.update(query, changes);
			}
		});
	});

	Template.allImages.onRendered(function() {
		var templateInstance = this;

		templateInstance.$('.draggable').draggable({
			cursor: 'move',
			helper: 'clone'
		});
	});

	Template.album.helpers({
		pictures: function() {
			return Pictures.find({
				place: 'album'
			});
		}
	});

	Template.picBasket.helpers({
		pictures: function() {
			return Pictures.find({
				place: 'picBasket'
			});
		}
	});

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

	Template.picBasket.events({
		'click .js-delete-image': function(event) {
			var image_id = this._id;
			$("#"+image_id).hide('slow', function() {
				Pictures.remove({"_id": image_id});
			})
		}
	});
}

if(Meteor.isServer) {
	Meteor.startup(function() {
		Pictures.remove({});

		Pictures.insert({
			img_src:"robert.jpg",
			img_alt:"Robert",
			description: "Pianist and Soccer Player",
			place: "album"
		});

		Pictures.insert({
			img_src:"john3.jpeg",
			img_alt:"John",
			description: "Soccer Player extraordinaire",
			place: "album"
		});

		Pictures.insert({
			img_src:"matthew.jpeg",
			img_alt:"Matthew",
			description: "Math magician",
			place: "picBasket"
		});

		Pictures.insert({
			img_src:"brooke.jpg",
			img_alt:"Brooke",
			description: "The princess",
			place: "picBasket"
		});

		Pictures.insert({
			img_src:"eric.jpeg",
			img_alt:"Eric",
			description: "Future physicist",
			place: "picBasket"
		});
	})
}