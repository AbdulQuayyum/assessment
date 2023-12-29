<template>
    <div class="flex">
        <Sidebar />
        <div class="flex flex-col bg-[#F2F1F9] w-full">
            <div class="fixed z-10 w-full">
                <Navbar />
            </div>
            <main class="mt-36">
                <Header />
                <CoreSettings />
                <MediaHub />
                <SEO />
                <Keyword />
                <Structure />
                <ConnectToWeb />
                <LanguageModel />
            </main>
        </div>
    </div>
</template>
<script>

import Navbar from '../Components/Navbar.vue';
import Sidebar from '../Components/Sidebar.vue';
import Header from '../Components/Header.vue';
import CoreSettings from "../Components/CoreSettings.vue"
import MediaHub from '../Components/MediaHub.vue';
import SEO from '../Components/SEO.vue';
import Keyword from '../Components/Keyword.vue';
import Structure from '../Components/Structure.vue';
import ConnectToWeb from '../Components/ConnectToWeb.vue';
import LanguageModel from '../Components/LanguageModel.vue';

export default {
    name: "Projects",
    components: { Navbar, Sidebar, Header, CoreSettings, MediaHub, SEO, Keyword, Structure, ConnectToWeb, LanguageModel }
}
</script>