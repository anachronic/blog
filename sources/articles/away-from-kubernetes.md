---
title: Moving some services to Vultr
date: 2022-07-13
tags: devops
categories: devops
---

I've recently been partially doing a lot of DevOps work and I enjoy it a lot.
I've always felt that kind of satisfaction when I know my systems work without
me having to maintain them all day.

But the thing is that getting started as a DevOps engineer is not so easy. As a
regular software engineer you can create as many projects as you want with no
problem. You can screw up, you can test, and you learn by doing that.

How does one learn DevOps, though? Granted, I don't know many people in this
field where I live. Hell, finding a good DevOps engineer is a challenge for
*any* company here in Chile. And it's not because DevOps is an inherently
harder task to learn than regular software development. I don't think it is. I
think it comes down to what you must *pay* to learn. Either you have to collect
a bunch of old machines to play around and apply the same process, or you can
just pay for the cloud™.

I've been learning the second way: spending money, a lot of it, and I think
it's really helped me learn the basics of how systems organize, and what seem
to be good and bad things to do. I've gone as far as spending over $100 a month
in infrastructure I don't use a lot (for myself, I mean), but I don't really
wanna get into the monetary aspect.

At the end of the day, I ended up with *a lot* of complex infrastructure for
4/5 services I need. Some of those don't even need to communicate between them.

I intended to make this article as a lookback on how I've ended up learning
some of the knowledge I have and how I reverted back my services to plain old
VMs.

All that complex structure needs to go away. I really don't want to spend more
than a couple dollars each month for a service that barely gets 1/2 requests
**per hour**. There's no need to scale.

There might be a need for auto-updating, but that's a problem of the future.
For now, subscribing to releases in github is more than enough for what I need.

I was paying around $50 total last month for one of the services I have.
Hopefully after this blog post I end up reducing it to $6 :)

## Current infrastructure

Up until now I have a couple of bills online:

- A Kubernetes cluster
- A load balancer
- Some block storage I use for persistent volume claims
- An S3 bucket with mostly glacier content for archival
- A terraform bucket
- Other random stuff I don't pay for, like Netlify and cloudflare dns

Excepting the buckets and random stuff, everything is in digital ocean.

