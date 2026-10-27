# Personal branch preview

This repository hosts the **unofficial** personal preview at https://shinick-han.github.io/falsify-branch-preview/ .
The online guide is https://shinick-han.github.io/falsify-branch-preview/guide.html .

It retains the public Pseudo-Lab/Falsify proposal branch base at
`f84dca12194285862030c87765b17edc19b03d11`. The Workbench subtree now uses the public standalone application snapshot
`45a49d3159a6afa99fffc935556a9dc35d4ad2d1`, including alpha.18 and macOS support. The team repository is unchanged.
This snapshot is not automatically synchronized. To update, review and import an explicit application commit,
record its repository and commit in the packaging receipt, then push this repository's default
`feat/workbench-html-guide-20261012` branch.

The root Actions workflow runs the browser and guide contracts without paid model calls.
It packages only Git-tracked `tools/workbench/app/dist` files into an initially absent `_site`; local papers, settings,
recordings, environments and edited PDF files are never scanned or copied. `preview-source.json` identifies the source
commits and static file hashes. Existing AGPL licenses and vendor notices are retained with the source.

This is a static frontend, not a remotely hosted companion or model service. Every participant uses their own local
companion and subscription CLI login when invoking models. Browser text and table edits work without the companion;
local model execution and the optional local image editor need the companion and its dependencies.
The personal stable app and this preview share the origin `https://shinick-han.github.io` and therefore share browser storage.
Use a separate browser profile for independent records. This preview does not change team Pages settings or team main;
the personal stable app is released separately from the same upstream application snapshot.
