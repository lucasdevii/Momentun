import { ref } from "vue";

export const isExpanded = ref(false);

export const switchSideBarValue = () => {
    isExpanded.value = !isExpanded.value
}