<template>
    <div class="bg-[#F2F1F9] flex flex-col  min-h-screen mx-auto w-full max-w-[1800px]">
        <Navbar />
        <main>
            <Header />
            <CoreSettings />
        </main>
    </div>
</template>
<script>

import Navbar from '../Components/Navbar.vue';
import Header from '../Components/Header.vue';
import CoreSettings from "../Components/CoreSettings.vue"

export default {
    name: "Projects",
    components: { Navbar, Header, CoreSettings }

}
</script>