---
layout: landing-page
title: In the beginning of the internet, there were only "static"​ sites.
sub_heading: ''
banner_image: ''
page_sections: []

---
These were handwritten HTML documents place on a web server so that internet users could access the content - the first one is still running here ([http://info.cern.ch/hypertext/WWW/TheProject.html](http://info.cern.ch/hypertext/WWW/TheProject.html "http://info.cern.ch/hypertext/WWW/TheProject.html"))

Once a website scaled to a decent size though these types of sites became increasingly difficult to maintain. (As an extreme thought exercise imagine changing the footer text on Amazon if every page was a standalone document !)

In the early to mid 90's a range of techniques were invented to allow websites to run scripts and leverage other server-side techniques to preprocess each page and display the output. This meant that instead of crafting each page as a separate document some level of automation was introduced to help manage ever-growing websites.

Dynamic database driven sites soon became the norm (and still the best way) to manage not just large sites but also any kind of online presence that needs regular updates or to display information tailored for each individual user (e-commerce, news sites, social media feed)

These sites, now powered by well know opensource CMS platforms like WordPress, Drupal and a plethora of proprietary systems like Squarespace, Sitecore etc, are common but also carry a sometimes lethal flaw for many operators. Sites powered by these platforms (opensource or proprietary) are under almost constant bot attack and require increasing levels of vigilance to ensure that the underlying database and server are not compromised. The database, often full of personal information, and a compromised web server capable of sending spam are usually the key pieces of the pie sought after in these attacks.

_This is not a fear mongering article and we can confidently say that in the hands of a skilled operator or vendor who performs (or is diligent enough to automate) these tasks such attack vectors can be mitigated._

Out of the box, our friend the good old fashioned static website has almost none of the security issues noted above and in recent time advancements in the tools needed to manage them have now reached maturity. The new waves of static site builders automate the production of ALL the pages needed as a one-off task and then deploy these pages to the web server where users can access them.

This means the security and speed of the good old fashion HTML sites of yesteryear with enough modern smarts to make updates a breeze. No database needed!

At VA we are throwing our hat in the ring for modern static sites deploying one last week (using Jekyll as the generator and Forestry.io as the "CMS") for our client #[stratapp](https://stratapp.ai/)

This site is a great example of a one that is easy to maintain, close to unhackable AND really really fast.

Achieving close too 100/100 for the desktop speed test and mid-high 90's for the mobile experience (live data [here](https://developers.google.com/speed/pagespeed/insights/?url=stratapp.ai&tab=desktop)) you just can't argue that for the right project this approach runs rings around a typical CMS build.

VA is not about to throw out our top shelf Drupal and Wordpress chops as these 2 platforms are still among the best choices for mid to larger websites. That said we will be seriously pursuing this development stack for small to medium size websites that have little need for dynamic database driven content.