---
title: Terminal escape codes
date: 2022-10-16
tags: shell
---

Ah, escape codes... the long battle of pursuing real GUI goodness into the
terminal.

Short story: I've battle with this with mixed degrees of success over the
years. What I want is simple: **disambiguate stupid legacy keys like C-i, C-h,
and C-m with their counterparts** and bind not-so-complex keystrokes like
Ctrl+shift+anything or Alt+shift+anything, or whatever.

I had a little hack from wincent where I would map `C-i` to `F6` only in my
terminal, but it's kinda hacky. Anyway... here are the resources:

Scan keycodes using kitty:

```sh
$ kitty +kitten show_key -m kitty
```

Also, check who implements this protocol in [the kitty
webpage](https://sw.kovidgoyal.net/kitty/keyboard-protocol/). This is really
important. That leaves us with not many terminal options:

- foot
- kitty
- WezTerm

Luckily, all of those are great. I guess no more alacritty. It might be
implemented in st also. not sure

With all that set, [here are some escape
sequences](https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797). In
case I need them again for any reason. Bottom line is that most bindings are
written in hex form, so Ctrl+shift+i would be `\x1b[17~`. The `\x1b[`
corresponds to CSI, and then `17~` is what kitty shows for the key. Not a great
explanation, but I think I'll understand if I ever read this again

## Links

- [kitty keyboard protocol](https://sw.kovidgoyal.net/kitty/keyboard-protocol/)
- [ANSI escape codes](https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797)
- [fix keyboard input on terminals - please](http://www.leonerd.org.uk/hacks/fixterms/)
- [ctrl+shift in alacritty](https://www.reddit.com/r/neovim/comments/mbj8m5/how_to_setup_ctrlshiftkey_mappings_in_neovim_and/?utm_source=share&utm_medium=web2x&context=3)
- [a relevant question in stack overflow](https://stackoverflow.com/questions/1506764/how-to-map-ctrla-and-ctrlshifta-differently)
