<template>
    <div class="flex flex-col py-3 mx-3 mt-4">
        <div>
            <span class="text-[#384D67] text-[17px] font-[700] leading-8">Language Model</span>
        </div>
        <div class="flex flex-col items-end w-full mt-3 space-x-0 gap-y-3 lg:space-x-10 lg:flex-row">
                 <div class="flex flex-col w-full space-y-1 lg:w-fit">
                <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Quality
                    Type</span>
                <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full lg:w-[500px]">
                    <option selected>Choose</option>
                    <option value="GPT3.5">GPT 3.5</option>
                </select>
            </div>
            <div class="flex flex-col w-full space-y-1 max-w-none lg:max-w-[700px]">
                <span class="text-[#525252] text-[15px] font-[400] leading-[26px]">For optimal results, we use a mix of
                    different methods including GPT 3.5, GPT 3.5 Turbo 16K and GPT 4 8K, ensuring the best quality.</span>
            </div>
        </div>
        <div class="flex flex-col items-end w-full mt-3 space-x-0 gap-y-3 lg:space-x-10 lg:flex-row">
                 <div class="flex flex-col w-full space-y-1 lg:w-fit">
                <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">openAI API
                    Key</span>
                <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full lg:w-[500px]">
                    <option selected>Choose</option>
                    <option value="NO">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </div>
            <div class="flex flex-col w-full space-y-1 max-w-none lg:max-w-[700px]">
                <span class="text-[#525252] text-[15px] font-[400] leading-[26px]">You can connect your API key if you used
                    up our words and still have unspent Article generation limits</span>
            </div>
        </div>
        <div class="flex justify-end w-full mt-3">
            <button
                class="flex flex-row items-center justify-center space-x-1 bg-[#77AEF4] rounded-md border-[#77AEF4] border-[1px] py-[14px] px-16">
                <img src="../assets/editIcon.png" alt="">
                <p class="text-[#FFFFFF] text-[14px] font-[700] leading-5">Write</p>
            </button>
        </div>
    </div>
</template>
<script>
export default {

}
</script>