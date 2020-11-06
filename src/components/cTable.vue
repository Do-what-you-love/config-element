
<template>
    <div>
        <el-table
            border
            :data="data"
            v-bind="$attrs"
            v-on="$listeners"
            >
            <el-table-column
                v-for="(item, index) in colmuns"
                :key="index"
                :prop="item.prop"
                :label="item.label"
                :align="align || 'center'"
                v-bind="item.columnAttributes || {}"
                >
                <template v-if="item.needSlot" #default="scope">
                    <ex-slot :scope="scope" :name="item.slotName"></ex-slot>
                </template>
                <template #header="scope" v-if="slotHeader">
                    <slot name="header" :scope="scope"></slot>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import exSlot from './exSlot.js'

export default {
    name: 'cTable',
    props: {
        data: {
            type: Array,
            default: () => []
        },
        colmuns: {
            type: Array,
            default: () => []
        },
        slotHeader: {
            type: Boolean
        },
        align: {
            type: String
        }
    },
    data () {
        return {
            table: ""
        }
    },
    components: {
        'ex-slot': exSlot
    },
    created () {
        this.table = this.$children
        console.log(this.table)
        console.log(this)
    }
}
</script>