<script setup lang="ts">
interface Props {
  loading?: boolean,
  paperContent?: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex justify-center flex-col pt-14 rounded-3xl md:rounded-none">
    <WriteStepNo no="3" desc="生成全文"/>
    <div class="bg-white p-8 shadow-gray-500" v-if="paperContent?.length!=0">
      <ChatMessage :loading="loading" :text="paperContent"></ChatMessage>
    </div>
    <div class="hidden md:flex justify-center mb-2.5" v-else>
      <NIcon size="50">
        <img src="~/assets/icon/icon_content.png" alt="">
      </NIcon>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>