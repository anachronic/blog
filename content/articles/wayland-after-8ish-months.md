---
title: Wayland after 8(ish) months
date: 2023-06-18
tags: linux
---

I originally wrote this article in october 10th 2022. It is now june 2023 and I
feel like not much has changed. I originally postponed this article because I
felt like I had just started using wayland and I didn't have too much to say
about its stability. Well now I do.

---

Ah, Wayland. We've been hearing about this since the good old days. I think I
first heard of it around 2016 or so. At the time, I remember trying
Wayland, and even though I feel like it was defaulting to it, online posts say
I'm wrong. Anyway, I think those days were around GNOME 3.22? Or 3.24?
Definetly in 3.28, which was around the time where gnome 3 was at its lowest
point. I remember writing multiple orgmode files ranting about GNOME and Arch
Linux in general, how they messed my setup in different ways. GDM once broke
bluetooth, GNOME was sluggish, python updates broke stuff. Good times though, I
think I learned the basics of my system around those times.

Anyway, like everyone else in the Linux world, I've heard over and over how
wayland breaks everything and how there are these special use cases where it
cannot do whatever some dude did with their computer. Side note: I've always
found it kind of cool to know the weird things people do with their computers.
I've heard of some sick accessibility tricks, making their text editors talk to
them, point the mouse for them, run some weird kind of automation that just
works for their workflow. I find it really cool to read those, and an
interesting thing is that Wayland has brought people to write about it somehow.

I originally intended to just make a wiki page for Wayland (will probably write
it anyway), detailing what works, what doesn't and stopping there. But
researching articles that talk about wayland I decided to make my own. I'll
talk about it later, but I feel like these are good times for Linux, there's a
really vibrant community pushing forward, and while this article isn't as
detailed and well thought out like the ones I'll list below, I feel like it's
my tiny contribution to this ecosystem.

And so, if you stumble upon this article, this could be a starting point. I
don't use anything fancy so this might help set a base system.

## The story

