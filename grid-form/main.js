import { fieldSet } from './grid-components'

export default {
  components: { fieldSet },

  props: {
    header: String,
    sections: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },

  computed: {
    formData() {
      return this
        .formValues
        .reduce((form, current) => {
          let { key, value } = current
          let formSection = form[ key ] || (form[ key ] = value)
          return form
        }, {})
    },

    nestedFormData() {
      return this
        .formValues
        .reduce((form, current) => {
          let { section, key, value } = current
          let formSection = form[ section ] || (form[ section ] = {})
          if (!formSection[ key ]) formSection[ key ] = value
          return form
        }, {})
    },

    formValues() {
      return Object
        .keys(this.$refs.fieldSets)
        .reduce((values, section) => {
          const { fieldSets } = this.$refs
          const { fieldRows } = fieldSets[section]

          for (let { fieldContainers } of fieldRows) {
            for (let { key, value, type } of fieldContainers) {
              value = value || null
              if(value && type == 'number') value = +value
              if(typeof value == 'string' && type == 'date') value = new Date(value)
              values.push({ section, key, value })
            }
          }

          return values
        }, [])
    }

  }
}
