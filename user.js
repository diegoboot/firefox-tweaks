// ----------------------------------------------------
// Tweaks padrão para Firefox 45+ • Tweaks for Firefox 45
// (Backward-ish compatible-ish)
// https://diegoboot.github.io/firefox-tweaks
// ----------------------------------------------------

// Leia Também • Further reading
// http://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/
// http://thesimplecomputer.info/tscs-firefox-tweak-guide
// http://blog.joshnotes.com/customize-firefox-about-config/
// https://github.com/pyllyukko/user.js (Contains possibly deprecated preference settings)

// ----------------------------------------------------
// VELOCIDADE / PERFORMANCE • SPEED / PERFORMANCE
// ----------------------------------------------------

// Valores da chaves de rede padrão do baseados no navegador Tor 4.5.3 • Default network values from Tor Browser 4.5.3
user_pref("network.http.max-connections", 256);
user_pref("network.http.max-persistent-connections-per-proxy", 256);
user_pref("network.http.max-persistent-connections-per-server", 6);
user_pref("network.http.pipelining", true);
user_pref("network.http.pipelining.abtest", false);
user_pref("network.http.pipelining.aggressive", true);
user_pref("network.http.pipelining.max-optimistic-requests", 3);
user_pref("network.http.pipelining.maxrequests", 12);
user_pref("network.http.pipelining.maxsize", 300000);
user_pref("network.http.pipelining.read-timeout", 60000);
user_pref("network.http.pipelining.reschedule-on-timeout", true);
user_pref("network.http.pipelining.reschedule-timeout", 15000);
user_pref("network.http.pipelining.ssl", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.redirection-limit", 20);

// Inserira novas linhas
// Botão direito > Nova Opção > Número Inteiro
user_pref("nglayout.initialpaint.delay", 0);
user_pref("content.notify.backoffcount", 5);
user_pref("ui.submenuDelay", 0);
user_pref("browser.cache.memory.capacity", 32768); //‘16384’ para o Firefox consumir 16 MB de memória. Ou ‘32768’ para 32 MB.

//Busque no localizar a linha 
user_pref ("layout.spellcheckDefault", 2);

// Habilitar novo cache • Enable new cache
    // https://bugzilla.mozilla.org/show_bug.cgi?id=913807
user_pref("browser.cache.use_new_backend", 1);

// Artigo Completo • Full Article https://medium.com/@tavernalinux/firefox-velocidade-e-performance-naur%C3%BA-pete%C4%A9-7003e9df3066

// ----------------------------------------------------
// SEGURANÇA / PRIVACIDADE • SECURITY / PRIVACY
// ----------------------------------------------------

// Desativar WebRTC • Disable WebRTC:
    // O intuito de desativar as chaves WebRTC é impedir o vazamento dos seus verdadeiros endereços IP internos e externos.
    // This is extremely important for VPN users - WebRTC *will* leak your real internal and external IP addresses.
    // WebRTC leak test (among other things): https://ipleak.net/
    // https://hacks.mozilla.org/2012/11/progress-update-on-webrtc-for-firefox-on-desktop/
    // https://mozilla.github.io/webrtc-landing/
    // https://wiki.mozilla.org/Media/getUserMedia
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.navigator.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");

// Desativar IPV6 • Disable IPv6:
    // Veja alguns textos sobre o porquê de IPv6 não é bom para a privacidade | Some texts on why IPv6 is no good for privacy: 
    // https://www.defcon.org/images/defcon-15/dc15-presentations/Lindqvist/Whitepaper/dc-15-lindqvist-WP.pdf
    // https://iapp.org/news/a/2011-09-09-facing-the-privacy-implications-of-ipv6
    // https://www.christopher-parsons.com/ipv6-and-the-future-of-privacy/
    // http://www.zdnet.com/article/security-versus-privacy-with-ipv6-deployment/
user_pref("network.dns.disableIPv6", true);
    // http://knowipv6.digitalelement.com/?p=66
user_pref("network.http.fast-fallback-to-IPv4", true);

// Desativar envio de pings HTML5 • Disable sending HTML5 pings:
user_pref("browser.send_pings", false); // http://kb.mozillazine.org/Browser.send_pings
user_pref("browser.send_pings.require_same_host", true); // http://kb.mozillazine.org/Browser.send_pings.require_same_host

// Desativar desvio de proxy DNS • Disable DNS proxy bypass:
    // https://superuser.com/questions/103593/how-to-do-dns-through-a-proxy-in-firefox
    // https://bugzilla.mozilla.org/show_bug.cgi?id=134105
    // http://kb.mozillazine.org/Browser.send_pings.require_same_host
user_pref("network.proxy.socks_remote_dns", true); // http://kb.mozillazine.org/Network.proxy.socks_remote_dns

// Desativar pré-busca de DNS • Disable DNS prefetching:
    // http://www.ghacks.net/2013/04/27/firefox-prefetching-what-you-need-to-know/
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// Desativar pré-busca de Link • Disable link prefetching:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
user_pref("network.prefetch-next", false);

// Não ser direcionado para links remotos em foco • Don't connect to remote links on hover:
    // http://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
    // https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_speculative-pre-connections 
user_pref("network.http.speculative-parallel-limit", 0);

// Habilitar proteção de rastreamento • Enable tracking protection:
    // Shady advertisers won't honor these settings, so make sure you use Privacy Badger, Disconnect, or similar addons.
    // https://www.bestvpn.com/blog/8499/make-firefox-secure-using-aboutconfig/
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);
user_pref("privacy.trackingprotection.enabled", true);

