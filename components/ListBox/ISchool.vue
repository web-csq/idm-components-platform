<template>
    <div></div>
</template>
<script>
import { ISchoolData } from './mock/mockData'
export default {
    name: 'ISchool',  // i学院
    props: {
        componentData: {
            type: Object,
            default: () => ISchoolData,
        },
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>

</style>
