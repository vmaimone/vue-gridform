const Vue = require('vue')
const NewUserForm = require('./form-schema')
const InventoryForm = require('./another-form-schema')
const GridForm = require('../grid-form/index.vue')

Vue.config.devtools = true

new Vue({
  el: 'body',
  components: { GridForm },
  data: {
    newUserForm: {
      title: '<h2>New User Application</h2>',
      schema: NewUserForm
    },
    inventoryForm: {
      title: '<h2>Inventory Adjustment</h2>',
      schema: InventoryForm
    },
    activeForm: {},
    viewingSchema: false,
    formResults: null
  },
  methods: {
    viewSchema() {
      this.viewingSchema = !this.viewingSchema
    },
    switchForms(form) {
      this.formResults = {}
      this.activeForm = form
    },
    handleSubmit(a,b) {
      console.log(a,b)
      this.formResults = {
        obj: this.$refs.testForm.formData,
        arr: this.$refs.testForm.formValues
      }
    }
  }
})
