<template>
    <div class="header-container">
        <div>
            <span class="main-text">Header Settings</span>
        </div>
        <div class="header-sub-container">
            <div class="flex flex-col items-start justify-start w-full space-y-2">
                <div class="flex flex-row justify-between w-full sm:max-w-[70%] max-w-none">
                    <span class="flex flex-row items-center text-[#525252] text-[14px] font-[400] leading-[26px]">Main
                        Keyword <p class="text-[#CA1818]">*</p></span>
                    <span
                        class="flex flex-row items-center text-[#525252] text-[14px] font-[400] leading-[26px]">61/80</span>
                </div>
                <div
                    class="flex flex-col items-start w-full mt-3 space-x-0 sm:space-x-3 gap-y-3 sm:items-center sm:flex-row">
                    <input type="text"
                        class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[70%]"
                        value="What do dermatologist prescribe for skin whitening?">
                    <button
                        class="flex w-full sm:max-w-xs max-w-none items-center justify-center space-x-1 bg-[#77AEF4] rounded-md border-[#77AEF4] border-[1px] py-2 px-6">
                        <p class="text-[#FFFFFF] text-[14px] font-[700] leading-8">Regenerate Title</p>
                    </button>
                </div>
            </div>
        </div>
        <div class="header-sub-container">
            <div class="flex flex-col items-start justify-start w-full space-y-2">
                <div class="flex flex-row justify-between w-full  sm:max-w-[70%] max-w-none">
                    <span class="flex flex-row items-center text-[#525252] text-[14px] font-[400] leading-[26px]">Title <p
                            class="text-[#CA1818]">*</p></span>
                    <span
                        class="flex flex-row items-center text-[#525252] text-[14px] font-[400] leading-[26px]">70/80</span>
                </div>
                <div class="flex flex-row items-center w-full mt-3 space-x-3">
                    <input type="text"
                        class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md sm:w-[70%] w-full"
                        value="What do dermatologist prescribe for skin whitening? Discover Now!">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header"
}
</script>

<style lang="less">
@mobile-screen: 640px;
@tablet-screen: 768px;
@large-screen: 1024px;
@larger-screen: 1280px;


.header-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 6px;
    background-color: #fff;
    margin-top: 16px;
    margin-left: 12px;
    margin-right: 12px;
    padding-top: 32px;
    padding-bottom: 40px;
    padding-left: 24px;
    padding-right: 24px;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.header-sub-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
}

.header-sub-container>*+* {
    margin-left: 12px;
}

.main-text {
    line-height: 32px;
    color: #384D67;
    color: 17px;
    font-weight: 700;
}
</style>