// Punycode • Show Punycode for international domain names, prevent some phishing attempts:
    // http://kb.mozillazine.org/Network.IDN_show_punycode
user_pref("network.IDN_show_punycode", true);

// Impedir que sites vasculhem por conteúdo da área de transferência • Prevent sites from sniffing clipboard content:
    // https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/dom.event.clipboardevents.enabled
user_pref("dom.event.clipboardevents.enabled", false);

// Desativar Geolocalização • Disable geolocation:
    // Don't do this on mobile browsers if you want Google Maps or similar to know your location.
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");

// Desativar Segmentação Geográfica • Disable geotargeting:
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.search.geoip.url", "");

// Desativar Relatórios de Falhas • Disable crash reporting:
user_pref("breakpad.reportURL", ""); // http://kb.mozillazine.org/Breakpad.reportURL

// Desativar Telemetria • Disable telemetry:
    // https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false); // Essa chave "não" desativada a telemetria completamente • This alone does *not* disable telemetry
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.unified", false); // Combinada com a terceira chave, a telemetria é completamente desativada • This turns off telemetry completely, in combination with the above

// Desativar Relatório de Saúde • Disable health report:
    // https://gecko.readthedocs.org/en/latest/services/healthreport/healthreport/index.html#legal-and-privacy-concerns
user_pref("datareporting.healthreport.about.reportUrl", "");
user_pref("datareporting.healthreport.about.reportUrlUnified", "");
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.healthreport.logging.consoleEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);

// Desativar Heartbeat • Disable "Heartbeat":
    // https://wiki.mozilla.org/Advocacy/heartbeat
user_pref("browser.selfsupport.url", "");

// Desativar "Navegação segura" (Rastreamento Google / Log / Celular) • Disable "safe browsing" (aka. Google tracking/logging/phone-home):
    // Preferências obsoletas • Deprecated preferences:
// user_pref("browser.safebrowsing.appRepURL", "");
// user_pref("browser.safebrowsing.gethashURL", "");
// user_pref("browser.safebrowsing.malware.reportURL", "");
// user_pref("browser.safebrowsing.reportErrorURL", "");
// user_pref("browser.safebrowsing.reportGenericURL", "");
// user_pref("browser.safebrowsing.reportMalwareErrorURL", "");
// user_pref("browser.safebrowsing.reportMalwareURL", "");
// user_pref("browser.safebrowsing.reportURL", "");
// user_pref("browser.safebrowsing.updateURL", "");
// user_pref("urlclassifier.keyupdatetime.https://sb-ssl.google.com/safebrowsing/newkey", "");
    // Preferência desde Firefox v43 • Preferences since FF43:
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.provider.google.appRepURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.lists", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

