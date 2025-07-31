---
# You can also start simply with 'default'
highlighter: shiki
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
css: unocss
colorSchema: dark
remoteAssets: true
export:
  width: 1920
  height: 1080

# some information about your slides (markdown enabled)
title: Vuetify 設計系統整合專案報告
info: |
  ## Vuetify 設計系統整合專案報告
  建立 Vuetify 與設計系統的整合機制
# apply unocss classes to the current slide
class: text-center w-full h-full
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

# Vuetify 設計系統整合報告

建立統一 UI 元件規範與協作機制

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# 導入 Vuetify 初期的三大挑戰

整合機制前，我們先來看看當初遇到了哪些問題

<div v-click class="grid grid-cols-3 gap-4 mt-6 ">
  <div class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-4">
    <h3 class="font-bold">技術債務累積</h3>
    <p class="text-blue-400 text-sm">前端大量使用 deep + !important 覆蓋樣式</p>
  </div>

  <div class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-4">
    <h3 class="font-bold">跨部門溝通成本</h3>
    <p class="text-blue-400 text-sm">UIUX、PM 對 Vuetify 框架認知不足</p>
  </div>

  <div class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-4">
    <h3 class="font-bold">模組重用性低</h3>
    <p class="text-blue-400 text-sm">設計模組缺乏彈性，頻繁重新定義元件</p>
  </div>
</div>

<!-- 講稿
這些問題導致了：
1. 技術債務累積：每次客製化都要逐層查看DOM結構，維護成本越來越高
2. 跨部門溝通成本：團隊成員對框架理解不一致，增加溝通時間
3. 模組重用性低：缺乏標準化，導致重複造輪子的情況
-->

---

# 專案目標

建立 Vuetify 與設計系統的整合機制

<div v-click>
<div class="grid grid-cols-1 gap-4">
<div class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-4 flex items-center">
<div class="i-mdi-clipboard-text text-blue-300 text-2xl mr-4"></div>
<span class="text-blue-200">統一的 UI 元件規範與實作標準</span>
</div>

<div class="bg-green-100/10 border border-green-300/20 rounded-lg p-4 flex items-center">
<div class="i-mdi-handshake text-green-300 text-2xl mr-4"></div>
<span class="text-green-200">提升跨部門協作效率</span>
</div>

<div class="bg-purple-100/10 border border-purple-300/20 rounded-lg p-4 flex items-center">
<div class="i-mdi-wrench text-purple-300 text-2xl mr-4"></div>
<span class="text-purple-200">建立可重用且彈性的前端模組架構</span>
</div>
</div>
</div>

<!-- 講稿
我們的解決方案聚焦在三個核心目標：
1. 統一標準：建立一致的UI元件規範，避免各自為政
2. 協作效率：讓UIUX和開發團隊有共同語言，減少溝通成本
3. 模組架構：打造真正可重用的元件系統，避免重複開發
-->

---

# 第一階段關鍵成果

UI 元件標準化與前端模組重構的具體成效

<div v-click.hide class="grid grid-cols-2 gap-6 mt-6 absolute top-35 left-8 right-8">
  <div class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-6">
    <h3 class="font-bold text-xl mb-4">
      UI 元件 & Guideline 改版
    </h3>
    <ul class="text-blue-300 text-sm space-y-2">
      <li>完成 Vuetify 核心元件的初步定義與源碼研究</li>
      <li>建立一致設計與開發的設計規範</li>
    </ul>
  </div>

  <div class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-6">
    <h3 class="font-bold text-xl mb-4">
      前端模組化成效
    </h3>
    <ul class="text-blue-300 text-sm space-y-2">
      <li>優化、標準化的元件實作方式</li>
      <li>!important 使用量從 114 個降到 0 個</li>
    </ul>
  </div>
</div>

<div v-click class="absolute top-40 left-8 right-8">
  <div class="grid grid-cols-2 gap-8 text-center">
    <div class="bg-slate-900/20 border border-slate-500 rounded-lg p-4">
      <img src="/public/important-0.png" class="w-full mb-2" />
      <div class="text-slate-400 font-bold text-lg">
      <span text-red v-mark.red.underline.delay300="3">新模組：0 個 !important</span>
      </div>
    </div>
    <div class="bg-slate-900/20 border border-slate-500 rounded-lg p-4">
      <img src="/public/important-114.png" class="w-full mb-2" />
      <div class="text-slate-400 font-bold text-lg">舊模組：114 個 !important</div>
    </div>
  </div>
