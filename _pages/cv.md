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

> *Market and financial data that is correct, explainable, and recoverable.*

---

## Profile

Data engineer with **5+ years of industry data engineering**, focused on **market and financial data platforms**. Architected highly available ClickHouse, MongoDB, and Redis clusters managing **5B+ records**, optimized **Spark** processing for a platform serving **10M+ users**, built **Kafka**-based streams of on-chain financial transactions with sub-second search, and migrated investment securities SQL from **Oracle to EDB (PostgreSQL)**. Built the document pipeline behind the winning entry at **FPT AI Hackathon 3 (2025)**.

Seeking **Senior Financial Data Engineer** roles, growing toward **Staff-level** ownership of platform architecture, shared engineering standards, and alignment between data producers and consumers. Engineering priorities include **point-in-time correctness, source reconciliation, controlled schema evolution, and recoverable ingestion**. A background in credit risk modeling keeps the design anchored to how financial data is consumed.

---

## Platform & Architecture Highlights

- **Multi-store platform architecture:** highly available ClickHouse, MongoDB, and Redis clusters for 5B+ records, with disaster recovery provisions (AZEN Global).
- **End-to-end streaming design:** on-chain collection → Kafka → PostgreSQL → OpenSearch / Algolia, with sub-second search (SupperTree).
- **Database platform migration:** Oracle → EDB (PostgreSQL), rewriting SQL to ANSI while preserving investment securities business logic (FPT Software Korea).
- **Throughput at scale:** Spark pipeline optimization for a platform serving 10M+ users (AZEN Global).
- **Operational visibility:** real-time monitoring dashboards and reporting APIs for platform operators and stakeholders (AZEN Global, FPT Software Korea).

---

## Awards & Recognition

**Champion — FPT AI Hackathon 3** · *2025* <br />
Global competition across all FPT offices worldwide. Team *Cẩm Y Vệ (FKR-KTX)* placed 1st in the *KT/KB Technical Solutions* track with **AISOL**, a Japanese-language enterprise RAG platform built on Qdrant, Gemini, and Qwen.

---

## Professional Experience

### FPT Software Korea — *Data Software Engineer*
*June 2024 – Present · South Korea*

#### Investment Securities Project — Meta


Migrated an Oracle database to EDB (PostgreSQL), optimizing SQL queries for performance and compatibility to meet business requirements.
- Converted and optimized Oracle SQL queries to ANSI-standard for EDB (PostgreSQL) compatibility, improving query efficiency.
- Translated complex business requirements into high-performance SQL queries, ensuring alignment with project goals.

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

- Built scalable real-time monitoring for Ethereum and Polygon transaction data using a publish-subscribe architecture.
- Engineered data pipelines with Kafka, persisted in PostgreSQL, indexed in OpenSearch/Algolia for high-performance search.
- Managed end-to-end workflow from on-chain collection to storage and indexing, including enriched metadata.

#### Discord Emotion Tracker

- Built a message ingestion and enrichment pipeline for Discord customer service communications.
- Integrated AWS Comprehend and HuggingFace Rust-BERT for sentiment analysis and AWS Translate for English-to-Korean translation.
- Structured MongoDB storage for messages, translations, and sentiment metrics to support downstream queries.

#### NFT Management — Token Staking and Earning App

- Developed scalable backend infrastructure for NFT staking and token earning, ensuring reliable UX and transaction integrity.
- Integrated blockchain technology for transparent NFT transactions; optimized database queries for high-performance data handling.

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

- Architected highly-available, resilient database clusters across ClickHouse, MongoDB, and Redis to manage 5B+ records, with disaster-recovery provisions safeguarding data integrity and operational continuity.
- Optimized fault-detection data pipelines by streamlining processing on Apache Spark, materially increasing throughput for workflows serving 10M+ users.
- Built real-time monitoring dashboards and interactive reports surfacing live platform signals, strengthening operational transparency and supporting informed decision-making.
- Developed advanced credit risk models using machine learning algorithms, achieving a 3% lift in scoring accuracy and improving the precision of downstream financial assessments.

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
