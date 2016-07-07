/**
 * Multiple Inheritance : Mixins
 */
 class TheSuper
 {

 }

 var mixinAPI = TheSuper => class extends TheSuper {
 	performOAuth2()
 	{
 		console.log('OAuth2');
 	}
 }

 var mixinGoogleMaps = TheSuper => class extends TheSuper {
 	drawMap()
 	{
 		console.log('Map is Drawing');
 	}
 }

 class TheDuper extends mixinAPI(mixinGoogleMaps(TheSuper))
 {

 }

 var obj_child = new TheDuper();
 obj_child.performOAuth2();
 obj_child.drawMap();
