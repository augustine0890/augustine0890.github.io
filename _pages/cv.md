---
layout: archive
title: "Curriculum Vitae"
description: "Senior Financial Data Engineer: market and financial data platforms, streaming pipelines, SQL migration, resilient databases, and platform architecture."
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="page__content cv-content" markdown="1">

*Senior Financial Data Engineer · Market & Financial Data Platforms* <br />
Republic of Korea · [augustino0890@gmail.com](mailto:augustino0890@gmail.com) · [LinkedIn](https://www.linkedin.com/in/augustine2015/) · [GitHub](https://github.com/augustine0890) · [Twitter](https://twitter.com/augusti61988772)

> *Financial data that arrives on time, matches its source, and can be explained.*

---

## Profile

Data engineer with 5+ years in industry, mostly on financial products. Designed highly available ClickHouse, MongoDB, and Redis clusters holding **5B+ records** for a credit risk platform with **10M+ users**, and tuned its Spark pipelines. Streamed on-chain transactions through **Kafka** into PostgreSQL and search with sub-second lookups. Moved investment securities SQL from **Oracle to EDB (PostgreSQL)** without changing its business logic. Built the document pipeline for the team that won **FPT AI Hackathon 3 (2025)**.

Looking for Senior Financial Data Engineer roles, with the aim of growing into Staff-level work on platform architecture and shared standards. Started in credit risk modeling, which shapes how I design for the people who use the data. Cares most about point-in-time correctness, reconciliation with the source, careful schema changes, and ingestion that can be safely replayed.

---

## Platform & Architecture Highlights

- **Multi-store architecture:** ClickHouse, MongoDB, and Redis clusters with high availability and disaster recovery for 5B+ records (AZEN Global).
- **Streaming, end to end:** on-chain collection → Kafka → PostgreSQL → OpenSearch / Algolia, searchable in under a second (SupperTree).
- **Database migration:** Oracle → EDB (PostgreSQL), with SQL rewritten to ANSI and the securities logic left unchanged (FPT Software Korea).
- **Throughput:** Spark tuning for a platform with 10M+ users (AZEN Global).
- **Operational visibility:** live monitoring dashboards and reporting APIs that operators and stakeholders used day to day (AZEN Global, FPT Software Korea).

---

## Awards & Recognition

**Champion — FPT AI Hackathon 3** · *2025* <br />
First place in the *KT/KB Technical Solutions* track of a global competition across FPT offices, as part of team *Cẩm Y Vệ (FKR-KTX)*. Our entry, **AISOL**, was a Japanese-language enterprise RAG system built on Qdrant, Gemini, and Qwen.

---

## Professional Experience

### FPT Software Korea — *Data Software Engineer*
*June 2024 – Present · South Korea*

#### Investment Securities Project — Meta

Migration of an investment securities database from Oracle to EDB (PostgreSQL).
- Rewrote Oracle SQL as ANSI SQL so it ran on EDB (PostgreSQL), and made the queries faster in the process.
- Turned complex securities business requirements into efficient SQL.

*Technologies: Oracle · EDB (PostgreSQL) · ANSI SQL*

#### QA/QC Data Analytics and Visualization Dashboard

Data processing and reporting for quality operations.
- Built SQL and Java pipelines to aggregate, preprocess, and analyze QA/QC records.
- Used Apache Commons Math for statistical processing and delivered reports through Spring Boot REST APIs and Chart.js dashboards.

*Technologies: SQL · Java · Oracle · Apache Commons Math · Chart.js · REST APIs · Spring Boot*

---

### SupperTree — *Software Engineer*
*April 2021 – June 2024 · South Korea*

#### BlockStream — Real-Time Blockchain Data System

- Built real-time collection and monitoring of Ethereum and Polygon transactions on a publish–subscribe design.
- Sent transactions through Kafka into PostgreSQL, then indexed them in OpenSearch and Algolia for sub-second search.
- Owned the flow from collection to storage and indexing, including metadata enrichment.

#### Discord Emotion Tracker

- Built a message ingestion and enrichment pipeline for Discord customer service communications.
- Integrated AWS Comprehend and HuggingFace Rust-BERT for sentiment analysis and AWS Translate for English-to-Korean translation.
- Structured MongoDB storage for messages, translations, and sentiment metrics to support downstream queries.

#### NFT Management — Token Staking and Earning App

- Built the backend for NFT staking and token rewards, with attention to transaction integrity.
- Connected the app to on-chain NFT transactions and optimized the database queries behind it.

*Technologies: Python · Rust · Golang · TypeScript · Node.js · Kafka · AWS Comprehend/Translate · HuggingFace · Algolia · OpenSearch · PostgreSQL · MongoDB · Kinesis*

---

### FitPetMall — *Data Software Engineer*
*July 2020 – April 2021 · South Korea*

#### InsightFlow — Customer Behavior Data Pipelines

- Developed data models and workflows for collecting and processing e-commerce customer behavior records.
- Built real-time event streaming and data processing with Kafka and ELK Stack.
- Delivered data workflows for shipping, product delivery, and promotional analysis.

*Technologies: Python · FastAPI · ELK Stack · Apache Kafka · Oracle*

---

### AZEN Global — *Data Scientist / ML Engineer*
*March 2019 – July 2020 · South Korea*

#### ABACUS — Advanced Credit Risk Prediction Analysis Tool

Data infrastructure and processing for a fault-detection and credit risk platform serving more than **10 million users**.

- Designed highly available ClickHouse, MongoDB, and Redis clusters holding 5B+ records, with disaster recovery in place.
- Reworked fault-detection pipelines on Apache Spark, raising throughput for workflows serving 10M+ users.
- Built live monitoring dashboards and reports so the team could see platform health and act on it.
- Developed machine learning credit risk models that improved scoring accuracy by 3%.

*Technologies: Python · Django · FastAPI · ClickHouse · MongoDB · Oracle · Redis · Apache Spark*

---

### National Cancer Center — *Graduate Research Assistant (Health Data Analyst)*
*September 2016 – September 2018 · Goyang, South Korea*

#### Mendelian Randomization — Causal Analysis of BMI on Thyroid Cancer Risk

- Integrated genome-wide SNP data and environmental factors for statistical analysis using Python, R, and SAS.
- Applied instrumental variable analysis (Mendelian Randomization) to evaluate causal relationships.

*Technologies: SAS · Python · R · Linux*

---

## Education

**Master of Public Health — Health Data Science** <br />
National Cancer Center, Goyang, Republic of Korea · *2016 – 2018* <br />
Thesis: *Causal Effect of BMI on Thyroid Cancer Risk using Mendelian Randomization*

**Bachelor of Engineering — Biotechnology** <br />
Industrial University of Ho Chi Minh City, Vietnam · *2008 – 2013*

---

## Credentials

- AWS Certified Data Engineer — Associate
- AWS Certified AI Practitioner — Foundational
- Microsoft Certified: Azure AI Fundamentals
- Nanodegree: Data Engineering with Microsoft Azure
- Astronomer Certification: Apache Airflow Fundamentals

---

## Technical Skills

| Domain | Tools & Methods |
|:---|:---|
| **Financial Data Domains** | Investment Securities · Credit Risk · On-Chain Transactions · Fault Detection |
| **Streaming & Real-Time Ingestion** | Apache Kafka · Kinesis · Publish–Subscribe · ELK Stack |
| **Batch & Distributed Processing** | Apache Spark · Airflow · dbt · ETL/ELT · Pandas |
| **Analytical & Operational Storage** | ClickHouse · PostgreSQL / EDB · Oracle · MongoDB · Redis |
| **Platform Reliability** | Highly Available Clusters · Disaster Recovery · Operational Monitoring Dashboards |
| **SQL Engineering & Migration** | Query Optimization · Oracle → EDB (PostgreSQL) Migration · ANSI SQL |
| **Search & Retrieval** | OpenSearch · Algolia · Qdrant · Vector Search |
| **AI Data Engineering** | Multimodal Document Processing · RAG · LangChain · Gemini · Qwen · HuggingFace |
| **Delivery** | FastAPI · Django · Spring Boot · REST APIs |
| **Cloud & Infrastructure** | AWS · Azure · Docker · Kubernetes |
| **Languages** | Python · SQL · Golang · Rust · Java · TypeScript |

---

## Open Source & Side Projects

- **[discord-playdapp-bot](https://github.com/augustine0890/discord-playdapp-bot)** — Rust · Serenity · MongoDB · Docker <br />
  High-performance Discord bot built in Rust using Serenity for gaming community management. Handles tournament ticket exchange, player engagement tracking, and leaderboard ranking via slash commands.

- **[outfit-square](https://github.com/augustine0890/outfit-square)** — Python · Discord.py · MongoDB · Poetry <br />
  Python-based Discord bot for user point management in metaverse gaming channels. Integrates MongoDB for persistent storage with multi-stage (dev/prod) deployment and OAuth2 authentication.

---

## Personal Details

- Citizenship: Vietnamese
- Country of Residence: Republic of Korea
- Languages: English (fluent) · Vietnamese (native)

<div class="cv-download-actions">
  <a href="/files/augustine-nguyen-cv.pdf" download class="cv-download-btn">Download CV (PDF)</a>
</div>

</div>
