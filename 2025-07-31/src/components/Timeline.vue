<script setup lang="ts">
import { DataSet, Timeline } from 'vis-timeline/standalone'
import { computed, onMounted, ref, watch } from 'vue'
import type { PropType } from 'vue'

const el = ref<HTMLElement | null>(null)


const props = defineProps({
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  dataSource: {
    type: Object as PropType<{
      prefix: string,
      href: string,
      text: string,
    }>,
    required: false,
  },
  groups: {
    type: Array as PropType<any[]>,
    default: () => [
      { id: 1, content: 'Blog' },
      { id: 2, content: 'Stages' },
      { id: 3, content: 'ESLint v8' },
      { id: 4, content: 'ESLint v9' },
    ],
    required: true,
  },
  items: {
    type: Array as PropType<any[]>,
    default: () => [
      {
        id: 1,
        content: 'RFC',
        group: 2,
        start: '2019-01-20',
        end: '2020-07-10',
        type: 'range',
        className: 'text-center rounded-lg! bg-amber:20! text-amber! border-amber:50!'
      },
      {
        id: 2,
        content: 'Implementation', 
        group: 2,
        start: '2020-07-11',
        end: '2023-07-14',
        type: 'range',
        className: 'text-center rounded-lg! bg-gray:20! text-gray! border-gray:50!'
      },
      {
        id: 3,
        content: 'Feature complete',
        group: 2, 
        start: '2023-07-16',
        end: '2025-05-12',
        type: 'range',
        className: 'text-center rounded-lg! bg-gray:20! text-gray! border-gray:50!'
      },
      {
        id: 4,
        content: 'Blog: Flat config rollout plans',
        group: 1,
        start: '2023-10-10',
        className: 'px2 rounded-lg! bg-green:20! text-green! border-green:50!'
      },
      {
        id: 5,
        content: 'Blog: Flat config introductions (3 parts)',
        group: 1,
        start: '2022-08-03',
        className: 'px2 rounded-lg! bg-green:20! text-green! border-green:50!'
      },
      {
        id: 6,
        content: 'Blog: What\'s coming in v9.0',
        group: 1,
        start: '2023-11-07',
        className: 'px2 rounded-lg! bg-lime:20! text-lime! border-lime:50!'
      },
      {
        id: 7,
        content: 'Experimental since v8.21.0+',
        group: 3,
        start: '2022-08-01',
        end: '2023-07-14',
        type: 'range',
        className: 'px2 rounded-l-lg! bg-blue:20! text-blue! border-blue:50! border-dashed! border-r-none!'
      },
    ],
    required: true,
  },
})


onMounted(() => {
  const itemsComputed = computed(() => 
    props.items.map((_, index) => ({
      ...props.items[index],
      id: index + 1
    }))
  )

  // 使用 props 傳入的 groups 和 items
  const groups = new DataSet(props.groups)
  const items = new DataSet(itemsComputed.value)

  const timeline = new Timeline(el.value, null, {
    stack: true,
    height: 350,
    width: 1900,
    horizontalScroll: false,
    verticalScroll: false,
    zoomable: false,
    moveable: false,
    margin: {
      item: {
        horizontal: 0,
      },
    },
    start: props.start ?? undefined,
    end: props.end ?? undefined,
  })
  timeline.setGroups(groups)
  timeline.setItems(items)

  timeline.redraw()
  // @ts-expect-error missing type
  watch([$clicks, $page], () => {
    timeline.redraw()
  })
})
</script>

<template>
  <div v-click mb-3 flex="~ col">
    <div scale-50 origin-left-top relative mb--42>
      <div ref="el" absolute h-350px w-1800px />
    </div>
    <div text-xs op50 mla mr--10 flex="~ inline gap-1">
      {{ dataSource?.prefix }}
      <a
        :href="dataSource?.href"
        target="_blank" rel="noopener noreferrer"
      >
        {{ dataSource?.text }}
      </a>
    </div>
  </div>
</template>

<style>
.vis-timeline {
  border: 0 !important;
}

.vis-labelset .vis-label,
.vis-time-axis .vis-text {
  color: inherit;
  opacity: 1;
}

.vis-inner,
.vis-time-axis .vis-text {
  color: #b4aea5 !important;
}

.vis-grid,
.vis-label,
.vis-group,
.vis-panel {
  border-color: #b4aea5 !important;
}
</style>