</div>

<!-- 講稿
第一階段的最大成就是技術債務的清理：
- UI元件標準化：建立了核心元件的統一規範
- 前端重構成效：最直觀的指標是!important的使用量大幅下降
- 這代表我們的CSS架構更加健康，維護性大幅提升
-->

---

# 標準作業流程建立

三階段循環流程，確保設計與開發的一致性

   <div flex="~ justify-between items-center gap-4" mt-10>
  <div v-click="1" flex="~ items-center gap-4" class="w-[33%]">
  <div class="bg-slate-100/10 border border-slate-300/20 rounded-lg p-4 text-center flex-1">
    <div class="i-mdi-numeric-1-circle text-slate-300 text-3xl mb-2 mx-auto"></div>
    <p class="text-sm text-blue-300">前端源碼研究針對 Vuetify 組件進行初步定義</p>
  </div>

  <div class="i-mdi-arrow-right text-gray-400 text-3xl animate-pulse"></div>
  </div>

  <div v-click="2" flex="~ items-center gap-4" class="w-[33%]">
  <div class="bg-slate-100/10 border border-slate-300/20 rounded-lg p-4 text-center flex-1">
    <div class="i-mdi-numeric-2-circle text-slate-300 text-3xl mb-2 mx-auto"></div>
    <p class="text-sm text-blue-300">撰寫規格文件<br>供 UIUX 定義 guideline</p>
  </div>

  <div class="i-mdi-arrow-right text-gray-400 text-3xl animate-pulse"></div>
  </div>

  <div v-click="3" flex="~ items-center gap-4" class="w-[calc(33%-52px)]">
  <div class="bg-slate-100/10 border border-slate-300/20 rounded-lg p-4 text-center flex-1">
    <div class="i-mdi-numeric-3-circle text-slate-300 text-3xl mb-2 mx-auto"></div>
    <p class="text-sm text-blue-300">定義最終模組<br>依據 guideline 討論結果</p>
  </div>
  </div>
</div>

<!-- 講稿
這個三階段流程解決了之前跨部門溝通的問題：
1. 前端先做技術分析，理解框架限制和可能性
2. 將技術規格轉換為設計文件，讓UIUX有依據制定guideline
3. 根據設計guideline最終確定實作方式
這樣的循環確保技術可行性與設計需求的平衡
-->

---

# 第二階段策略規劃

從元件標準化擴展到頁面行為規範化

<div class="grid grid-cols-2 gap-8 mt-6">

<div>
  <h3 class="text-xl font-bold mb-4 text-green-200 flex items-center"><div class="i-mdi-cube-outline mr-2"></div>元件定義</h3>

  <ul>
    <li>Form、global layout</li>
    <li>Tooltip</li>
    <li>OTP Input</li>
    <li>Alert</li>
    <li>Badges</li>
    <li>Chips</li>
    <li>Editor</li>
    <li>Snackbars</li>
    <li>Data-Iterators</li>
  </ul>
</div>

<div v-click>
  <h3 class="text-xl font-bold mb-4 text-green-200 flex items-center"><div class="i-mdi-sitemap mr-2"></div>頁面模組行為定義</h3>

  <p class="text-lg mb-3">
  <span text-red v-mark.red.underline.delay300="2">
    <strong>第一階段侷限：僅定義 UI 元件，缺乏頁面層級規範</strong>
  </span>
  </p>

  <ul>
    <li>表單驗證流程標準化</li>
    <li>頁面跳轉規範</li>
    <li>Loader 顯示時機</li>
    <li>使用者互動回饋機制</li>
  </ul>
</div>
</div>

<!-- 講稿
第二階段將解決更高層級的問題：
1. 元件層面：還有許多常用元件需要標準化，特別是Form和Global Layout
2. 頁面層面：目前只處理了元件，但頁面行為也需要規範
- 表單驗證：統一驗證邏輯和錯誤提示
- 頁面狀態：Loading、錯誤處理、跳轉確認等
- 互動回饋：讓使用者清楚了解操作結果
-->

---

# 資源需求評估

擴大合作範圍，持續整合機制

