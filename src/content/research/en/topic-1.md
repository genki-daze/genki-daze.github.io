---
# Based on the post-review version (Frontiers submission, main.pdf).
# NOTE: the "over 90% purity" / "significantly outperforming" claims in the medRxiv v1
#       abstract were walked back in the reviewed version. Do not reinstate them here.
# Keep this in sync with src/content/research/ja/topic-1.md.
title: 'Identifying Antigen-Specific Sequences from BCR Repertoires — LM-QASAS'
summary: 'Developing LM-QASAS, a reference-free framework that identifies antigen-specific sequences from B cell receptor (BCR) repertoires without relying on existing antibody databases.'
keywords: ['BCR Repertoire', 'Antibody Language Model', 'Reference-free']
order: 3
links:
  - label: Paper (medRxiv)
    url: https://doi.org/10.64898/2026.03.31.26349834
---

The B-cell receptor (BCR) repertoire records the immunological events a person has been through.
But existing methods for finding antigen-specific sequences in it need to reference a known antibody
database — which rules them out for emerging pathogens, where no such reference exists.

**LM-QASAS** removes that dependency. Within the semantic space of an antibody language model
(AbLang2), it looks for clusters of sequences whose local clonal density rises transiently after
immune stimulation, and treats them as antigen-responsive candidates. In SARS-CoV-2 mRNA vaccinees,
those candidates overlapped a known neutralizing-antibody database (CoV-AbDab) far more often than a
random baseline, and using them as a pseudo-reference database reconstructed immune-response
dynamics without any external reference. Sensitivity was limited in an influenza vaccine cohort,
which pins down where the method works best: strong, synchronized clonal expansion such as that
induced by mRNA vaccination.
