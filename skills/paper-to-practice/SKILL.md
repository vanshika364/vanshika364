---
name: paper-to-practice
description: Analyze research papers and turn their claims, methods, evidence, and limitations into practical implementation or evaluation plans. Use when the user provides or references an academic paper, preprint, PDF, abstract, technical report, benchmark, or research method and asks for a summary, plain-language explanation, critical review, reproduction guide, prototype plan, applicability assessment, comparison, or "should we use this?" recommendation.
---

# Paper to Practice

Translate research into a decision and an executable next step. Preserve the distinction between what the paper demonstrates, what its authors claim, and what you infer.

## Establish the task

Infer the user's goal from the request:

- **Understand:** Explain the paper and its contribution.
- **Evaluate:** Judge the evidence, limitations, and relevance.
- **Reproduce:** Identify what is needed to recreate the reported result.
- **Prototype:** Design the smallest useful implementation.
- **Adopt:** Recommend whether and how to use the method in a real system.
- **Compare:** Evaluate the paper against a baseline or alternative.

Handle multiple goals together when useful. Do not ask the user to select a mode if the request makes the goal clear.

## Read the source

Read the paper itself when it is available. For a link, title, or citation, retrieve the primary paper rather than relying on search snippets or secondary summaries. If only an abstract or excerpt is available, state that limitation before drawing conclusions.

Inspect the sections needed for the user's goal:

- abstract and introduction for the problem and claimed contribution;
- related work for the actual novelty;
- method for assumptions, inputs, architecture, objective, and procedure;
- experiments for datasets, baselines, metrics, ablations, and uncertainty;
- limitations and appendices for constraints and implementation details;
- code or supplementary material when reproduction is requested.

Do not imply that the entire paper was reviewed when only part was accessible.

## Build an evidence map

Extract these elements before recommending action:

1. **Problem:** What specific gap does the work address?
2. **Contribution:** What is genuinely new or newly demonstrated?
3. **Mechanism:** Why should the method work?
4. **Evidence:** Which experiments support each important claim?
5. **Boundary:** Where was the method not tested, or where did it fail?
6. **Requirements:** What data, compute, tools, and expertise does it assume?
7. **Transfer conditions:** What must remain true for the result to apply to the user's setting?

Label statements when provenance matters:

- **Paper reports:** Directly supported by the paper.
- **Authors argue:** Interpretation or explanation offered by the authors.
- **Practical inference:** A reasoned conclusion that the paper did not test directly.

Use short citations to sections, figures, or tables when available. Never invent page numbers, results, code availability, or implementation details.

## Explain the paper

Start with:

### Bottom line

Explain in two or three sentences what the paper changes and why someone should care.

### The idea in plain English

Give a mental model before equations or architecture details. Define technical terms on first use. Use one concrete example when it makes the mechanism easier to understand.

### How it works

Describe the minimum causal sequence needed to understand the method:

`input -> key transformation -> training or decision signal -> output`

Include equations only when they clarify the mechanism or the user requests technical depth. Explain every symbol used.

## Evaluate the evidence

Report the few metrics that determine whether the method works. For each important metric, explain:

- what it measures;
- the relevant baseline;
- the reported improvement in exact units;
- whether the change appears practically meaningful; and
- any caveat that limits the comparison.

Check for:

- fair and competitive baselines;
- representative datasets and realistic splits;
- ablations that isolate the claimed contribution;
- uncertainty, variance, or repeated trials;
- leakage, contamination, cherry-picking, or evaluation mismatch;
- compute and data advantages hidden behind a method comparison;
- conflicts between headline claims and tables;
- external validity beyond the tested setting.

Do not call a result state of the art without confirming the benchmark, comparison conditions, and date context. Do not treat statistical significance as practical significance.

## Turn the method into practice

When implementation or adoption is useful, provide:

### Minimum viable prototype

Define the smallest experiment that tests the paper's central value in the user's context. Prefer an existing baseline plus one meaningful change over a full production build.

### Implementation map

Specify:

- inputs and data preparation;
- model, algorithm, or system components;
- training or execution flow;
- dependencies and likely reusable code;
- compute and operational needs;
- outputs and integration points.

Use pseudocode or a compact architecture sketch when it removes ambiguity. Do not produce speculative production code unless the user requests implementation.

### Evaluation plan

Include:

- a baseline;
- the primary success metric;
- diagnostic metrics or slices;
- cost, latency, safety, or quality guardrails;
- acceptance criteria; and
- a stop rule for an unpromising prototype.

### Risk register

Rank the main risks by likelihood and impact. Cover technical, data, evaluation, operational, and licensing risks when relevant.

## Make the recommendation

Use one verdict:

- **Prototype now:** Evidence and fit are strong enough for a bounded test.
- **Explore with conditions:** Promising, but a named uncertainty must be tested first.
- **Monitor:** Relevant idea, insufficient current value or evidence.
- **Do not adopt yet:** Evidence, fit, cost, or risk does not justify implementation.

Support the verdict with the decisive evidence and assumptions. State what new result would change it.

## Match the output to the request

Use only relevant sections. A complete analysis commonly includes:

1. Bottom line
2. Problem and contribution
3. Method in plain English
4. Evidence and important metrics
5. Limitations and transfer risks
6. Minimum viable prototype
7. Recommendation

For a quick summary, keep the first five and omit implementation detail. For reproduction, emphasize exact setup, missing details, and fidelity checks. For comparison, use the same criteria and evidence standard for every paper.

## Stay rigorous

- Separate reported fact from inference.
- Preserve exact metric names, values, units, and experimental conditions.
- Prefer the paper and official code over commentary about them.
- State missing information rather than filling gaps with plausible details.
- Distinguish a faithful reproduction from an adapted prototype.
- Treat papers as evidence, not authority.
- Keep the explanation concise enough to support a decision.

## Pre-send check

Confirm that the response:

1. identifies the real contribution rather than repeating the abstract;
2. connects important claims to evidence;
3. explains whether reported gains are meaningful and comparable;
4. names limitations and transfer assumptions;
5. makes the prototype smaller than the full paper implementation; and
6. gives a clear verdict or next step when the user needs a decision.