If you look at my github, you'll notice that [I have an old emacs
repo](https://github.com/anachronic/emacs.d) (side note: I put **so** much
effort into that repo. Crazy.). You don't have to know, but in the good old
days, you'd use [Flycheck](https://www.flycheck.org/en/latest/) for linting and
syntax errors. It really was ahead of its time if you consider that we didn't
have LSP or anything standardized. Anyway, [the guy that created
it](https://github.com/lunaryorn) always caught my attention with his tweets
and the things that he wrote, not only about emacs, but about work and everyday
tech life.

So one day I found myself procrastinating as usual and decided to take a look
at his blog, because I hadn't looked at it since before the pandemic, and I
found that he had moved away from macOS into Arch Linux, he has a really cool
setup for an encrypted system. Something that I've been looking away for a
couple of years now. I thought the setup was incredible and decided to move on
to Wayland. I don't even know why. I'm pretty sure he's using GNOME in x11, but
I don't know. Maybe his setup looks so futuristic and that's what inspired me
to move to something newer.

After that I tried GNOME for a couple days only to find out that if I'm not in
a laptop, I don't want to have anything to do with it. And then proceeded to
try Hyprland for a couple of days. I liked it, but found some bugs/features
that I don't really like: You can't cycle through your workspaces like you can
in pretty much any other WM, it crashes every other day. Not so frequent you'd
switch immediately, but frequent enough to make you hate it every 2 or 3 days.
There are some more, like gui glitches with xwayland and sometimes windows
don't tile back into position after you close one of them.

So I moved on to sway, which is very stable. It's just not dynamic... good
enough for the time being, because I'm using it for everyday work and I need
things not to crash and to behave well.

And that's it, my current unfinished setup is below, with the notes I need for
the future

## What works

So these apps replace something else I had in X11 world or they solve a need I
didn't know I had.

- [foot](https://codeberg.org/dnkl/foot). Replaces st/Alacritty/kitty. Why? No
  GPU and it's latency feels good.
- Firefox works by setting `MOZ_ENABLE_WAYLAND=1` somewhere. I did it in my
  startup script
- [sway](https://github.com/swaywm/sway). WM of choice. Tried and liked
  Hyprland but it's not that stable. Will go back to it sometime after
- [waybar](https://github.com/Alexays/Waybar). Replaces
  polybar/dwmblocks-async. Its style is more like polybar. W/e, would prefer an
  approach more like i3blocks but it's fine. Not doing anything fancy atm
- [wl-clipboard](https://github.com/bugaevc/wl-clipboard). Replaces xsel/xclip.
  A **must** for me. Works like a charm
- [wtype](https://github.com/atx/wtype). Replaces xdotool. Not doing much with
  it atm, but it seems to work much better than xdotool
- [bemenu](https://github.com/Cloudef/bemenu) replaces dmenu. I'm not too sad
  about dmenu. Bemenu comes with everything I need without patching and works
  with x11/wayland, so that's one less thing to worry about
- [gammastep](https://gitlab.com/chinstrap/gammastep). Replaces Redshift. I
  never bothered to set this up over in x11 land, but here in wayland works
  with no problems
- [imv](https://sr.ht/~exec64/imv/). Replaces (n)sxiv. I'm not too sad to see
  sxiv go. Never really got used to it. This works fine

## What works but should be replaced

- [zathura](https://git.pwmt.org/pwmt/zathura). Some pdfs render badly. I don't
  know if it's zathura itself or the poppler library is causing them to fail. I
  should check what's going on. This was an original note, but I haven't had
  this bug ever since. Guess it's fine now ✅
- [grim](https://sr.ht/~emersion/grim/) and
  [slurp](https://github.com/emersion/slurp) work together to take screenshots.
  Works when I need to copy them to clipboard but they're kind of a hassle,
  really. Would like to replace them with flameshot or something like it. I've
  tried this many times since I wrote this and for the life of me I can't get
  flameshot to work
- Spotify works through XWayland with no visible problems under Sway but has
  some glitches over in hyprland. Nothing too worrisome as long as you keep the
  spotify window out of your workspace (as you probably should). [some dude
  announced](https://community.spotify.com/t5/Desktop-Linux/Wayland-support/m-p/5436021/highlight/true#M21267)
  that wayland support has been implemented. Don't know about it and I'm not
  sure how to proceed here. I don't wanna go back to that apple music mess. I
  do have mpd/ncmpcpp set up though, so with that + sway I'm good for the time
  being

## What doesn't work or needs way too many workarounds

- [flameshot](https://flameshot.org/). Have been trying so hard to make this
  work so I don't have to use hacky scripts to capture/annotate my screen. To
  no avail. I'll definetly come back to this
- [ueberzug](https://github.com/seebye/ueberzug). Doesn't really support
  Wayland. Whatever, image previews have been really flaky in lf even in x11
  land as of lately. Would 100% like to move to a
  [sixel](https://en.wikipedia.org/wiki/Sixel) setup for image previews under
  my terminal. Foot does support sixel so it looks like this could be happening
  soon. Maybe?
- [lf](https://github.com/gokcehan/lf) works perfectly well. Hell, it's a
  terminal app. But since it doesn't support sixel graphics, it cannot (as far
  as I know) display image previews in lf. I'll move to whatever I can,
  hopefully not ranger tho, that would suck.

## My overall Wayland experience after 8ish months

Well, as I said in the beginning of this article, I wrote most of these words
the first week after moving to wayland, but since then I've been daily driving
it with great success, but not without its quirks.

On the initial days, Sway used to crash once or twice a week. I never really
found out why, and to be honest it was **really** annoying. I'd be working and
all of a sudden I would get thrown out to the tty. Some of those crashes might
have had something to do with memory issues since I didn't have a swap set up.
Sway has updated several times since then and now I do have a swap, so lately I
haven't had crashes at all. Works fine.

Then, one of the most challenging aspects of moving to sway for me was getting
used to a manual tiler setup. I prefer dynamic tiling way more than this, but I
haven't had good experiences with anything other than Sway. So I had to adjust
my workflow to get used to sway and its ways. Honestly it's not as bad as long
as I don't open more than 2 windows in a workspace without being tabbed. Not as
powerful as dwm/awesomewm, but good enough.

After seeing the stability on my daily usage with firefox, foot and spotify, I
started to push the system to open challenging applications: dbeaver, datagrip,
steam and even some games, some via lutris+wine and others via steam. I was
**astonished** at how good the support overall was. I didn't even have to tweak
anything. Everything just worked. This aspect is GREAT.

The last point really goes to show how mature Wayland is. Totally stable for
me, even for daunting tasks like playing 4k games through xwayland. After this
I don't see myself going back to Xorg, even if awesomewm and dwm are superior
in the workflow aspect of it.

## Resources

Oh man. There's something I love about wayland and it's that it generates
controversy, it gets people talking about it. With a clever search (because
google for some reason doesn't like personal blogs) you can find dozens of
articles of people explaining how they set up wayland. What works and what does
not. Some describe with great detail how to make some things work. Every time I
search something, I really do feel like there's a vibrant community of people
working to make this ecosystem better, and I love it. And so I will link to
those pages that make our community better.

### Applications and things to try out

- [awesome wayland](https://github.com/natpen/awesome-wayland). This was
  archived once and it came back, never knew why.
- [Are we wayland yet?](https://arewewaylandyet.com/). Seems to be updated but
  no deployments since around october 2022
- [Useful addons for sway](https://github.com/swaywm/sway/wiki/Useful-add-ons-for-sway)

### Articles, rants, how-tos, tutorials, blogs

- [Full wayland setup on Arch Linux](https://www.fosskers.ca/en/blog/wayland)
- [Revisiting Wayland for ArchLinux](https://rgoswami.me/posts/revisiting-wayland-2021-archlinux/). This one is very specific and it kind of made me feel like I don't know anything lmao. Great article
- [efficient emoji experience in wayland](https://major.io/2022/05/27/efficient-emoji-experience-in-wayland/)
- [flameshot, sway and wlroots](https://github.com/flameshot-org/flameshot/blob/master/docs/Sway%20and%20wlroots%20support.md)
- [An X11 apologist tries wayland](https://artemis.sh/2022/09/18/wayland-from-an-x-apologist.html).
- [How to use flameshot ... in wlroots/sway](https://www.youtube.com/watch?v=6O6WBtchg_c). Unfortunately doesn't work for me because of fractional scaling and clipboard issues :(

## A stupid footnote

Oh man. I love having an AMD GPU, lmao.
