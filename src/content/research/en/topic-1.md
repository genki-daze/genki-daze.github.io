---
# Based on the LM-QASAS abstract (medRxiv, DOI 10.64898/2026.03.31.26349834).
# TODO(user): The facts come from the paper, but please rewrite the phrasing in your own voice.
# Keep this in sync with src/content/research/ja/topic-1.md.
title: 'Identifying Antigen-Specific Sequences from BCR Repertoires — LM-QASAS'
summary: 'Developing LM-QASAS, a reference-free framework that identifies antigen-specific sequences from B cell receptor (BCR) repertoires without relying on existing antibody databases.'
keywords: ['BCR Repertoire', 'Antibody Language Model', 'Reference-free']
order: 3
links:
  - label: Paper (medRxiv)
    url: https://doi.org/10.64898/2026.03.31.26349834
---

The B-cell receptor (BCR) repertoire serves as a historical record of the immunological events a
person has been through. Deciphering antigen-specific sequences from that vast dataset remains a
challenge, particularly for novel pathogens where prior knowledge is absent.

Time-course analysis methods such as QASAS have proven effective for tracking immune responses, but
they rely on existing antibody databases, which limits their applicability to emerging diseases.

#### Approach

To overcome this limitation, we introduced **LM-QASAS**, a **reference-free** computational framework
that integrates antibody language models with repertoire dynamics. By mapping sequences into a
high-dimensional semantic embedding space, it identifies functionally convergent clusters — sequences
that are semantically similar *and* exhibit transient expansion upon immune stimulation.

#### Results

- In healthy individuals vaccinated with SARS-CoV-2 mRNA vaccines, the method identified
  spike-specific sequences with **over 90% purity**, significantly outperforming methods based on
  simple sequence identity or abundance.
- Leave-one-out cross-validation showed that LM-QASAS can accurately reconstruct immune dynamics in
  unseen individuals without external references.
- Sensitivity was limited in an influenza vaccine cohort, which clarified the operating range: the
  approach is most effective under robust clonal expansion (a high signal-to-noise ratio), such as
  that induced by mRNA vaccines.