// Desativar WebGL • Disable WebGL:
    // http://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
    // https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern
    // However, this appears to breaks some sites, such as Tweetdeck/Twitter
    // Notei que no caso do Firefox Niglity o recurso parece não funcionar perfeitamente em alguns sites como o Tweetdeck/Twitter.
// user_pref("webgl.disabled", true);
// user_pref("webgl.disable-extensions", true);

// Desativar estatísticas de Vídeo HTML5 • Disable HTML5 video stats:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=654550
user_pref("media.video_stats.enabled", false);

// Desativar suporte para asm.js • Disable support for asm.js (http://asmjs.org/):
    // https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
    // https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/
    // https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712
user_pref("javascript.options.asmjs", false);

// Desativar renderização de fontes OpenType SVG • Disable rendering of SVG OpenType fonts:
    // https://wiki.mozilla.org/SVGOpenTypeFonts
    // https://github.com/iSECPartners/publications/blob/master/presentations/SVG_Security-rdegraaf-bh_us_2014.pdf
user_pref("gfx.font_rendering.opentype_svg.enabled", false);

// Artigo Completo • Full Article https://medium.com/@tavernalinux/firefox-seguran%C3%A7a-e-privacidade-naur%C3%BA-moko%C4%A9-193eb7f48e

// ----------------------------------------------------
// TUDO QUEBRADO • THE WHOLE BROKEN CA / SSL / TLS / OCSP / CIPHER MESS
// ----------------------------------------------------

// Sites para teste • Browser test sites: 
    // https://www.ssllabs.com/ssltest/viewMyClient.html
    // https://www.howsmyssl.com/
    // https://badssl.com/

// Bloqueio de Conteúdo Misto • Block mixed content:
user_pref("security.mixed_content.block_active_content", true); // (EX: CSS inseguro ou JS em uma página HTTPS - este é ativado por padrão • eg. insecure CSS or JS on a HTTPS page - this is enabled by default)
// user_pref("security.mixed_content.block_display_content", true); // (conteúdo "passivo" - EX: imagens não seguras em uma página HTTPS • "passive" content - eg. insecure images on a HTTPS page)

// Forçar fixação de chave pública para CA • Enforce public key pinning for CAs
    // https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning
user_pref("security.cert_pinning.enforcement_level", 2);

// Preferência gerais de SSl/TLS • General SSL/TLS preferences:
user_pref("security.ssl.errorReporting.enabled", false); // https://gecko.readthedocs.org/en/latest/browser/base/sslerrorreport/preferences.html
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true); // https://wiki.mozilla.org/Security:Renegotiation#security.ssl.treat_unsafe_negotiation_as_broken
user_pref("security.tls.unrestricted_rc4_fallback", false); // No thanks, I'd rather fall back to ROT13...

// Pacotes de criptografia • Cipher suites:
    // Copied from https://github.com/pyllyukko/user.js/blob/master/user.js - possibly outdated information.
    // Cipher suites not present by default in FF43 are omitted. Apparently they aren't supported anyways, according to tests.
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", true);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false); // About RC4 handling: https://developer.mozilla.org/en-US/Firefox/Releases/38#Security
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", true);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_aes_128_sha", true);
user_pref("security.ssl3.rsa_aes_256_sha", true);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);

// Rejeitar Certificados SHA1 • Reject SHA1 certs
    // https://bugzilla.mozilla.org/show_bug.cgi?id=942515#c32
    // http://www.scmagazine.com/mozilla-pulls-back-on-rejecting-sha-1-certs-outright/article/463913/
user_pref("security.pki.sha1_enforcement_level", 1);

// Artigo Completo • Full Article https://medium.com/@tavernalinux/firefox-certificados-e-criptografia-naur%C3%BA-mboapy-d53d03b6eb85

// ----------------------------------------------------
// Aspectos UX/UI e Ferramentas de Desenvolvedor • APPEARANCE / UI / UX
// ----------------------------------------------------

