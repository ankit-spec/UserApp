// #import "AppDelegate.h"

// #import <React/RCTBridge.h>
// #import <React/RCTBundleURLProvider.h>
// #import <React/RCTRootView.h>
// #import <React/RCTI18nUtil.h>

// #ifdef FB_SONARKIT_ENABLED
// #import <FlipperKit/FlipperClient.h>
// #import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
// #import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
// #import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
// #import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
// #import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>

// static void InitializeFlipper(UIApplication *application) {
//   FlipperClient *client = [FlipperClient sharedClient];
//   SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
//   [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:application withDescriptorMapper:layoutDescriptorMapper]];
//   [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
//   [client addPlugin:[FlipperKitReactPlugin new]];
//   [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
//   [client start];
// }
// #endif

// @implementation AppDelegate

// - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
// {
// #ifdef FB_SONARKIT_ENABLED
//   InitializeFlipper(application);
// #endif
//  [[RCTI18nUtil sharedInstance] allow:YES];
//    [[RCTI18nUtil sharedInstance] forceRTL:YES];
//   RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
//   RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
//                                                    moduleName:@"AppointmentBookingApp"
//                                             initialProperties:nil];

//   if (@available(iOS 13.0, *)) {
//       rootView.backgroundColor = [UIColor systemBackgroundColor];
//   } else {
//       rootView.backgroundColor = [UIColor whiteColor];
//   }

//   self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
//   UIViewController *rootViewController = [UIViewController new];
//   rootViewController.view = rootView;
//   self.window.rootViewController = rootViewController;
//   [self.window makeKeyAndVisible];
//     [[RCTI18nUtil sharedInstance] allowRTL:YES];

//   return YES;
// }

// - (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
// {
// #if DEBUG
//   return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
// #else
//   return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
// #endif
// }

// @end



#import "AppDelegate.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTI18nUtil.h>

#ifdef FB_SONARKIT_ENABLED
#import <FlipperKit/FlipperClient.h>
#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>
#import <GoogleMaps/GoogleMaps.h>

static void InitializeFlipper(UIApplication *application) {
  FlipperClient *client = [FlipperClient sharedClient];
  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
  [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:application withDescriptorMapper:layoutDescriptorMapper]];
  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
  [client addPlugin:[FlipperKitReactPlugin new]];
  [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
  [client start];
}
#endif

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  
[GMSServices provideAPIKey:@"AIzaSyDhuB4L-JOCo7pANp0p-i00IVAccCXDHMY"]; 
#ifdef FB_SONARKIT_ENABLED
  InitializeFlipper(application);
#endif
  [[RCTI18nUtil sharedInstance] allowRTL:YES];
   [[RCTI18nUtil sharedInstance] forceRTL:YES];
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"AppointmentBookingApp"
                                            initialProperties:nil];

  if (@available(iOS 13.0, *)) {
      rootView.backgroundColor = [UIColor systemBackgroundColor];
  } else {
      rootView.backgroundColor = [UIColor whiteColor];
  }

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];

  

  [[RCTI18nUtil sharedInstance] allowRTL:YES];
if (@available(iOS 13, *)) {
    self.window.overrideUserInterfaceStyle = UIUserInterfaceStyleLight;
}
  // Define UNUserNotificationCenter
  
  return YES;
}

//Called when a notification is delivered to a foreground app.


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
  [[UIApplication sharedApplication] setApplicationIconBadgeNumber:0];
  [UIApplication sharedApplication].applicationIconBadgeNumber = 0;
}



// Required for the notification event. You must call the completion handler after handling the remote notification.
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
}
// Required for the registrationError event.
- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{

}
// Required for localNotification event

@end

