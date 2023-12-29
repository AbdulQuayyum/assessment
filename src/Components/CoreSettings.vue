<template>
    <div class="flex flex-col py-3 mx-3 mt-4">
        <div>
            <span class="main-text">Core Settings</span>
        </div>
        <div class="flex flex-col w-full space-x-0 lg:space-x-10 lg:flex-row">
            <div class="flex flex-col w-full mt-3 space-y-5">
                <div class="flex flex-col space-y-1">
                    <span
                        class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Language</span>
                    <select
                        class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full max-w-none lg:max-w-[500px]">
                        <option selected>Choose a language</option>
                        <option value="EUS">English (US)</option>
                        <option value="EUK">English (UK)</option>
                        <option value="FFR">French</option>
                        <option value="GDE">German</option>
                    </select>
                </div>
                <div class="flex flex-col space-y-1">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Tone of
                        Voice</span>
                    <select
                        class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full max-w-none lg:max-w-[500px]">
                        <option selected>Choose a tone of voice</option>
                        <option value="friendly">Friendly</option>
                        <option value="notFriendly">Not Friendly</option>
                    </select>
                </div>
                <div class="flex flex-col space-y-1">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Point of
                        View</span>
                    <select
                        class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full max-w-none lg:max-w-[500px]">
                        <option selected>Choose a point of view</option>
                        <option value="none">None</option>
                        <option value="all">All</option>
                    </select>
                </div>
                <div class="flex flex-col space-y-1">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Target
                        Country</span>
                    <select
                        class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full max-w-none lg:max-w-[500px]">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-col w-full mt-3 space-y-5">
                <div class="flex flex-row w-full space-x-2">
                    <div class="flex flex-col w-full space-y-1">
                        <span
                            class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Article
                            Size</span>
                        <div class="flex flex-col items-center space-x-0 xl:space-x-5 gap-y-3 xl:flex-row">
                            <select
                                class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full xl:w-[300px]">
                                <option selected>Choose a size</option>
                                <option value="xsmall">X-Small</option>
                            </select>
                            <div
                                class="bg-[#D3E7FF] flex w-full xl:max-w-xs max-w-none justify-center rounded-md py-3 px-6">
                                <span class="text-center text-[#718399] text-[13px] font-[400] leading-[26px]">2400-3600
                                    words, 9-12 H2 headings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex w-full max-w-full justify-center text-center lg:max-w-[500px]">
                    <span class=" text-[#6B6B6B] text-[13px] font-[400] leading-[20px]">
                        The X-Small article offers short articles or news, ideal for quick updates and capturing immediate
                        interest, ensuring your content remains fresh and timely in the eyes of your audiences.
                    </span>
                </div>
                <div class="flex flex-row space-x-8">
                    <div class="flex flex-row items-center space-x-2">
                        <span class=" text-[#525252] text-[15px] font-[400] leading-[26px]">Details to Include</span>
                        <img src="../assets/infoIcon.png" alt="info icon">
                    </div>
                    <div class="flex flex-row items-center space-x-2">
                        <span class=" text-[#5D93D9] text-[15px] font-[400] leading-[26px]">Sample 1</span>
                        <span class=" text-[#5D93D9] text-[15px] font-[400] leading-[26px]">|</span>
                        <span class=" text-[#5D93D9] text-[15px] font-[400] leading-[26px]">Sample 2</span>
                        <span class=" text-[#5D93D9] text-[15px] font-[400] leading-[26px]">|</span>
                        <span class=" text-[#5D93D9] text-[15px] font-[400] leading-[26px]">Sample 3</span>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="flex flex-row items-center space-x-2">
                        <input type="checkbox" class="h-[15px] w-[15px] accent-[#77AEF4]" name="checkbox01" id="checkbox01">
                        <label for="checkbox01" class=" text-[#525252] text-[15px] font-[400] leading-[26px]">Intense mode:
                            to each section, beyond just the entire article.</label>
                    </div>
                </div>
                <div class="flex flex-row space-x-8">
                    <textarea name="" class="border-[#CBCBCB] border-[1px] w-full px-4 py-2"
                        placeholder="e.g. phone number as 267-229-6783" cols="30" rows="4"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CoreSettings"
}
</script>