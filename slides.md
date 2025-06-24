---
# You can also start simply with 'default'
highlighter: shiki
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
css: unocss
colorSchema: dark
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
<Glow :glowSeed="false"/>

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

# 我們對單元測試的初步理解
<Glow glow="bottom-right" />

為了更了解每一位前端成員對於「前端測試」的個人見解，我們在 2025/5/13 展開問卷調查，蒐集團隊成員學習前端測試至今的理解。

<ul>
  <li>
    2025/05/13 ～ 2025/05/15 問卷調查
  </li>
  <li>
    2025/05/15 針對問卷調查內容與前端團隊同步討論
  </li>
</ul>


[learn more](https://www.notion.so/ewill-software/1f2d6e303b5c80c986cae42bd700dd3c)

<!-- 結合問卷與概念導入 -->


---
layout: center
---

<Glow glow="top" />

<div flex="~ col items-center justify-center w-full">

  <h2 flex="~ col" text-center>
    <div text-center flex="col gap-2" transition duration-500 :class="$clicks < 2 ? 'translate-y-20' : ''">
      <span
        flex="~ gap-2 items-center justify-center"
        text-hex-0e8e85 transition duration-500 text-1.5em
        :class="$clicks < 1 ? 'scale-150' : ''"
      >
        我們實際做了什麼？
      </span>
    </div>
  </h2>

  <div grid="~ cols-2 gap-4" mt4 w-full>
    <div v-click="3" forward:delay-400 flex="~ col items-center gap-2" transition duration-500>
      <p>11 次 讀書會</p>
    </div>
    <div v-click="3" forward:delay-400 flex="~ col items-center gap-2" transition duration-500>
      <p>1 次 問卷調查</p>
    </div>
    <div v-click="3" forward:delay-400 flex="~ col items-center gap-2" transition duration-500>
      <p>5 次 個人訪談調查</p>
    </div>
    <div v-click="3" forward:delay-400 flex="~ col items-center gap-2" transition duration-500>
      <p>9 次 討論會議</p>
    </div>
  </div>
</div>


---

# 前端測試導入行動紀錄總覽

<Glow glow="top-right" />

<div class="h-[90dvh] max-h-[100%] overflow-y-auto">

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

<!-- 描述讀書會、學習歷程與推進進度 -->

---

# 讀書會
<Glow glow="top-right" />

我們認為應該培養對於前端測試的基本認知與技術熟悉度，才能有效評估前端測試導入對於團隊的價值

初期我們選用 [《前端測試指南：策略與實踐》(Frontend Testing Guide: Strategies and Practices)](https://www.cythilya.tw/2024/06/06/frontend-testing-guide-strategies-and-practices/) 作為初探前端測試的敲門磚。


2025/2/10 - 2025/2/19 開始自學測試相 關知識，從《前端測試指南：策略與實踐》撰寫[學習文件](https://www.notion.so/ewill-software/1d8d6e303b5c80c78a94f74804cf193c)

2025/02/21 - 首次與團隊分享[前端測試的種類](https://www.notion.so/ewill-software/1d8d6e303b5c80c78a94f74804cf193c?source=copy_link#1d8d6e303b5c8043bcb3f4ce6ecc672d)



<!-- 描述讀書會、學習歷程與推進進度 -->



---

# 我們遇到了哪些問題？
<Glow glow="bottom-right" />

第一次問卷調查後，我們發現團隊成員對於導入測試的態度不一，所以為了提煉更深入的聲音，我們進行了第二次的訪談，這次與上次不同的是以「個人訪談」的方式進行，為了讓每一個人能說出最真實的想法。

- 2025/06/09 ～ 2025/06/11 針對小組成員一對一訪談
- 2025/06/18 同步「一對一訪談」整理後結果

<a target="_blank"  href="https://www.notion.so/ewill-software/All-Meeting-Data-200d6e303b5c809caea4dabcb9caab87">
  Read more in the docs
</a>

<div mt-10  flex="~ justify-center">
  <span  v-mark="{ at: 2, type: 'circle', color: '#0e8e85' }">
    <div v-click="1" w-180 h-30 py-4 px-10 flex="~ items-center justify-center">
      從訪談內容可以看出，雖然團隊成員對測試的具體實施方式有不同看法，但在核心問題上已經形成了相當程度的共識。
    </div>  
  </span>
</div>


<!-- 結合訪談與反思，鋪陳未來方向 -->

---

# 團隊對測試的共識與分歧


最重要的發現是：團隊並不反對測試，而是希望能夠以理性、有效的方式導入測試。大家都認同測試的價值，但更關心的是如何避免「為了測試而測試」的情況。


<Glow glow="center" />

<p>關鍵的分歧點在於：</p>
<div mb-4>
  <span class="font-bold">TDD vs TLD：</span>
  應該先寫測試還是先開發功能？
  <span text-hex-0e8e85 font-bold>
    <span v-mark="1">
      團隊內有不同偏好，期待找到最適合自身流程的平衡點。
    </span>
  </span>
</div>
<div mb-4>
  <span class="font-bold" >Test Case 主導權：</span>
    測試內容應由誰來決定？
    <span text-hex-0e8e85 font-bold>
      <span v-mark="1">
        需明確分工與協作機制。
      </span>
    </span>  
</div>
<div mb-4>
  <span class="font-bold">測試粒度：</span>
    測試要做到多細？
    <span text-hex-0e8e85 font-bold>
      <span v-mark="1">
        需根據專案特性與風險評估調整。 
      </span>
    </span>
</div>

共同的期待是：
<ul>
  <li><span class="font-bold">有清楚的測試規範與開發流程</span></li>
  <li><span class="font-bold">有經驗者實際指導與帶領</span></li>
  <li><span class="font-bold">測試能真正產生實質效益</span></li>
  <li><span class="font-bold">測試不應成為開發負擔</span></li>
</ul>

<!-- 整理大家想法、痛點、關注點 -->

---
src: './reuse/thanks.md'
---