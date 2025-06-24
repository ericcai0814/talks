---
# You can also start simply with 'default'
highlighter: shiki
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
css: unocss
colorSchema: dark
glowSeed: 4
remoteAssets: true

# some information about your slides (markdown enabled)
title: 前端測試調查報告
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade-out
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
# seoMeta:
#  ogImage: https://cover.sli.dev
layout: cover
---

# 前端測試進程報告與問題研討
<Glow />

前端測試研究 & 意見調查 & 下一步評估

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: center
hideInToc: true
---

# 目錄
<Glow glow="bottom" :glowOpacity="0.7" />

<Toc text-sm minDepth="1" maxDepth="2" />

<!--
  You can have `style` tag in markdown to override the style for the current page.
  Learn more: https://sli.dev/features/slide-scope-style
  -->

<style>
.slidev-toc {
  font-size: 1.5rem;
}
</style>

---

# 前端測試的理解 - 問卷訪談
<Glow glow="bottom-right" />

為了更了解每一位前端成員對於「前端測試」的個人見解，我們在 5/13 展開問卷調查，蒐集團隊成員學習前端測試至今的理解。

**歷程：**

- 2025/05/13 ～ 2025/05/15 問卷調查
- 2025/05/15 針對問卷調查內容與前端團隊同步討論

 [learn more](https://www.notion.so/ewill-software/1f2d6e303b5c80c986cae42bd700dd3c)

<!-- https://sli.dev/guide/animations.html#click-animation -->

---

# 前端測試共識
<Glow glow="center" />

<div class="grid grid-cols-2 gap-x-8">
<div>
  <div v-click class="p-2">
    <div class="text-lg font-bold flex items-center gap-2 opacity-70">
      <carbon:cube />
      測試目的與價值認知一致
    </div>
    <div class="text-sm opacity-50">
    團隊普遍認同前端測試的核心目的是確保程式碼品質、減少人為錯誤，並透過自動化檢測來維護商業邏輯的正確性。大家都理解測試能夠避免「改A壞B」的問題。
    </div>
  </div>

  <div v-click class="p-2 mt-4">
    <div class="text-lg font-bold flex items-center gap-2 opacity-70">
      <carbon:cube />
      測試必要性需依專案性質評估
    </div>
    <div class="text-sm opacity-50">
    團隊達成共識：並非所有專案都需要相同程度的測試。應該以「影響使用者權益程度」、「專案複雜度」、「風險程度」作為評估基準，關鍵邏輯和核心功能優先實施測試。
    </div>
  </div>

  <div v-click class="p-2 mt-4">
    <div class="text-lg font-bold flex items-center gap-2 opacity-70">
      <carbon:cube />
      測試扮演品質守門員角色
    </div>
    <div class="text-sm opacity-50">
    大家一致認為測試在開發流程中扮演「監督者」、「守門員」、「保護者」的角色，能夠在CI/CD流程中進行品質控管，確保程式碼變更的可預測性。
    </div>
  </div>

  <div v-click class="p-2 mt-4">
    <div class="text-lg font-bold flex items-center gap-2 opacity-70">
      <carbon:cube />
      測試促進跨部門協作
    </div>
    <div class="text-sm opacity-50">
    團隊認同測試能夠成為與QA溝通的共同語言，提供測試文件和規格作為交付佐證，強化跨部門協作效率，降低交接成本。
    </div>
  </div>
</div>

<div>
  <div v-click class="p-2">
    <div class="text-lg font-bold flex items-center gap-2 opacity-70">
      <carbon:cube />
      開發成本與效益需要平衡
    </div>
    <div class="text-sm opacity-50">
    所有成員都意識到測試會增加初期開發時程和學習成本，但長期來看能提升開發效率和程式碼穩定性。團隊同意需要根據專案資源和時程壓力來調整測試涵蓋範圍。
    </div>
  </div>

  <div v-click class="p-2 mt-4">
    <div class="text-lg font-bold flex items-center gap-2 opacity-70">
      <carbon:cube />
      測試推動程式碼模組化設計
    </div>
    <div class="text-sm opacity-50">
    團隊理解測試能夠反向檢驗程式碼設計，促使開發者注意單一職責原則和程式碼顆粒度，難以測試的程式碼往往代表設計需要優化。
    </div>
  </div>

  <div v-click class="p-2 mt-4">
    <div class="text-lg font-bold flex items-center gap-2 opacity-70">
      <carbon:cube />
      測試工具與流程需要團隊統一標準
    </div>
    <div class="text-sm opacity-50">
    雖然大家對測試價值有共識，但也認知到需要建立統一的測試工具、流程和標準，才能降低學習成本和溝通成本，避免不同人對測試範圍認知的差異。
    </div>
  </div>
</div>

</div>

---

# 目前的執行狀況 - 會議

<Glow glow="top-right" />

<div v-click class="h-[90dvh] max-h-[100%] overflow-y-auto">

| 會議內容 | 日期 |
|---|---|
| <kbd>測試讀書會-Vitest Feature & 前端測試訪談回顧</kbd> | 2025/06/19 |
| <kbd>小組分享（測試讀書會）</kbd> | 2025/06/13 |
| <kbd>測試訪談-Lily</kbd> | 2025/06/11 |
| <kbd>測試訪談-Aaron</kbd> | 2025/06/10 |
| <kbd>測試訪談-Chirs</kbd> | 2025/06/10 |
| <kbd>測試訪談-Vicky</kbd> | 2025/06/09 |
| <kbd>測試訪談-尚文</kbd> | 2025/06/09 |
| <kbd>測試讀書會 - Vitest 概念理解</kbd> | 2025/06/05 |
| <kbd>測試＆UI Lib討論</kbd> | 2025/05/29 |
| <kbd>前端讀書會- Vitest 概念理解</kbd> | 2025/05/27 |
| <kbd>前端小組討論</kbd> | 2025/05/23 |
| <kbd>單元測試讀書會-前端測試定義、必要性與優劣勢分析</kbd> | 2025/05/15 |
| <kbd>前端讀書會</kbd> | 2025/04/25 |
| <kbd>前端讀書會</kbd> | 2025/04/18 |
| <kbd>讀書會安排策略</kbd> | 2025/04/16 |
| <kbd>前端讀書會（環境搭建、單元測試實作）</kbd> | 2025/03/27 |
| <kbd>前端讀書會（後端首次參與）</kbd> | 2025/03/13 |
| <kbd>前端讀書會</kbd> | 2025/03/06 |
| <kbd>前端讀書會</kbd> | 2025/03/04 |
| <kbd>前端讀書會</kbd> | 2025/02/21 |
| <kbd>前端讀書會</kbd> | 2025/02/19 |
| <kbd>前端讀書會</kbd> | 2025/02/18 |
| <kbd>研究方向討論</kbd> | 2025/02/17 |
| <kbd>研究方向討論</kbd> | 2025/02/10 |

</div>


<a v-after target="_blank"  href="https://www.notion.so/ewill-software/All-Meeting-Data-200d6e303b5c809caea4dabcb9caab87" class="abs-tr top-12 right-15">
  Read more in the docs
</a>


<style>
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}
.overflow-y-auto::-webkit-scrollbar-track {
  background: #2c2c2c;
  border-radius: 4px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #6b6b6b;
  border-radius: 4px;
}
.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #8e8e8e;
}
.overflow-y-auto table th {
  position: sticky;
  top: 0;
  background: #2c2c2c;
  z-index: 1;
}
</style>

