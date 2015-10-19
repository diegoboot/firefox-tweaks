// Further reading:

// https://github.com/pyllyukko/user.js
// http://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/
// http://thesimplecomputer.info/tscs-firefox-tweak-guide
// http://blog.joshnotes.com/customize-firefox-about-config/
// https://www.privacytools.io/#about_config (Don't believe everything that's written there. No offense meant :^)

// Further credits go to the fine tinfoil-hatted anons on 4/8/*chan who got me into compiling/dissecting their various infographics into a more modern - and paste-able - format.

// About user.js: http://kb.mozillazine.org/User.js_file

// ----------------------------------------------------
// SPEED/PERFORMANCE
// ----------------------------------------------------

// Default values from Tor Browser 4.5.3:
user_pref('network.http.max-connections', 256);
user_pref('network.http.max-persistent-connections-per-proxy', 256);
user_pref('network.http.max-persistent-connections-per-server', 6);
user_pref('network.http.pipelining', true);
user_pref('network.http.pipelining.abtest', false);
user_pref('network.http.pipelining.aggressive', true);
user_pref('network.http.pipelining.max-optimistic-requests', 3);
user_pref('network.http.pipelining.maxrequests', 12);
user_pref('network.http.pipelining.maxsize', 300000);
user_pref('network.http.pipelining.read-timeout', 60000);
user_pref('network.http.pipelining.reschedule-on-timeout', true);
user_pref('network.http.pipelining.reschedule-timeout', 15000);
user_pref('network.http.pipelining.ssl', true);
user_pref('network.http.proxy.pipelining', true);
user_pref('network.http.redirection-limit', 20);
user_pref('network.dns.disablePrefetch', true);
user_pref('network.prefetch-next', true); // http://kb.mozillazine.org/Network.prefetch-next
// (End of Tor default values)

// Enable new cache:
  // https://bugzilla.mozilla.org/show_bug.cgi?id=913807
user_pref('browser.cache.use_new_backend', 1);

// ----------------------------------------------------
// SECURITY/PRIVACY
// ----------------------------------------------------

// Disable WebRTC (extremely important for VPN users - WebRTC *will* leak your real IP address):
  // WebRTC leak test (among other things): https://ipleak.net/
  // https://hacks.mozilla.org/2012/11/progress-update-on-webrtc-for-firefox-on-desktop/
  // https://mozilla.github.io/webrtc-landing/
  // https://wiki.mozilla.org/Media/getUserMedia
user_pref('media.peerconnection.enabled', false);
user_pref('media.peerconnection.use_document_iceservers', false);
user_pref('media.navigator.enabled', false);
user_pref('media.getusermedia.screensharing.enabled', false);
user_pref('media.getusermedia.screensharing.allowed_domains', '');

// Disable DNS proxy bypass:
  // https://superuser.com/questions/103593/how-to-do-dns-through-a-proxy-in-firefox
  // https://bugzilla.mozilla.org/show_bug.cgi?id=134105
  // http://kb.mozillazine.org/Network.proxy.socks_remote_dns
user_pref('network.proxy.socks_remote_dns', true);

// Disable IPv6:
  // Why IPv6 is dangerous for privacy: 
  // https://www.defcon.org/images/defcon-15/dc15-presentations/Lindqvist/Whitepaper/dc-15-lindqvist-WP.pdf
  // https://iapp.org/news/a/2011-09-09-facing-the-privacy-implications-of-ipv6
  // https://www.christopher-parsons.com/ipv6-and-the-future-of-privacy/
  // http://www.zdnet.com/article/security-versus-privacy-with-ipv6-deployment/
user_pref('network.dns.disableIPv6', true);
  // http://knowipv6.digitalelement.com/?p=66
user_pref('network.http.fast-fallback-to-IPv4', true);

// Disable crash reporting:
  // http://kb.mozillazine.org/Breakpad.reportURL
user_pref('breakpad.reportURL', '');

// Disable sending pings:
  // http://kb.mozillazine.org/Browser.send_pings
  // http://kb.mozillazine.org/Browser.send_pings.require_same_host
user_pref('browser.send_pings', false);
user_pref('browser.send_pings.require_same_host', true);

// Enable tracking protection:
user_pref('privacy.donottrackheader.enabled', true);
user_pref('privacy.donottrackheader.value', 1);
user_pref('privacy.trackingprotection.enabled', true);

// Don't connect to remote links on hover:
  // http://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
  // https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_speculative-pre-connections 
