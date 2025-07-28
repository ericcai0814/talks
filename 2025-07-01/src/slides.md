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
title: 前端測試調查報告
info: |
  ## 前端測試調查報告
  前端測試進程報告與問題研討
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

# 前端測試進程報告與問題研討

<Glow glow="center" :glowOpacity="1" :glowHue="5"/>

從調查到共識的前端測試推進之路

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->


---

# 我們對單元測試的初步理解

<Glow glow="right" :glowOpacity="0.2" :glowSeed="false" />

為了更了解每一位前端成員對於「前端測試」的個人見解，我們透過問卷調查的方式，蒐集團隊成員學習前端測試至今的理解。

<ul>
  <li>2025/05/13 ～ 2025/05/15 問卷調查</li>
  <li>2025/05/15 針對問卷調查內容與前端團隊同步討論</li>
</ul>

[Read more in the docs](https://www.notion.so/ewill-software/1f2d6e303b5c80c986cae42bd700dd3c)

<Timeline mt2 
  :start="'2025-05-10'"
  :end="'2025-05-20'"
  :dataSource="{
    prefix: 'Data Source：',
    href: 'https://www.notion.so/ewill-software/1f2d6e303b5c80c986cae42bd700dd3c',
    text: '前端測試調查 & 訪談'
  }"
  :groups="[
    { id: 1, content: '問卷調查階段' },
    { id: 2, content: '團隊討論階段' }
  ]" :items="[
    {
      id: 1,
      content: '問卷調查',
      group: 1,
      start: '2025-05-13',
      end: '2025-05-14',
      type: 'range',
      className: 'text-center rounded-lg! bg-blue:20! text-blue! border-blue:50!'
    },
    {
      id: 2,
      content: '團隊同步討論',
      group: 2,
      start: '2025-05-15',
      end: '2025-05-16',
      type: 'range',
      className: 'px2 rounded-lg! bg-green:20! text-green! border-green:50!'
    }
  ]" />


<!-- 
  [click] 為了能夠提煉每位成員最真實的想法，我們透過問卷的方式來進行調查。在歷經讀書會的初步學習後，我們希望進一步了解──大家在目前的專案經驗與知識背景下，對於「前端測試」這件事，有什麼樣的理解與看法。
  
  然後他們對測試的期待是什麼？他們擔心什麼？哪些地方是認同的？哪些又是存疑的？ 
-->

---
layout: center
class: text-center
---

<Glow glow="center" :glowOpacity="0.3" :glowSeed="false" />

<h1 important-text-5xl v-click>測試的價值與代價</h1>

<div v-click text-white:50 text-2xl line-height-relaxed>
前端測試能幫助團隊<span text-lime4 v-mark.lime.underline.delay300="2"> 提升程式碼品質</span>， 也能在<span text-yellow4 v-mark.yellow.underline.delay700="2">多人協作 </span>或<span text-yellow4 v-mark.yellow.underline.delay900="2"> 頻繁改動</span> 時提升穩定性與信心。
</div>

<div v-click text-white:50 text-2xl mt4 line-height-relaxed>
但測試<span text-red4 v-mark.red.underline.delay500="3"> 需要額外的溝通時間、開發時間、學習與維護成本</span>，導入時需根據<span text-white font-bold> 功能風險</span>、<span text-white font-bold>專案規模</span> 與<span text-white font-bold> 時程壓力</span> 審慎評估。
</div>

<!--

[click]
在訪談與問卷中，大家其實都提到了「測試的好處」，但同時也點出了實際會遇到的挑戰
在問卷調查後，前端們對於 "測試" 有了初步的理解，大方向來說已經可以提煉導入的價值與代價

[click]
前端測試能在多人協作與需求頻繁變動的情境下，  
有效守住關鍵邏輯，避免改 A 壞 B，  
提升系統穩定性與團隊信心。

舉例來說，當我們的表單元件被不同頁面共用時，只要改了一個欄位的邏輯，就可能影響多個流程；這時測試就能幫我們第一時間發現問題。

[click]
但測試撰寫與維護需投入額外時間與技術成本，  
若專案規模小、邏輯單純或時程緊迫，  
導入效益未必能即時體現，需依功能風險審慎評估。
-->

---

# 測試如何守護產品品質

<Glow glow="top-right" :glowOpacity="0.7" :glowSeed="false" />

<div class="grid grid-cols-2 gap-4">

