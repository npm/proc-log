# Changelog

## [5.0.0](https://github.com/npm/proc-log/compare/v4.2.0...v5.0.0) (2024-09-03)
### ⚠️ BREAKING CHANGES
* `proc-log` now supports node `^18.17.0 || >=20.5.0`
### Bug Fixes
* [`aa3a1f6`](https://github.com/npm/proc-log/commit/aa3a1f65bf38bfd3305a73bdf4b432af12393012) [#101](https://github.com/npm/proc-log/pull/101) align to npm 10 node engine range (@hashtagchris)
### Chores
* [`2697148`](https://github.com/npm/proc-log/commit/2697148878a32af8c56745486dd0ed44b0e403aa) [#101](https://github.com/npm/proc-log/pull/101) run template-oss-apply (@hashtagchris)
* [`4e025d2`](https://github.com/npm/proc-log/commit/4e025d25c53cd85b767fc9e735f756b9f51a7b57) [#99](https://github.com/npm/proc-log/pull/99) bump @npmcli/eslint-config from 4.0.5 to 5.0.0 (@dependabot[bot])
* [`3d6ab24`](https://github.com/npm/proc-log/commit/3d6ab248c75c9bca053755da4fe9c74e894f0066) [#88](https://github.com/npm/proc-log/pull/88) bump @npmcli/template-oss to 4.22.0 (@lukekarrys)
* [`e12dd15`](https://github.com/npm/proc-log/commit/e12dd15f94483daf7237468a6f4c9df96a4b523d) [#83](https://github.com/npm/proc-log/pull/83) chore: chore: postinstall for dependabot template-oss PR (@lukekarrys)
* [`3cfe857`](https://github.com/npm/proc-log/commit/3cfe8571050f83fe0452a107a0696cafe1af1a51) [#100](https://github.com/npm/proc-log/pull/100) postinstall for dependabot template-oss PR (@hashtagchris)
* [`2b4320c`](https://github.com/npm/proc-log/commit/2b4320c544a0e42fc784d5f75d042908a7227cf6) [#100](https://github.com/npm/proc-log/pull/100) bump @npmcli/template-oss from 4.23.1 to 4.23.3 (@dependabot[bot])

## [4.2.0](https://github.com/npm/proc-log/compare/v4.1.0...v4.2.0) (2024-04-16)

### Features

* [`4c0d3cf`](https://github.com/npm/proc-log/commit/4c0d3cfde92e639e81a76655df74e0204a56eec8) [#85](https://github.com/npm/proc-log/pull/85) add flush method to output (#85) (@lukekarrys)

## [4.1.0](https://github.com/npm/proc-log/compare/v4.0.0...v4.1.0) (2024-04-15)

### Features

* [`e00086e`](https://github.com/npm/proc-log/commit/e00086ea425a9cb6a849e3853bd3ae79910b3d44) [#80](https://github.com/npm/proc-log/pull/80) add timers and read (@lukekarrys)

### Bug Fixes

* [`4832b21`](https://github.com/npm/proc-log/commit/4832b21f33513ceb0482ba1757594e9776cff408) [#80](https://github.com/npm/proc-log/pull/80) remove args from log pause/resume (@lukekarrys)

## [4.0.0](https://github.com/npm/proc-log/compare/v3.0.0...v4.0.0) (2024-04-12)

### ⚠️ BREAKING CHANGES

* the exports on this package have changed.  The current functionality has moved to a `log` function in the exports.

### Features

* [`39db1e1`](https://github.com/npm/proc-log/commit/39db1e10e0f10acab4bf02ded5c8b9e6598a6c70) [#77](https://github.com/npm/proc-log/pull/77) add output methods (@wraithgar)
* [`12f35fe`](https://github.com/npm/proc-log/commit/12f35fe4c95caab14966acece3e8fa06ed5e3613) [#77](https://github.com/npm/proc-log/pull/77) log: add timing log level (@wraithgar)
* [`8e90af0`](https://github.com/npm/proc-log/commit/8e90af02d49bed669f9b42d7a31d51d3849aaef1) [#77](https://github.com/npm/proc-log/pull/77) change current exported function "log" (@wraithgar)

### Bug Fixes

* [`ac543c4`](https://github.com/npm/proc-log/commit/ac543c4456443bfa6f044edcfbff2f214e04996b) [#77](https://github.com/npm/proc-log/pull/77) switch to traditional functions (@wraithgar)
* [`978fbf9`](https://github.com/npm/proc-log/commit/978fbf9fbe47a2ec71a61e0adfe61a17c14bce48) [#77](https://github.com/npm/proc-log/pull/77) refactor: don't loop through levels to generate log export (@wraithgar)

### Chores

* [`a393ac6`](https://github.com/npm/proc-log/commit/a393ac604a160c60b677daf2f12658abd25c5f65) [#78](https://github.com/npm/proc-log/pull/78) enable auto publish (#78) (@wraithgar)
* [`3caba0e`](https://github.com/npm/proc-log/commit/3caba0e5209359104e4ae386eb3092bf0a1361be) [#77](https://github.com/npm/proc-log/pull/77) add test plan count for current methods (@wraithgar)
* [`6442a36`](https://github.com/npm/proc-log/commit/6442a3672143060f20cb015808019adbc4378c9f) [#73](https://github.com/npm/proc-log/pull/73) postinstall for dependabot template-oss PR (@lukekarrys)
* [`f8df624`](https://github.com/npm/proc-log/commit/f8df6247c56daf90fe6a9f9042f610cc97662a24) [#73](https://github.com/npm/proc-log/pull/73) bump @npmcli/template-oss from 4.21.1 to 4.21.3 (@dependabot[bot])
* [`31491ca`](https://github.com/npm/proc-log/commit/31491cacfc995dc2811a03ed8718d91520ded2d0) [#70](https://github.com/npm/proc-log/pull/70) postinstall for dependabot template-oss PR (@lukekarrys)
* [`be382b7`](https://github.com/npm/proc-log/commit/be382b7a6eea91f2f59dda5a40f48ac5bf296561) [#70](https://github.com/npm/proc-log/pull/70) bump @npmcli/template-oss from 4.19.0 to 4.21.1 (@dependabot[bot])
* [`de668d7`](https://github.com/npm/proc-log/commit/de668d7d9efdc09c5909c3deb8b7f9b3c7bbb73b) [#51](https://github.com/npm/proc-log/pull/51) postinstall for dependabot template-oss PR (@lukekarrys)
* [`4b8abd0`](https://github.com/npm/proc-log/commit/4b8abd062c223d39842ca1a979341e707847ba39) [#51](https://github.com/npm/proc-log/pull/51) bump @npmcli/template-oss from 4.18.1 to 4.19.0 (@dependabot[bot])
* [`ed8c220`](https://github.com/npm/proc-log/commit/ed8c220a93331069a9d3b5d7e8b1e5d186b54304) [#50](https://github.com/npm/proc-log/pull/50) postinstall for dependabot template-oss PR (@lukekarrys)
* [`36b1d1e`](https://github.com/npm/proc-log/commit/36b1d1ef1be51f7996e0ed0f5645e627d994c14b) [#50](https://github.com/npm/proc-log/pull/50) bump @npmcli/template-oss from 4.18.0 to 4.18.1 (@dependabot[bot])
* [`dfda484`](https://github.com/npm/proc-log/commit/dfda484f3f3f18ddc2e7c0e244d3ab5d2a095f21) [#49](https://github.com/npm/proc-log/pull/49) postinstall for dependabot template-oss PR (@lukekarrys)
* [`f9a8d6d`](https://github.com/npm/proc-log/commit/f9a8d6d954ba383f3a64d291c635b5445ea4bbff) [#49](https://github.com/npm/proc-log/pull/49) bump @npmcli/template-oss from 4.17.0 to 4.18.0 (@dependabot[bot])
* [`857d35e`](https://github.com/npm/proc-log/commit/857d35e1f1023f3ac252743827da42621ce5c30e) [#48](https://github.com/npm/proc-log/pull/48) postinstall for dependabot template-oss PR (@lukekarrys)
* [`6e51a61`](https://github.com/npm/proc-log/commit/6e51a614ed41fd5b50926c0e427282ff65c31acd) [#48](https://github.com/npm/proc-log/pull/48) bump @npmcli/template-oss from 4.15.1 to 4.17.0 (@dependabot[bot])
* [`e668ec7`](https://github.com/npm/proc-log/commit/e668ec7214698b8ce3b2c7c246ea0decafc46a30) [#47](https://github.com/npm/proc-log/pull/47) postinstall for dependabot template-oss PR (@lukekarrys)
* [`eea3f85`](https://github.com/npm/proc-log/commit/eea3f85f3c4c6dc0f39d591d5545b5e982d8812c) [#47](https://github.com/npm/proc-log/pull/47) bump @npmcli/template-oss from 4.14.1 to 4.15.1 (@dependabot[bot])
* [`bc05709`](https://github.com/npm/proc-log/commit/bc05709f98f5f49fd4fa8e16a48ba37da6651157) [#46](https://github.com/npm/proc-log/pull/46) bump @npmcli/template-oss from 4.13.0 to 4.14.1 (#46) (@dependabot[bot], @npm-cli-bot)
* [`98c7267`](https://github.com/npm/proc-log/commit/98c72673600345b4846a4152a316c47e5da10ea2) [#45](https://github.com/npm/proc-log/pull/45) bump @npmcli/template-oss from 4.12.1 to 4.13.0 (#45) (@dependabot[bot], @npm-cli-bot, @nlf)
* [`3500db4`](https://github.com/npm/proc-log/commit/3500db4720fb737430e4dc607a348d457bfaf513) [#44](https://github.com/npm/proc-log/pull/44) bump @npmcli/template-oss from 4.12.0 to 4.12.1 (#44) (@dependabot[bot], @npm-cli-bot)
* [`7636af5`](https://github.com/npm/proc-log/commit/7636af52b117d8083f4d97e4b90ce532c8de1b63) [#43](https://github.com/npm/proc-log/pull/43) postinstall for dependabot template-oss PR (@lukekarrys)
* [`3dc1ca0`](https://github.com/npm/proc-log/commit/3dc1ca0ad5ea12a989be95aad319cde36b4d95f9) [#43](https://github.com/npm/proc-log/pull/43) bump @npmcli/template-oss from 4.11.4 to 4.12.0 (@dependabot[bot])
* [`b62ca21`](https://github.com/npm/proc-log/commit/b62ca21b75b6e878e3f95ccd8e2b84d7ebf38a3f) [#42](https://github.com/npm/proc-log/pull/42) postinstall for dependabot template-oss PR (@lukekarrys)
* [`cef0e0d`](https://github.com/npm/proc-log/commit/cef0e0d8a27e6879ef7d41fc5644ef520c7b92fd) [#42](https://github.com/npm/proc-log/pull/42) bump @npmcli/template-oss from 4.11.3 to 4.11.4 (@dependabot[bot])
* [`cabc576`](https://github.com/npm/proc-log/commit/cabc576873b8081e6440ba6a49406828d5a8b53a) [#41](https://github.com/npm/proc-log/pull/41) postinstall for dependabot template-oss PR (@lukekarrys)
* [`f34b6c7`](https://github.com/npm/proc-log/commit/f34b6c7d0535db65782e3fa993522a1f5df6622e) [#41](https://github.com/npm/proc-log/pull/41) bump @npmcli/template-oss from 4.11.0 to 4.11.3 (@dependabot[bot])
* [`2533092`](https://github.com/npm/proc-log/commit/2533092409fd9a05165aa67a429f20e02a4eb092) [#40](https://github.com/npm/proc-log/pull/40) postinstall for dependabot template-oss PR (@lukekarrys)
* [`bca92ea`](https://github.com/npm/proc-log/commit/bca92eac1f7dcf6a194df132471df7eb60f69ac8) [#40](https://github.com/npm/proc-log/pull/40) bump @npmcli/template-oss from 4.10.0 to 4.11.0 (@dependabot[bot])
* [`3721aed`](https://github.com/npm/proc-log/commit/3721aedec49426d70fff5465425c4a968f790512) [#39](https://github.com/npm/proc-log/pull/39) postinstall for dependabot template-oss PR (@lukekarrys)
* [`94b7ef3`](https://github.com/npm/proc-log/commit/94b7ef3eb362dbd7855737567814e20eaabe507c) [#39](https://github.com/npm/proc-log/pull/39) bump @npmcli/template-oss from 4.8.0 to 4.10.0 (@dependabot[bot])
* [`d4db1ab`](https://github.com/npm/proc-log/commit/d4db1abaddb1754ffc4220f68444388b9c88d7a6) [#37](https://github.com/npm/proc-log/pull/37) postinstall for dependabot template-oss PR (@lukekarrys)
* [`5b16b3a`](https://github.com/npm/proc-log/commit/5b16b3a145b1f238387363e3e87b332ed457673a) [#37](https://github.com/npm/proc-log/pull/37) bump @npmcli/template-oss from 4.6.2 to 4.8.0 (@dependabot[bot])
* [`35fbba3`](https://github.com/npm/proc-log/commit/35fbba37a1aeb96b99737eda9f0ff9f5af192df7) [#36](https://github.com/npm/proc-log/pull/36) postinstall for dependabot template-oss PR (@lukekarrys)
* [`1c0da10`](https://github.com/npm/proc-log/commit/1c0da10c5ec740c6d40fb310f60e91f084827e05) [#36](https://github.com/npm/proc-log/pull/36) bump @npmcli/template-oss from 4.6.1 to 4.6.2 (@dependabot[bot])
* [`487cfeb`](https://github.com/npm/proc-log/commit/487cfeb5ea1780212beacde6ad9505b10f92c432) [#35](https://github.com/npm/proc-log/pull/35) postinstall for dependabot template-oss PR (@lukekarrys)
* [`70dbd12`](https://github.com/npm/proc-log/commit/70dbd124444825c81c897987e3a6c6550225da64) [#35](https://github.com/npm/proc-log/pull/35) bump @npmcli/template-oss from 4.5.1 to 4.6.1 (@dependabot[bot])
* [`d299887`](https://github.com/npm/proc-log/commit/d299887e3d0355ae50fa1e72671c179dbf2efc46) [#34](https://github.com/npm/proc-log/pull/34) bump @npmcli/eslint-config from 3.1.0 to 4.0.0 (@dependabot[bot])

## [3.0.0](https://github.com/npm/proc-log/compare/v2.0.1...v3.0.0) (2022-10-10)

### ⚠️ BREAKING CHANGES

* `proc-log` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* [`54c85c1`](https://github.com/npm/proc-log/commit/54c85c1d4c0ed59c48d6765b15e8918e2eaf8c3a) [#27](https://github.com/npm/proc-log/pull/27) postinstall for dependabot template-oss PR (@lukekarrys)

### [2.0.1](https://github.com/npm/proc-log/compare/v2.0.0...v2.0.1) (2022-03-28)


### Documentation

* fix pause/resume signatures ([adccecc](https://github.com/npm/proc-log/commit/adccecc2bf5e77427e3fefe826a8e5a1a57640d7))

## [2.0.0](https://www.github.com/npm/proc-log/compare/v1.0.0...v2.0.0) (2022-02-10)


### ⚠ BREAKING CHANGES

* this drops support for node10 and non-LTS versions of node12 and node14

* @npmcli/template-oss ([#1](https://www.github.com/npm/proc-log/issues/1)) ([d340d8b](https://www.github.com/npm/proc-log/commit/d340d8b90c5612223d456a6d33d36ed83ab1ba41))


### Documentation

* add example usage ([33ef65c](https://www.github.com/npm/proc-log/commit/33ef65c4dc3cdba2a2555ec1c32f6bd5d281ff6a))