// URLs completas na barra de endereços • Show full URLs in the address bar (including "http://"):
    // https://mzl.la/2aMHc3m
    // https://mzl.la/2aycDvu • https://mzl.la/2aVbgeZ
user_pref("browser.urlbar.trimURLs", false);

// Se livrar do inútil/redundante • Get rid of the useless/redundant "Visit (site)" and "(keyword) - search with (engine)" dropdown in the URL bar (since FF43):
    // https://mzl.la/2axYxMS
    // https://mzl.la/2aHTBnU
user_pref("browser.urlbar.unifiedcomplete", false);

// Reverte para o layout de barra de pesquisa antiga - lista drop-down em vez dos ícones • Revert to old search bar layout - drop-down list instead of icons:
    // This choice was removed in FF43 - use the Classic Theme Restorer addon if you want it back.
// user_pref("browser.search.showOneOffButtons", false);

// Pesquisas com botão direito em segundo plano • Load searches from right-click context menu in background tab:
    // https://mzl.la/2apLFGO
    // https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.search.context.loadInBackground
user_pref("browser.search.context.loadInBackground", true);

// Remover mensagem "[local] está agora em tela cheia" • Remove "(site) is now fullscreen" nag message:
    // If you fear this might "facilitate phishing", you might not want to be on the internet at all.
    // Before FF43:
// user_pref("full-screen-api.approval-required", false);
    // Since FF43:
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

// Desativar animação da barra de URL em "tela cheia" • Disable fullscreen URL bar animation:
user_pref("browser.fullscreen.animate", false);

// Desativar animação de guias • Disable tab animation:
    // https://mzl.la/2aMIprB
    // http://www.askvg.com/how-to-disable-animation-while-opening-new-tab-in-mozilla-firefox-4-0/
user_pref("browser.tabs.animate", false);

// Não avisar ao fechar Abas/Guias • Don't warn on closing tabs:
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);

// Não avisar ao abrir about:config • Don't warn on opening about:config:
    // https://mzl.la/2aZsTs4
user_pref("general.warnOnAboutConfig", false);

// Se Livrando de pop-ups "Você realmente deseja sair desse site?" • Get rid of "Do you really want to leave this site?" popups:
    // https://support.mozilla.org/en-US/questions/1043508
    // http://forums.mozillazine.org/viewtopic.php?f=38&t=2790281
    // http://superuser.com/questions/639084/malicious-confirm-navigation-dialogs
user_pref("dom.disable_beforeunload", true);

// Impedir desativação de menu do botão direito • Prevent sites from disabling the default right-click menu:
    // http://kb.mozillazine.org/About:config_entries
user_pref("dom.event.contextmenu.enabled", false);

// Evitar que sites/popups mexam em certos elementos UI • Prevent sites/popups from messing with certain UI elements:
    // http://kb.mozillazine.org/Prevent_websites_from_disabling_new_window_features
user_pref("dom.disable_window_open_feature.location", true); // Sempre mostrar barra de URL • Always show the URL bar
user_pref("dom.disable_window_open_feature.resizable", true); // Permitir para redimensionar janelas • Allow to resize the window
user_pref("dom.disable_window_open_feature.status", true); // Sempre mostrar barra de status • Always show the status bar

// Se livrar de "diretório de tiles" • De-crap new tab page, get rid of "directory tiles" ads:
    // http://thenextweb.com/apps/2014/08/28/mozilla-rolls-sponsored-tiles-firefox-nightlys-new-tab-page/
user_pref("browser.newtab.preload", false);
user_pref("browser.newtab.url", "about:blank");
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);

// Desativar auto-rolagem via clique do botão de rolagem • Disable (broken) auto-scrolling via middle-click:
    // https://mzl.la/2ayexfv
    // https://mzl.la/2amueex
user_pref("general.autoScroll", false);

// Iniciar a pesquisa durante a digitação • Start searching while typing:
user_pref("accessibility.typeaheadfind", true); // http://kb.mozillazine.org/Accessibility.typeaheadfind
user_pref("accessibility.typeaheadfind.flashBar", 0); // http://kb.mozillazine.org/Accessibility.typeaheadfind.flashBar

