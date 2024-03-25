export const useApiKey = defineStore("key", {
    state: () => {
        return {
            apiKey: ''
        }
    },
    actions: {
        setApiKey(apiKey: string) {
            this.apiKey = apiKey
        }
    },
    getters: {
        hasApiKey: (state): boolean => {
            return state.apiKey.length > 0
        }
    },
    persist: true
})