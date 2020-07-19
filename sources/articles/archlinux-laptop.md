---
title: Configuring an Asus Zenbook with Arch Linux
date: 2016-09-25
tags: archlinux,linux
categories: linux
---

I recently got my hands on a brand new [asus zenbook
ux303](http://www.pcadvisor.co.uk/review/laptops/asus-zenbook-ux303u-review-3632053/)
and it looks quite nice. So I did the first thing I wanted to do with it
right away: _Install Arch Linux_. Yeah, I've been using Arch for quite a bit
now on my desktop PC and I fell in love with it from the very first time I
used it. No PPA nonsense, easy development and, to be honest, I'm quite used
to its workflow.

Since the laptop came bundled with Windows, there was some work to do. I
downloaded Arch Linux, made a bootable USB Flash Drive using
[rufus](https://rufus.akeo.ie/) and started with the installation right away.
The guide can be found on the [arch
wiki](https://wiki.archlinux.org/index.php/installation_guide).

## UEFI on Arch

The process is quite straightforward if you read carefully. I got kind
of stuck at this because, well, I like to do the process fast, but it
can't always be like that. **Do _not_ forget to use `gdisk` for GPT
partitions**.

Also, some little but useful pointers:

- The boot partition has to be _EFI System Partition_, which has code =EF00=.
- This partition also has to be set to `FAT32`.

The rest is easy, just follow the guide. Nothing out of the
ordinary. I'm sure people explain this better on youtube.

## GNOME

I've been using GNOME for quite some time and I'm quite happy with
it. There are some critical extensions that have to be installed to
make it usable but that's ok. I'll write about it some other time.

Anyway, not everything works out of the box here, most of it is on the
[archwiki](https://wiki.archlinux.org/). I'll explain what i went through.

### WiFi

WiFi is quite a pain to configure without a GUI. You need sudo and it gets
kind of annoying. Just install
[networkmanager](https://wiki.archlinux.org/index.php/NetworkManager), set it
up (in GNOME gets as easy as just starting a service) and be done with it.

### Bluetooth

Same thing here. Just [follow the
wiki](https://wiki.archlinux.org/index.php/bluetooth), install the packages,
enable the service. Done.

You might want to get this right in order to share Internet Connection
with your cellphone. I have a Galaxy A5 2016 and it works flawlessly.

### The rest

I had no problems with anything else. The rest of the stuff should
work out of the box.

## Hardware

This is the point where things get tricky. It took me quite a while to
figure these issues out, and thats what made me want to do this post.

### Keyboard.

I'm quite fond of the keyboard in this model though it could be nicer
to have media keys. While the keyboard in this model has a lot of
keys, I only find important to be able to control screen brightness,
keyboard backlight and volume. I haven't really tested anything else.

The Keyboard brightness and Volume keys worked right out of the box
for me, as did the disable touchpad button. Unfortunately, i can't say
the same thing about the brightness keys, as they do _not_ work out of
the box. It's not so bad though, because GNOME's user panel _can_
control the screen backlight, which provides an usable workaround.

I did a little research and it turned out my ACPI was working, it was
just that the OS couldn't handle the keys. Long story short, adding
these options to my kernel made my backlight keys work:

```
acpi_osi=
acpi_backlight=none
```

With `systemd-boot`, you have to append the text to the =options=
line. In my case, it was the file
`/boot/loader/entries/arch.conf`. `acpi_osi` makes the keys work but
they don't do anything, and `acpi_backlight=none` rebinds everything
to the `backlight_intel` interface.

### GPU

GPU is probably the most tricky feature to set up in this model.

[The archwiki](https://wiki.archlinux.org/index.php/bumblebee) has an article
on how to set up Bumblebee in order to get the best of both worlds:
Integrated graphics and dedicated video card. I must say I gave it endless
tries to get it working and it -to some extent- does work. But only until i
close the laptop. It then becomes unusable.

I still have problems with this, so i won't be advising on this
matter. I will say, though, that gaming on a 14 inch laptop is not
really the best setup. I still have my desktop for that.

### Battery discharging

I found out some months after I wrote this post, that nothing gets
restored after the battery dies.

Honestly I don't really want to test this feature, because bad things
can happen: my battery can reduce its life or I might not get it to
work on the first time. I can live with it, though, because the
battery duration is quite good.

## Conclusion

After months of using this laptop I have to say it is one of the
smoothest computers I've ever used, it rarely freezes and it doesnt
really overheat. Trying Linux on this laptop is definetly worth a
try. I've been using it for around 9 months now and have barely had
any problems
