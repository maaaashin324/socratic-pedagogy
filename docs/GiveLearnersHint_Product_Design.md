# GiveLearnersHint
## Product Design Document

**Product:** GiveLearnersHint — A Socratic AI guide for coding bootcamp students
**Bootcamp context:** Code Chrysalis, Tokyo
**Author:** Masataka Shintoku
**Document scope:** User Persona · Customer Journey Map · Problem Statement · Goal Statement · User Flow · User Story Mapping

---

## Table of Contents

1. [User Persona](#1-user-persona)
2. [Customer Journey Map](#2-customer-journey-map)
3. [Problem Statement](#3-problem-statement)
4. [Goal Statement](#4-goal-statement)
5. [User Flow](#5-user-flow)
6. [User Story Mapping](#6-user-story-mapping)
7. [Ideas Backlog](#7-ideas-backlog)

---

## 1. User Persona

### Kenji Nakamura

> *"I know I'm not supposed to just Google the answer — but it's 11pm, I'm completely stuck, and office hours are over. What am I supposed to do?"*

| Attribute | Details |
|---|---|
| **Name** | Kenji Nakamura |
| **Age** | 28 |
| **Location** | Tokyo, Japan |
| **Background** | Former marketing coordinator at a mid-size firm |
| **Education** | B.A. in Communications, Meiji University |
| **Bootcamp** | Code Chrysalis — Full-Stack JavaScript Track |
| **Experience** | 3 months of self-taught JavaScript before enrollment |
| **Languages** | Japanese (native), English (business-level) |

### Bio

Kenji spent five years in marketing, managing campaigns and spreadsheets, but always felt closest to the part of his job that involved building things — automating reports, tinkering with website copy, helping the dev team spec out a landing page. After an honest conversation with a developer friend, he decided to make the leap: quit his job, save up three months of runway, and enroll in Code Chrysalis.

The curriculum moves fast. Instructors don't give answers — they ask questions back, redirect, point at documentation. Kenji finds this intellectually stimulating during the day, but at 11pm, when he's been staring at the same bug for two hours, it feels like a wall. He understands why Code Chrysalis runs the way it does. He doesn't want someone to hand him the answer. He just needs help *getting unstuck* — a nudge in the right direction, not a shortcut to the finish line.

### Goals

**Primary:** Become a hireable full-stack software engineer within 6 months of graduating bootcamp.

**Secondary:** Develop genuine problem-solving skills; build enough self-confidence to debug independently on the job; produce a portfolio that demonstrates autonomous thinking, not just execution.

**Learning:** Understand *why* code works, not just *what* code works; get better at reading error messages and formulating precise questions; build a personal debugging process he can rely on.

### Frustrations & Pain Points

**1. Blocked with nowhere to turn** — Kenji often hits a wall outside office hours. Instructors are unavailable, and classmates are equally stuck or asleep. The only option that feels within reach — asking an AI for the answer — is exactly what undermines the learning the bootcamp is designed to produce.

**2. Doesn't know what he doesn't know** — When stuck, Kenji often can't even name the problem precisely. He knows *something* is wrong but doesn't have the vocabulary or mental model to articulate it. This makes even Googling ineffective.

**3. Fear of wasting instructor time** — Office hours are precious and limited. Kenji is reluctant to bring a poorly-formed question because he worries about looking unprepared or taking up time other students need.

**4. Guilt around AI use** — He has used ChatGPT to get unstuck. It worked — briefly. But he immediately felt like he'd cheated, and worse, he couldn't reproduce the reasoning later. The answer didn't stick because he hadn't earned it.

**5. Progress anxiety** — The cohort moves together. When classmates seem ahead, Kenji spirals. He starts prioritizing speed over understanding, which deepens the problem.

### Behaviors & Habits

- Writes in notebooks — keeps a paper log of bugs, error messages, and what he tried
- Talks through problems out loud — sometimes records voice memos to externalize thinking
- Googles first, reads second — lands on Stack Overflow and skims for the fix without reading the full thread
- Avoids asking for help until he's already spent 30–60 minutes stuck
- Uses AI late at night when the guilt threshold is lower than the frustration threshold

### Technology Comfort Level

| Area | Level |
|---|---|
| JavaScript / Node.js | Beginner–Intermediate |
| HTML / CSS | Intermediate |
| Git / Terminal | Beginner |
| Reading Docs | Developing |
| AI Tools (ChatGPT etc.) | Comfortable |
| Debugging Tools | Beginner |

### Relationship with AI

Kenji is not opposed to using AI — he uses it daily for things like writing emails or summarizing articles. But in his bootcamp context, AI has become a source of tension. It's *too* helpful. What he actually needs is an AI that behaves more like the instructors at Code Chrysalis: one that helps him figure out what question to ask, reflects his thinking back at him, and guides him toward discovery rather than handing him a solution.

### Design Implications

| Kenji's Need | Design Direction |
|---|---|
| Can't name the problem | Guide him through a structured question-formulation flow |
| Reaches for AI answers at night | Be the "safe" alternative — always available, never gives answers |
| Avoids asking for help | Lower the activation energy; make asking feel low-stakes |
| Guilt around shortcuts | Reinforce that the tool is pedagogy-aligned, not a cheat |
| Progress anxiety | Surface evidence of his own thinking — show him what he *does* know |

---

## 2. Customer Journey Map

**Scenario:** Kenji encounters a blocker during solo assignment work on a weekday evening, after instructor office hours have ended.

**Emotional arc:** Starts cautiously optimistic → dips through frustration → hits a breaking point → recovers through guided self-discovery.

---

### Stage 1 — Starting the Assignment
**Phase:** Daytime / Early afternoon

Kenji reads the assignment prompt, plans his approach, and starts writing code with moderate confidence. Assignment instructions are intentionally vague to promote exploration — initially disorienting, but still productive.

**Emotion:** 😊 Cautiously optimistic

---

### Stage 2 — Early Friction
**Phase:** Mid-afternoon

Kenji encounters an error or unexpected behavior. He re-reads the error message (partially understands it), tries a few fixes from memory or Stack Overflow. He can find the solution but not understand it — he sometimes applies a fix without understanding why it works.

**Emotion:** 🤔 Mildly frustrated but engaged

**Opportunity:** A tool that helps him read error messages more carefully and articulate: "What did I expect? What actually happened?"

---

### Stage 3 — Seeking Help During Office Hours
**Phase:** ~3:00 PM

Kenji joins office hours and tries to describe the problem to an instructor. He receives a question back, not an answer, and is redirected to documentation or a related concept. He arrived without a well-formed question, which limits how useful the session is. Office hours end. The redirect is not always enough to break through the blocker.

**Emotion:** 😅 Anxious and slightly embarrassed

**Opportunity:** Help Kenji formulate a precise question *before* office hours so he makes better use of the time.

---

### Stage 4 — After Office Hours / Early Evening
**Phase:** ~4:00–8:00 PM

Kenji returns to solo work, applies the instructor's hint, and continues reading docs. Slack help from classmates is inconsistent — some give full solutions without realizing it, others are too busy. Documentation is hard to navigate when you don't know what you're looking for. Progress anxiety builds.

**Emotion:** 😐 Determined but tiring

**Opportunity:** A tool available in this window that provides Socratic guidance and helps him identify *which* documentation page to read and *what* to look for in it.

---

### Stage 5 — The Breaking Point ⭐ Critical Moment
**Phase:** ~9:00–11:00 PM

Kenji has been stuck for 2–3+ hours. He has run out of approaches to try. He opens ChatGPT, pastes the error, receives a complete working solution, and copy-pastes it. It works.

> *"I just need to get past this tonight. I'll go back and understand it tomorrow."* *(He won't.)*

No alternative exists that is simultaneously: available at 11pm ✓, low-friction to use ✓, and aligned with the bootcamp's pedagogy ✗.

**Emotion:** 😩 Desperate → 😌 Brief relief → 😔 Guilt

**This is where GiveLearnersHint intervenes.**

---

### Stage 6 — Guided Breakthrough (Future State)
**Phase:** ~10:00–11:00 PM

Kenji opens GiveLearnersHint instead of ChatGPT. He fills out the structured form, receives a Socratic question or doc pointer, reads the docs with a specific thing to look for, and finds the answer himself.

> *"Oh. Oh! That's why it wasn't working. I was assuming the function was waiting for the response before moving on."*

**Emotion:** 😤 Frustrated → 🤔 Focused → 💡 Realization → 😊 Proud

---

### Stage 7 — Reflection & Next Day
**Phase:** Morning after

Kenji reviews the code he wrote last night and can explain what it does and why. He feels more prepared for office hours. Genuine understanding builds a different kind of momentum than copied answers.

**Emotion:** 😊 Confident and motivated

---

### Summary: Moments That Matter

| Stage | Emotional State | Current Behavior | GiveLearnersHint Intervention |
|---|---|---|---|
| 2 — Early Friction | Mildly frustrated | Skims Stack Overflow | Help read errors / articulate the gap |
| 3 — Office Hours | Anxious | Brings vague question | Pre-session question formulation |
| 4 — After Hours | Tiring | Reads docs without direction | Directed doc navigation |
| 5 — Breaking Point | Desperate → Guilty | Asks AI for the answer | **Replace with Socratic guidance** |
| 6 — Breakthrough | Proud | N/A (current: copy-paste) | Guided reasoning → self-discovery |

### Key Insight

> The problem is not that Kenji lacks willpower. It's that **no pedagogically aligned support exists outside instructor office hours.** The gap is structural, not motivational. GiveLearnersHint fills that gap.

---

## 3. Problem Statement

**Kenji Nakamura** is a **career-changing bootcamp student who is committed to building genuine problem-solving skills but is under intense time and emotional pressure** who needs **a way to get unstuck outside of instructor office hours without receiving direct answers** because **no pedagogically aligned support exists in that window — leaving him with only general-purpose AI tools that hand him solutions, which relieves his frustration in the moment but erodes the autonomous thinking the bootcamp is designed to build.**

---

## 4. Goal Statement

**GiveLearnersHint will let users work through blockers by asking structured questions and receiving Socratic guidance — never direct answers — which will affect bootcamp students like Kenji by replacing the habit of reaching for AI shortcuts with a discipline of guided self-discovery, ultimately building the autonomous problem-solving confidence they need to perform as engineers on the job. We will measure effectiveness by a reduction in direct-answer AI usage during study hours, an increase in students' ability to articulate well-formed questions in instructor office hours, and self-reported improvement in debugging confidence by the end of the cohort.**

| Element | Content |
|---|---|
| **Product** | GiveLearnersHint |
| **Action users can perform** | Work through blockers via structured question-formulation and Socratic guidance |
| **Target users** | Bootcamp students (e.g., Code Chrysalis) who hit blockers outside office hours |
| **Expected positive outcome** | Replace the shortcut habit with guided self-discovery; build real, transferable problem-solving skills |
| **How we measure success** | ↓ Direct-answer AI use · ↑ Quality of questions in office hours · ↑ Self-reported debugging confidence |

---

## 5. User Flow

### MVP Scope

The MVP validates one core assumption:
> **When Kenji is blocked and no instructor is available, will he engage with a Socratic guided process long enough to reach a breakthrough on his own?**

No accounts, no history, no topic analysis.

---

### Flow Diagram

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
│  [ User types reply ]          [ I figured it out ]            │
│  [ Send ]                                                       │
└──────────────┬────────────────────────────────┬────────────────┘
               │                                │
               ▼                                ▼
┌──────────────────────────┐      ┌─────────────────────────────┐
│   CONTINUE DIALOGUE      │      │      BREAKTHROUGH SCREEN     │
│                          │      │                              │
│  AI asks another         │      │  "Nice work figuring that   │
│  Socratic question       │      │   out. The struggle is the  │
│  or refines the pointer  │      │   learning."                │
│                          │      │                              │
│  Loop continues until    │      │  [ Start a new session ]    │
│  breakthrough or exit    │      └─────────────────────────────┘
└──────────┬───────────────┘
           │ User exits mid-session
           ▼
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

### Step-by-Step Narrative

**Step 1 — Entry:** Kenji opens the app and sees a single text box: *"What are you stuck on?"* No login, no setup, no friction. He types a rough description — it doesn't need to be precise yet. Design principle: match the low friction of ChatGPT.

**Step 2 — Structured Question-Formulation (1 screen, 3 fields):** A single screen with all three fields visible at once. Showing them together treats this as a familiar form pattern — less like being interrogated, more like filling out a support ticket. Sequential prompts would require three round-trips before any guidance arrives. By the time Kenji fills all three fields, he has already done significant cognitive work that often narrows the problem on its own.

**Step 3 — AI Processing:** The app identifies the most likely conceptual gap. Hard rule baked into the system prompt: *"You are a Socratic tutor. Your only tools are questions and concept pointers. You must never write code. You must never give a direct answer. If you are tempted to give an answer, ask a question instead."*

**Step 4 — Socratic Response:** Kenji receives either (A) a clarifying question that probes his understanding of a specific concept, or (B) a concept name plus a documentation pointer with a specific thing to look for. The dialogue continues. Each turn moves Kenji one step closer to articulating the answer himself.

**Step 5a — Breakthrough:** Kenji clicks *I figured it out*. A closing screen acknowledges the work with a brief affirming message. No score, no grade — just acknowledgment.

**Step 5b — Exit Without Breakthrough:** The exit screen surfaces a structured summary: his original problem, what he tried, and the last Socratic question the AI posed. Label: "Bring this to office hours tomorrow." This turns a failed session into direct preparation for the next day — instead of arriving with a vague frustration, Kenji walks in with a documented problem and a specific question.

---

### Decision Rules (System Constraints)

| Rule | Rationale |
|---|---|
| AI never outputs code | Code is an answer. Even partial code. |
| AI never says "the problem is X" | Naming the problem is giving the answer. |
| AI always ends its turn with a question or a pointer | Keeps the student active, not passive |
| Exit screen never offers a hint or answer | The exit path must not become a loophole |
| Max 1 concept per AI response | Avoids overwhelming Kenji with too much direction at once |

---

### What This MVP Validates

| Hypothesis | How the flow tests it |
|---|---|
| Kenji will engage with structured prompts even when frustrated | The 3-field form is required before any response |
| Socratic dialogue is tolerable at 11pm | The dialogue loop tests whether he stays or abandons |
| Not getting an answer is acceptable if the process feels productive | The closing and exit screens both reinforce this |
| The tool can be used with zero setup | No login, no account — just open and start |

---

## 6. User Story Mapping

Framework: Jeff Patton's User Story Mapping
Activities run left → right (the backbone). Stories are sliced into releases vertically.

---

### Visual Overview

```
ACTIVITIES  │ 1. Access    │ 2. Describe   │ 3. Formulate  │ 4. Guidance   │ 5. Dialogue   │ 6. End
────────────┼──────────────┼───────────────┼───────────────┼───────────────┼───────────────┼────────────────
TASKS       │ Open app     │ Type blocker  │ 3 questions   │ Read response │ Reply to AI   │ Signal win
            │              │ Submit        │ (1 screen)    │               │ Continue loop │ Exit + summary
────────────┼──────────────┼───────────────┼───────────────┼───────────────┼───────────────┼────────────────
MVP         │ No login     │ Free-text     │ All 3 at once │ Q or pointer  │ Dialogue loop │ Closing screen
            │ Instant open │ Single submit │ Required      │ Never code    │ "I got it"    │ Session summary
            │              │               │               │ Never answer  │ btn always    │ on exit
────────────┼──────────────┼───────────────┼───────────────┼───────────────┼───────────────┼────────────────
Phase 2     │              │ Rubber duck   │               │               │               │ Breakthrough
            │              │ gate          │               │               │               │ recap summary
────────────┼──────────────┼───────────────┼───────────────┼───────────────┼───────────────┼────────────────
Phase 3     │ User account │               │               │ Tailored to   │               │ Session history
            │ (login)      │               │               │ struggle      │               │ Topic patterns
            │              │               │               │ patterns      │               │
```

---

### MVP User Stories (Release 1)

**As Kenji, I want to open the tool in my browser with no login or setup required,**
so that I can start immediately when I'm stuck and frustrated — without adding any friction to the process.
*Acceptance criteria: No account creation required · No onboarding on first visit · Single URL, works on desktop browser*

**As Kenji, I want to describe my blocker in plain, unstructured language,**
so that I don't have to know the right technical vocabulary before I can ask for help.
*Acceptance criteria: Single large text input on landing screen · No character minimum or maximum · Placeholder text shows a natural example*

**As Kenji, I want to see all three structured questions at once on a single form,**
so that I can fill them in at my own pace without feeling interrogated by sequential prompts.
*Acceptance criteria: All three fields visible simultaneously · Fields labeled clearly · All three required before submission · Single "Get guidance" button*

**As Kenji, I want to receive a response that asks me a question or points me to a concept — never code or a direct answer —**
so that I'm pushed to think rather than given a shortcut that I'll copy without understanding.
*Acceptance criteria: Response is always a clarifying question or concept + doc pointer · AI never outputs code · AI never states "the problem is X" · Max one concept per response*

**As Kenji, I want to respond to the AI's question and keep the dialogue going,**
so that I can keep narrowing down the problem turn by turn until I reach the answer myself.
*Acceptance criteria: Text input and send button below each AI response · No turn limit · "I figured it out" button always visible*

**As Kenji, I want to signal when I've understood the problem and found the answer myself,**
so that the session ends with acknowledgment of the work I did — not just a blank screen.
*Acceptance criteria: Closing screen shows a short affirming message · No score or grade · "Start a new session" button*

**As Kenji, I want to see a structured summary of my session when I give up or decide to sleep on it,**
so that I can bring a well-formed question to my instructor at office hours the next day instead of arriving empty-handed.
*Acceptance criteria: Exit screen shows original problem description, what was tried, and last Socratic question the AI posed · Label reads "Bring this to office hours tomorrow" · No answer given on exit screen*

---

### Phase 2 User Stories

**As Kenji, I want to be prompted to summarize my problem in one sentence before the AI responds,**
so that I'm forced to externalize my thinking in the simplest possible terms — which sometimes resolves the blocker on its own.

**As Kenji, I want to see a short recap of the reasoning path I followed when I reach a breakthrough,**
so that I have evidence of my own thinking process and can review it later.

---

### Phase 3 User Stories

**As Kenji, I want the AI to recognize concepts I've struggled with across multiple sessions,**
so that its questions and pointers are calibrated to my actual knowledge gaps — not a generic learner's.

**As Kenji, I want to see a log of my past sessions and the topics that came up repeatedly,**
so that I can recognize the concepts I need to study more deeply outside of assignment work.

---

### Release Summary

| Release | Scope | Core Hypothesis |
|---|---|---|
| **MVP** | No-login app: describe → 3-field form → Socratic dialogue → breakthrough or session summary exit | Will Kenji engage with a Socratic process instead of reaching for ChatGPT? |
| **Phase 2** | Rubber duck gate + end-of-session summary on breakthrough path | Does structured self-articulation reduce time-to-breakthrough? Does post-session reflection reinforce retention? |
| **Phase 3** | User accounts + session history + topic pattern analysis + tailored guidance | Does personalization based on struggle history meaningfully improve guidance quality? |

---

## 7. Ideas Backlog

Features deferred from MVP — validated in later phases.

**Rubber Duck Gate (Phase 2):** Before the AI responds, prompt the user to summarize their problem in one sentence. Rubber-ducking resolves roughly 30% of blockers on its own. Validates whether structured articulation alone reduces the need for AI guidance before investing in a more complex Socratic loop.

**End-of-Session Summary on Breakthrough (Phase 2):** At the end of a successful session, generate a one-paragraph recap of what the user worked through and what concept they discovered. No persistent memory — generated from the session transcript. Validates whether users find post-session reflection valuable enough to read and reference before investing in a full history system.

---

*GiveLearnersHint Product Design Document*
*Persona: Kenji Nakamura | Bootcamp: Code Chrysalis, Tokyo*
*All deliverables created for portfolio and Claude Code development use.*
