<template>
    <div class="flex flex-col py-3 mx-3 mt-4">
        <div>
            <span class="main-text">Structure</span>
        </div>
        <div class="flex flex-col flex-wrap justify-start w-full mt-3 sm:flex-row gap-x-10 gap-y-3">
            <div class="flex flex-col space-y-1">
                <span
                    class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Conclusion</span>
                <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                    <option selected>Choose</option>
                    <option value="no">Yes</option>
                    <option value="yes">No</option>
                </select>
            </div>
            <div class="flex flex-col space-y-1">
                <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Tables</span>
                <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                    <option selected>Choose</option>
                    <option value="no">Yes</option>
                    <option value="yes">No</option>
                </select>
            </div>
            <div class="flex flex-col space-y-1">
                <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">H3</span>
                <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                    <option selected>Choose</option>
                    <option value="no">Yes</option>
                    <option value="yes">No</option>
                </select>
            </div>
            <div class="flex flex-col space-y-1">
                <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">List</span>
                <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                    <option selected>Choose</option>
                    <option value="no">Yes</option>
                    <option value="yes">No</option>
                </select>
            </div>
            <div class="flex flex-col space-y-1">
                <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Italics</span>
                <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                    <option selected>Choose</option>
                    <option value="no">Yes</option>
                    <option value="yes">No</option>
                </select>
            </div>
            <div class="flex flex-col space-y-1">
                <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Quotes</span>
                <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                    <option selected>Choose</option>
                    <option value="no">Yes</option>
                    <option value="yes">No</option>
                </select>
            </div>
            <div class="flex flex-col space-y-1">
                <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Key
                    Takeaways</span>
                <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                    <option selected>Choose</option>
                    <option value="no">Yes</option>
                    <option value="yes">No</option>
                </select>
            </div>
            <div class="flex flex-col space-y-1">
                <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">FAQs</span>
                <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                    <option selected>Choose</option>
                    <option value="no">Yes</option>
                    <option value="yes">No</option>
                </select>
            </div>
            <div class="flex flex-col space-y-1">
                <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Bold</span>
                <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                    <option selected>Choose</option>
                    <option value="no">Yes</option>
                    <option value="yes">No</option>
                </select>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "Structure"
}
</script>