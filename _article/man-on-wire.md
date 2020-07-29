---
author: _people/wayne-mcfetridge.md
layout: landing-page
title: Man on Wire
date: 2017-09-22 00:00:00 +1000
sub_heading: ''
banner_image: ''
page_sections:
- template: content-feature
  block: feature-1
  media_alignment: Right
  content: |2-

    > In software deployment, an **environment** or **tier** is a computer system in which a computer program or software component is deployed and executed. In simple cases, such as developing and immediately executing a program on the same machine, there may be a single environment, but in industrial use the _development_ environment (where changes are originally made) and _production_ environment (what end users use) are separated; often with several stages in between. This structured release management process allows phased deployment (rollout), testing, and rollback in case of problems.
  headline: 'From Wikipedia '
  media:
    image: "/uploads/0-1-2.jpg"
    alt_text: ''
- template: 1-column-text
  block: one-column-1
  content: |-
    Mostly we implement this environment by hosting the site ourselves but sometimes we meet resistance from potential clients who want to keep control. We applaud that goal and don't mind working on other servers provided they have development/staging/production environments with git. :-)

    **I was going to write my own article to explain why a proper hosting setup is necessary from a site owners perspective but this** [**article**](http://chrislema.com/staging-environment/) **does a great job of it.**

    Basically development and staging servers are clones of your live site that users don't see. You do the work on dev and then test that work on the staging server so that when you push the changes live you can be certain that all will work as planned. Without this setup you are taking big risks no matter how small or routine the changes are. (Wordpress auto updates we are looking at you)

    If you as a site owner were to implement a server setup with dev/staging/production environments and git you would also attract a better class of developer. Experienced developers don't like to work without these tools and inexperienced cowboys won't want to work with them. I'd call that a win win.

    If you can see the benefit we'd love to be involved on your web project and if not then we wish you good luck.

    _FYI - The "_[_highwire without a net_](http://www.magpictures.com/manonwire/)_" did work out for the guy in the picture so its not all bad news._
  headline: ''

---
## For the last few years VA has only been prepared to work on websites that have development/staging/production environments and git for version control.

How this came to be has a back story. Years of painful site deployments, crashed servers and general misery for VA and our clients.

Solving this is and now sticking to our guns in this area is one of the best things we every did.