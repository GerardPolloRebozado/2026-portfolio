---
title: "Use protocols, not services"
description: "The modern internet is full of services that cause vendor lock-in. It's time to take our freedom back."
pubDate: "2026-03-06"
heroImage: "https://assets.gerarddupre.dev/blog/use-protocols-not-services.svg"
---

The modern internet is becoming less anonymous and far more centralized. We are increasingly dependent on a small group of large companies that provide us with "free" services in exchange for our personal data.

The internet was originally designed without built-in identity at the protocol level. However, in practice, users today are tracked endlessly through IP addresses, cookies, mandatory accounts, and device fingerprints. Modern services connect our activity to persistent identities, using that data to serve highly personalized ads and keep us hooked to their platforms.

This is a problem because it gives these mega-corporations enormous power over what we see, read, and buy. Furthermore, these closed services are rarely interoperable. They trap your data in a walled garden, making it incredibly hard to switch providers when you are unhappy with how you are being treated.

In the early days of the internet, interactions were built on open protocols and shared standards that let different systems talk to each other. Today, our digital lives are locked behind proprietary services that refuse to share.

## Why protocols matter

To build a more open and resilient internet, we need to move away from closed services and back toward open protocols.

If "protocol" sounds overly technical, you actually use one every day: Email.

Email is a perfect example of an interoperable protocol stack. You can create an account with a privacy-focused provider, and your friend can use Gmail. Even though you use completely different companies and apps, you can still seamlessly send messages to each other. If you decide you don't like your provider, you can move your data elsewhere. You can rely on major tech providers, or you can even self-host your own email server and keep total control.

Historically, FTP played a similar role for file transfers. IRC was the standard for chat. Anyone could build an app that connected to these networks. That is the freedom we lose when we rely entirely on closed ecosystems like Discord or WhatsApp.

## Recent example: Discord ID verification

When you are locked into a closed service, you are entirely at their mercy. A recent example is Discord’s controversial rollout of age and ID verification.

Because Discord is a centralized service, users had no choice but to comply or lose access to their communities. Reports later indicated that more than 70,000 sensitive verification images were exposed in a third-party moderation system breach. This pushed many people to look for safer alternatives.

However, when people leave a platform like Discord, they often just jump ship to another closed service. Instead, we should be adopting open protocols, which permanently eliminate this kind of long-term vendor lock-in.

[Source](https://proton.me/blog/discord-age-verfication-breach)

## Censorship and control

Closed services make it incredibly easy for governments and corporations to track users and censor content. If a government wants to silence a movement, they only have to order a single company to pull the plug or block a single domain.

We are seeing governments and corporations attempt to exercise this control more and more every day:

**Government Overreach (Chat Control):** The European Union has aggressively pushed for "Chat Control" legislation (fightchatcontrol.eu), which threatens to mandate the mass scanning of private messages, effectively killing end-to-end encryption. If passed, centralized services like WhatsApp or Discord will simply be forced to comply, scanning everyone's private lives.

**Corporate Censorship (La Liga):** In Spain, La Liga has mounted incredibly aggressive anti-piracy campaigns, pushing courts and ISPs to block entire domains, apps, and platforms with very little oversight. When legitimate websites or platforms get caught in the crossfire, users of centralized services instantly lose access. You can read more about this in [La Liga Gate](https://laligagate.com/)

Protocols fix this. Open protocols are decentralized by design. Because anyone can implement their own server or client, there is no single "head" to cut off. A government or corporation cannot easily force a global, decentralized network of independent servers to implement mass surveillance or blanket censorship.

Furthermore, you don't have to be a tech expert or run your own server to benefit from this. You can easily sign up for services built on open protocols that prioritize your rights. For example, email providers like ProtonMail or Tuta use end-to-end encryption, meaning the companies themselves cannot read the contents of your messages. This keeps your private conversations safe from corporate profiling and mass surveillance.
Note on this is that metadata is still exposed, and contains subjects lines, recipients and other information but this is a much smaller attack surface than the contents of your messages and is caused by the design of email protocols, not the providers.

## Service-to-protocol alternatives

Here are some popular services and open-protocol alternatives:

- Messaging (WhatsApp, Discord): Move to the Matrix protocol. (Try apps like Element or FluffyChat).

- Social media (Twitter, Facebook): Move to ActivityPub. (Try Mastodon).

- Video streaming (YouTube, Twitch): Move to PeerTube.

- Cloud storage (Google Drive): Move to WebDAV or SFTP. (Try Nextcloud).

- Email (Gmail, Outlook): Rely on SMTP/IMAP. (Try ProtonMail or Tuta).

- Calendar & Contacts (Google): Move to CalDAV and CardDAV.

- Blogging/newsletters (Medium, Substack): Rely on RSS.

I do not use all of these services, and I do not use all of these protocols, but I try to use as many open protocols as possible and avoid being locked into any single provider. For example, YouTube is still a great service and I have not found a full replacement for it yet. But I stopped using Discord and migrated to Matrix, which I self-host with [tuwunel](https://github.com/matrix-construct/tuwunel) (self-hosting is optional). Some of my friends use Matrix too; not all of them are tech-savvy, and they still use it without problems.

## How can I start?

The best way to start is to identify the service you rely on the most, like email and swap it out first.

Look for alternatives to Gmail, Outlook, or iCloud, and start using them. You don't have to do it all at once; you can migrate gradually by changing the email address on your most important accounts and setting up automatic forwarding from your old inbox to your new one. This way, you don't lose access to anything while you make the transition.

## Conclusion

I do not use all of these protocols, and I haven't abandoned every major service overnight. For example, YouTube is still a massive platform and I have not found a complete replacement for it yet.

But I am making the shift. I stopped using Discord entirely and migrated to Matrix, which I currently self-host using tuwunel (though self-hosting is entirely optional). Some of my friends use Matrix with me now and they aren't tech-savvy, but because the modern apps are so polished, they use it without any problems at all.

The internet should be a place where we can communicate and share information freely, without being held hostage by a few massive companies. By choosing apps built on open protocols instead of closed services, we can reclaim our data, resist censorship, and build a truly decentralized web.
