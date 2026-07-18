# VectorShift Frontend Technical Assessment

## Overview

This project is my submission for the VectorShift Frontend Technical Assessment.

## Features

- Reusable BaseNode abstraction
- Input, Output, LLM, and Text nodes
- Additional API, Database, Email, PDF, and Prompt nodes
- Dynamic Text node with variable detection (`{{variable}}`)
- Auto-resizing text area
- FastAPI backend for pipeline analysis
- Pipeline validation (Node Count, Edge Count, DAG Check)
- Modern responsive UI

## Project Structure

```
frontend_technical_assessment/
├── frontend/
├── backend/
└── README.md
```

## Frontend

```bash
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

## Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Runs on:

```
http://127.0.0.1:8000
```
