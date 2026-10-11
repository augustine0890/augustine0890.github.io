---
title: "BlockStream — Real-Time Transaction Data Pipelines"
excerpt: "Ethereum and Polygon transaction ingestion, Kafka event distribution, PostgreSQL storage, and OpenSearch / Algolia indexing."
collection: portfolio
order: 3
---

**Company:** SupperTree, South Korea · **Role:** Software Engineer

A scalable system for real-time collection and processing of **Ethereum and Polygon transaction data**, connecting ingestion, event distribution, storage, and search through a publish–subscribe architecture.

### Key Contributions

- Architected real-time collection of on-chain transaction data from **Ethereum and Polygon**.
- Engineered the delivery path from **on-chain collection → Kafka → PostgreSQL → OpenSearch / Algolia**, supporting sub-second search.
- Managed metadata enrichment, persistent storage, and indexing across the workflow to support data integrity and scalable retrieval.

### Engineering Scope

I owned this pipeline from the first collected transaction to the search index. It is close to a market data feed in spirit: a steady flow of time-ordered events, where missing one is a bug and serving them slowly is a bug too.

### Tech Stack

`Python` · `Golang` · `Apache Kafka` · `PostgreSQL` · `OpenSearch` · `Algolia` · `Oracle` · `Kinesis`
