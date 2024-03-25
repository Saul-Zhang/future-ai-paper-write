<script setup lang="ts">
const route = useRoute()
const apiKey = useApiKey()
const message = useMessage()

const paperOutlineList = ref<Array<PaperOutline>>([])
const paperOutlineGenerateLoading = ref<boolean>(false)
const paperOutlineGeneratePercentage = ref<number>(0)
const paperId = ref<string>('')
const paperMaterialList = ref<Array<WriteConfigMaterial>>([])
const paperProperties = ref<Array<KeyValue>>([])

const onGenerateOutlineSubmit = async (params: PaperOutlineSubmit) => {

  const {forms, materials} = params

  paperOutlineGenerateLoading.value = true
  paperMaterialList.value = materials ? materials : []
  paperProperties.value = forms

  const paperOutlineGenerateTimer = setInterval(() => {
    if (paperOutlineGeneratePercentage.value > 90) {
      clearInterval(paperOutlineGenerateTimer)
    }
    paperOutlineGeneratePercentage.value += Math.ceil(Math.random() * 3)
  }, 800)
  const paperOutlineResponse: PaperOutlineResponse = await httpPost('/write/generate/outline', {
    configKey: route.params.name,
    apiKey: apiKey.apiKey,
    params: forms
  })

  paperId.value = paperOutlineResponse.paperId
  paperOutlineList.value = paperOutlineResponse.outlines

  paperOutlineGenerateLoading.value = false
  paperOutlineGeneratePercentage.value = 0
  clearInterval(paperOutlineGenerateTimer)
}

const {scrollRef, scrollToBottomIfAtBottom} = usePageScroll()
let paperGenerateLoading = ref<boolean>(false)
let paperGenerateText = ref<string>('')

const onGeneratePaperSubmit=async ()=>{
  paperGenerateLoading.value = true
  const payload = {
    paperId: paperId.value,
    apiKey: apiKey.apiKey,
  }
  const ai = useAI('/write/generate/paper', payload)
  const onText = (text: string) => {
    paperGenerateText.value = text
    scrollToBottomIfAtBottom()
  }
  const onComplete = () => {
    paperGenerateLoading.value = false
  }
  await ai.complete({onText, onComplete})
}




</script>

<template>
  <div class="h-full w-full overflow-hidden bg-write-full">
    <div id="scrollRef" ref="scrollRef" class="h-full overflow-hidden overflow-y-auto">
      <div class="flex justify-center">
        <div class="w-[100%] max-w-screen-lg pl-2.5 pr-2.5">
          <WriteTitle/>
          <WriteConfig :config-key="$route.params.name"
                       :loading="paperOutlineGenerateLoading"
                       @on-generate-outline-submit="onGenerateOutlineSubmit"/>
          <WriteGenerateOutline
              :outlineLoading="paperOutlineGenerateLoading"
              :paper-loading="paperGenerateLoading"
              :percentage="paperOutlineGeneratePercentage"
              :outlines="paperOutlineList"
              :materials="paperMaterialList"
              :properties="paperProperties"
          @on-generate-paper-submit="onGeneratePaperSubmit"/>
          <WriteGeneratePaper :loading="paperGenerateLoading" :paper-content="paperGenerateText" />
        </div>
      </div>
      <FloatRight/>
    </div>
  </div>


</template>

<style lang="scss" scoped>
.bg-write-full{
  background: var(--write-full-bg-color);
}

::v-deep .n-collapse-item__header-main {
  padding-top: 10px;
  padding-bottom: 10px;
}

::v-deep .n-collapse .n-collapse-item .n-collapse-item__content-wrapper .n-collapse-item__content-inner {
  padding-top: 0;
}
</style>
