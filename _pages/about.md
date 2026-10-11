---
permalink: /
title: "Augustine Nguyen"
description: "Senior Financial Data Engineer focused on market and financial data platforms, platform architecture, reliability, and a path toward Staff-level scope."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

*Senior Financial Data Engineer · Market & Financial Data Platforms · Republic of Korea*

> *Market and financial data that is correct, explainable, and recoverable.*

| 5B+ | 10M+ | < 1 s | Champion | 7+ years |
|:---:|:---:|:---:|:---:|:---:|
| records on highly available clusters | platform users served | search over streaming transaction data | FPT AI Hackathon 3 (2025, global) | industry data engineering |

---

## Introduction

I am a data engineer with **7+ years in industry**, focused on **market and financial data platforms** and based in the **Republic of Korea**. I design ingestion, storage, and delivery so that traders, risk teams, analysts, and downstream systems receive data that is **correct as of a point in time, explainable, and recoverable**.

My work includes **highly available ClickHouse, MongoDB, and Redis clusters** holding **5B+ records**, **Spark** pipelines for a platform serving **10M+ users**, **Kafka**-based streams of on-chain financial transactions, and an **Oracle to EDB (PostgreSQL)** migration for an investment securities system. I also built the document pipeline behind the winning entry at **FPT AI Hackathon 3 (2025)**.

I am growing toward **Staff-level scope**: owning platform architecture across teams, setting the standards for how financial data is ingested, validated, and changed, and making the platform easier for other engineers to build on. An early career in credit risk modeling means I design for the people who *consume* the data, not just the pipelines that produce it.

---

## Where I Fit

