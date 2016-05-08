const Vue = require('vue')
const NewUserForm = require('./form-schema')
const InventoryForm = require('./another-form-schema')
const GridForm = require('../grid-form/gridform.common')

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
      schema: InventoryForm,
      title: '<h2>Inventory Adjustment</h2>'
    },
    activeForm: {},
    formResults: null
  },
  methods: {
    switchForms() {
      this.formResults = {}
      if(this.activeForm == this.newUserForm) {
        this.activeForm = this.inventoryForm
      } else {
        this.activeForm = this.newUserForm
      }
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