And it works well. Almost too easy and well. I have
[ArgoCD](https://argo-cd.readthedocs.io/en/stable/) in my cluster which allows
me to specify my applications and helm charts easily in a git repo. The same
for infrastructure, which is deployed automatically by github actions in a
terraform repository. It works. It works well, is automated, is easily extended
and there's not much to complain about.

Except for the money.

I have like 5 or 6 services running there. Some of them I genuinely forgot they
existed and some others take requests of maybe 1/hour or so. There's absolutely
no need of this infrastructure, I don't need scaling or high availability. I'm
not even being attacked.

Yet the setup does its job. Which is something to consider.

Anyway, what I want to do is reduce my costs.

I think it's ironic how I'm going the reverse way to cut down on costs. Usually
a DevOps engineer would like to go the other way around, from low availability
and easy setup to high availability to hard setup. Or you can swap low
availability for high price in platforms like Heroku. These sites can scale and
keep up with a very noticeable cost. A regular DevOps engineer would work to
cut down on costs by maintaining the infrastructure themselves. In my case,
it's not worth having this infrastructure. Maybe I'll reconsider if my expenses
on online data exceed $100-$150? Now it's not the time, though. It really isn't

## Vultr

So I checked out the market prices and yeah, [Vultr](https://vultr.com) still
is the simplest and cheapest. With great machines, mind you.

I started by backing up my most critical postgres database, which involved a
`kubectl` command

```sh
$ kubectl port-forward -n databases services/postgres 5431:5432
$ pg_dump <database> -U <user> -h localhost -p 5431 > backup.sql
```

Two noteworthy (or curious, if you will) things:

- 5431 because, yeh, I always have something running in 5432 and I never seem
  to remember what
- Could have done `-Fc`, but I wanted to try to move this database to sqlite
  (spoiler: I failed), so I skipped that. The database was evidently not too
  big

After some searching, I found [this db-to-sqlite
project](https://github.com/simonw/db-to-sqlite) which seemed to work wonders
by converting a postgres database to a sqlite3 one.

My service ended up not being able to use the database anyway, but it was worth
trying. I wanted to simplify the service as much as I could.

Because, if you've done DevOps, there's this conception you get your head
around where you start to think that *everything* must be in some other
service. You **have** to store your static files in S3. You **have** to store
your data in a *proper* database, like Postgres or MySQL. Mind you, most of the
time there's not much of a reason why you should use those. And don't get me
wrong, a serious project should always use those services. It should at least
if you hope to grow a business.

But I'm not. I'm running some random services for me and my family. Wouldn't it
be better (and simpler, for that matter) that I took advantage or the storage
**that's already there** in my VM?. So yeah, I wanted to run my service with
sqlite. In the end I couldn't.

Leason learned though. And no, no regrets on postgres. How could I have learned?

Anyway, back to Vultr the VM was set up with Debian bullseye and a rather
simple machine. 1 vCPU, 1 GB of RAM and 25 GB of SSD. $5.

Roughly what I wanted to do was

- Go back to a docker-compose setup
- Everything in-house: data+services+storage

I had already done this setup before moving to kubernetes and it mostly worked
well.

So after the VM was online I set up docker and quickly stubmled upon [the
docker page in the debian wiki](https://wiki.debian.org/Docker) where they tell
you that it's a little dangerous. So I figured I could use
[podman](https://podman.io/) instead, for a rootless setup.

All of this work, as you might expect, was full or trial and error. Hence the
urge to write this article. So I'm just going to document (mostly) the final
result.

- Podman from debian stable works, but `podman-compose` doesn't
- `podman-compose` has to be installed through `pip3`, which needs `python3-pip`
- tl;dr: [use kubic
  libcontainers](https://computingforgeeks.com/how-to-install-podman-on-debian/)

That got me to a point where I could reliably use `podman` and `podman-compose`
for the time being.

Then I went to do basic housekeeping:

- [the basic
  guide](https://www.vultr.com/docs/initial-secure-server-configuration-of-ubuntu-18-04/)
- Easy enough. I was on Debian but was mostly the same
- Had to explicitly activate ssh key auth
- Disable a bunch of ssh stuff. God was that insecure

They say installing and using Arch Linux helps you understand Linux very well.
Well, I couldn't agree more. These steps were really a breeze for me and I
think everything has to do with knowing shell scripting and having a basic
understanding of systemd. Great!

Anyway, I guess I now know how to set up ufw (which turned out to work pretty well).

After setting that up, a basic scp + podman set up got me to the point where I
had my database up in the VM. The service also worked well.

Then came the problems.

- My setup was with caddy, which works wonders with SSL and reverse proxying
- `podman-compose` needs podman >= 3.1.0 (or something like that). Debian
  official is (as always) outdated, hence kubic libcontainers repo (which isn't
  updated to 4+ either)
- Podman rootless [cannot bind to ports
  <1024](https://github.com/containers/podman/blob/main/rootless.md). Fair
  enough, it's rootless for a reason.
- Had to mess with kernel parameters at runtime to make caddy bind to 80 and
  443: `sysctl net.ipv4.ip_unprivileged_port_start=443`. Not quite convinced
  about this. Maybe I'll move caddy to the OS so that I can add more services
  to this machine? we'll see.
- Ended up having to tinker with ufw+vultr firewall to get everything set up

## Lookback

Rather than the last part of this article, I want to talk about the first part:
As engineers, **we have to learn**, and we have to do it constantly. Of course,
DevOps is no exception, and its limitations make it a little harder for people
to get into the field. But I really think **it's worth it**. After all, as
engineers we should always decide between trade-offs. In my case I wanted to
take the cheaper and annoying approach rather than the easy but expensive one.
Having moved to kubernetes and going back again was a great process that taught
me a lot and I have no regrets

On a more random note:

I **finally** can use `/dev/urandom` to extract a random string

```sh
$ cat /dev/urandom | tr -dc a-zA-Z0-9_+/ | head -n 40
```

I don't even think it's that hard to understand if you `man tr`. But that might
just be because I've been writing way too many shell scripts these days.