// Better legible default fonts (for Windows, at least - might require ttf-mscorefonts on *nix):
    // As an alternative, the free Ubuntu and Droid font families are pretty good as well.
// user_pref("font.name.monospace.x-unicode", "Lucida Console");
// user_pref("font.name.monospace.x-western", "Lucida Console");
// user_pref("font.name.sans-serif.x-unicode", "Segoe UI");
// user_pref("font.name.sans-serif.x-western", "Segoe UI");
// user_pref("font.name.serif.x-unicode", "Georgia");
// user_pref("font.name.serif.x-western", "Georgia");

// Artigo Completo • Full Article https://medium.com/@tavernalinux/firefox-aspectos-ux-ui-e-ferramentas-de-desenvolvedor-naur%C3%BA-irundy-4399dd8a945b

// ----------------------------------------------------
// Ferramentas de desenvolvedor • DEV TOOLS
// ----------------------------------------------------

// Habilitar o conta-gotas • Enable eyedropper in dev tools:
user_pref("devtools.command-button-eyedropper.enabled", true);

// Tema escuro • Dark theme for dev tools:
user_pref("devtools.theme", "dark");

// Artigo Completo • Full Article https://medium.com/@tavernalinux/firefox-aspectos-ux-ui-e-ferramentas-de-desenvolvedor-naur%C3%BA-irundy-4399dd8a945b

// ----------------------------------------------------
// ADDONS / PLUGINS
// ----------------------------------------------------

// Instalar addons sem assinatura em todas as versões • Install unsigned addons in Aurora/Dev-Edition/etc:
    // Ironically, this was needed for security-enhancing addons like Privacy Badger, HTTPS Everywhere, etc.
    // Don't be stupid and install just any random unsigned addon.
    // https://mzl.la/2by0gW0
user_pref("xpinstall.signatures.required", false);

// Reduzir delay ao instalar add-ons • Speed up security delay when installing add-ons
    // http://kb.mozillazine.org/Disable_extension_install_delay_-_Firefox
    // http://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs
user_pref("security.dialog_enable_delay", 400);

// Controlar Flash • If installed - ask to activate Flash. If not - don't nag about missing Flash plugin
    // https://mzl.la/2bIoc50
    // http://www.ghacks.net/2010/04/07/disable-install-missing-plugins-message-in-firefox
user_pref("plugin.state.flash", 1);
user_pref("plugins.notifyMissingFlash", false);

// Desativar verificação de metadados • Disable metadata check phone-home
    // https://wiki.mozilla.org/Extension_Manager:Update_Checking
    // https://mzl.la/2bhg2RP
    // https://mzl.la/2bhgpff
user_pref("extensions.getAddons.cache.enabled", false);

// Artigo Completo • Full Article https://medium.com/@tavernalinux/firefox-add-ons-e-desativa%C3%A7%C3%A3o-de-blotwares-pete%C4%A9-po-5936ff14d8a2

// ----------------------------------------------------
// Bloatware / "Características" Indesejáveis • BLOATWARE / UNWANTED "FEATURES"
// ----------------------------------------------------

// Desativar EME's, Malware DRM "Módulo descriptografia conteúdo Primetime" da Adobe • Disable EME, Adobe "Primetime Content Decryption Module" DRM malware:
    // http://techdows.com/2015/04/how-to-uninstall-or-remove-adobe-primetime-decryption-module-plugin-from-firefox-38.html
    // Additionally, you might want to delete all traces of "gmp-eme" from your Firefox profile folder.
    // Or simply use "EME-free" builds of Firefox (Windows only): https://ftp.mozilla.org/pub/firefox/releases/latest/win32-EME-free/en-US/
    // https://mzl.la/2bJUi0N
    // https://tecnoblog.net/156638/mozilla-drm-videos-firefox/
    // http://www.w3c.br/Noticias/InformacoesSobreOW3cESobreExtensoesDeMidiaCriptografadaeme
user_pref("media.gmp-eme-adobe.autoupdate", false);
user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.eme.apiVisible", false);
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);

