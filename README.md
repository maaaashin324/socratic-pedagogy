# GiveLearnersHint

A Socratic AI guide for coding bootcamp students. Instead of giving answers, it guides students through structured self-discovery — asking questions and pointing at concepts until they reach the breakthrough themselves.

---

## How it works

1. Student describes what they're stuck on
2. Fills in a structured 3-field form (expected / actual / what they tried)
3. Receives a Socratic question or concept pointer — never code, never a direct answer
4. Continues the dialogue until breakthrough or chooses to exit with a session summary to bring to office hours

---

## Tech stack

| Layer | Technology |
|---|---|
| Backend | Python 3.14, FastAPI, uvicorn |
| Frontend | React 19, Vite, Tailwind CSS v4 |
| AI | Anthropic API (claude-sonnet-4-6) |

---

## Prerequisites

- Python 3.14
- Node.js 18+
- An [Anthropic API key](https://console.anthropic.com/)

---

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/maaaashin324/socratic-pedagogy.git
cd socratic-pedagogy
```

### 2. Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Copy the env template and add your API key:

```bash
cp .env.example .env
# open .env and set ANTHROPIC_API_KEY=your_key_here
```

### 3. Frontend

```bash
cd frontend
npm install
```

---

## Running locally

Open two terminals.

**Terminal 1 — backend:**

```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload --port 8000
```

**Terminal 2 — frontend:**

```bash
cd frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

The frontend proxies `/api` requests to the backend at `localhost:8000`. CORS is pre-configured for the Vite dev server origin.

---

## Project structure

```
socratic-pedagogy/
├── backend/
│   ├── app/
│   │   └── main.py          # FastAPI app, CORS, routes
│   ├── .env.example         # env template — copy to .env
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # root component / screen state
│   │   └── index.css        # Tailwind entry
│   └── vite.config.js       # Tailwind plugin + /api proxy
└── docs/
    └── GiveLearnersHint_Product_Design.md   # full product design doc
```

---

## Design principles

- **Lean / XP** — implement only what the current issue requires; no speculative features
- **No accounts** — zero setup friction for the student
- **No answers** — the AI is constrained by a hard system prompt: no code output, no direct solutions
- **Local-first** — MVP runs entirely on localhost; no cloud deployment required

---

## Product documentation

Full user personas, customer journey map, user flow, and user story mapping are in [`docs/GiveLearnersHint_Product_Design.md`](docs/GiveLearnersHint_Product_Design.md).
