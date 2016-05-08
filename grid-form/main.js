import { fieldSet } from './grid-components'

export default {
  components: { fieldSet },

  props: {
    header: String,
    sections: {
      type: Object,
      required: true
    }
  },

  computed: {
    formData() {
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
            for (let { key, value } of fieldContainers) {
              value = value || null
              values.push({ section, key, value })
            }
          }

          return values
        }, [])
    }

  }
}
