var NavigationDetector = require('ti.bottombarchecker');
var navigationMode = NavigationDetector.isEdgeToEdgeEnabled();

switch (navigationMode) {
    case 0:
        Ti.API.info('Traditional 3-button navigation is being used');
		NavigationDetector.updateNavigationBarColor("#003784"); // Set the color of the navigation bar
       
        break;
    case 1:
        Ti.API.info('2-button navigation is being used (Android Pie)');
        NavigationDetector.updateNavigationBarColor("#003784"); 
        break;
    case 2:
        Ti.API.info('Gesture navigation is enabled');
        NavigationDetector.updateNavigationBarColor("#151a28");
        break;
    default:
        Ti.API.info('Unknown navigation mode');
        
}