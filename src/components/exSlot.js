// 作用域辅助
export default {
  name: 'exSlot',
  props: {
    scope: {},
    name: {
      type: String
    }
  },
  render() {
    const slotname = this.name, scopedSlots = this.$parent.$parent.$parent.$scopedSlots
    return  Object.keys(scopedSlots).some((name) => name === slotname ) ? scopedSlots[slotname](this.scope) : ''
  }
}