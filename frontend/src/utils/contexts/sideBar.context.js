import { ref } from "vue";

export const isExpanded = ref(false);

export const Sections = {
    DASHBOARD: 'dashboard',
    PROJECTS: 'projects',
    ACHIEVEMENTS: 'achievements',
    STATISTICS: 'statistics',
    PROFILE: 'profile',
    SETTINGS: 'settings'
};

export const currentSection = ref(Sections.DASHBOARD);

export const switchSideBarValue = () => {
    isExpanded.value = !isExpanded.value;
}

export const setCurrentSection = (section) => {
    currentSection.value = section;
};