user_pref('network.http.speculative-parallel-limit', 0);

// Disable geolocation:
  // Don't do this on mobile browsers if you want Google Maps or similar to see your location.
user_pref('geo.enabled', false);
user_pref('geo.wifi.uri', '');

// Disable geotargeting:
user_pref('browser.search.geoSpecificDefaults', false);
user_pref('browser.search.geoSpecificDefaults.url', '');
user_pref('browser.search.geoip.url', '');

// Disable telemetry:
  // https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref('toolkit.telemetry.archive.enabled', false);
user_pref('toolkit.telemetry.cachedClientID', '');
user_pref('toolkit.telemetry.enabled', false);
user_pref('toolkit.telemetry.previousBuildID', '');
user_pref('toolkit.telemetry.reportingpolicy.firstRun', false);
user_pref('toolkit.telemetry.server', '');
user_pref('toolkit.telemetry.unified', false);

// Disable health report:
  // https://gecko.readthedocs.org/en/latest/services/healthreport/healthreport/index.html#legal-and-privacy-concerns
user_pref('datareporting.healthreport.about.reportUrl', '');
user_pref('datareporting.healthreport.about.reportUrlUnified', '');
user_pref('datareporting.healthreport.documentServerURI', '');
user_pref('datareporting.healthreport.infoURL', '');
user_pref('datareporting.healthreport.logging.consoleEnabled', false);
user_pref('datareporting.healthreport.service.enabled', false);
user_pref('datareporting.healthreport.service.firstRun', false);
user_pref('datareporting.healthreport.uploadEnabled', false);
user_pref('datareporting.policy.dataSubmissionEnabled', false);
user_pref('datareporting.policy.dataSubmissionEnabled.v2', false);

// Disable "Heartbeat":
  // https://wiki.mozilla.org/Advocacy/heartbeat
user_pref('browser.selfsupport.url', '');

// Disable "safe browsing" aka. Google tracking/logging:
  // (Prefs apparently deprecated in FF43 are commented out)
// user_pref('browser.safebrowsing.appRepURL', '');
user_pref('browser.safebrowsing.downloads.enabled', false);
user_pref('browser.safebrowsing.downloads.remote.enabled', false);
user_pref('browser.safebrowsing.enabled', false);
// user_pref('browser.safebrowsing.gethashURL', '');
user_pref('browser.safebrowsing.malware.enabled', false);
// user_pref('browser.safebrowsing.malware.reportURL', '');
user_pref('browser.safebrowsing.provider.google.appRepURL', '');
user_pref('browser.safebrowsing.provider.google.gethashURL', '');
user_pref('browser.safebrowsing.provider.google.lists', '');
user_pref('browser.safebrowsing.provider.google.reportURL', '');
user_pref('browser.safebrowsing.provider.google.updateURL', '');
user_pref('browser.safebrowsing.provider.mozilla.gethashURL', '');
user_pref('browser.safebrowsing.provider.mozilla.updateURL', '');
// user_pref('browser.safebrowsing.reportErrorURL', '');
// user_pref('browser.safebrowsing.reportGenericURL', '');
// user_pref('browser.safebrowsing.reportMalwareErrorURL', '');
user_pref('browser.safebrowsing.reportMalwareMistakeURL', '');
// user_pref('browser.safebrowsing.reportMalwareURL', '');
user_pref('browser.safebrowsing.reportPhishMistakeURL', '');
user_pref('browser.safebrowsing.reportPhishURL', '');
// user_pref('browser.safebrowsing.reportURL', '');
// user_pref('browser.safebrowsing.updateURL', '');
// user_pref('urlclassifier.keyupdatetime.https://sb-ssl.google.com/safebrowsing/newkey', '');

// Disable WebGL:
  // http://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
  // https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern
user_pref('webgl.disabled', true);
user_pref('webgl.disable-extensions', true);

// Disable support for asm.js (http://asmjs.org/):
  // https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
  // https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/
  // https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712
user_pref('javascript.options.asmjs', false);

// Disable rendering of SVG OpenType fonts:
  // https://wiki.mozilla.org/SVGOpenTypeFonts
  // https://github.com/iSECPartners/publications/blob/master/presentations/SVG_Security-rdegraaf-bh_us_2014.pdf
user_pref('gfx.font_rendering.opentype_svg.enabled', false);

// Install unsigned addons in Aurora/Dev-Edition/etc. (Ironically, this was needed for security-enhancing addons like Privacy Badger, HTTPS Everywhere, etc. - don't be stupid and install just any random unsigned addon):
user_pref('xpinstall.signatures.required', false);

