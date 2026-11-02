---
title: "Patchwork Ōtautahi"
date: 2026-10-08
draft: false
summary: "An interactive installation that brings Christchurch to life - built for public spaces, made to be played by everyone who walks past."
tags: ["Unity", "Kotlin Multiplatform", "C#", "Location-based experience"]
weight: 1
cover:
    image: "patchlong.png"
    alt: "Screenshot of Patchwork Ōtautahi"
    relative: true
---

|                |                                                                                                           |
|----------------|-----------------------------------------------------------------------------------------------------------|
| **Role**       | Programmer                                                                                                |
| **Technology** | Unity, Kotlin Multiplatform, C#                                                                           |
| **Team**       | 11 people                                                                                                 |
| **Duration**   | 7 months                                                                                                  |
| **Outcome**    | Multi-screen installation connecting players with their personal devices                                  |
| **Links**      | [Project Website](https://www.patchworkplay.com) · [Instagram](https://www.instagram.com/patchwork.play/) |

## Overview

Patchwork: Ōtautahi is an interactive city experience inspired by the people, places and personality of Christchurch. It's not a game you play alone at home; it's a living world built into a physical, multi-screen installation, designed to sit in public spaces and respond to whoever's standing in front of it.

### Trailer
<iframe width="456" height="810" src="https://www.youtube.com/embed/G47jehe907s" title="Patchwork: Ōtautahi Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## My Role

I was focused on the technical side of the project, developing the networking, backend, deployment, and systems architecture. I designed and implemented the WebSocket communication layer between the Unity installation and the web app, which included JSON message serialisation, message routing, session management, and built-in support for multiple instances running simultaneously.

## Highlights

- Building a bidirectional WebSocket messaging system between Unity and a web app.
- Adding session IDs to support multiple instances of the installation running simultaneously.
- Developing backend support for NPC customisation, selfie sharing, and player interaction with the installation.
- Setting up Docker-based server deployment and a CI/CD pipeline using Azure, Terraform, and GitHub Actions.
- Adding Sentry and Azure Application Insights for crash reporting, monitoring, and usage analytics.
- Adding improvements to the web app user experience by redesigning the requests screen, character customisation, and adding selfie sharing.
- Installation on display in the Christchurch library Tūranga!

## Challenges & Solutions

Creating a seamless experience for players was a significant technical challenge. Players needed to interact between the web application on their personal devices and the Unity installation, regardless of the network environment they were using. To support this, I designed a WebSocket-based communication system in which both Unity and the web application served as clients connected through a central server. Implementing the networking layer at a relatively low level gave me greater control over connection management and message routing, allowing multiple installations to operate simultaneously while supporting a wide range of player devices and network configurations.

This architecture was also designed with scalability and reliability in mind. By following industry-standard development practices, including CI/CD pipelines and separate development and production environments, I built a system that could be tested, updated, and maintained without disrupting the player experience.

## What I Learned

This project gave me experience in real-time networking, distributed systems, and a development and production workflows moving beyond delivering a feature to considering reliability, observability, maintainability, and the needs of the team using the code.

I learned to investigate problems with logs and metrics, communicate clearly during stressful moments with the installation, and respond to feedback from real users, which improved my ability to iterate on the overall user experience.

## Gallery

{{< carousel
    id="patchwork-gallery"
    label="Patchwork Ōtautahi gallery"
    alt="Patchwork Ōtautahi gallery image"
    images="Carousel1.png,Carousel3.png,Carousel4.png,Carousel5.png,Carousel6.png,Carousel7.png,Carousel8.png"
>}}
