---
title: "Site Build"
description: "Site Build"
author: "Nick Brodeur"
version: "0.1"
dateStarted: "2025-01-08" # format: YYYY-MM-DD
lastUpdated: "2025-01-08" # format: YYYY-MM-DD
image: { src: "", alt: "" }
category: "misc"
draft: true
---

## Site Build

##### Requirements

My primary goal with the site was to have something simple, maintainable, and flexible. Content should be easy to write and edit, and allow for linting (grammar check, formatting, etc.), pre-/post-processing, or any kind of formatting. Javascript has several good static generators, and while I haven't tried all of them, Astro was highly rated and allowed for shipping with essentially no configuration, and no JS (which means it's fast).

Content is written in markdown and processed into html using a parsing pipeline that makes it very simple to control and modify.

Regarding content management and hosting, I'm currently making changes directly to the source code and re-deploying on each commit to [Vercel](https://vercel.com/) for absolute simplicity. If this ever becomes an issue, I'm planning on moving to [Cloudflare Pages](https://pages.cloudflare.com/) or some sort of self-hosted solution with Cloudflare for DNS.
