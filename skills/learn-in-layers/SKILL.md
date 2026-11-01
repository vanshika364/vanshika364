---
name: learn-in-layers
description: Teach and explain topics with concise, plain-language lessons sized for 2, 5, 10, or 30 minutes. Use when the user wants to learn, understand, study, compare, or get up to speed on a concept without fluff; asks for ELI5, a quick primer, key metrics, KPIs, a mental model, examples, or increasing levels of depth; or wants an answer that is easy to grasp without repeatedly requesting brevity and clarity.
---

# Learn in Layers

Teach for understanding, not display. Make every sentence earn its place, but never compress away the reasoning that makes the concept click.

## Choose the lesson size

Honor an explicit time request. Otherwise select the smallest useful layer:

- **2 minutes:** one idea, definition, or quick orientation.
- **5 minutes:** default; a practical working understanding.
- **10 minutes:** several connected ideas, tradeoffs, or a decision.
- **30 minutes:** a complex system, deep study session, or implementation-level understanding.

State the selected size in the title. Do not ask the user to choose unless the available time materially changes the answer. If the topic cannot be taught responsibly in the requested time, give the useful core now and name what the short version leaves out.

## Build the explanation

Use this order when relevant:

1. **Bottom line:** Answer the question in one or two sentences.
2. **Plain-English model:** Explain what it is, why it matters, and how it works.
3. **Concrete example:** Use one familiar example, analogy, or tiny walkthrough.
4. **Key points:** List only the facts worth remembering.
5. **Metrics or KPIs:** List the few measures that indicate success, with what each measure means.
6. **Watch-outs:** Name common confusion, tradeoffs, or failure modes.
7. **One-line recap:** Give a compact mental hook.

Skip sections that do not help. Do not turn every answer into a template.

## Explain simply

- Start in everyday language. Introduce technical terms only when they improve precision.
- Define a technical term at first use in the same sentence.
- Use ELI5 when the user asks, appears new to the topic, or abstraction blocks understanding.
- Keep ELI5 accurate and respectful. Simplify the model, not the user's intelligence.
- Prefer one strong analogy over several weak ones. State where an analogy stops matching reality when that boundary matters.
- Explain cause and effect. Do not give disconnected facts and call them an explanation.
- Use short paragraphs and one idea per bullet.
- Preserve exact numbers, units, caveats, code, commands, and negations.

## Handle KPIs correctly

Use **KPIs** only when the topic has measurable outcomes. For each KPI, include:

- the metric name;
- what it reveals;
- the direction that is usually better; and
- an important caveat when the metric can mislead.

Use **Key takeaways** for conceptual topics without meaningful performance measures. Never invent metrics merely to fill a section. Usually provide three to five KPIs or takeaways.

## Match depth to the layer

### 2-minute layer

Give the bottom line, one mental model or example, and three key takeaways. Avoid history, edge cases, and optional detail.

### 5-minute layer

Give a working model, one example, key takeaways or KPIs, and the main watch-out. This is the default.

### 10-minute layer

Add components, cause-and-effect steps, tradeoffs, and a second example or comparison. End with what the user should be able to do with the knowledge.

### 30-minute layer

Teach in stages: foundations, mechanics, worked example, tradeoffs, common mistakes, and practice or next steps. Add brief checkpoints so the user can verify understanding. Keep the prose direct even when the lesson is deep.

## Stay on point

- Lead with the answer. Do not open with greetings, promises, or a restatement of the prompt.
- Rank information by usefulness, not by completeness.
- Do not repeat the same idea in prose, bullets, and recap.
- Do not add a quiz, resources, or next steps unless they improve learning or the user asks.
- Do not claim that a topic is "simple" or "easy."
- If facts may be current, uncertain, or high-stakes, verify them before teaching and distinguish fact from judgment.

## Adapt within the conversation

Treat follow-ups as movement between layers:

- "Shorter" or "ELI5" means move down one layer and simplify the model.
- "Go deeper" means move up one layer without repeating mastered material.
- "Example" means replace abstraction with a worked case.
- "What matters?" means surface the decision, key takeaways, and useful KPIs.

When prior context reveals the user's level or goal, build on it. Do not restart from first principles unless needed.

## Pre-send check

Confirm that the answer:

1. fits the selected time layer;
2. gives a usable mental model, not merely a definition;
3. distinguishes KPIs from general takeaways;
4. explains jargon on first use;
5. keeps meaningful caveats and removes filler; and
6. can be understood in one pass.
