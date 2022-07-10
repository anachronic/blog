---
title: Arch Linux install notes
date: 2022-07-10
tags: linux
---

Installing arch linux on UEFI systems, these notes are copied from some old orgfile I have lying around

1. Assuming wired internet connection. Otherwise `wifi-menu` should save the day
2. Partition disks with `cgdisk /dev/nvme0n1` (or `lsblk` to find the disk)
  - EFI system, codename `ef00` at 500M for partition 1
  - Linux filesystem, codename `8300` for partitions 2 and 3
  - [DO NOT create a swap partition](https://wiki.archlinux.org/title/swap#Swap_file)
3. Format partitions
  - `mkfs.fat -F32 /dev/nvme0n1p1`
  - `mkfs.ext4 /dev/nvme0n1p2`
  - `mkfs.ext4 /dev/nvme0n1p3`
4. Mount everything
  - `mount /dev/nvme0n1p2 /mnt`
  - `mkdir -p /mnt/boot`
  - `mkdir -p /mnt/home/nsalas/perma`
  - `mount /dev/nvme0n1p1 /mnt/boot`
  - `mount /dev/nvme0n1p3 /mnt/home/nsalas/perma`
5. Had something about mirrors, but that has changed over time. Will update
6. Install the base system `pacstrap /mnt base base-devel git neovim curl wget sudo`
7. fstab: `genfstab -U /mnt >> /mnt/etc/fstab`. **Check it**.
8. chroot: `arch-chroot /mnt`
9. timezone: `ln -sf /usr/share/zoneinfo/America/Santiago /etc/localtime`
10. `hwclock --systohc`. Dunno. w/e
11. `echo en_US.UTF-8 > /etc/locale.gen`. I've needed `es_CL.UTF-8` in the past. English only is fine
12. `locale-gen`
13. `nvim /etc/locale.conf` and uncomment `en_US.UTF-8`
14. `echo minji > /etc/hostname` or w/e hostname. She's the best tho
15. Edit `/etc/hosts`:
  ```
  127.0.0.1 localhost
  ::1 localhost
  127.0.0.1 minji.localdomain minji
  ```
16. `passwd`. This one should be hard because it's root
17. `pacman -S grub amd-ucode linux-firmware efibootmgr`
18. `grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=ARCH`
19. `grub-mkconfig -o /boot/grub/grub.cfg`
20. `pacman -S networkmanager network-manager-applet` otherwise might not have internet. Wifi might be available through `nmcli`. Honestly haven't checked because I haven't set up a laptop recently.
21. `exit`
22. `umount -R /mnt`
23. `reboot`
24. Login as root, no problem
25. `pacman -S zsh zsh-completions`
26. `groupadd docker`
27. `useradd -m -G wheel,docker,input -s /usr/bin/zsh nsalas`
28. `passwd nsalas`
29. `visudo`, then search for `wheel` and uncomment. You know the drill
30. Might opt for `doas` here, but honestly is not too good of an option
31. `systemctl enable NetworkManager.service`
32. `systemctl enable bluetooth.service`
33. `nvim /etc/pacman.conf` and enable multilib
34. `pacman -Syu` shouldn't have many updates. After this I believe dotfiles installing should be fine
