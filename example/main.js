const Vue = require('vue')
const Sections = require('./form-schema')
const GridForm = process.env.NODE_ENV === 'production'
  ? require('../dist/vue-gridform')
  : require('../src/grid-form/gridform.common')

Vue.config.devtools = true

new Vue({
  el: 'body',
  components: { GridForm },
  data: {
    formResults: null,
    formSections: Sections
  },
  methods: {
    handleSubmit(a,b) {
      console.log(a,b)
      this.formResults = this.$refs.testForm.formData
    }
  }
})
