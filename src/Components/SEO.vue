<template >
    <div class="bg-[#fff] rounded-md mt-12 mx-3 pt-8 pb-10 px-6 flex flex-col shadow-md">
        <div>
            <span class="text-[#384D67] text-[17px] font-[700] leading-8">SEO</span>
        </div>
        <div class="flex flex-col w-full space-y-5">
            <div class="flex flex-col items-center w-full mt-5 space-x-0 lg:space-x-5 gap-y-3 lg:flex-row">
                <div class="flex flex-col w-full space-y-1 lg:w-fit">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">SEO
                        Score</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full lg:w-[250px]">
                        <option selected>Choose</option>
                        <option value="0 - 20%">0 - 20%</option>
                        <option value="21% - 40%">21% - 40%</option>
                        <option value="41% - 60%">41% - 60%</option>
                        <option value="61% - 80%">61% - 80%</option>
                        <option value="81% - 100%">81% - 100%</option>
                    </select>
                </div>
                <div class="flex flex-col w-full space-y-1 lg:w-fit">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Keyword
                        Density</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full lg:w-[250px]">
                        <option selected>Choose</option>
                        <option value="10">10 times</option>
                        <option value="20">20 times</option>
                        <option value="30">30 times</option>
                    </select>
                </div>
                <div class="flex flex-col w-full space-y-1 lg:w-fit">
                    <span
                        class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Tags</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full lg:w-[250px]">
                        <option selected>Choose</option>
                        <option value="Nonetags">None</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-row items-center space-x-2">
                <input type="checkbox" checked class="h-[18px] w-[18px] accent-[#77AEF4]" name="checkbox04" id="checkbox04">
                <label for="checkbox02" class=" text-[#525252] text-[15px] font-[400] leading-[26px]">Use the main keyword
                    to write and insert a meta description in the post. Also releveant keyword will be picked up and added
                    to the meta description.</label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SEO"
}
</script>