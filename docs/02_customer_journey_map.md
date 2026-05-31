# Customer Journey Map

## Product: GiveLearnersHint
### Persona: Kenji Nakamura — Code Chrysalis Bootcamp Student

---

## Journey Overview

**Scenario:** Kenji encounters a blocker during solo assignment work on a weekday evening, after instructor office hours have ended.

**Scope:** From the moment he hits a bug he can't explain, through his current coping behavior (asking AI for a direct answer), to the desired future state with GiveLearnersHint.

**Emotional Arc:**

```
Confidence
    ▲
    │  ●
    │    ●
    │      ●         ●
    │                  ●
    │                    ●        ●
    │                               ●
    │                                 ●
    └─────────────────────────────────────────▶ Time
       [1]   [2]   [3]   [4]   [5]   [6]   [7]
```
*Stages marked below. Low point = Stage 5 (stuck, alone, no help). Recovery = Stage 6 (guided breakthrough).*

---

## Stage 1 — Starting the Assignment

**Phase:** Daytime / Early afternoon

### What Kenji Does
- Reads the assignment prompt
- Tries to plan his approach on paper or in his head
- Starts writing code with moderate confidence

### What He Thinks
> *"Ok, I kind of understand what we covered this morning. Let me just start and see where it takes me."*

### How He Feels
😊 **Cautiously optimistic** — the material is fresh and he has enough context to feel forward momentum.

### Touchpoints
- Assignment brief (written doc or GitHub repo)
- Code editor (VS Code)
- Class notes / lecture recap

### Pain Points
- Assignment instructions are intentionally vague to promote exploration — this is good pedagogy but initially disorienting
- He doesn't always know if his initial approach is even in the right direction

### Opportunities
- None yet — Kenji is in a healthy productive state

---

## Stage 2 — Early Friction

**Phase:** Mid-afternoon

### What Kenji Does
- Encounters an error or unexpected behavior
- Re-reads the error message (partially understands it)
- Tries a few fixes — some from memory, some from Googling

### What He Thinks
> *"Ok, something's wrong but I'm not sure what. I've seen something like this before… maybe."*

### How He Feels
🤔 **Mildly frustrated but engaged** — this is the kind of struggle that feels productive. He's still in the game.

### Touchpoints
- Terminal / browser console
- Stack Overflow (skims for similar errors)
- MDN or framework docs (briefly)

### Pain Points
- Stack Overflow answers are often written for an advanced audience; he can find the solution but not understand it
- Google results surface answers to the specific fix, not to the underlying concept he's missing
- He sometimes applies a fix without understanding why it works

### Opportunities
- A tool that helps him read error messages more carefully
- Prompting him to articulate: "What did I expect? What actually happened?"

---

## Stage 3 — Seeking Help During Office Hours

**Phase:** ~3:00 PM — Office hours window

### What Kenji Does
- Joins office hours (in-person or video)
- Tries to describe the problem to an instructor
- Receives a question back, not an answer
- Is redirected to documentation or a related concept

### What He Thinks
> *"I'm not even sure I'm asking the right question. The instructor keeps asking me what I've tried — I feel like I should know more before I came here."*

### How He Feels
😅 **Anxious and slightly embarrassed** — he worries his question reveals how lost he is. But getting redirected at least gives him a new thread to pull.

### Touchpoints
- Instructor (office hours, limited availability)
- Other students in the room (sometimes helpful, sometimes distracting)

### Pain Points
- Office hours are shared — he hesitates to take too much time
- He arrived without a well-formed question, which limits how useful the session is
- The instructor's Socratic response is correct pedagogy, but leaves him with more questions than answers
- Office hours end. The redirect is not always enough to break through the blocker.

### Opportunities
- **Before** office hours: Help Kenji formulate a precise question so he makes better use of the time
- A tool that helps him prepare: "What have you tried? What do you expect? What are you seeing?"

---

## Stage 4 — After Office Hours / Early Evening

**Phase:** ~4:00–8:00 PM

### What Kenji Does
- Returns to solo work
- Applies the hint from the instructor — sometimes it helps, sometimes it doesn't
- Tries more Stack Overflow, reads docs more carefully
- Progress is slow

### What He Thinks
> *"Ok I have a better idea of what I'm looking for. I think it's something to do with async behavior but I'm not sure how to fix it in this context."*

### How He Feels
😐 **Determined but tiring** — the initial energy of the hint is fading. He's making incremental progress but the finish line still isn't visible.

### Touchpoints
- Code editor
- MDN / framework documentation
- Classmates via Slack (informal peer support)

### Pain Points
- Slack help from classmates is inconsistent — some give full solutions without realizing it, others are too busy
- Documentation is comprehensive but hard to navigate when you don't know what you're looking for
- The longer this goes on, the more progress anxiety builds

