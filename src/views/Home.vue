<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <cTable :colmuns='col' :data="data">
        <template v-slot:name="scope">
            <div>
                {{scope}}
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
                  label: '用户名'
              },
              {
                  prop: 'xx2',
                  label: '操作',
                  slotName: 'name'
              }
          ],
          data: [
              {
                  xx: '1111111',
                  xx2: 2123121
              },
              {
                  xx: '1111111',
                  xx2: 2123121
              },
          ]
      }
  }
}
</script>