// Speed up security delay when installing add-ons:
user_pref('security.dialog_enable_delay', 400);

// ----------------------------------------------------
// APPEARANCE
// ----------------------------------------------------

// Show full URLs (including "http://"):
user_pref('browser.urlbar.trimURLs', false);

// Get rid of the useless "Visit (site)" and "(keyword) - search with (engine)" dropdown in the URL bar (since FF43):
user_pref('browser.urlbar.unifiedcomplete', false);

// Revert to old search bar layout - drop-down list instead of icons:
  // This choice was removed in FF43 - use the Classic Theme Restorer addon if you want it back.
// user_pref('browser.search.showOneOffButtons', false);

// Load searches from right-click context menu in background tab:
  // https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.search.context.loadInBackground
user_pref('browser.search.context.loadInBackground', true);

// Remove "(site) is now fullscreen" nag message:
  // If you think this "facilitates phishing sites", you probably should not browse the internet at all.
  // Before FF43:
// user_pref('full-screen-api.approval-required', false);
  // Since FF43:
user_pref('full-screen-api.warning.delay', 0);
user_pref('full-screen-api.warning.timeout', 0);

// Disable fullscreen animation:
user_pref('browser.fullscreen.animate', false);

// Disable tab animation:
  // http://www.askvg.com/how-to-disable-animation-while-opening-new-tab-in-mozilla-firefox-4-0/
user_pref('browser.tabs.animate', false);

// Don't warn when closing tabs:
user_pref('browser.tabs.warnOnClose', false);
user_pref('browser.tabs.warnOnCloseOtherTabs', false);

// Don't warn when opening about:config:
user_pref('general.warnOnAboutConfig', false);

// Get rid of "Do you really want to leave this site?" popups:
  // https://support.mozilla.org/en-US/questions/1043508
user_pref('dom.disable_beforeunload', true);

// Prevent sites from messing with the right-click menu:
user_pref('dom.event.contextmenu.enabled', false);

// Prevent sites/popups from messing with certain UI elements:
  // http://kb.mozillazine.org/Prevent_websites_from_disabling_new_window_features
user_pref('dom.disable_window_open_feature.location', true); // Always show the URL bar
user_pref('dom.disable_window_open_feature.resizable', true); // Allow to resize the window

// De-crap new tab page, get rid of "directory tiles" ads:
  // http://thenextweb.com/apps/2014/08/28/mozilla-rolls-sponsored-tiles-firefox-nightlys-new-tab-page/
user_pref('browser.newtab.preload', false);
user_pref('browser.newtab.url', 'about:blank');
user_pref('browser.newtabpage.directory.ping', '');
user_pref('browser.newtabpage.directory.source', '');
user_pref('browser.newtabpage.enabled', false);
user_pref('browser.newtabpage.enhanced', false);
user_pref('browser.newtabpage.introShown', true);

// Disable broken auto-scrolling via middle-click:
user_pref('general.autoScroll', false);

// Prettier default fonts (for Windows, at least - might require ttf-mscorefonts on *nix):
user_pref('font.name.monospace.x-unicode', 'Lucida Console');
user_pref('font.name.monospace.x-western', 'Lucida Console');
user_pref('font.name.sans-serif.x-unicode', 'Segoe UI');
user_pref('font.name.sans-serif.x-western', 'Segoe UI');
user_pref('font.name.serif.x-unicode', 'Georgia');
user_pref('font.name.serif.x-western', 'Georgia');

// ----------------------------------------------------
// DEV TOOLS
// ----------------------------------------------------

// Enable eyedropper in dev tools:
user_pref('devtools.command-button-eyedropper.enabled', true);

// Dark theme for dev tools:
user_pref('devtools.theme', 'dark');

// ----------------------------------------------------
// BLOATWARE
// ----------------------------------------------------

// Disable EME, Adobe "Primetime Content Decryption Module" DRM malware:
  // http://techdows.com/2015/04/how-to-uninstall-or-remove-adobe-primetime-decryption-module-plugin-from-firefox-38.html
  // Or simply use "EME-free" builds of Firefox:
  // https://ftp.mozilla.org/pub/firefox/releases/latest/win32-EME-free/en-US/
user_pref('media.gmp-eme-adobe.autoupdate', false);
user_pref('media.gmp-eme-adobe.enabled', false);
user_pref('media.eme.apiVisible', false);
user_pref('media.eme.enabled', false);
user_pref('browser.eme.ui.enabled', false);

