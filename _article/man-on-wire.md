---
author: _people/wayne-mcfetridge.md
layout: article-single
hide_on_articles_page: false
title: Man on Wire
date: 2017-09-12T00:00:00.000+10:00
sub_heading: For the last few years VA has only been prepared to work on websites
  that have development/staging/production environments and git for version control.
banner_image: ''
page_sections:
- template: full-width-media-element
  block: media-1
  image: "/uploads/0-1-1.jpg"
  caption: ''

---
From Wikipedia -

> In software deployment, an **environment** or **tier** is a computer system in which a computer program or software component is deployed and executed. In simple cases, such as developing and immediately executing a program on the same machine, there may be a single environment, but in industrial use the _development_ environment (where changes are originally made) and _production_ environment (what end users use) are separated; often with several stages in between. This structured release management process allows phased deployment (rollout), testing, and rollback in case of problems.

Mostly we implement this environment by hosting the site ourselves but sometimes we meet resistance from potential clients who want to keep control. We applaud that goal and don't mind working on other servers provided they have development/staging/production environments with git. :-)

I was going to write my own article to explain why a proper hosting setup is necessary from a site owners perspective but this [article](http://chrislema.com/staging-environment/) does a great job of it.

Basically development and staging servers are clones of your live site that users don't see. You do the work on dev and then test that work on the staging server so that when you push the changes live you can be certain that all will work as planned. Without this setup you are taking big risks no matter how small or routine the changes are. (Wordpress auto updates we are looking at you)

![](/uploads/0-1-1.jpg)

If you as a site owner were to implement a server setup with dev/staging/production environments and git you would also attract a better class of developer. Experienced developers don't like to work without these tools and inexperienced cowboys won't want to work with them. I'd call that a win win.

If you can see the benefit we'd love to be involved on your web project and if not then we wish you good luck.