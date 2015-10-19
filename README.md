# firefox-tweaks
An attempt to make Firefox suck less. 

Unlike other resources out there, this repo isn't only about privacy/security, but covers issues like browser speed, UI/UX issues, and disabling/removing unnecessary bloatware as well. Some - in my opinion - overly restrictive or annoying "best security practices" have been omitted on purpose: I don't want my main browser to feel like it's in "Private Window" mode all the time. For that approach, Tor Browser would be a better choice than standard Firefox anyways. I want my main browser to remember its history, passwords, form fields, and so on. YMMV.

This repo is meant as an additional resource to improve aspects of Firefox, after you've done all the standard steps to ensure a base level of security. Have some basic security/privacy addons installed (uBlock Origin, Privacy Badger, HTTPS Everywhere, NoScript, Disconnect, Self-Destructing Cookies, etc.), run a decent firewall, maybe browse over a VPN, maybe have a decent hosts file, and so on. And, most important of all: use your brain while browsing, don't just click on random stuff. Once you've done that, you probably don't need stuff like "safe browsing" and similar, which gives a somewhat false sense of security (and constantly sends data about your browsing habits to Google).

None of the settings in this repository are blindly copied over from other sources. Each setting has been tested by me, and deprecated settings are removed whenever necessary. I'm trying to keep the cruft level as low as possible, only supporting settings that actually work in current Firefox versions.

---

**Do not change any of these settings without understanding what they're doing. This repo isn't meant for inexperienced users.** 

To apply these tweaks, type `about:config` into the URL bar, and use the config search bar to look up the individual settings found in `user.js`. (Or simply put the whole file into your Firefox profile folder, if you're *really* sure you want to add all the preferences at once. You probably don't want to do that, since some of the not security related settings are definitely a personal choice, not a universal constant.)

---

Here's some useful discussion (and some rather silly nonsense said) about this repo: https://news.ycombinator.com/item?id=10067797
