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
從去年 2024 年 11 月開始，歷時將近一年，我們第一階段的成果即將呈現。首先，讓我們為這段時間的努力鼓掌 👏

今天想藉由這份報告，與大家回顧過往成果並聚焦下一步規劃。

【報告架構】

📍 **回顧與成果**
• 導入 Vuetify 初期遇到的三大挑戰
• 專案目標與第一階段關鍵成果展示
• 標準化協作流程的建立（值得持續保持的亮點）

📍 **未來規劃**
• 第二階段策略初步規劃（需與 Adam 共同討論）
• 資源需求評估與團隊擴編考量
• 潛在風險識別與應對措施

📍 **持續優化**
• 效益追蹤指標建議，讓團隊有依循方向
• 目前前端、UIUX 團隊的實作測試安排
• 階段性成就回顧與未來展望
-->

---

# 導入 Vuetify 初期的三大挑戰

我們先來看看當初遇到了哪些問題

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
【動畫：三個卡片依序出現】

去年 11 月導入 Vuetify 時，我們遇到三個核心問題：

第一個出現的是「技術債務累積」：
- 前端大量使用 deep + !important 覆蓋樣式
- 每次客製化都要逐層查看 DOM 結構，維護成本越來越高

第二個是「跨部門溝通成本」：
- UIUX、PM 對 Vuetify 框架認知不足
- 團隊成員理解不一致，專案溝通時間大幅增加

第三個是「模組重用性低」：
- 設計模組缺乏彈性，無法適應不同專案需求
- 專案中頻繁需要重新定義元件，重複造輪子

這三個問題互相影響，形成惡性循環，阻礙了我們的開發效率。
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
【動畫：整個目標區塊一次性出現】

針對這三大挑戰，我們制定了 Vuetify 與設計系統整合機制，核心目標如下：

統一的 UI 元件規範與實作標準
- 避免各自為政，建立一致的開發規範
- 從源頭解決技術債務累積問題

提升跨部門協作效率  
- 讓 UIUX 和開發團隊有共同語言
- 建立標準化的溝通流程和交付機制

建立可重用且彈性的前端模組架構
- 打造真正可重用的元件系統
- 減少重複開發，提升開發效率

這三個目標環環相扣，共同構成我們的整合機制基礎。
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
【動畫：先顯示兩個成果區塊，然後顯示對比圖片】

第一階段我們取得了顯著成果：

左側「UI 元件 & Guideline 改版」：
- 完成 Vuetify 核心元件的初步定義與源碼研究
- 建立了設計與開發的一致規範
- 解決了跨部門認知不一致的問題

右側「前端模組化成效」：
- 優化、標準化的元件實作方式
- 最直觀的指標：!important 使用量從 114 個降到 0 個

【圖片對比出現】
這個數字變化不只是技術指標，更代表：
- CSS 架構變得更健康
- 維護性大幅提升  
- 技術債務得到根本性解決

這證明我們的整合機制真正有效！
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

<!-- 
講稿

【動畫：三個階段依序出現，每個階段都有箭頭連接】

我們建立的標準作業流程解決了跨部門溝通問題：

第一階段【v-click="1" 出現】：前端源碼研究
- 前端團隊深入研究 Vuetify 組件特性
- 理解框架限制和技術可能性
- 進行初步的元件定義和規格分析

第二階段【v-click="2" 出現】：撰寫規格文件  
- 將技術發現轉換為設計規格文件
- 提供 UIUX 團隊制定 guideline 的技術基礎
- 確保設計方案在技術上可實現

第三階段【v-click="3" 出現】：定義最終模組
- 依據 guideline 討論結果定義最終實作
- 確保設計意圖與技術實現完美結合
- 產出可重用的標準化模組

這個循環流程確保了設計與開發的完美一致性！
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
【動畫：左右兩個區塊同時出現】

第二階段將解決更高層級的整合問題：

🔧 左側「元件定義」部分：
我們還有許多常用元件需要標準化：
- Form、Global Layout：最複雜但最常用的元件
- Tooltip、OTP Input、Alert：提升使用者體驗的關鍵元件  
- Badges、Chips、Editor：豐富互動功能的元件
- Snackbars、Data-Iterators：資訊展示與回饋元件

📱 右側「頁面模組行為定義」部分：
目前第一階段的侷限是只處理了 UI 元件，缺乏頁面層級規範：
- 表單驗證流程標準化：統一驗證邏輯和錯誤提示方式
- 頁面跳轉規範：確保使用者導航體驗一致
- Loader 顯示時機：統一載入狀態的處理方式  
- 使用者互動回饋機制：如編輯頁面離開時的確認跳窗

從元件到頁面，我們要建立完整的設計系統！
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
【動畫：三個資源需求卡片同時出現】

要實現第二階段目標，我們需要擴大合作範圍：

新增角色：SA（系統分析師）
- 頁面行為定義涉及複雜的業務邏輯
- 需要系統分析師協助制定頁面流程規範
- 確保技術實現符合業務需求

技術整合：前後端協作
- 這不只是前端的問題
- 後端 API 設計也要配合前端模組標準
- 建立前後端資料流傳遞的統一標準