<div v-click class="grid grid-cols-3 gap-6">
  <div class="bg-slate-100/10 border border-slate-300/20 rounded-lg p-4 text-center">
    <div class="i-mdi-account-plus text-slate-300 text-3xl mb-2 mx-auto"></div>
    <h4 class="text-blue-200 font-bold mb-2">新增角色</h4>
    <p class="text-sm text-blue-300">SA（系統分析師）<br>參與頁面行為定義</p>
  </div>

  <div class="bg-slate-100/10 border border-slate-300/20 rounded-lg p-4 text-center">
    <div class="i-mdi-link-variant text-slate-300 text-3xl mb-2 mx-auto"></div>
    <h4 class="text-blue-200 font-bold mb-2">技術整合</h4>
    <p class="text-sm text-blue-300">前後端共同制定<br>資料流傳遞標準</p>
  </div>

  <div class="bg-slate-100/10 border border-slate-300/20 rounded-lg p-4 text-center">
    <div class="i-mdi-timeline-clock text-slate-300 text-3xl mb-2 mx-auto"></div>
    <h4 class="text-blue-200 font-bold mb-2">時程規劃</h4>
    <p class="text-sm text-blue-300">第一階段：可用<br>第二階段：開箱即用</p>
  </div>
</div>

<!-- 講稿
第二階段需要更多跨職能的合作：
1. 新增SA角色：頁面行為涉及業務邏輯，需要系統分析師協助定義
2. 技術整合：不只是前端問題，後端API設計也要配合
3. 分階段交付：第一階段已經可以提升開發效率，第二階段將達到真正的開箱即用
-->

---

# 風險管控與建議

識別潛在問題，建立持續改善機制

<div class="grid grid-cols-2 gap-6 mt-6">
  <div v-click class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-6">
    <h3 class="text-blue-200 font-bold text-lg mb-4 flex items-center">
      <div class="i-mdi-alert-circle text-2xl mr-3"></div>
      量化指標缺失
    </h3>
    <p class="text-blue-300 text-sm">尚未建立效益衡量機制（開發時間、錯誤率、一致性等）</p>
  </div>

  <div v-click class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-6">
    <h3 class="text-blue-200 font-bold text-lg mb-4 flex items-center">
      <div class="i-mdi-test-tube text-2xl mr-3"></div>
      實戰驗證不足
    </h3>
    <p class="text-blue-300 text-sm">guideline 尚未大規模應用於實際專案</p>
  </div>
</div>

<!-- 講稿
風險管控的重點在於：
1. 量化指標：我們需要建立baseline來衡量改善程度
2. 實戰驗證：理論很好，但需要在真實專案中驗證

關注指標分為兩個面向：
- 前端：開發效率、交接成本、溝通效率
- UIUX：特別關注共用元件的設計時間，這是最直接的效益指標
-->

---

# 未來可關注指標

整體專案效益：量化指標建立與實戰驗證成果

<div v-click>
<div class="grid grid-cols-2 gap-8">
  <div class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-4">
    <h4 class="font-bold mb-2">前端團隊</h4>
    <ul class="text-blue-300 text-sm space-y-1">
      <li>人力支援，同組交接時間</li>
      <li>前端 & UIUX 溝通成本是否降低</li>
      <li>頁面切版時間</li>
    </ul>
  </div>

  <div class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-4">
    <h4 class="font-bold mb-2">UIUX 團隊</h4>
    <ul class="text-blue-300 text-sm space-y-1">
      <li>交接成本降低</li>
      <li>共用元件、視覺稿交付時間</li>
      <li>設定共用元件時間差異（主要關注）</li>
    </ul>
  </div>
  </div>
</div>

---

# 目前執行現況

實際導入狀況與團隊回饋收集

<div class="grid grid-cols-2 gap-8 mt-6">
  <div v-click flex="~ col items-start gap-3" class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-6">
    <h3 class="text-blue-200 font-bold text-xl flex items-center">
      <div class="i-mdi-code-tags text-2xl mr-3"></div>
      前端團隊
    </h3>
    <p class="text-blue-300 text-sm">目前 Lily 請偉倫使用模組實作專案頁面，並記錄遇到的問題回饋給 Aaron & me。</p>
    <div class="bg-blue-200/10 rounded p-2 w-full">
      <p class="text-blue-400 text-xs flex items-center"><div class="i-mdi-lightbulb mr-1"></div>透過實際專案驗證模組可用性</p>
    </div>
  </div>

  <div v-click flex="~ col items-start gap-3"  class="bg-purple-100/10 border border-purple-300/20 rounded-lg p-6">
    <h3 class="text-purple-200 font-bold text-xl flex items-center">
      <div class="i-mdi-palette text-2xl mr-3"></div>
      UIUX 團隊
    </h3>
    <p class="text-purple-300 text-sm">這週三開始實作 sideproject，週五收集回饋意見。</p>
    <div class="bg-purple-200/10 rounded p-2 w-full">
      <p class="text-purple-400 text-xs flex items-center"><div class="i-mdi-target mr-1"></div>快速迭代收集使用體驗</p>
    </div>
  </div>
