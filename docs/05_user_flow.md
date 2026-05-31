# User Flow

## Product: GiveLearnersHint — MVP
### Persona: Kenji Nakamura | Scope: Core Socratic guidance loop

---

## MVP Scope

The MVP validates one core assumption:
> **When Kenji is blocked and no instructor is available, will he engage with a Socratic guided process long enough to reach a breakthrough on his own?**

The flow covers exactly that — no accounts, no history, no topic analysis.

---

## Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER OPENS APP                          │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     LANDING / ENTRY SCREEN                      │
│                                                                 │
│  "What are you stuck on?"                                       │
│  [ Free-text input — describe the problem in your own words ]  │
│                                                                 │
│  [ Submit ]                                                     │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│               STRUCTURED QUESTION-FORMULATION (1 screen)        │
│                                                                 │
│  "Help us understand the problem:"                              │
│                                                                 │
│  1. What did you expect to happen?                              │
│     [ Free-text input ]                                         │
│                                                                 │
│  2. What actually happened? (paste your error message if any)   │
│     [ Free-text input ]                                         │
│                                                                 │
│  3. What have you already tried?                                │
│     [ Free-text input ]                                         │
│                                                                 │
│  [ Get guidance ]                                               │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     AI PROCESSES INPUT                          │
│                                                                 │
│  Internally:                                                    │
│  - Identifies the likely conceptual gap from user's answers     │
│  - Selects a Socratic question or a concept/doc to point at     │
│  - Hard rule: never output code, never give a direct answer     │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SOCRATIC RESPONSE SCREEN                     │
│                                                                 │
│  The AI responds with ONE of:                                   │
│    A) A clarifying question                                     │
│       e.g. "What do you think async/await is doing to the       │
│            function's return value at that point?"              │
│                                                                 │
│    B) A concept + doc pointer                                   │
│       e.g. "It sounds like this might be about how Promises     │
│            resolve. Have you read the MDN page on Promises?     │
│            Look specifically at how .then() chains work."       │
│                                                                 │
│  [ User types reply ]                                           │
│  [ Send ]                                                       │
└──────────────┬────────────────────────────────┬────────────────┘
               │                                │
               ▼                                ▼
┌──────────────────────────┐      ┌─────────────────────────────┐
│   CONTINUE DIALOGUE      │      │    USER SIGNALS BREAKTHROUGH │
│                          │      │                              │
│  AI asks another         │      │  User types: "I got it!"    │
│  Socratic question       │      │  or clicks [ I figured it   │
│  or refines the pointer  │      │   out ]                     │
│                          │      │                             │
│  Loop continues until    │      └──────────────┬──────────────┘
│  breakthrough or user    │                     │
│  exits                   │                     ▼
│                          │      ┌─────────────────────────────┐
└──────────────────────────┘      │       CLOSING SCREEN        │
                                  │                              │
               ┌──────────────────│  "Nice work figuring that   │
               │   User exits     │   out. The struggle is the  │
               │   mid-session    │   learning."                │
               │   (gives up)     │                              │
               │                  │  [ Start a new session ]    │
               ▼                  └─────────────────────────────┘