---

# 目前的執行狀況 - 讀書會
我們認為應該培養對於前端測試的基本認知與技術熟悉度，才能有效評估前端測試導入對於團隊的價值

初期我們選用 [《前端測試指南：策略與實踐》(Frontend Testing Guide: Strategies and Practices)](https://www.cythilya.tw/2024/06/06/frontend-testing-guide-strategies-and-practices/) 作為初探前端測試的敲門磚。


2025/2/10 - 2025/2/19 Vicky、Eric 開始自學測試相關知識，從《前端測試指南：策略與實踐》撰寫[學習文件](https://www.notion.so/ewill-software/1d8d6e303b5c80c78a94f74804cf193c)

2025/02/21 - 首次與團隊分享[前端測試的種類](https://www.notion.so/ewill-software/1d8d6e303b5c80c78a94f74804cf193c?source=copy_link#1d8d6e303b5c8043bcb3f4ce6ecc672d)

<Glow glow="top-right" />


---

# 執行到至今，有哪些問題或疑問 - 個人訪談
<Glow glow="bottom-right" />

第一次問卷調查後，我們發現團隊成員對於導入測試的態度不一，所以為了提煉更深入的聲音，我們進行了第二次的訪談，這次與上次不同的是以「個人訪談」的方式進行，為了讓每一個人能說出最真實的想法。

- 2025/06/09 ～ 2025/06/11 針對小組成員一對一訪談
- 2025/06/18 同步「一對一訪談」整理後結果