---
title: Flashing Massdrop alt Firmware
date: 2020-07-25
tags: mechanical-keyboards
---

See [my fork of QMK](https://github.com/anachronic/qmk_firmware) and [the original repo](https://github.com/qmk/qmk_firmware). I'm going to describe how to write a layout, compile it and flash it to the keyboard.

## Writing a layout

For this particular keyboard, head to `keyboards/massdrop/alt/keymaps/`. From there I can just copy any layout (take the `mac` folder as an example) and change the layout in the file there. I think it's called `keymap.c`.

Some useful docs I remember I used for this:

- [Layers](https://docs.qmk.fm/#/feature_layers)
- [Mod-tap](https://docs.qmk.fm/#/mod_tap)

There's probably a lot more, but with those two it's possible to implement SpaceFN without problems.

## Compiling the firmware

I'll update on this, I believe not much is required on the OS.

The following command is used to compile: `make <keyboard>:<keymap>/<target>`. Sounds a little weird, but in our case, the keyboard is `massdrop`, our keymap is `alt` and the target is my custom layout: `anachronic`.

```
make massdrop:alt/anachronic
```

This should generate a file called `massdrop_alt_anachronic.bin`. This file can be flashed to the keyboard.

The regular `make clean` also works.

## Flashing to the keyboard

In order to flash the compiled firmware, we use [mdloader](https://github.com/Massdrop/mdloader), I believe it's maintained by Massdrop. The instructions are there.

1. Get mdloader_mac or the one for w/e you are using. Chmod +x it
2. If on Mac, we might need to right click and manually open the file to skip apple's notarization
3. Run `mdloader_mac --first --download <compiled_firmware> --restart`
4. Hold `Fn + b` for 5 secs or so and we should be good to go. Keyboard will shut lights off and restart. This key corresponds to `MD_BOOT` in the layout.

I believe there's a restart button on the back of the keyboard in case of unexpected errors.
