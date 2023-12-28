<template>
    <div class="flex flex-col py-3 mx-3 mt-4">
        <div>
            <span class="text-[#384D67] text-[17px] font-[700] leading-8">Connect to Web</span>
        </div>
        <div class="flex flex-row space-x-10">
            <div class="flex flex-col mt-3 space-y-5">
                <div class="flex flex-row space-x-10">
                    <div class="flex flex-col space-y-1">
                        <span
                            class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Network</span>
                        <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                            <option selected>Choose</option>
                            <option value="no">Yes</option>
                            <option value="yes">No</option>
                        </select>
                    </div>
                    <div class="flex flex-col space-y-1">
                        <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Source
                            Links</span>
                        <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                            <option selected>Choose</option>
                            <option value="no">Yes</option>
                            <option value="yes">No</option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col space-y-1">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Search
                        Source</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[500px]">
                        <option selected>Choose</option>
                        <option value="real-time">Real-Time Search Results</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-col mt-3 space-y-3">
                <div class="flex flex-col space-y-2">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[600] leading-[26px]">Search
                        Depth</span>
                    <span class="text-[#525252] text-[15px] font-[400] leading-[26px]">Quickly finds from thematic sources
                        and uses them as a factual basis for writing an article</span>
                </div>
                <div class="flex w-full max-w-[700px]">
                    <span class="text-[#525252] text-[15px] font-[400] leading-[26px]">The technology of Real-time Search
                        Results enables the immediate acquisition of search finding, which are then utilized for article
                        writing</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col mt-8 space-y-1">
            <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">URLs</span>
            <textarea name="" class="border-[#CBCBCB] border-[1px] w-full max-w-[80%] px-4 py-2" placeholder="" cols="30"
                rows="4"></textarea>
        </div>
        <div class="bg-[#fff] rounded-md mt-4 pt-4 pb-10 px-6 flex flex-col w-full shadow-md">
            <div>
                <span class="text-[#384D67] text-[17px] font-[700] leading-8">Internal Link</span>
            </div>
            <div class="flex flex-row items-start w-full space-x-10">
                <div class="flex flex-col space-y-1">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Insert
                        Internal Link</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                        <option selected>Choose</option>
                        <option value="no">Yes</option>
                        <option value="yes">No</option>
                    </select>
                </div>
                <div class="flex flex-col space-y-1">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Number of
                        Internal Link(s)</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                        <option selected>Choose</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="flex flex-col w-full space-y-1">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Post
                        Links</span>
                    <textarea name="" class="border-[#CBCBCB] border-[1px] w-full max-w-[80%] px-4 py-2" cols="30" rows="4"
                        placeholder="Enter Link per line"></textarea>
                </div>
            </div>
        </div>
        <div class="w-full mt-8">
            <div>
                <span class="text-[#384D67] text-[17px] font-[700] leading-8">Document</span>
            </div>
            <div class="flex flex-row items-end mt-4 space-x-10">
                <div class="flex flex-col space-y-1">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Save to
                        Directory</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                        <option selected>Choose</option>
                        <option value="Home">Home</option>
                    </select>
                </div>
                <div>
                    <button
                        class="flex flex-row items-center justify-center space-x-1 bg-[#77AEF4] rounded-md border-[#77AEF4] border-[1px] py-[14px] px-6">
                        <p class="text-[#FFFFFF] text-[14px] font-[700] leading-5">Change</p>
                    </button>
                </div>
            </div>
        </div>
        <div class="bg-[#fff] rounded-md mt-4 pt-4 pb-10 px-6 flex flex-col w-full shadow-md">
            <div>
                <span class="text-[#384D67] text-[17px] font-[700] leading-8">Publish to Wordpress</span>
            </div>
            <div class="flex flex-row items-start w-full mt-2 space-x-10">
                <div class="flex flex-col space-y-1">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[400] leading-[26px]">Publication</span>
                    <select class="bg-[#fff] border-[#CBCBCB] border-[1px] py-3 px-4 rounded-md w-full sm:w-[200px]">
                        <option selected>Choose</option>
                        <option value="no">Yes</option>
                        <option value="yes">No</option>
                    </select>
                </div>
                <div class="flex flex-col w-full space-y-1 max-w-[700px]">
                    <span class="flex flex-row items-center text-[#525252] text-[15px] font-[600] leading-[26px]">Important</span>
                    <span class="text-[#525252] text-[15px] font-[400] leading-[26px]">If you enable this option, all generated documents will be published on selected site. Be careful with the settings and publication date</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>