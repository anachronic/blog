---
title: From Jekyll to Hexo
date: 2017-07-02
tags: blogging,jekyll,hexo,rant,emacs,org-mode
categories: blogging
---

The idea of having a blog has been in my mind for a long time.

In fact, I had a blog prior to this one, which was built on top of
[Jekyll](https://jekyllrb.com/). To be honest, I have tried Ruby many times, but have never
felt like it was something for me, or maybe I haven't really spent
enough time to discover what it has to offer.

Either way, I find Ruby and Jekyll to be a little annoying to install
and mantain, which is why my old blog was left unmantained.

In this blog post I'll describe some of the features I search for, and
why I chose Hexo.

## What I'm looking for

As I said before, I'm not much of a Ruby guy, I spend my days writing
Javascript and Python for the most part. I've lately become very
familiar with the workflow of these programming languages and their
tools.

I'm also a heavy Emacs user, and thus I prefer to use org-mode for
writing documents and whatnot. It is by far better than markdown, I'm
really used to it and the fact that it can be parsed and exported
makes it a very versatile markup language for emacs users.

So, in the end, what I wanted was a blogging system that allowed me to
write my posts in org mode, preferably not having to export it to
anything, and I wanted this system to _just work_.

Needless to say, Jekyll was not it.

### Problems

I will say once again that **I'm not a Ruby guy**.

I'll just list the problems:

1. After every Ruby update, gems had to be reinstalled, because the
   path to gems got broken.
2. I had to either write markdown or export an org file to Jekyll, save
   it and rename it.
3. I had to manually set the date in the file name for every post.

My problem was mostly with the second point, because I believe that
having to mantain two copies of files is a little moronic, to say the
least.

## The paradigm shift

This past week, Mike Zamansky released a [blog post and video](http://cestlaz.github.io/posts/using-emacs-35-blogging/) on how he
blogs, explaining why he moved away from Jekyll to [Nikola](https://getnikola.com/blog/index.html) and it made
so much sense to me, because i was having the same problems with it.

At the same time, on one project I'm working on, we decided to move
some code away from jQuery to AngularJS, and to manage our
dependencies with [yarn](https://yarnpkg.com/lang/en/). To be honest, I've never been prone to change,
but this change to AngularJS made me think about how the Front-End
community is gravitating toward Javascript and RESTful services. I
hear there's even backend servers for Node.JS.

So, in short: The Web development community is gravitating towards
javascript (at least in this era) and we should use the tools we feel
the most comfortable with.

And so I thought: yeah, let's ditch Jekyll and let's build something
on top of Javascript.

I have to say I am **very** comfortable with Python as well, but I feel
like I should really get into the Javascript world.

That's when i discovered Hexo. A quick search in Google led me to
[StaticGen](https://www.staticgen.com/), which pointed me to Hexo.

## Moving to Hexo

[Hexo](https://hexo.io/) is a static site generator built on top of Javascript that
provides every feature I ever desired for a static site generator,
_and more_.

With it I can:

- Write every post with org mode and just be done with it.
- Deploy to github effortlessly.
- Manage it from Emacs.
- Learn some Javascript.

And, of course _it doesn't break_.

I'll shortly describe what I've added to Hexo to make it work with
Emacs and org-mode.

## Emacs workflow

I'm sure someone else can explain better how to install Hexo, so I
won't go over that. Instead, I'll describe how to set up org mode and
Emacs to work with this awesome static site generator

I installed the org mode parser:

```
yarn add hexo-renderer-org
```

Which lets me write every post with org-mode and Hexo will properly
generate the site without me having to export my org mode files.

And, the one I believe is the killer, is [hexo.el](https://github.com/kuanyui/hexo.el), an extension for
Emacs which allows me to manage all of my Hexo site from within
Emacs. Hell, I don't even need a shell for this now.

## Conclusion

While I think I still have some time to get used to this, Hexo looks
very promising as a static site generator for Emacs users. The worflow
features a very rich management environment provided by hexo.el and a
very solid org mode parser which allows its user to write posts using
Emacs org-mode.
