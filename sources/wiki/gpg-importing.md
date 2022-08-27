---
title: Importing a backed up GPG key
date: 2022-08-27
tags: gpg
---

I have my gpg key saved offline. Here's what I should do to import and use it.

## Summary

1. Copy it to somewhere in `/tmp`
2. Import it: `gpg --import <file>`
3. You might be asked for several passphrases because there should be an
encryption and signing subkeys. Remember all the passphrases 😉
4. Check `gpg --list-keys`. Key and its subkeys should be there
5. Get rid of the original file. `shred -u -z /tmp/<your file>`

If in a hurry, stop here, use it and then skip to cleanup below. Otherwise keep
reading

If not in a hurry, or setting up some maching and I'm in need of some key, then
I should just keep subkeys around and delete the primary key because it should
be kept offline.

6. Check available key/subkeys and their ids: `gpg --list-secret-keys
--keyid-format long`. ID should be after the algorithm for the key
7. Delete the secret key `gpg --delete-secret-key <email>`. **Say yes only to
the key id of the primary key**
8. Say **NO** to everything else and don't worry about the error
9. Recheck everything `gpg --list-secret-keys --keyid-format long`. You should
see a hash sign after *sec* for the primary key. That means it's offline
10. Feeling paranoid?: `gpg --edit-key <email>`. Confirm the primary key is
marked as *pub* (as opposed to *sec*). Pub means only the public key is
available. Sec means the secret key is present
11. Change passphrases (if needed). `gpg --edit-key <email>` then `passwd`. You
might need all passphrases of subkeys. This is fine **as long as this key is
not backed up**
12. Trust the key: `gpg --edit-key <email>` then `trust`. I chose ultimate.

## Cleanup

If in a hurry or just needed to use the key for a short period, then don't
forget to cleanup. Keys are very sensitive and shouldn't be kept for a long
time, especially the primary key.

1. check you have secret keys: `gpg --list-secret-keys`
2. delete the key completely: `gpg --delete-secret-key <identity>`. Where I'm
not exactly sure what *identity* can be. Email worked for me and that's enough.
I assume fingerprint should work too
3. recheck `gpg --list-secret-keys`
4. No need to worry about `gpg --list-keys` because those are public

## Test

- Encrypt: `gpg -e -r <email> -a <some file>`
- Decrypt: `gpg -d <file>`. Useful to see if passphrase changed correctly
- Sign: `gpg -a -s <file>`. I believe this also encrypts *file*
- Check signature: `gpg -d <file>.asc`. It will tell you if the signature is
  correct

## Other related links

- [wincent's rotation notes](https://wincent.com/wiki/GPG_key_rotation_notes)
