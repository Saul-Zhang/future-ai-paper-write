<script setup lang="ts">
interface Props {
  outlines?: Array<PaperOutline>,
  percentage?: number,
  outlineLoading?: boolean,
  paperLoading?: boolean,
  materials?: Array<WriteConfigMaterial>,
  properties?: Array<KeyValue>
}

const props = defineProps<Props>()
const title = computed(() => getValue("title"))
const degree = computed(() => getValue("degree"))

const getValue = (propertyName: string): string => {
  const data = props.properties?.find(prop => prop.key === propertyName)
  return data?.value || ''
}

const message = useMessage()
const emits = defineEmits(['onGeneratePaperSubmit'])
const onGeneratePaperSubmit = (e: MouseEvent) => {
  e.preventDefault()
  if (!useApiKey().hasApiKey){
    message.error("获取Key失败，请点击右侧【Key配置】按钮配置Key")
    return
  }
  emits('onGeneratePaperSubmit')
}
</script>

<template>
  <div class="flex justify-center flex-col pt-7 md:pt-20">
    <WriteStepNo no="2" desc="自动生成大纲"/>
    <div class="flex flex-col justify-center items-center pt-1 pb-1">
      <div class="flex flex-col justify-center items-center space-y-3"
           v-if="outlineLoading">
        <div class="block md:hidden mb-4 text-primary font-medium">大纲生成中</div>
        <NProgress
            type="circle"
            color="#782AFF"
            :stroke-width="4"
            :processing="true"
            :percentage="percentage"/>
        <div class="hidden md:block mt-4 text-normal">大纲生成中，大约需要40S，生成期间请不要退出或刷新页面</div>
      </div>
      <div class="w-full flex flex-wrap gap-y-1.5 md:gap-x-3" v-else-if="outlines?.length>0">
        <div class="w-full md:w-2/3">
          <div class="flex md:hidden items-end mb-2.5">
            <div class="text-normal text-base font-medium pr-1.5">论文大纲</div>
            <div class="text-description">可添加、删除、编辑</div>
          </div>
          <div class="bg-white md:p-5 rounded-3xl md:rounded-none overflow-hidden">
            <div class="hidden md:flex gap-x-2.5 items-end mb-4">
              <div class="text-normal font-medium text-lg">论文大纲</div>
              <div class="text-neutral-500 text-sm">可添加、删除、编辑</div>
            </div>
            <NCollapse accordion>
              <NCollapseItem
                  class="bg-neutral-100"
                  v-for="outline in outlines"
                  :key="outline.id"
                  :title="`${outline.chapter} ${outline.title}`"
                  :name="outline.id">
                <div class="bg-white pl-5 pt-6 pb-6 ">
                  <div class=""
                       v-for="child in outline.children"
                       :key="child.id">
                    <div class="text-gray-950 txt-base font-medium mb-1.5">{{ child.chapter }} {{
                        child.title
                      }}
                    </div>
                    <div class="mb-5 text-gray-400 txt-base">{{ child.description }}</div>
                  </div>
                </div>
              </NCollapseItem>
            </NCollapse>
          </div>
        </div>
        <div class="w-full md:flex-1">
          <div class="flex md:hidden items-end mb-2.5 mt-4">
            <div class="text-normal text-base font-medium pr-1.5">您将获得</div>
          </div>
          <div class="bg-white p-2.5 md:p-5 rounded-3xl md:rounded-none overflow-hidden">
            <div class="hidden md:block text-normal font-medium text-lg mb-4">材料清单</div>
            <div class="flex gap-x-1.5 items-start mb-1.5">
              <NIcon size="15">
                <img src="~/assets/icon/icon_paper.png">
              </NIcon>
              <div class="flex flex-col justify-start">
                <div class="text-normal font-medium text-base">{{ title }}</div>
                <div class="text-gray-400 text-sm mt-1">{{ degree }}</div>
              </div>
            </div>
            <div class="flex justify-between flex-wrap">
              <NCheckbox
                  v-for="(material, index) in materials"
                  :value="index"
                  checked>
                <div class="flex items-center gap-x-1">
                  <NIcon size="10">
                    <img :src="material.value">
                  </NIcon>
                  <div>{{ material.key }}</div>
                </div>
              </NCheckbox>
            </div>
            <div class="mt-2 mb-2">
              <NButton
                  block
                  class="rounded-full md:rounded-xl"
                  type="primary"
                  size="large"
                  :loading="paperLoading"
                  @click="onGeneratePaperSubmit">
                生成全文
              </NButton>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:block mb-2.5" v-else>
        <NIcon size="50">
          <img src="~/assets/icon/icon_outline.png">
        </NIcon>
      </div>
<!--      <div class="w-full flex flex-wrap md:gap-x-1.5">
        <div class="w-full md:w-2/3">
          <WriteGenerateOutlineList :outlines="outlines"/>
        </div>
        <div class="w-full md:flex-1">
          <WriteGenerateOutlineMaterial :materials="materials" :properties="properties"/>
        </div>
      </div>-->
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>