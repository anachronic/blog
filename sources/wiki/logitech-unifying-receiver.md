---
title: Logitech Unifying receiver
date: 2022-08-28
tags: peripherals
---

[The logitech unifying
receiver](https://www.logitech.com/en-us/products/mice/unifying-receiver-usb.910-005235.html)
is a device logitech provides with every wireless device that can be set up to
connect all your devices with it. It has the advantage of

- One dongle -> All devices
- Wireless
- **No setup-pairing**. Well, only one time per dongle.

I also didn't want to install logitech spyware. So here's what I did

1. [Arch Wiki](https://wiki.archlinux.org/title/Logitech_Unifying_Receiver)
2. Not sure what to do? `sudo pacman -S solaar`
3. Power on device **and set up pairing mode**
4. Solaar will pick it up if you pair it
5. Done.

As an extra, I needed the evdev symlink so that I can set up
[kmonad](https://github.com/kmonad/kmonad). But I saw nothing short of a
usb/logitech keyboard. [This response in
reddit](https://www.reddit.com/r/VFIO/comments/c9l3j7/comment/et0l5wa) gave me
my answer:

> Looks like what's happening is since the 2 wireless receivers for the mouse
> and keyboard are pretty much the same, /dev/input/by-id can't tell the
> difference, and only links to events from one or the other. I fixed it by
> linking straight to the events, which I found out by doing ls -l
> /dev/input/by-id, which lists 4 events of whichever device was last plugged
> in

## Why

I'm leaving this sort of introductory text at the end, only because this is a
wiki post and not an article. I really should write about this some time.

So I've had the MX Master 3 for a while. Works great and it's a great mouse.
I've always used it through bluetooth and it has pros and cons, but the thing
that's always felt a bit off to me is the fact that I've always needed to wait
for bluetooth to come up before I can use the mouse. It's often not a big deal
because set up has to be done once per system. But still, it shouldn't be like
that.

Also, totally unrelated, at some company where I worked, my boss was really
into ergonomic keyboards, and so I tried one there for the very first time. I
even set up spaceFN over in Linux with that keyboard. Go figure. Anyway, I
remember that keyboard being really comfortable. I could write in it for hours
without feeling any sort of tiredness, which I have felt in repeated ocassions
with some keyboards, even with fancy build materials, keycaps and switches.

And so I decided to get an ergonomic keyboard. The [Ergo
K680](https://www.logitech.com/en-us/products/keyboards/k860-split-ergonomic.920-009166.html)
was the one I got and seems great. I can already feel that it's better to type
on than [the one I'm currently
using](https://www.duckychannel.com.tw/en/Ducky-One2-RGB-TKL).

And I didn't want to set it up with bluetooth. I already have 2 logitech
unifying receivers and it seems like a waste. So I decided to set both devices
up with the receiver, so that I can use them with any device I like if I carry
my dongle around. It's not ideal, but it's wireless and setup-proof.
