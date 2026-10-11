---
permalink: /
title: "Augustine Nguyen"
description: "Senior Financial Data Engineer in Korea working on market and financial data platforms, with a path toward Staff-level platform work."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

*Senior Financial Data Engineer · Market & Financial Data Platforms · Republic of Korea*

> *Good financial data is a little boring. It shows up on time, it matches the source, and anyone can tell you where a number came from.*

| 5B+ | 10M+ | < 1 s | Champion | 5+ years |
|:---:|:---:|:---:|:---:|:---:|
| records on highly available clusters | platform users served | search over streaming transaction data | FPT AI Hackathon 3 (2025, global) | industry data engineering |
{: .metrics-table}

---

## Introduction

I have spent more than five years in data engineering, most of it on financial products. At AZEN Global I designed the ClickHouse, MongoDB, and Redis clusters behind a credit risk platform: more than 5 billion records and over 10 million users. At SupperTree I built the pipeline that carried Ethereum and Polygon activity from the chain, via Kafka, to PostgreSQL and a search index. At FPT Software I moved an investment securities system's SQL off Oracle and onto EDB (PostgreSQL). In 2025 I also built the document pipeline for the team that won FPT AI Hackathon 3.

My first industry job was building credit risk models, and that habit stayed with me. Before I sketch a pipeline, I picture the person at the end of it: a risk analyst rerunning last quarter, or an operations team trying to explain why two totals disagree. Then I work backwards to the storage and ingestion that would make their job easy.

Today I am after a Senior Data Engineer position on a market data or financial data platform. Further out, I want Staff-level responsibility: setting direction for a platform as a whole and writing the standards that other teams lean on. The rest of this page explains what I have done toward that and how I would go about it.

---

## Where I Fit

