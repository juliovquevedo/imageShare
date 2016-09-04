Pictures = new Mongo.Collection('pictures');

if(Meteor.isClient) {

	Accounts.ui.config({
		passwordSignupFields: "USERNAME_AND_EMAIL"
	});

	Template.album.onRendered(function() {
		var templateInstance = this;

		templateInstance.$('#album').droppable({
			drop: function(evt, ui) {
				var query = {
					_id: ui.draggable.data('id')
				};
				var changes = {
					$set: {
						place: 'album',
						createdOn: new Date()
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
						place: 'picBasket',
						createdOn: new Date()
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

	Template.addPictureForm.events({
		'submit .js-add-picture': function(event) {
			var img_src, img_alt;
			img_src = event.target.img_src.value;
			img_alt = event.target.img_alt.value;

			if(Meteor.user()) {
				Pictures.insert({
					img_src: img_src,
					img_alt: img_alt,
					createdOn: new Date(),
					place: "picBasket",
					createdBy: Meteor.user().username
				});
			}

			$('#addPictureForm').modal('hide');
			return false;
		}
	});

	Template.album.helpers({
		pictures: function() {
			if(Session.get('userFilter')) {
				return Pictures.find(
					{createdBy: Session.get('userFilter')},
					{place: 'album'},
					{sort: {createdOn: -1}}
				);
			} else {
				return Pictures.find(
					{place: 'album'},
					{sort: {createdOn: -1}}
				);
			};
		},

		filtering_pictures: function() {
			if(Session.get('userFilter')) {
				return true;
			} else {
				return false;
			}
		}
	});

	Template.picBasket.helpers({
		pictures: function() {
			return Pictures.find(
				{place: 'picBasket'},
				{sort: {createdOn: -1}
			});
		}
	});

	Template.body.helpers({
		username: function() {
			if (Meteor.user()) {
				return Meteor.user().username;
				//return Meteor.user().emails[0].address;
			}
			else {
				return "there";
			}
		}	
	});

	Template.album.events({
		'click .js-image': function(event) {
			$(event.target).css("width", "150px");
		},

		'click .js-set-picture-filter': function(event) {
			Session.set('userFilter', this.createdBy);
		},

		'click .js-remove-picture-filter': function(event) {
			Session.set('userFilter', undefined);
		}
		/*,
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
		},

		'click .js-showAddPictureForm': function(event) {
			$('#addPictureForm').modal('show');
		}
	});
}

if(Meteor.isServer) {
	Meteor.startup(function() {

	})

}