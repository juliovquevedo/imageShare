import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo'
export const Pictures = new Mongo.Collection('pictures');

Meteor.startup(() => {
  // code to run on server at startup
  console.log("I am the server");
  console.log(Pictures.find().count());

  Meteor.startup(function() {
		Pictures.remove({});
	});

	Pictures.insert({
		img_src:'./robert.jpg',
		img_alt:'Robert',
		description: 'Pianist and Soccer Player',
		place: 'album'
	});
	Pictures.insert({
		img_src:'robert.jpg',
		img_alt:'Robert',
		description: 'Pianist and Soccer Player',
		place: 'album'
	});
	Pictures.insert({
		img_src:'robert.jpg',
		img_alt:'Robert',
		description: 'Pianist and Soccer Player',
		place: 'album'
	});
	Pictures.insert({
		img_src:'robert.jpg',
		img_alt:'Robert',
		description: 'Pianist and Soccer Player',
		place: 'album'
	});
	Pictures.insert({
		img_src:'robert.jpg',
		img_alt:'Robert',
		description: 'Pianist and Soccer Player',
		place: 'album'
	});
	console.log(Pictures.find().count());
});