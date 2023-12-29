<template>
    <div class="flex">
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="flex flex-col w-full">
            <Navbar @open-sidebar="openSidebar" />
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
    components: { Navbar, Sidebar, Header, CoreSettings, MediaHub, SEO, Keyword, Structure, ConnectToWeb, LanguageModel },
    data() {
        return {
            isSidebarVisible: localStorage.getItem('isSidebarVisible') === 'true',
        };
    },
    methods: {
        openSidebar() {
            this.isSidebarVisible = true;
            localStorage.setItem('isSidebarVisible', 'true');
        },
    },
    watch: {
        isSidebarVisible(newValue) {
            this.$nextTick(() => { });
        },
    },
}
</script>