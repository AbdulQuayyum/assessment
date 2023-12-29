<template>
    <div class="navbar-container">
        <div class="navbar-sub-container">
            <button @click="toggleSidebar">
                <img src="../assets/menuIcon.png" alt="menu icon">
            </button>
            <div class="navbar-first-container">
                <input type="text" class="navbar-first-input" placeholder="My Workspace">
                <button class="navbar-first-button">
                    <img src="../assets/downArrrowIcon.png" alt="down arrow icons">
                </button>
            </div>
        </div>
        <div class="navbar-sub-container">
            <div class="navbar-second-container">
                <input type="text" class="navbar-first-input" placeholder="Search Here">
                <button class="navbar-second-button">
                    <p class="navbar-first-text">Search</p>
                    <img src="../assets/smallSearchIcon.png" alt="search icons">
                </button>
            </div>
            <div class="icon-container">
                <img src="../assets/notificationIcon.png" alt=" notification icon">
                <img src="../assets/infoIcon.png" alt=" info icon">
            </div>
            <div class="navbar-text-container">
                <img src="../assets/dummy.png" alt="dummy image">
                <div class="navbar-text-container2">
                    <p class="navbar-second-text">Welcome Grace</p>
                    <p class="navbar-third-text">Admin</p>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar-third-container">
        <div class="navbar-text-container">
            <button class="navbar-third-button">
                <img src="../assets/leftArrowIcon.png" alt="left arrow icons">
            </button>
            <span class="navbar-third-text">Write</span>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "Navbar",
    methods: {
        ...mapActions(['toggleSidebar']),
    },
};
</script>

<style lang="less">
@mobile-screen: 640px;
@tablet-screen: 768px;
@large-screen: 1024px;
@larger-screen: 1280px;

.navbar-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    background-color: #fff;
    margin-top: 16px;
    margin-left: 12px;
    margin-right: 12px;
    padding: 12px 24px;
}

.navbar-sub-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.navbar-sub-container>*+* {
    margin-left: 24px;
}

.navbar-first-container {
    display: none;
    flex-direction: row;
    align-items: center;
}

.navbar-first-input {
    background-color: #F5F4FA;
    border-color: #F5F4FA;
    border-width: 1px;
    padding: 8px 16px;
    border-start-start-radius: 6px;
    border-end-start-radius: 6px;
}

.navbar-first-button {
    background-color: #77AEF4;
    border-color: #77AEF4;
    border-width: 1px;
    padding: 16px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}

.navbar-second-container {
    display: none;
    flex-direction: row;
    align-items: center;
}

.navbar-second-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #77AEF4;
    border-color: #77AEF4;
    border-width: 1px;
    padding: 5px 24px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}

.navbar-second-button>*+* {
    margin-left: 4px;
}

.navbar-first-text {
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    line-height: 30px;
}

.icon-container {
    display: none;
    flex-direction: row;
    align-items: center;
}

.icon-container>*+* {
    margin-left: 40px;
}

.navbar-text-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.navbar-text-container>*+* {
    margin-left: 8px;
}

.navbar-text-container img {
    border-radius: 6px;
}

.navbar-text-container2 {
    display: none;
    flex-direction: column;
}

.navbar-second-text {
    color: #363636;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
}

.navbar-third-text {
    color: #9D9D9D;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
}

.navbar-third-container {
    display: flex;
    background-color: #F2F1F9;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-left: 12px;
    margin-right: 12px;
}

.navbar-third-button {
    background-color: #77AEF4;
    border-color: #77AEF4;
    border-width: 1px;
    padding: 12px 20px;
    border-radius: 6px;
}

.navbar-third-text {
    color: #384D67;
    font-size: 22px;
    font-weight: 700;
    line-height: 32px;
}

@media (min-width: @mobile-screen) {
    .navbar-first-container {
        display: flex;
    }
}

@media (min-width: @tablet-screen) {
    .navbar-second-container {
        display: flex;
    }
}

@media (min-width: @larger-screen) {
    .icon-container {
        display: flex;
    }

    .navbar-text-container2 {
        display: flex;
    }
}
</style>