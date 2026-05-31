# User Story Mapping

## Product: GiveLearnersHint
### Persona: Kenji Nakamura | Framework: Jeff Patton's User Story Mapping

---

## How to Read This Map

- **Row 1 — Activities:** The high-level steps Kenji takes in sequence (left → right). This is the "backbone."
- **Row 2 — Tasks:** The specific actions within each activity.
- **Rows below — User Stories:** Sliced vertically by release priority. Stories closer to the top ship first.

The horizontal cuts define releases:

```
──────────────────────── MVP (Release 1) ────────────────────────
──────────────────────── Phase 2 ────────────────────────────────
──────────────────────── Phase 3 ────────────────────────────────
```

---

## The Map

### Activities (Backbone)

| 1. Access the Tool | 2. Describe the Blocker | 3. Formulate the Problem | 4. Receive Socratic Guidance | 5. Continue the Dialogue | 6. End the Session |
|---|---|---|---|---|---|

---

### Tasks

| 1. Access the Tool | 2. Describe the Blocker | 3. Formulate the Problem | 4. Receive Socratic Guidance | 5. Continue the Dialogue | 6. End the Session |
|---|---|---|---|---|---|
| Open the app | Type a free-text description of the blocker | Answer "What did you expect?" | Read the AI's Socratic response | Type a reply to the AI | Signal a breakthrough |
| — | Submit the description | Answer "What actually happened?" (paste error) | — | Read the next AI response | Exit without a breakthrough |
| — | — | Answer "What have you already tried?" | — | — | — |
| — | — | Submit all 3 answers at once | — | — | — |

---

## User Stories by Release

---

### ── MVP (Release 1) ── Validate the core: will Kenji engage with Socratic guidance at 11pm?

#### Activity 1 — Access the Tool

**Task: Open the app**
> As Kenji, I want to open the tool in my browser with no login or setup required,
> so that I can start immediately when I'm stuck and frustrated — without adding any friction to the process.

*Acceptance criteria:*
- No account creation required
- No onboarding screen on first visit
- Single URL, works on desktop browser

---

#### Activity 2 — Describe the Blocker

**Task: Type a free-text description**
> As Kenji, I want to describe my blocker in plain, unstructured language,
> so that I don't have to know the right technical vocabulary before I can ask for help.

*Acceptance criteria:*
- Single large text input on the landing screen
- No character minimum or maximum enforced
- Placeholder text shows a natural example (e.g. "My function isn't returning what I expect and I don't understand why")

**Task: Submit the description**
> As Kenji, I want to submit my description with one click and immediately move to the next step,
> so that the flow feels fast and low-friction compared to just opening ChatGPT.

*Acceptance criteria:*
- Single "Continue" or "Get help" button
- No loading delay longer than 1 second before the next screen appears

---

#### Activity 3 — Formulate the Problem

**Task: Answer all 3 questions on one screen**
> As Kenji, I want to see all three structured questions at once on a single form,
> so that I can fill them in at my own pace without feeling interrogated by sequential prompts.

*Acceptance criteria:*
- All three fields visible simultaneously on one screen
- Fields are labeled clearly: "What did you expect?", "What actually happened?", "What have you already tried?"
- Second field includes a hint: "(paste your error message here if you have one)"
- All three fields are required before submission
- Single "Get guidance" button submits all three

---

#### Activity 4 — Receive Socratic Guidance

**Task: Read the AI's Socratic response**
> As Kenji, I want to receive a response that asks me a question or points me to a concept — never code or a direct answer —
> so that I'm pushed to think rather than given a shortcut that I'll copy without understanding.

*Acceptance criteria:*
- AI response is always one of: (A) a clarifying question, or (B) a concept name + documentation pointer with a specific thing to look for
- AI never outputs any code (not even a single line)
- AI never states "the problem is X" (naming the problem = giving the answer)
- AI response ends with a question or a directive to read something
- Max one concept per response (no information overload)

---

#### Activity 5 — Continue the Dialogue

**Task: Type a reply and continue the loop**
> As Kenji, I want to respond to the AI's question and keep the dialogue going,
> so that I can keep narrowing down the problem turn by turn until I reach the answer myself.

*Acceptance criteria:*
- Simple text input and send button below each AI response
- No turn limit — dialogue continues as long as Kenji needs
- Each AI response follows the same Socratic constraints (questions or pointers only)
- "I figured it out" button is always visible as an exit option

