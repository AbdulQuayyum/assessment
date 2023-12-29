<template>
    <div class="bg-[#fff] rounded-t-md mt-4 mx-3 py-3 px-6 flex flex-row justify-between">
        <div class="flex flex-row items-center space-x-6">
            <button @click="toggleSidebar">
                <img src="../assets/menuIcon.png" alt="menu icon">
            </button>
            <div class="flex-row items-center hidden sm:flex">
                <input type="text" class="bg-[#F5F4FA] border-[#F5F4FA] border-[1px] py-2 px-4 rounded-s-md"
                    placeholder="My Workspace">
                <button class="bg-[#77AEF4] border-[#77AEF4] border-[1px] py-4 px-4 rounded-r-md">
                    <img src="../assets/downArrrowIcon.png" alt="down arrow icons">
                </button>
            </div>
        </div>
        <div class="flex flex-row items-center space-x-6">
            <div class="flex-row items-center hidden md:flex">
                <input type="text" class="bg-[#F5F4FA] border-[#F5F4FA] border-[1px] rounded-s-md py-2 px-4"
                    placeholder="Search Here">
                <button
                    class="flex flex-row items-center space-x-1 bg-[#77AEF4] rounded-r-md border-[#77AEF4] border-[1px] py-[5px] px-6">
                    <p class="text-[#FFFFFF] text-[14px] font-[600] leading-[30px]">Search</p>
                    <img src="../assets/smallSearchIcon.png" alt="search icons">
                </button>
            </div>
            <div class="flex-row items-center hidden space-x-10 xl:flex">
                <img src="../assets/notificationIcon.png" alt=" notification icon">
                <img src="../assets/infoIcon.png" alt=" info icon">
            </div>
            <div class="flex flex-row items-center space-x-2">
                <img src="../assets/dummy.png" class="rounded-md " alt="dummy image">
                <div class="flex-col hidden space-y-1 xl:flex">
                    <p class="text-[#363636] text-[14px] font-[500] leading-5">Welcome Grace</p>
                    <p class="text-[#9D9D9D] text-[14px] font-[500] leading-5">Admin</p>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#F2F1F9] rounded-b-md mx-3 py-3 flex">
        <div class="flex flex-row items-center space-x-2">
            <button class="bg-[#77AEF4] border-[#77AEF4] border-[1px] py-3 px-5 rounded-md">
                <img src="../assets/leftArrowIcon.png" alt="left arrow icons">
            </button>
            <span class="text-[#384D67] text-[22px] font-[700] leading-8">Write</span>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "Navbar",
    methods: {
        ...mapActions(['toggleSidebar']),
    },
};
</script>