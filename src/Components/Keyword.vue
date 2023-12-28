<template>
    <div class="flex flex-col py-3 mx-3 mt-4">
        <div class="flex flex-row items-center justify-between w-full">
            <div class="flex flex-col items-start space-y-1">
                <span class="text-[#384D67] text-[17px] font-[700] leading-8">Keywords to include in the text</span>
                <span class="text-[#525252] text-[15px] font-[400] leading-[26px]">If you do not provide the keywords, we
                    will automatically generate relevant keywords from the main keyword for each section and use them to
                    generate article</span>
            </div>
            <button
                class="flex w-[20%] flex-row items-center justify-center space-x-1 bg-[#77AEF4] rounded-md border-[#77AEF4] border-[1px] py-2 px-6">
                <p class="text-[#FFFFFF] text-[14px] font-[700] leading-8">NLP Keyword Generator</p>
            </button>
        </div>
        <div class="flex mt-8">
            <div contenteditable="true" class="relative bg-[#fff] border-[#CBCBCB] border-[1px] py-4 px-6">
                <div class="flex flex-row flex-wrap justify-between gap-y-3">
                    <div class="bg-[#D3E7FF] flex flex-row items-center space-x-2 h-fit rounded-md py-2 px-6">
                        <span class="text-center text-[#718399] text-[13px] font-[400] leading-[26px]">What do dermatologist
                            prescribe for skin whitening?</span>
                        <div>
                            <img src="../assets/cancel.png" class="h-[15px] w-[15px]" alt="cancel icon">
                        </div>
                    </div>
                    <div class="bg-[#D3E7FF] flex flex-row items-center space-x-2 h-fit rounded-md py-2 px-6">
                        <span class="text-center text-[#718399] text-[13px] font-[400] leading-[26px]">Dermatologist prescription</span>
                        <div>
                            <img src="../assets/cancel.png" class="h-[15px] w-[15px]" alt="cancel icon">
                        </div>
                    </div>
                    <div class="bg-[#D3E7FF] flex flex-row items-center space-x-2 h-fit rounded-md py-2 px-6">
                        <span class="text-center text-[#718399] text-[13px] font-[400] leading-[26px]">Skin whitening treatment</span>
                        <div>
                            <img src="../assets/cancel.png" class="h-[15px] w-[15px]" alt="cancel icon">
                        </div>
                    </div>
                    <div class="bg-[#D3E7FF] flex flex-row items-center space-x-2 h-fit rounded-md py-2 px-6">
                        <span class="text-center text-[#718399] text-[13px] font-[400] leading-[26px]">Do dermatologist recommend skin whitening products?</span>
                        <div>
                            <img src="../assets/cancel.png" class="h-[15px] w-[15px]" alt="cancel icon">
                        </div>
                    </div>
                    <div class="bg-[#D3E7FF] flex flex-row items-center space-x-2 h-fit rounded-md py-2 px-6">
                        <span class="text-center text-[#718399] text-[13px] font-[400] leading-[26px]">Skin whitening prducts prescribed by dermatologist?</span>
                        <div>
                            <img src="../assets/cancel.png" class="h-[15px] w-[15px]" alt="cancel icon">
                        </div>
                    </div>
                    <div class="bg-[#D3E7FF] flex flex-row items-center space-x-2 h-fit rounded-md py-2 px-6">
                        <span class="text-center text-[#718399] text-[13px] font-[400] leading-[26px]">Prescription medication for skin whitening?</span>
                        <div>
                            <img src="../assets/cancel.png" class="h-[15px] w-[15px]" alt="cancel icon">
                        </div>
                    </div>
                    <div class="bg-[#D3E7FF] flex flex-row items-center space-x-2 h-fit rounded-md py-2 px-6">
                        <span class="text-center text-[#718399] text-[13px] font-[400] leading-[26px]">Professional skin whitening treatment?</span>
                        <div>
                            <img src="../assets/cancel.png" class="h-[15px] w-[15px]" alt="cancel icon">
                        </div>
                    </div>
                    <div class="bg-[#D3E7FF] flex flex-row items-center space-x-2 h-fit rounded-md py-2 px-6">
                        <span class="text-center text-[#718399] text-[13px] font-[400] leading-[26px]">Dermatologist approved skin lightening treatments?</span>
                        <div>
                            <img src="../assets/cancel.png" class="h-[15px] w-[15px]" alt="cancel icon">
                        </div>
                    </div>
                    <div class="bg-[#D3E7FF] flex flex-row items-center space-x-2 h-fit rounded-md py-2 px-6">
                        <span class="text-center text-[#718399] text-[13px] font-[400] leading-[26px]">Tropical skin whitening prescriptions?</span>
                        <div>
                            <img src="../assets/cancel.png" class="h-[15px] w-[15px]" alt="cancel icon">
                        </div>
                    </div>
                </div>
                <div class="pt-4 pb-10">
                    <span class="text-[#CBCBCB] text-[15px] font-[400] leading-[20px]">Write some keyword or phrase relevant to your blog, then press Enter or + to add</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>