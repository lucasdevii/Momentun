import { ref } from 'vue'

export const themeMode = ref("dark")

export const switchThemeMode = () => {
    themeMode.value = themeMode.value === "light" ? "dark" : "light"
    console.log("alterado para: " + themeMode.value)
}