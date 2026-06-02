---
title: "DocPilot — Local RAG Tool"
description: "Local-first RAG CLI for private document search using LangChain and ChromaDB."
pubDate: "Jun 02 2026"
tags: ["tools","python"]
---
DocPilot is a local-first retrieval-augmented generation (RAG) tool designed to let users query private documents without sending data to external cloud APIs. It ingests PDFs, CSVs, and crawled web content; builds embeddings with mxbai-embed-large via Ollama; stores vectors in ChromaDB; and provides a fast CLI for natural-language queries.

Key features:
- Local embeddings via Ollama
- ChromaDB vector store with deduplication
- Configurable retrieval chains using LangChain
- Support for multiple LLMs and offline-first workflows

Repository: https://github.com/ASWIN-ASHOK-dev/docpilot