</div>

<style>
.slidev-layout p {
  margin-top: 0;
  margin-bottom: 0;
  height: 50px;
}
</style>

<!-- 講稿
我們不只是建立標準，更重要的是實際驗證：
1. 前端：透過偉倫在實際專案中使用，收集真實的使用體驗和問題
2. UIUX：透過side project快速驗證設計流程，週五就能收到回饋
這種快速驗證的方式讓我們能及時調整方向
-->

---

# 階段性成就

已完成的關鍵里程碑與具體效益

<div v-click class="grid grid-cols-3 gap-6 mt-6">
  <div class="bg-green-100/10 border border-green-300/20 rounded-lg p-4 text-center">
    <div class="i-mdi-check-circle text-green-300 text-4xl mb-2 mx-auto animate-pulse"></div>
    <h4 class="text-green-200 font-bold mb-2">標準作業流程</h4>
    <p class="text-green-300 text-sm">成功建立 Vuetify 整合的標準作業流程</p>
  </div>

  <div class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-4 text-center">
    <div class="i-mdi-wrench text-blue-300 text-4xl mb-2 mx-auto animate-pulse"></div>
    <h4 class="text-blue-200 font-bold mb-2">技術債務解決</h4>
    <p class="text-blue-300 text-sm">解決初期技術債務累積問題</p>
  </div>

  <div class="bg-purple-100/10 border border-purple-300/20 rounded-lg p-4 text-center">
    <div class="i-mdi-handshake text-purple-300 text-4xl mb-2 mx-auto animate-pulse"></div>
    <h4 class="text-purple-200 font-bold mb-2">協作效率提升</h4>
    <p class="text-purple-300 text-sm">提升跨部門協作效率</p>
  </div>
</div>

<!-- 講稿
三個主要成就代表我們解決了當初的三大挑戰：
1. 標準流程：有了清楚的協作方式，不再各自為政
2. 技術債務：從114個!important到0個，代表架構更健康
3. 協作效率：設計和開發有了共同語言
-->

---

# 未來價值實現

兩階段規劃，從可用到開箱即用的完整體系

<div v-click>
  <div class="space-y-4">
  <div class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-4">
    <h4 class="text-blue-200 font-bold mb-2 flex items-center">
      <div class="i-mdi-flag text-xl mr-2"></div>
      第一階段完成
    </h4>
    <p class="text-blue-300 text-sm">UI 元件標準化，建立設計與開發協作基礎</p>
  </div>

  <div class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-4">
    <h4 class="text-blue-200 font-bold mb-2 flex items-center">
      <div class="i-mdi-target text-xl mr-2"></div>
      第二階段完成
    </h4>
    <p class="text-blue-300 text-sm">頁面行為規範化，實現開箱即用的模組體系</p>
  </div>

  <div class="bg-blue-100/10 border border-blue-300/20 rounded-lg p-4">
    <h4 class="text-blue-200 font-bold mb-2 flex items-center">
      <div class="i-mdi-infinity text-xl mr-2"></div>
      持續優化願景
    </h4>
    <p class="text-blue-300 text-sm">建立完整的 Vuetify 整合標準，包含完整元件庫、標準化流程、維護機制，讓新功能開發能快速套用現有模組，減少重複造輪子</p>
  </div>
</div>
</div>

<!-- 講稿
我們的規劃是漸進式的：
1. 第一階段：已經可以提升開發效率，減少技術債務
2. 第二階段：將達到真正的開箱即用，新專案可以快速啟動
3. 長期願景：建立完整的生態系統，讓開發變得更加順暢

這不只是技術改進，更是整個開發文化的轉變
-->

---
src: './reuse/thanks.md'
---
