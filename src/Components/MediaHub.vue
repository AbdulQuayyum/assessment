<template >
    <div class="bg-[#fff] rounded-md w-full mt-6 mx-3 pt-8 pb-10 px-6 flex flex-col shadow-md">
        <div>
            <span class="text-[#384D67] text-[17px] font-[700] leading-8">Media Hub</span>
        </div>
        <div class="flex flex-col w-full space-y-5">
            <div class="flex flex-col items-center w-full mt-5 space-x-0 lg:space-x-5 gap-y-3 lg:flex-row">
                <div class="flex flex-col w-full space-y-1 lg:w-fit">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">AI
                        Images</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full lg:w-[250px]">
                        <option selected>Choose an Image</option>
                        <option value="noneal">None</option>
                    </select>
                </div>
                <div class="flex flex-col w-full space-y-1 lg:w-fit">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Number of
                        Images</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full lg:w-[250px]">
                        <option selected>Choose a number of image(s)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="flex flex-col w-full space-y-1 lg:w-fit">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Image
                        Style</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full lg:w-[250px]">
                        <option selected>Choose an image style</option>
                        <option value="noneis">None</option>
                    </select>
                </div>
                <div class="flex flex-col w-full space-y-1 lg:w-fit">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Image
                        Size</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full lg:w-[250px]">
                        <option selected>Choose an image size</option>
                        <option value="64x64">64x64</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-row items-center space-x-2">
                <input type="checkbox" checked class="h-[18px] w-[18px] accent-[#77AEF4]" name="checkbox02" id="checkbox02">
                <label for="checkbox02" class=" text-[#525252] text-[15px] font-[400] leading-[26px]">Include the main
                    keyword in the first image as Alt-Text. Relevant keywords will be picked and added to the rest of the
                    images.</label>
            </div>
        </div>
        <div class="flex flex-col w-full space-y-5">
            <div class="flex flex-col items-center w-full mt-5 space-x-0 lg:space-x-5 gap-y-3 lg:flex-row">
                <div class="flex flex-col w-full space-y-1 lg:w-fit">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Youtube Videos</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full lg:w-[250px]">
                        <option selected>Choose</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="flex flex-col w-full space-y-1 lg:w-fit">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Number of Videos</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full lg:w-[250px]">
                        <option selected>Choose a number of video(s)</option>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                    </select>
                </div>
                <div class="flex flex-col w-full space-y-1 lg:w-fit">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Layout Options</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full lg:w-[250px]">
                        <option selected>Choose a layout option</option>
                        <option value="DistributeEvenly">Distribute evenly</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-row items-center space-x-2">
                <input type="checkbox" checked class="h-[18px] w-[18px] accent-[#77AEF4]" name="checkbox03" id="checkbox03">
                <label for="checkbox02" class=" text-[#525252] text-[15px] font-[400] leading-[26px]">All media element
                    would be placed strictly under the headings. if disabled, the AI would decide and find the best
                    placement</label>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>