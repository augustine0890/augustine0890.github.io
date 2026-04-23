---
title: "Discord Emotion Tracker — NLP Sentiment & Voice-of-Customer Analytics"
excerpt: "Real-time AI-powered sentiment analysis and translation for Discord communities. Built in Rust and Python."
collection: portfolio
---

**Company:** SupperTree, South Korea · **Role:** Software Engineer

An AI-powered application to analyze customer service communications on Discord, providing sentiment analysis and real-time language translation for actionable insights.

### Key Contributions

- Captured and analyzed real-time Discord interactions, building a labeled dataset for **sentiment analysis** and emotion classification.
- Applied NLP via **AWS Comprehend** and **HuggingFace Rust-BERT** to detect emotional patterns across high-volume message streams — directly applicable to customer satisfaction and churn risk signals.
- Implemented real-time language translation (**AWS Translate**, English → Korean) enabling cross-market customer insight aggregation.
- Structured MongoDB storage for original messages, translations, and sentiment metrics — queryable for downstream analytics and reporting.

### Companion Repositories

Related open-source Discord bot projects exploring similar architectures:

- **[discord-playdapp-bot](https://github.com/augustine0890/discord-playdapp-bot)** — Rust · Serenity · MongoDB · Docker
  A high-performance Discord bot in Rust using Serenity for gaming community management. Handles tournament ticket exchange, player engagement tracking, and leaderboard functionality via slash commands.

- **[outfit-square](https://github.com/augustine0890/outfit-square)** — Python · Discord.py · MongoDB · Poetry
  Python-based Discord bot for user point management in metaverse gaming channels. Integrates MongoDB for persistent storage with multi-stage deployment and OAuth2 authentication.

### Tech Stack

`Rust` · `Serenity` · `Python` · `Golang` · `AWS Comprehend` · `AWS Translate` · `HuggingFace Rust-BERT` · `MongoDB` · `Oracle`