```js [unit-test-example.js] {*|3|10-12|11}{at:1} twoslash
// the implementation
export function add(...args) {
  return args.reduce((a, b) => a + b, 0)
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('add', () => {
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
  })
}
```

```diff
- Expected
+ Received

- 1
+ -1

src/utils/test/addWithInSourceTest.js:11:20
      9|   it('add', () => {
     10|     expect(add()).toBe(0)
     11|     expect(add(1)).toBe(1)
       |                    ^
     12|     expect(add(1, 2, 3)).toBe(6)
     13|   })
```

</div>

<!-- 講稿：
這裡我們先展示一個簡單的加法（add）和減法（sub）函數，並且直接在原始碼裡寫下對應的測試。這種 in-source test 的寫法，可以讓我們在開發時就同步驗證功能正確性。測試會檢查 add 和 sub 是否能正確計算結果。
-->
<!-- 講稿：
接下來，我們模擬一個常見的開發情境：當我們修正或調整某個功能（例如 add），有時候會不小心影響到其他功能（例如 sub）。這裡用 diff block 展示，sub 原本是做減法，卻被誤改成加法。這種「改 A 壞 B」的狀況，在缺乏完整測試時很容易發生。
-->

<!-- 講稿：
最後，我們來看測試結果。可以看到 add 的測試全部通過，但 sub 的測試失敗了，因為我們誤把減法改成加法。這正好說明了測試的價值：它能幫助我們及早發現「回歸錯誤」，避免一個小改動影響到其他功能。這也是為什麼團隊需要建立自動化測試的共識。
-->

---
layout: center
---

<Glow glow="center" />

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

  <div grid="~ cols-2 gap-4" translate-y-10 w-full scale-150>
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

<Glow glow="top-right" :glowOpacity="0.7"/>

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


<a v-after target="_blank"  href="https://www.notion.so/ewill-software/All-Meeting-Data-200d6e303b5c809caea4dabcb9caab87" rel="noopener noreferrer" class="abs-tr top-12 right-15">
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
  background:rgb(80, 78, 78);
  z-index: 1;
}
</style>

<!-- 描述讀書會、學習歷程與推進進度 -->

---

# 讀書會

我們認為應該培養對於前端測試的基本認知與技術熟悉度，才能有效評估前端測試導入對於團隊的價值。

<Glow glow="right-bottom" :glowSeed="false" />

<div>
  <p>
    初期我們選用 <a href="https://www.cythilya.tw/2024/06/06/frontend-testing-guide-strategies-and-practices/" target="_blank" rel="noopener noreferrer">《前端測試指南：策略與實踐》Frontend Testing Guide: Strategies and Practices</a>
    作為初探前端測試的敲門磚。
  </p>
  <p>中後期我們選用前端主流測試 util，像是 Vitest、Vue-util-test ...等，理解相關 Feature 。</p>
  
  <div flex="~ gap-2" mt2>
    <DevToolsModule
      v-click icon="i-logos-vitest" name="Vitest" theme="yellow"
    />
    <DevToolsModule
      v-click icon="i-skill-icons-jest" name="Jest" theme="purple"
    />
    <DevToolsModule
      v-click icon="i-logos-testing-library" name="testing-library" theme="teal"
    />
    <DevToolsModule
      v-click icon="i-skill-icons-cypress-light" name="cypress" theme="default"
    />
    <DevToolsModule
      v-click icon="i-vscode-icons-file-type-vue" name="Vue utils test" theme="green"
    />
    <DevToolsModule
      v-click icon="i-logos-storybook-icon" name="Storybook" theme="pink"
    />
    <DevToolsModule
      v-after icon="i-ri-more-line" name="More..." border-dashed
    />
  </div>
</div>

<Glow glow="top-right" />