| Focus | What I bring | Evidence |
|:---|:---|:---|
| **Financial Data Engineering** | Storage that survives failures · SQL migrations that keep business rules intact · records that reconcile | [ABACUS](/portfolio/02-abacus/) · [Investment Securities](/portfolio/07-investment-securities/) |
| **Market Data Engineering** | Streaming ingestion with fan-out to several consumers · columnar storage for time-ordered data · fast search | [BlockStream](/portfolio/05-blockstream/) · ClickHouse clusters |
| **Toward Staff Data Engineering** | Owning architecture across systems · shared standards · change management · operations | [Staff-Level Scope](#staff-level-scope) |
| **Supporting: AI Data Engineering** | Turning enterprise documents into structured, searchable data · vector indexing · LLM enrichment | [AISOL](/portfolio/01-aisol/) |

---

## Selected Engineering Work

- **[ABACUS — Credit Risk Data Infrastructure](/portfolio/02-abacus/):** the database and processing layer of a credit risk platform. Highly available clusters for **5B+ records**, faster Spark jobs, and monitoring for a product with **10M+ users**.
- **[Investment Securities — SQL Migration](/portfolio/07-investment-securities/):** rewriting Oracle queries into ANSI SQL for EDB (PostgreSQL) while keeping the securities business rules exactly as they were.
- **[BlockStream — Transaction Data Pipelines](/portfolio/05-blockstream/):** collecting on-chain transactions, passing them through Kafka, storing them in PostgreSQL, and indexing them in OpenSearch and Algolia.
- **[AISOL — Enterprise AI Data Pipeline](/portfolio/01-aisol/):** parsing documents, tables, and diagrams in parallel so a Japanese-language retrieval system could answer questions across sections.

**Champion — FPT AI Hackathon 3 (2025)** <br />
My team, *Cẩm Y Vệ (FKR-KTX)*, took first place in the *KT/KB Technical Solutions* track of this global competition across FPT offices with **AISOL**.

---

<a id="staff-level-scope"></a>

## Staff-Level Scope: Platform & Technical Direction

When one pipeline is fixed, one team is happy. When the platform is fixed, the next ten teams never meet the problem at all. I want to spend more of my time on the second kind of fix. Below is what I have owned so far, how I would work at that level, and the kind of platform I would aim for.

### What I Have Owned So Far

| Decision area | What I owned | Where |
|:---|:---|:---|
| **Multi-store architecture** | ClickHouse, MongoDB, and Redis clusters with high availability and disaster recovery, holding 5B+ records | [ABACUS](/portfolio/02-abacus/) |
| **Streaming design, end to end** | Collection, Kafka distribution, PostgreSQL storage, and OpenSearch / Algolia indexing, with sub-second search | [BlockStream](/portfolio/05-blockstream/) |
| **Database migration** | Oracle to EDB (PostgreSQL), rewriting SQL to ANSI without changing what the securities queries mean | [Investment Securities](/portfolio/07-investment-securities/) |
| **Throughput** | Spark tuning for a platform with 10M+ users | [ABACUS](/portfolio/02-abacus/) |
| **From requirements to data** | Business rules translated into SQL; dashboards so operators could see what the platform was doing | [Investment Securities](/portfolio/07-investment-securities/) · [ABACUS](/portfolio/02-abacus/) |

### How I Would Work at Staff Level

1. **Decisions get written down.** A short design doc or ADR records what we considered, what it costs in latency, money, and on-call load, and what would make us change our minds later.
2. **Build the road once.** New feeds should arrive through a shared ingestion template that already handles duplicates, replays, backfills, and quality checks. Adding a source should feel like filling in a form.
3. **Every important dataset has an owner.** That owner publishes how fresh, complete, and accurate the data will be. People downstream can plan around it, and the owner knows what they have promised.
4. **Changes are rehearsed.** Schemas are versioned. Migrations run old and new side by side until the numbers agree, and consumers get notice before anything is removed. The Oracle migration taught me why this matters.
5. **Operations are part of the design.** Runbooks and DR drills exist before they are needed. Alerts fire on stale or missing data as well as failed jobs, and every incident review ends with a change to the platform itself.
6. **Controls come early.** Access rules, audit trails, retention, and lineage are designed in from day one. Auditors and regulators need to follow the data too.
7. **Growth is planned.** Partitioning, retention tiers, and compute are sized against how many instruments, venues, and years of history the platform will hold next year.
8. **Raise the floor.** Design reviews, written standards, and pairing spread knowledge, so the hard problems do not all queue up behind one person.

### The Platform I Would Aim For

This is a reference design rather than something I have shipped. Each layer can be replayed from the one before, and the checks apply to the whole platform, not to each pipeline separately.

| Layer | Responsibility | Controls |
|:---|:---|:---|
| **Sources** | Exchange and vendor feeds · reference data (instruments, calendars, corporate actions) · internal trades and positions | Source contracts · onboarding checklist |
| **Ingest** | Kafka with idempotent producers and replay | Deduplication keys · handling of late and out-of-order events |
| **Raw store** | An append-only copy of everything received | Retention policy · replay from any point |
| **Normalize** | Symbol mapping · price adjustments · trading calendars and time zones | Reference data checks · quality gates |
| **Curated store** | Point-in-time (bitemporal) datasets on ClickHouse / PostgreSQL | Reconciliation with the source of record · lineage |
| **Serve** | SQL and APIs · search · trading, risk, research, and AI users | SLOs · access control · audit trail |

---

## What I Have Learned About Financial Data

- **Time has more than one meaning.** When something happened, when we received it, and when we knew it are three different timestamps. Keeping them apart, and keeping old revisions, is what lets a backtest or a restated report be honest.
- **Most market data bugs start in reference data.** Identifiers, symbol mappings, corporate actions, calendars, and time zones deserve as much care as the prices themselves.
- **A record should carry its own context.** Currency, units, decimal precision, and status travel with it. When something is corrected, the correction is visible, and history is never quietly rewritten.
- **Reruns should be uneventful.** With deduplication keys, handling for late events, and deterministic logic, a rerun or a backfill produces the same result instead of a new incident.
- **Reconcile first, publish second.** A quick comparison with the source of record catches most problems before a trader or finance team ever sees them.
- **A migration should not change any answer.** I start from the business rules the queries encode, and only then deal with syntax, access patterns, and speed.
- **Numbers need a trail.** Anyone looking at a risk figure should be able to follow it back to the inputs and code that produced it.
- **Pick storage for how it will be read.** Columnar for long scans over time, key-value for hot lookups, and search indexes for exploration, chosen on latency, throughput, and cost.

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

The [**Projects**](/portfolio/) page has the details behind each system, and the [**CV**](/cv/) has the full timeline.

If you are building a market or financial data platform and need a senior engineer who wants to grow into Staff, I would like to hear about it.

Contact: [augustino0890@gmail.com](mailto:augustino0890@gmail.com) · [LinkedIn](https://www.linkedin.com/in/augustine2015/) · [GitHub](https://github.com/augustine0890) · [Twitter](https://twitter.com/augusti61988772)
