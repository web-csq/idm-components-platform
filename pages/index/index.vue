<template>
    <div class="idm-index-page-container">
        <a-row :gutter="[16]">
            <a-col :span="18">
                <!-- component-package -->
                <ICommonBoxContainer class="margin-bottom-16" :component-data="listConfig.componentPackage">
                    <template #list>
                        <a-row :gutter="[16, 16]">
                            <a-col v-for="item in 6" :key="item" :span="12">
                                <IComponentPackage></IComponentPackage>
                            </a-col>
                        </a-row>
                    </template>
                </ICommonBoxContainer>
                <!-- component-market -->
                <ICommonBoxContainer class="margin-bottom-16" :component-data="listConfig.componentMarket">
                    <template #list>
                        <a-row :gutter="[16, 16]">
                            <a-col v-for="item in 6" :key="item" :span="8">
                                <IComponentMarket></IComponentMarket>
                            </a-col>
                        </a-row>
                    </template>
                </ICommonBoxContainer>
                <!-- i-school -->
                <ICommonBoxContainer class="margin-bottom-16" :component-data="listConfig.iSchool">
                    <template #list>
                        <a-row :gutter="[16, 16]">
                            <a-col v-for="item in 8" :key="item" :span="6">
                                <ISchool></ISchool>
                            </a-col>
                        </a-row>
                    </template>
                </ICommonBoxContainer>
                <!-- hot-talk -->
                <ICommonBoxContainer class="margin-bottom-16" :component-data="listConfig.hotTalk">
                    <template #list>
                        <a-row :gutter="[16, 16]">
                            <a-col v-for="item in 3" :key="item" :span="8">
                                <IHotTalk></IHotTalk>
                            </a-col>
                        </a-row>
                    </template>
                </ICommonBoxContainer>
            </a-col>
            <a-col :span="6">
                <ICommonBoxContainer :component-data="listConfig.yunQuan">
                    <template #list>
                        <IYunQuan v-for="item in 6" :key="item"></IYunQuan>
                    </template>
                </ICommonBoxContainer>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import listConfig from './config'
import ICommonBoxContainer from '@/components/ICommonBoxContainer'
import IComponentPackage from '@/components/ListBox/IComponentPackage'
import IComponentMarket from '@/components/ListBox/IComponentMarket'
import IYunQuan from '@/components/ListBox/IYunQuan'
import IHotTalk from '@/components/ListBox/IHotTalk'
import ISchool from '@/components/ListBox/ISchool'
export default {
    name: 'IndexPage',
    components: {
        ICommonBoxContainer,
        IComponentPackage,
        IComponentMarket,
        IYunQuan,
        IHotTalk,
        ISchool
    },
    // async asyncData(context) {
    //     // console.log(context)
    //     const res = await context.$axios.get('')
    //     console.log(res)
    // },
    layout: 'DefaultIndex',
    data() {
        return {
            listConfig,
        }
    },
    head() {
        return {
            title: '首页',
        }
    },
    mounted() {
        this.$axios.get('/DreamWeb/ctrl/util/genVerifyCodeKey').then((res) => {
            console.log(res)
        })
    },
}
</script>

<style lang="scss" scoped>
.idm-index-page-container {
    width: 1080px;
    margin: 0 auto;
}

.margin-bottom-16 {
    margin-bottom: 16px;
}
</style>