// Desativar "Firefox Hello" - WebRTC PUP da TokBox/Telefonica • Disable "Firefox Hello" TokBox/Telefonica WebRTC PUP
    // https://www.mozilla.org/en-US/privacy/firefox-hello/
    // https://security.stackexchange.com/questions/94284/how-secure-is-firefox-hello
    // https://mzl.la/2brm6sr
user_pref("loop.CSP", "");
user_pref("loop.enabled", false);
user_pref("loop.feedback.baseUrl", "");
user_pref("loop.oauth.google.scope", ""); // O que o Google está fazendo aí? • What's Google doing in there as well?
user_pref("loop.server", "");

// Disable "Pocket" bloatware • Desativar Blotware "Pocket"
    // http://venturebeat.com/2015/06/09/mozilla-responds-to-firefox-user-backlash-over-pocket-integration/
    // https://www.gnu.gl/blog/Posts/multiple-vulnerabilities-in-pocket/
    // https://mzl.la/2bBD3Bi
// Recentemente a Mozilla alterou o início das chaves de "browser" para "extensions"
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.site", "");
    // Talves essas chaves ainda estejam presentes em versões antigas
// user_pref("browser.pocket.api", "");
// user_pref("browser.pocket.enabled", false);
// user_pref("browser.pocket.oAuthConsumerKey", "");
// user_pref("browser.pocket.site", "");

// Disable "social" crap • Desativar Lixo "Social"
    // http://www.ghacks.net/2013/04/10/mozilla-adds-cliqz-msnnow-and-mixi-as-social-providers-to-firefox/
    // https://www.mozilla.org/en-US/security/known-vulnerabilities/firefox/
    // http://www.computerworld.com/article/2493368/malware-vulnerabilities/mozilla-bakes-facebook-features-into-firefox-17.html
    // https://blog.mozilla.org/blog/2012/11/20/firefox-introduces-new-social-api-and-previews-integration-with-facebook/
    // https://wiki.mozilla.org/Firefox_Social_Integration
