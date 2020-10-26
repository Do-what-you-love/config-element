
<template>
    <el-table border :data="data">
        <el-table-column v-for="(item, index) in colmuns" :key="index" :prop="item.prop" :label="item.label" align="center">
            <template v-if="item.slotName" #default="scope">
                <slot :name="item.slotName" :scope="scope"/>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => []
        },
        colmuns: {
            type: Array,
            default: () => []
        }
    }
}
</script>