// Disable "Firefox Hello" WebRTC malware:
  // https://www.mozilla.org/en-US/privacy/firefox-hello/
user_pref('loop.CSP', '');
user_pref('loop.enabled', false);
user_pref('loop.feedback.baseUrl', '');
user_pref('loop.oauth.google.scope', '');
user_pref('loop.server', '');

// Disable "Pocket":
  // http://venturebeat.com/2015/06/09/mozilla-responds-to-firefox-user-backlash-over-pocket-integration/
user_pref('browser.pocket.api', '');
user_pref('browser.pocket.enabled', false);
user_pref('browser.pocket.oAuthConsumerKey', '');
user_pref('browser.pocket.site', '');

// Disable "social" crap:
  // http://www.ghacks.net/2013/04/10/mozilla-adds-cliqz-msnnow-and-mixi-as-social-providers-to-firefox/
user_pref('social.directories', '');
user_pref('social.remote-install.enabled', false);
user_pref('social.share.activationPanelEnabled', false);
user_pref('social.shareDirectory', '');
user_pref('social.toast-notifications.enabled', false);
user_pref('social.whitelist', '');

// Disable "Reader Mode":
user_pref('reader.parse-on-load.enabled', false);
// user_pref('readinglist.server', '');

// Disable integrated PDF reader:
  // https://blog.mozilla.org/security/2015/08/06/firefox-exploit-found-in-the-wild/
  // If you're going to use an external PDF reader, *don't* use Adobe PDF bloatware. Use a sane reader, such as SumatraPDF.
user_pref('pdfjs.disabled', true);
user_pref('pdfjs.enableWebGL', false);

// Disable various useless and/or intrusive web APIs:
  // https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
user_pref('beacon.enabled', false); // https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref('device.sensors.enabled', false); // https://wiki.mozilla.org/Sensor_API
user_pref('dom.battery.enabled', false); // https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
user_pref('dom.cellbroadcast.enabled', false);
user_pref('dom.event.clipboardevents.enabled', false); // https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/dom.event.clipboardevents.enabled
user_pref('dom.enable_performance', false); // https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
user_pref('dom.gamepad.enabled', false); // https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API
user_pref('dom.netinfo.enabled', false); // https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
user_pref('dom.telephony.enabled', false); // https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref('dom.vibrator.enabled', false);
user_pref('dom.vr.enabled', false); // https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
user_pref('dom.vr.oculus.enabled', false);
user_pref('dom.vr.oculus050.enabled', false);
user_pref('dom.webnotifications.enabled', false); // https://developer.mozilla.org/en-US/docs/Web/API/notification
user_pref('dom.webnotifications.serviceworker.enabled', false); // https://developer.mozilla.org/en-US/docs/Web/API/notification
user_pref('media.webspeech.recognition.enable', false); // https://wiki.mozilla.org/HTML5_Speech_API

// Remove feed content handlers:
  // http://kb.mozillazine.org/Browser.contentHandlers.types.*.uri
  // Yahoo RSS handler:
user_pref('browser.contentHandlers.types.0.title', '');
user_pref('browser.contentHandlers.types.0.type', '');
user_pref('browser.contentHandlers.types.0.uri', '');

// Remove website protocol handlers:
  // http://kb.mozillazine.org/Gecko.handlerService.schemes.%28protocol%29.*.uriTemplate
  // Mibbit:
user_pref('gecko.handlerService.schemes.irc.0.name', '');
user_pref('gecko.handlerService.schemes.irc.0.uriTemplate', '');
user_pref('gecko.handlerService.schemes.ircs.0.name', '');
user_pref('gecko.handlerService.schemes.ircs.0.uriTemplate', '');
  // Yahoo Mail:
user_pref('gecko.handlerService.schemes.mailto.0.name', '');
user_pref('gecko.handlerService.schemes.mailto.0.uriTemplate', '');
  // Gmail:
user_pref('gecko.handlerService.schemes.mailto.1.name', '');
user_pref('gecko.handlerService.schemes.mailto.1.uriTemplate', '');
  // 30 Boxes:
user_pref('gecko.handlerService.schemes.webcal.0.name', '');
user_pref('gecko.handlerService.schemes.webcal.0.uriTemplate', '');

// Disable "Snippets" (Mozilla content shown on about:home):
  // https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_mozilla-content
user_pref('browser.aboutHomeSnippets.updateUrl', '');