---

#### Activity 6 — End the Session

**Task: Signal a breakthrough**
> As Kenji, I want to signal when I've understood the problem and found the answer myself,
> so that the session ends with acknowledgment of the work I did — not just a blank screen.

*Acceptance criteria:*
- "I figured it out" button always visible during dialogue
- Closing screen shows a short affirming message (e.g. "Nice work. The struggle is the learning.")
- No score, no grade, no badge — just acknowledgment
- "Start a new session" button returns to the entry screen

**Task: Exit without a breakthrough**
> As Kenji, I want to see a structured summary of my session when I give up or decide to sleep on it,
> so that I can bring a well-formed question to my instructor at office hours the next day instead of arriving empty-handed.

*Acceptance criteria:*
- Exit option ("I need to stop for now") visible at any point in the dialogue
- Exit screen displays:
  - Kenji's original problem description
  - What he said he had already tried (from the formulation form)
  - The last Socratic question the AI posed
- Label reads: "Bring this to office hours tomorrow"
- No answer is given on the exit screen — not even a hint
- Affirming message reframes stopping as rest, not failure

---

### ── Phase 2 ── Deepen engagement and reduce breakthrough friction

#### Activity 2 — Describe the Blocker

**Task: Rubber duck gate (pre-AI articulation)**
> As Kenji, I want to be prompted to summarize my problem in one sentence before the AI responds,
> so that I'm forced to externalize my thinking in the simplest possible terms — which sometimes resolves the blocker on its own.

*Acceptance criteria:*
- After the 3-field form is submitted, a brief prompt appears: "In one sentence: what is the problem?"
- This answer is added to the AI's context but also shown back to Kenji
- If Kenji changes his answer significantly from the original description, the app notes: "Interesting — that's clearer than your first description. Does that help?"

---

#### Activity 6 — End the Session

**Task: End-of-session "what you figured out" summary**
> As Kenji, I want to see a short recap of the reasoning path I followed when I reach a breakthrough,
> so that I have evidence of my own thinking process and can review it later.

*Acceptance criteria:*
- Generated from the session transcript, not stored persistently
- One paragraph: what the problem turned out to be, what concept unlocked it, how Kenji got there
- Displayed on the breakthrough closing screen
- Option to copy the summary to clipboard

---

### ── Phase 3 ── Personalization and pattern recognition

#### Activity 4 — Receive Socratic Guidance

**Task: Receive responses tailored to identified struggle patterns**
> As Kenji, I want the AI to recognize concepts I've struggled with across multiple sessions,
> so that its questions and pointers are calibrated to my actual knowledge gaps — not a generic learner's.

*Acceptance criteria:*
- Requires session history (Phase 3 dependency)
- AI has access to a summary of topics where Kenji has previously gotten stuck
- Guidance references those gaps when relevant: "You've run into async behavior before — does this feel similar?"

---

#### Activity 6 — End the Session

**Task: View session history and topic patterns**
> As Kenji, I want to see a log of my past sessions and the topics that came up repeatedly,
> so that I can recognize the concepts I need to study more deeply outside of assignment work.

*Acceptance criteria:*
- Requires user account (Phase 3 dependency)
- Session history list with date, problem description, and outcome (breakthrough / stopped)
- Topic frequency summary: "You've hit async/await questions 4 times this week"
- Links back to relevant documentation pages

---

## Release Summary

| Release | Scope | Core Hypothesis Being Tested |
|---|---|---|
| **MVP** | No-login app: describe blocker → 3-field form → Socratic dialogue loop → breakthrough or session summary exit | Will Kenji engage with a Socratic process instead of reaching for ChatGPT? |
| **Phase 2** | Rubber duck gate + end-of-session summary on breakthrough path | Does structured self-articulation reduce time-to-breakthrough? Does reflection on success reinforce retention? |
| **Phase 3** | User accounts + session history + topic pattern analysis + tailored guidance | Does personalization based on struggle history meaningfully improve guidance quality? |

---

## Story Map Visual Summary

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

*User story mapping created for the GiveLearnersHint product design project.*
*Persona: Kenji Nakamura | Bootcamp: Code Chrysalis*
*Framework: Jeff Patton's User Story Mapping*