時程規劃：分階段交付價值
- 第一階段：已經可用，提升當前開發效率
- 第二階段：達到開箱即用的完整體系
- 讓團隊在改善中持續受益，而不是等到全部完成

這種漸進式改善確保我們持續創造價值！
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
【動畫：兩個風險卡片依序出現】

我們需要識別並管控潛在風險：

量化指標缺失【左側出現】
- 目前尚未建立完整的效益衡量機制
- 需要制定開發時間、錯誤率、一致性等基準指標
- 沒有數據就無法證明改善效果，也難以持續優化

實戰驗證不足【右側出現】  
- guideline 尚未在實際專案中大規模應用
- 理論再完美，都需要透過真實專案來驗證
- 小範圍測試無法發現所有潛在問題

風險管控的核心策略：
1. 建立 baseline：設定改善前的基準數據
2. 階段式驗證：從小專案到大專案逐步擴展應用
3. 快速迭代：發現問題立即調整，不等到完美才推出

我們要在風險可控的範圍內，持續驗證和改善！
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

<!-- 講稿
【動畫：兩個團隊指標區塊同時出現】

建立量化指標追蹤機制，讓改善效果可視化：

前端團隊關注指標：
- 人力支援與同組交接時間：標準化後應該能大幅縮短
- 前端 & UIUX 溝通成本：有了共同語言，溝通應該更高效
- 頁面切版時間：使用標準模組應該能加速開發

UIUX 團隊關注指標：
- 交接成本降低：設計交付給開發的流程應該更順暢
- 共用元件、視覺稿交付時間：標準化流程應該能提升效率
- **設定共用元件時間差異**：這是最重要的指標！

為什麼「設定共用元件時間差異」是重點？
- 這直接反映設計系統的效益
- 共用元件設計時間縮短 = 設計效率提升
- 可以量化設計系統為團隊帶來的實際價值

透過這些指標，我們能持續優化並證明改善效果！
-->

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
      <p class="text-blue-400 text-xs flex items-center"><span class="i-mdi-lightbulb mr-1"></span>透過實際專案驗證模組可用性</p>
    </div>
  </div>

  <div v-click flex="~ col items-start gap-3"  class="bg-purple-100/10 border border-purple-300/20 rounded-lg p-6">
    <h3 class="text-purple-200 font-bold text-xl flex items-center">
      <div class="i-mdi-palette text-2xl mr-3"></div>
      UIUX 團隊
    </h3>
    <p class="text-purple-300 text-sm">這週三開始實作 sideproject，週五收集回饋意見。</p>
    <div class="bg-purple-200/10 rounded p-2 w-full">
      <p class="text-purple-400 text-xs flex items-center"><span class="i-mdi-target mr-1"></span>快速迭代收集使用體驗</p>
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
【動畫：左右兩個團隊區塊依序出現】

我們不只建立標準，更重要的是實際驗證：

前端團隊【左側出現】：
- 目前 Lily 請偉倫使用模組實作專案頁面
- 記錄遇到的問題回饋給 Aaron & me
- 透過實際專案驗證模組可用性
- 這是最真實的使用情境測試

UIUX 團隊【右側出現】：
- 這週三開始實作 sideproject
- 週五收集回饋意見
- 快速迭代收集使用體驗
- 短週期驗證讓我們能快速調整

這種雙軌並行的驗證方式：
- 確保理論與實務的結合
- 及早發現問題並調整方向  
- 讓改善過程更加敏捷有效
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
【動畫：三個成就卡片同時出現，帶有動畫效果】

回顧這近一年的努力，我們取得了三個關鍵成就：

標準作業流程【綠色，脈衝動畫】
- 成功建立 Vuetify 整合的標準作業流程
- 三階段循環確保設計與開發一致性
- 解決了「各自為政」的問題，有了清楚的協作方式

技術債務解決【藍色，脈衝動畫】  
- 解決初期技術債務累積問題
- 最直觀的證據：從 114 個 !important 到 0 個
- CSS 架構變得更健康，維護性大幅提升

協作效率提升【紫色，脈衝動畫】
- 提升跨部門協作效率
- 設計和開發團隊有了共同語言
- 減少溝通成本，加速專案進行

這三個成就完美對應並解決了當初的三大挑戰！
我們不只是解決問題，更建立了可持續的改善機制。
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
【動畫：三個階段卡片同時出現】

我們採用漸進式的價值實現策略：

第一階段完成（當前狀態）
- UI 元件標準化，建立設計與開發協作基礎
- 已經可以提升開發效率，減少技術債務
- 為團隊提供立即可見的改善效果

第二階段完成（未來目標）
- 頁面行為規範化，實現開箱即用的模組體系  
- 新專案可以快速啟動，大幅縮短開發週期
- 達到真正的標準化和可重用性

持續優化願景（長期目標）
- 建立完整的 Vuetify 整合標準
- 包含完整元件庫、標準化流程、維護機制
- 讓新功能開發能快速套用現有模組，徹底減少重複造輪子

這不只是技術層面的改進，更是整個開發文化的轉變：
從「各自解決問題」轉向「共建標準體系」
從「重複造輪子」轉向「積木式開發」

我們正在建構一個可持續發展的開發生態系統！
-->

---
src: './reuse/thanks.md'
---