<ul mt2 v-click="7" :class="$click === 7 ? 'translate-y-20': ''">
  <p class="mb-1!">歷程</p>
  <li>
    2025/05/27-2025/06/19
    <a href="https://vitest.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
      Vites Feature 理解（計 16 項）
    </a>
  </li>
  <li>
    2025/04/18-2025/04/25
    <a href="http://192.168.50.231:81/Vicky/frontendtestingmilestone/-/tree/DEV/src/__test__/unit?ref_type=heads" target="_blank" rel="noopener noreferrer">
      元件測試實作（radio、select、input 等）
    </a>
  </li>
  <li>
    2025/03/27
    <a href="http://192.168.50.231:81/Vicky/frontendtestingmilestone" target="_blank" rel="noopener noreferrer">
      Gitlab <carbon:LogoGitlab /> 測試環境搭建、單元測試實作
    </a>
  </li>
  <li>
    2025/02/21- 2025/03/06 首次與前端團隊分享
    <a href="https://www.notion.so/ewill-software/1d8d6e303b5c80c78a94f74804cf193c?source=copy_link#1d8d6e303b5c8043bcb3f4ce6ecc672d" target="_blank" rel="noopener noreferrer">
      測試入門
    </a>
  </li>
  <li>
    2025/2/10 - 2025/2/19 開始自學測試相 關知識，從
    <a href="https://www.cythilya.tw/2024/06/06/frontend-testing-guide-strategies-and-practices/" target="_blank" rel="noopener noreferrer">
      《前端測試指南：策略與實踐》
    </a>
    撰寫學習文件
  </li>
</ul>

<a v-click="7" target="_blank"  href="https://www.notion.so/ewill-software/1b3d6e303b5c80ed94cfd6c1848a250b?source=copy_link#200d6e303b5c8093a67acaad5619aad6" rel="noopener noreferrer">
  Read more in the docs
</a>

<!-- 描述讀書會、學習歷程與推進進度 -->



---

# 我們遇到了哪些問題？

<Glow glow="bottom-right" :glowOpacity="0.6" :glowSeed="false"/>

第一次問卷調查後，我們發現團隊成員對於導入測試的態度不一，所以為了提煉更深入的聲音，我們進行了第二次的訪談，這次與上次不同的是以「個人訪談」的方式進行，為了讓每一個人能說出最真實的想法。

- 2025/06/09 ～ 2025/06/11 針對小組成員一對一訪談
- 2025/06/18 同步「一對一訪談」整理後結果

<a target="_blank"  href="https://www.notion.so/ewill-software/218d6e303b5c808384e7ffc7d9614e21" rel="noopener noreferrer">
  Read more in the docs
</a>

<div mt-10  flex="~ justify-center">
  <span  v-mark.delay200="{ at: 2, type: 'circle', color: '#0e8e85', roughness: 3 }">
    <div v-click="1" w-180 h-30 py-4 px-10 flex="~ items-center justify-center">
      從訪談內容可以看出，雖然團隊成員對測試的具體實施方式有不同看法，但在核心問題上已經形成了相當程度的共識。
    </div>  
  </span>
</div>

<!-- 結合訪談與反思，鋪陳未來方向 -->

---
layout: cover
---

<h1 flex="~ col">
  <div text-2xl origin-top transition duration-500 :class="$clicks <= 1 ? 'scale-150' : 'op50'">
    <span>團隊對測試的 </span>
    <span v-click>阻礙點 </span>
  </div>
  <div mt1 forward:delay-300 v-click font-size-5>
    大家都認同測試的價值，但更關心如何避免「為了測試而測試」的情況，
  </div>
</h1>

<Glow glow="center" :glowOpacity="0.7" :glowSeed="false" />

---
layout: center
---

# 分歧

<Glow glow="center" />

<p>關鍵的阻礙點在於：</p>

<ul>
  <li mb-4 v-click="1">
    <span class="font-bold">TDD vs TLD：</span>
    應該先寫測試還是先開發功能？
    <span text-hex-0e8e85 font-bold>
      <span v-mark.underline.delay300="1">
        團隊內有不同偏好，期待找到最適合自身流程的平衡點。
      </span>
    </span>
  </li>
  <li mb-4 v-click="2">
    <span class="font-bold" >測試相關規格決策責任歸屬：</span>
      測試規格、內容應由誰來決定？
      <span text-hex-0e8e85 font-bold>
        <span v-mark.underline.delay300="2">
          團隊內分為兩派，需明確分工與協作機制。
        </span>
      </span>  
  </li>
  <li mb-4 v-click="3">
    <span class="font-bold">測試粒度：</span>
      測試要做到多細？
      <span text-hex-0e8e85 font-bold>
        <span v-mark.underline.delay300="3">
          需根據專案特性與風險評估調整。 
        </span>
      </span>
  </li>
  <li mb-4 v-click="4">
    <span class="font-bold">專案流程：</span>
      各階段要做哪些事？
      <span text-hex-0e8e85 font-bold>
        <span v-mark.underline.delay300="4">
          團隊需訂定各階段測試工項、責任歸屬
        </span>
      </span>
  </li>