user_pref("social.directories", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.whitelist", "");

// Desativar "Modo Leitura" • Disable "Reader Mode"
    // https://mzl.la/2c0ODYj
    // https://mzl.la/2by1fWc
    // https://mzl.la/2bhigAw
    // https://tools.cisco.com/security/center/viewAlert.x?alertId=38228
user_pref("reader.parse-on-load.enabled", false);
// user_pref("readinglist.server", "");

// Desativar leitor de PDF integrado • Disable integrated PDF reader
    // https://blog.mozilla.org/security/2015/08/06/firefox-exploit-found-in-the-wild/
    // https://www.reddit.com/r/firefox/comments/4rgbmq/is_it_safer_to_disable_pdfjs_and_use_an_external/
    // https://access.redhat.com/articles/1563163
    // Por favor não caia na besteiras de usar o blotware ADOBE PDF, utilize leitores externos como Foxit ou SumatraPDF • If you're going to use an external PDF reader, *don't* use Adobe PDF bloatware. Use a sane reader, such as SumatraPDF.
user_pref("pdfjs.disabled", true);
    // Se você optar por ficar com pdfjs ativado, pelo menos desative a superfície de ataque WebGL. • If you're gonna stick with pdfjs, at least disable its WebGL attack surface
user_pref("pdfjs.enableWebGL", false);

// Desativar APIs Web inúteis e/ou intrusivas • Disable various useless and/or intrusive web APIs
    // https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
user_pref("beacon.enabled", false); // https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("device.sensors.enabled", false); // https://wiki.mozilla.org/Sensor_API
user_pref("dom.battery.enabled", false); // https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
user_pref("dom.cellbroadcast.enabled", false);
user_pref("dom.enable_performance", false); // https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
user_pref("dom.gamepad.enabled", false); // https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API
user_pref("dom.netinfo.enabled", false); // https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
user_pref("dom.telephony.enabled", false); // https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref("dom.vibrator.enabled", false);
user_pref("dom.vr.enabled", false); // https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus050.enabled", false);
user_pref("dom.webnotifications.enabled", false); // https://developer.mozilla.org/en-US/docs/Web/API/notification
user_pref("dom.webnotifications.serviceworker.enabled", false); // https://developer.mozilla.org/en-US/docs/Web/API/notification
user_pref("media.webspeech.recognition.enable", false); // https://wiki.mozilla.org/HTML5_Speech_API

// Remover alimentação de manipuladores de conteúdo padrão • Remove default feed content handlers
    // http://kb.mozillazine.org/Browser.contentHandlers.types.*.uri
    // Manipulador RSS do Yahoo • Yahoo RSS handler
user_pref("browser.contentHandlers.types.0.title", "");
user_pref("browser.contentHandlers.types.0.type", "");
user_pref("browser.contentHandlers.types.0.uri", "");

// Remove default website protocol handlers • Remover manipuladores de protocolo padrão em websites
    // http://kb.mozillazine.org/Gecko.handlerService.schemes.%28protocol%29.*.uriTemplate
    // Mibbit:
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.name", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
    // Yahoo Mail:
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
    // Gmail:
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
    // 30 Boxes:
user_pref("gecko.handlerService.schemes.webcal.0.name", "");
user_pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");

// Disable "Snippets" (Mozilla content shown on about:home screen) • Limpeza do do about:home [Tela Inicial]
    // https://mzl.la/2bhjD2e
    // https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_mozilla-content
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// Artigo Completo • Full Article https://medium.com/@tavernalinux/firefox-add-ons-e-desativa%C3%A7%C3%A3o-de-blotwares-pete%C4%A9-po-5936ff14d8a2

// ----------------------------------------------------
// PRECISA DE MAIS INVESTIGAÇãO • NEEDS MORE RESEARCH
// ----------------------------------------------------

// FF45 disables .onion DNS lookup (for good reason). Probably shouldn't be re-enabled:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1228457
// user_pref("network.dns.blockDotOnion", true);

// Web push:
    // https://en.wikipedia.org/wiki/Push_technology
    // https://unicorn-wg.github.io/webpush-protocol/
    // https://www.ietf.org/mail-archive/web/webpush/current/threads.html#00182
// user_pref("dom.push.connection.enabled", false);
// user_pref("dom.push.enabled", false);
// user_pref("dom.push.serverURL", "");
// user_pref("dom.push.udp.wakeupEnabled", false);
// user_pref("dom.push.userAgentID", "");

// SPDY:
    // https://en.wikipedia.org/wiki/SPDY
    // https://security.stackexchange.com/questions/29632/what-should-i-know-about-spdy-before-enabling-it
    // http://readwrite.com/2012/04/19/what-web-users-need-to-know-ab
// user_pref("network.http.spdy.allow-push", false);
// user_pref("network.http.spdy.enabled", false);
// user_pref("network.http.spdy.enabled.deps", false);
// user_pref("network.http.spdy.enabled.http2", false);
// user_pref("network.http.spdy.enabled.v3-1", false);

// Improve the abysmal performance of Firefox - without using e10s. 
    // Unfortunately, very few addons are compatible with e10s at the moment: http://arewee10syet.com/
    // https://wiki.mozilla.org/Electrolysis
    // Not working for me: CM Send Link, Disconnect (?), 

// So, reluctantly disabling e10s for now? This will "fix" addon compatibilty, but break image drag & drop on many sites:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1147156
    // https://bugzilla.mozilla.org/show_bug.cgi?id=960783
// user_pref("browser.tabs.remote.autostart", false); // default setting (in FF43/44)
// user_pref("browser.tabs.remote.autostart.1", false); // default setting (in FF43/44)
// user_pref("browser.tabs.remote.autostart.2", false); // This breaks image drag & drop on many sites! (in FF43/44)

// Improve the abysmal Javascript/AJAX performance. 
    // I'm not talking about meaningless synthetic benchmark results here. 
    // As seen in reality, on sites like Tweetdeck - which barely works in Firefox, compared to Vivaldi, Chromium, or even IE11.
    // Most info found is outdated, the prefs don't exist anymore (eg. javascript.options.methodjit), or there is contradictory evidence about their usefulness.
