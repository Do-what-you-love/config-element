<template>
  <div class="home">
    <cTable :colmuns='col' :data="data" ref="ctable" @cell-click="say">
        <template v-slot:opration="scope">
            <div>
                {{scope.row}}
            </div>
        </template>
    </cTable>
  </div>
</template>

<script>
// @ is an alias to /src
import cTable from '@/components/cTable.vue'

export default {
  name: 'Home',
  components: {
    cTable
  },
  data () {
      return {
          col: [
              {
                  prop: 'xx',
                  label: '用户名',
                  columnAttributes: {}
              },
              {
                  prop: 'xx2',
                  label: '操作',
                  needSlot: true,
                  slotName: 'opration'
              }
          ],
          data: [
              {
                  xx: '1111111',
                  xx2: 222222222
              },
              {
                  xx: '222222222',
                  xx2: 333333333
              },
          ]
      }
  },
  methods: {
      say () {
          this.$log(this.$refs.ctable)
      },
      click (arg) {
        console.log(arg)
    }
  }
}
</script>