┌─────────────────────────────────────────────────────────────────┐
│                     EXIT / GIVE UP SCREEN                       │
│                                                                 │
│  "It's ok to step away and sleep on it.                         │
│   Your brain keeps working even when you stop."                 │
│                                                                 │
│  No answer is given. No answer is ever given.                   │
│                                                                 │
│  ─────────────────────────────────────────────                  │
│  Here's what you worked through tonight:                        │
│                                                                 │
│  Your problem:   [Kenji's original description]                 │
│  You tried:      [Summary from Step 3 of formulation]          │
│  The hint:       [Last Socratic question the AI asked]          │
│                                                                 │
│  → Bring this to office hours tomorrow.                         │
│    Your instructor will know exactly where to start.            │
│  ─────────────────────────────────────────────                  │
│                                                                 │
│  [ End session ]                                                │
└─────────────────────────────────────────────────────────────────┘
```

---

## Step-by-Step Narrative

### Step 1 — Entry
Kenji opens the app. He sees a single text box: *"What are you stuck on?"* No login, no setup, no friction. He types a rough description of his problem — it doesn't need to be precise yet.

**Design principle:** Match the low friction of ChatGPT. If entry is harder than the alternative, he won't use it.

---

### Step 2 — Structured Question-Formulation (1 screen, 3 fields)
After submitting his initial description, Kenji sees a single screen with three text fields presented together:

1. **"What did you expect to happen?"** — Forces him to name his mental model
2. **"What actually happened? (paste your error message if any)"** — Forces him to read the error precisely, not paraphrase it
3. **"What have you already tried?"** — Prevents the AI from sending him back to things he's already done, and helps him see his own effort

All three are visible at once. Kenji fills them in at his own pace and submits with one click.

**Design principle:** Showing all three together treats this as a familiar form pattern — less like being interrogated, more like filling out a support ticket. Sequential prompts would require three round-trips before any guidance arrives, which adds friction and can feel like a test. One screen respects his time and his state of mind at 11pm.

**Side effect:** By the time Kenji finishes all three fields, he has already done significant cognitive work. The act of writing these answers often narrows the problem significantly — sometimes revealing the gap to him before the AI even responds.

---

### Step 3 — AI Processing
The app takes Kenji's three answers and identifies the most likely conceptual gap. The AI follows a strict constraint: it must respond with either a question or a concept+doc pointer. It may never output working code or a direct solution.

**Hard rule baked into the system prompt:**
> "You are a Socratic tutor. Your only tools are questions and concept pointers. You must never write code. You must never give a direct answer. If you are tempted to give an answer, ask a question instead."

---

### Step 4 — Socratic Response
Kenji receives a response that is either:
- **A clarifying question** — something that probes his understanding of a specific concept
- **A concept + doc pointer** — naming the underlying idea he's missing and pointing to specific documentation (with a note on what to look for)

He types his reply. The dialogue continues.

**Design principle:** Each turn should move Kenji one step closer to articulating the answer himself. The AI is not building toward giving him a solution — it's building toward him no longer needing one.

---

### Step 5a — Breakthrough
Kenji types "I got it!" or clicks *I figured it out*. The app shows a closing screen with a brief affirming message. No grade, no score — just acknowledgment that the struggle was real and the win was his.

---

### Step 5b — Exit Without Breakthrough
Kenji gives up or decides to sleep on it. The exit screen does two things:

First, it acknowledges that stopping is ok — encouraging rest, and explicitly confirming that no answer will be given even now. The exit path must never become a backdoor.

Second, and more importantly, it surfaces a structured summary of the session:
- **His original problem description** — so he doesn't forget what he was working on
- **What he tried** — drawn from his Step 2 answer
- **The last Socratic question the AI asked** — the best thread to pull on tomorrow

This turns a "failed" session into direct preparation for the next day's office hours. Instead of arriving with a vague frustration, Kenji walks in with a documented problem, a list of what he's attempted, and a specific question — exactly what makes office hours productive. The exit screen doesn't just soften the blow of not getting an answer; it makes the session valuable regardless of whether a breakthrough happened.

---

## Decision Rules (System Constraints)

| Rule | Rationale |
|---|---|
| AI never outputs code | Code is an answer. Even partial code. |
| AI never says "the problem is X" | Naming the problem is giving the answer. |
| AI always ends its turn with a question or a pointer | Keeps the student active, not passive |
| Exit screen never offers a hint or answer | The exit path must not become a loophole |
| Max 1 concept per AI response | Avoids overwhelming Kenji with too much direction at once |

---

## What This MVP Validates

| Hypothesis | How the flow tests it |
|---|---|
| Kenji will engage with structured prompts even when frustrated | Step 2 requires him to complete 3 fields before getting any response |
| Socratic dialogue is tolerable at 11pm | Steps 3–4 test whether he stays in the loop or abandons |
| Not getting an answer is acceptable if the process feels productive | The closing screen and exit screen both reinforce this |
| The tool can be used with zero setup | No login, no account — just open and start |

---

*User flow created for the GiveLearnersHint product design project.*
*MVP scope: Structured problem articulation → Socratic AI response loop*
*Persona: Kenji Nakamura | Bootcamp: Code Chrysalis*