### Opportunities
- A tool available in this window that provides Socratic guidance — not a classmate, not a doc, but a structured thinking partner
- The tool could help him identify *which* documentation page to read and *what* to look for in it

---

## Stage 5 — The Breaking Point

**Phase:** ~9:00–11:00 PM ← **Critical Moment**

### What Kenji Does
- Has been stuck on the same problem for 2–3+ hours
- Has run out of approaches to try
- Opens ChatGPT or similar AI tool
- Pastes the error or problem description
- Receives a complete, working solution
- Copy-pastes it. It works.

### What He Thinks
> *"I just need to get past this tonight. I'll go back and understand it tomorrow."*
> *(Tomorrow, he won't.)*

### How He Feels
😩 → 😌 → 😔
**Desperate → Brief relief → Guilt**

The relief lasts about 30 seconds. Then he reads the code he just pasted and realizes he can't explain what half of it does. The assignment is "done" but the learning isn't.

### Touchpoints
- ChatGPT / other general-purpose AI
- Code editor (paste and run)

### Pain Points
- **This is the core problem.** No alternative exists that is:
  - Available at 11pm ✓ (AI is)
  - Low-friction to use ✓ (AI is)
  - Aligned with the bootcamp's pedagogy ✗ (AI is not)
- He *knows* this is counterproductive but the pain of being stuck outweighs his principles in this moment
- Getting the answer doesn't build the skill; the same type of problem will block him again next week

### Opportunities
- ⭐ **This is where GiveLearnersHint intervenes**
- Replace the "ask AI for an answer" behavior with "ask GiveLearnersHint for a nudge"
- The tool must be available at 11pm, low-friction to use, and hard-coded to never give direct answers

---

## Stage 6 — Guided Breakthrough (Future State with GiveLearnersHint)

**Phase:** ~10:00–11:00 PM ← **Desired Future State**

### What Kenji Does
- Opens GiveLearnersHint instead of ChatGPT
- Is prompted: *"Describe what you expected to happen, and what actually happened."*
- Works through a structured question-formulation flow
- The tool identifies a gap in his mental model (e.g., he's confusing synchronous and asynchronous execution)
- The tool asks: *"What does async/await actually do to the function call? Have you read the MDN page on Promises?"*
- Kenji reads the doc with a specific thing to look for
- He finds the answer himself

### What He Thinks
> *"Oh. Oh! That's why it wasn't working. I was assuming the function was waiting for the response before moving on."*

### How He Feels
😤 → 🤔 → 💡 → 😊
**Frustrated → Focused → Realization → Proud**

This is the "aha" moment. He found it himself. It sticks.

### Touchpoints
- GiveLearnersHint (question-formulation interface)
- MDN / framework docs (directed by the tool)
- Code editor

### Pain Points
- The guided process takes longer than just getting the answer — this requires trust that the investment pays off
- Kenji may initially resist the Socratic approach when he's exhausted and just wants to move on

### Opportunities
- Show Kenji a summary of his reasoning process afterward — evidence that he *did* figure it out
- Celebrate the breakthrough to counteract progress anxiety
- Log the concept he discovered so he can revisit it

---

## Stage 7 — Reflection & Next Day

**Phase:** Morning after

### What Kenji Does
- Reviews the code he wrote last night
- Can explain what it does and why
- Mentions the breakthrough to a classmate or instructor
- Feels more prepared for office hours if new questions arise

### What He Thinks
> *"I actually get it now. I think I could help someone else who's stuck on async."*

### How He Feels
😊 **Confident and motivated** — genuine understanding builds a different kind of momentum than copied answers.

### Touchpoints
- Code editor (code review)
- Instructor / classmates (informal knowledge sharing)
- GiveLearnersHint session history (optional review)

### Opportunities
- Surface a "what you learned last night" summary to reinforce retention
- Help Kenji formulate a cleaner question for office hours if the topic still has loose ends

---

## Summary: Moments That Matter

| Stage | Emotional State | Current Behavior | GiveLearnersHint Intervention |
|-------|----------------|-----------------|-------------------------------|
| 2 — Early Friction | Mildly frustrated | Skims Stack Overflow | Help read errors / articulate the gap |
| 3 — Office Hours | Anxious | Brings vague question | Pre-session question formulation |
| 4 — After Hours | Tiring | Reads docs without direction | Directed doc navigation |
| 5 — Breaking Point | Desperate → Guilty | Asks AI for the answer | **Replace with Socratic guidance** |
| 6 — Breakthrough | Proud | N/A (current state: copy-paste) | Guided reasoning → self-discovery |

---

## Key Insight

> The problem is not that Kenji lacks willpower. It's that **no pedagogically aligned support exists outside instructor office hours.** The gap is structural, not motivational. GiveLearnersHint fills that gap.

---

*Customer journey map created for the GiveLearnersHint product design project.*
*Persona: Kenji Nakamura | Bootcamp: Code Chrysalis*