</ul>

<!-- 
  [click]
  測試撰寫時機：TDD vs TLD：
  團隊對於應該先寫測試還是先開發功能存在根本性分歧
    支持 TDD（測試驅動開發）- Lily 建議採用 TDD 流程，先寫測試再寫程式碼，幫助開發者更早釐清需求與功能邏輯。
    支持 TLD（開發後測試）- Kevin、Aaron、Chris、Vicky 傾向於系統開發完成後再撰寫測試，認為開發前很難預測實作方式，提前寫測試反而浪費時間。


  [click]
  測試相關規格決策責任歸屬： 
    開發主導派 - Kevin、Aaron 認為開發者最了解實作邏輯與潛在風險點，應由 PG 自行決定 test case。
    協作決策派 - Vicky、Chris、Lily 認為應由 SD/QA/PM 先定義測試規格，再由 PG 依據實作補充細節。

  [click]
  測試粒度：
    團隊對於測試要做到多細存在不同看法
    高覆蓋率派 - 認為應該追求高測試覆蓋率，確保每個功能都有對應測試
    關鍵路徑派 - 認為應該專注在關鍵業務邏輯和風險點，避免過度測試
    需根據專案特性、風險評估和時間成本來決定合適的測試粒度

  [click]
  專案流程：
    團隊對於各階段測試工項缺乏共識
    需求階段 - 是否要定義測試規格？由誰主導？
    分析階段 - 如何識別關鍵流程和測試重點？
    設計階段 - 測試總類、規格選擇的決策權責
    開發階段 - 測試與開發的時程安排和責任分工
    需要明確訂定各階段的測試工項、責任歸屬和交付標準
-->

---


# 個人訪談

<Glow glow="top-right" :glowOpacity="0.2" :glowHue="5"/>

<a v-after target="_blank" href="https://www.notion.so/ewill-software/218d6e303b5c808384e7ffc7d9614e21?source=copy_link#218d6e303b5c807dbac3ebc547434506" rel="noopener noreferrer" class="abs-tr top-12 right-15">
  Read more in the docs
</a>

