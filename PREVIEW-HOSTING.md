# Personal branch preview

This repository hosts the **unofficial** personal preview at https://shinick-han.github.io/falsify-branch-preview/ .
The online guide is https://shinick-han.github.io/falsify-branch-preview/guide.html .

It retains the complete public source of the Pseudo-Lab/Falsify proposal branch at
`922e58b6e3f67c51b50051bc550a0b5de3a4473c`. Only hosting files were added in this repository; the team's runtime code is
unchanged. The frozen source is not automatically synchronized with later team branch commits. To update, review and
import an explicit source commit, update the packaging receipt's teamSourceCommit, then push this repository's default
`feat/workbench-html-guide-20261012` branch.

The root Actions workflow runs the browser contracts and 20 guide checks without paid model calls.
It packages only Git-tracked `tools/workbench/app/dist` files into an initially absent `_site`; local papers, settings,
recordings, environments and edited PDF files are never scanned or copied. `preview-source.json` identifies the source
commits and static file hashes. Existing AGPL licenses and vendor notices are retained with the source.

This is a static frontend, not a remotely hosted companion or model service. Every participant uses their own local
companion and subscription CLI login when invoking models. PDF operations require the companion and relevant dependencies.
The personal stable app and this preview share the origin `https://shinick-han.github.io` and therefore share browser storage.
Use a separate browser profile for independent records. This preview does not change team Pages settings or team main;
the personal stable app is released separately from the same upstream application snapshot.
