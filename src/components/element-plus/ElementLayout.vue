<script setup lang="ts">

    interface LayoutItem{
        mode?: 'tm' | 'hm' | 'tmb' | 'hmf' | 'lm' | 'am' | 'tlm' | 'ham' | 'tlmb' | 'hamf' | 'ltm' | 'ahm' | 'ltmb' | 'ahmf',
        asideWidth?: string,
        isFull?: boolean
    }

    const props = withDefaults(defineProps<LayoutItem>(),{
        mode: 'ahm',
        asideWidth: '230px',
        isFull: false
    })
</script>

<template>
    <!-- header main -->
    <el-container v-bind="$attrs" v-if="mode == 'tm' || mode == 'hm'" :class="isFull ? 'h-screen' : ''">
        <el-header class="p-0">
            <slot name="header" />
        </el-header>
        <el-main>
            <slot name="main" />
        </el-main>
    </el-container>

    <!-- header main footer -->
    <el-container v-bind="$attrs" v-if="mode == 'tmb' || mode == 'hmf'" :class="isFull ? 'h-screen' : ''">
        <el-header class="p-0">
            <slot name="header" />
        </el-header>
        <el-main>
            <slot name="main" />
        </el-main>
        <el-footer>
            <slot name="footer" />
        </el-footer>
    </el-container>

    <!-- aside main -->
    <el-container v-bind="$attrs" v-if="mode == 'lm' || mode == 'am'" :class="isFull ? 'h-screen' : ''">
        <el-aside :width="asideWidth">
            <slot name="aside" />
        </el-aside>
        <el-main>
            <slot name="main" />
        </el-main>
    </el-container>

    <!-- header aside main-->
    <el-container v-bind="$attrs" v-if="mode == 'tlm' || mode == 'ham'" :class="isFull ? 'h-screen' : ''">
        <el-header class="p-0">
            <slot name="header" />
        </el-header>
        <el-container>
            <el-aside :width="asideWidth">
                <slot name="aside" />
            </el-aside>
            <el-main>
                <slot name="main" />
            </el-main>
        </el-container>
    </el-container>

    <!-- header aside main footer-->
    <el-container v-bind="$attrs" v-if="mode == 'tlmb' || mode == 'hamf'" :class="isFull ? 'h-screen' : ''">
        <el-header class="p-0">
            <slot name="header" />
        </el-header>
        <el-container>
            <el-aside :width="asideWidth">
                <slot name="aside" />
            </el-aside>
            <el-main>
                <slot name="main" />
            </el-main>
            <el-footer>
                <slot name="footer" />
            </el-footer>
        </el-container>
    </el-container>

    <!-- left header main -->
    <el-container v-bind="$attrs" v-if="mode == 'ltm' || mode == 'ahm'" :class="isFull ? 'h-screen' : ''">
        <el-aside :width="asideWidth">
            <slot name="aside" />
        </el-aside>
        <el-container :class="isFull ? 'h-screen' : ''">
            <el-header class="p-0">
                <slot name="header" />
            </el-header>
            <el-main>
                <slot name="main" v-bind="$attrs" />
            </el-main>
        </el-container>
    </el-container>

    <!-- aside header main footer -->
    <el-container v-bind="$attrs" v-if="mode == 'ltmb' || mode == 'ahmf'" :class="isFull ? 'h-screen' : ''">
        <el-aside :width="asideWidth">
            <slot name="aside" />
        </el-aside>
        <el-container>
            <el-header class="p-0">
                <slot name="header" />
            </el-header>
            <el-main>
                <slot name="main" />
            </el-main>
            <el-footer>
                <slot name="footer" />
            </el-footer>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
    
</style>