<div grid="~ cols-1 gap-6" pt3>
  <!-- 心態層面 -->
  <div
    v-click="1"
    :class="[
      'transition-all duration-700',
      $clicks >= 4 ? 'opacity-0 -translate-y-20 pointer-events-none' : 'opacity-100 translate-y-0'
    ]"
    bg-lime:10 border="~ lime/50 rounded-lg"
  >
    <div flex="~ items-center gap-2" bg-lime:10 px4 py2 rounded><div i-tabler-heart text-xl invert-50/> 心態層面</div>
    <div ml2 p2 text-lime op80>
      <v-clicks>
        <ul>
          <li>
            測試價值不明，無法衡量效益
            <ul>
              <li>測試是否真的「值得做」缺乏量化指標（如重工降低、交接成本降低）【Vicky】</li>
              <li>測試通過 ≠ 邏輯正確，容易誤導開發者【Kevin】</li>
              <li>無法體驗實際效益 ⇒ 難以建立信任感【Aaron】</li>
            </ul>
          </li>
          <li>
            害怕浪費時間與錯誤實作
            <ul>
              <li>測試寫錯邏輯等於「白做工」或「多做工」【Kevin】</li>
              <li>寫太早會因實作改變導致重工【Kevin、Aaron】</li>
              <li>沒有經驗時，不知從何下手、怕踩坑【Vicky、Lily】</li>
            </ul>
          </li>
          <li>
            擔心壓縮開發時間
            <ul>
              <li>寫測試導致來不及開發【Vicky、Chris】</li>
            </ul>
          </li>
        </ul>
      </v-clicks>
    </div>
  </div>

  <!-- 流程與制度 -->
  <div
    v-click="7"
    :class="[
      'transition-all duration-700',
      $clicks >= 7 ? 'opacity-0 -translate-y-120 pointer-events-none' : ($clicks >= 4 ? 'opacity-100 -translate-y-100' : 'opacity-0 translate-y-40 pointer-events-none')
    ]"
    bg-gray:10 border="~ gray/50 rounded-lg"
  >
    <div flex="~ items-center gap-2" bg-gray:10 px4 py2 rounded><div i-mdi-format-list-bulleted text-xl invert-50 /> 流程與制度</div>
    <div ml2 p2 text-gray1>
      <v-clicks>
        <ul>
          <li>
            測試時機點不清、規範未明確
            <ul>
              <li>測試要什麼時候寫？前寫後寫各有擔憂【多位】</li>
              <li>測試命名、結構、內容無一致規範【Lily、Kevin】</li>
              <li>測試與開發進度衝突，無額外排測試時間【Chris】</li>
            </ul>
          </li>
          <li>
            關鍵流程、test case 責任歸屬不清
            <ul>
              <li>誰來定義「關鍵流程」沒有共識（PM？SD？SA？）【全員提及】</li>
              <li>test case 撰寫權責不明（是 QA、SD 還是 PG 主導？）【分歧明顯】</li>
              <li>沒有經驗時，不知從何下手、怕踩坑【Vicky、Lily】</li>
            </ul>
          </li>
          <li>
            專案流程職責不明確
            在軟體開發的四個主要階段「需求訪談 → 系統分析 → 系統設計 → 系統開發」中，團隊成員對於各階段應執行的測試相關工作缺乏共識
          </li>
        </ul>
      </v-clicks>
    </div>
  </div>

  <!-- 角色協作與溝通 -->
  <div
    v-click="8"
    :class="[
      'transition-all duration-700',
      $clicks >= 8 ? 'opacity-0 -translate-y-220 pointer-events-none' : ($clicks >= 7 ? 'opacity-100 -translate-y-200' : 'opacity-0 translate-y-20 pointer-events-none')
    ]"
    bg-orange:10 border="~ orange/50 rounded-lg"
  >
    <div flex="~ items-center gap-2" bg-orange:10 px4 py2 rounded><div i-mdi-account-group-outline invert-50 hue-rotate-180 text-xl /> 角色協作與溝通</div>
    <div ml2 p2 text-orange1>
      <v-clicks>
        <ul>
          <li>
            QA、前端角色邊界模糊
            <ul>
              <li>PG、SD、QA 在測試驗收與設計上的分工未統一【多位提到】</li>
            </ul>
          </li>
        </ul>
      </v-clicks>
    </div>
  </div>

  <!-- 技術與經驗 -->
  <div
    v-click="9"
    :class="[
      'transition-all duration-700',
      $clicks >= 9 ? 'opacity-0 -translate-y-250 pointer-events-none' : ($clicks >= 8 ? 'opacity-100 -translate-y-235' : 'opacity-0 translate-y-20 pointer-events-none')
    ]"
    bg-pink:10 border="~ pink/50 rounded-lg"
  >
    <div flex="~ items-center gap-2" bg-pink:10 px4 py2 rounded><div i-mdi-brain invert-50 text-xl /> 技術與經驗</div>
    <div ml2 p2 text-pink2>
      <v-clicks>
        <ul>
          <li>
            缺乏有經驗者帶領
            <ul>
              <li>初學者很難從文件理解實作重點，需要 mentor 或顧問協助【Vicky、Chris】</li>
            </ul>
          </li>
        </ul>
      </v-clicks>
    </div>
  </div>

  <!-- 專案實務限制 -->
  <div
    :class="[
      'transition-all duration-700',
      $clicks >= 11 ? 'opacity-0 -translate-y-300 pointer-events-none' : ($clicks >= 9 ? 'opacity-100 -translate-y-275' : 'opacity-0 translate-y-20 pointer-events-none')
    ]"
    bg-yellow:10 border="~ yellow/50 rounded-lg"
  >
    <div flex="~ items-center gap-2" bg-yellow:5 px4 py2 rounded><div i-mdi-alert-outline invert-50 text-xl /> 專案實務限制</div>
    <div ml2 p2 text-yellow2>
      <v-clicks>
        <ul>
          <li>
            專案開發與測試時間難以分離
            <ul>
              <li>擔心測試被壓縮進開發時程內，未被額外估時【Chris】</li>
              <li>多數需求在分析階段不夠清楚，導致測試無法前置【Aaron、Kevin】</li>
            </ul>
          </li>
          <li>
            技術環境尚未完善
            <ul>
              <li>CI 未建置，自動驗證難以落實，測試結果無法自動回饋，仰賴人工確認【Kevin】</li>
            </ul>
          </li>
        </ul>
      </v-clicks>
    </div>
  </div>
</div>

---
src: './reuse/thanks.md'
---

