<template>
    <aside v-if="isSidebarVisible" class="fixed h-screen z-50 text-white px-3 py-4 bg-[#2B2A3F] w-72">
        <button @click="toggleSidebar" class="flex justify-end w-full">
            <img src="../assets/whiteCancel.png" class="h-[20px] w-[20px]" alt="cancel icon">
        </button>
        <div class="flex justify-center py-10 mx-6 border-b-[1px] border-[#ccc]">
            <img src="../assets/icon.png" alt="logo">
        </div>
        <div class="flex flex-col items-start w-full px-6 py-16 gap-y-5">
            <div class="flex flex-row items-center w-full px-4 py-3 space-x-3 rounded-md">
                <div>
                    <img src="../assets/dashboardIcon.png" alt="dashboard icon">
                </div>
                <span class="text-[#A3AED0] text-[16px] font-[700] leading-[30px]">Dashboard</span>
            </div>
            <div class="flex flex-row items-center py-3 px-4 rounded-md w-full bg-[#77AEF4] cursor-pointer space-x-3">
                <div>
                    <img src="../assets/projectsIcon.png" alt="projects icon">
                </div>
                <span class="text-[#fff] text-[16px] font-[700] leading-[30px]">Projects</span>
            </div>
            <div class="flex flex-row items-center w-full px-4 py-3 space-x-3 rounded-md">
                <div>
                    <img src="../assets/schedulerIcon.png" alt="scheduler icon">
                </div>
                <span class="text-[#A3AED0] text-[16px] font-[700] leading-[30px]">Scheduler</span>
            </div>
            <div class="flex flex-row items-center w-full px-4 py-3 space-x-3 rounded-md">
                <div>
                    <img src="../assets/schedulerIcon.png" alt="Content Wizard icon">
                </div>
                <span class="text-[#A3AED0] text-[16px] font-[700] leading-[30px]">Content Wizard</span>
            </div>
            <div class="flex flex-row items-center w-full px-4 py-3 space-x-3 rounded-md">
                <div>
                    <img src="../assets/documentsIcon.png" alt="documents icon">
                </div>
                <span class="text-[#A3AED0] text-[16px] font-[700] leading-[30px]">Documents</span>
            </div>
            <div class="flex flex-row items-center w-full px-4 py-3 space-x-3 rounded-md">
                <div>
                    <img src="../assets/logoutIcon.png" alt="log out icon">
                </div>
                <span class="text-[#A3AED0] text-[16px] font-[700] leading-[30px]">Log Out</span>
            </div>
        </div>
    </aside>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Sidebar',
    computed: {
        ...mapGetters(['isSidebarVisible']),
    },
    methods: {
        ...mapActions(['toggleSidebar']),
    },
};
</script>