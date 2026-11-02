---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
summary: "One-line pitch of the game."
tags: ["Unity", "C#", "Genre"]
weight: 10 # lower = earlier in the projects list
cover:
  image: "cover.png" # put cover.png in this folder
  alt: "Screenshot of {{ replace .File.ContentBaseName "-" " " | title }}"
  relative: true
---

|              |                                    |
|--------------|------------------------------------|
| **Role**     | Gameplay Programmer                |
| **Engine**   | Unity                              |
| **Team**     | Solo / X people                    |
| **Duration** | X weeks                            |
| **Platform** | PC                                 |
| **Links**    | [Play on itch.io](#) · [Source](#) |

## Overview

What is the game? Core loop, genre, the hook.

{{"{{"}}< youtube VIDEO_ID >{{"}}"}}

## My Role

What you personally built or owned.

## Highlights

- Feature or system you're proud of
- Another one

## Challenges & Solutions

A problem you hit and how you solved it.

## What I Learned

Short reflection.

## Gallery

![Screenshot](screenshot-1.png)