| Focus | What I bring | Evidence |
|:---|:---|:---|
| **Financial Data Engineering** | Highly available storage with disaster recovery · SQL migration that preserves business semantics · traceable, reconcilable records | [ABACUS](/portfolio/02-abacus/) · [Investment Securities](/portfolio/07-investment-securities/) |
| **Market Data Engineering** | Real-time event ingestion · publish–subscribe fan-out · columnar storage for high-volume, time-ordered data · sub-second search | [BlockStream](/portfolio/05-blockstream/) · ClickHouse clusters |
| **Toward Staff Data Engineering** | Platform architecture ownership · standards and paved roads · safe change management · operational excellence | [Staff-Level Scope](#staff-level-scope) |
| *Adjacent: AI on financial data* | Document to structured data pipelines · vector indexing · LLM enrichment | [AISOL](/portfolio/01-aisol/) |

---

## Selected Engineering Work

- **[ABACUS — Credit Risk Data Infrastructure](/portfolio/02-abacus/):** Highly available ClickHouse, MongoDB, and Redis clusters managing **5B+ records**, Spark processing for a platform serving **10M+ users**, and operational monitoring.
- **[Investment Securities — SQL Migration](/portfolio/07-investment-securities/):** Oracle to EDB (PostgreSQL) SQL migration and query optimization aligned with financial business requirements.
- **[BlockStream — Transaction Data Pipelines](/portfolio/05-blockstream/):** Ethereum and Polygon collection, Kafka event distribution, PostgreSQL storage, and OpenSearch / Algolia indexing.
- **[AISOL — Enterprise AI Data Pipeline](/portfolio/01-aisol/):** Parallel processing of documents, tables, and diagrams for Japanese-language retrieval with Qdrant, Gemini, and Qwen.

**Champion — FPT AI Hackathon 3 (2025)** <br />
Team *Cẩm Y Vệ (FKR-KTX)* placed 1st in the *KT/KB Technical Solutions* track of a global competition across FPT offices worldwide with **AISOL**.

---

<a id="staff-level-scope"></a>

## Staff-Level Scope: Platform & Technical Direction

A senior engineer makes a pipeline reliable. A staff engineer makes the **platform** reliable, so every team can ship correct market and financial data without solving the same problems again. That is the scope I am building toward.

### Architecture Ownership So Far

| Decision area | What I owned | Where |
|:---|:---|:---|
| **Multi-store platform architecture** | Highly available ClickHouse, MongoDB, and Redis clusters for 5B+ records, with disaster recovery provisions | [ABACUS](/portfolio/02-abacus/) |
| **End-to-end streaming design** | Collection → Kafka fan-out → PostgreSQL persistence → OpenSearch / Algolia indexing, with sub-second search | [BlockStream](/portfolio/05-blockstream/) |
| **Database platform migration** | Oracle → EDB (PostgreSQL), rewriting SQL to ANSI while preserving securities business logic | [Investment Securities](/portfolio/07-investment-securities/) |
| **Throughput at scale** | Spark pipeline optimization for a platform serving 10M+ users | [ABACUS](/portfolio/02-abacus/) |
| **Requirements → data interfaces** | Turning securities business rules into SQL; building monitoring dashboards for platform operators | [Investment Securities](/portfolio/07-investment-securities/) · [ABACUS](/portfolio/02-abacus/) |

### How I Lead Platform Work

1. **Architecture decisions in writing.** Design documents and ADRs that record the options, the tradeoffs (latency, throughput, cost, operational load), and the conditions that would reverse the decision.
2. **Paved roads over one-offs.** Reusable ingestion and normalization templates with deduplication, replay, backfill, and quality checks built in, so onboarding a new feed is configuration, not a new project.
3. **Data products with owners and SLOs.** Every critical dataset has an owner, a contract, and published freshness, completeness, and accuracy targets. Consumers know what to expect, and producers know what they are accountable for.
4. **Change without breakage.** Versioned schemas, parallel runs with reconciliation during migrations, and deprecation windows for downstream consumers, the discipline a production database migration requires.
5. **Operational excellence.** Runbooks, DR drills, alerts on data symptoms (staleness, gaps, volume anomalies) as well as job failures, and blameless incident reviews that end in platform fixes.
6. **Controls for regulated data.** Access control, audit trails, retention policies, handling rules for sensitive fields, and lineage designed in from the start. Financial data has to make sense to auditors and regulators as well as to users.
7. **Cost and capacity as design inputs.** Partitioning, retention tiers, and compute sizing planned against growth in instruments, venues, and history depth.
8. **Multiplying other engineers.** Design reviews, written standards, and pairing that raise the team's baseline instead of routing every hard problem through one person.

### Target-State Market Data Platform

The reference design I would push for. Every layer is replayable, and correctness controls apply across the whole platform, not only inside individual pipelines.

| Layer | Responsibility | Controls |
|:---|:---|:---|
| **Sources** | Exchange and vendor feeds · reference data (instruments, calendars, corporate actions) · internal trades and positions | Source contracts · onboarding checklist |
| **Ingest** | Kafka with idempotent producers and replay | Deduplication keys · late and out-of-order handling |
| **Raw store** | Immutable log of everything received | Retention policy · replay from any point |
| **Normalize** | Symbology mapping · price adjustments · trading calendars and time zones | Reference data validation · quality gates |
| **Curated store** | Point-in-time (bitemporal) datasets on ClickHouse / PostgreSQL | Reconciliation against source of record · lineage |
| **Serve** | SQL and APIs · search · trading, risk, research, and AI consumers | SLOs · access control · audit trail |

---

## Engineering Principles for Market & Financial Data

- **Point-in-time correctness.** Keep *event time*, *ingestion time*, and *knowledge time* separate. Use as-of joins and keep revisions so reports, backtests, and models never see data from the future.
- **Reference data first.** Stable instrument and entity identifiers, symbol mapping across sources, corporate actions and price adjustments, trading calendars and time zones. Most market data bugs are reference data bugs.
- **Financial records keep their meaning.** Currency, units, decimal precision, and transaction status travel with every record, and corrections stay visible to downstream users instead of silently overwriting history.
- **Idempotent, replayable pipelines.** Deduplication keys, late and out-of-order event handling, deterministic reruns, and backfills that cannot corrupt history.
- **Reconcile before you publish.** Check against the source of record *before* data reaches traders, risk, or finance.
- **Modernize without changing meaning.** Database and SQL migrations start from the business rules the queries must preserve, then address compatibility, access patterns, and performance.
- **Lineage and reproducibility.** Any number in a report or risk figure should trace back to versioned inputs and the transformation that produced it.
- **Storage that fits the access pattern.** Columnar stores for analytical scans over time series, key-value caches for hot lookups, and search indexes for exploration, each chosen on latency, throughput, and cost.

---

## Core Engineering Experience

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

## Credentials

- AWS Certified Data Engineer — Associate
- AWS Certified AI Practitioner — Foundational
- Microsoft Certified: Azure AI Fundamentals
- Nanodegree: Data Engineering with Microsoft Azure
- Astronomer Certification: Apache Airflow Fundamentals

---

View my [**Projects**](/portfolio/) or browse the full [**CV**](/cv/).

**Open to Senior Financial Data Engineer roles in market data and financial data platforms, with a path toward Staff-level platform ownership.**

*I want data that a trader, risk manager, or auditor can rely on and trace back to its source.*

Contact: [augustino0890@gmail.com](mailto:augustino0890@gmail.com) · [LinkedIn](https://www.linkedin.com/in/augustine2015/) · [GitHub](https://github.com/augustine0890) · [Twitter](https://twitter.com/augusti61988772)
